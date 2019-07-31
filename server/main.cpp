#include <iostream>
#include <memory>
#include "./config.h"
#include "./game_server/Game.h"
#include "./http_server/Server.h"
#include "./game_server/api/Api.h"
#include "./base/error/Code.h"
#include "./common/nlohmann/json.hpp"

// server的static变量安排一下
auto gameApi = api::Api();
auto httpServer = std::shared_ptr<server::Server>(new server::Server);
auto gameServer = std::shared_ptr<server::Game>(new server::Game);
auto errorCode = std::shared_ptr<error::ErrorCode>(new error::ErrorCode);


int main(int argc, char *argv[]) {
	std::string path(__CONFIG_PATH__);
	std::ifstream i("../config/default.json");
    
	nlohmann::json defaultConfig;

	i >> defaultConfig;

	std::cout << "加载默认配置" << std::endl;
	std::cout << defaultConfig.dump(4) << std::endl;

	httpServer->Init(std::to_string(defaultConfig["port"].get<int>()));

	httpServer->Start();
	
	return 0;
}