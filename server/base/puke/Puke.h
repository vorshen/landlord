#ifndef PUKE_H
#define PUKE_H
#include "./puke-utils.h"
#include <vector>

namespace puke {

class Puke {
    public:
        Puke(const PukeColor color, const PukeSerial serial): color_(color), serial_(serial) {};
        PukeColor color() {return color_;};
        int serial() {return serial_;};

        bool operator==(const Puke& a) const {
            if (serial_ == a.serial_) {
                return true;
            }

            return false;
        };
        bool operator<(const Puke& a) const {
            if (serial_ < a.serial_) {
                return true;
            }

            return false;
        };
        bool operator>(const Puke& a) const {
            if (serial_ > a.serial_) {
                return true;
            }

            return false;
        };
        // debugger方法，输出可读的name
        std::string name() {
            std::string a = "";
            
            switch (color_) {
                case PukeColor::BLACK_HEART:
                    a = "黑心";
                    break;
                case PukeColor::RED_HEART:
                    a = "红心";
                    break;
                case PukeColor::BLACK_PLUM:
                    a = "梅花";
                    break;
                case PukeColor::RED_RECT:
                    a = "方块";
                    break;
                default:
                    a = "";
            }

            switch (serial_) {
                case 0x98:
                    a += "小鬼";
                    break;
                case 0x99:
                    a += "大鬼";
                    break;
                case 0x13:
                    a += "3";
                    break;
                case 0x14:
                    a += "4";
                    break;
                case 0x15:
                    a += "5";
                    break;
                case 0x16:
                    a += "6";
                    break;
                case 0x17:
                    a += "7";
                    break;
                case 0x18:
                    a += "8";
                    break;
                case 0x19:
                    a += "9";
                    break;
                case 0x1a:
                    a += "10";
                    break;
                case 0x1b:
                    a += "J";
                    break;
                case 0x1c:
                    a += "Q";
                    break;
                case 0x1d:
                    a += "K";
                    break;
                case 0x1e:
                    a += "A";
                    break;
                case 0x1f:
                    a += "2";
                    break;
            }

            return a;
        }

        static puke_string Serialize(Puke& puke) {
            return std::to_string(puke.color_) + "-" + std::to_string(puke.serial_);
        }

        static Puke Unserialize(const puke_string& pukeString) {
            std::string delimiter = "-";
            std::string str_color = pukeString.substr(0, pukeString.find(delimiter));
            std::string str_serial = pukeString.substr(pukeString.find(delimiter) + 1, pukeString.size());

            const PukeColor color = static_cast<const PukeColor>(std::stoi(str_color));
            const int serial = std::stoi(str_serial);

            return Puke(color, serial);
        }
    public:
        PukeColor color_;
        int serial_;
};

} // namespace puke


#endif