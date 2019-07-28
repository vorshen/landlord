#ifndef PUKE_UTILS_H
#define PUKE_UTILS_H

#include <string>

namespace puke {

enum PukeColor {
    GOLD,
    BLACK_HEART,
    RED_HEART,
    BLACK_PLUM,
    RED_RECT,
};

enum PukeType {
    ERROR,    // 无法匹配
    EMPTY,    // 空张
    SINGLE,    // 单张
    DOUBLE,    // 对子
    THREE,    // 三不带
    BOOM,    // 炸
    THREE_SINGLE,    // 三带一
    THREE_DOUBLE,    // 三带二
    DOUBLE_ROW,    // 连对
    THREE_ROW,    // 连三不带
    THREE_SINGLE_ROW,    // 三带一飞机
    THREE_DOUBLE_ROW,    // 三带二飞机
};

// enum PUKE_SERIAL {
//         0x98,    // 小鬼
//         0x99,    // 大鬼
//         0x13,    // 3
//         0x14,    // 4
//         0x15,    // 5
//         0x16,    // 6
//         0x17,    // 7
//         0x18,    // 8
//         0x19,    // 9
//         0x1a,    // 10
//         0x1b,    // J
//         0x1c,    // Q,
//         0x1d,    // K,
//         0x1e,    // A,
//         0x1f,    // 2
// }

// 牌数
typedef unsigned short PukeAmount;
// 单张牌大小(3~2)，16进制表示
typedef unsigned int PukeSerial;
// pake_one的字符串表示方式
typedef std::string puke_string;

} // namespace puke

#endif