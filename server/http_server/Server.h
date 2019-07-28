#ifndef SERVER_H
#define SERVER_H
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <functional>
#include "../common/mongoose.h"

// 定义http返回的callback
// typedef void OnRspCallback(mg_connection* c, std::string);

// typedef std::function<bool (Context& context, OnRspCallback)> ReqHandler;

namespace server {

class Server {
    public:
        Server() {};
        ~Server() {};

        // 初始化，配置准备
        void Init(const std::string& port);
        
        // sever开始监听端口
        bool Start();
        
        // server关闭
        bool Close();
    private:
        // 端口
        std::string m_port_;
        
        // 链接管理器
        mg_mgr m_mgr_;
};

}

#endif