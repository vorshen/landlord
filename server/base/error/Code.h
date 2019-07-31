#ifndef ERROR_CODE_H
#define ERROR_CODE_H

#include "../config.h"
#include <fstream>
#include <iostream>
#include "../../common/nlohmann/json.hpp"

namespace error {

enum class ErrorCodeType {
    SUCCESS = 10000, // 成功
    ERROR_ARGUMENT_INVALID, // 参数异常
    ERROR_ROOM_UNDEFINED, // 房间不存在
    ERROR_ROOM_FULL, // 房间人数已满
    ERROR_ASK_LANDLORD_CERT, // 没有叫地主的权限
    ERROR_GRAB_LANDLORD_CERT, // 没有抢地主的权限
    ERROR_SHOT_PUKES_CERT, // 没有出牌的权限
    ERROR_PUKES_SMALL, // 出牌过小
};

class ErrorCode {
    public:
        ErrorCode() {
            // fix absolute path bug
	        // if use absolute path, must recompile
            // std::string path(__CONFIG_PATH__);
	        std::ifstream i("../config/error-code.json");
            
            i >> error_data_;

            std::cout << error_data_.dump(4) << std::endl;
        }

        std::string GetErrorMessage(ErrorCodeType errorCode) {
            return error_data_[std::to_string(static_cast<int>(errorCode))].get<std::string>();
        };
    private:
        nlohmann::json error_data_;
};



} // namespace error

#endif