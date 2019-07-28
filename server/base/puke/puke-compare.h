#ifndef PUKE_COMPARE_H
#define PUKE_COMPARE_H
#include <vector>
#include "./puke-utils.h"
#include "./Puke.h"
#include <algorithm>
#include <iostream>

namespace puke {

struct PukeCompareResult {
    PukeCompareResult(PukeType type, int core): type(type), core(core) {};
    PukeType type;
    int core;
};

bool comp(const Puke& a, const Puke& b){
    return a > b;
}

/**
 * 根据传入的count，找连续的
 */
std::vector<std::vector<Puke>::iterator> findContinue(std::vector<Puke>& pukes, int count) {
    std::vector<std::vector<Puke>::iterator> result;
    int c = 1;
    Puke cache = *(pukes.begin());
    auto it = pukes.begin() + 1;
    

    while (it != pukes.end()) {
        if (*it == cache) {
            c++;
        } else {
            if (c == count) {
                result.push_back(it - count);
            }

            cache = *it;
            c = 1;
        }
        it++;
    }

    if (c == count) {
        result.push_back(it - count);
    }

    return result;
}

/**
 * 格式化一下pukes，规则如下
 * 连续4张在连续3张前面(2张1张以此类推)
 * 连续3张的话，单张大的在前面
 */
void Parse(std::vector<Puke>& pukes) {
    if (pukes.size() == 0) {
        return;
    }

    sort(pukes.begin(), pukes.end(), comp);

    std::vector<Puke> copyPukes(pukes);
    int index = 0;

    std::vector<Puke>::iterator it = copyPukes.begin();
    std::vector<std::vector<Puke>::iterator> v_it;

    // 先找四张的
    v_it = findContinue(copyPukes, 4);
    for (auto it : v_it) {
        for (int i = 0; i < 4; i++) {
            pukes[index] = *(it+i);
            index++;
        }
    }

    // 再找三张的
    v_it = findContinue(copyPukes, 3);
    for (auto it : v_it) {
        for (int i = 0; i < 3; i++) {
            pukes[index] = *(it+i);
            index++;
        }
    }

    // 再找两张的
    v_it = findContinue(copyPukes, 2);
    for (auto it : v_it) {
        for (int i = 0; i < 2; i++) {
            pukes[index] = *(it+i);
            index++;
        }
    }

    // 再找一张的
    v_it = findContinue(copyPukes, 1);
    for (auto it : v_it) {
        for (int i = 0; i < 1; i++) {
            pukes[index] = *(it+i);
            index++;
        }
    }
}

/**
 * 空牌
 */
PukeCompareResult GetCore_0(std::vector<Puke>& pukes) {
    return PukeCompareResult(PukeType::EMPTY, 0);
}

/**
 * 一张牌
 * 1、单张
 */
PukeCompareResult GetCore_1(std::vector<Puke>& pukes) {
    return PukeCompareResult(PukeType::SINGLE, 0);
}

/**
 * 两张牌
 * 1、王炸
 * 1、对子
 */
PukeCompareResult GetCore_2(std::vector<Puke>& pukes) {
    if (pukes[0].color() == PukeColor::GOLD && pukes[1].color() == PukeColor::GOLD) {
        return PukeCompareResult(PukeType::BOOM, 0);
    }
    if (pukes[0] == pukes[1]) {
        return PukeCompareResult(PukeType::DOUBLE, 0);
    } else {
        return PukeCompareResult(PukeType::ERROR, -1);;
    }
}

/**
 * 三张牌
 * 1、三不带
 */
PukeCompareResult GetCore_3(std::vector<Puke>& pukes) {
    if (
        pukes[0] == pukes[2]
    ) {
        return PukeCompareResult(PukeType::THREE, 0);
    } else {
        return PukeCompareResult(PukeType::ERROR, -1);
    }
}

/**
 * 四张牌
 * 1、炸
 * 2、三带一
 */
PukeCompareResult GetCore_4(std::vector<Puke>& pukes) {
    if (
        pukes[0] == pukes[3]
    ) {
        // 全部相等，相当于是炸
        return PukeCompareResult(PukeType::BOOM, 0);
    } else {
        if (
            pukes[0] == pukes[2]
        ) {
            return PukeCompareResult(PukeType::THREE_SINGLE, 0);
        } else {
            return PukeCompareResult(PukeType::ERROR, -1);
        }
    }
}

/**
 * 五张牌
 * 1、三带二
 */
PukeCompareResult GetCore_5(std::vector<Puke>& pukes) {
    if (
        pukes[0] == pukes[2] &&
        pukes[3] == pukes[4]
    ) {
        return PukeCompareResult(PukeType::THREE_DOUBLE, 0);
    } else {
        return PukeCompareResult(PukeType::ERROR, -1);
    }
}

/**
 * 六张牌
 * 1、连对
 * 2、连三
 */
PukeCompareResult GetCore_6(std::vector<Puke>& pukes) {
    if (findContinue(pukes, 3).size() == 2) {
        return PukeCompareResult(PukeType::THREE_ROW, 0);
    } else if (findContinue(pukes, 2).size() == 3) {
        return PukeCompareResult(PukeType::DOUBLE_ROW, 0);
    } else {
        return PukeCompareResult(PukeType::ERROR, -1);
    }
}

/**
 * 多张牌的时候
 */
PukeCompareResult GetCore_more(std::vector<Puke>& pukes) {
    auto itThree = findContinue(pukes, 3);
    auto itDouble = findContinue(pukes, 2);
    auto itSingle = findContinue(pukes, 1);

    size_t itThreeSize = itThree.size();
    size_t itDoubleSize = itDouble.size();
    size_t itSingleSize = itSingle.size();

    // 这种情况不合法
    if (itDoubleSize != 0 && itSingleSize != 0) {
        return PukeCompareResult(PukeType::ERROR, -1);
    }

    // 存在三张的
    if (itThreeSize != 0) {
        if (itDoubleSize != 0) {
            // 三带二
            if (itThreeSize == itDoubleSize) {
                return PukeCompareResult(PukeType::THREE_DOUBLE_ROW, 0);
            } else {
                return PukeCompareResult(PukeType::ERROR, -1);
            }
        } else if (itSingleSize != 0) {
            // 三带单
            if (itThreeSize == itSingleSize) {
                return PukeCompareResult(PukeType::THREE_SINGLE_ROW, 0);
            } else {
                return PukeCompareResult(PukeType::ERROR, -1);
            }
        } else {
            // 三不带
            return PukeCompareResult(PukeType::THREE_ROW, 0);
        }
    }

    // 存在两张的（只能是连对了）
    if (itDoubleSize != 0) {
        return PukeCompareResult(PukeType::DOUBLE_ROW, 0);
    }

    return PukeCompareResult(PukeType::ERROR, 0);
}

/**
 * 分析一组牌的模式
 */
PukeCompareResult GetCore(std::vector<Puke>& pukes) {
    switch (pukes.size()) {
        case 0:
            return GetCore_0(pukes);
        case 1:
            return GetCore_1(pukes);
        case 2:
            return GetCore_2(pukes);
        case 3:
            return GetCore_3(pukes);
        case 4:
            return GetCore_4(pukes);
        case 5:
            return GetCore_5(pukes);
        case 6:
            return GetCore_6(pukes);
        default:
            return GetCore_more(pukes);
    }
}

/**
 * 对比两组牌的大小
 */
bool PukeCompare(std::vector<Puke>& pukesA, std::vector<Puke>& pukesB) {
    Parse(pukesA);
    Parse(pukesB);
    
    PukeCompareResult bResult = GetCore(pukesB);
    PukeCompareResult aResult = GetCore(pukesA);
// std::cout << bResult.type << std::endl;
    // 不合法，直接认为出牌小
    if (bResult.type == PukeType::ERROR) {
        return false;
    }

    // 如果本身牌为空，则也认为出牌小
    if (bResult.type == PukeType::EMPTY) {
        return false;
    }

    // 对比的牌为空，则认为出牌大
    if (aResult.type == PukeType::EMPTY) {
        return true;
    }
    // 一方是炸弹，另一方不是炸弹
    if (bResult.type == PukeType::BOOM && aResult.type != PukeType::BOOM) {
        return true;
    }

    if (bResult.type != PukeType::BOOM && aResult.type == PukeType::BOOM) {
        return false;
    }

    // 如果类型不一致，也认为小
    if (bResult.type != aResult.type) {
        return false;
    } else {
        return (pukesB[bResult.core]) > (pukesA[aResult.core]);
    }
}

} // namespace puke

#endif