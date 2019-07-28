#include "Game.h"
#include "./api/Api.h"

extern api::Api gameApi;

namespace server {

void Game::Connecte(mg_connection* connection) {
    std::cout << "client websocket connected" << std::endl;

    // 获取连接客户端的IP和端口
    char addr[32];
    mg_sock_addr_to_str(&connection->sa, addr, sizeof(addr), MG_SOCK_STRINGIFY_IP | MG_SOCK_STRINGIFY_PORT);
    printf("client addr: %s\n", addr);

    // 添加set
    connections_.insert(connection);
}

void Game::Receive(mg_connection* connection, websocket_message* ws_msg) {
    Context context(this, connection, ws_msg);

    nlohmann::json response = {
        {"id", context.msgId()},
        {"body", {}}
    };
    
    gameApi.Check(context, response["body"]);

    std::string msg(response.dump());

    mg_send_websocket_frame(connection, WEBSOCKET_OP_TEXT, msg.c_str(), strlen(msg.c_str()));
}

void Game::Close(mg_connection* connection) {
    // 模拟LeaveGame
    Context context(this, connection, "Game.LeaveGame");

    nlohmann::json response = {
        {"id", context.msgId()},
        {"body", {}}
    };
    
    gameApi.Check(context, response);

    // 从连接池移除
    connections_.erase(connection);
}

} // namespace server