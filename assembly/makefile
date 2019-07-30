ACTIVE = .
MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
MKFILE_DIR := $(dir $(MKFILE_PATH))
OPTS = -I. -I${MKFILE_DIR} -std=c++11 -O0 -g2

PYTHON = $(ENV) python

all: puke.out.js

glue.cpp: ${ACTIVE}/puke.idl
	$(PYTHON) $(EMSCRIPTEN)/tools/webidl_binder.py ${ACTIVE}/puke.idl glue

puke.out.js: ../server/base/puke/Puke.h ../server/base/puke/puke-compare.h glue.cpp
	$(CXX) $(OPTS) my_glue_wrapper.cpp --post-js glue.js -o ../html/js/puke.out.js 

clean: 
	rm -rf ../html/js/puke.out.js 
	rm parser.out WebIDLGrammar.pkl