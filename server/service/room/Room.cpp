#include "./Room.h"

namespace service {

namespace room {

Room::Room(
    const std::string& rid
): 
    rid_(rid), 
    playerAmount_(0), 
    status_(ROOM_STATUS::WAIT), 
    player_vector_(3, nullptr), 
    has_round_(0) 
{
    std::cout << "new room, rid: " << rid_ << std::endl;
}

Room::~Room() {
    std::cout << "destroy room, rid: " << rid_ << std::endl;
}

void Room::PlayerEnterRoom(
    const std::string& uid,
    const std::string& name,
    mg_connection* connection
) {
    std::cout << "user enter room" << std::endl;

    assert(this->playerAmount_ < 3);

    // 先找到空的位置
    int pos = 0;
    for (; pos < player_vector_.size(); pos++) {
        if (player_vector_[pos] == nullptr) {
            // 找到空位置了
            break;
        }
    }

    Player* player = new Player(uid, name, pos, connection);

    player_vector_[pos] = player;

    playerAmount_++;
}

void Room::PlayerLeaveRoom(
    const std::string& uid
) {
    std::cout << "user leave room" << std::endl;

    Player* player = GetPlayer(uid);
    int pos = player->position();

    assert(player != nullptr);

    delete player;
    // 手动修改一下
    player_vector_[pos] = nullptr;

    playerAmount_--;
}

void Room::PlayerReady(const std::string& uid, bool isReady) {
    std::cout << "user ready" << std::endl;

    Player* player = GetPlayer(uid);

    assert(player != nullptr);

    player->SetReady(isReady);
}

void Room::PlayerAskLandlord(const std::string& uid, bool isAsk) {
    std::cout << "user ask landlord" << std::endl;

    Player* player = GetPlayer(uid);

    assert(player != nullptr);

    player->AskLandlord(isAsk);
}

void Room::PlayerGrabLandlord(const std::string& uid, bool isGrab) {
    std::cout << "user grab landlord" << std::endl;

    Player* player = GetPlayer(uid);

    assert(player != nullptr);

    player->GrabLandlord(isGrab);
}

void Room::PlayerShotPukes(const std::string& uid, const std::vector<puke::puke_string>& pukes) {
    std::cout << "user shot pukes" << std::endl;

    Player* player = GetPlayer(uid);

    assert(player != nullptr);

    player->PutPukes(pukes);
    desktop_pukes_owner_ = player;
    desktop_pukes_ = pukes;
}

void Room::InitPukes(PukeCenterService* pukeCenterService) {
    std::vector<std::vector<puke::puke_string> > pukes = pukeCenterService->GetPukes(3, 3);

    player_vector_[0]->GetPukes(pukes[0]);
    player_vector_[1]->GetPukes(pukes[1]);
    player_vector_[2]->GetPukes(pukes[2]);

    landlord_pukes_cache_ = pukes[3];
}

void Room::EnterAskLandlord() {
    status_ = ROOM_STATUS::ASK;

    // 默认叫地主的从第一个开始
    wait_iterator_ = player_vector_.begin() + has_round_ % 3;

    // 默认叫地主的，初始地主分数为10分
    (*wait_iterator_)->SetLandlordScore(10);
}

void Room::EnterGrabLandlord() {
    status_ = ROOM_STATUS::GRAB;

    // 抢地主的
    run_iterator_ = NextIterator(wait_iterator_);
}

void Room::LoopGrabLandlord() {
    run_iterator_ = NextIterator(run_iterator_);
}

void Room::GameStart() {
    assert(playerAmount_ == 3);

    // 找到谁的地主积分最高
    Player* maxPlayer = nullptr;
    int maxScore = 0;

    Each([&](Player* player)->void {
        if (player->landlordScore() > maxScore) {
            maxPlayer = player;
            maxScore = player->landlordScore();
        }
    });

    maxPlayer->SetLandlord(true);
    maxPlayer->GetPukes(landlord_pukes_cache_);

    wait_iterator_ = player_vector_.cbegin() + maxPlayer->position();
    run_iterator_ = wait_iterator_;
}

void Room::LoopPukes() {
    run_iterator_ = NextIterator(run_iterator_);

    // loop之后，如果相等，意味着回到了出牌者，那么桌面的牌就置空了
    if (*run_iterator_ == desktop_pukes_owner_) {
        desktop_pukes_.clear();
    }
}

void Room::GameOver() {
    status_ = ROOM_STATUS::WAIT;

    Each([](Player* player)->void {
        // 重置准备
        player->SetReady(false);

        // 重置地主分数
        player->SetLandlordScore(0);

        // 重置地主
        player->SetLandlord(false);

        // 重置手上的牌
        player->ResetPukes();
    });

    // 将默认叫地主的位置后挪一下
    has_round_++;
}

bool Room::HasGameOver() {
    if (desktop_pukes_owner_->GetPukesAmount() == 0) {
        return true;
    }

    return false;
}

Player* Room::GetPlayer(const std::string& uid) {
    for (auto it = player_vector_.begin(); it != player_vector_.end(); it++) {
        if (*it != nullptr && (*it)->uid() == uid) {
            return *it;
        }
    }

    return nullptr;
}

std::vector<std::string> Room::GetPlayersUid() {
    std::vector<std::string> result;

    for (auto it = player_vector_.begin(); it != player_vector_.end(); it++) {
        if (*it != nullptr) {
            result.push_back((*it)->uid());
        }
    }

    return result;
}

void Room::PushMessage(const nlohmann::json& data) {
    for (auto it = player_vector_.begin(); it != player_vector_.end(); it++) {
        if (*it != nullptr) {
            Player* player = *it;

            PushMessageByUid(player->connection(), data);
        }
    }
}

void Room::PushMessageByUids(const std::vector<std::string>& uids, const nlohmann::json& data) {
    for (auto uidIt = uids.begin(); uidIt != uids.end(); uidIt++) {
        for (auto it = player_vector_.begin(); it != player_vector_.end(); it++) {
            if (*it != nullptr && (*it)->uid() == *uidIt) {
                Player* player = *it;

                PushMessageByUid(player->connection(), data);
            }
        }
    }
}

void Room::PushMessageByUid(mg_connection* connection, const nlohmann::json& data) {
    std::string msg(data.dump());
    
    mg_send_websocket_frame(connection, WEBSOCKET_OP_TEXT, msg.c_str(), strlen(msg.c_str()));
}

void Room::Each(std::function<void (Player*)> func) {
    for (auto it = player_vector_.begin(); it != player_vector_.end(); it++) {
        func(*it);
    }
}

std::vector<Player*>::const_iterator Room::NextIterator(std::vector<Player*>::const_iterator it) {
    it++;

    if (it == player_vector_.cend()) {
        it = player_vector_.cbegin();
    }

    return it;
}

} // namespace room

} // namespace service