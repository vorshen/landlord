#ifndef API_ROOM_H
#define API_ROOM_H

#include "../Game.h"
#include "../../base/error/Code.h"

extern error::ErrorCode* errorCode;

namespace api {

/**
 * 将一个uids vector去掉对应的uid
 */
void EraseUids(std::vector<std::string>& uids, std::string& uid) {
    for (auto it = uids.begin(); it != uids.end(); it++) {
        if (*it == uid) {
            uids.erase(it);

            return;
        }
    }
}

/**
 * 玩家准备
 */
void Ready(Context& context, nlohmann::json& rspData) {
    std::string rid = context.body()["rid"].get<std::string>();
    Room* room = context.server()->roomService()->Get(rid);

    if (room == nullptr) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_ROOM_UNDEFINED;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_ROOM_UNDEFINED);
        return;
    }

    Session* session = context.server()->sessionService()->Get(context.connection());
    std::string uid = session->uid();

    bool isReady = context.body()["isReady"].get<bool>();
    room->PlayerReady(uid, isReady);

    // 生成玩家准备的消息
    nlohmann::json data = {
        {"route", "Room.PlayerReady"},
        {"data", {
            {"player", uid},
            {"isReady", isReady}
        }}
    };

    // 获取房间中还在的玩家
    std::vector<std::string> existUids = room->GetPlayersUid();

    // 发请求的玩家踢掉，只回调，不推送
    EraseUids(existUids, uid);

    // 通知玩家准备的消息
    room->PushMessageByUids(existUids, data);

    // 检测用户是否都准备了
    bool isAllReady = true;

    room->Each([&isAllReady](Player* player)->void {
        if (player == nullptr) {
            isAllReady = false;
        } else {
            if (!player->ready()) {
                isAllReady = false;
            }
        }
        
    });

    // 判断一下是不是全部准备好了
    if (isAllReady) {
        // 如果全部准备好了，先发牌
        std::cout << "init pukes" << std::endl;
        room->InitPukes(context.server()->pukeCenterService());

        // 再进入叫地主状态
        room->EnterAskLandlord();

        // 生成数据通知进入叫地主状态的消息
        data = {
            {"route", "Room.EnterAskLandlord"},
            {"data", {
                {"askPlayer", room->GetWaitIteratorPlayer()->uid()}
            }}
        };

        room->Each([data, room](Player* player)->void {
            auto playerData = data;
            playerData["data"]["pukes"] = player->Pukes();

            room->PushMessageByUids(std::vector<std::string>{player->uid()}, playerData);
        });
    }

    rspData["retcode"] = error::ErrorCodeType::SUCCESS;
}

/**
 * 玩家叫地主
 */
void AskLandlord(Context& context, nlohmann::json& rspData) {
    std::string rid = context.body()["rid"].get<std::string>();
    Room* room = context.server()->roomService()->Get(rid);

    if (room == nullptr) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_ROOM_UNDEFINED;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_ROOM_UNDEFINED);
        return;
    }

    Session* session = context.server()->sessionService()->Get(context.connection());
    std::string uid = session->uid();

    if (uid != room->GetWaitIteratorPlayer()->uid()) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_ASK_LANDLORD_CERT;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_ASK_LANDLORD_CERT);
        return;
    }

    bool isAsk = context.body()["isAsk"].get<bool>();
    room->PlayerAskLandlord(uid, isAsk);

    // 生成玩家准备的消息
    nlohmann::json data = {
        {"route", "Room.PlayerAskLandlord"},
        {"data", {
            {"player", uid},
            {"isAsk", isAsk}
        }}
    };

    // 获取房间中还在的玩家
    std::vector<std::string> existUids = room->GetPlayersUid();

    // 发请求的玩家踢掉，只回调，不推送
    EraseUids(existUids, uid);

    room->PushMessageByUids(existUids, data);

    // 叫完地主，进入抢地主的状态
    room->EnterGrabLandlord();

    // 生成玩家抢地主的消息
    data = {
        {"route", "Room.EnterGrabLandlord"},
        {"data", {
            {"grabPlayer", room->GetRunIteratorPlayer()->uid()}
        }}
    };

    room->PushMessage(data);

    rspData["retcode"] = error::ErrorCodeType::SUCCESS;;
}

/**
 * 玩家抢地主
 */
