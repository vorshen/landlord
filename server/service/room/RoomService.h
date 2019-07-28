#ifndef ROOM_SERVICE_H
#define ROOM_SERVICE_H

#include <map>
#include <stdlib.h> 
#include <time.h>  
#include "./Room.h"

namespace service {

namespace room {

class RoomService {
    public:
        RoomService() = default;
        ~RoomService();
        RoomService(const RoomService& that) = delete;
        RoomService& operator=(const RoomService& that) = delete;
        RoomService(RoomService&& that) = delete;
        RoomService& operator=(RoomService&& that) = delete;

        // 创建房间
        Room* Create(const std::string& roomId);

        // 获取房间
        Room* Get(const std::string& roomId);

        // 销毁房间
        void Destroy(const std::string& roomId);
    private:
        std::map<std::string, Room*> rooms_map_;
};

} // namespace room

} // namespace service

#endif