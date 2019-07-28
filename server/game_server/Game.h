#ifndef GAME_H
#define GAME_H

#include <iostream>
#include "../common/mongoose.h"
#include "../common/nlohmann/json.hpp"
#include "../service/session/SessionService.h"
#include "../service/room/RoomService.h"
#include "../service/puke-center/PukeCenterService.h"
#include <set>

namespace server {

using namespace service;
using namespace room;
using namespace session;

class Game {
    public:
        Game(): 
            sessionService_(new SessionService), 
            roomService_(new RoomService),
            pukeCenterService_(new PukeCenterService) {};
        ~Game() {};

        // 用户连接上game server
        void Connecte(mg_connection* connection);

        // 用户发送消息
        void Receive(mg_connection* connection, websocket_message* ws_msg);

        // 用户断开game server
        void Close(mg_connection* connection);
    
        SessionService* sessionService() {return sessionService_;};

        RoomService* roomService() {return roomService_;};

        PukeCenterService* pukeCenterService() {return pukeCenterService_;};
    private:
        std::set<mg_connection*> connections_;

        SessionService* sessionService_;

        RoomService* roomService_;

        PukeCenterService* pukeCenterService_;
};

class Context {
    public:
        Context(Game* server, mg_connection* connection, websocket_message* ws_msg): server_(server), connection_(connection) {
            std::string msg(reinterpret_cast<char*>(ws_msg->data), ws_msg->size);
            nlohmann::json data = nlohmann::json::parse(msg);

            msgId_ = data["id"].get<int>();
            route_ = data["route"].get<std::string>();
            body_ = data["body"].get<nlohmann::json>();
        };
        Context(Game* server, mg_connection* connection, std::string route): server_(server), connection_(connection), route_(route) {};

        int msgId() {return msgId_;};

        std::string route() {return route_;};

        nlohmann::json& body() {return body_;};

        mg_connection* connection() {return connection_;};
        
        Game* server() {return server_;};
    private:
        int msgId_;
        std::string route_;
        mg_connection* connection_;
        nlohmann::json body_;
        Game* server_;
};

}


#endif