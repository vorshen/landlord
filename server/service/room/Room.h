#ifndef ROOM_H
#define ROOM_H

#include <iostream>
#include <vector>
#include <string>
#include "./Player.h"
#include "../common/nlohmann/json.hpp"
#include "../puke-center/PukeCenterService.h"

namespace service {

namespace room {

// 房间状态
enum class ROOM_STATUS {
    WAIT,    // 准备阶段
    ASK,    // 叫地主阶段
    GRAB,    // 抢地主阶段
    PLAYING    // 开始阶段
};

class Room {
    public:
        Room(const std::string& rid);

        ~Room();

        // 获取房间id
        std::string rid() {return rid_;};

        // 获取当前玩家数量
        int playerAmount() {return playerAmount_;};

        // 玩家进入房间
        void PlayerEnterRoom(
            const std::string& uid,
            const std::string& name,
            mg_connection* connection
        );

        // 玩家离开房间
        void PlayerLeaveRoom(const std::string& uid);;

        // 玩家准备
        void PlayerReady(const std::string& uid, bool isReady);

        // 玩家叫地主
        void PlayerAskLandlord(const std::string& uid, bool isAsk);

        // 玩家抢地主
        void PlayerGrabLandlord(const std::string& uid, bool isGrab);

        // 玩家出牌
        void PlayerShotPukes(const std::string& uid, const std::vector<puke::puke_string>& pukes);

        // 初始化扑克牌
        void InitPukes(PukeCenterService* pukeCenterService);

        // 进入叫地主阶段
        void EnterAskLandlord();

        // 进入抢地主阶段
        void EnterGrabLandlord();

        // 继续抢地主
        void LoopGrabLandlord();

        // 游戏开始
        void GameStart();

        // 继续出牌
        void LoopPukes();

        // 游戏结束
        void GameOver();

        // 判断游戏是否结束(判断规则，最大出牌者，手上的牌是否出完)
        bool HasGameOver();

        // 获取wait迭代器指向的玩家
        inline Player* GetWaitIteratorPlayer() {return *wait_iterator_;};

        // 获取run迭代器指向的玩家
        inline Player* GetRunIteratorPlayer() {return *run_iterator_;};

        // 获取地主的扑克牌
        inline std::vector<puke::puke_string> GetLandlordPukesCache() {return landlord_pukes_cache_;};

        // 获取桌面上最大的牌
        inline std::vector<puke::puke_string> GetDesktopPukes() {return desktop_pukes_;};

        // 获取具体的玩家
        Player* GetPlayer(const std::string& uid);

        // 获取房间已有用户的uid
        std::vector<std::string> GetPlayersUid();

        // 获取房间状态
        inline ROOM_STATUS status() {return status_;};

        // 房间所有人推送消息
        void PushMessage(const nlohmann::json& data);;

        // 房间部分人推送消息
        void PushMessageByUids(const std::vector<std::string>& uids, const nlohmann::json& data);

        // 遍历playVector执行参数的函数
        void Each(std::function<void (Player*)>);
    private:
        // 房间id
        std::string rid_;

        // 当前房间状态
        ROOM_STATUS status_;

        // 玩家
        std::vector<Player*> player_vector_;

        // 当前玩家数量
        int playerAmount_ = 0;

        // 等待的迭代器
        std::vector<Player*>::const_iterator wait_iterator_;

        // 追赶的迭代器(追waitIterator)
        std::vector<Player*>::const_iterator run_iterator_;

        // 地主的扑克牌
        std::vector<puke::puke_string> landlord_pukes_cache_;

        // 桌面上最大的扑克牌
        std::vector<puke::puke_string> desktop_pukes_;

        // 桌面上最大扑克牌的出牌者
        Player* desktop_pukes_owner_;

        // 已经进行的回合数，这个也和叫地主的位置有关系
        int has_round_;

        void PushMessageByUid(mg_connection* connection, const nlohmann::json& data);

        std::vector<Player*>::const_iterator NextIterator(std::vector<Player*>::const_iterator it);
};

} // namespace room

} // namespace service

#endif