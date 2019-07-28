#ifndef PLAYER_H
#define PLAYER_H

#include <string>
#include <map>
#include "../../common/mongoose.h"
#include "../../base/puke/Puke.h"

namespace service {

namespace room {

class Player {
    public:
        Player(
            const std::string& uid, 
            const std::string& name, 
            const int position, 
            mg_connection* connection
        );
        ~Player() = default;

        inline std::string uid() {return uid_;};

        inline std::string name() {return name_;};

        inline int position() {return position_;};

        inline bool landlord() {return landlord_;};

        inline int landlordScore() {return landlordScore_;};

        inline bool ready() {return ready_;};

        inline mg_connection* connection() {return connection_;};

        void ResetPukes();

        // 获取剩余扑克牌数量
        inline int GetPukesAmount() {return pukesAmount_;};

        // 按数组形式，返回手上的扑克牌
        std::vector<puke::puke_string> Pukes();

        // 获取扑克牌
        void GetPukes(const std::vector<puke::puke_string>& pukes);

        // 出牌
        void PutPukes(const std::vector<puke::puke_string>& pukes);

        // 设置是否准备
        void SetReady(bool isReady) {ready_ = isReady;};

        // 设置默认的地主分数
        inline void SetLandlordScore(int score) {
            landlordScore_ = score;
        }

        // 叫地主
        inline void AskLandlord(bool isAsk) {
            if (isAsk) {
                landlordScore_ += 10;
            }
        }

        // 抢地主
        inline void GrabLandlord(bool isGrab) {
            if (isGrab) {
                landlordScore_ += 30;
            }
        }

        // 设置是否地主
        inline void SetLandlord(bool isLandlord) {
            landlord_ = isLandlord;
        }

        // 展示当前手上所有牌
        void Print();
    private:
        // id
        std::string uid_;
        
        // name
        std::string name_;

        // 房间中的座位
        int position_;

        // 是否是地主
        bool landlord_;

        // 地主积分
        int landlordScore_;

        // 是否准备好
        bool ready_;

        // 手上扑克牌数量
        int pukesAmount_ = 0;
        
        // 手上的扑克牌
        std::map<puke::puke_string, puke::PukeAmount> pukes_;

        // websocket连接
        mg_connection* connection_;
};

} // namespace service

} // namespace room

#endif