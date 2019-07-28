#ifndef API_HALL_H
#define API_HALL_H

#include <iostream>
#include "../Game.h"
#include "../../base/error/Code.h"

extern error::ErrorCode* errorCode;

namespace service {
namespace room {
    int RandomRoomId();
} // namespace service
} // namespace room

namespace api {

/**
 * 玩家创建房间
 */
void CreateRoom(Context& context, nlohmann::json& rspData) {
    int randomId = service::room::RandomRoomId();

    std::string rid = {std::to_string(randomId)};
    Room* room = context.server()->roomService()->Create(rid);
    
    Session* session = context.server()->sessionService()->Get(context.connection());
    
    room->PlayerEnterRoom(session->uid(), session->name(), context.connection());
    
    session->BindRoom(rid);

    rspData["retcode"] = error::ErrorCodeType::SUCCESS;
    rspData["roomId"] = rid;
    rspData["players"] = {};
    rspData["players"][session->uid()] = {
        {"playerName", session->name()},
        {"position", 0}
    };
}

/**
 * 玩家进入房间
 */
void EnterRoom(Context& context, nlohmann::json& rspData) {
    std::string rid = context.body()["rid"].get<std::string>();
    Room* room = context.server()->roomService()->Get(rid);

    if (room == nullptr) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_ROOM_UNDEFINED;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_ROOM_UNDEFINED);
        return;
    }

    // 先获取房间中已经在的玩家
    std::vector<std::string> existUids = room->GetPlayersUid();

    Session* session = context.server()->sessionService()->Get(context.connection());
    std::string uid = session->uid();
    room->PlayerEnterRoom(uid, session->name(), context.connection());

    session->BindRoom(rid);

    // 先找到新玩家在哪个位置
    Player* newPlayer = room->GetPlayer(uid);

    // 生成玩家进入房间的消息
    nlohmann::json data = {
        {"route", "Room.PlayerEnterRoom"},
        {"data", {
            {"playerUid", uid},
            {"playerName", session->name()},
            {"position", newPlayer->position()}
        }}
    };

    // 新玩家的位置推送给之前就在房间的人
    room->PushMessageByUids(existUids, data);

    // 重新获取房间中的玩家情况
    existUids = room->GetPlayersUid();

    // 告诉新玩家，房间分布状态
    rspData["retcode"] = error::ErrorCodeType::SUCCESS;
    rspData["players"] = {};
    for (auto it = existUids.begin(); it != existUids.end(); it++) {
        rspData["players"][*it] = {
            {"playerName", room->GetPlayer(*it)->name()},
            {"position", room->GetPlayer(*it)->position()}
        };
    }
}

/**
 * 玩家离开房间
 */
void LeaveRoom(Context& context, nlohmann::json& rspData) {
    Session* session = context.server()->sessionService()->Get(context.connection());
    std::string rid = session->roomId();
    
    Room* room = context.server()->roomService()->Get(rid);

    if (room == nullptr) {
        rspData["retcode"] = error::ErrorCodeType::ERROR_ROOM_UNDEFINED;
        rspData["err_msg"] = errorCode->GetErrorMessage(error::ErrorCodeType::ERROR_ROOM_UNDEFINED);
        return;
    }

    std::string uid = session->uid();

    room->PlayerLeaveRoom(uid);

    session->UnbindRoom();

    rspData["retcode"] = error::ErrorCodeType::SUCCESS;

    // 如果房间人数空了，那就销毁房间
    if (room->playerAmount() == 0) {
        context.server()->roomService()->Destroy(rid);
        return;
    }

    // 生成玩家离开的消息
    nlohmann::json data = {
        {"route", "Room.PlayerLeaveRoom"},
        {"data", {
            {"player", uid}
        }}
    };

    // 获取房间中还在的玩家
    std::vector<std::string> existUids = room->GetPlayersUid();

    // 通知玩家离开的消息
    room->PushMessageByUids(existUids, data);
}

}

#endif