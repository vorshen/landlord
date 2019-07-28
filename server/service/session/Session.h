#ifndef SESSION_H
#define SESSION_H

#include <string>
#include "../../common/mongoose.h"

namespace service {

namespace session {

class Session {
    public:
        template <typename T1, typename T2>
        Session(
            T1&& uid, 
            T2&& name,
            mg_connection* connection
        ): 
            uid_(uid), 
            name_(name),
            connection_(connection) {};

        template <typename T>
        void BindRoom(T&& roomId) {roomId_ = roomId;};
        void UnbindRoom() {roomId_ = "";};

        std::string uid() {return uid_;};
        std::string name() {return name_;};
        std::string roomId() {return roomId_;};
    private:
        // 用户唯一id
        std::string uid_;
        // 用户名称
        std::string name_;
        // socket连接
        mg_connection* connection_;

        std::string roomId_;
};

} // namespace session

} // namespace service

#endif