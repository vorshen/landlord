#include "./Api.h"

#include "./Game.h"
#include "./Hall.h"
#include "./Room.h"

namespace api {

Api::Api() {
    AddHandler("Game.EnterGame", EnterGame);

    AddHandler("Game.LeaveGame", LeaveGame);

    AddHandler("Hall.CreateRoom", CreateRoom);

    AddHandler("Hall.EnterRoom", EnterRoom);

    AddHandler("Hall.LeaveRoom", LeaveRoom);

    AddHandler("Room.Ready", Ready);

    AddHandler("Room.AskLandlord", AskLandlord);

    AddHandler("Room.GrabLandlord", GrabLandlord);

    AddHandler("Room.Pukes", Pukes);
}

void Api::AddHandler(const std::string& route, Handler handler) {
    if (handler_map_.find(route) != handler_map_.end()) {
        return;
    }

    handler_map_.insert(std::make_pair(route, handler));
}

void Api::RemoveHandler(const std::string& route) {
    auto it = handler_map_.find(route);
    if (it != handler_map_.end()) {
        handler_map_.erase(it);
    }
}

void Api::Check(Context& context, nlohmann::json& data) {
    std::string route = context.route();

    auto it = handler_map_.find(route);

    if (it == handler_map_.end()) {
        // 异常
        std::cout << "异常，没有找到handle" << std::endl;
        return;
    }

    Handler handler = it->second;

    handler(context, data);
}

}