#ifndef API_H
#define API_H

#include <functional>
#include <map>
#include "../Game.h"

namespace api {

using namespace server;

typedef std::function<void (Context& context, nlohmann::json& rspData)> Handler;

class Api {
    public:
        Api();
        // 增加路由
        void AddHandler(const std::string& route, Handler);
        // 移除路由
        void RemoveHandler(const std::string& route);

        void Check(Context& context, nlohmann::json& rspData);
    private:
        std::map<std::string, Handler> handler_map_;
};

}

#endif