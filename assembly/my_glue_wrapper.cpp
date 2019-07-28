#include "../server/base/puke/Puke.h"
#include "../server/base/puke/puke-compare.h"
#include <iostream>

#ifndef EM_PORT_API
#    if defined(__EMSCRIPTEN__)
#        include <emscripten.h>
#        if defined(__cplusplus)
#            define EM_PORT_API(rettype) extern "C" rettype EMSCRIPTEN_KEEPALIVE
#        else
#            define EM_PORT_API(rettype) rettype EMSCRIPTEN_KEEPALIVE
#        endif
#    else
#        if defined(__cplusplus)
#            define EM_PORT_API(rettype) extern "C" rettype
#        else
#            define EM_PORT_API(rettype) rettype
#        endif
#    endif
#endif

typedef puke::PukeColor puke_PukeColor;
typedef puke::PukeType puke_PukeType;

class JSPuke : public puke::Puke {
    public:
        JSPuke(const puke::PukeColor color, const puke::PukeSerial serial): puke::Puke(color, serial), ref_count_(1) {};

        bool Equal(const JSPuke& a) {
            return static_cast<Puke>(*this) == a;
        }

        bool Less(const JSPuke& a) {
            return static_cast<Puke>(*this) < a;
        }

        bool More(const JSPuke& a) {
            return static_cast<Puke>(*this) > a;
        }

        const char* Name() {
            return puke::Puke::name().data();
        }

        void AddRef() {
            ref_count_++;
        }

        void Release() {
            ref_count_--;
            if (ref_count_ == 0) {
                delete this;
                std::cout << "jsPuke 执行析构" << std::endl;
            }
        }

    private:
        int ref_count_;
};

EM_PORT_API(bool) comparePukes(JSPuke** a, int aLen, JSPuke** b, int bLen) {
    std::vector<puke::Puke> pukesA;
    for (int i = 0; i < aLen; i++) {
        pukesA.push_back(*a[i]);
    }

    std::vector<puke::Puke> pukesB;
    for (int i = 0; i < bLen; i++) {
        pukesB.push_back(*b[i]);
    }

    return puke::PukeCompare(pukesA, pukesB);
};

#include "./glue.cpp"