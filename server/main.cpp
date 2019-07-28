#include <iostream>
#include <memory>
#include "./game_server/Game.h"
#include "./http_server/Server.h"
#include "./game_server/api/Api.h"
#include "./base/error/Code.h"

// server的static变量安排一下
auto gameApi = api::Api();
auto httpServer = std::shared_ptr<server::Server>(new server::Server);
auto gameServer = std::shared_ptr<server::Game>(new server::Game);
auto errorCode = std::shared_ptr<error::ErrorCode>(new error::ErrorCode);


int main(int argc, char *argv[]) {
	httpServer->Init("7999");

	httpServer->Start();
	
	return 0;
}