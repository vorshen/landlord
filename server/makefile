ACTIVE = .
MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
MKFILE_DIR := $(dir $(MKFILE_PATH))
INCLUDE_PATH := $(MKFILE_DIR)common

OPTS = -std=c++11 -I${INCLUDE_PATH}

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

server: $(OBJECTS)
	rm -rf server
	$(CXX) $(OPTS) -o $@ $(OBJECTS)