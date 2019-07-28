#ifndef PUKE_CENTER_SERVICE_H
#define PUKE_CENTER_SERVICE_H

#include "../../base/puke/puke-utils.h"
#include "../../base/puke/Puke.h"
#include <vector>

namespace service {
    
class PukeCenterService {
    public:
        PukeCenterService() {
            // std::vector<puke::puke_string> before;
            // std::vector<puke::puke_string> after{"2-21", "1-19", "3-19", "2-19"};
            // Compare(before, after);
        }
        // 获取乱序的牌
        std::vector<std::vector<puke::puke_string> > GetPukes(const int average, const int extra);

        // 比较两份牌谁大
        bool Compare(
            std::vector<puke::puke_string> before, 
            std::vector<puke::puke_string> after
        );
    private:
        static std::vector<puke::Puke> pukes_;
        // 将牌乱序
        void Disorder(std::vector<puke::Puke>& pukes);
};

}
#endif