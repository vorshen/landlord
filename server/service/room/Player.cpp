#include "./Player.h"
#include <iostream>

namespace service {

namespace room {

Player::Player(
    const std::string& uid, 
    const std::string& name, 
    const int position, 
    mg_connection* connection
):
    uid_(uid), 
    name_(name), 
    position_(position),
    connection_(connection), 
    ready_(false),
    landlord_(false),
    landlordScore_(0), 
    pukesAmount_(0) {

}

void Player::ResetPukes() {
    pukesAmount_ = 0;

    pukes_.clear();
}

std::vector<puke::puke_string> Player::Pukes() {
    std::vector<puke::puke_string> result;
    for (auto it = pukes_.begin(); it != pukes_.end(); it++) {
        for (int i = 0; i < it->second; i++) {
            result.push_back(it->first);
        }
    }

    return result;
}

void Player::GetPukes(const std::vector<puke::puke_string>& pukes) {
    for (puke::puke_string puke : pukes) {
        auto pukeIt = pukes_.find(puke);

        if (pukeIt == pukes_.end()) {
            // 没有牌的key，就创建对应的key
            pukes_.insert(std::make_pair(puke, 1));
        } else {
            // 已经有对应牌的key了，就增加牌的数量
            pukeIt->second += 1;
        }

        pukesAmount_++;
    }
}

void Player::PutPukes(const std::vector<puke::puke_string>& pukes) {
    for (puke::puke_string puke : pukes) {
        auto pukeIt = pukes_.find(puke);

        assert(pukeIt != pukes_.end());
        assert(pukeIt->second > 0);

        pukeIt->second -= 1;
        pukesAmount_--;
    }
}

void Player::Print() {
    for (auto it = pukes_.cbegin(); it != pukes_.cend(); it++) {
        puke::Puke puke = puke::Puke::Unserialize(it->first);

        std::cout << puke.name() << " " << it->second << "张" << std::endl;
    }
}

} // namespace service

} // namespace room