void GrabLandlord(Context& context, nlohmann::json& rspData) {
    std::string rid = context.body()["rid"].get<std::string>();
    Room* room = context.server()->roomService()->Get(rid);

    if (room == nullptr) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_ROOM_UNDEFINED;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_ROOM_UNDEFINED);
        return;
    }

    Session* session = context.server()->sessionService()->Get(context.connection());
    std::string uid = session->uid();

    if (uid != room->GetRunIteratorPlayer()->uid()) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_GRAB_LANDLORD_CERT;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_GRAB_LANDLORD_CERT);
        return;
    }

    bool isGrab = context.body()["isGrab"].get<bool>();
    room->PlayerGrabLandlord(uid, isGrab);

    // 生成玩家准备的消息
    nlohmann::json data = {
        {"route", "Room.PlayerGrabLandlord"},
        {"data", {
            {"player", uid},
            {"isGrab", isGrab}
        }}
    };

    // 获取房间中还在的玩家
    std::vector<std::string> existUids = room->GetPlayersUid();

    // 发请求的玩家踢掉，只回调，不推送
    EraseUids(existUids, uid);

    room->PushMessageByUids(existUids, data);

    // 判断当前抢地主的人，是不是和叫地主的是一个人
    if (uid == room->GetWaitIteratorPlayer()->uid()) {
        // 是一个人，那么抢地主就结束了，游戏正式开始
        room->GameStart();

        data = {
            {"route", "Room.GameStart"},
            {"data", {
                {"landlordPlayer", room->GetRunIteratorPlayer()->uid()},
                {"landlordPukes", room->GetLandlordPukesCache()}
            }}
        };

        room->PushMessage(data);
    } else {
        // 不是一个人，那么继续走抢地主的逻辑
        room->LoopGrabLandlord();

        // 生成玩家抢地主的消息
        data = {
            {"route", "Room.EnterGrabLandlord"},
            {"data", {
                {"grabPlayer", room->GetRunIteratorPlayer()->uid()}
            }}
        };

        room->PushMessage(data);
    }
    
    rspData["retcode"] = error::ErrorCodeType::SUCCESS;
}

/**
 * 玩家出牌
 */
void Pukes(Context& context, nlohmann::json& rspData) {
    std::string rid = context.body()["rid"].get<std::string>();
    Room* room = context.server()->roomService()->Get(rid);

    if (room == nullptr) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_ROOM_UNDEFINED;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_ROOM_UNDEFINED);
        return;
    }

    Session* session = context.server()->sessionService()->Get(context.connection());
    std::string uid = session->uid();

    if (uid != room->GetRunIteratorPlayer()->uid()) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_SHOT_PUKES_CERT;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_SHOT_PUKES_CERT);
        return;
    }

    nlohmann::json pukesData = context.body()["pukes"];
    std::vector<puke::puke_string> pukes;

    for (nlohmann::json::iterator it = pukesData.begin(); it != pukesData.end(); ++it) {
        std::cout << *it << std::endl;
        pukes.push_back(*it);
    }

    if (pukes.size() > 0) {
        // 意味着用户有出牌

        // 判断大小是否合法
        PukeCenterService* pukeCenterService = context.server()->pukeCenterService();
        if (!pukeCenterService->Compare(room->GetDesktopPukes(), pukes)) {
            rspData["retcode"] = error::ErrorCodeType::ERROR_PUKES_SMALL;
            rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_PUKES_SMALL);
            return;
        }

        room->PlayerShotPukes(uid, pukes);
    } else {
        // 用户选择不要
    }

    // 生成玩家准备的消息
    nlohmann::json data = {
        {"route", "Room.PlayerShotPukes"},
        {"data", {
            {"player", uid},
            {"pukes", pukes}
        }}
    };

    // 获取房间中还在的玩家
    std::vector<std::string> existUids = room->GetPlayersUid();

    // 发请求的玩家踢掉，只回调，不推送
    EraseUids(existUids, uid);

    room->PushMessageByUids(existUids, data);

    // todo/判断游戏是否结束
    if (room->HasGameOver()) {
        // 游戏结束
        room->GameOver();
        data = {
            {"route", "Room.GameOver"},
            {"data", {
                {"player", room->GetRunIteratorPlayer()->uid()},
            }}
        };

        room->PushMessage(data);
    } else {
        // 游戏没有结束
        room->LoopPukes();
        data = {
            {"route", "Room.LoopPukes"},
            {"data", {
                {"player", room->GetRunIteratorPlayer()->uid()},
            }}
        };

        room->PushMessage(data);
    }

    rspData["retcode"] = error::ErrorCodeType::SUCCESS;
}

}

#endif