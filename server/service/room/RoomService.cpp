#include "RoomService.h"
#include <stdexcept>

namespace service {

namespace room {

// 随机房间id
int RandomRoomId() {
    std::srand((time(nullptr)));

    return (std::abs(std::rand()) + 1000) % 1000;
}

RoomService::~RoomService() {
    for (auto it = rooms_map_.cbegin(); it != rooms_map_.cend(); it++) {
        delete it->second;
    }
}

Room* RoomService::Create(const std::string& roomId) {
    Room* room = new Room(roomId);
    rooms_map_.insert(std::pair<std::string, Room*>(roomId, room));

    return room;
}

Room* RoomService::Get(const std::string& roomId) {
    auto it = rooms_map_.find(roomId);

    if (it == rooms_map_.end()) {
        return nullptr;
    } else {
        return it->second;
    }
}

void RoomService::Destroy(const std::string& roomId) {
    Room* room = Get(roomId);

    if (room != nullptr) {
        delete room;
    }

    rooms_map_.erase(roomId);
}

} // namespace room

} // namespace service