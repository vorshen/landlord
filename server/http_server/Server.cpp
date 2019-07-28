#include <iostream>
#include <stdlib.h>
#include "Server.h"
#include "ServerHelp.h"

namespace server {

/**
 * 初始化，准备端口
 */
void Server::Init(const std::string& port) {
    m_port_ = port;
}

/**
 * server启动
 * 链接管理器开启
 * 端口开始监听
 */
bool Server::Start() {
    mg_mgr_init(&m_mgr_, nullptr);

    mg_connection* connection = mg_bind(&m_mgr_, m_port_.c_str(), OnHttpWebsocketEvent);

    if (connection == nullptr) {
        return false;
    }

    mg_set_protocol_http_websocket(connection);

    printf("starting http server at port: %s\n", m_port_.c_str());

    // loop
    while (true) {
        mg_mgr_poll(&m_mgr_, 500);
    }

    return true;
}

/**
 * server关闭
 */
bool Server::Close() {
	mg_mgr_free(&m_mgr_);
	return true;
}

}