#ifndef SERVER_HELP_H
#define SERVER_HELP_H

#include "../common/mongoose.h"
#include "../common/nlohmann/json.hpp"
#include "Server.h"
#include "../game_server/Game.h"
#include <string>

extern server::Server* httpServer;
extern server::Game* gameServer;

namespace server {

void HandleHttpEvent(mg_connection* connection, http_message* http_req);
void HandleWebsocketMessage(mg_connection* connection, int event_type, websocket_message* ws_msg);

/**
 * 监听http和websocket的回调
 */
void OnHttpWebsocketEvent(mg_connection* connection, int event_type, void* event_data) {
    if (event_type == MG_EV_HTTP_REQUEST) {
        http_message* http_req = (http_message*) event_data;
        HandleHttpEvent(connection, http_req);
    } else if (
        event_type == MG_EV_WEBSOCKET_HANDSHAKE_DONE ||
        event_type == MG_EV_WEBSOCKET_FRAME ||
        event_type == MG_EV_CLOSE
    ) {
        websocket_message* ws_message = (struct websocket_message*) event_data;
        
        HandleWebsocketMessage(connection, event_type, ws_message);
    }
}

void HandleWebsocketMessage(mg_connection* connection, int event_type, websocket_message* ws_msg) {
    if (event_type == MG_EV_WEBSOCKET_HANDSHAKE_DONE) {
        gameServer->Connecte(connection);
	} else if (event_type == MG_EV_WEBSOCKET_FRAME) {
        gameServer->Receive(connection, ws_msg);
	} else if (event_type == MG_EV_CLOSE) {
		gameServer->Close(connection);
	}
}

void HandleHttpEvent(mg_connection* connection, http_message* http_req) {
    // std::string req_str = std::string(http_req->message.p, http_req->message.len);

    // // 先过滤是否已注册的函数回调
	// std::string url = std::string(http_req->uri.p, http_req->uri.len);
	// std::string body = std::string(http_req->body.p, http_req->body.len);

    // Context context = Context(url, body, connection);
    // auto it = httpServer->s_handler_map_.find(url);
    // if (it != httpServer->s_handler_map_.end()) {
    //     ReqHandler handle_func = it->second;
    //     handle_func(context, SendHttpRsp);
    // }
}

void SendHttpRsp(mg_connection* connection, std::string rsp) {
	// 必须先发送header, 也可以用HTTP/2.0
	mg_printf(connection, "%s", "HTTP/1.1 200 OK\r\nTransfer-Encoding: chunked\r\n\r\n");
	// 以json形式返回
	mg_printf_http_chunk(connection, "{ \"result\": %s }", rsp.c_str());
	// 发送空白字符快，结束当前响应
	mg_send_http_chunk(connection, "", 0);
}

}

#endif