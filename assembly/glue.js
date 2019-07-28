
// Bindings utilities

function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts big (string or array) values into a C-style storage, in temporary space

var ensureCache = {
  buffer: 0,  // the main buffer of temporary storage
  size: 0,   // the size of buffer
  pos: 0,    // the next free offset in buffer
  temps: [], // extra allocations
  needed: 0, // the total size we need next time

  prepare: function() {
    if (ensureCache.needed) {
      // clear the temps
      for (var i = 0; i < ensureCache.temps.length; i++) {
        Module['_free'](ensureCache.temps[i]);
      }
      ensureCache.temps.length = 0;
      // prepare to allocate a bigger buffer
      Module['_free'](ensureCache.buffer);
      ensureCache.buffer = 0;
      ensureCache.size += ensureCache.needed;
      // clean up
      ensureCache.needed = 0;
    }
    if (!ensureCache.buffer) { // happens first time, or when we need to grow
      ensureCache.size += 128; // heuristic, avoid many small grow events
      ensureCache.buffer = Module['_malloc'](ensureCache.size);
      assert(ensureCache.buffer);
    }
    ensureCache.pos = 0;
  },
  alloc: function(array, view) {
    assert(ensureCache.buffer);
    var bytes = view.BYTES_PER_ELEMENT;
    var len = array.length * bytes;
    len = (len + 7) & -8; // keep things aligned to 8 byte boundaries
    var ret;
    if (ensureCache.pos + len >= ensureCache.size) {
      // we failed to allocate in the buffer, ensureCache time around :(
      assert(len > 0); // null terminator, at least
      ensureCache.needed += len;
      ret = Module['_malloc'](len);
      ensureCache.temps.push(ret);
    } else {
      // we can allocate in the buffer
      ret = ensureCache.buffer + ensureCache.pos;
      ensureCache.pos += len;
    }
    return ret;
  },
  copy: function(array, view, offset) {
    var offsetShifted = offset;
    var bytes = view.BYTES_PER_ELEMENT;
    switch (bytes) {
      case 2: offsetShifted >>= 1; break;
      case 4: offsetShifted >>= 2; break;
      case 8: offsetShifted >>= 3; break;
    }
    for (var i = 0; i < array.length; i++) {
      view[offsetShifted + i] = array[i];
    }
  },
};

function ensureString(value) {
  if (typeof value === 'string') {
    var intArray = intArrayFromString(value);
    var offset = ensureCache.alloc(intArray, HEAP8);
    ensureCache.copy(intArray, HEAP8, offset);
    return offset;
  }
  return value;
}
function ensureInt8(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP8);
    ensureCache.copy(value, HEAP8, offset);
    return offset;
  }
  return value;
}
function ensureInt16(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP16);
    ensureCache.copy(value, HEAP16, offset);
    return offset;
  }
  return value;
}
function ensureInt32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP32);
    ensureCache.copy(value, HEAP32, offset);
    return offset;
  }
  return value;
}
function ensureFloat32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF32);
    ensureCache.copy(value, HEAPF32, offset);
    return offset;
  }
  return value;
}
function ensureFloat64(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF64);
    ensureCache.copy(value, HEAPF64, offset);
    return offset;
  }
  return value;
}


// JSPuke
/** @suppress {undefinedVars, duplicate} */function JSPuke(arg0, arg1) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  this.ptr = _emscripten_bind_JSPuke_JSPuke_2(arg0, arg1);
  getCache(JSPuke)[this.ptr] = this;
};;
JSPuke.prototype = Object.create(WrapperObject.prototype);
JSPuke.prototype.constructor = JSPuke;
JSPuke.prototype.__class__ = JSPuke;
JSPuke.__cache__ = {};
Module['JSPuke'] = JSPuke;

JSPuke.prototype['color'] = JSPuke.prototype.color = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  return _emscripten_bind_JSPuke_color_0(self);
};;

JSPuke.prototype['serial'] = JSPuke.prototype.serial = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  return _emscripten_bind_JSPuke_serial_0(self);
};;

JSPuke.prototype['Equal'] = JSPuke.prototype.Equal = /** @suppress {undefinedVars, duplicate} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return !!(_emscripten_bind_JSPuke_Equal_1(self, arg0));
};;

JSPuke.prototype['Less'] = JSPuke.prototype.Less = /** @suppress {undefinedVars, duplicate} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return !!(_emscripten_bind_JSPuke_Less_1(self, arg0));
};;

JSPuke.prototype['More'] = JSPuke.prototype.More = /** @suppress {undefinedVars, duplicate} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return !!(_emscripten_bind_JSPuke_More_1(self, arg0));
};;

JSPuke.prototype['AddRef'] = JSPuke.prototype.AddRef = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  _emscripten_bind_JSPuke_AddRef_0(self);
};;

JSPuke.prototype['Release'] = JSPuke.prototype.Release = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  _emscripten_bind_JSPuke_Release_0(self);
};;

JSPuke.prototype['Name'] = JSPuke.prototype.Name = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_JSPuke_Name_0(self));
};;

  JSPuke.prototype['get_color_'] = JSPuke.prototype.get_color_ = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  return _emscripten_bind_JSPuke_get_color__0(self);
};
    Object.defineProperty(JSPuke.prototype, 'color_', { get: JSPuke.prototype.get_color_ });
  JSPuke.prototype['get_serial_'] = JSPuke.prototype.get_serial_ = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  return _emscripten_bind_JSPuke_get_serial__0(self);
};
    Object.defineProperty(JSPuke.prototype, 'serial_', { get: JSPuke.prototype.get_serial_ });
  JSPuke.prototype['__destroy__'] = JSPuke.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  _emscripten_bind_JSPuke___destroy___0(self);
};
// VoidPtr
/** @suppress {undefinedVars, duplicate} */function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = VoidPtr.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} */function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
};
(function() {
  function setupEnums() {
    

    // puke_PukeType

    Module['ERROR'] = _emscripten_enum_puke_PukeType_ERROR();

    Module['SINGLE'] = _emscripten_enum_puke_PukeType_SINGLE();

    Module['DOUBLE'] = _emscripten_enum_puke_PukeType_DOUBLE();

    Module['THREE'] = _emscripten_enum_puke_PukeType_THREE();

    Module['BOOM'] = _emscripten_enum_puke_PukeType_BOOM();

    Module['THREE_SINGLE'] = _emscripten_enum_puke_PukeType_THREE_SINGLE();

    Module['THREE_DOUBLE'] = _emscripten_enum_puke_PukeType_THREE_DOUBLE();

    Module['DOUBLE_ROW'] = _emscripten_enum_puke_PukeType_DOUBLE_ROW();

    Module['THREE_ROW'] = _emscripten_enum_puke_PukeType_THREE_ROW();

    Module['THREE_SINGLE_ROW'] = _emscripten_enum_puke_PukeType_THREE_SINGLE_ROW();

    Module['THREE_DOUBLE_ROW'] = _emscripten_enum_puke_PukeType_THREE_DOUBLE_ROW();

    

    // puke_PukeColor

    Module['GOLD'] = _emscripten_enum_puke_PukeColor_GOLD();

    Module['BLACK_HEART'] = _emscripten_enum_puke_PukeColor_BLACK_HEART();

    Module['RED_HEART'] = _emscripten_enum_puke_PukeColor_RED_HEART();

    Module['BLACK_PLUM'] = _emscripten_enum_puke_PukeColor_BLACK_PLUM();

    Module['RED_RECT'] = _emscripten_enum_puke_PukeColor_RED_RECT();

  }
  if (Module['calledRun']) setupEnums();
  else addOnPreMain(setupEnums);
})();
