ACTIVE = .
OPTS = -std=c++11 -I/Users/vorshen/C++/20190329-webserver/server/common

OBJECTS += \
$(ACTIVE)/main.cpp \
$(ACTIVE)/game_server/api/Api.cpp\
$(ACTIVE)/common/mongoose.c\
$(ACTIVE)/game_server/Game.cpp\
$(ACTIVE)/http_server/Server.cpp\
$(ACTIVE)/service/puke-center/PukeCenterService.cpp\
$(ACTIVE)/service/room/Player.cpp\
$(ACTIVE)/service/room/Room.cpp\
$(ACTIVE)/service/room/RoomService.cpp\
$(ACTIVE)/service/session/SessionService.cpp\

a.out: $(OBJECTS)
	rm -rf a.out
	$(CXX) $(OPTS) -o $@ $(OBJECTS)