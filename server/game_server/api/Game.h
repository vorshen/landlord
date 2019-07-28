#ifndef API_GAME_H
#define API_GAME_H

#include "../Game.h"
#include "./Hall.h"
#include "../../base/error/Code.h"

namespace api {

void EnterGame(Context& context, nlohmann::json& rspData) {
    nlohmann::json body = context.body();

    std::string uid = body["uid"].get<std::string>();
    std::string name = body["name"].get<std::string>();
    
    context.server()->sessionService()->Create(uid, name, context.connection());

    rspData["retcode"] = error::ErrorCodeType::SUCCESS;
}

void LeaveGame(Context& context, nlohmann::json& rspData) {
    Session* session = context.server()->sessionService()->Get(context.connection());
    
    // 判断是否需要从房间移除
    if (session->roomId() != "") {
        LeaveRoom(context, rspData);
        // std::string roomId = session->roomId();
        // 存在roomId，意味着是从房间离开的
        // context.server()->roomService()->Get(roomId)->PlayerLeaveRoom(session->uid());
    }

    // session移除
    context.server()->sessionService()->Destroy(context.connection());

    rspData["retcode"] = error::ErrorCodeType::SUCCESS;
}

};

#endif