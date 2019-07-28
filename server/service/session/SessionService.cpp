#include "SessionService.h"

namespace service {

namespace session {

SessionService::~SessionService() {
    for (auto it = sessions_.cbegin(); it != sessions_.cend(); it++) {
        delete it->second;
    }
}

Session* SessionService::Create(
    const std::string& uid, 
    const std::string& name,
    mg_connection* connection
) {
    Session* session = new Session(uid, name, connection);
    sessions_.insert(std::pair<mg_connection*, Session*>(connection, session));

    return session;
}

Session* SessionService::Get(mg_connection* connection) {
    auto it = sessions_.find(connection);

    return it->second;
}

void SessionService::Destroy(mg_connection* connection) {
    sessions_.erase(connection);
}

} // namespace session

} // namespace service