
#include <emscripten.h>

extern "C" {

// Not using size_t for array indices as the values used by the javascript code are signed.
void array_bounds_check(const int array_size, const int array_idx) {
  if (array_idx < 0 || array_idx >= array_size) {
    EM_ASM({
      throw 'Array index ' + $0 + ' out of bounds: [0,' + $1 + ')';
    }, array_idx, array_size);
  }
}

// JSPuke

JSPuke* EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_JSPuke_2(const puke_PukeColor arg0, const unsigned int arg1) {
  return new JSPuke(arg0, arg1);
}

const puke_PukeColor EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_color_0(JSPuke* self) {
  return self->color();
}

const int EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_serial_0(JSPuke* self) {
  return self->serial();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_Equal_1(JSPuke* self, const JSPuke* arg0) {
  return self->Equal(*arg0);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_Less_1(JSPuke* self, const JSPuke* arg0) {
  return self->Less(*arg0);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_More_1(JSPuke* self, const JSPuke* arg0) {
  return self->More(*arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_AddRef_0(JSPuke* self) {
  self->AddRef();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_Release_0(JSPuke* self) {
  self->Release();
}

const char* EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_Name_0(JSPuke* self) {
  return self->Name();
}

puke_PukeColor EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_get_color__0(JSPuke* self) {
  return self->color_;
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke_get_serial__0(JSPuke* self) {
  return self->serial_;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_JSPuke___destroy___0(JSPuke* self) {
  delete self;
}

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

// puke_PukeType
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_ERROR() {
  return puke::ERROR;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_SINGLE() {
  return puke::SINGLE;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_DOUBLE() {
  return puke::DOUBLE;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_THREE() {
  return puke::THREE;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_BOOM() {
  return puke::BOOM;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_THREE_SINGLE() {
  return puke::THREE_SINGLE;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_THREE_DOUBLE() {
  return puke::THREE_DOUBLE;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_DOUBLE_ROW() {
  return puke::DOUBLE_ROW;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_THREE_ROW() {
  return puke::THREE_ROW;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_THREE_SINGLE_ROW() {
  return puke::THREE_SINGLE_ROW;
}
puke_PukeType EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeType_THREE_DOUBLE_ROW() {
  return puke::THREE_DOUBLE_ROW;
}

// puke_PukeColor
puke_PukeColor EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeColor_GOLD() {
  return puke::GOLD;
}
puke_PukeColor EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeColor_BLACK_HEART() {
  return puke::BLACK_HEART;
}
puke_PukeColor EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeColor_RED_HEART() {
  return puke::RED_HEART;
}
puke_PukeColor EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeColor_BLACK_PLUM() {
  return puke::BLACK_PLUM;
}
puke_PukeColor EMSCRIPTEN_KEEPALIVE emscripten_enum_puke_PukeColor_RED_RECT() {
  return puke::RED_RECT;
}

}

