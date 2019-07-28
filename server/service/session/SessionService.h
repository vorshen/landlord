#ifndef SESSION_SERVICE_H
#define SESSION_SERVICE_H

#include <string>
#include "./Session.h"
#include "../../common/mongoose.h"
#include <map>

namespace service {

namespace session {

class SessionService {
    public:
        SessionService() = default;
        ~SessionService();
        SessionService(const SessionService& that) = delete;
        SessionService& operator=(const SessionService& that) = delete;
        SessionService(SessionService&& that) = delete;
        SessionService& operator=(SessionService&& that) = delete;

        Session* Create(
            const std::string& uid, 
            const std::string& name,
            mg_connection* connection
        );
        
        Session* Get(mg_connection* connection);

        void Destroy(mg_connection* connection);
    private:
        std::map<mg_connection*, Session*> sessions_;
};

} // namespace session

} // namespace service

#endif