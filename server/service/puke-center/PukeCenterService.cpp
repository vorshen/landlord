#include "./PukeCenterService.h"
#include "../../base/puke/puke-compare.h"
#include <iostream>
#include <ctime>
#include <algorithm>
#include <random>

namespace service {

std::vector<puke::Puke> PukeCenterService::pukes_{
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x13},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x14},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x15},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x16},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x17},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x18},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x19},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x1a},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x1b},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x1c},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x1d},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x1e},
    puke::Puke{puke::PukeColor::BLACK_HEART, 0x1f},

    puke::Puke{puke::PukeColor::RED_HEART, 0x13},
    puke::Puke{puke::PukeColor::RED_HEART, 0x14},
    puke::Puke{puke::PukeColor::RED_HEART, 0x15},
    puke::Puke{puke::PukeColor::RED_HEART, 0x16},
    puke::Puke{puke::PukeColor::RED_HEART, 0x17},
    puke::Puke{puke::PukeColor::RED_HEART, 0x18},
    puke::Puke{puke::PukeColor::RED_HEART, 0x19},
    puke::Puke{puke::PukeColor::RED_HEART, 0x1a},
    puke::Puke{puke::PukeColor::RED_HEART, 0x1b},
    puke::Puke{puke::PukeColor::RED_HEART, 0x1c},
    puke::Puke{puke::PukeColor::RED_HEART, 0x1d},
    puke::Puke{puke::PukeColor::RED_HEART, 0x1e},
    puke::Puke{puke::PukeColor::RED_HEART, 0x1f},

    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x13},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x14},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x15},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x16},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x17},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x18},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x19},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x1a},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x1b},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x1c},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x1d},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x1e},
    puke::Puke{puke::PukeColor::BLACK_PLUM, 0x1f},

    puke::Puke{puke::PukeColor::RED_RECT, 0x13},
    puke::Puke{puke::PukeColor::RED_RECT, 0x14},
    puke::Puke{puke::PukeColor::RED_RECT, 0x15},
    puke::Puke{puke::PukeColor::RED_RECT, 0x16},
    puke::Puke{puke::PukeColor::RED_RECT, 0x17},
    puke::Puke{puke::PukeColor::RED_RECT, 0x18},
    puke::Puke{puke::PukeColor::RED_RECT, 0x19},
    puke::Puke{puke::PukeColor::RED_RECT, 0x1a},
    puke::Puke{puke::PukeColor::RED_RECT, 0x1b},
    puke::Puke{puke::PukeColor::RED_RECT, 0x1c},
    puke::Puke{puke::PukeColor::RED_RECT, 0x1d},
    puke::Puke{puke::PukeColor::RED_RECT, 0x1e},
    puke::Puke{puke::PukeColor::RED_RECT, 0x1f},

    puke::Puke{puke::PukeColor::GOLD, 0x98},
    puke::Puke{puke::PukeColor::GOLD, 0x99},
};

std::vector<puke::Puke> Transform(std::vector<puke::puke_string>& pukes);

std::vector<std::vector<puke::puke_string> > PukeCenterService::GetPukes(const int average, const int extra) {
    std::vector<puke::Puke> pukes = pukes_;

    int index = 0;
    int part = std::ceil(double(pukes.size()) / ((pukes.size() - extra) / average));

    std::vector<std::vector<puke::puke_string> > result{static_cast<size_t>(part)};

    Disorder(pukes);

    int i;
    for (i = 0; i < pukes.size() - extra; i++) {
        puke::Puke puke = pukes[i];
        index = i % average;

        result[index].push_back(puke::Puke::Serialize(puke));
    }

    for (i = extra; i > 0; i--) {
        puke::Puke puke = pukes[pukes.size() - i];

        result[part - 1].push_back(puke::Puke::Serialize(puke));
    }

    return result;
}

bool PukeCenterService::Compare(
    std::vector<puke::puke_string> before,
    std::vector<puke::puke_string> after
) {
    std::vector<puke::Puke> pukesA = Transform(before);
    std::vector<puke::Puke> pukesB = Transform(after);

    bool result;
    result = PukeCompare(pukesA, pukesB);

    return result;
}

void PukeCenterService::Disorder(std::vector<puke::Puke>& pukes) {
    std::random_device rd;
    std::mt19937 g(rd());
    std::shuffle(pukes.begin(), pukes.end(), g);
}

std::vector<puke::Puke> Transform(std::vector<puke::puke_string>& pukes) {
    std::vector<puke::Puke> result;

    for (auto it = pukes.cbegin(); it != pukes.cend(); it++) {
        result.push_back(puke::Puke::Unserialize(*it));
    }

    return result;
}

}