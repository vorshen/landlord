(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Puke", [], factory);
	else if(typeof exports === 'object')
		exports["Puke"] = factory();
	else
		root["Puke"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".index-box {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.index-resource-progress {\n    height: 6px;\n    background-color: #1ca4fc;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.index-start-button {\n    width: 150px;\n    height: 40px;\n    position: absolute;\n    left: 50%;\n    top: 70%;\n    transform: translateX(-75px);\n    text-align: center;\n    line-height: 40px;\n    background-color: #1ca4fc;\n    color: #ffffff;\n    font-size: 20px;\n    display: none;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/hall/Hall.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/hall/Hall.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hall-box {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.hall-create-button {\n    width: 150px;\n    height: 40px;\n    position: absolute;\n    left: 25%;\n    top: 70%;\n    transform: translateX(-75px);\n    text-align: center;\n    line-height: 40px;\n    background-color: #1ca4fc;\n    color: #ffffff;\n    font-size: 20px;\n}\n\n.hall-rid-input {\n    position: absolute;\n    border: 2px solid #1ca4fc;\n    height: 30px;\n    line-height: 30px;\n    left: 75%;\n    top: 70%;\n    transform: translate(-75px, -50px);\n    width: 150px;\n    box-sizing: border-box;\n    font-size: 22px;\n    outline: none;\n}\n\n.hall-enter-button {\n    width: 150px;\n    height: 40px;\n    position: absolute;\n    left: 75%;\n    top: 70%;\n    transform: translateX(-75px);\n    text-align: center;\n    line-height: 40px;\n    background-color: #1ca4fc;\n    color: #ffffff;\n    font-size: 20px;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/room/Room.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/room/Room.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".room-box {\n    position: relative;\n    transform-origin: left top;\n    background-color: #ffffff;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/User */ "./src/user/User.ts");
/* harmony import */ var _network_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network/Network */ "./src/network/Network.ts");
/* harmony import */ var _room_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room/Room */ "./src/room/Room.ts");
/* harmony import */ var _hall_Hall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hall/Hall */ "./src/hall/Hall.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resource_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resource.json */ "./src/resource.json");
var _resource_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./resource.json */ "./src/resource.json", 1);
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render/ResourceManage */ "./src/render/ResourceManage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class App {
    constructor(options) {
        this.debugger = false;
        /**
         * 展示
         */
        this._start = () => __awaiter(this, void 0, void 0, function* () {
            this._box.removeChild(this._startButton);
            let uid = String(Date.now() % 1000);
            let name = uid;
            this._user = new _user_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
                uid: uid,
                name: name
            });
            yield this.initGame();
            this._box.style.display = 'none';
            this.enterHall();
        });
        this._root = options.root;
        this.network = new _network_Network__WEBPACK_IMPORTED_MODULE_1__["default"]({
            host: '10.66.121.41',
            port: 7999
        });
        this._init();
    }
    /**
     * 初始化
     */
    _init() {
        this._resourceProgress = document.createElement('div');
        this._resourceProgress.className = 'index-resource-progress';
        this._startButton = document.createElement('div');
        this._startButton.className = 'index-start-button';
        this._startButton.innerText = '快速开始';
        this._startButton.onclick = this._start;
        this._box = document.createElement('div');
        this._box.className = 'index-box';
        this._box.appendChild(this._resourceProgress);
        this._box.appendChild(this._startButton);
        this._root.appendChild(this._box);
        // 开始加载资源
        _render_ResourceManage__WEBPACK_IMPORTED_MODULE_7__["default"].load(_resource_json__WEBPACK_IMPORTED_MODULE_6__);
        // 进度条
        _render_ResourceManage__WEBPACK_IMPORTED_MODULE_7__["default"].addEventListener('onProgress', () => {
            this._resourceProgress.style.width = `${100 * _render_ResourceManage__WEBPACK_IMPORTED_MODULE_7__["default"].completed / _render_ResourceManage__WEBPACK_IMPORTED_MODULE_7__["default"].total}%`;
            // console.log(ResourceManage.total, ResourceManage.completed);
        });
        // 加载完毕，「开始游戏按钮展示」
        _render_ResourceManage__WEBPACK_IMPORTED_MODULE_7__["default"].addEventListener('onComplete', () => {
            this._startButton.style.display = 'block';
        });
    }
    get root() {
        return this._root;
    }
    get user() {
        return this._user;
    }
    get hall() {
        return this._hall;
    }
    get room() {
        return this._room;
    }
    /**
     * 初始化游戏，简历websocket连接
     */
    initGame() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.network.init();
            let result = yield this.login(this._user.uid, this._user.name);
            if (result.retcode === _utils__WEBPACK_IMPORTED_MODULE_4__["RET_SUCCESS"]) {
                console.log('登录成功: ', result);
                this.enterHall();
            }
            else {
                console.error('登录异常');
            }
        });
    }
    enterHall() {
        if (this._room) {
            this._room.hide();
        }
        if (!this._hall) {
            this._hall = new _hall_Hall__WEBPACK_IMPORTED_MODULE_3__["default"]({
                app: this
            });
        }
        this._hall.show();
    }
    enterRoom(roomInfo) {
        this._hall.hide();
        roomInfo.mainUid = this._user.uid;
        if (!this._room) {
            this._room = new _room_Room__WEBPACK_IMPORTED_MODULE_2__["default"]({
                app: this
            });
        }
        this._room.show(roomInfo);
    }
    /**
     * 登录
     * @param uid
     * @param name
     */
    login(uid, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.network.notify({
                    route: 'Game.EnterGame',
                    body: {
                        uid: uid,
                        name: name
                    }
                }, function (result) {
                    resolve(result);
                });
            });
        });
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/component/Stage.ts":
/*!********************************!*\
  !*** ./src/component/Stage.ts ***!
  \********************************/
/*! exports provided: PLAYER_POSITION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_POSITION", function() { return PLAYER_POSITION; });
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _area_player_area_RightPlayerArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area/player-area/RightPlayerArea */ "./src/component/area/player-area/RightPlayerArea.ts");
/* harmony import */ var _area_player_area_LeftPlayerArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area/player-area/LeftPlayerArea */ "./src/component/area/player-area/LeftPlayerArea.ts");
/* harmony import */ var _area_top_area_TopArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area/top-area/TopArea */ "./src/component/area/top-area/TopArea.ts");
/* harmony import */ var _area_player_area_MainPlayerArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./area/player-area/MainPlayerArea */ "./src/component/area/player-area/MainPlayerArea.ts");
/* harmony import */ var _modal_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/Model */ "./src/component/modal/Model.ts");






var PLAYER_POSITION;
(function (PLAYER_POSITION) {
    PLAYER_POSITION[PLAYER_POSITION["MAIN"] = 0] = "MAIN";
    PLAYER_POSITION[PLAYER_POSITION["RIGHT"] = 1] = "RIGHT";
    PLAYER_POSITION[PLAYER_POSITION["LEFT"] = 2] = "LEFT";
})(PLAYER_POSITION || (PLAYER_POSITION = {}));
;
class Stage extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        // 玩家的区域
        this._playerArea = {};
        // 渲染的定时器
        this._tick = 0;
        this._touchstart = (e) => {
            let touch = e.touches[0];
            let y = this.height - this._offsetX - touch.clientX;
            let x = touch.clientY - this._offsetY;
            this.dispatchEvent('touchstart', {
                x, y
            });
        };
        this._touchmove = (e) => {
            let touch = e.touches[0];
            let y = this.height - this._offsetX - touch.clientX;
            let x = touch.clientY - this._offsetY;
            this.dispatchEvent('touchmove', {
                x, y
            });
        };
        this._touchend = (e) => {
            this.dispatchEvent('touchend');
        };
        /**
         * 渲染
         */
        this.render = () => {
            this._ctx.clearRect(0, 0, this._width, this._height);
            this._children.forEach((item) => {
                item.display && item.render(this._ctx);
            });
            this._tick = setTimeout(this.render, 60);
        };
        this._app = options.app;
        this._offsetX = options.offsetX;
        this._offsetY = options.offsetY;
        this._initCanvas();
        this._addTopArea();
        this._addModal();
        this.show();
    }
    /**
     * 初始化canvas相关
     */
    _initCanvas() {
        let devicePixelRatio = window.devicePixelRatio || 1;
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        // let rect = this._resolveScreen(this._app.root.offsetWidth, this._app.root.offsetHeight);
        // 开始进行缩放屏幕适配的问题
        let width = this._width;
        let height = this._height;
        canvas.setAttribute('width', '' + Math.round(width * devicePixelRatio));
        canvas.setAttribute('height', '' + Math.round(height * devicePixelRatio));
        canvas.style.position = 'absolute';
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        this._canvas = canvas;
        this._ctx = ctx;
        this._ctx.scale(devicePixelRatio, devicePixelRatio);
        this._ctx.textAlign = 'left';
        this._ctx.textBaseline = 'middle';
        // this._canvas.style.transformOrigin = 'left top';
        // this._canvas.style.transform = `translateX(${height}px) rotate(90deg)`;
    }
    /**
     * 顶部区域安排一下
     */
    _addTopArea() {
        let topArea = new _area_top_area_TopArea__WEBPACK_IMPORTED_MODULE_3__["default"](this._app, {
            width: this.width,
            height: 45,
            left: 0,
            top: 0,
        });
        this._topArea = topArea;
        this.addChildren(topArea, 0);
    }
    /**
     * 弹窗安排一下
     */
    _addModal() {
        let overModal = new _modal_Model__WEBPACK_IMPORTED_MODULE_5__["default"](this._app, {
            width: 280,
            height: 120,
            top: 120,
            left: (this._width - 280) / 2
        });
        overModal.hide();
        this._overModal = overModal;
        this.addChildren(overModal, 100);
    }
    /**
     * 绑定交互事件
     */
    _addTouchListener() {
        this._canvas.addEventListener('touchstart', this._touchstart);
        this._canvas.addEventListener('touchmove', this._touchmove);
        this._canvas.addEventListener('touchend', this._touchend);
    }
    /**
     * 解绑交互事件
     */
    _removeTouchListener() {
        this._canvas.removeEventListener('touchstart', this._touchstart);
        this._canvas.removeEventListener('touchmove', this._touchmove);
        this._canvas.removeEventListener('touchend', this._touchend);
    }
    get canvas() {
        return this._canvas;
    }
    get topArea() {
        return this._topArea;
    }
    get overModal() {
        return this._overModal;
    }
    /**
     * 获得对应的玩家区域
     * @param id
     */
    getPlayerArea(id) {
        return this._playerArea[id];
    }
    /**
     * 有其他玩家加入
     * @param user
     * @param position
     */
    addPlayer(user, position) {
        let playerArea;
        switch (position) {
            case PLAYER_POSITION.RIGHT:
                playerArea = new _area_player_area_RightPlayerArea__WEBPACK_IMPORTED_MODULE_1__["default"](this._app, {
                    width: this.width / 3,
                    height: 125,
                    left: this.width / 2 + 10,
                    top: 45,
                    user: user,
                });
                break;
            case PLAYER_POSITION.LEFT:
                playerArea = new _area_player_area_LeftPlayerArea__WEBPACK_IMPORTED_MODULE_2__["default"](this._app, {
                    width: this.width / 3,
                    height: 125,
                    left: 0,
                    top: 45,
                    user: user,
                });
                break;
            case PLAYER_POSITION.MAIN:
                playerArea = new _area_player_area_MainPlayerArea__WEBPACK_IMPORTED_MODULE_4__["default"](this._app, {
                    width: this.width,
                    height: 187.5,
                    left: 0,
                    top: 187.5,
                });
                break;
            default:
                throw 'invalid position';
        }
        this._playerArea[user.uid] = playerArea;
        this.addChildren(playerArea, 0);
    }
    /**
     * 玩家离开
     * @param userId
     */
    removePlayer(userId) {
        this.removeChildren(this._playerArea[userId]);
        delete this._playerArea[userId];
    }
    /**
     * 展示stage
     */
    show() {
        this._canvas.style.display = 'block';
        this._addTouchListener();
        this.render();
    }
    /**
     * 隐藏stage
     */
    hide() {
        this._canvas.style.display = 'none';
        clearTimeout(this._tick);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Stage);


/***/ }),

/***/ "./src/component/area/player-area/LeftPlayerArea.ts":
/*!**********************************************************!*\
  !*** ./src/component/area/player-area/LeftPlayerArea.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/Avatar */ "./src/component/player/Avatar.ts");
/* harmony import */ var _player_Name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../player/Name */ "./src/component/player/Name.ts");
/* harmony import */ var _SidePlayerArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidePlayerArea */ "./src/component/area/player-area/SidePlayerArea.ts");
/* harmony import */ var _pukes_SideHandPukes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pukes/SideHandPukes */ "./src/component/pukes/SideHandPukes.ts");
/* harmony import */ var _desktop_Desktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../desktop/Desktop */ "./src/component/desktop/Desktop.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../render/ResourceManage */ "./src/render/ResourceManage.ts");






class LeftPlayerArea extends _SidePlayerArea__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * 初始化头像
     */
    _initAvatar() {
        this._avatar = new _player_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"]({
            width: 75,
            height: 100,
            top: 0,
            left: 0,
            image: _render_ResourceManage__WEBPACK_IMPORTED_MODULE_5__["default"].get('AVATAR')
        });
        this.addChildren(this._avatar);
    }
    /**
     * 初始化名称
     */
    _initName(name) {
        this._name = new _player_Name__WEBPACK_IMPORTED_MODULE_1__["default"]({
            width: 75,
            height: 30,
            top: 100,
            left: 0,
            text: name,
            size: 18
        });
        this.addChildren(this._name);
    }
    /**
     * 初始化手牌
     */
    _initHandPukes() {
        this._handPukes = new _pukes_SideHandPukes__WEBPACK_IMPORTED_MODULE_3__["default"](this._app, {
            pukeWidth: 20,
            interval: 0,
            width: 20,
            height: 30,
            top: 100,
            left: 100,
        });
        this.addChildren(this._handPukes);
    }
    _initDesktopPukes() {
        this._desktop = new _desktop_Desktop__WEBPACK_IMPORTED_MODULE_4__["default"]({
            width: this.width - 100,
            height: 100,
            top: 0,
            left: 100,
        });
        this.addChildren(this._desktop);
    }
    constructor(app, options) {
        super(app, options);
        this._initAvatar();
        this._initName(options.user.name);
        this._initHandPukes();
        this._initDesktopPukes();
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (LeftPlayerArea);


/***/ }),

/***/ "./src/component/area/player-area/MainPlayerArea.ts":
/*!**********************************************************!*\
  !*** ./src/component/area/player-area/MainPlayerArea.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _player_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../player/Avatar */ "./src/component/player/Avatar.ts");
/* harmony import */ var _player_Name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../player/Name */ "./src/component/player/Name.ts");
/* harmony import */ var _pukes_MainHandPukes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pukes/MainHandPukes */ "./src/component/pukes/MainHandPukes.ts");
/* harmony import */ var _button_ButtonControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../button/ButtonControl */ "./src/component/button/ButtonControl.ts");
/* harmony import */ var _desktop_Desktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../desktop/Desktop */ "./src/component/desktop/Desktop.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../render/ResourceManage */ "./src/render/ResourceManage.ts");







class MainPlayerArea extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * 初始化头像
     */
    _initAvatar() {
        this._avatar = new _player_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"]({
            top: 62.5,
            left: 0,
            width: 75,
            height: 100,
            image: _render_ResourceManage__WEBPACK_IMPORTED_MODULE_6__["default"].get('AVATAR')
        });
        this.addChildren(this._avatar);
    }
    /**
     * 初始化名称
     */
    _initName(name) {
        this._name = new _player_Name__WEBPACK_IMPORTED_MODULE_2__["default"]({
            top: 162.5,
            left: 0,
            width: 75,
            height: 30,
            text: name,
            size: 18
        });
        this.addChildren(this._name);
    }
    /**
     * 初始化手牌
     */
    _initHandPukes() {
        this._handPukes = new _pukes_MainHandPukes__WEBPACK_IMPORTED_MODULE_3__["default"](this._app, {
            pukeWidth: 70,
            interval: 50,
            top: 62.5 + 25 / 2,
            left: 0,
            width: this.width,
            height: 100
        });
        this.addChildren(this._handPukes);
    }
    /**
     * 初始化按钮
     */
    _initButtonControl() {
        this._buttonControl = new _button_ButtonControl__WEBPACK_IMPORTED_MODULE_4__["default"]({
            top: 0,
            left: 0,
            width: this.width,
            height: 62.5,
            app: this._app
        });
        this.addChildren(this._buttonControl);
    }
    _initDesktop() {
        this._desktop = new _desktop_Desktop__WEBPACK_IMPORTED_MODULE_5__["default"]({
            top: 0,
            left: 0,
            width: this.width,
            height: 62.5,
        });
        this.addChildren(this._desktop);
        this._desktop.hide();
    }
    constructor(app, options) {
        super(options);
        this._app = app;
        this._userId = this._app.user.uid;
        this._initAvatar();
        this._initName(this._app.user.name);
        this._initHandPukes();
        this._initButtonControl();
        this._initDesktop();
    }
    get userId() {
        return this._userId;
    }
    get handPukes() {
        return this._handPukes;
    }
    get buttonControl() {
        return this._buttonControl;
    }
    /**
     * 重置
     */
    reset() {
        // 桌面隐藏
        this._desktop.hide();
        // 手牌隐藏
        this._handPukes.hide();
    }
    /**
     * 准备
     * @param isReady
     */
    ready(isReady) {
        console.log(`${this._userId} ${isReady ? '准备' : '取消准备'}`);
    }
    /**
     * 初始化手牌，有动画
     * @param pukes
     */
    initPukes(pukes) {
        let self = this;
        let time = 200;
        let i = 0;
        this._buttonControl.hide();
        this._handPukes.show();
        function getPuke() {
            if (pukes[i] === undefined) {
                return;
            }
            self._handPukes.postPukes([pukes[i]]);
            i++;
            setTimeout(getPuke, time);
        }
        getPuke();
    }
    /**
     * 获得新的牌，无动画
     * @param pukes
     */
    getPukes(pukes) {
        this._handPukes.postPukes(pukes, true);
        this._handPukes.choosePukes(pukes);
    }
    /**
     * 进行叫地主
     */
    enterAskLandlord() {
        this._desktop.hide();
        this._buttonControl.show();
        this._buttonControl.enterAskLandlord();
    }
    /**
     * 进行抢地主
     */
    enterGrabLandlord() {
        this._desktop.hide();
        this._buttonControl.show();
        this._buttonControl.enterGrabLandlord();
    }
    /**
     * 游戏开始
     * @param isLandlord 是否是地主
     */
    gameStart(isLandlord) {
        if (isLandlord) {
            this._avatar.beLandlord();
        }
        this._desktop.hide();
    }
    /**
     * 叫地主
     * @param isAsk
     */
    askLandlord(isAsk) {
        this._buttonControl.hide();
        this._desktop.show();
        this._desktop.askLandlord(isAsk);
        console.log(`${this._userId} ${isAsk ? '叫地主' : '不叫地主'}`);
    }
    /**
     * 抢地主
     * @param isGrab
     */
    grabLandlord(isGrab) {
        this._buttonControl.hide();
        this._desktop.show();
        this._desktop.grabLandlord(isGrab);
        console.log(`${this._userId} ${isGrab ? '抢地主' : '不抢地主'}`);
    }
    /**
     * 出牌
     * @param pukes
     */
    shotPukes(pukes) {
        console.log(`${this._userId} 出牌 ${pukes}`);
        // 手牌出掉
        this._handPukes.shotChoosePukes();
        // 按钮隐藏
        this._buttonControl.hide();
        // 桌面牌安排下
        this._desktop.shotPukes(pukes);
        this._desktop.show();
    }
    /**
     * 进入出牌阶段
     */
    enterShotPukes() {
        this._desktop.reset();
        this._desktop.hide();
        // 如果桌面上最大的牌是空的，意味着这次，主视角玩家必须出牌
        this._buttonControl.enterPukes(this._app.room.desktopPukes.length === 0);
        this._buttonControl.show();
        this._handPukes.pukesChange();
    }
    /**
     * 游戏重置
     */
    gameReset() {
        // 地主标示重置一下
        this._avatar.beNormal();
        this._buttonControl.enterReady(false);
        this._buttonControl.show();
        this._desktop.hide();
        this._handPukes.deleteAll();
        this._handPukes.hide();
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (MainPlayerArea);


/***/ }),

/***/ "./src/component/area/player-area/RightPlayerArea.ts":
/*!***********************************************************!*\
  !*** ./src/component/area/player-area/RightPlayerArea.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/Avatar */ "./src/component/player/Avatar.ts");
/* harmony import */ var _player_Name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../player/Name */ "./src/component/player/Name.ts");
/* harmony import */ var _SidePlayerArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidePlayerArea */ "./src/component/area/player-area/SidePlayerArea.ts");
/* harmony import */ var _pukes_SideHandPukes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pukes/SideHandPukes */ "./src/component/pukes/SideHandPukes.ts");
/* harmony import */ var _desktop_Desktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../desktop/Desktop */ "./src/component/desktop/Desktop.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../render/ResourceManage */ "./src/render/ResourceManage.ts");






class RightPlayerArea extends _SidePlayerArea__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * 初始化头像
     */
    _initAvatar() {
        this._avatar = new _player_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"]({
            width: 75,
            height: 100,
            top: 0,
            left: this.width - 100,
            image: _render_ResourceManage__WEBPACK_IMPORTED_MODULE_5__["default"].get('AVATAR')
        });
        this.addChildren(this._avatar);
    }
    /**
     * 初始化名称
     */
    _initName(name) {
        this._name = new _player_Name__WEBPACK_IMPORTED_MODULE_1__["default"]({
            width: 75,
            height: 30,
            top: 100,
            left: this.width - 100,
            text: name,
            size: 18
        });
        this.addChildren(this._name);
    }
    /**
     * 初始化手牌
     */
    _initHandPukes() {
        this._handPukes = new _pukes_SideHandPukes__WEBPACK_IMPORTED_MODULE_3__["default"](this._app, {
            pukeWidth: 20,
            interval: 0,
            width: 20,
            height: 30,
            top: 100,
            left: this.width - 20 - 100
        });
        this.addChildren(this._handPukes);
    }
    _initDesktopPukes() {
        this._desktop = new _desktop_Desktop__WEBPACK_IMPORTED_MODULE_4__["default"]({
            width: this.width - 100,
            height: 100,
            top: 0,
            left: 0,
        });
        this.addChildren(this._desktop);
    }
    constructor(app, options) {
        super(app, options);
        this._initAvatar();
        this._initName(options.user.name);
        this._initHandPukes();
        this._initDesktopPukes();
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (RightPlayerArea);


/***/ }),

/***/ "./src/component/area/player-area/SidePlayerArea.ts":
/*!**********************************************************!*\
  !*** ./src/component/area/player-area/SidePlayerArea.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../render/Container */ "./src/render/Container.ts");

class SidePlayerArea extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(app, options) {
        super(options);
        this._app = app;
        this._userId = options.user.uid;
    }
    get userId() {
        return this._userId;
    }
    /**
     * 重置
     */
    reset() {
        // 桌面隐藏
        this._desktop.hide();
        // 手牌隐藏
        this._handPukes.hide();
    }
    /**
     * 准备
     * @param isReady
     */
    ready(isReady) {
        this._handPukes.hide();
        if (isReady) {
            // 桌面展示，并且显示准备
            this._desktop.show();
            this._desktop.ready(isReady);
        }
        else {
            this._desktop.hide();
        }
        console.log(`${this._userId} ${isReady ? '准备' : '取消准备'}`);
    }
    /**
     * @override
     * 初始化手牌
     * @param amount
     */
    initPukes(amount) {
        this._desktop.hide();
        this._handPukes.postPukes(amount);
        this._handPukes.show();
    }
    /**
     * @override
     * 初始化手牌
     * @param amount
     */
    getPukes(amount) {
        this._handPukes.postPukes(amount);
    }
    /**
     * 进行叫地主
     */
    enterAskLandlord() {
        this._desktop.hide();
        console.log(`${this._userId} 进入叫地主状态`);
    }
    /**
     * 进行抢地主
     */
    enterGrabLandlord() {
        this._desktop.hide();
        console.log(`${this._userId} 进入抢地主状态`);
    }
    /**
     * 游戏开始
     */
    gameStart(isLandlord) {
        if (isLandlord) {
            this._avatar.beLandlord();
        }
        this._desktop.hide();
    }
    /**
     * 叫地主
     * @param isAsk
     */
    askLandlord(isAsk) {
        this._desktop.show();
        this._desktop.askLandlord(isAsk);
        console.log(`${this._userId} ${isAsk ? '叫地主' : '不叫地主'}`);
    }
    /**
     * 抢地主
     * @param isGrab
     */
    grabLandlord(isGrab) {
        this._desktop.show();
        this._desktop.grabLandlord(isGrab);
        console.log(`${this._userId} ${isGrab ? '抢地主' : '不抢地主'}`);
    }
    /**
     * 出牌
     * @param pukes
     */
    shotPukes(pukes) {
        console.log(`${this._userId} 出牌 ${pukes}`);
        // 手牌出掉
        this._handPukes.shotPukes(pukes.length);
        // 桌面牌安排下
        this._desktop.shotPukes(pukes);
        this._desktop.show();
    }
    /**
     * 进入出牌阶段
     */
    enterShotPukes() {
        console.log(`${this.userId} 进入出牌阶段`);
        this._desktop.reset();
        this._desktop.hide();
    }
    /**
     * 游戏重置
     */
    gameReset() {
        this._avatar.beNormal();
        this._handPukes.reset();
        this._handPukes.hide();
        this._desktop.reset();
        this._desktop.hide();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (SidePlayerArea);


/***/ }),

/***/ "./src/component/area/top-area/BackButton.ts":
/*!***************************************************!*\
  !*** ./src/component/area/top-area/BackButton.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../button/button */ "./src/component/button/button.ts");

class BackButton extends _button_button__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (BackButton);


/***/ }),

/***/ "./src/component/area/top-area/LandlordPukes.ts":
/*!******************************************************!*\
  !*** ./src/component/area/top-area/LandlordPukes.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pukes_BasePukesContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pukes/BasePukesContainer */ "./src/component/pukes/BasePukesContainer.ts");

class LandlordPukes extends _pukes_BasePukesContainer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (LandlordPukes);


/***/ }),

/***/ "./src/component/area/top-area/RoomInfo.ts":
/*!*************************************************!*\
  !*** ./src/component/area/top-area/RoomInfo.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../render/Text */ "./src/render/Text.ts");

class RoomInfo extends _render_Text__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (RoomInfo);


/***/ }),

/***/ "./src/component/area/top-area/TopArea.ts":
/*!************************************************!*\
  !*** ./src/component/area/top-area/TopArea.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _LandlordPukes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandlordPukes */ "./src/component/area/top-area/LandlordPukes.ts");
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackButton */ "./src/component/area/top-area/BackButton.ts");
/* harmony import */ var _RoomInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoomInfo */ "./src/component/area/top-area/RoomInfo.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");





class TopArea extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(app, options) {
        super(options);
        this._handleRoomShow = () => {
            this._roomInfo.text = `房间号: ${this._app.room.roomId}`;
        };
        this._handleGameStart = (data) => {
            this._landlordPukes.postPukes(data.landlordPukes);
        };
        this._handleGameReset = () => {
            this._landlordPukes.deleteAll();
        };
        this._app = app;
        this._initBackButton();
        this._initRoomInfo();
        this._initLandlordPukes();
        this._app.room.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_4__["EVENT_NAME"].ROOM_SHOW, this._handleRoomShow);
        this._app.room.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_4__["EVENT_NAME"].GAME_START, this._handleGameStart);
        this._app.room.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_4__["EVENT_NAME"].GAME_RESET, this._handleGameReset);
    }
    _initBackButton() {
        this._backButton = new _BackButton__WEBPACK_IMPORTED_MODULE_2__["default"]({
            text: '返回',
            callback: () => {
                console.log('返回大厅');
                this._app.room.leaveRoom();
            },
            available: true,
            width: 60,
            height: 30,
            top: 5,
            left: 10
        });
        this.addChildren(this._backButton);
    }
    _initRoomInfo() {
        this._roomInfo = new _RoomInfo__WEBPACK_IMPORTED_MODULE_3__["default"]({
            text: '房间号: ',
            size: 16,
            width: 100,
            height: 20,
            top: 10,
            left: 80,
            color: 'black'
        });
        this.addChildren(this._roomInfo);
    }
    _initLandlordPukes() {
        this._landlordPukes = new _LandlordPukes__WEBPACK_IMPORTED_MODULE_1__["default"]({
            pukeWidth: 28,
            interval: 0,
            width: 28 * 3,
            height: 42,
            left: (this._width - 28 * 3) / 2,
            top: 0
        });
        this.addChildren(this._landlordPukes);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (TopArea);


/***/ }),

/***/ "./src/component/button/ButtonControl.ts":
/*!***********************************************!*\
  !*** ./src/component/button/ButtonControl.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/component/button/button.ts");


class ButtonControl extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this._app = options.app;
        let buttonWidth = 100;
        let buttonHeight = 40;
        this._leftButton = new _button__WEBPACK_IMPORTED_MODULE_1__["default"]({
            text: '左按钮',
            left: this.width / 2 - buttonWidth - 40,
            top: (this.height - buttonHeight) / 2,
            width: buttonWidth,
            height: buttonHeight
        });
        this._rightButton = new _button__WEBPACK_IMPORTED_MODULE_1__["default"]({
            text: '右按钮',
            left: this.width / 2 + 40,
            top: (this.height - buttonHeight) / 2,
            width: buttonWidth,
            height: buttonHeight
        });
        this._leftButton.hide();
        this._rightButton.hide();
        this.addChildren(this._leftButton);
        this.addChildren(this._rightButton);
    }
    /**
     * 进入等待阶段
     */
    enterReady(hasReady = false) {
        this._leftButton.text = '准备';
        this._leftButton.callback = () => {
            this._app.room.ready(true);
            this.enterReady(true);
        };
        this._rightButton.text = '取消准备';
        this._rightButton.callback = () => {
            this._app.room.ready(false);
            this.enterReady(false);
        };
        this._leftButton.show();
        this._rightButton.show();
        if (hasReady) {
            this._leftButton.disable();
            this._rightButton.enable();
        }
        else {
            this._leftButton.enable();
            this._rightButton.disable();
        }
    }
    /**
     * 进入 叫地主 阶段
     */
    enterAskLandlord() {
        this._leftButton.text = '不叫';
        this._leftButton.callback = () => {
            this._app.room.askLandlord(false);
            this.hideAll();
        };
        this._rightButton.text = '叫地主';
        this._rightButton.callback = () => {
            this._app.room.askLandlord(true);
            this.hideAll();
        };
        this._leftButton.enable();
        this._leftButton.show();
        this._rightButton.enable();
        this._rightButton.show();
    }
    /**
     * 进入 抢地主 阶段
     */
    enterGrabLandlord() {
        this._leftButton.text = '不抢';
        this._leftButton.callback = () => {
            this._app.room.grabLandlord(false);
            this.hideAll();
        };
        this._rightButton.text = '抢地主';
        this._rightButton.callback = () => {
            this._app.room.grabLandlord(true);
            this.hideAll();
        };
        this._leftButton.enable();
        this._leftButton.show();
        this._rightButton.enable();
        this._rightButton.show();
    }
    /**
     * 进入 出牌 阶段
     */
    enterPukes(isMustShot) {
        this._leftButton.text = '不出';
        this._leftButton.callback = () => {
            this._app.room.puke(false);
            this.disableAll();
        };
        this._rightButton.text = '出牌';
        this._rightButton.callback = () => {
            this._app.room.puke(true);
            this.disableAll();
        };
        this._leftButton.show();
        this._rightButton.show();
        if (isMustShot) {
            this._leftButton.disable();
        }
        else {
            this._leftButton.enable();
        }
        // 初始化的时候，默认无法出牌
        this._rightButton.disable();
    }
    /**
     * 可以出牌
     */
    canShotPukes() {
        this._rightButton.enable();
    }
    /**
     * 不能出牌
     */
    canNotShotPukes() {
        this._rightButton.disable();
    }
    /**
     * 隐藏所有按钮
     */
    hideAll() {
        this._leftButton.hide();
        this._rightButton.hide();
    }
    /**
     * 所有按钮都不可用
     */
    disableAll() {
        this._leftButton.disable();
        this._rightButton.disable();
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (ButtonControl);


/***/ }),

/***/ "./src/component/button/button.ts":
/*!****************************************!*\
  !*** ./src/component/button/button.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Text */ "./src/render/Text.ts");
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/Container */ "./src/render/Container.ts");


class Button extends _render_Container__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * @param {*} options
     *  text 按钮内容
     *  valid 可用状态下
     *      color 文字颜色
     *      bgColor 背景色
     *  invalid 不可用状态下
     *      color 文字颜色
     *      bgColor 背景色
     *  available 是否可用
     *  style 样式
     */
    constructor(options) {
        super(options);
        /**
         * 监听的点击事件
         * @param x
         * @param y
         */
        this._touch = (data) => {
            let { x, y } = data;
            if (this._available && this.contain(x, y)) {
                this.callback && this.callback();
            }
        };
        this._visiable = true;
        this._callback = options.callback || function () { };
        this.addEventListener('touchstart', this._touch);
        this._setConfig(options);
        this._setText(options.text || '');
    }
    /**
     * 按钮可用态和不可用态处理一下
     * @param options
     */
    _setConfig(options) {
        // 有效状态下样式安排一下
        if (options.valid === undefined) {
            options.valid = {};
        }
        this._valid = {
            color: '#ffffff',
            bgColor: '#0099FF'
        };
        Object.assign(this._valid, options.valid);
        // 无效状态下样式安排一下
        if (options.invalid === undefined) {
            options.invalid = {};
        }
        this._invalid = {
            color: '#ffffff',
            bgColor: '#969696'
        };
        Object.assign(this._invalid, options.invalid);
        // 初始状态是否可用
        if (options.available) {
            this.enable();
        }
        else {
            this.disable();
        }
    }
    /**
     * 给按钮添加文字组件
     * @param text
     */
    _setText(text) {
        let textObject = new _render_Text__WEBPACK_IMPORTED_MODULE_0__["default"]({
            text: text,
            color: this.color,
            size: (this.height / 2) >> 0,
            width: this.width,
            height: this.height,
            top: 0,
            left: 0
        });
        this._textObject = textObject;
        this.addChildren(textObject);
    }
    get text() {
        return this._textObject.text;
    }
    set text(text) {
        this._textObject.text = text;
    }
    get color() {
        return this._available ? this._valid.color : this._invalid.color;
    }
    get bgColor() {
        return this._available ? this._valid.bgColor : this._invalid.bgColor;
    }
    get callback() {
        return this._callback;
    }
    set callback(callback) {
        this._callback = callback;
    }
    enable() {
        this._available = true;
    }
    disable() {
        this._available = false;
    }
    show() {
        this._visiable = true;
    }
    hide() {
        this._visiable = false;
    }
    render(ctx) {
        if (!this._visiable) {
            return;
        }
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.bgColor;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        super.render(ctx);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Button);


/***/ }),

/***/ "./src/component/desktop/Desktop.ts":
/*!******************************************!*\
  !*** ./src/component/desktop/Desktop.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _DesktopPukes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopPukes */ "./src/component/desktop/DesktopPukes.ts");
/* harmony import */ var _DesktopText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopText */ "./src/component/desktop/DesktopText.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/ResourceManage */ "./src/render/ResourceManage.ts");




class Desktop extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    _initDesktopPukes() {
        this._desktopPukes = new _DesktopPukes__WEBPACK_IMPORTED_MODULE_1__["default"]({
            pukeWidth: 40,
            interval: 30,
            width: this.width,
            height: this.height,
            top: 0,
            left: 0,
        });
        this.addChildren(this._desktopPukes);
    }
    _initDesktopText() {
        this._desktopText = new _DesktopText__WEBPACK_IMPORTED_MODULE_2__["default"]({
            top: (this.height - 60) / 2,
            left: (this.width - 120) / 2,
            width: 120,
            height: 60,
            image: _render_ResourceManage__WEBPACK_IMPORTED_MODULE_3__["default"].get('READY')
        });
        this._desktopText.hide();
        this.addChildren(this._desktopText);
    }
    constructor(options) {
        super(options);
        this._initDesktopPukes();
        this._initDesktopText();
    }
    /**
     * 重置
     */
    reset() {
        this._desktopText.hide();
        this._desktopPukes.hide();
        this._desktopPukes.deleteAll();
    }
    /**
     * 准备
     */
    ready(isReady) {
        this._desktopText.ready(isReady);
        this._desktopText.show();
    }
    /**
     * 叫地主
     * @param isAsk
     */
    askLandlord(isAsk) {
        this._desktopText.askLandlord(isAsk);
        this._desktopText.show();
    }
    /**
     * 抢地主
     * @param isGrab
     */
    grabLandlord(isGrab) {
        this._desktopText.grabLandlord(isGrab);
        this._desktopText.show();
    }
    /**
     * 出牌
     * @param pukes
     */
    shotPukes(pukes) {
        if (pukes.length === 0) {
            this._desktopText.noShot();
            this._desktopText.show();
        }
        else {
            this._desktopPukes.postPukes(pukes);
            this._desktopPukes.show();
        }
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Desktop);


/***/ }),

/***/ "./src/component/desktop/DesktopPukes.ts":
/*!***********************************************!*\
  !*** ./src/component/desktop/DesktopPukes.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pukes_BasePukesContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pukes/BasePukesContainer */ "./src/component/pukes/BasePukesContainer.ts");

class DesktopPukes extends _pukes_BasePukesContainer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (DesktopPukes);


/***/ }),

/***/ "./src/component/desktop/DesktopText.ts":
/*!**********************************************!*\
  !*** ./src/component/desktop/DesktopText.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Bitmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Bitmap */ "./src/render/Bitmap.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/ResourceManage */ "./src/render/ResourceManage.ts");


class DesktopText extends _render_Bitmap__WEBPACK_IMPORTED_MODULE_0__["default"] {
    _change(key) {
        if (key === null) {
            this.hide();
            return;
        }
        this._image = _render_ResourceManage__WEBPACK_IMPORTED_MODULE_1__["default"].get(key);
        this.show();
    }
    constructor(options) {
        super(options);
    }
    ready(isReady) {
        if (isReady) {
            this._change('READY');
        }
        else {
            this._change(null);
        }
    }
    askLandlord(isAsk) {
        if (isAsk) {
            this._change('ASK');
        }
        else {
            this._change('NO_ASK');
        }
    }
    grabLandlord(isGrab) {
        if (isGrab) {
            this._change('GRAB');
        }
        else {
            this._change('NO_GRAB');
        }
    }
    noShot() {
        this._change('NO_SHOT');
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (DesktopText);


/***/ }),

/***/ "./src/component/modal/Model.ts":
/*!**************************************!*\
  !*** ./src/component/modal/Model.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _render_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/Text */ "./src/render/Text.ts");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button */ "./src/component/button/button.ts");



class OverModal extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    _initText() {
        this._text = new _render_Text__WEBPACK_IMPORTED_MODULE_1__["default"]({
            text: '获胜者: ',
            size: 22,
            color: '#ffffff',
            width: 140,
            height: 30,
            top: 20,
            left: (this._width - 140) / 2
        });
        this.addChildren(this._text);
    }
    _initButton() {
        this._button = new _button_button__WEBPACK_IMPORTED_MODULE_2__["default"]({
            text: '确定',
            callback: () => {
                this._app.room.confirmResult();
                this.hide();
            },
            available: true,
            width: 60,
            height: 30,
            top: 70,
            left: (this._width - 60) / 2
        });
        this.addChildren(this._button);
    }
    constructor(app, options) {
        super(options);
        this._app = app;
        this._initText();
        this._initButton();
    }
    show(uid) {
        this._text.text = `获胜者: ${uid}`;
        super.show();
    }
    render(ctx) {
        if (!this._display) {
            return;
        }
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 0, 0, .7)';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        super.render(ctx);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (OverModal);


/***/ }),

/***/ "./src/component/player/Avatar.ts":
/*!****************************************!*\
  !*** ./src/component/player/Avatar.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Bitmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Bitmap */ "./src/render/Bitmap.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/ResourceManage */ "./src/render/ResourceManage.ts");


/**
 * 玩家头像
 */
class Avatar extends _render_Bitmap__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
    beLandlord() {
        this._image = _render_ResourceManage__WEBPACK_IMPORTED_MODULE_1__["default"].get('LANDLORD');
    }
    beNormal() {
        this._image = _render_ResourceManage__WEBPACK_IMPORTED_MODULE_1__["default"].get('AVATAR');
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Avatar);


/***/ }),

/***/ "./src/component/player/Name.ts":
/*!**************************************!*\
  !*** ./src/component/player/Name.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Text */ "./src/render/Text.ts");

class Name extends _render_Text__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Name);


/***/ }),

/***/ "./src/component/pukes/BasePuke.ts":
/*!*****************************************!*\
  !*** ./src/component/pukes/BasePuke.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Bitmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Bitmap */ "./src/render/Bitmap.ts");

class BasePuke extends _render_Bitmap__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this._id = options.id;
        // 默认没有选中
        this._choose = options.choose || false;
    }
    get choose() {
        return this._choose;
    }
    get id() {
        return this._id;
    }
    /**
     * 选中
     */
    select() {
        if (this.choose) {
            this.translateY(((this.height * 0.15) >> 0));
        }
        else {
            this.translateY(-((this.height * 0.15) >> 0));
        }
        this._choose = !this._choose;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (BasePuke);


/***/ }),

/***/ "./src/component/pukes/BasePukesContainer.ts":
/*!***************************************************!*\
  !*** ./src/component/pukes/BasePukesContainer.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _BasePuke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePuke */ "./src/component/pukes/BasePuke.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/ResourceManage */ "./src/render/ResourceManage.ts");



var PUKE_HORIZONTAL_ALIGN;
(function (PUKE_HORIZONTAL_ALIGN) {
    PUKE_HORIZONTAL_ALIGN[PUKE_HORIZONTAL_ALIGN["LEFT"] = 0] = "LEFT";
    PUKE_HORIZONTAL_ALIGN[PUKE_HORIZONTAL_ALIGN["CENTER"] = 1] = "CENTER";
    PUKE_HORIZONTAL_ALIGN[PUKE_HORIZONTAL_ALIGN["RIGHT"] = 2] = "RIGHT";
})(PUKE_HORIZONTAL_ALIGN || (PUKE_HORIZONTAL_ALIGN = {}));
;
var PUKE_VERTICAL_ALIGN;
(function (PUKE_VERTICAL_ALIGN) {
    PUKE_VERTICAL_ALIGN[PUKE_VERTICAL_ALIGN["TOP"] = 0] = "TOP";
    PUKE_VERTICAL_ALIGN[PUKE_VERTICAL_ALIGN["MIDDLE"] = 1] = "MIDDLE";
    PUKE_VERTICAL_ALIGN[PUKE_VERTICAL_ALIGN["BOTTOM"] = 2] = "BOTTOM";
})(PUKE_VERTICAL_ALIGN || (PUKE_VERTICAL_ALIGN = {}));
;
class BasePukesContainer extends _render_Container__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * 移除某张扑克牌
     * @param {*} object
     */
    _deletePuke(object) {
        this.removeChildren(object);
        this._updatePukes();
    }
    /**
     * 加入单张扑克牌
     * @param {*} puke
     */
    _postPuke(puke, zIndex) {
        this.addChildren(puke, zIndex);
        this._updatePukes();
    }
    /**
     * 触发更新维护的扑克牌的位置
     */
    _updatePukes() {
        // 获取手上扑克总数
        let len = this._children.length;
        if (len === 0) {
            return;
        }
        // 计算出来这次手上扑克牌最大宽度
        let maxWidth = this._pukeWidth + (this._pukeWidth - this._interval) * (len - 1);
        // 起始点x，y
        let x;
        let y = 0;
        let part = len;
        // 如果最大宽度超了，意味着需要有多行
        if (maxWidth > this.width) {
            // 每行的扑克牌数量
            part = (this.width / maxWidth * len) >> 0;
            // 那么x必然从0开始了
            x = 0;
        }
        else {
            // 计算x的位置
            x = (this.width - maxWidth) / 2;
        }
        let puke;
        for (let i = 0; i < len; i++) {
            puke = this._children[i];
            // 设置扑克牌的位置
            puke.setPosition(x, y + ((i / part) >> 0) * this._pukeHeight / 3);
            x += (this._pukeWidth - this._interval);
            if (x > this.width - this._pukeWidth) {
                x = 0;
            }
        }
    }
    constructor(options) {
        super(options);
        // 容器中包含的扑克牌安排一下
        this._pukeWidth = options.pukeWidth;
        this._pukeHeight = (this._pukeWidth / 105 * 150) >> 0;
        if (options.interval !== undefined) {
            this._interval = options.interval;
        }
        else {
            this._interval = this._pukeWidth;
        }
        // 对齐安排一下
        this._horizontalAlign = options.horizontalAlign || PUKE_HORIZONTAL_ALIGN.LEFT;
        this._verticalAlign = options.verticalAlign || PUKE_VERTICAL_ALIGN.TOP;
    }
    /**
     * 移除部分扑克牌
     * @param {string[]} pukes
     */
    deletePukes(pukes) {
        this._children.forEach((puke) => {
            let index = pukes.indexOf(puke.id);
            if (index >= 0) {
                this._deletePuke(puke);
                pukes.splice(index, 1);
            }
        });
    }
    /**
     * 添加部分扑克牌
     * @param {string[]} pukes
     */
    postPukes(pukes) {
        pukes.forEach((pukeString) => {
            let puke = new _BasePuke__WEBPACK_IMPORTED_MODULE_1__["default"]({
                image: _render_ResourceManage__WEBPACK_IMPORTED_MODULE_2__["default"].get(`PUKE_${pukeString}`),
                id: pukeString,
                width: this._pukeWidth,
                height: this._pukeHeight,
                left: 0,
                top: 0
            });
            this._postPuke(puke);
        });
    }
    /**
     * 删除所有牌
     */
    deleteAll() {
        this._children = [];
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (BasePukesContainer);


/***/ }),

/***/ "./src/component/pukes/MainHandPukes.ts":
/*!**********************************************!*\
  !*** ./src/component/pukes/MainHandPukes.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasePukesContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePukesContainer */ "./src/component/pukes/BasePukesContainer.ts");
/* harmony import */ var _BasePuke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePuke */ "./src/component/pukes/BasePuke.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/ResourceManage */ "./src/render/ResourceManage.ts");




class MainHandPukes extends _BasePukesContainer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(app, options) {
        super(options);
        this._touchSet = new Set();
        /**
         * touchstart，touchmove的时候触发
         */
        this._touch = (data) => {
            let { x, y } = data;
            let len = this._children.length;
            let i;
            let temp;
            let puke;
            for (i = len - 1; i >= 0; i--) {
                temp = this._children[i];
                if (temp.contain(x, y)) {
                    puke = temp;
                    break;
                }
            }
            if (puke) {
                this._choosePuke(puke);
            }
        };
        /**
         * touchend的时候触发
         */
        this._touchEnd = () => {
            this._touchSet.clear();
        };
        /**
         * 初始化手牌，有动画
         * @param pukes
         */
        this._initPukes = (pukes) => {
            let self = this;
            let time = 200;
            let i = 0;
            function getPuke() {
                if (pukes[i] === undefined) {
                    return;
                }
                self.postPukes([pukes[i]]);
                i++;
                setTimeout(getPuke, time);
            }
            getPuke();
        };
        /**
         * 手牌中选中的牌发生变化时触发
         */
        this.pukesChange = () => {
            this.dispatchEvent('choosePukesChange');
        };
        this._app = app;
        this.addEventListener('touchstart', this._touch);
        this.addEventListener('touchmove', this._touch);
        this.addEventListener('touchend', this._touchEnd);
        this.pukesChange = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this.pukesChange, 10);
    }
    _choosePuke(puke) {
        if (this._touchSet.has(puke)) {
            return;
        }
        this._touchSet.add(puke);
        puke.select();
        this.pukesChange();
    }
    /**
     * 找到将要添加的puke的层级，排序插入时使用
     * @param pukeA
     */
    _findPukeIndex(pukeA) {
        let pukeB;
        for (let i = 0; i < this._children.length; i++) {
            pukeB = this._children[i].id;
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["comparePukes"])([pukeA], [pukeB]) < 0) {
                return i;
            }
        }
        return undefined;
    }
    /**
     * 选中部分扑克牌
     * @param pukes
     */
    choosePukes(pukes) {
        let id;
        for (let i = 0; i < this._children.length; i++) {
            id = this._children[i].id;
            if (pukes.indexOf(id) > -1) {
                // 需要选中
                this._choosePuke(this._children[i]);
            }
        }
    }
    /**
     * 获取用户选中的扑克牌
     */
    getChoosePukes() {
        let result = [];
        let len = this._children.length;
        let i;
        let temp;
        for (i = 0; i < len; i++) {
            temp = this._children[i];
            if (temp.choose) {
                result.push(temp.id);
            }
        }
        return result;
    }
    /**
     * 将选中的牌出掉
     */
    shotChoosePukes() {
        let len = this._children.length;
        let i;
        let temp;
        for (i = len - 1; i >= 0; i--) {
            temp = this._children[i];
            if (temp.choose) {
                this._deletePuke(temp);
            }
        }
    }
    /**
     * @override
     * 添加部分扑克牌
     * @param {string[]} pukes
     */
    postPukes(pukes, reorder = false) {
        let index = undefined;
        pukes.forEach((pukeString) => {
            let puke = new _BasePuke__WEBPACK_IMPORTED_MODULE_1__["default"]({
                image: _render_ResourceManage__WEBPACK_IMPORTED_MODULE_3__["default"].get(`PUKE_${pukeString}`),
                id: pukeString,
                width: this._pukeWidth,
                height: this._pukeHeight,
                left: 0,
                top: 0
            });
            if (reorder) {
                index = this._findPukeIndex(pukeString);
            }
            this._postPuke(puke, index);
        });
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (MainHandPukes);


/***/ }),

/***/ "./src/component/pukes/SideHandPukes.ts":
/*!**********************************************!*\
  !*** ./src/component/pukes/SideHandPukes.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/Text */ "./src/render/Text.ts");
/* harmony import */ var _BasePuke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePuke */ "./src/component/pukes/BasePuke.ts");
/* harmony import */ var _render_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/Container */ "./src/render/Container.ts");
/* harmony import */ var _render_ResourceManage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/ResourceManage */ "./src/render/ResourceManage.ts");




class SideHandPukes extends _render_Container__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(app, options) {
        super(options);
        this._remainingPukes = 0;
        this._app = app;
        this._pukeWidth = (options.width / 1) >> 0;
        this._pukeHeight = (this._pukeWidth / 105 * 150) >> 0;
        this._addBackPukes();
        this._addPukesCount();
        this._display = false;
    }
    _addBackPukes() {
        let pukeUrl;
        pukeUrl = 'back';
        this._backPuke = new _BasePuke__WEBPACK_IMPORTED_MODULE_1__["default"]({
            image: _render_ResourceManage__WEBPACK_IMPORTED_MODULE_3__["default"].get(`BACK`),
            id: pukeUrl,
            width: this._pukeWidth,
            height: this._pukeHeight,
            left: 0,
            top: 0,
        });
        this.addChildren(this._backPuke);
    }
    _addPukesCount() {
        this._pukesCount = new _render_Text__WEBPACK_IMPORTED_MODULE_0__["default"]({
            width: this._pukeWidth,
            height: this._pukeHeight,
            left: 0,
            top: 0,
            text: String(this._remainingPukes),
            color: 'white',
            size: 16
        });
        this.addChildren(this._pukesCount);
    }
    /**
     * 出牌
     * @param amount
     */
    shotPukes(amount) {
        this._remainingPukes -= amount;
        this._pukesCount.text = String(this._remainingPukes);
    }
    /**
     * 添加部分扑克牌
     * @param {string[]} pukes
     */
    postPukes(amount) {
        this._remainingPukes += amount;
        this._pukesCount.text = String(this._remainingPukes);
    }
    reset() {
        this._remainingPukes = 0;
        this._pukesCount.text = String(this._remainingPukes);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (SideHandPukes);


/***/ }),

/***/ "./src/hall/Hall.css":
/*!***************************!*\
  !*** ./src/hall/Hall.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Hall.css */ "./node_modules/css-loader/dist/cjs.js!./src/hall/Hall.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/hall/Hall.ts":
/*!**************************!*\
  !*** ./src/hall/Hall.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _Hall_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hall.css */ "./src/hall/Hall.css");
/* harmony import */ var _Hall_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Hall_css__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Hall {
    constructor(options) {
        // 是否初始化过，该组件只会初始化一次
        this._inited = false;
        this._app = options.app;
    }
    _show() {
        if (this._inited) {
            this._box.style.display = 'block';
        }
        else {
            this._initUI();
            this._inited = true;
        }
    }
    _hide() {
        this._box.style.display = 'none';
    }
    _initUI() {
        this._createButton = document.createElement('div');
        this._createButton.className = 'hall-create-button';
        this._createButton.innerText = '创建房间';
        this._createButton.onclick = () => {
            this.createRoom();
        };
        this._roomIdInput = document.createElement('input');
        this._roomIdInput.className = 'hall-rid-input';
        this._enterButton = document.createElement('div');
        this._enterButton.className = 'hall-enter-button';
        this._enterButton.innerText = '加入房间';
        this._enterButton.onclick = () => {
            this.enterRoom(this._roomIdInput.value);
        };
        this._box = document.createElement('div');
        this._box.className = 'hall-box';
        this._box.appendChild(this._createButton);
        this._box.appendChild(this._roomIdInput);
        this._box.appendChild(this._enterButton);
        this._app.root.appendChild(this._box);
    }
    _createRoom() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._app.network.notify({
                    route: 'Hall.CreateRoom',
                }, function (result) {
                    if (result.retcode === _utils__WEBPACK_IMPORTED_MODULE_0__["RET_SUCCESS"]) {
                        console.log('创建房间成功', result);
                        resolve(result);
                    }
                    else {
                        console.error('创建房间失败');
                    }
                });
            });
        });
    }
    _enterRoom(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this._app.network.notify({
                    route: 'Hall.EnterRoom',
                    body: {
                        rid: rid
                    }
                }, function (result) {
                    if (result.retcode === _utils__WEBPACK_IMPORTED_MODULE_0__["RET_SUCCESS"]) {
                        console.log('进入房间成功');
                        resolve(result);
                    }
                    else {
                        console.error('进入房间失败');
                    }
                });
            });
        });
    }
    show() {
        console.log('进入大厅');
        this._show();
    }
    hide() {
        console.log('离开大厅');
        this._hide();
    }
    createRoom() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this._createRoom();
            this._app.enterRoom(result);
        });
    }
    enterRoom(rid) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this._enterRoom(rid);
            result.roomId = rid;
            this._app.enterRoom(result);
        });
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Hall);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.ts");
/* harmony import */ var _render_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/polyfill */ "./src/render/polyfill.ts");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/User */ "./src/user/User.ts");



window.start = function () {
    let app = new _App__WEBPACK_IMPORTED_MODULE_0__["default"]({
        root: document.querySelector('.root')
    });
    window.app = app;
};
window.startTest = function (app) {
    app.debugger = true;
    // @ts-ignore
    app._user = new _user_User__WEBPACK_IMPORTED_MODULE_2__["default"]({
        uid: 'a',
        name: 'a'
    });
    // @ts-ignore
    app._box.style.display = 'none';
    app.enterHall();
    app.enterRoom({
        roomId: '123',
        players: {
            'a': {
                playerName: 'a',
                position: 0,
            },
            'b': {
                playerName: 'b',
                position: 1,
            },
            'c': {
                playerName: 'c',
                position: 2,
            }
        }
    });
    // @ts-ignore
    app.room._enterAskLandlord({
        askPlayer: 'a',
        pukes: ["1-29", "4-29", "4-22", "2-31", "1-24", "2-25", "2-21", "3-26", "3-19", "1-21", "3-30", "3-31", "3-21", "4-26", "2-30", "1-30", "1-27"]
    });
    // setTimeout(function() {
    //     // @ts-ignore
    //     app.room._gameStart({
    //         landlordPlayer: 'a',
    //         landlordPukes: ["1-29", "4-29", "4-22"]
    //     });
    // }, 3000);
    window.someonePukes = function (user) {
        // @ts-ignore
        app.room._playerPukes({
            player: user,
            pukes: ['1-29', '4-29', '1-29', '4-29', '1-29', '4-29', '1-29', '4-29']
        });
    };
};


/***/ }),

/***/ "./src/network/Network.ts":
/*!********************************!*\
  !*** ./src/network/Network.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/EventDispatcher */ "./src/render/EventDispatcher.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var NETWORK_STATUS;
(function (NETWORK_STATUS) {
    NETWORK_STATUS[NETWORK_STATUS["UNOPEN"] = 0] = "UNOPEN";
    NETWORK_STATUS[NETWORK_STATUS["OPENING"] = 1] = "OPENING";
    NETWORK_STATUS[NETWORK_STATUS["OPENED"] = 2] = "OPENED";
})(NETWORK_STATUS || (NETWORK_STATUS = {}));
;
class Network extends _render_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super();
        this._callbackIndex = 0;
        this._callbacks = [];
        this._host = options.host;
        this._port = options.port || null;
        this._useSecurity = options.useSecurity || false;
        this._status = NETWORK_STATUS.UNOPEN;
    }
    _processMessage(msg) {
        // response消息
        if (msg.id) {
            let cb = this._callbacks[msg.id];
            delete this._callbacks[msg.id];
            if (typeof cb !== 'function') {
                console.error('callback is not a function for request: ', msg.id);
                return;
            }
            cb(msg.body);
            return;
        }
        // 服务器推送消息
        let route = msg.route;
        if (!route) {
            console.error('no route in message');
            return;
        }
        this.dispatchEvent(route, msg.data);
    }
    _processMessageBatch(msg) {
        for (let i = 0; i < msg.length; i++) {
            this._processMessage(msg[i]);
        }
    }
    get status() {
        return this._status;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let url = `${this._useSecurity ? 'wss' : 'ws'}://${this._host}`;
                if (this._port) {
                    url += `:${this._port}`;
                }
                this._ws = new WebSocket(url);
                this._status = NETWORK_STATUS.OPENING;
                this._ws.onopen = () => {
                    this._status = NETWORK_STATUS.OPENED;
                    this.dispatchEvent('open');
                    resolve();
                };
                this._ws.onclose = () => {
                    this._status = NETWORK_STATUS.UNOPEN;
                    this.dispatchEvent('close');
                    reject();
                };
                this._ws.onmessage = (response) => {
                    let data = response.data;
                    if (typeof data === 'string') {
                        data = JSON.parse(data);
                    }
                    if (data instanceof Array) {
                        this._processMessageBatch(data);
                    }
                    else {
                        this._processMessage(data);
                    }
                };
            });
        });
    }
    notify(msg, callback) {
        if (!this._ws) {
            return;
        }
        if (typeof callback === 'function') {
            msg.id = ++this._callbackIndex;
            this._callbacks[msg.id] = callback;
        }
        this._ws.send(JSON.stringify(msg));
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Network);


/***/ }),

/***/ "./src/render/Bitmap.ts":
/*!******************************!*\
  !*** ./src/render/Bitmap.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/render/DisplayObject.ts");

class Bitmap extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this._image = options.image;
    }
    /**
     * 渲染
     * @param {*} ctx
     */
    render(ctx) {
        super.render(ctx);
        ctx.save();
        ctx.beginPath();
        ctx.drawImage(this._image, this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.restore();
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Bitmap);


/***/ }),

/***/ "./src/render/Container.ts":
/*!*********************************!*\
  !*** ./src/render/Container.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/render/DisplayObject.ts");

class Container extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this._children = [];
    }
    /**
     * 添加一个元素
     * 在children越往后，index越大，层级越高
     * @param {*} object
     */
    addChildren(object, index) {
        object.parent = this;
        if (index === undefined) {
            this._children.push(object);
        }
        else {
            this._children.splice(index, 0, object);
        }
    }
    /**
     * 删除某个元素
     * @param {*} object
     */
    removeChildren(object) {
        let pos = this._children.indexOf(object);
        if (pos < 0) {
            return;
        }
        this._children.splice(pos, 1);
        object.parent = null;
    }
    /**
     * 渲染
     * @param {*} ctx
     */
    render(ctx) {
        if (false) {}
        if (!this._display) {
            return;
        }
        // @ts-ignore
        ctx.__saveTransform();
        // @ts-ignore
        ctx.__transform(this._matrix);
        this._children.forEach(function (item) {
            item.display && item.render && item.render(ctx);
        });
        // @ts-ignore
        ctx.__restoreTransform();
    }
    /**
     * 触发事件，不仅仅自己的要触发，还要透传到子节点
     * @param event
     * @param data
     */
    dispatchEvent(event, data) {
        super.dispatchEvent(event, data);
        this._children.forEach(function (item) {
            item.dispatchEvent && item.dispatchEvent(event, data);
        });
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Container);


/***/ }),

/***/ "./src/render/DisplayObject.ts":
/*!*************************************!*\
  !*** ./src/render/DisplayObject.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDispatcher */ "./src/render/EventDispatcher.ts");
/* harmony import */ var _base_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/Point */ "./src/render/base/Point.ts");
/* harmony import */ var _base_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/Rect */ "./src/render/base/Rect.ts");
/* harmony import */ var _base_Matrix2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/Matrix2D */ "./src/render/base/Matrix2D.ts");




class DisplayObject extends _EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super();
        this._parent = null;
        this._display = true;
        this._width = options.width;
        this._height = options.height;
        this._matrix = new _base_Matrix2D__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._matrix.translate(options.left, options.top);
    }
    /**
     * 获得相比较于全局的matrix
     */
    _getGlobalMatrix() {
        if (this._parent) {
            return this._parent._getGlobalMatrix().transformMatrix(this._matrix);
        }
        else {
            return this._matrix.clone();
        }
    }
    /**
     * 获取该displayobject的rect
     */
    _getAABB() {
        return new _base_Rect__WEBPACK_IMPORTED_MODULE_2__["default"](this._matrix.tx, this._matrix.ty, this._width, this._height);
    }
    get x() {
        return this._matrix.tx;
    }
    get y() {
        return this._matrix.ty;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    set parent(obj) {
        this._parent = obj;
    }
    get parent() {
        return this._parent;
    }
    set display(d) {
        this._display = d;
    }
    get display() {
        return this._display;
    }
    /**
     * 设置位置
     * @param {*} x
     * @param {*} y
     */
    setPosition(x, y) {
        this._matrix.tx = x;
        this._matrix.ty = y;
    }
    /**
     * x方向偏移
     * @param x
     */
    translateX(x) {
        this._matrix.translateX(x);
    }
    /**
     * y方向偏移
     * @param y
     */
    translateY(y) {
        this._matrix.translateY(y);
    }
    /**
     * 判断是否在AABB中
     * 注意，这里x，y是global的坐标，没有经过transform
     * 所以要进行逆矩阵计算
     * @param {*} x
     * @param {*} y
     */
    contain(x, y) {
        let point = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
        let matrix;
        // 先求出完整的矩阵
        if (this._parent) {
            matrix = this._parent._getGlobalMatrix();
        }
        else {
            matrix = new _base_Matrix2D__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }
        // 再求逆矩阵
        matrix.invert();
        // 点进行矩阵变换
        point.transformWithMatrix(matrix);
        let rect = this._getAABB();
        return rect.contains(point);
    }
    /**
     * 隐藏
     */
    hide() {
        this._display = false;
    }
    /**
     * 展示
     */
    show() {
        this._display = true;
    }
    render(ctx) {
        // @ts-ignore
        ctx.__saveTransform();
        // @ts-ignore
        ctx.__transform(this._matrix);
        // @ts-ignore
        ctx.__restoreTransform();
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (DisplayObject);


/***/ }),

/***/ "./src/render/EventDispatcher.ts":
/*!***************************************!*\
  !*** ./src/render/EventDispatcher.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class EventDispatcher {
    constructor() {
        this._listeners = {};
    }
    _hasEventListener(type, func) {
        if (this._listeners[type] === undefined) {
            return false;
        }
        if (this._listeners[type].indexOf(func) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    addEventListener(type, func) {
        if (this._hasEventListener(type, func)) {
            return;
        }
        if (this._listeners[type] === undefined) {
            this._listeners[type] = [];
        }
        this._listeners[type].push(func);
    }
    removeEventListener(type, func) {
        if (!this._hasEventListener(type, func)) {
            return;
        }
        let index = this._listeners[type].indexOf(func);
        this._listeners[type].splice(index, 1);
    }
    dispatchEvent(type, data) {
        if (this._listeners[type] === undefined) {
            return;
        }
        for (let i = 0; i < this._listeners[type].length; i++) {
            this._listeners[type][i].call(this, data);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (EventDispatcher);


/***/ }),

/***/ "./src/render/ResourceManage.ts":
/*!**************************************!*\
  !*** ./src/render/ResourceManage.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDispatcher */ "./src/render/EventDispatcher.ts");

;
;
class ResourceManage extends _EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        // 配置
        this._config = {};
        this._handleLoaded = () => {
            this._loading--;
            this._completed++;
            this.dispatchEvent('onProgress');
            if (this._loading === 0) {
                this.dispatchEvent('onComplete');
            }
        };
        this._handleError = () => {
            this._loading--;
            this._failed++;
            this.dispatchEvent('onFail');
            if (this._loading === 0) {
                this.dispatchEvent('onComplete');
            }
        };
        this._total = 0;
        this._loading = 0;
        this._completed = 0;
        this._failed = 0;
    }
    _load(key, url) {
        this._total++;
        this._loading++;
        if (url.match(/png|jpg/)) {
            let image = this._loadImage(url);
            image.onload = () => {
                this._config[key].status = 1 /* COMPLETED */;
                this._handleLoaded();
            };
            image.onerror = () => {
                console.warn('资源加载失败: ', key);
                this._config[key].status = 2 /* FAILED */;
                this._handleError();
            };
            this._config[key] = {
                type: 0 /* IMAGE */,
                value: image,
                status: 0 /* LOADING */
            };
        }
        else {
            // 没有音乐
            console.log('no support');
        }
    }
    _loadImage(url) {
        let image = new Image();
        image.src = url;
        return image;
    }
    get total() {
        return this._total;
    }
    get loading() {
        return this._loading;
    }
    get completed() {
        return this._completed;
    }
    get failed() {
        return this._failed;
    }
    load(config) {
        for (let key in config) {
            if (this._config[key] === undefined) {
                this._load(key, config[key]);
            }
        }
    }
    get(key) {
        // 可以有是否失败、重试的判断
        return this._config[key].value;
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (new ResourceManage());


/***/ }),

/***/ "./src/render/Text.ts":
/*!****************************!*\
  !*** ./src/render/Text.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/render/DisplayObject.ts");

class Text extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this._fontStyle = '';
        this._textWidth = 0;
        this._text = options.text;
        this._color = options.color || '#000000';
        this._bold = options.bold || false;
        this._size = options.size;
        this._getFontStyle();
        this._getWidth();
    }
    static init() {
        Text.canvas = document.createElement('canvas');
        Text.canvas.width = 1;
        Text.canvas.height = 500;
        Text.canvas.dir = 'ltr';
        Text.ctx = Text.canvas.getContext('2d');
    }
    /**
     * 计算出文字的宽度
     */
    _getWidth() {
        Text.ctx.font = this._fontStyle;
        this._textWidth = Text.ctx.measureText(this._text).width;
    }
    /**
     * 计算出文字的样式
     */
    _getFontStyle() {
        this._fontStyle = `${this._bold ? 'bold' : ''} ${this._size}px 微软雅黑`;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this._getWidth();
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get bold() {
        return this._bold;
    }
    set bold(value) {
        this._bold = value;
        this._getFontStyle();
        this._getWidth();
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
        this._getFontStyle();
        this._getWidth();
    }
    render(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.clip();
        ctx.closePath();
        ctx.beginPath();
        ctx.font = this._fontStyle;
        ctx.fillStyle = this._color;
        ctx.lineWidth = this._bold ? 2 : 1;
        ctx.fillText(this._text, this.x + (this.width - this._textWidth) / 2, this.y + this.height / 2);
        ctx.closePath();
        ctx.restore();
    }
}
;
Text.init();
/* harmony default export */ __webpack_exports__["default"] = (Text);


/***/ }),

/***/ "./src/render/base/Matrix2D.ts":
/*!*************************************!*\
  !*** ./src/render/base/Matrix2D.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Matrix2D {
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    }
    clone() {
        let matrix = new Matrix2D();
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
    }
    reset() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
    }
    /**
     * 偏移
     * @param {*} x
     * @param {*} y
     */
    translate(x, y) {
        this.tx += x;
        this.ty += y;
    }
    /**
     * x方向偏移
     * @param {*} x
     */
    translateX(x) {
        this.tx += x;
    }
    /**
     * y方向的偏移
     * @param {*} y
     */
    translateY(y) {
        this.ty += y;
    }
    /**
     * 缩放
     * @param {*} x
     * @param {*} y
     */
    scale(x, y) {
        this.a *= x;
        this.c *= x;
        this.tx *= x;
        this.b *= y;
        this.d *= y;
        this.ty *= y;
    }
    /**
     * x方向缩放
     * @param {*} x
     */
    scaleX(x) {
        this.a *= x;
        this.c *= x;
        this.tx *= x;
    }
    /**
     * y方向缩放
     * @param {*} y
     */
    scaleY(y) {
        this.b *= y;
        this.d *= y;
        this.ty *= y;
    }
    /**
     * 自身矩阵与另外一个矩阵相乘
     * @param {*} matrix
     * @param {*} target
     */
    transformMatrix(matrix, target) {
        if (target === undefined) {
            target = this;
        }
        target.a = this.a * matrix.a;
        target.b = 0;
        target.c = 0;
        target.d = this.d * matrix.d;
        target.tx = this.a * matrix.tx + this.tx;
        target.ty = this.d * matrix.ty + this.ty;
        return target;
    }
    /**
     * 自身矩阵的逆矩阵
     * @param {*} target
     */
    invert(target) {
        if (target === undefined) {
            target = this;
        }
        target.a = 1 / this.a;
        target.d = 1 / this.d;
        target.tx = -this.a * this.tx;
        target.ty = -this.d * this.ty;
    }
    serialize() {
        return [
            this.a, this.b,
            this.c, this.d,
            this.tx, this.ty
        ];
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Matrix2D);


/***/ }),

/***/ "./src/render/base/Point.ts":
/*!**********************************!*\
  !*** ./src/render/base/Point.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    /**
     * 直接修改位置
     * @param x
     * @param y
     */
    setPosition(x, y) {
        this._x = x;
        this._y = y;
    }
    /**
     * 该点经过一个matrix变换
     * @param matrix
     */
    transformWithMatrix(matrix) {
        this._x = matrix.a * this._x + matrix.tx;
        this._y = matrix.d * this._y + matrix.ty;
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./src/render/base/Rect.ts":
/*!*********************************!*\
  !*** ./src/render/base/Rect.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Rect {
    constructor(x, y, w, h) {
        this._x = x;
        this._y = y;
        this._width = w;
        this._height = h;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    /**
     * 直接设置矩形的位置
     * @param x
     * @param y
     */
    setPosition(x, y) {
        this._x = x;
        this._y = y;
    }
    /**
     * 某个点是否在该矩型内部
     * @param point
     */
    contains(point) {
        let { x, y } = point;
        if (x > this.x &&
            x < this.x + this.width &&
            y > this.y &&
            y < this.y + this.height) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * 该矩型经过一个matrix变换
     * @param matrix
     */
    transformWithMatrix(matrix) {
        let a = matrix.a;
        let b = matrix.b;
        let c = matrix.c;
        let d = matrix.d;
        let tx = matrix.tx;
        let ty = matrix.ty;
        let x = this.x;
        let y = this.y;
        let xMax = x + this.width;
        let yMax = y + this.height;
        let x0 = a * x + c * y + tx;
        let y0 = b * x + d * y + ty;
        let x1 = a * xMax + c * y + tx;
        let y1 = b * xMax + d * y + ty;
        let x2 = a * xMax + c * yMax + tx;
        let y2 = b * xMax + d * yMax + ty;
        let x3 = a * x + c * yMax + tx;
        let y3 = b * x + d * yMax + ty;
        let tmp = 0;
        if (x0 > x1) {
            tmp = x0;
            x0 = x1;
            x1 = tmp;
        }
        if (x2 > x3) {
            tmp = x2;
            x2 = x3;
            x3 = tmp;
        }
        this._x = Math.floor(x0 < x2 ? x0 : x2);
        this._width = Math.ceil((x1 > x3 ? x1 : x3) - this.x);
        if (y0 > y1) {
            tmp = y0;
            y0 = y1;
            y1 = tmp;
        }
        if (y2 > y3) {
            tmp = y2;
            y2 = y3;
            y3 = tmp;
        }
        this._y = Math.floor(y0 < y2 ? y0 : y2);
        this._height = Math.ceil((y1 > y3 ? y1 : y3) - this.y);
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Rect);


/***/ }),

/***/ "./src/render/polyfill.ts":
/*!********************************!*\
  !*** ./src/render/polyfill.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Matrix2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/Matrix2D */ "./src/render/base/Matrix2D.ts");

CanvasRenderingContext2D.prototype.__matrix = new _base_Matrix2D__WEBPACK_IMPORTED_MODULE_0__["default"]();
CanvasRenderingContext2D.prototype.__matrixArr = [];
CanvasRenderingContext2D.prototype.__saveTransform = function () {
    let t = this.getTransform();
    this.__matrix = new _base_Matrix2D__WEBPACK_IMPORTED_MODULE_0__["default"](t.a, t.b, t.c, t.d, t.e, t.f);
    this.__matrixArr.unshift(this.__matrix.clone());
};
CanvasRenderingContext2D.prototype.__transform = function (matrix) {
    this.__matrix.transformMatrix(matrix);
    this.setTransform.apply(this, this.__matrix.serialize());
};
CanvasRenderingContext2D.prototype.__restoreTransform = function () {
    this.__matrix = this.__matrixArr.shift();
    this.setTransform.apply(this, this.__matrix.serialize());
};


/***/ }),

/***/ "./src/resource.json":
/*!***************************!*\
  !*** ./src/resource.json ***!
  \***************************/
/*! exports provided: PUKE_0-152, PUKE_0-153, PUKE_1-19, PUKE_1-20, PUKE_1-21, PUKE_1-22, PUKE_1-23, PUKE_1-24, PUKE_1-25, PUKE_1-26, PUKE_1-27, PUKE_1-28, PUKE_1-29, PUKE_1-30, PUKE_1-31, PUKE_2-19, PUKE_2-20, PUKE_2-21, PUKE_2-22, PUKE_2-23, PUKE_2-24, PUKE_2-25, PUKE_2-26, PUKE_2-27, PUKE_2-28, PUKE_2-29, PUKE_2-30, PUKE_2-31, PUKE_3-19, PUKE_3-20, PUKE_3-21, PUKE_3-22, PUKE_3-23, PUKE_3-24, PUKE_3-25, PUKE_3-26, PUKE_3-27, PUKE_3-28, PUKE_3-29, PUKE_3-30, PUKE_3-31, PUKE_4-19, PUKE_4-20, PUKE_4-21, PUKE_4-22, PUKE_4-23, PUKE_4-24, PUKE_4-25, PUKE_4-26, PUKE_4-27, PUKE_4-28, PUKE_4-29, PUKE_4-30, PUKE_4-31, BACK, READY, ASK, NO_ASK, GRAB, NO_GRAB, NO_SHOT, AVATAR, LANDLORD, default */
/***/ (function(module) {

module.exports = {"PUKE_0-152":"./img/pukeImage/0-152.jpg","PUKE_0-153":"./img/pukeImage/0-153.jpg","PUKE_1-19":"./img/pukeImage/1-19.jpg","PUKE_1-20":"./img/pukeImage/1-20.jpg","PUKE_1-21":"./img/pukeImage/1-21.jpg","PUKE_1-22":"./img/pukeImage/1-22.jpg","PUKE_1-23":"./img/pukeImage/1-23.jpg","PUKE_1-24":"./img/pukeImage/1-24.jpg","PUKE_1-25":"./img/pukeImage/1-25.jpg","PUKE_1-26":"./img/pukeImage/1-26.jpg","PUKE_1-27":"./img/pukeImage/1-27.jpg","PUKE_1-28":"./img/pukeImage/1-28.jpg","PUKE_1-29":"./img/pukeImage/1-29.jpg","PUKE_1-30":"./img/pukeImage/1-30.jpg","PUKE_1-31":"./img/pukeImage/1-31.jpg","PUKE_2-19":"./img/pukeImage/2-19.jpg","PUKE_2-20":"./img/pukeImage/2-20.jpg","PUKE_2-21":"./img/pukeImage/2-21.jpg","PUKE_2-22":"./img/pukeImage/2-22.jpg","PUKE_2-23":"./img/pukeImage/2-23.jpg","PUKE_2-24":"./img/pukeImage/2-24.jpg","PUKE_2-25":"./img/pukeImage/2-25.jpg","PUKE_2-26":"./img/pukeImage/2-26.jpg","PUKE_2-27":"./img/pukeImage/2-27.jpg","PUKE_2-28":"./img/pukeImage/2-28.jpg","PUKE_2-29":"./img/pukeImage/2-29.jpg","PUKE_2-30":"./img/pukeImage/2-30.jpg","PUKE_2-31":"./img/pukeImage/2-31.jpg","PUKE_3-19":"./img/pukeImage/3-19.jpg","PUKE_3-20":"./img/pukeImage/3-20.jpg","PUKE_3-21":"./img/pukeImage/3-21.jpg","PUKE_3-22":"./img/pukeImage/3-22.jpg","PUKE_3-23":"./img/pukeImage/3-23.jpg","PUKE_3-24":"./img/pukeImage/3-24.jpg","PUKE_3-25":"./img/pukeImage/3-25.jpg","PUKE_3-26":"./img/pukeImage/3-26.jpg","PUKE_3-27":"./img/pukeImage/3-27.jpg","PUKE_3-28":"./img/pukeImage/3-28.jpg","PUKE_3-29":"./img/pukeImage/3-29.jpg","PUKE_3-30":"./img/pukeImage/3-30.jpg","PUKE_3-31":"./img/pukeImage/3-31.jpg","PUKE_4-19":"./img/pukeImage/4-19.jpg","PUKE_4-20":"./img/pukeImage/4-20.jpg","PUKE_4-21":"./img/pukeImage/4-21.jpg","PUKE_4-22":"./img/pukeImage/4-22.jpg","PUKE_4-23":"./img/pukeImage/4-23.jpg","PUKE_4-24":"./img/pukeImage/4-24.jpg","PUKE_4-25":"./img/pukeImage/4-25.jpg","PUKE_4-26":"./img/pukeImage/4-26.jpg","PUKE_4-27":"./img/pukeImage/4-27.jpg","PUKE_4-28":"./img/pukeImage/4-28.jpg","PUKE_4-29":"./img/pukeImage/4-29.jpg","PUKE_4-30":"./img/pukeImage/4-30.jpg","PUKE_4-31":"./img/pukeImage/4-31.jpg","BACK":"./img/pukeImage/back.png","READY":"./img/ready.png","ASK":"./img/ask.png","NO_ASK":"./img/no-ask.png","GRAB":"./img/grab.png","NO_GRAB":"./img/no-grab.png","NO_SHOT":"./img/no-shot.png","AVATAR":"./img/avatar.png","LANDLORD":"./img/landlord.png"};

/***/ }),

/***/ "./src/room/Room.css":
/*!***************************!*\
  !*** ./src/room/Room.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Room.css */ "./node_modules/css-loader/dist/cjs.js!./src/room/Room.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/room/Room.ts":
/*!**************************!*\
  !*** ./src/room/Room.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/User */ "./src/user/User.ts");
/* harmony import */ var _component_Stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Stage */ "./src/component/Stage.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _render_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/EventDispatcher */ "./src/render/EventDispatcher.ts");
/* harmony import */ var _Room_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Room.css */ "./src/room/Room.css");
/* harmony import */ var _Room_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Room_css__WEBPACK_IMPORTED_MODULE_4__);





;
var GAME_TYPE;
(function (GAME_TYPE) {
    GAME_TYPE[GAME_TYPE["PLAY"] = 0] = "PLAY";
    GAME_TYPE[GAME_TYPE["WATCH"] = 1] = "WATCH";
})(GAME_TYPE || (GAME_TYPE = {}));
;
;
;
const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 375;
function resolveScreen(screenWidth, screenHeight) {
    // 高度一定要全部展示出来（这里的高度指的是旋转后的）
    let scale = screenHeight / DEFAULT_HEIGHT;
    let width = DEFAULT_WIDTH * scale;
    let left = (screenWidth - width) / 2;
    return {
        top: 0,
        left: left,
        width: width,
        height: screenHeight
    };
}
class Room extends _render_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(options) {
        super();
        // 是否初始化过，该组件只会初始化一次
        this._inited = false;
        // 玩家自己的位置
        this._position = 0;
        // 对手的map
        this._rival = {};
        // 当前桌面上最大的扑克牌
        this._desktopPukes = [];
        /**
         * 有其他玩家进入
         * @param {*} user
         */
        this._playerEnterRoom = (data) => {
            let userInfo = new _user_User__WEBPACK_IMPORTED_MODULE_0__["default"]({
                uid: data.playerUid,
                name: data.playerName
            });
            ;
            let position = data.position;
            let diff = this._position - position;
            switch (diff) {
                case -1:
                case 2:
                    this._rival[userInfo.uid] = userInfo;
                    // 新来玩家在右边
                    this._stage.addPlayer(userInfo, _component_Stage__WEBPACK_IMPORTED_MODULE_1__["PLAYER_POSITION"].RIGHT);
                    break;
                case -2:
                case 1:
                    this._rival[userInfo.uid] = userInfo;
                    // 新来玩家在左边
                    this._stage.addPlayer(userInfo, _component_Stage__WEBPACK_IMPORTED_MODULE_1__["PLAYER_POSITION"].LEFT);
                    break;
                case 0:
                    this._stage.addPlayer(userInfo, _component_Stage__WEBPACK_IMPORTED_MODULE_1__["PLAYER_POSITION"].MAIN);
                    break;
                default:
                    throw 'invalid position';
            }
        };
        /**
         * 有其他玩家离开
         * 如果自己离开房间，也会在uninit中调用，清除对手玩家
         * @param data
         */
        this._playerLeaveRoom = (data) => {
            let userId = data.player;
            this._stage.removePlayer(userId);
            delete this._rival[userId];
        };
        /**
         * 玩家准备
         * @param data
         */
        this._playerReady = (data) => {
            let { player, isReady } = data;
            this._stage.getPlayerArea(player).ready(isReady);
        };
        /**
         * 进入叫地主阶段
         * 这里会接收到初始化的牌
         */
        this._enterAskLandlord = (data) => {
            let { askPlayer, pukes } = data;
            // 排序
            pukes.sort((a, b) => {
                return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["comparePukes"])([a], [b]);
            });
            // 自己初始化的手牌
            this._stage.getPlayerArea(this._mainUid).initPukes(pukes);
            // 对手的牌初始化一下
            for (let userId in this._rival) {
                this._stage.getPlayerArea(userId).initPukes(pukes.length);
            }
            // 对应玩家进入到叫地主阶段
            this._stage.getPlayerArea(askPlayer).enterAskLandlord();
        };
        /**
         * 玩家叫地主
         */
        this._playerAskLandlord = (data) => {
            let { player, isAsk } = data;
            this._stage.getPlayerArea(player).askLandlord(isAsk);
        };
        /**
         * 进入抢地主阶段
         */
        this._enterGrabLandlord = (data) => {
            let { grabPlayer } = data;
            // 对应玩家进入到叫地主阶段
            this._stage.getPlayerArea(grabPlayer).enterGrabLandlord();
        };
        /**
         * 玩家抢地主
         */
        this._playerGrabLandlord = (data) => {
            let { player, isGrab } = data;
            this._stage.getPlayerArea(player).grabLandlord(isGrab);
        };
        /**
         * 游戏开始，服务器下发地主是谁，地主的扑克也下发
         */
        this._gameStart = (data) => {
            let { landlordPlayer, landlordPukes } = data;
            this.dispatchEvent(_utils__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME"].GAME_START, data);
            this._stage.getPlayerArea(this._mainUid).gameStart(landlordPlayer === this._mainUid);
            for (let userId in this._rival) {
                this._stage.getPlayerArea(userId).gameStart(landlordPlayer === userId);
            }
            this._stage.getPlayerArea(landlordPlayer).enterShotPukes();
            if (this._app.user.uid === landlordPlayer) {
                this._stage.getPlayerArea(this._mainUid).getPukes(landlordPukes);
            }
            else {
                this._stage.getPlayerArea(landlordPlayer).getPukes(landlordPukes.length);
            }
        };
        /**
         * 玩家出牌
         */
        this._playerPukes = (data) => {
            let { player, pukes } = data;
            if (pukes.length > 0) {
                // 如果成功出牌，那么就认为这个牌是最大的牌了
                this._desktopPukes = pukes;
                this._desktopPukesOwner = player;
            }
            this._stage.getPlayerArea(player).shotPukes(pukes);
        };
        /**
         * 玩家进入出牌阶段
         */
        this._loopPukes = (data) => {
            let player = data.player;
            if (player === this._app.user.uid &&
                this._desktopPukesOwner === this._app.user.uid) {
                // 满足这个条件，就是出牌到了自己，并且桌面上最大的牌就是自己的
                // 那么桌面最大牌就空掉了（因为相当于重新出牌了）
                this._desktopPukes = [];
            }
            this._stage.getPlayerArea(player).enterShotPukes();
        };
        /**
         * 游戏结束
         */
        this._gameOver = (data) => {
            let player = data.player;
            this._stage.overModal.show(player);
            for (let userId in this._rival) {
                this._stage.getPlayerArea(userId).gameReset();
            }
            console.log('游戏结束，胜者：', player);
        };
        /**
         * 判断选中的牌，能否出
         * @param pukes
         */
        this._checkPukesCanShot = () => {
            let pukes = this._stage.getPlayerArea(this._mainUid).handPukes.getChoosePukes();
            let result = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["comparePukes"])(this._desktopPukes, pukes);
            if (result > 0) {
                this._stage.getPlayerArea(this._mainUid).buttonControl.canShotPukes();
            }
            else {
                this._stage.getPlayerArea(this._mainUid).buttonControl.canNotShotPukes();
            }
        };
        this.confirmResult = () => {
            // 弹窗隐藏
            this._stage.overModal.hide();
            this._stage.getPlayerArea(this._mainUid).gameReset();
            this.dispatchEvent(_utils__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME"].GAME_RESET);
        };
        this._app = options.app;
    }
    /**
     * 初始化，主要是生成stage
     * @param info
     */
    _show(info) {
        this._roomId = info.roomId;
        if (this._inited) {
            this._stage.show();
        }
        else {
            this._initStage();
            this._inited = true;
        }
        this.dispatchEvent(_utils__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME"].ROOM_SHOW, info);
        this._allocatePosition(info.players);
        this._addMessageListener();
        if (this._gameType === GAME_TYPE.PLAY) {
            // 监听手牌变化
            this._stage.getPlayerArea(this._mainUid).handPukes.addEventListener('choosePukesChange', this._checkPukesCanShot);
            this._stage.getPlayerArea(this._mainUid).buttonControl.enterReady(false);
        }
    }
    /**
     * 初始化stage
     */
    _initStage() {
        let width = this._app.root.offsetWidth;
        let height = this._app.root.offsetHeight;
        this._box = document.createElement('div');
        this._box.className = 'room-box';
        // 宽高反转
        this._box.style.width = `${height}px`;
        this._box.style.height = `${width}px`;
        this._box.style.transform = `translateX(${width}px) rotate(90deg)`;
        // 注意参数
        let rect = resolveScreen(height, width);
        this._stage = new _component_Stage__WEBPACK_IMPORTED_MODULE_1__["default"]({
            app: this._app,
            width: rect.width,
            height: rect.height,
            left: 0,
            top: 0,
            offsetX: rect.top,
            offsetY: rect.left
        });
        this._stage.canvas.style.left = `${rect.left}px`;
        this._stage.canvas.style.top = `${rect.top}px`;
        this._box.appendChild(this._stage.canvas);
        this._app.root.appendChild(this._box);
    }
    /**
     * Room展示的时候，分配位置
     * @param info
     */
    _allocatePosition(players) {
        let position;
        let playerName;
        let playerUid;
        // 先找到自己的位置
        this._position = players[this._mainUid].position;
        for (playerUid in players) {
            playerName = players[playerUid].playerName;
            position = players[playerUid].position;
            this._playerEnterRoom({
                playerName,
                playerUid,
                position
            });
        }
    }
    /**
     * 房间模块隐藏
     * 解绑消息推送
     * 隐藏stage
     */
    _hide() {
        this._removeMessageListener();
        for (let userId in this._rival) {
            this._playerLeaveRoom({
                player: userId
            });
        }
        this.dispatchEvent(_utils__WEBPACK_IMPORTED_MODULE_2__["EVENT_NAME"].ROOM_HIDE);
        this._stage.hide();
    }
    _addMessageListener() {
        // 对手进入
        this._app.network.addEventListener('Room.PlayerEnterRoom', this._playerEnterRoom);
        // 对手离开
        this._app.network.addEventListener('Room.PlayerLeaveRoom', this._playerLeaveRoom);
        // 监听玩家准备
        this._app.network.addEventListener('Room.PlayerReady', this._playerReady);
        // 进入叫地主阶段
        this._app.network.addEventListener('Room.EnterAskLandlord', this._enterAskLandlord);
        // 对手叫地主
        this._app.network.addEventListener('Room.PlayerAskLandlord', this._playerAskLandlord);
        // 进入抢地主阶段
        this._app.network.addEventListener('Room.EnterGrabLandlord', this._enterGrabLandlord);
        // 对手抢地主
        this._app.network.addEventListener('Room.PlayerGrabLandlord', this._playerGrabLandlord);
        // 游戏开始
        this._app.network.addEventListener('Room.GameStart', this._gameStart);
        // 出牌
        this._app.network.addEventListener('Room.PlayerShotPukes', this._playerPukes);
        // 继续出牌
        this._app.network.addEventListener('Room.LoopPukes', this._loopPukes);
        // 游戏结束
        this._app.network.addEventListener('Room.GameOver', this._gameOver);
    }
    _removeMessageListener() {
        this._app.network.removeEventListener('Room.PlayerEnterRoom', this._playerEnterRoom);
        this._app.network.removeEventListener('Room.PlayerLeaveRoom', this._playerLeaveRoom);
        this._app.network.removeEventListener('Room.PlayerReady', this._playerReady);
        this._app.network.removeEventListener('Room.EnterAskLandlord', this._enterAskLandlord);
        this._app.network.removeEventListener('Room.PlayerAskLandlord', this._playerAskLandlord);
        this._app.network.removeEventListener('Room.EnterGrabLandlord', this._enterGrabLandlord);
        this._app.network.removeEventListener('Room.PlayerGrabLandlord', this._playerGrabLandlord);
        this._app.network.removeEventListener('Room.GameStart', this._gameStart);
        this._app.network.removeEventListener('Room.PlayerShotPukes', this._playerPukes);
        this._app.network.removeEventListener('Room.LoopPukes', this._loopPukes);
        this._app.network.removeEventListener('Room.GameOver', this._gameOver);
    }
    get desktopPukes() {
        return this._desktopPukes;
    }
    get roomId() {
        return this._roomId;
    }
    show(info) {
        console.log('进入房间');
        this._mainUid = info.mainUid;
        if (this._mainUid === this._app.user.uid) {
            this._gameType = GAME_TYPE.PLAY;
        }
        else {
            this._gameType = GAME_TYPE.WATCH;
        }
        this._show(info);
    }
    hide() {
        console.log('离开房间');
        this._hide();
    }
    /**
     * 准备
     * @param isReady
     */
    ready(isReady) {
        this._stage.getPlayerArea(this._mainUid).ready(isReady);
        this._app.network.notify({
            route: 'Room.Ready',
            body: {
                rid: this._roomId,
                isReady: isReady
            }
        }, function (result) {
            if (result.retcode !== _utils__WEBPACK_IMPORTED_MODULE_2__["RET_SUCCESS"]) {
                console.error('准备异常');
            }
            else {
                console.log(`${isReady ? '准备' : '取消准备'}成功`);
            }
        });
    }
    /**
     * 叫地主
     * @param isAsk
     */
    askLandlord(isAsk) {
        this._stage.getPlayerArea(this._mainUid).askLandlord(isAsk);
        this._app.network.notify({
            route: 'Room.AskLandlord',
            body: {
                rid: this._roomId,
                isAsk: isAsk
            }
        }, function (result) {
            if (result.retcode !== _utils__WEBPACK_IMPORTED_MODULE_2__["RET_SUCCESS"]) {
                console.error('叫地主异常');
            }
            else {
                console.log(`${isAsk ? '叫地主' : '不叫地主'}`);
            }
        });
    }
    /**
     * 抢地主
     * @param isGrab
     */
    grabLandlord(isGrab) {
        this._stage.getPlayerArea(this._mainUid).grabLandlord(isGrab);
        this._app.network.notify({
            route: 'Room.GrabLandlord',
            body: {
                rid: this._roomId,
                isGrab: isGrab
            }
        }, function (result) {
            if (result.retcode !== _utils__WEBPACK_IMPORTED_MODULE_2__["RET_SUCCESS"]) {
                console.error('抢地主异常');
            }
            else {
                console.log(`${isGrab ? '抢地主' : '不抢地主'}`);
            }
        });
    }
    /**
     * 离开房间
     */
    leaveRoom() {
        this._app.enterHall();
        this._app.network.notify({
            route: 'Hall.LeaveRoom',
            body: {
                rid: this._roomId
            }
        }, function (result) {
            if (result.retcode !== _utils__WEBPACK_IMPORTED_MODULE_2__["RET_SUCCESS"]) {
                console.error('离开房间异常');
            }
            else {
                console.log('离开房间');
            }
        });
    }
    /**
     * 出牌
     * @param choose
     */
    puke(choose) {
        let pukes;
        if (choose) {
            pukes = this._stage.getPlayerArea(this._mainUid).handPukes.getChoosePukes();
        }
        else {
            // 放弃出牌
            pukes = [];
        }
        // 出牌
        this._stage.getPlayerArea(this._mainUid).shotPukes(pukes);
        if (this._app.debugger) {
            return;
        }
        this._app.network.notify({
            route: 'Room.Pukes',
            body: {
                rid: this._roomId,
                pukes: pukes
            }
        }, (result) => {
            if (result.retcode !== _utils__WEBPACK_IMPORTED_MODULE_2__["RET_SUCCESS"]) {
                console.error('出牌异常');
            }
            else {
                console.log('出牌成功');
                this._desktopPukes = pukes;
                this._desktopPukesOwner = this._app.user.uid;
            }
        });
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (Room);


/***/ }),

/***/ "./src/user/User.ts":
/*!**************************!*\
  !*** ./src/user/User.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
class User {
    constructor(options) {
        this._uid = options.uid;
        this._name = options.name;
    }
    get uid() {
        return this._uid;
    }
    get name() {
        return this._name;
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: RET_SUCCESS, EVENT_NAME, comparePukes, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RET_SUCCESS", function() { return RET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_NAME", function() { return EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparePukes", function() { return comparePukes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
const RET_SUCCESS = 10000;
var EVENT_NAME;
(function (EVENT_NAME) {
    EVENT_NAME["ROOM_SHOW"] = "RoomShow";
    EVENT_NAME["ROOM_HIDE"] = "RoomHide";
    EVENT_NAME["PLAYER_ENTER_ROOM"] = "PlayerEnterRoom";
    EVENT_NAME["PLAYER_LEAVE_ROOM"] = "PlayerLeaveRoom";
    EVENT_NAME["PLAYER_READY"] = "PlayerReady";
    EVENT_NAME["PLAYER_ENTER_ASK"] = "PlayerEnterAsk";
    EVENT_NAME["PLAYER_ASK"] = "PlayerAsk";
    EVENT_NAME["PLAYER_ENTER_GRAB"] = "PlayerEnterGrab";
    EVENT_NAME["PLAYER_GRAB"] = "PlayerGrab";
    EVENT_NAME["PLAYER_ENTER_SHOT"] = "PlayerEnterShot";
    EVENT_NAME["PLAYER_SHOT"] = "PlayerShot";
    EVENT_NAME["GAME_START"] = "GameStart";
    EVENT_NAME["GAME_OVER"] = "GameOver";
    EVENT_NAME["GAME_RESET"] = "GAMEReset";
})(EVENT_NAME || (EVENT_NAME = {}));
;
function comparePukes(pukesA, pukesB) {
    // 数组的内存先申请了
    let ptrA = Module._malloc(4 * pukesA.length);
    let ptrB = Module._malloc(4 * pukesB.length);
    let cppPukesA = [];
    let cppPukesB = [];
    // 生成扑克牌
    pukesA.forEach((pukeA, i) => {
        let infoA = pukeA.split('-');
        cppPukesA.push(new Module.JSPuke(+infoA[0], +infoA[1]));
        Module.HEAP32[(ptrA >> 2) + i] = cppPukesA[i].ptr;
    });
    pukesB.forEach((pukeB, i) => {
        let infoB = pukeB.split('-');
        cppPukesB.push(new Module.JSPuke(+infoB[0], +infoB[1]));
        Module.HEAP32[(ptrB >> 2) + i] = cppPukesB[i].ptr;
    });
    // 开始判断大小
    let result = Module._comparePukes(ptrA, cppPukesA.length, ptrB, cppPukesB.length);
    Module._free(ptrA);
    Module._free(ptrB);
    if (result === 0) {
        result = -1;
    }
    // 析构
    cppPukesA.forEach((cppPuke) => {
        cppPuke.Release();
    });
    cppPukesB.forEach((cppPuke) => {
        cppPuke.Release();
    });
    return result;
}
function debounce(fn, wait) {
    let timer = null;
    return function () {
        // @ts-ignore
        let context = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, wait);
    };
}


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QdWtlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9QdWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1B1a2UvLi9zcmMvQXBwLmNzcyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2hhbGwvSGFsbC5jc3MiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yb29tL1Jvb20uY3NzIiwid2VicGFjazovL1B1a2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1B1a2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vUHVrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9BcHAuY3NzPzJlMTQiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvYXJlYS9wbGF5ZXItYXJlYS9MZWZ0UGxheWVyQXJlYS50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9hcmVhL3BsYXllci1hcmVhL01haW5QbGF5ZXJBcmVhLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvcGxheWVyLWFyZWEvUmlnaHRQbGF5ZXJBcmVhLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvcGxheWVyLWFyZWEvU2lkZVBsYXllckFyZWEudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvYXJlYS90b3AtYXJlYS9CYWNrQnV0dG9uLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvdG9wLWFyZWEvTGFuZGxvcmRQdWtlcy50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9hcmVhL3RvcC1hcmVhL1Jvb21JbmZvLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvdG9wLWFyZWEvVG9wQXJlYS50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9idXR0b24vQnV0dG9uQ29udHJvbC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2Rlc2t0b3AvRGVza3RvcC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9kZXNrdG9wL0Rlc2t0b3BQdWtlcy50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9kZXNrdG9wL0Rlc2t0b3BUZXh0LnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L21vZGFsL01vZGVsLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L3BsYXllci9BdmF0YXIudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcGxheWVyL05hbWUudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcHVrZXMvQmFzZVB1a2UudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcHVrZXMvQmFzZVB1a2VzQ29udGFpbmVyLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L3B1a2VzL01haW5IYW5kUHVrZXMudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcHVrZXMvU2lkZUhhbmRQdWtlcy50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2hhbGwvSGFsbC5jc3M/Y2MxMSIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2hhbGwvSGFsbC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvbmV0d29yay9OZXR3b3JrLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcmVuZGVyL0JpdG1hcC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL3JlbmRlci9Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvRGlzcGxheU9iamVjdC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL3JlbmRlci9FdmVudERpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvUmVzb3VyY2VNYW5hZ2UudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvVGV4dC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL3JlbmRlci9iYXNlL01hdHJpeDJELnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcmVuZGVyL2Jhc2UvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvYmFzZS9SZWN0LnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcmVuZGVyL3BvbHlmaWxsLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcm9vbS9Sb29tLmNzcz81OTBjIiwid2VicGFjazovL1B1a2UvLi9zcmMvcm9vbS9Sb29tLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvdXNlci9Vc2VyLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtC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SyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQSxjQUFjLG1CQUFPLENBQUMsOEdBQW9EOztBQUUxRSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJnQjtBQUNTO0FBQ1Q7QUFDQTtBQUNPO0FBQ25CO0FBQzBCO0FBQ1E7QUFNckQsTUFBTSxHQUFHO0lBNkVMLFlBQVksT0FBcUI7UUExRDFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFxQ2pDOztXQUVHO1FBQ00sV0FBTSxHQUFHLEdBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFekMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7WUFFZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0RBQUksQ0FBQztnQkFDbEIsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUM7WUFFSCxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBRWpDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDO1FBR0csSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx3REFBTyxDQUFDO1lBQ3ZCLElBQUksRUFBRSxjQUFjO1lBQ3BCLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFqRUQ7O09BRUc7SUFDSyxLQUFLO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztRQUU3RCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFeEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLFNBQVM7UUFDVCw4REFBYyxDQUFDLElBQUksQ0FBQywyQ0FBYyxDQUFDLENBQUM7UUFFcEMsTUFBTTtRQUNOLDhEQUFjLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtZQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyw4REFBYyxDQUFDLFNBQVMsR0FBRyw4REFBYyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ2pHLCtEQUErRDtRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFrQjtRQUNsQiw4REFBYyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFrQ0QsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNHLFFBQVE7O1lBQ1YsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTFCLElBQUksTUFBTSxHQUFRLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRFLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxrREFBVyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFOUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7SUFFRCxTQUFTO1FBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtEQUFJLENBQUM7Z0JBQ2xCLEdBQUcsRUFBRSxJQUFJO2FBQ1osQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBYTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWxCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQU0sQ0FBQyxHQUFHLENBQUM7UUFFbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0RBQUksQ0FBQztnQkFDbEIsR0FBRyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0csS0FBSyxDQUFDLEdBQVcsRUFBRSxJQUFZOztZQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDaEIsS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsSUFBSSxFQUFFO3dCQUNGLEdBQUcsRUFBRSxHQUFHO3dCQUNSLElBQUksRUFBRSxJQUFJO3FCQUNiO2lCQUNKLEVBQUUsVUFBUyxNQUFXO29CQUNuQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FDSjtBQUFBLENBQUM7QUFFYSxrRUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdExuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBR3FCO0FBQ0Y7QUFFakI7QUFDaUI7QUFDekI7QUFTdEMsSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3ZCLHFEQUFJO0lBQ0osdURBQUs7SUFDTCxxREFBSTtBQUNSLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUFBLENBQUM7QUFFRixNQUFNLEtBQU0sU0FBUSx5REFBUztJQTRIekIsWUFBWSxPQUF1QjtRQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFwSG5CLFFBQVE7UUFDQSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUs5QixTQUFTO1FBQ0QsVUFBSyxHQUFXLENBQUMsQ0FBQztRQW9GbEIsZ0JBQVcsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQzdCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDcEQsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRXRDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO2dCQUM3QixDQUFDLEVBQUUsQ0FBQzthQUNQLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFTyxlQUFVLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUM1QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3BELElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUV0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtnQkFDNUIsQ0FBQyxFQUFFLENBQUM7YUFDUCxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU8sY0FBUyxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBK0dEOztXQUVHO1FBQ0gsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQXJIRyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUVoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQXpIRDs7T0FFRztJQUNLLFdBQVc7UUFDZixJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLEdBQUcsR0FBNkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCwyRkFBMkY7UUFDM0YsZ0JBQWdCO1FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUxQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFFMUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDbEMsbURBQW1EO1FBQ25ELDBFQUEwRTtJQUM5RSxDQUFDO0lBRUQ7O09BRUc7SUFDSyxXQUFXO1FBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSw4REFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNLLFNBQVM7UUFDYixJQUFJLFNBQVMsR0FBRyxJQUFJLG9EQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNyQyxLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNLLGlCQUFpQjtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQTJDRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsRUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsSUFBVSxFQUFFLFFBQXlCO1FBQzNDLElBQUksVUFBVSxDQUFDO1FBRWYsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLGVBQWUsQ0FBQyxLQUFLO2dCQUN0QixVQUFVLEdBQUcsSUFBSSx5RUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7b0JBQ3JCLE1BQU0sRUFBRSxHQUFHO29CQUNYLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFO29CQUN6QixHQUFHLEVBQUUsRUFBRTtvQkFDUCxJQUFJLEVBQUUsSUFBSTtpQkFDYixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssZUFBZSxDQUFDLElBQUk7Z0JBQ3JCLFVBQVUsR0FBRyxJQUFJLHdFQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztvQkFDckIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsSUFBSSxFQUFFLENBQUM7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLElBQUk7aUJBQ2IsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLGVBQWUsQ0FBQyxJQUFJO2dCQUNyQixVQUFVLEdBQUcsSUFBSSx3RUFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsSUFBSSxFQUFFLENBQUM7b0JBQ1AsR0FBRyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVjtnQkFDSSxNQUFNLGtCQUFrQixDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFckMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXBDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQWNKO0FBQUEsQ0FBQztBQUVhLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM5UXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0o7QUFDc0M7QUFDckI7QUFDVjtBQUVnQjtBQUU1RCxNQUFNLGNBQWUsU0FBUSx1REFBYztJQUN2Qzs7T0FFRztJQUNLLFdBQVc7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksc0RBQU0sQ0FBQztZQUN0QixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxHQUFHO1lBQ1gsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSw4REFBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssU0FBUyxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG9EQUFJLENBQUM7WUFDbEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssY0FBYztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNERBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsR0FBRztTQUNaLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHdEQUFPLENBQUM7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRztZQUN2QixNQUFNLEVBQUUsR0FBRztZQUNYLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLEdBQUc7U0FDWixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWSxHQUFRLEVBQUUsT0FBZ0M7UUFDbEQsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsNkVBQWMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzdFOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNUO0FBQ0o7QUFDaUI7QUFHQztBQUNYO0FBQ2dCO0FBRTVELE1BQU0sY0FBZSxTQUFRLHlEQUFTO0lBZWxDOztPQUVHO0lBQ0ssV0FBVztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzREFBTSxDQUFDO1lBQ3RCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLDhEQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxTQUFTLENBQUMsSUFBWTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksb0RBQUksQ0FBQztZQUNsQixHQUFHLEVBQUUsS0FBSztZQUNWLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxjQUFjO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSw0REFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsRUFBRTtZQUNaLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbEIsSUFBSSxFQUFFLENBQUM7WUFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxrQkFBa0I7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDZEQUFhLENBQUM7WUFDcEMsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksd0RBQU8sQ0FBQztZQUN4QixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWSxHQUFRLEVBQUUsT0FBK0I7UUFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxHQUFHLENBQUM7UUFFbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLO1FBQ0QsT0FBTztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsT0FBTztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxPQUFnQjtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUMsS0FBSSxFQUFDLE9BQU0sRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxLQUFlO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsU0FBUyxPQUFPO1lBQ1osSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUN4QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEMsQ0FBQyxFQUFFLENBQUM7WUFFSixVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRLENBQUMsS0FBZTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxTQUFTLENBQUMsVUFBbUI7UUFDekIsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBQyxNQUFLLEVBQUMsT0FBTSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFLLEVBQUMsT0FBTSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLEtBQWU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQztRQUUzQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNsQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLCtCQUErQjtRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ0wsV0FBVztRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsNkVBQWMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNSOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDSjtBQUNzQztBQUNyQjtBQUNWO0FBRWdCO0FBRTVELE1BQU0sZUFBZ0IsU0FBUSx1REFBYztJQUN4Qzs7T0FFRztJQUNLLFdBQVc7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksc0RBQU0sQ0FBQztZQUN0QixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxHQUFHO1lBQ1gsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHO1lBQ3RCLEtBQUssRUFBRSw4REFBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssU0FBUyxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG9EQUFJLENBQUM7WUFDbEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRztZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssY0FBYztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNERBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRztTQUM5QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8saUJBQWlCO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx3REFBTyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUc7WUFDdkIsTUFBTSxFQUFFLEdBQUc7WUFDWCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVksR0FBUSxFQUFFLE9BQWdDO1FBQ2xELEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLDhFQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3RS9CO0FBQUE7QUFBa0Q7QUFhbEQsTUFBTSxjQUFlLFNBQVEseURBQVM7SUFhbEMsWUFBWSxHQUFRLEVBQUUsT0FBZ0M7UUFDbEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUs7UUFDRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixPQUFPO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLE9BQWdCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsSUFBSSxPQUFPLEVBQUU7WUFDVCxjQUFjO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBQyxLQUFJLEVBQUMsT0FBTSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxNQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQjtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQjtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsQ0FBQyxVQUFtQjtRQUN6QixJQUFJLFVBQVUsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBQyxNQUFLLEVBQUMsT0FBTSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUMsTUFBSyxFQUFDLE9BQU0sRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxLQUFlO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFM0MsT0FBTztRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQUVjLDZFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMvSzlCO0FBQUE7QUFBOEQ7QUFFOUQsTUFBTSxVQUFXLFNBQVEsc0RBQU07SUFDM0IsWUFBWSxPQUF3QjtRQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSMUI7QUFBQTtBQUFpRztBQUVqRyxNQUFNLGFBQWMsU0FBUSxpRUFBa0I7SUFDMUMsWUFBWSxPQUFvQztRQUM1QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSN0I7QUFBQTtBQUEyRDtBQUUzRCxNQUFNLFFBQVMsU0FBUSxvREFBSTtJQUN2QixZQUFZLE9BQXNCO1FBQzlCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1J4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFFTjtBQUNOO0FBQ0o7QUFFVTtBQUU1QyxNQUFNLE9BQVEsU0FBUSx5REFBUztJQWlFM0IsWUFBWSxHQUFRLEVBQUUsT0FBK0I7UUFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBYlgsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxRCxDQUFDO1FBRU8scUJBQWdCLEdBQUcsQ0FBQyxJQUF1RCxFQUFFLEVBQUU7WUFDbkYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFTyxxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBS0csSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpREFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaURBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaURBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQXhFTyxlQUFlO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxtREFBVSxDQUFDO1lBQzlCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBQ0QsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxhQUFhO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpREFBUSxDQUFDO1lBQzFCLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxrQkFBa0I7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHNEQUFhLENBQUM7WUFDcEMsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztZQUNiLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNoQyxHQUFHLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0ErQko7QUFBQSxDQUFDO0FBRWEsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQzVGdkI7QUFBQTtBQUFBO0FBQStDO0FBQ2pCO0FBUTlCLE1BQU0sYUFBYyxTQUFRLHlEQUFTO0lBS2pDLFlBQVksT0FBK0I7UUFDdkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXhCLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLCtDQUFNLENBQUM7WUFDMUIsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsV0FBVyxHQUFHLEVBQUU7WUFDdkMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQ3JDLEtBQUssRUFBRSxXQUFXO1lBQ2xCLE1BQU0sRUFBRSxZQUFZO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwrQ0FBTSxDQUFDO1lBQzNCLElBQUksRUFBRSxLQUFLO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDekIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQ3JDLEtBQUssRUFBRSxXQUFXO1lBQ2xCLE1BQU0sRUFBRSxZQUFZO1NBQ3ZCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQUMsV0FBb0IsS0FBSztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpCLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0I7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQUMsVUFBbUI7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekIsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FDSjtBQUFBLENBQUM7QUFFYSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEw3QjtBQUFBO0FBQUE7QUFBcUM7QUFDVTtBQVcvQyxNQUFNLE1BQU8sU0FBUSx5REFBUztJQWlGMUI7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxZQUFZLE9BQXdCO1FBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQTVCbkI7Ozs7V0FJRztRQUNLLFdBQU0sR0FBRyxDQUFDLElBQTRCLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEVBQ0EsQ0FBQyxFQUFFLENBQUMsRUFDUCxHQUFHLElBQUksQ0FBQztZQUVULElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEM7UUFDTCxDQUFDO1FBaUJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxjQUFZLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBMUZEOzs7T0FHRztJQUNLLFVBQVUsQ0FBQyxPQUF3QjtRQUN2QyxjQUFjO1FBQ2QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixLQUFLLEVBQUUsU0FBUztZQUNoQixPQUFPLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxjQUFjO1FBQ2QsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUMvQixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDWixLQUFLLEVBQUUsU0FBUztZQUNoQixPQUFPLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QyxXQUFXO1FBQ1gsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxJQUFZO1FBQ2pCLElBQUksVUFBVSxHQUFHLElBQUksb0RBQUksQ0FBQztZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBMENELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLElBQVk7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDekUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsUUFBa0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQTZCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUVELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVkLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMvS3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFFTDtBQUNGO0FBQ2lCO0FBRXpELE1BQU0sT0FBUSxTQUFRLHlEQUFTO0lBSW5CLGlCQUFpQjtRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUkscURBQVksQ0FBQztZQUNsQyxTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksb0RBQVcsQ0FBQztZQUNoQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDM0IsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQzVCLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsOERBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFlBQVksT0FBK0I7UUFDdkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxPQUFnQjtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsTUFBZTtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxTQUFTLENBQUMsS0FBZTtRQUNyQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7Q0FDSjtBQUFBLENBQUM7QUFFYSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN0Z2QjtBQUFBO0FBQThGO0FBRTlGLE1BQU0sWUFBYSxTQUFRLGlFQUFrQjtJQUN6QyxZQUFZLE9BQW9DO1FBQzVDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ1I1QjtBQUFBO0FBQUE7QUFBOEQ7QUFDTDtBQUV6RCxNQUFNLFdBQVksU0FBUSxzREFBTTtJQUNwQixPQUFPLENBQUMsR0FBa0I7UUFDOUIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyw4REFBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVksT0FBd0I7UUFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZ0I7UUFDbEIsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFjO1FBQ3RCLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBZTtRQUN4QixJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM5QzNCO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1Y7QUFDQztBQUd0QyxNQUFNLFNBQVUsU0FBUSx5REFBUztJQU9yQixTQUFTO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG9EQUFJLENBQUM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sV0FBVztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzREFBTSxDQUFDO1lBQ3RCLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFBWSxHQUFRLEVBQUUsT0FBK0I7UUFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVk7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWhDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQTZCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLE9BQU87U0FDVjtRQUVELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQUFBLENBQUM7QUFFYSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN0V6QjtBQUFBO0FBQUE7QUFBOEQ7QUFDTDtBQUd6RDs7R0FFRztBQUNILE1BQU0sTUFBTyxTQUFRLHNEQUFNO0lBQ3ZCLFlBQVksT0FBd0I7UUFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyw4REFBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsOERBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQnRCO0FBQUE7QUFBd0Q7QUFFeEQsTUFBTSxJQUFLLFNBQVEsb0RBQUk7SUFDbkIsWUFBWSxPQUFzQjtRQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNScEI7QUFBQTtBQUE4RDtBQU85RCxNQUFNLFFBQVMsU0FBUSxzREFBTTtJQU16QixZQUFZLE9BQTBCO1FBQ2xDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUV0QixTQUFTO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFFYyx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNUN4QjtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUViO0FBQ3VCO0FBVXpELElBQUsscUJBSUo7QUFKRCxXQUFLLHFCQUFxQjtJQUN0QixpRUFBSTtJQUNKLHFFQUFNO0lBQ04sbUVBQUs7QUFDVCxDQUFDLEVBSkkscUJBQXFCLEtBQXJCLHFCQUFxQixRQUl6QjtBQUFBLENBQUM7QUFFRixJQUFLLG1CQUlKO0FBSkQsV0FBSyxtQkFBbUI7SUFDcEIsMkRBQUc7SUFDSCxpRUFBTTtJQUNOLGlFQUFNO0FBQ1YsQ0FBQyxFQUpJLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJdkI7QUFBQSxDQUFDO0FBRUYsTUFBTSxrQkFBbUIsU0FBUSx5REFBUztJQVl0Qzs7O09BR0c7SUFDTyxXQUFXLENBQUMsTUFBZ0I7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFNBQVMsQ0FBQyxJQUFjLEVBQUUsTUFBZTtRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWTtRQUNsQixXQUFXO1FBQ1gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ1gsT0FBTztTQUNWO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVoRixTQUFTO1FBQ1QsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFDZixvQkFBb0I7UUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN2QixXQUFXO1lBQ1gsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLGFBQWE7WUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNILFNBQVM7WUFDVCxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksSUFBSSxDQUFDO1FBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixXQUFXO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVsRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVELFlBQVksT0FBb0M7UUFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDcEM7UUFFRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxlQUFlLElBQUkscUJBQXFCLENBQUMsSUFBSTtRQUM3RSxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQUksbUJBQW1CLENBQUMsR0FBRyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBZTtRQUNWLElBQUksQ0FBQyxTQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLEtBQWU7UUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksaURBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFLDhEQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsVUFBVSxFQUFFLENBQUM7Z0JBQy9DLEVBQUUsRUFBRSxVQUFVO2dCQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN4QixJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsQ0FBQzthQUNULENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVhLGlGQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0psQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQ3JEO0FBQ21CO0FBRUk7QUFFekQsTUFBTSxhQUFjLFNBQVEsMkRBQWtCO0lBMEYxQyxZQUFZLEdBQVEsRUFBRSxPQUFvQztRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUF4RlgsY0FBUyxHQUFrQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRTdDOztXQUVHO1FBQ0ssV0FBTSxHQUFHLENBQUMsSUFBOEIsRUFBRSxFQUFFO1lBQ2hELElBQUksRUFDQSxDQUFDLEVBQUUsQ0FBQyxFQUNQLEdBQUcsSUFBSSxDQUFDO1lBQ1QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLElBQWMsQ0FBQztZQUNuQixJQUFJLElBQTBCLENBQUM7WUFFL0IsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixJQUFJLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtvQkFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDWixNQUFNO2lCQUNUO2FBQ0o7WUFFRCxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ssY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUM7UUErQkQ7OztXQUdHO1FBQ0ssZUFBVSxHQUFHLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVWLFNBQVMsT0FBTztnQkFDWixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ3hCLE9BQU87aUJBQ1Y7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTNCLENBQUMsRUFBRSxDQUFDO2dCQUVKLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUVELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQWdHRDs7V0FFRztRQUNILGdCQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFoR0csSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyx1REFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQWpFTyxXQUFXLENBQUMsSUFBYztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssY0FBYyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxLQUFhLENBQUM7UUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLEtBQUssR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRSxDQUFDLEVBQUUsQ0FBQztZQUV6QyxJQUFJLDJEQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsQ0FBQzthQUNaO1NBQ0o7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBd0NEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxLQUFlO1FBQ3ZCLElBQUksRUFBRSxDQUFDO1FBRVAsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLEVBQUUsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRSxDQUFDLEVBQUUsQ0FBQztZQUV0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQ7U0FDSjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDVixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQWMsQ0FBQztRQUVuQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QixJQUFJLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDeEI7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDWCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksSUFBYyxDQUFDO1FBRW5CLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBZSxFQUFFLFVBQW1CLEtBQUs7UUFDL0MsSUFBSSxLQUFLLEdBQXVCLFNBQVMsQ0FBQztRQUUxQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxpREFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUUsOERBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxVQUFVLEVBQUUsQ0FBQztnQkFDL0MsRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3hCLElBQUksRUFBRSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxDQUFDO2FBQ1QsQ0FBQyxDQUFDO1lBRUgsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0M7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FRSjtBQUFBLENBQUM7QUFFYSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDck03QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0g7QUFDYTtBQUVVO0FBRXpELE1BQU0sYUFBYyxTQUFRLHlEQUFTO0lBd0NqQyxZQUFZLEdBQVEsRUFBRSxPQUFvQztRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFwQ1gsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFzQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBRWhCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQTNDTyxhQUFhO1FBQ2pCLElBQUksT0FBTyxDQUFDO1FBRVosT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaURBQVEsQ0FBQztZQUMxQixLQUFLLEVBQUUsOERBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ2pDLEVBQUUsRUFBRSxPQUFPO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVztZQUN4QixJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLGNBQWM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG9EQUFJLENBQUM7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVztZQUN4QixJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2xDLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBZ0JEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLElBQUksQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO1FBRS9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLElBQUksQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO1FBRS9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDSjtBQUFBLENBQUM7QUFFYSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkY3QixjQUFjLG1CQUFPLENBQUMsd0hBQXdEOztBQUU5RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQndCO0FBRW5CO0FBTXBCLE1BQU0sSUFBSTtJQTRGTixZQUFZLE9BQXNCO1FBMUZsQyxvQkFBb0I7UUFDWixZQUFPLEdBQVksS0FBSyxDQUFDO1FBMEY3QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQWhGTyxLQUFLO1FBRVQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUNyQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRU8sS0FBSztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUVPLE9BQU87UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUUvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRWEsV0FBVzs7WUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNyQixLQUFLLEVBQUUsaUJBQWlCO2lCQUMzQixFQUFFLFVBQVMsTUFBVztvQkFDbkIsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLGtEQUFXLEVBQUU7d0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ25CO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzNCO2dCQUVMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFYSxVQUFVLENBQUMsR0FBVzs7WUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNyQixLQUFLLEVBQUUsZ0JBQWdCO29CQUN2QixJQUFJLEVBQUU7d0JBQ0YsR0FBRyxFQUFFLEdBQUc7cUJBQ1g7aUJBQ0osRUFBRSxVQUFTLE1BQVc7b0JBQ25CLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxrREFBVyxFQUFFO3dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ25CO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzNCO2dCQUVMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFNRCxJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUssVUFBVTs7WUFDWixJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsR0FBVzs7WUFDdkIsSUFBSSxNQUFNLEdBQVEsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtDQUNKO0FBQUEsQ0FBQztBQUVhLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuSXBCO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ0c7QUFDSTtBQUd6QixNQUFPLENBQUMsS0FBSyxHQUFHO0lBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksNENBQUcsQ0FBQztRQUNkLElBQUksRUFBa0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7S0FDeEQsQ0FBQyxDQUFDO0lBRUcsTUFBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRUksTUFBTyxDQUFDLFNBQVMsR0FBRyxVQUFTLEdBQVE7SUFDdkMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFFcEIsYUFBYTtJQUNiLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxrREFBSSxDQUFDO1FBQ2pCLEdBQUcsRUFBRSxHQUFHO1FBQ1IsSUFBSSxFQUFFLEdBQUc7S0FDWixDQUFDLENBQUM7SUFFSCxhQUFhO0lBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNoQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNWLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFO1lBQ0wsR0FBRyxFQUFFO2dCQUNELFVBQVUsRUFBRSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxHQUFHLEVBQUU7Z0JBQ0QsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNELEdBQUcsRUFBRTtnQkFDRCxVQUFVLEVBQUUsR0FBRztnQkFDZixRQUFRLEVBQUUsQ0FBQzthQUNkO1NBQ0o7S0FDSixDQUFDLENBQUM7SUFFSCxhQUFhO0lBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QixTQUFTLEVBQUUsR0FBRztRQUNkLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7S0FDbEosQ0FBQyxDQUFDO0lBRUgsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGtEQUFrRDtJQUNsRCxVQUFVO0lBQ1YsWUFBWTtJQUVOLE1BQU8sQ0FBQyxZQUFZLEdBQUcsVUFBUyxJQUFZO1FBQzlDLGFBQWE7UUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7U0FDMUUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEV1RDtBQVF4RCxJQUFLLGNBSUo7QUFKRCxXQUFLLGNBQWM7SUFDZix1REFBTTtJQUNOLHlEQUFPO0lBQ1AsdURBQU07QUFDVixDQUFDLEVBSkksY0FBYyxLQUFkLGNBQWMsUUFJbEI7QUFBQSxDQUFDO0FBRUYsTUFBTSxPQUFRLFNBQVEsK0RBQWU7SUEwQ2pDLFlBQVksT0FBeUI7UUFDakMsS0FBSyxFQUFFLENBQUM7UUF2Q0osbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQXdDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztRQUVqRCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQztJQXpDTyxlQUFlLENBQUMsR0FBUTtRQUM1QixhQUFhO1FBQ2IsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFakMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLE9BQU87YUFDVjtZQUVELEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFYixPQUFPO1NBQ1Y7UUFFRCxVQUFVO1FBQ1YsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sb0JBQW9CLENBQUMsR0FBUTtRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQVlELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUssSUFBSTs7WUFDTixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNuQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUMsTUFBSyxFQUFDLEtBQUksTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRTVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDWixHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzNCO2dCQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFFdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7b0JBRXJDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRTNCLE9BQU8sRUFBRSxDQUFDO2dCQUNkLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztvQkFFckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFNUIsTUFBTSxFQUFFLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQzlCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBRXpCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDM0I7b0JBRUQsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO3dCQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ25DO3lCQUFNO3dCQUNILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCO2dCQUNMLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFDLEdBQVEsRUFBRSxRQUFtQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNYLE9BQU87U0FDVjtRQUVELElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2hDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBRS9CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pJdkI7QUFBQTtBQUF3RTtBQU14RSxNQUFNLE1BQU8sU0FBUSxzREFBYTtJQUc5QixZQUFZLE9BQXdCO1FBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEdBQTZCO1FBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQzlCdEI7QUFBQTtBQUF3RTtBQUV4RSxNQUFNLFNBQVUsU0FBUSxzREFBYTtJQUdqQyxZQUFZLE9BQStCO1FBQ3ZDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhULGNBQVMsR0FBb0IsRUFBRSxDQUFDO0lBSTFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLE1BQXFCLEVBQUUsS0FBYztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLE1BQXFCO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNULE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEdBQTZCO1FBQ2hDLElBQUksS0FBSyxFQUFFLEVBUVY7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFFRCxhQUFhO1FBQ2IsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLGFBQWE7UUFDYixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUk7WUFDaEMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhO1FBQ2IsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsS0FBYSxFQUFFLElBQVU7UUFDbkMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJO1lBQ2hDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25GekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNmO0FBQ0Y7QUFDUTtBQVN2QyxNQUFNLGFBQWMsU0FBUSx3REFBZTtJQThCdkMsWUFBWSxPQUErQjtRQUN2QyxLQUFLLEVBQUUsQ0FBQztRQTNCRixZQUFPLEdBQXVCLElBQUksQ0FBQztRQUNuQyxhQUFRLEdBQVksSUFBSSxDQUFDO1FBNEIvQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzREFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQS9CRDs7T0FFRztJQUNPLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxRQUFRO1FBQ2QsT0FBTyxJQUFJLGtEQUFJLENBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQ2YsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7SUFDTixDQUFDO0lBWUQsSUFBSSxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEdBQXVCO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLENBQVU7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLENBQVM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE9BQU8sQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLG1EQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBZ0IsQ0FBQztRQUVyQixXQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM1QzthQUFNO1lBQ0gsTUFBTSxHQUFHLElBQUksc0RBQVEsRUFBRSxDQUFDO1NBQzNCO1FBRUQsUUFBUTtRQUNSLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVoQixVQUFVO1FBQ1YsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNBLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQTZCO1FBQ2hDLGFBQWE7UUFDYixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdEIsYUFBYTtRQUNiLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLGFBQWE7UUFDYixHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pLN0I7QUFBQSxNQUFNLGVBQWU7SUFlakI7UUFkUSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztJQWVyQyxDQUFDO0lBYk8saUJBQWlCLENBQUMsSUFBWSxFQUFFLElBQWM7UUFDbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBS0QsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLElBQWM7UUFDekMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3BDLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBWSxFQUFFLElBQWM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDckMsT0FBTztTQUNWO1FBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBWSxFQUFFLElBQVU7UUFDbEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztDQUNKO0FBRWMsOEVBQWUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZEL0I7QUFBQTtBQUFnRDtBQUsvQyxDQUFDO0FBTUQsQ0FBQztBQUVGLE1BQU0sY0FBZSxTQUFRLHdEQUFlO0lBcUV4QztRQUNJLEtBQUssRUFBRSxDQUFDO1FBNURaLEtBQUs7UUFDRyxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBb0NsQixrQkFBYSxHQUFHLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRWxCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFakMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUM7UUFFTyxpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU3QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQztRQUtHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUEvRE8sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLG9CQUE0QixDQUFDO2dCQUNyRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDO1lBQ0YsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0saUJBQXlCLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHO2dCQUNoQixJQUFJLGVBQXFCO2dCQUN6QixLQUFLLEVBQUUsS0FBSztnQkFDWixNQUFNLGlCQUF5QjthQUNsQyxDQUFDO1NBQ0w7YUFBTTtZQUNILE9BQU87WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVPLFVBQVUsQ0FBQyxHQUFXO1FBQzFCLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWlDRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFXO1FBQ1osS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7U0FDSjtJQUNMLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNYLGdCQUFnQjtRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7Q0FDSjtBQUFBLENBQUM7QUFFYSxtRUFBSSxjQUFjLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pIcEM7QUFBQTtBQUF3RTtBQVN4RSxNQUFNLElBQUssU0FBUSxzREFBYTtJQWlDNUIsWUFBWSxPQUFzQjtRQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFuQlgsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBb0IzQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUF4Q0QsTUFBTSxDQUFDLElBQUk7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBNkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQVNEOztPQUVHO0lBQ0ssU0FBUztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNLLGFBQWE7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBY0QsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQTZCO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsUUFBUSxDQUNSLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDM0MsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDM0IsQ0FBQztRQUNGLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUVHLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwSHBCO0FBQUEsTUFBTSxRQUFRO0lBUVYsWUFBWSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUMsRUFBRSxLQUFhLENBQUMsRUFBRSxLQUFhLENBQUM7UUFDbEcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUU1QixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUVwQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMxQixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLENBQVM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDdEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsQ0FBUztRQUNaLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLENBQVM7UUFDWixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxlQUFlLENBQUMsTUFBZ0IsRUFBRSxNQUFpQjtRQUMvQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFekMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxNQUFpQjtRQUNwQixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUVELE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV0QixNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPO1lBQ0gsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ25CLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQy9JeEI7QUFBQSxNQUFNLEtBQUs7SUFJUCxZQUFZLENBQVMsRUFBRSxDQUFTO1FBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1CQUFtQixDQUFDLE1BQWdCO1FBQ2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BDckI7QUFBQSxNQUFNLElBQUk7SUFNTixZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDbEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUSxDQUFDLEtBQVk7UUFDakIsSUFBSSxFQUNBLENBQUMsRUFDRCxDQUFDLEVBQ0osR0FBRyxLQUFLLENBQUM7UUFFVixJQUNJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQzFCO1lBQ0UsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUJBQW1CLENBQUMsTUFBZ0I7UUFDaEMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUzQixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFFL0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVosSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ1QsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDUixFQUFFLEdBQUcsR0FBRyxDQUFDO1NBQ1o7UUFDRCxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDVCxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ1QsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNSLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDWjtRQUVELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNULEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDVCxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ1IsRUFBRSxHQUFHLEdBQUcsQ0FBQztTQUNaO1FBQ0QsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ1QsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDUixFQUFFLEdBQUcsR0FBRyxDQUFDO1NBQ1o7UUFFRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQzFIcEI7QUFBQTtBQUF1QztBQUVqQyx3QkFBd0IsQ0FBQyxTQUFVLENBQUMsUUFBUSxHQUFHLElBQUksc0RBQVEsRUFBRSxDQUFDO0FBQzlELHdCQUF3QixDQUFDLFNBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBRXJELHdCQUF3QixDQUFDLFNBQVUsQ0FBQyxlQUFlLEdBQUc7SUFDeEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxzREFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQztBQUVJLHdCQUF3QixDQUFDLFNBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBUyxNQUFnQjtJQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUVJLHdCQUF3QixDQUFDLFNBQVUsQ0FBQyxrQkFBa0IsR0FBRztJQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRixjQUFjLG1CQUFPLENBQUMsd0hBQXdEOztBQUU5RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNsQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDNEI7QUFDSztBQUNUO0FBRXBDO0FBSW5CLENBQUM7QUFFRixJQUFLLFNBR0o7QUFIRCxXQUFLLFNBQVM7SUFDVix5Q0FBSTtJQUNKLDJDQUFLO0FBQ1QsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFBQSxDQUFDO0FBV0QsQ0FBQztBQU1ELENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDMUIsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO0FBRTNCLFNBQVMsYUFBYSxDQUFDLFdBQW1CLEVBQUUsWUFBb0I7SUFDNUQsNEJBQTRCO0lBQzVCLElBQUksS0FBSyxHQUFHLFlBQVksR0FBRyxjQUFjLENBQUM7SUFDMUMsSUFBSSxLQUFLLEdBQUcsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNsQyxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFckMsT0FBTztRQUNILEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxZQUFZO0tBQ3ZCLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxJQUFLLFNBQVEsK0RBQWU7SUFxWTlCLFlBQVksT0FBc0I7UUFDOUIsS0FBSyxFQUFFLENBQUM7UUFuWVosb0JBQW9CO1FBQ1osWUFBTyxHQUFZLEtBQUssQ0FBQztRQUtqQyxVQUFVO1FBQ0YsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUM5QixTQUFTO1FBQ0QsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUt6QixjQUFjO1FBQ04sa0JBQWEsR0FBYSxFQUFFLENBQUM7UUEwS3JDOzs7V0FHRztRQUNLLHFCQUFnQixHQUFHLENBQUMsSUFBdUIsRUFBRSxFQUFFO1lBRW5ELElBQUksUUFBUSxHQUFHLElBQUksa0RBQUksQ0FBQztnQkFDcEIsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDeEIsQ0FBQyxDQUFDO1lBQUEsQ0FBQztZQUNKLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFFckMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNyQyxVQUFVO29CQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnRUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2RCxNQUFNO2dCQUNWLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDckMsVUFBVTtvQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZ0VBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEQsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGdFQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RELE1BQU07Z0JBQ1Y7b0JBQ0ksTUFBTSxrQkFBa0IsQ0FBQzthQUNoQztRQUNMLENBQUM7UUFFRDs7OztXQUlHO1FBQ0sscUJBQWdCLEdBQUcsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUV6QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVEOzs7V0FHRztRQUNLLGlCQUFZLEdBQUcsQ0FBQyxJQUF3QyxFQUFFLEVBQUU7WUFDaEUsSUFBSSxFQUNBLE1BQU0sRUFDTixPQUFPLEVBQ1YsR0FBRyxJQUFJLENBQUM7WUFFVCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVEOzs7V0FHRztRQUNLLHNCQUFpQixHQUFHLENBQUMsSUFBMEMsRUFBRSxFQUFFO1lBQ3ZFLElBQUksRUFDQSxTQUFTLEVBQ1QsS0FBSyxFQUNSLEdBQUcsSUFBSSxDQUFDO1lBRVQsS0FBSztZQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7Z0JBQ2hDLE9BQU8sMkRBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUVILFdBQVc7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFELFlBQVk7WUFDWixLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0Q7WUFFRCxlQUFlO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1RCxDQUFDO1FBRUQ7O1dBRUc7UUFDSyx1QkFBa0IsR0FBRyxDQUFDLElBQXNDLEVBQUUsRUFBRTtZQUNwRSxJQUFJLEVBQ0EsTUFBTSxFQUNOLEtBQUssRUFDUixHQUFHLElBQUksQ0FBQztZQUVULElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQ7O1dBRUc7UUFDSyx1QkFBa0IsR0FBRyxDQUFDLElBQTBCLEVBQUUsRUFBRTtZQUN4RCxJQUFJLEVBQ0EsVUFBVSxFQUNiLEdBQUcsSUFBSSxDQUFDO1lBRVQsZUFBZTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUVEOztXQUVHO1FBQ0ssd0JBQW1CLEdBQUcsQ0FBQyxJQUF1QyxFQUFFLEVBQUU7WUFDdEUsSUFBSSxFQUNBLE1BQU0sRUFDTixNQUFNLEVBQ1QsR0FBRyxJQUFJLENBQUM7WUFFVCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVEOztXQUVHO1FBQ0ssZUFBVSxHQUFHLENBQUMsSUFBdUQsRUFBRSxFQUFFO1lBQzdFLElBQUksRUFDQSxjQUFjLEVBQ2QsYUFBYSxFQUNoQixHQUFHLElBQUksQ0FBQztZQUVULElBQUksQ0FBQyxhQUFhLENBQUMsaURBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXJGLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsS0FBSyxNQUFNLENBQUMsQ0FBQzthQUMxRTtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRTNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsR0FBRyxLQUFLLGNBQWMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVFO1FBQ0wsQ0FBQztRQUVEOztXQUVHO1FBQ0ssaUJBQVksR0FBRyxDQUFDLElBQXVDLEVBQUUsRUFBRTtZQUMvRCxJQUFJLEVBQ0EsTUFBTSxFQUNOLEtBQUssRUFDUixHQUFHLElBQUksQ0FBQztZQUVULElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLHdCQUF3QjtnQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7YUFDcEM7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVEOztXQUVHO1FBQ0ssZUFBVSxHQUFHLENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQzVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFekIsSUFDSSxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsR0FBRztnQkFDOUIsSUFBSSxDQUFDLGtCQUFrQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFDakQ7Z0JBQ0UsaUNBQWlDO2dCQUNqQywwQkFBMEI7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBRTNCO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkQsQ0FBQztRQUVEOztXQUVHO1FBQ0ssY0FBUyxHQUFHLENBQUMsSUFBc0IsRUFBRSxFQUFFO1lBQzNDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRW5DLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDakQ7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBMEhEOzs7V0FHRztRQUNLLHVCQUFrQixHQUFHLEdBQUcsRUFBRTtZQUM5QixJQUFJLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFGLElBQUksTUFBTSxHQUFHLDJEQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVyRCxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6RTtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzVFO1FBQ0wsQ0FBQztRQXlDRCxrQkFBYSxHQUFHLEdBQUcsRUFBRTtZQUNqQixPQUFPO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRXJELElBQUksQ0FBQyxhQUFhLENBQUMsaURBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBbExHLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBblhEOzs7T0FHRztJQUNLLEtBQUssQ0FBQyxJQUF1QjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRWxCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpREFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ25DLFNBQVM7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRWxILElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ssVUFBVTtRQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFekMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUNqQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsS0FBSyxtQkFBbUIsQ0FBQztRQUVuRSxPQUFPO1FBQ1AsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksd0RBQUssQ0FBQztZQUNwQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGlCQUFpQixDQUFDLE9BQVk7UUFDbEMsSUFBSSxRQUFRLENBQUM7UUFDYixJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksU0FBUyxDQUFDO1FBRWQsV0FBVztRQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFakQsS0FBSyxTQUFTLElBQUksT0FBTyxFQUFFO1lBQ3ZCLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQzNDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBRXZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDbEIsVUFBVTtnQkFDVixTQUFTO2dCQUNULFFBQVE7YUFDWCxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssS0FBSztRQUNULElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTlCLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpREFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLG1CQUFtQjtRQUN2QixPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFbEYsT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxGLFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUUsVUFBVTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXBGLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV0RixVQUFVO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFdEYsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXhGLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEUsS0FBSztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU5RSxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRFLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxzQkFBc0I7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQWlORCxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQXVCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTdCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ25DO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxPQUFnQjtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQixLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixPQUFPLEVBQUUsT0FBTzthQUNuQjtTQUNKLEVBQUUsVUFBUyxNQUFXO1lBQ25CLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxrREFBVyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUMsS0FBSSxFQUFDLE9BQU0sSUFBSSxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLElBQUksRUFBRTtnQkFDRixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ2pCLEtBQUssRUFBRSxLQUFLO2FBQ2Y7U0FDSixFQUFFLFVBQVMsTUFBVztZQUNuQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssa0RBQVcsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFDLE1BQUssRUFBQyxPQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDckIsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixNQUFNLEVBQUUsTUFBTTthQUNqQjtTQUNKLEVBQUUsVUFBUyxNQUFXO1lBQ25CLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxrREFBVyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEVBQUMsTUFBSyxFQUFDLE9BQU0sRUFBRSxDQUFDLENBQUM7YUFDekM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLElBQUksRUFBRTtnQkFDRixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDcEI7U0FDSixFQUFFLFVBQVMsTUFBVztZQUNuQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssa0RBQVcsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaUJEOzs7T0FHRztJQUNILElBQUksQ0FBQyxNQUFlO1FBQ2hCLElBQUksS0FBZSxDQUFDO1FBRXBCLElBQUksTUFBTSxFQUFFO1lBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDL0U7YUFBTTtZQUNILE9BQU87WUFDUCxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFFRCxLQUFLO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQixLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNqQixLQUFLLEVBQUUsS0FBSzthQUNmO1NBQ0osRUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ2YsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLGtEQUFXLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekI7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxHQUFHLENBQUM7YUFDakQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FVSjtBQUFBLENBQUM7QUFFYSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN21CbkI7QUFBQSxDQUFDO0FBRUYsTUFBTSxJQUFJO0lBSU4sWUFBWSxPQUFrQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0NBQ0o7QUFBQSxDQUFDO0FBRWEsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQ3JCcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQztBQUVqQyxJQUFZLFVBaUJYO0FBakJELFdBQVksVUFBVTtJQUNsQixvQ0FBc0I7SUFDdEIsb0NBQXNCO0lBRXRCLG1EQUFxQztJQUNyQyxtREFBcUM7SUFDckMsMENBQTRCO0lBQzVCLGlEQUFtQztJQUNuQyxzQ0FBd0I7SUFDeEIsbURBQXFDO0lBQ3JDLHdDQUEwQjtJQUMxQixtREFBcUM7SUFDckMsd0NBQTBCO0lBRTFCLHNDQUF3QjtJQUN4QixvQ0FBc0I7SUFDdEIsc0NBQXdCO0FBQzVCLENBQUMsRUFqQlcsVUFBVSxLQUFWLFVBQVUsUUFpQnJCO0FBQUEsQ0FBQztBQUVLLFNBQVMsWUFBWSxDQUFDLE1BQWdCLEVBQUUsTUFBZ0I7SUFDM0QsWUFBWTtJQUNaLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsSUFBSSxTQUFTLEdBQVUsRUFBRSxDQUFDO0lBQzFCLElBQUksU0FBUyxHQUFVLEVBQUUsQ0FBQztJQUUxQixRQUFRO0lBQ1IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBRSxDQUFTLEVBQUUsRUFBRTtRQUN4QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxJQUFJLENBQ1YsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzFDLENBQUM7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLENBQVMsRUFBRSxFQUFFO1FBQ3hDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsU0FBUyxDQUFDLElBQUksQ0FDVixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVM7SUFDVCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbEYsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5CLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNkLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNmO0lBRUQsS0FBSztJQUNMLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUMxQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDMUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUFDLEVBQVksRUFBRSxJQUFZO0lBQy9DLElBQUksS0FBSyxHQUFrQixJQUFJLENBQUM7SUFDaEMsT0FBTztRQUNILGFBQWE7UUFDYixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1AsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDaEI7UUFDRCxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlB1a2VcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUHVrZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQdWtlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4LWJveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmluZGV4LXJlc291cmNlLXByb2dyZXNzIHtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2E0ZmM7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uaW5kZXgtc3RhcnQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDcwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03NXB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTRmYztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhhbGwtYm94IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGFsbC1jcmVhdGUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjUlO1xcbiAgICB0b3A6IDcwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03NXB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTRmYztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmhhbGwtcmlkLWlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWNhNGZjO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBsZWZ0OiA3NSU7XFxuICAgIHRvcDogNzAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzVweCwgLTUwcHgpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmhhbGwtZW50ZXItYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNzUlO1xcbiAgICB0b3A6IDcwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03NXB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTRmYztcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJvb20tYm94IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlci9Vc2VyXCI7XG5pbXBvcnQgTmV0d29yayBmcm9tIFwiLi9uZXR3b3JrL05ldHdvcmtcIjtcbmltcG9ydCBSb29tIGZyb20gXCIuL3Jvb20vUm9vbVwiO1xuaW1wb3J0IEhhbGwgZnJvbSBcIi4vaGFsbC9IYWxsXCI7XG5pbXBvcnQgeyBSRVRfU1VDQ0VTUyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgUmVzb3VyY2VDb25maWcgZnJvbSBcIi4vcmVzb3VyY2UuanNvblwiO1xuaW1wb3J0IFJlc291cmNlTWFuYWdlIGZyb20gXCIuL3JlbmRlci9SZXNvdXJjZU1hbmFnZVwiO1xuXG5pbnRlcmZhY2UgaV9BcHBPcHRpb25zIHtcbiAgICByb290OiBIVE1MRGl2RWxlbWVudDtcbn1cblxuY2xhc3MgQXBwIHtcbiAgICAvLyDnlKjmiLfkv6Hmga9cbiAgICBwcml2YXRlIF91c2VyPzogVXNlcjtcbiAgICAvLyDnvZHnu5xcbiAgICBwdWJsaWMgbmV0d29yazogTmV0d29yaztcbiAgICAvLyDmnIDlpJblsYLlrrnlmahcbiAgICBwcml2YXRlIF9yb290OiBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyDlpKfljoVcbiAgICBwcml2YXRlIF9oYWxsITogSGFsbDtcbiAgICAvLyDmiL/pl7RcbiAgICBwcml2YXRlIF9yb29tITogUm9vbTtcblxuICAgIC8vIOmmlumhtemcgOimgWRvbeeahOWuueWZqFxuICAgIHByaXZhdGUgX2JveCE6IEhUTUxEaXZFbGVtZW50O1xuICAgIC8vIOi1hOa6kOWKoOi9vei/m+W6puadoVxuICAgIHByaXZhdGUgX3Jlc291cmNlUHJvZ3Jlc3MhOiBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyDlvIDlp4vmjInpkq5cbiAgICBwcml2YXRlIF9zdGFydEJ1dHRvbiE6IEhUTUxEaXZFbGVtZW50O1xuICAgIFxuICAgIHB1YmxpYyBkZWJ1Z2dlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9yZXNvdXJjZVByb2dyZXNzLmNsYXNzTmFtZSA9ICdpbmRleC1yZXNvdXJjZS1wcm9ncmVzcyc7XG5cbiAgICAgICAgdGhpcy5fc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fc3RhcnRCdXR0b24uY2xhc3NOYW1lID0gJ2luZGV4LXN0YXJ0LWJ1dHRvbic7XG4gICAgICAgIHRoaXMuX3N0YXJ0QnV0dG9uLmlubmVyVGV4dCA9ICflv6vpgJ/lvIDlp4snO1xuICAgICAgICB0aGlzLl9zdGFydEJ1dHRvbi5vbmNsaWNrID0gdGhpcy5fc3RhcnQ7XG5cbiAgICAgICAgdGhpcy5fYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX2JveC5jbGFzc05hbWUgPSAnaW5kZXgtYm94JztcblxuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fcmVzb3VyY2VQcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9zdGFydEJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5fcm9vdC5hcHBlbmRDaGlsZCh0aGlzLl9ib3gpO1xuXG4gICAgICAgIC8vIOW8gOWni+WKoOi9vei1hOa6kFxuICAgICAgICBSZXNvdXJjZU1hbmFnZS5sb2FkKFJlc291cmNlQ29uZmlnKTtcblxuICAgICAgICAvLyDov5vluqbmnaFcbiAgICAgICAgUmVzb3VyY2VNYW5hZ2UuYWRkRXZlbnRMaXN0ZW5lcignb25Qcm9ncmVzcycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc291cmNlUHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHsxMDAgKiBSZXNvdXJjZU1hbmFnZS5jb21wbGV0ZWQgLyBSZXNvdXJjZU1hbmFnZS50b3RhbH0lYDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFJlc291cmNlTWFuYWdlLnRvdGFsLCBSZXNvdXJjZU1hbmFnZS5jb21wbGV0ZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDliqDovb3lrozmr5XvvIzjgIzlvIDlp4vmuLjmiI/mjInpkq7lsZXnpLrjgI1cbiAgICAgICAgUmVzb3VyY2VNYW5hZ2UuYWRkRXZlbnRMaXN0ZW5lcignb25Db21wbGV0ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsZXnpLpcbiAgICAgKi9cbiAgICBwcml2YXRlICBfc3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2JveC5yZW1vdmVDaGlsZCh0aGlzLl9zdGFydEJ1dHRvbik7XG5cbiAgICAgICAgbGV0IHVpZCA9IFN0cmluZyhEYXRlLm5vdygpICUgMTAwMCk7XG4gICAgICAgIGxldCBuYW1lID0gdWlkO1xuXG4gICAgICAgIHRoaXMuX3VzZXIgPSBuZXcgVXNlcih7XG4gICAgICAgICAgICB1aWQ6IHVpZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0R2FtZSgpO1xuXG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHRoaXMuZW50ZXJIYWxsKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9BcHBPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBvcHRpb25zLnJvb3Q7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5ldHdvcmsgPSBuZXcgTmV0d29yayh7XG4gICAgICAgICAgICBob3N0OiAnMTAuNjYuMTIxLjQxJyxcbiAgICAgICAgICAgIHBvcnQ6IDc5OTlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cblxuICAgIGdldCByb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcbiAgICB9XG5cbiAgICBnZXQgdXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gICAgfVxuXG4gICAgZ2V0IGhhbGwoKTogSGFsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYWxsO1xuICAgIH1cblxuICAgIGdldCByb29tKCk6IFJvb20ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmuLjmiI/vvIznroDljoZ3ZWJzb2NrZXTov57mjqVcbiAgICAgKi9cbiAgICBhc3luYyBpbml0R2FtZSgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5uZXR3b3JrLmluaXQoKTtcblxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBhd2FpdCB0aGlzLmxvZ2luKHRoaXMuX3VzZXIhLnVpZCwgdGhpcy5fdXNlciEubmFtZSk7XG4gICAgXG4gICAgICAgIGlmIChyZXN1bHQucmV0Y29kZSA9PT0gUkVUX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXmiJDlip86ICcsIHJlc3VsdCk7XG5cbiAgICAgICAgICAgIHRoaXMuZW50ZXJIYWxsKCk7ICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign55m75b2V5byC5bi4Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRlckhhbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yb29tKSB7XG4gICAgICAgICAgICB0aGlzLl9yb29tLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGFsbCkge1xuICAgICAgICAgICAgdGhpcy5faGFsbCA9IG5ldyBIYWxsKHtcbiAgICAgICAgICAgICAgICBhcHA6IHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGFsbC5zaG93KCk7XG4gICAgfVxuXG4gICAgZW50ZXJSb29tKHJvb21JbmZvOiBhbnkpIHtcbiAgICAgICAgdGhpcy5faGFsbC5oaWRlKCk7XG5cbiAgICAgICAgcm9vbUluZm8ubWFpblVpZCA9IHRoaXMuX3VzZXIhLnVpZDtcblxuICAgICAgICBpZiAoIXRoaXMuX3Jvb20pIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvb20gPSBuZXcgUm9vbSh7XG4gICAgICAgICAgICAgICAgYXBwOiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Jvb20uc2hvdyhyb29tSW5mbyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55m75b2VXG4gICAgICogQHBhcmFtIHVpZCBcbiAgICAgKiBAcGFyYW0gbmFtZSBcbiAgICAgKi9cbiAgICBhc3luYyBsb2dpbih1aWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5ldHdvcmsubm90aWZ5KHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJ0dhbWUuRW50ZXJHYW1lJyxcbiAgICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL3JlbmRlci9Db250YWluZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL0FwcFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3VzZXIvVXNlclwiO1xuaW1wb3J0IFJpZ2h0UGxheWVyQXJlYSBmcm9tIFwiLi9hcmVhL3BsYXllci1hcmVhL1JpZ2h0UGxheWVyQXJlYVwiO1xuaW1wb3J0IExlZnRQbGF5ZXJBcmVhIGZyb20gXCIuL2FyZWEvcGxheWVyLWFyZWEvTGVmdFBsYXllckFyZWFcIjtcbmltcG9ydCB7IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgfSBmcm9tIFwiLi4vcmVuZGVyL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBUb3BBcmVhIGZyb20gXCIuL2FyZWEvdG9wLWFyZWEvVG9wQXJlYVwiO1xuaW1wb3J0IE1haW5QbGF5ZXJBcmVhIGZyb20gXCIuL2FyZWEvcGxheWVyLWFyZWEvTWFpblBsYXllckFyZWFcIjtcbmltcG9ydCBPdmVyTW9kYWwgZnJvbSBcIi4vbW9kYWwvTW9kZWxcIjtcblxudHlwZSBpX1N0YWdlT3B0aW9ucyA9IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgJiB7XG4gICAgYXBwOiBBcHAsXG4gICAgb2Zmc2V0WDogbnVtYmVyLFxuICAgIG9mZnNldFk6IG51bWJlcixcblxufTtcblxuZXhwb3J0IGVudW0gUExBWUVSX1BPU0lUSU9OIHtcbiAgICBNQUlOLFxuICAgIFJJR0hULFxuICAgIExFRlRcbn07XG5cbmNsYXNzIFN0YWdlIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIF9hcHA6IEFwcDtcbiAgICAvLyBjYW52YXPoiJ7lj7BcbiAgICBwcml2YXRlIF9jYW52YXMhOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAvLyBjYW52YXPkuIrkuIvmlodcbiAgICBwcml2YXRlIF9jdHghOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgLy8g6Iie5Y+w55u45a+55bGP5bmV55qE5YGP56e777yI6buR6L6555qE5aSn5bCP77yJXG4gICAgcHJpdmF0ZSBfb2Zmc2V0WCE6IG51bWJlcjtcbiAgICBwcml2YXRlIF9vZmZzZXRZITogbnVtYmVyO1xuICAgIC8vIOeOqeWutueahOWMuuWfn1xuICAgIHByaXZhdGUgX3BsYXllckFyZWE6IGFueSA9IHt9O1xuICAgIC8vIOmhtumDqOeahOWMuuWfn1xuICAgIHByaXZhdGUgX3RvcEFyZWEhOiBUb3BBcmVhO1xuICAgIC8vIOa4uOaIj+e7k+adn+eahOW8ueeql+aPkOekulxuICAgIHByaXZhdGUgX292ZXJNb2RhbCE6IE92ZXJNb2RhbDtcbiAgICAvLyDmuLLmn5PnmoTlrprml7blmahcbiAgICBwcml2YXRlIF90aWNrOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWY2FudmFz55u45YWzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdENhbnZhcygpIHtcbiAgICAgICAgbGV0IGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGxldCBjdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAvLyBsZXQgcmVjdCA9IHRoaXMuX3Jlc29sdmVTY3JlZW4odGhpcy5fYXBwLnJvb3Qub2Zmc2V0V2lkdGgsIHRoaXMuX2FwcC5yb290Lm9mZnNldEhlaWdodCk7XG4gICAgICAgIC8vIOW8gOWni+i/m+ihjOe8qeaUvuWxj+W5lemAgumFjeeahOmXrumimFxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLl93aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuX2hlaWdodDtcblxuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcnICsgTWF0aC5yb3VuZCh3aWR0aCAqIGRldmljZVBpeGVsUmF0aW8pKTtcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJycgKyBNYXRoLnJvdW5kKGhlaWdodCAqIGRldmljZVBpeGVsUmF0aW8pKTtcbiAgICAgICAgXG4gICAgICAgIGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLl9jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5fY3R4LnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB0aGlzLl9jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICB0aGlzLl9jdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIC8vIHRoaXMuX2NhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnbGVmdCB0b3AnO1xuICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtoZWlnaHR9cHgpIHJvdGF0ZSg5MGRlZylgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmhtumDqOWMuuWfn+WuieaOkuS4gOS4i1xuICAgICAqL1xuICAgIHByaXZhdGUgX2FkZFRvcEFyZWEoKSB7XG4gICAgICAgIGxldCB0b3BBcmVhID0gbmV3IFRvcEFyZWEodGhpcy5fYXBwLCB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl90b3BBcmVhID0gdG9wQXJlYTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0b3BBcmVhLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvLnnqpflronmjpLkuIDkuItcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hZGRNb2RhbCgpIHtcbiAgICAgICAgbGV0IG92ZXJNb2RhbCA9IG5ldyBPdmVyTW9kYWwodGhpcy5fYXBwLCB7XG4gICAgICAgICAgICB3aWR0aDogMjgwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgICAgICB0b3A6IDEyMCxcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLl93aWR0aCAtIDI4MCkgLyAyXG4gICAgICAgIH0pO1xuICAgICAgICBvdmVyTW9kYWwuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuX292ZXJNb2RhbCA9IG92ZXJNb2RhbDtcbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbihvdmVyTW9kYWwsIDEwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uR5a6a5Lqk5LqS5LqL5Lu2XG4gICAgICovXG4gICAgcHJpdmF0ZSBfYWRkVG91Y2hMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl90b3VjaHN0YXJ0KTtcblxuICAgICAgICB0aGlzLl9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fdG91Y2htb3ZlKTtcblxuICAgICAgICB0aGlzLl9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl90b3VjaGVuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Kej57uR5Lqk5LqS5LqL5Lu2XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVtb3ZlVG91Y2hMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl90b3VjaHN0YXJ0KTtcblxuICAgICAgICB0aGlzLl9jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fdG91Y2htb3ZlKTtcblxuICAgICAgICB0aGlzLl9jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl90b3VjaGVuZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG91Y2hzdGFydCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5fb2Zmc2V0WCAtIHRvdWNoLmNsaWVudFg7XG4gICAgICAgIGxldCB4ID0gdG91Y2guY2xpZW50WSAtIHRoaXMuX29mZnNldFk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd0b3VjaHN0YXJ0Jywge1xuICAgICAgICAgICAgeCwgeVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b3VjaG1vdmUgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGxldCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmhlaWdodCAtIHRoaXMuX29mZnNldFggLSB0b3VjaC5jbGllbnRYO1xuICAgICAgICBsZXQgeCA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLl9vZmZzZXRZO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndG91Y2htb3ZlJywge1xuICAgICAgICAgICAgeCwgeVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b3VjaGVuZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd0b3VjaGVuZCcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfU3RhZ2VPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2FwcCA9IG9wdGlvbnMuYXBwO1xuXG4gICAgICAgIHRoaXMuX29mZnNldFggPSBvcHRpb25zLm9mZnNldFg7XG4gICAgICAgIHRoaXMuX29mZnNldFkgPSBvcHRpb25zLm9mZnNldFk7XG5cbiAgICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuXG4gICAgICAgIHRoaXMuX2FkZFRvcEFyZWEoKTtcblxuICAgICAgICB0aGlzLl9hZGRNb2RhbCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgZ2V0IGNhbnZhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcbiAgICB9XG5cbiAgICBnZXQgdG9wQXJlYSgpOiBUb3BBcmVhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvcEFyZWE7XG4gICAgfVxuXG4gICAgZ2V0IG92ZXJNb2RhbCgpOiBPdmVyTW9kYWwge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3Zlck1vZGFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+W+l+WvueW6lOeahOeOqeWutuWMuuWfn1xuICAgICAqIEBwYXJhbSBpZCBcbiAgICAgKi9cbiAgICBnZXRQbGF5ZXJBcmVhKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckFyZWFbaWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOacieWFtuS7lueOqeWutuWKoOWFpVxuICAgICAqIEBwYXJhbSB1c2VyIFxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBcbiAgICAgKi9cbiAgICBhZGRQbGF5ZXIodXNlcjogVXNlciwgcG9zaXRpb246IFBMQVlFUl9QT1NJVElPTikge1xuICAgICAgICBsZXQgcGxheWVyQXJlYTtcblxuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFBMQVlFUl9QT1NJVElPTi5SSUdIVDpcbiAgICAgICAgICAgICAgICBwbGF5ZXJBcmVhID0gbmV3IFJpZ2h0UGxheWVyQXJlYSh0aGlzLl9hcHAsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGggLyAzLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy53aWR0aCAvIDIgKyAxMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUExBWUVSX1BPU0lUSU9OLkxFRlQ6XG4gICAgICAgICAgICAgICAgcGxheWVyQXJlYSA9IG5ldyBMZWZ0UGxheWVyQXJlYSh0aGlzLl9hcHAsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGggLyAzLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA0NSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUExBWUVSX1BPU0lUSU9OLk1BSU46XG4gICAgICAgICAgICAgICAgcGxheWVyQXJlYSA9IG5ldyBNYWluUGxheWVyQXJlYSh0aGlzLl9hcHAsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTg3LjUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTg3LjUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93ICdpbnZhbGlkIHBvc2l0aW9uJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BsYXllckFyZWFbdXNlci51aWRdID0gcGxheWVyQXJlYTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbihwbGF5ZXJBcmVhLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnjqnlrrbnprvlvIBcbiAgICAgKiBAcGFyYW0gdXNlcklkIFxuICAgICAqL1xuICAgIHJlbW92ZVBsYXllcih1c2VySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKHRoaXMuX3BsYXllckFyZWFbdXNlcklkXSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wbGF5ZXJBcmVhW3VzZXJJZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV56S6c3RhZ2VcbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLl9jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgdGhpcy5fYWRkVG91Y2hMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZqQ6JePc3RhZ2VcbiAgICAgKi9cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLl9jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5riy5p+TXG4gICAgICovXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uZGlzcGxheSAmJiBpdGVtLnJlbmRlcih0aGlzLl9jdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl90aWNrID0gc2V0VGltZW91dCh0aGlzLnJlbmRlciwgNjApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlOyIsImltcG9ydCBBdmF0YXIgZnJvbSBcIi4uLy4uL3BsYXllci9BdmF0YXJcIjtcbmltcG9ydCBOYW1lIGZyb20gXCIuLi8uLi9wbGF5ZXIvTmFtZVwiO1xuaW1wb3J0IFNpZGVQbGF5ZXJBcmVhLCB7IGlfU2lkZVBsYXllckFyZWFPcHRpb25zIH0gZnJvbSBcIi4vU2lkZVBsYXllckFyZWFcIjtcbmltcG9ydCBTaWRlSGFuZFB1a2VzIGZyb20gXCIuLi8uLi9wdWtlcy9TaWRlSGFuZFB1a2VzXCI7XG5pbXBvcnQgRGVza3RvcCBmcm9tIFwiLi4vLi4vZGVza3RvcC9EZXNrdG9wXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9BcHBcIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi4vLi4vLi4vcmVuZGVyL1Jlc291cmNlTWFuYWdlXCI7XG5cbmNsYXNzIExlZnRQbGF5ZXJBcmVhIGV4dGVuZHMgU2lkZVBsYXllckFyZWEge1xuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWktOWDj1xuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRBdmF0YXIoKSB7XG4gICAgICAgIHRoaXMuX2F2YXRhciA9IG5ldyBBdmF0YXIoe1xuICAgICAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgaW1hZ2U6IFJlc291cmNlTWFuYWdlLmdldCgnQVZBVEFSJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9hdmF0YXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWQjeensFxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXROYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmV3IE5hbWUoe1xuICAgICAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHRvcDogMTAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRleHQ6IG5hbWUsXG4gICAgICAgICAgICBzaXplOiAxOFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX25hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJi+eJjFxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRIYW5kUHVrZXMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcyA9IG5ldyBTaWRlSGFuZFB1a2VzKHRoaXMuX2FwcCwge1xuICAgICAgICAgICAgcHVrZVdpZHRoOiAyMCxcbiAgICAgICAgICAgIGludGVydmFsOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHRvcDogMTAwLFxuICAgICAgICAgICAgbGVmdDogMTAwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2hhbmRQdWtlcyk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgX2luaXREZXNrdG9wUHVrZXMoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AgPSBuZXcgRGVza3RvcCh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCAtIDEwMCxcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMTAwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2Rlc2t0b3ApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBvcHRpb25zOiBpX1NpZGVQbGF5ZXJBcmVhT3B0aW9ucykge1xuICAgICAgICBzdXBlcihhcHAsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2luaXRBdmF0YXIoKTtcbiAgICAgICAgdGhpcy5faW5pdE5hbWUob3B0aW9ucy51c2VyLm5hbWUpO1xuICAgICAgICB0aGlzLl9pbml0SGFuZFB1a2VzKCk7XG4gICAgICAgIHRoaXMuX2luaXREZXNrdG9wUHVrZXMoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0UGxheWVyQXJlYTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi9yZW5kZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi8uLi9wbGF5ZXIvQXZhdGFyXCI7XG5pbXBvcnQgTmFtZSBmcm9tIFwiLi4vLi4vcGxheWVyL05hbWVcIjtcbmltcG9ydCBNYWluSGFuZFB1a2VzIGZyb20gXCIuLi8uLi9wdWtlcy9NYWluSGFuZFB1a2VzXCI7XG5pbXBvcnQgeyBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3JlbmRlci9EaXNwbGF5T2JqZWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9BcHBcIjtcbmltcG9ydCBCdXR0b25Db250cm9sIGZyb20gXCIuLi8uLi9idXR0b24vQnV0dG9uQ29udHJvbFwiO1xuaW1wb3J0IERlc2t0b3AgZnJvbSBcIi4uLy4uL2Rlc2t0b3AvRGVza3RvcFwiO1xuaW1wb3J0IFJlc291cmNlTWFuYWdlIGZyb20gXCIuLi8uLi8uLi9yZW5kZXIvUmVzb3VyY2VNYW5hZ2VcIjtcblxuY2xhc3MgTWFpblBsYXllckFyZWEgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByaXZhdGUgX2FwcCE6IEFwcDtcblxuICAgIHByaXZhdGUgX2F2YXRhciE6IEF2YXRhcjtcblxuICAgIHByaXZhdGUgX25hbWUhOiBOYW1lO1xuXG4gICAgcHJpdmF0ZSBfaGFuZFB1a2VzITogTWFpbkhhbmRQdWtlcztcblxuICAgIHByaXZhdGUgX2J1dHRvbkNvbnRyb2whOiBCdXR0b25Db250cm9sO1xuXG4gICAgcHJpdmF0ZSBfZGVza3RvcCE6IERlc2t0b3A7XG5cbiAgICBwcml2YXRlIF91c2VySWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWktOWDj1xuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRBdmF0YXIoKSB7XG4gICAgICAgIHRoaXMuX2F2YXRhciA9IG5ldyBBdmF0YXIoe1xuICAgICAgICAgICAgdG9wOiA2Mi41LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgaW1hZ2U6IFJlc291cmNlTWFuYWdlLmdldCgnQVZBVEFSJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9hdmF0YXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWQjeensFxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXROYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmV3IE5hbWUoe1xuICAgICAgICAgICAgdG9wOiAxNjIuNSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgdGV4dDogbmFtZSxcbiAgICAgICAgICAgIHNpemU6IDE4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omL54mMXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdEhhbmRQdWtlcygpIHtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzID0gbmV3IE1haW5IYW5kUHVrZXModGhpcy5fYXBwLCB7XG4gICAgICAgICAgICBwdWtlV2lkdGg6IDcwLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwLFxuICAgICAgICAgICAgdG9wOiA2Mi41ICsgMjUgLyAyLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9oYW5kUHVrZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaMiemSrlxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRCdXR0b25Db250cm9sKCkge1xuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sID0gbmV3IEJ1dHRvbkNvbnRyb2woe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiA2Mi41LFxuICAgICAgICAgICAgYXBwOiB0aGlzLl9hcHBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9idXR0b25Db250cm9sKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0RGVza3RvcCgpIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcCA9IG5ldyBEZXNrdG9wKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogNjIuNSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9kZXNrdG9wKTtcblxuICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9EaXNwbGF5T2JqZWN0T3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBhcHA7XG4gICAgICAgIHRoaXMuX3VzZXJJZCA9IHRoaXMuX2FwcC51c2VyIS51aWQ7XG5cbiAgICAgICAgdGhpcy5faW5pdEF2YXRhcigpO1xuICAgICAgICB0aGlzLl9pbml0TmFtZSh0aGlzLl9hcHAudXNlciEubmFtZSk7XG4gICAgICAgIHRoaXMuX2luaXRIYW5kUHVrZXMoKTtcbiAgICAgICAgdGhpcy5faW5pdEJ1dHRvbkNvbnRyb2woKTtcbiAgICAgICAgdGhpcy5faW5pdERlc2t0b3AoKTtcbiAgICB9XG5cbiAgICBnZXQgdXNlcklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICAgIH1cblxuICAgIGdldCBoYW5kUHVrZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kUHVrZXM7XG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbkNvbnRyb2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idXR0b25Db250cm9sO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9rlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyDmoYzpnaLpmpDol49cbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgICAgIC8vIOaJi+eJjOmakOiXj1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHhuWkh1xuICAgICAqIEBwYXJhbSBpc1JlYWR5IFxuICAgICAqL1xuICAgIHJlYWR5KGlzUmVhZHk6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fdXNlcklkfSAke2lzUmVhZHk/J+WHhuWkhyc6J+WPlua2iOWHhuWkhyd9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omL54mM77yM5pyJ5Yqo55S7XG4gICAgICogQHBhcmFtIHB1a2VzIFxuICAgICAqL1xuICAgIGluaXRQdWtlcyhwdWtlczogc3RyaW5nW10pIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdGltZSA9IDIwMDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuaGlkZSgpO1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMuc2hvdygpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFB1a2UoKSB7XG4gICAgICAgICAgICBpZiAocHVrZXNbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5faGFuZFB1a2VzLnBvc3RQdWtlcyhbcHVrZXNbaV1dKTtcblxuICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGdldFB1a2UsIHRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UHVrZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+W+l+aWsOeahOeJjO+8jOaXoOWKqOeUu1xuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBnZXRQdWtlcyhwdWtlczogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnBvc3RQdWtlcyhwdWtlcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5jaG9vc2VQdWtlcyhwdWtlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b6KGM5Y+r5Zyw5Li7XG4gICAgICovXG4gICAgZW50ZXJBc2tMYW5kbG9yZCgpIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuc2hvdygpO1xuXG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuZW50ZXJBc2tMYW5kbG9yZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+ihjOaKouWcsOS4u1xuICAgICAqL1xuICAgIGVudGVyR3JhYkxhbmRsb3JkKCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uQ29udHJvbC5zaG93KCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLmVudGVyR3JhYkxhbmRsb3JkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5byA5aeLXG4gICAgICogQHBhcmFtIGlzTGFuZGxvcmQg5piv5ZCm5piv5Zyw5Li7XG4gICAgICovXG4gICAgZ2FtZVN0YXJ0KGlzTGFuZGxvcmQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzTGFuZGxvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2F2YXRhci5iZUxhbmRsb3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+r5Zyw5Li7XG4gICAgICogQHBhcmFtIGlzQXNrIFxuICAgICAqL1xuICAgIGFza0xhbmRsb3JkKGlzQXNrOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuaGlkZSgpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3coKTtcblxuICAgICAgICB0aGlzLl9kZXNrdG9wLmFza0xhbmRsb3JkKGlzQXNrKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl91c2VySWR9ICR7aXNBc2s/J+WPq+WcsOS4uyc6J+S4jeWPq+WcsOS4uyd9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oqi5Zyw5Li7XG4gICAgICogQHBhcmFtIGlzR3JhYiBcbiAgICAgKi9cbiAgICBncmFiTGFuZGxvcmQoaXNHcmFiOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuaGlkZSgpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3coKTtcblxuICAgICAgICB0aGlzLl9kZXNrdG9wLmdyYWJMYW5kbG9yZChpc0dyYWIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0gJHtpc0dyYWI/J+aKouWcsOS4uyc6J+S4jeaKouWcsOS4uyd9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Ye654mMXG4gICAgICogQHBhcmFtIHB1a2VzIFxuICAgICAqL1xuICAgIHNob3RQdWtlcyhwdWtlczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fdXNlcklkfSDlh7rniYwgJHtwdWtlc31gKTtcblxuICAgICAgICAvLyDmiYvniYzlh7rmjolcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnNob3RDaG9vc2VQdWtlcygpO1xuICAgICAgICAvLyDmjInpkq7pmpDol49cbiAgICAgICAgdGhpcy5fYnV0dG9uQ29udHJvbC5oaWRlKCk7XG4gICAgICAgIC8vIOahjOmdoueJjOWuieaOkuS4i1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3RQdWtlcyhwdWtlcyk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3Auc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+WFpeWHuueJjOmYtuautVxuICAgICAqL1xuICAgIGVudGVyU2hvdFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuXG4gICAgICAgIC8vIOWmguaenOahjOmdouS4iuacgOWkp+eahOeJjOaYr+epuueahO+8jOaEj+WRs+edgOi/measoe+8jOS4u+inhuinkueOqeWutuW/hemhu+WHuueJjFxuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLmVudGVyUHVrZXModGhpcy5fYXBwLnJvb20uZGVza3RvcFB1a2VzLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuc2hvdygpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnB1a2VzQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP6YeN572uXG4gICAgICovXG4gICAgZ2FtZVJlc2V0KCkge1xuICAgICAgICAvLyDlnLDkuLvmoIfnpLrph43nva7kuIDkuItcbiAgICAgICAgdGhpcy5fYXZhdGFyLmJlTm9ybWFsKCk7XG5cbiAgICAgICAgdGhpcy5fYnV0dG9uQ29udHJvbC5lbnRlclJlYWR5KGZhbHNlKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uQ29udHJvbC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLmRlbGV0ZUFsbCgpO1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMuaGlkZSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QbGF5ZXJBcmVhOyIsImltcG9ydCBBdmF0YXIgZnJvbSBcIi4uLy4uL3BsYXllci9BdmF0YXJcIjtcbmltcG9ydCBOYW1lIGZyb20gXCIuLi8uLi9wbGF5ZXIvTmFtZVwiO1xuaW1wb3J0IFNpZGVQbGF5ZXJBcmVhLCB7IGlfU2lkZVBsYXllckFyZWFPcHRpb25zIH0gZnJvbSBcIi4vU2lkZVBsYXllckFyZWFcIjtcbmltcG9ydCBTaWRlSGFuZFB1a2VzIGZyb20gXCIuLi8uLi9wdWtlcy9TaWRlSGFuZFB1a2VzXCI7XG5pbXBvcnQgRGVza3RvcCBmcm9tIFwiLi4vLi4vZGVza3RvcC9EZXNrdG9wXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9BcHBcIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi4vLi4vLi4vcmVuZGVyL1Jlc291cmNlTWFuYWdlXCI7XG5cbmNsYXNzIFJpZ2h0UGxheWVyQXJlYSBleHRlbmRzIFNpZGVQbGF5ZXJBcmVhIHtcbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblpLTlg49cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0QXZhdGFyKCkge1xuICAgICAgICB0aGlzLl9hdmF0YXIgPSBuZXcgQXZhdGFyKHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogdGhpcy53aWR0aCAtIDEwMCxcbiAgICAgICAgICAgIGltYWdlOiBSZXNvdXJjZU1hbmFnZS5nZXQoJ0FWQVRBUicpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fYXZhdGFyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblkI3np7BcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5ldyBOYW1lKHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMud2lkdGggLSAxMDAsXG4gICAgICAgICAgICB0ZXh0OiBuYW1lLFxuICAgICAgICAgICAgc2l6ZTogMThcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmiYvniYxcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0SGFuZFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMgPSBuZXcgU2lkZUhhbmRQdWtlcyh0aGlzLl9hcHAsIHtcbiAgICAgICAgICAgIHB1a2VXaWR0aDogMjAsXG4gICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMud2lkdGggLSAyMCAtIDEwMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2hhbmRQdWtlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdERlc2t0b3BQdWtlcygpIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcCA9IG5ldyBEZXNrdG9wKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoIC0gMTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2Rlc2t0b3ApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBvcHRpb25zOiBpX1NpZGVQbGF5ZXJBcmVhT3B0aW9ucykge1xuICAgICAgICBzdXBlcihhcHAsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2luaXRBdmF0YXIoKTtcbiAgICAgICAgdGhpcy5faW5pdE5hbWUob3B0aW9ucy51c2VyLm5hbWUpO1xuICAgICAgICB0aGlzLl9pbml0SGFuZFB1a2VzKCk7XG4gICAgICAgIHRoaXMuX2luaXREZXNrdG9wUHVrZXMoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodFBsYXllckFyZWE7IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vLi4vcmVuZGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vLi4vcGxheWVyL2F2YXRhclwiO1xuaW1wb3J0IE5hbWUgZnJvbSBcIi4uLy4uL3BsYXllci9uYW1lXCI7XG5pbXBvcnQgU2lkZUhhbmRQdWtlcyBmcm9tIFwiLi4vLi4vcHVrZXMvU2lkZUhhbmRQdWtlc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL3VzZXIvVXNlclwiO1xuaW1wb3J0IHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9yZW5kZXIvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IERlc2t0b3AgZnJvbSBcIi4uLy4uL2Rlc2t0b3AvRGVza3RvcFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vQXBwXCI7XG5cbmV4cG9ydCB0eXBlIGlfU2lkZVBsYXllckFyZWFPcHRpb25zID0gaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyAmIHtcbiAgICB1c2VyOiBVc2VyO1xufTtcblxuY2xhc3MgU2lkZVBsYXllckFyZWEgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByb3RlY3RlZCBfYXBwOiBBcHA7XG4gICAgLy8g5aS05YOPXG4gICAgcHJvdGVjdGVkIF9hdmF0YXIhOiBBdmF0YXI7XG4gICAgLy8g5ZCN56ewXG4gICAgcHJvdGVjdGVkIF9uYW1lITogTmFtZTtcbiAgICAvLyDmiYvniYxcbiAgICBwcm90ZWN0ZWQgX2hhbmRQdWtlcyE6IFNpZGVIYW5kUHVrZXM7XG4gICAgLy8g5Ye65Y6755qE54mMXG4gICAgcHJvdGVjdGVkIF9kZXNrdG9wITogRGVza3RvcDtcbiAgICAvLyDnlKjmiLdpZFxuICAgIHByb3RlY3RlZCBfdXNlcklkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9TaWRlUGxheWVyQXJlYU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fYXBwID0gYXBwO1xuXG4gICAgICAgIHRoaXMuX3VzZXJJZCA9IG9wdGlvbnMudXNlci51aWQ7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8g5qGM6Z2i6ZqQ6JePXG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuICAgICAgICAvLyDmiYvniYzpmpDol49cbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLmhpZGUoKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICog5YeG5aSHXG4gICAgICogQHBhcmFtIGlzUmVhZHkgXG4gICAgICovXG4gICAgcmVhZHkoaXNSZWFkeTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMuaGlkZSgpO1xuXG4gICAgICAgIGlmIChpc1JlYWR5KSB7XG4gICAgICAgICAgICAvLyDmoYzpnaLlsZXnpLrvvIzlubbkuJTmmL7npLrlh4blpIdcbiAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3Auc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5fZGVza3RvcC5yZWFkeShpc1JlYWR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fdXNlcklkfSAke2lzUmVhZHk/J+WHhuWkhyc6J+WPlua2iOWHhuWkhyd9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICog5Yid5aeL5YyW5omL54mMXG4gICAgICogQHBhcmFtIGFtb3VudCBcbiAgICAgKi9cbiAgICBpbml0UHVrZXMoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnBvc3RQdWtlcyhhbW91bnQpO1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIOWIneWni+WMluaJi+eJjFxuICAgICAqIEBwYXJhbSBhbW91bnQgXG4gICAgICovXG4gICAgZ2V0UHVrZXMoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnBvc3RQdWtlcyhhbW91bnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+ihjOWPq+WcsOS4u1xuICAgICAqL1xuICAgIGVudGVyQXNrTGFuZGxvcmQoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0g6L+b5YWl5Y+r5Zyw5Li754q25oCBYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b6KGM5oqi5Zyw5Li7XG4gICAgICovXG4gICAgZW50ZXJHcmFiTGFuZGxvcmQoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0g6L+b5YWl5oqi5Zyw5Li754q25oCBYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5byA5aeLXG4gICAgICovXG4gICAgZ2FtZVN0YXJ0KGlzTGFuZGxvcmQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzTGFuZGxvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2F2YXRhci5iZUxhbmRsb3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+r5Zyw5Li7XG4gICAgICogQHBhcmFtIGlzQXNrIFxuICAgICAqL1xuICAgIGFza0xhbmRsb3JkKGlzQXNrOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3Auc2hvdygpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmFza0xhbmRsb3JkKGlzQXNrKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl91c2VySWR9ICR7aXNBc2s/J+WPq+WcsOS4uyc6J+S4jeWPq+WcsOS4uyd9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oqi5Zyw5Li7XG4gICAgICogQHBhcmFtIGlzR3JhYiBcbiAgICAgKi9cbiAgICBncmFiTGFuZGxvcmQoaXNHcmFiOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3Auc2hvdygpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmdyYWJMYW5kbG9yZChpc0dyYWIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0gJHtpc0dyYWI/J+aKouWcsOS4uyc6J+S4jeaKouWcsOS4uyd9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Ye654mMXG4gICAgICogQHBhcmFtIHB1a2VzIFxuICAgICAqL1xuICAgIHNob3RQdWtlcyhwdWtlczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fdXNlcklkfSDlh7rniYwgJHtwdWtlc31gKTtcblxuICAgICAgICAvLyDmiYvniYzlh7rmjolcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnNob3RQdWtlcyhwdWtlcy5sZW5ndGgpO1xuICAgIFxuICAgICAgICAvLyDmoYzpnaLniYzlronmjpLkuItcbiAgICAgICAgdGhpcy5fZGVza3RvcC5zaG90UHVrZXMocHVrZXMpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vlhaXlh7rniYzpmLbmrrVcbiAgICAgKi9cbiAgICBlbnRlclNob3RQdWtlcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy51c2VySWR9IOi/m+WFpeWHuueJjOmYtuautWApO1xuXG4gICAgICAgIHRoaXMuX2Rlc2t0b3AucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP6YeN572uXG4gICAgICovXG4gICAgZ2FtZVJlc2V0KCkge1xuICAgICAgICB0aGlzLl9hdmF0YXIuYmVOb3JtYWwoKTtcblxuICAgICAgICB0aGlzLl9oYW5kUHVrZXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLmhpZGUoKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5yZXNldCgpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVQbGF5ZXJBcmVhOyIsImltcG9ydCBCdXR0b24sIHsgaV9CdXR0b25PcHRpb25zIH0gZnJvbSBcIi4uLy4uL2J1dHRvbi9idXR0b25cIjtcblxuY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9CdXR0b25PcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b247IiwiaW1wb3J0IEJhc2VQdWtlc0NvbnRhaW5lciwgeyBpX0Jhc2VQdWtlc0NvbnRhaW5lck9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vcHVrZXMvQmFzZVB1a2VzQ29udGFpbmVyXCI7XG5cbmNsYXNzIExhbmRsb3JkUHVrZXMgZXh0ZW5kcyBCYXNlUHVrZXNDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfQmFzZVB1a2VzQ29udGFpbmVyT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kbG9yZFB1a2VzOyIsImltcG9ydCBUZXh0LCB7IGlfVGV4dE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vcmVuZGVyL1RleHRcIjtcblxuY2xhc3MgUm9vbUluZm8gZXh0ZW5kcyBUZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX1RleHRPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb21JbmZvOyIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uLy4uL3JlbmRlci9Db250YWluZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uLy4uL0FwcFwiO1xuaW1wb3J0IExhbmRsb3JkUHVrZXMgZnJvbSBcIi4vTGFuZGxvcmRQdWtlc1wiO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4vQmFja0J1dHRvblwiO1xuaW1wb3J0IFJvb21JbmZvIGZyb20gXCIuL1Jvb21JbmZvXCI7XG5pbXBvcnQgeyBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3JlbmRlci9EaXNwbGF5T2JqZWN0XCI7XG5pbXBvcnQgeyBFVkVOVF9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzXCI7XG5cbmNsYXNzIFRvcEFyZWEgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByaXZhdGUgX2FwcDogQXBwO1xuXG4gICAgcHJpdmF0ZSBfYmFja0J1dHRvbiE6IEJhY2tCdXR0b247XG5cbiAgICBwcml2YXRlIF9yb29tSW5mbyE6IFJvb21JbmZvO1xuXG4gICAgcHJpdmF0ZSBfbGFuZGxvcmRQdWtlcyE6IExhbmRsb3JkUHVrZXM7XG5cbiAgICBwcml2YXRlIF9pbml0QmFja0J1dHRvbigpIHtcbiAgICAgICAgdGhpcy5fYmFja0J1dHRvbiA9IG5ldyBCYWNrQnV0dG9uKHtcbiAgICAgICAgICAgIHRleHQ6ICfov5Tlm54nLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6L+U5Zue5aSn5Y6FJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20ubGVhdmVSb29tKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICAgIGxlZnQ6IDEwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fYmFja0J1dHRvbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFJvb21JbmZvKCkge1xuICAgICAgICB0aGlzLl9yb29tSW5mbyA9IG5ldyBSb29tSW5mbyh7XG4gICAgICAgICAgICB0ZXh0OiAn5oi/6Ze05Y+3OiAnLFxuICAgICAgICAgICAgc2l6ZTogMTYsXG4gICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIHRvcDogMTAsXG4gICAgICAgICAgICBsZWZ0OiA4MCxcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fcm9vbUluZm8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRMYW5kbG9yZFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9sYW5kbG9yZFB1a2VzID0gbmV3IExhbmRsb3JkUHVrZXMoe1xuICAgICAgICAgICAgcHVrZVdpZHRoOiAyOCxcbiAgICAgICAgICAgIGludGVydmFsOiAwLFxuICAgICAgICAgICAgd2lkdGg6IDI4ICogMyxcbiAgICAgICAgICAgIGhlaWdodDogNDIsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5fd2lkdGggLSAyOCAqIDMpIC8gMixcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2xhbmRsb3JkUHVrZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVJvb21TaG93ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9yb29tSW5mby50ZXh0ID0gYOaIv+mXtOWPtzogJHt0aGlzLl9hcHAucm9vbS5yb29tSWR9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVHYW1lU3RhcnQgPSAoZGF0YToge2xhbmRsb3JkUGxheWVyOiBzdHJpbmcsIGxhbmRsb3JkUHVrZXM6IHN0cmluZ1tdfSkgPT4ge1xuICAgICAgICB0aGlzLl9sYW5kbG9yZFB1a2VzLnBvc3RQdWtlcyhkYXRhLmxhbmRsb3JkUHVrZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUdhbWVSZXNldCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbGFuZGxvcmRQdWtlcy5kZWxldGVBbGwoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9EaXNwbGF5T2JqZWN0T3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBhcHA7XG5cbiAgICAgICAgdGhpcy5faW5pdEJhY2tCdXR0b24oKTtcblxuICAgICAgICB0aGlzLl9pbml0Um9vbUluZm8oKTtcblxuICAgICAgICB0aGlzLl9pbml0TGFuZGxvcmRQdWtlcygpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5yb29tLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfTkFNRS5ST09NX1NIT1csIHRoaXMuX2hhbmRsZVJvb21TaG93KTtcbiAgICBcbiAgICAgICAgdGhpcy5fYXBwLnJvb20uYWRkRXZlbnRMaXN0ZW5lcihFVkVOVF9OQU1FLkdBTUVfU1RBUlQsIHRoaXMuX2hhbmRsZUdhbWVTdGFydCk7XG5cbiAgICAgICAgdGhpcy5fYXBwLnJvb20uYWRkRXZlbnRMaXN0ZW5lcihFVkVOVF9OQU1FLkdBTUVfUkVTRVQsIHRoaXMuX2hhbmRsZUdhbWVSZXNldCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wQXJlYTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9yZW5kZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2J1dHRvblwiO1xuaW1wb3J0IHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi9yZW5kZXIvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9BcHAnO1xuXG50eXBlIGlfQnV0dG9uQ29udHJvbE9wdGlvbnMgPSBpX0Rpc3BsYXlPYmplY3RPcHRpb25zICYge1xuICAgIGFwcDogQXBwO1xufTtcblxuY2xhc3MgQnV0dG9uQ29udHJvbCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBfYXBwOiBBcHA7XG4gICAgcHJpdmF0ZSBfbGVmdEJ1dHRvbjogQnV0dG9uO1xuICAgIHByaXZhdGUgX3JpZ2h0QnV0dG9uOiBCdXR0b247XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0J1dHRvbkNvbnRyb2xPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2FwcCA9IG9wdGlvbnMuYXBwO1xuICAgICAgICBcbiAgICAgICAgbGV0IGJ1dHRvbldpZHRoID0gMTAwO1xuICAgICAgICBsZXQgYnV0dG9uSGVpZ2h0ID0gNDA7XG5cbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgICAgICAgdGV4dDogJ+W3puaMiemSricsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLndpZHRoIC8gMiAtIGJ1dHRvbldpZHRoIC0gNDAsXG4gICAgICAgICAgICB0b3A6ICh0aGlzLmhlaWdodCAtIGJ1dHRvbkhlaWdodCkgLyAyLFxuICAgICAgICAgICAgd2lkdGg6IGJ1dHRvbldpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gICAgICAgICAgICB0ZXh0OiAn5Y+z5oyJ6ZKuJyxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMud2lkdGggLyAyICsgNDAsXG4gICAgICAgICAgICB0b3A6ICh0aGlzLmhlaWdodCAtIGJ1dHRvbkhlaWdodCkgLyAyLFxuICAgICAgICAgICAgd2lkdGg6IGJ1dHRvbldpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5oaWRlKCk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmhpZGUoKTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2xlZnRCdXR0b24pO1xuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX3JpZ2h0QnV0dG9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vlhaXnrYnlvoXpmLbmrrVcbiAgICAgKi9cbiAgICBlbnRlclJlYWR5KGhhc1JlYWR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi50ZXh0ID0gJ+WHhuWkhyc7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hcHAucm9vbS5yZWFkeSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJSZWFkeSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi50ZXh0ID0gJ+WPlua2iOWHhuWkhyc7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20ucmVhZHkoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5lbnRlclJlYWR5KGZhbHNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLnNob3coKTtcblxuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5zaG93KCk7XG5cbiAgICAgICAgaWYgKGhhc1JlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmVuYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5lbmFibGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+WFpSDlj6vlnLDkuLsg6Zi25q61XG4gICAgICovXG4gICAgZW50ZXJBc2tMYW5kbG9yZCgpIHtcbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi50ZXh0ID0gJ+S4jeWPqyc7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hcHAucm9vbS5hc2tMYW5kbG9yZChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi50ZXh0ID0gJ+WPq+WcsOS4uyc7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20uYXNrTGFuZGxvcmQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmVuYWJsZSgpO1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLnNob3coKTtcblxuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5lbmFibGUoKTtcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+WFpSDmiqLlnLDkuLsg6Zi25q61XG4gICAgICovXG4gICAgZW50ZXJHcmFiTGFuZGxvcmQoKSB7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24udGV4dCA9ICfkuI3miqInO1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20uZ3JhYkxhbmRsb3JkKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24udGV4dCA9ICfmiqLlnLDkuLsnO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FwcC5yb29tLmdyYWJMYW5kbG9yZCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uZW5hYmxlKCk7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uc2hvdygpO1xuXG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmVuYWJsZSgpO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b5YWlIOWHuueJjCDpmLbmrrVcbiAgICAgKi9cbiAgICBlbnRlclB1a2VzKGlzTXVzdFNob3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi50ZXh0ID0gJ+S4jeWHuic7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hcHAucm9vbS5wdWtlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFsbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLnRleHQgPSAn5Ye654mMJztcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hcHAucm9vbS5wdWtlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWxsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5zaG93KCk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLnNob3coKTtcblxuICAgICAgICBpZiAoaXNNdXN0U2hvdCkge1xuICAgICAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWIneWni+WMlueahOaXtuWAme+8jOm7mOiupOaXoOazleWHuueJjFxuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+v5Lul5Ye654mMXG4gICAgICovXG4gICAgY2FuU2hvdFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5lbmFibGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuI3og73lh7rniYxcbiAgICAgKi9cbiAgICBjYW5Ob3RTaG90UHVrZXMoKSB7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpmpDol4/miYDmnInmjInpkq5cbiAgICAgKi9cbiAgICBoaWRlQWxsKCkge1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmhpZGUoKTtcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJgOacieaMiemSrumDveS4jeWPr+eUqFxuICAgICAqL1xuICAgIGRpc2FibGVBbGwoKSB7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29udHJvbDsiLCJpbXBvcnQgVGV4dCBmcm9tIFwiLi4vLi4vcmVuZGVyL1RleHRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL3JlbmRlci9Db250YWluZXJcIjtcbmltcG9ydCB7IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL0Rpc3BsYXlPYmplY3RcIjtcblxuZXhwb3J0IHR5cGUgaV9CdXR0b25PcHRpb25zID0gaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyAmIHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIGNhbGxiYWNrPzogRnVuY3Rpb247XG4gICAgdmFsaWQ/OiB7Y29sb3I/OiBzdHJpbmcsIGJnQ29sb3I/OiBzdHJpbmd9O1xuICAgIGludmFsaWQ/OiB7Y29sb3I/OiBzdHJpbmcsIGJnQ29sb3I/OiBzdHJpbmd9O1xuICAgIGF2YWlsYWJsZT86IGJvb2xlYW5cbn1cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJpdmF0ZSBfdmlzaWFibGU6IGJvb2xlYW47XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByaXZhdGUgX2NhbGxiYWNrOiBGdW5jdGlvbjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJpdmF0ZSBfdmFsaWQ6IHtjb2xvcjogc3RyaW5nLCBiZ0NvbG9yOiBzdHJpbmd9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcml2YXRlIF9pbnZhbGlkOiB7Y29sb3I6IHN0cmluZywgYmdDb2xvcjogc3RyaW5nfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJpdmF0ZSBfdGV4dE9iamVjdDogVGV4dDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJpdmF0ZSBfYXZhaWxhYmxlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICog5oyJ6ZKu5Y+v55So5oCB5ZKM5LiN5Y+v55So5oCB5aSE55CG5LiA5LiLXG4gICAgICogQHBhcmFtIG9wdGlvbnMgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2V0Q29uZmlnKG9wdGlvbnM6IGlfQnV0dG9uT3B0aW9ucykge1xuICAgICAgICAvLyDmnInmlYjnirbmgIHkuIvmoLflvI/lronmjpLkuIDkuItcbiAgICAgICAgaWYgKG9wdGlvbnMudmFsaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucy52YWxpZCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbGlkID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJnQ29sb3I6ICcjMDA5OUZGJ1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3ZhbGlkLCBvcHRpb25zLnZhbGlkKTtcblxuICAgICAgICAvLyDml6DmlYjnirbmgIHkuIvmoLflvI/lronmjpLkuIDkuItcbiAgICAgICAgaWYgKG9wdGlvbnMuaW52YWxpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zLmludmFsaWQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbnZhbGlkID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJnQ29sb3I6ICcjOTY5Njk2J1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2ludmFsaWQsIG9wdGlvbnMuaW52YWxpZCk7XG5cbiAgICAgICAgLy8g5Yid5aeL54q25oCB5piv5ZCm5Y+v55SoXG4gICAgICAgIGlmIChvcHRpb25zLmF2YWlsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57uZ5oyJ6ZKu5re75Yqg5paH5a2X57uE5Lu2XG4gICAgICogQHBhcmFtIHRleHQgXG4gICAgICovXG4gICAgX3NldFRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB0ZXh0T2JqZWN0ID0gbmV3IFRleHQoe1xuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgc2l6ZTogKHRoaXMuaGVpZ2h0IC8gMikgPj4gMCxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdGV4dE9iamVjdCA9IHRleHRPYmplY3Q7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGV4dE9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs55qE54K55Ye75LqL5Lu2XG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdG91Y2ggPSAoZGF0YToge3g6IG51bWJlciwgeTogbnVtYmVyfSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgeCwgeVxuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICBpZiAodGhpcy5fYXZhaWxhYmxlICYmIHRoaXMuY29udGFpbih4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IG9wdGlvbnNcbiAgICAgKiAgdGV4dCDmjInpkq7lhoXlrrlcbiAgICAgKiAgdmFsaWQg5Y+v55So54q25oCB5LiLXG4gICAgICogICAgICBjb2xvciDmloflrZfpopzoibJcbiAgICAgKiAgICAgIGJnQ29sb3Ig6IOM5pmv6ImyXG4gICAgICogIGludmFsaWQg5LiN5Y+v55So54q25oCB5LiLXG4gICAgICogICAgICBjb2xvciDmloflrZfpopzoibJcbiAgICAgKiAgICAgIGJnQ29sb3Ig6IOM5pmv6ImyXG4gICAgICogIGF2YWlsYWJsZSDmmK/lkKblj6/nlKhcbiAgICAgKiAgc3R5bGUg5qC35byPXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9CdXR0b25PcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX3Zpc2lhYmxlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX3RvdWNoKTtcblxuICAgICAgICB0aGlzLl9zZXRDb25maWcob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX3NldFRleHQob3B0aW9ucy50ZXh0IHx8ICcnKTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRPYmplY3QudGV4dDtcbiAgICB9XG5cbiAgICBzZXQgdGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdGV4dE9iamVjdC50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGUgPyB0aGlzLl92YWxpZC5jb2xvciA6IHRoaXMuX2ludmFsaWQuY29sb3I7XG4gICAgfVxuXG4gICAgZ2V0IGJnQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGUgPyB0aGlzLl92YWxpZC5iZ0NvbG9yIDogdGhpcy5faW52YWxpZC5iZ0NvbG9yO1xuICAgIH1cblxuICAgIGdldCBjYWxsYmFjaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrO1xuICAgIH1cblxuICAgIHNldCBjYWxsYmFjayhjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBlbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5fdmlzaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuX3Zpc2lhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlzaWFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmdDb2xvcjtcbiAgICAgICAgY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIHN1cGVyLnJlbmRlcihjdHgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9yZW5kZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9EaXNwbGF5T2JqZWN0XCI7XG5pbXBvcnQgRGVza3RvcFB1a2VzIGZyb20gXCIuL0Rlc2t0b3BQdWtlc1wiO1xuaW1wb3J0IERlc2t0b3BUZXh0IGZyb20gXCIuL0Rlc2t0b3BUZXh0XCI7XG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2UgZnJvbSBcIi4uLy4uL3JlbmRlci9SZXNvdXJjZU1hbmFnZVwiO1xuXG5jbGFzcyBEZXNrdG9wIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIF9kZXNrdG9wUHVrZXMhOiBEZXNrdG9wUHVrZXM7XG4gICAgcHJpdmF0ZSBfZGVza3RvcFRleHQhOiBEZXNrdG9wVGV4dDtcblxuICAgIHByaXZhdGUgX2luaXREZXNrdG9wUHVrZXMoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlcyA9IG5ldyBEZXNrdG9wUHVrZXMoe1xuICAgICAgICAgICAgcHVrZVdpZHRoOiA0MCxcbiAgICAgICAgICAgIGludGVydmFsOiAzMCxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fZGVza3RvcFB1a2VzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0RGVza3RvcFRleHQoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0ID0gbmV3IERlc2t0b3BUZXh0KHtcbiAgICAgICAgICAgIHRvcDogKHRoaXMuaGVpZ2h0IC0gNjApIC8gMixcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLndpZHRoIC0gMTIwKSAvIDIsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGltYWdlOiBSZXNvdXJjZU1hbmFnZS5nZXQoJ1JFQURZJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0LmhpZGUoKTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2Rlc2t0b3BUZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0Rpc3BsYXlPYmplY3RPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2luaXREZXNrdG9wUHVrZXMoKTtcbiAgICAgICAgdGhpcy5faW5pdERlc2t0b3BUZXh0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN572uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0LmhpZGUoKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzLmhpZGUoKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzLmRlbGV0ZUFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHhuWkh1xuICAgICAqL1xuICAgIHJlYWR5KGlzUmVhZHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcFRleHQucmVhZHkoaXNSZWFkeSk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0LnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj6vlnLDkuLtcbiAgICAgKiBAcGFyYW0gaXNBc2sgXG4gICAgICovXG4gICAgYXNrTGFuZGxvcmQoaXNBc2s6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcFRleHQuYXNrTGFuZGxvcmQoaXNBc2spO1xuICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dC5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oqi5Zyw5Li7XG4gICAgICogQHBhcmFtIGlzR3JhYiBcbiAgICAgKi9cbiAgICBncmFiTGFuZGxvcmQoaXNHcmFiOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0LmdyYWJMYW5kbG9yZChpc0dyYWIpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dC5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Ye654mMXG4gICAgICogQHBhcmFtIHB1a2VzIFxuICAgICAqL1xuICAgIHNob3RQdWtlcyhwdWtlczogc3RyaW5nW10pIHtcbiAgICAgICAgaWYgKHB1a2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZGVza3RvcFRleHQubm9TaG90KCk7XG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wUHVrZXMucG9zdFB1a2VzKHB1a2VzKTtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wOyIsImltcG9ydCBCYXNlUHVrZXNDb250YWluZXIsIHsgaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zIH0gZnJvbSBcIi4uL3B1a2VzL0Jhc2VQdWtlc0NvbnRhaW5lclwiO1xuXG5jbGFzcyBEZXNrdG9wUHVrZXMgZXh0ZW5kcyBCYXNlUHVrZXNDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfQmFzZVB1a2VzQ29udGFpbmVyT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wUHVrZXM7IiwiaW1wb3J0IEJpdG1hcCwgeyBpX0JpdG1hcE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL0JpdG1hcFwiO1xuaW1wb3J0IFJlc291cmNlTWFuYWdlIGZyb20gXCIuLi8uLi9yZW5kZXIvUmVzb3VyY2VNYW5hZ2VcIjtcblxuY2xhc3MgRGVza3RvcFRleHQgZXh0ZW5kcyBCaXRtYXAge1xuICAgIHByaXZhdGUgX2NoYW5nZShrZXk6IHN0cmluZyB8IG51bGwpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbWFnZSA9IFJlc291cmNlTWFuYWdlLmdldChrZXkpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0JpdG1hcE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmVhZHkoaXNSZWFkeTogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlKCdSRUFEWScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXNrTGFuZGxvcmQoaXNBc2s6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzQXNrKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2UoJ0FTSycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlKCdOT19BU0snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdyYWJMYW5kbG9yZChpc0dyYWI6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzR3JhYikge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlKCdHUkFCJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2UoJ05PX0dSQUInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vU2hvdCgpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlKCdOT19TSE9UJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcFRleHQ7IiwiaW1wb3J0IHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi9yZW5kZXIvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vcmVuZGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uLy4uL3JlbmRlci9UZXh0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9BcHBcIjtcblxuY2xhc3MgT3Zlck1vZGFsIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIF9hcHA6IEFwcDtcbiAgICAvLyDlsZXnpLrnmoTojrfog5zogIXlkI3np7BcbiAgICBwcml2YXRlIF90ZXh0ITogVGV4dDtcbiAgICAvLyDnoa7lrprnmoTmjInpkq5cbiAgICBwcml2YXRlIF9idXR0b24hOiBCdXR0b247XG5cbiAgICBwcml2YXRlIF9pbml0VGV4dCgpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IG5ldyBUZXh0KHtcbiAgICAgICAgICAgIHRleHQ6ICfojrfog5zogIU6ICcsXG4gICAgICAgICAgICBzaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICB3aWR0aDogMTQwLFxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHRvcDogMjAsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5fd2lkdGggLSAxNDApIC8gMlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX3RleHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgICAgICAgdGV4dDogJ+ehruWumicsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcC5yb29tLmNvbmZpcm1SZXN1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICB3aWR0aDogNjAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgdG9wOiA3MCxcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLl93aWR0aCAtIDYwKSAvIDJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9idXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBvcHRpb25zOiBpX0Rpc3BsYXlPYmplY3RPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2FwcCA9IGFwcDtcblxuICAgICAgICB0aGlzLl9pbml0VGV4dCgpO1xuXG4gICAgICAgIHRoaXMuX2luaXRCdXR0b24oKTtcbiAgICB9XG5cbiAgICBzaG93KHVpZD86IHN0cmluZykge1xuICAgICAgICB0aGlzLl90ZXh0LnRleHQgPSBg6I636IOc6ICFOiAke3VpZH1gO1xuXG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kaXNwbGF5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAuNyknO1xuICAgICAgICBjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICAgICAgc3VwZXIucmVuZGVyKGN0eCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3Zlck1vZGFsOyIsImltcG9ydCBCaXRtYXAsIHsgaV9CaXRtYXBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9CaXRtYXBcIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi4vLi4vcmVuZGVyL1Jlc291cmNlTWFuYWdlXCI7XG5cblxuLyoqXG4gKiDnjqnlrrblpLTlg49cbiAqL1xuY2xhc3MgQXZhdGFyIGV4dGVuZHMgQml0bWFwIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0JpdG1hcE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgYmVMYW5kbG9yZCgpIHtcbiAgICAgICAgdGhpcy5faW1hZ2UgPSBSZXNvdXJjZU1hbmFnZS5nZXQoJ0xBTkRMT1JEJyk7XG4gICAgfVxuXG4gICAgYmVOb3JtYWwoKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlID0gUmVzb3VyY2VNYW5hZ2UuZ2V0KCdBVkFUQVInKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iLCJpbXBvcnQgVGV4dCwgeyBpX1RleHRPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9UZXh0XCI7XG5cbmNsYXNzIE5hbWUgZXh0ZW5kcyBUZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX1RleHRPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWU7IiwiaW1wb3J0IEJpdG1hcCwgeyBpX0JpdG1hcE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL0JpdG1hcFwiO1xuXG5leHBvcnQgdHlwZSBpX0Jhc2VQdWtlT3B0aW9ucyA9IGlfQml0bWFwT3B0aW9ucyAmIHtcbiAgICBjaG9vc2U/OiBib29sZWFuLFxuICAgIGlkOiBzdHJpbmc7XG59XG5cbmNsYXNzIEJhc2VQdWtlIGV4dGVuZHMgQml0bWFwIHtcbiAgICAvLyDmmK/lkKbpgInkuK1cbiAgICBwcml2YXRlIF9jaG9vc2U6IGJvb2xlYW47XG4gICAgLy8gaWRcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfQmFzZVB1a2VPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2lkID0gb3B0aW9ucy5pZDtcblxuICAgICAgICAvLyDpu5jorqTmsqHmnInpgInkuK1cbiAgICAgICAgdGhpcy5fY2hvb3NlID0gb3B0aW9ucy5jaG9vc2UgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGNob29zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nob29zZTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgInkuK1cbiAgICAgKi9cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNob29zZSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZKCgodGhpcy5oZWlnaHQgKiAwLjE1KSA+PiAwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkoLSgodGhpcy5oZWlnaHQgKiAwLjE1KSA+PiAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jaG9vc2UgPSAhdGhpcy5fY2hvb3NlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVB1a2U7IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vcmVuZGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi9yZW5kZXIvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IEJhc2VQdWtlIGZyb20gXCIuL0Jhc2VQdWtlXCI7XG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2UgZnJvbSBcIi4uLy4uL3JlbmRlci9SZXNvdXJjZU1hbmFnZVwiO1xuXG5leHBvcnQgdHlwZSBpX0Jhc2VQdWtlc0NvbnRhaW5lck9wdGlvbnMgPSBpX0Rpc3BsYXlPYmplY3RPcHRpb25zICYge1xuICAgIHB1a2VXaWR0aDogbnVtYmVyLFxuXG4gICAgaW50ZXJ2YWw/OiBudW1iZXIsXG4gICAgdmVydGljYWxBbGlnbj86IFBVS0VfVkVSVElDQUxfQUxJR04sXG4gICAgaG9yaXpvbnRhbEFsaWduPzogUFVLRV9IT1JJWk9OVEFMX0FMSUdOLFxufTtcblxuZW51bSBQVUtFX0hPUklaT05UQUxfQUxJR04ge1xuICAgIExFRlQsXG4gICAgQ0VOVEVSLFxuICAgIFJJR0hUXG59O1xuXG5lbnVtIFBVS0VfVkVSVElDQUxfQUxJR04ge1xuICAgIFRPUCxcbiAgICBNSURETEUsXG4gICAgQk9UVE9NXG59O1xuXG5jbGFzcyBCYXNlUHVrZXNDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIC8vIOaJkeWFi+eJjOWuveW6plxuICAgIHByb3RlY3RlZCBfcHVrZVdpZHRoOiBudW1iZXI7XG4gICAgLy8g5omR5YWL54mM6auY5bqmXG4gICAgcHJvdGVjdGVkIF9wdWtlSGVpZ2h0OiBudW1iZXI7XG4gICAgLy8g5omR5YWL54mM5rC05bmz5a+56b2Q5pa55byPXG4gICAgcHJvdGVjdGVkIF9ob3Jpem9udGFsQWxpZ246IFBVS0VfSE9SSVpPTlRBTF9BTElHTjtcbiAgICAvLyDmiZHlhYvniYzlnoLnm7Tlr7npvZDmlrnlvI9cbiAgICBwcm90ZWN0ZWQgX3ZlcnRpY2FsQWxpZ246IFBVS0VfVkVSVElDQUxfQUxJR047XG4gICAgLy8g5omR5YWL54mM5LmL6Ze05Lik5Lik55qE6KaG55uW5aSn5bCPXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWw6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIOenu+mZpOafkOW8oOaJkeWFi+eJjFxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZGVsZXRlUHVrZShvYmplY3Q6IEJhc2VQdWtlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4ob2JqZWN0KTtcblxuICAgICAgICB0aGlzLl91cGRhdGVQdWtlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOWFpeWNleW8oOaJkeWFi+eJjFxuICAgICAqIEBwYXJhbSB7Kn0gcHVrZSBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3Bvc3RQdWtlKHB1a2U6IEJhc2VQdWtlLCB6SW5kZXg/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbihwdWtlLCB6SW5kZXgpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVB1a2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Kem5Y+R5pu05paw57u05oqk55qE5omR5YWL54mM55qE5L2N572uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF91cGRhdGVQdWtlcygpIHtcbiAgICAgICAgLy8g6I635Y+W5omL5LiK5omR5YWL5oC75pWwXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuoeeul+WHuuadpei/measoeaJi+S4iuaJkeWFi+eJjOacgOWkp+WuveW6plxuICAgICAgICBsZXQgbWF4V2lkdGggPSB0aGlzLl9wdWtlV2lkdGggKyAodGhpcy5fcHVrZVdpZHRoIC0gdGhpcy5faW50ZXJ2YWwpICogKGxlbiAtIDEpO1xuXG4gICAgICAgIC8vIOi1t+Wni+eCuXjvvIx5XG4gICAgICAgIGxldCB4O1xuICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFydCA9IGxlbjtcbiAgICAgICAgLy8g5aaC5p6c5pyA5aSn5a695bqm6LaF5LqG77yM5oSP5ZGz552A6ZyA6KaB5pyJ5aSa6KGMXG4gICAgICAgIGlmIChtYXhXaWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIC8vIOavj+ihjOeahOaJkeWFi+eJjOaVsOmHj1xuICAgICAgICAgICAgcGFydCA9ICh0aGlzLndpZHRoIC8gbWF4V2lkdGggKiBsZW4pID4+IDA7XG4gICAgICAgICAgICAvLyDpgqPkuYh45b+F54S25LuOMOW8gOWni+S6hlxuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDorqHnrpd455qE5L2N572uXG4gICAgICAgICAgICB4ID0gKHRoaXMud2lkdGggLSBtYXhXaWR0aCkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHB1a2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHB1a2UgPSB0aGlzLl9jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgLy8g6K6+572u5omR5YWL54mM55qE5L2N572uXG4gICAgICAgICAgICBwdWtlLnNldFBvc2l0aW9uKHgsIHkgKyAoKGkgLyBwYXJ0KSA+PiAwKSAqIHRoaXMuX3B1a2VIZWlnaHQgLyAzKTtcblxuICAgICAgICAgICAgeCArPSAodGhpcy5fcHVrZVdpZHRoIC0gdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgICAgaWYgKHggPiB0aGlzLndpZHRoIC0gdGhpcy5fcHVrZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0Jhc2VQdWtlc0NvbnRhaW5lck9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgLy8g5a655Zmo5Lit5YyF5ZCr55qE5omR5YWL54mM5a6J5o6S5LiA5LiLXG4gICAgICAgIHRoaXMuX3B1a2VXaWR0aCA9IG9wdGlvbnMucHVrZVdpZHRoO1xuICAgICAgICB0aGlzLl9wdWtlSGVpZ2h0ID0gKHRoaXMuX3B1a2VXaWR0aCAvIDEwNSAqIDE1MCkgPj4gMDtcblxuICAgICAgICBpZiAob3B0aW9ucy5pbnRlcnZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG9wdGlvbnMuaW50ZXJ2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHRoaXMuX3B1a2VXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWvuem9kOWuieaOkuS4gOS4i1xuICAgICAgICB0aGlzLl9ob3Jpem9udGFsQWxpZ24gPSBvcHRpb25zLmhvcml6b250YWxBbGlnbiB8fCBQVUtFX0hPUklaT05UQUxfQUxJR04uTEVGVFxuICAgICAgICB0aGlzLl92ZXJ0aWNhbEFsaWduID0gb3B0aW9ucy52ZXJ0aWNhbEFsaWduIHx8IFBVS0VfVkVSVElDQUxfQUxJR04uVE9QO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOmDqOWIhuaJkeWFi+eJjFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHB1a2VzXG4gICAgICovXG4gICAgZGVsZXRlUHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgICg8QmFzZVB1a2VbXT50aGlzLl9jaGlsZHJlbikuZm9yRWFjaCgocHVrZTogQmFzZVB1a2UpID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHB1a2VzLmluZGV4T2YocHVrZS5pZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGV0ZVB1a2UocHVrZSk7XG4gICAgICAgICAgICAgICAgcHVrZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5re75Yqg6YOo5YiG5omR5YWL54mMXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gcHVrZXNcbiAgICAgKi9cbiAgICBwb3N0UHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHB1a2VzLmZvckVhY2goKHB1a2VTdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGxldCBwdWtlID0gbmV3IEJhc2VQdWtlKHtcbiAgICAgICAgICAgICAgICBpbWFnZTogUmVzb3VyY2VNYW5hZ2UuZ2V0KGBQVUtFXyR7cHVrZVN0cmluZ31gKSxcbiAgICAgICAgICAgICAgICBpZDogcHVrZVN0cmluZyxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fcHVrZVdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5fcHVrZUhlaWdodCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RQdWtlKHB1a2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTmiYDmnInniYxcbiAgICAgKi9cbiAgICBkZWxldGVBbGwoKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZVB1a2VzQ29udGFpbmVyOyIsImltcG9ydCBCYXNlUHVrZXNDb250YWluZXIsIHsgaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zIH0gZnJvbSBcIi4vQmFzZVB1a2VzQ29udGFpbmVyXCI7XG5pbXBvcnQgQmFzZVB1a2UgZnJvbSBcIi4vQmFzZVB1a2VcIjtcbmltcG9ydCB7IGRlYm91bmNlLCBjb21wYXJlUHVrZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0FwcFwiO1xuaW1wb3J0IFJlc291cmNlTWFuYWdlIGZyb20gXCIuLi8uLi9yZW5kZXIvUmVzb3VyY2VNYW5hZ2VcIjtcblxuY2xhc3MgTWFpbkhhbmRQdWtlcyBleHRlbmRzIEJhc2VQdWtlc0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBfYXBwOiBBcHA7XG5cbiAgICBwcml2YXRlIF90b3VjaFNldDogU2V0PEJhc2VQdWtlPiA9IG5ldyBTZXQoKTtcblxuICAgIC8qKlxuICAgICAqIHRvdWNoc3RhcnTvvIx0b3VjaG1vdmXnmoTml7blgJnop6blj5FcbiAgICAgKi9cbiAgICBwcml2YXRlIF90b3VjaCA9IChkYXRhOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHgsIHlcbiAgICAgICAgfSA9IGRhdGE7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgdGVtcDogQmFzZVB1a2U7XG4gICAgICAgIGxldCBwdWtlOiBCYXNlUHVrZSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdGVtcCA9IDxCYXNlUHVrZT50aGlzLl9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICh0ZW1wLmNvbnRhaW4oeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBwdWtlID0gdGVtcDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwdWtlKSB7XG4gICAgICAgICAgICB0aGlzLl9jaG9vc2VQdWtlKHB1a2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG91Y2hlbmTnmoTml7blgJnop6blj5FcbiAgICAgKi9cbiAgICBwcml2YXRlIF90b3VjaEVuZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fdG91Y2hTZXQuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaG9vc2VQdWtlKHB1a2U6IEJhc2VQdWtlKSB7XG4gICAgICAgIGlmICh0aGlzLl90b3VjaFNldC5oYXMocHVrZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RvdWNoU2V0LmFkZChwdWtlKTtcbiAgICAgICAgcHVrZS5zZWxlY3QoKTtcblxuICAgICAgICB0aGlzLnB1a2VzQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5om+5Yiw5bCG6KaB5re75Yqg55qEcHVrZeeahOWxgue6p++8jOaOkuW6j+aPkuWFpeaXtuS9v+eUqFxuICAgICAqIEBwYXJhbSBwdWtlQSBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maW5kUHVrZUluZGV4KHB1a2VBOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHB1a2VCOiBzdHJpbmc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHVrZUIgPSAoPEJhc2VQdWtlPnRoaXMuX2NoaWxkcmVuW2ldKS5pZDtcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmVQdWtlcyhbcHVrZUFdLCBbcHVrZUJdKSA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omL54mM77yM5pyJ5Yqo55S7XG4gICAgICogQHBhcmFtIHB1a2VzIFxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRQdWtlcyA9IChwdWtlczogc3RyaW5nW10pID0+IHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdGltZSA9IDIwMDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFB1a2UoKSB7XG4gICAgICAgICAgICBpZiAocHVrZXNbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5wb3N0UHVrZXMoW3B1a2VzW2ldXSk7XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgc2V0VGltZW91dChnZXRQdWtlLCB0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFB1a2UoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2FwcCA9IGFwcDtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl90b3VjaCk7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl90b3VjaCk7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX3RvdWNoRW5kKTtcblxuICAgICAgICB0aGlzLnB1a2VzQ2hhbmdlID0gZGVib3VuY2UodGhpcy5wdWtlc0NoYW5nZSwgMTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAieS4remDqOWIhuaJkeWFi+eJjFxuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBjaG9vc2VQdWtlcyhwdWtlczogc3RyaW5nW10pIHtcbiAgICAgICAgbGV0IGlkO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlkID0gKDxCYXNlUHVrZT50aGlzLl9jaGlsZHJlbltpXSkuaWQ7XG5cbiAgICAgICAgICAgIGlmIChwdWtlcy5pbmRleE9mKGlkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8g6ZyA6KaB6YCJ5LitXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hvb3NlUHVrZSg8QmFzZVB1a2U+dGhpcy5fY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W55So5oi36YCJ5Lit55qE5omR5YWL54mMXG4gICAgICovXG4gICAgZ2V0Q2hvb3NlUHVrZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHRlbXA6IEJhc2VQdWtlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdGVtcCA9IDxCYXNlUHVrZT50aGlzLl9jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgaWYgKHRlbXAuY2hvb3NlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGVtcC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhumAieS4reeahOeJjOWHuuaOiVxuICAgICAqL1xuICAgIHNob3RDaG9vc2VQdWtlcygpIHtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCB0ZW1wOiBCYXNlUHVrZTtcblxuICAgICAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdGVtcCA9IDxCYXNlUHVrZT50aGlzLl9jaGlsZHJlbltpXTtcblxuICAgICAgICAgICAgaWYgKHRlbXAuY2hvb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsZXRlUHVrZSh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIOa3u+WKoOmDqOWIhuaJkeWFi+eJjFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHB1a2VzXG4gICAgICovXG4gICAgcG9zdFB1a2VzKHB1a2VzOiBzdHJpbmdbXSwgcmVvcmRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHB1a2VzLmZvckVhY2goKHB1a2VTdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGxldCBwdWtlID0gbmV3IEJhc2VQdWtlKHtcbiAgICAgICAgICAgICAgICBpbWFnZTogUmVzb3VyY2VNYW5hZ2UuZ2V0KGBQVUtFXyR7cHVrZVN0cmluZ31gKSxcbiAgICAgICAgICAgICAgICBpZDogcHVrZVN0cmluZyxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fcHVrZVdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5fcHVrZUhlaWdodCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZW9yZGVyKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9maW5kUHVrZUluZGV4KHB1a2VTdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wb3N0UHVrZShwdWtlLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJi+eJjOS4remAieS4reeahOeJjOWPkeeUn+WPmOWMluaXtuinpuWPkVxuICAgICAqL1xuICAgIHB1a2VzQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nob29zZVB1a2VzQ2hhbmdlJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkhhbmRQdWtlczsiLCJpbXBvcnQgeyBpX0Jhc2VQdWtlc0NvbnRhaW5lck9wdGlvbnMgfSBmcm9tIFwiLi9CYXNlUHVrZXNDb250YWluZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi8uLi9yZW5kZXIvVGV4dFwiO1xuaW1wb3J0IEJhc2VQdWtlIGZyb20gXCIuL0Jhc2VQdWtlXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9yZW5kZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9BcHBcIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi4vLi4vcmVuZGVyL1Jlc291cmNlTWFuYWdlXCI7XG5cbmNsYXNzIFNpZGVIYW5kUHVrZXMgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByaXZhdGUgX2FwcDogQXBwO1xuXG4gICAgcHJpdmF0ZSBfYmFja1B1a2UhOiBCYXNlUHVrZTtcbiAgICBwcml2YXRlIF9wdWtlc0NvdW50ITogVGV4dDtcbiAgICBwcml2YXRlIF9yZW1haW5pbmdQdWtlczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9wdWtlV2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9wdWtlSGVpZ2h0OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9hZGRCYWNrUHVrZXMoKSB7XG4gICAgICAgIGxldCBwdWtlVXJsO1xuXG4gICAgICAgIHB1a2VVcmwgPSAnYmFjayc7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5fYmFja1B1a2UgPSBuZXcgQmFzZVB1a2Uoe1xuICAgICAgICAgICAgaW1hZ2U6IFJlc291cmNlTWFuYWdlLmdldChgQkFDS2ApLFxuICAgICAgICAgICAgaWQ6IHB1a2VVcmwsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fcHVrZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9wdWtlSGVpZ2h0LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9iYWNrUHVrZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkUHVrZXNDb3VudCgpIHtcbiAgICAgICAgdGhpcy5fcHVrZXNDb3VudCA9IG5ldyBUZXh0KHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9wdWtlV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX3B1a2VIZWlnaHQsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgdGV4dDogU3RyaW5nKHRoaXMuX3JlbWFpbmluZ1B1a2VzKSxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgc2l6ZTogMTZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9wdWtlc0NvdW50KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2FwcCA9IGFwcDtcblxuICAgICAgICB0aGlzLl9wdWtlV2lkdGggPSAob3B0aW9ucy53aWR0aCAvIDEpID4+IDA7XG4gICAgICAgIHRoaXMuX3B1a2VIZWlnaHQgPSAodGhpcy5fcHVrZVdpZHRoIC8gMTA1ICogMTUwKSA+PiAwO1xuXG4gICAgICAgIHRoaXMuX2FkZEJhY2tQdWtlcygpO1xuICAgICAgICB0aGlzLl9hZGRQdWtlc0NvdW50KCk7XG5cbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHuueJjFxuICAgICAqIEBwYXJhbSBhbW91bnQgXG4gICAgICovXG4gICAgc2hvdFB1a2VzKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ1B1a2VzIC09IGFtb3VudDtcblxuICAgICAgICB0aGlzLl9wdWtlc0NvdW50LnRleHQgPSBTdHJpbmcodGhpcy5fcmVtYWluaW5nUHVrZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOmDqOWIhuaJkeWFi+eJjFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHB1a2VzXG4gICAgICovXG4gICAgcG9zdFB1a2VzKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZ1B1a2VzICs9IGFtb3VudDtcblxuICAgICAgICB0aGlzLl9wdWtlc0NvdW50LnRleHQgPSBTdHJpbmcodGhpcy5fcmVtYWluaW5nUHVrZXMpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmdQdWtlcyA9IDA7XG5cbiAgICAgICAgdGhpcy5fcHVrZXNDb3VudC50ZXh0ID0gU3RyaW5nKHRoaXMuX3JlbWFpbmluZ1B1a2VzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlSGFuZFB1a2VzOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hhbGwuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hhbGwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IYWxsLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBBcHAgZnJvbSBcIi4uL0FwcFwiO1xuaW1wb3J0IHsgUkVUX1NVQ0NFU1MgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuaW1wb3J0ICcuL0hhbGwuY3NzJztcblxuaW50ZXJmYWNlIGlfSGFsbE9wdGlvbnMge1xuICAgIGFwcDogQXBwO1xufVxuXG5jbGFzcyBIYWxsIHtcbiAgICBwcml2YXRlIF9hcHA6IEFwcDtcbiAgICAvLyDmmK/lkKbliJ3lp4vljJbov4fvvIzor6Xnu4Tku7blj6rkvJrliJ3lp4vljJbkuIDmrKFcbiAgICBwcml2YXRlIF9pbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyDlpKfljoXnmoRkb23lrrnlmahcbiAgICBwcml2YXRlIF9ib3ghOiBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyDliJvlu7rmiL/pl7TnmoTmjInpkq5cbiAgICBwcml2YXRlIF9jcmVhdGVCdXR0b24hOiBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyDovpPlhaXmiL/pl7Tlj7fnmoTovpPlhaXmoYZcbiAgICBwcml2YXRlIF9yb29tSWRJbnB1dCE6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgLy8g5Yqg5YWl5oi/6Ze055qE5oyJ6ZKuXG4gICAgcHJpdmF0ZSBfZW50ZXJCdXR0b24hOiBIVE1MRGl2RWxlbWVudDtcblxuXG4gICAgcHJpdmF0ZSBfc2hvdygpIHtcblxuICAgICAgICBpZiAodGhpcy5faW5pdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9ib3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0VUkoKTtcblxuICAgICAgICAgICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRVSSgpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnaGFsbC1jcmVhdGUtYnV0dG9uJztcbiAgICAgICAgdGhpcy5fY3JlYXRlQnV0dG9uLmlubmVyVGV4dCA9ICfliJvlu7rmiL/pl7QnO1xuICAgICAgICB0aGlzLl9jcmVhdGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUm9vbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcm9vbUlkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLl9yb29tSWRJbnB1dC5jbGFzc05hbWUgPSAnaGFsbC1yaWQtaW5wdXQnO1xuXG4gICAgICAgIHRoaXMuX2VudGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX2VudGVyQnV0dG9uLmNsYXNzTmFtZSA9ICdoYWxsLWVudGVyLWJ1dHRvbic7XG4gICAgICAgIHRoaXMuX2VudGVyQnV0dG9uLmlubmVyVGV4dCA9ICfliqDlhaXmiL/pl7QnO1xuICAgICAgICB0aGlzLl9lbnRlckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbnRlclJvb20odGhpcy5fcm9vbUlkSW5wdXQudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX2JveC5jbGFzc05hbWUgPSAnaGFsbC1ib3gnO1xuXG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVCdXR0b24pO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fcm9vbUlkSW5wdXQpO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fZW50ZXJCdXR0b24pO1xuXG4gICAgICAgIHRoaXMuX2FwcC5yb290LmFwcGVuZENoaWxkKHRoaXMuX2JveCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfY3JlYXRlUm9vbSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgcm91dGU6ICdIYWxsLkNyZWF0ZVJvb20nLFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJldGNvZGUgPT09IFJFVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliJvlu7rmiL/pl7TmiJDlip8nLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5Yib5bu65oi/6Ze05aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2VudGVyUm9vbShyaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsubm90aWZ5KHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJ0hhbGwuRW50ZXJSb29tJyxcbiAgICAgICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgICAgIHJpZDogcmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJldGNvZGUgPT09IFJFVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov5vlhaXmiL/pl7TmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+i/m+WFpeaIv+mXtOWksei0pScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0hhbGxPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2FwcCA9IG9wdGlvbnMuYXBwO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfov5vlhaXlpKfljoUnKTtcblxuICAgICAgICB0aGlzLl9zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+emu+W8gOWkp+WOhScpO1xuXG4gICAgICAgIHRoaXMuX2hpZGUoKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSb29tKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5fY3JlYXRlUm9vbSgpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5lbnRlclJvb20ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyBlbnRlclJvb20ocmlkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gYXdhaXQgdGhpcy5fZW50ZXJSb29tKHJpZCk7XG5cbiAgICAgICAgcmVzdWx0LnJvb21JZCA9IHJpZDtcbiAgICAgICAgdGhpcy5fYXBwLmVudGVyUm9vbShyZXN1bHQpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhhbGw7IiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgJy4vcmVuZGVyL3BvbHlmaWxsJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlci9Vc2VyJztcblxuXG4oPGFueT53aW5kb3cpLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoe1xuICAgICAgICByb290OiA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKVxuICAgIH0pO1xuXG4gICAgKDxhbnk+d2luZG93KS5hcHAgPSBhcHA7XG59O1xuXG4oPGFueT53aW5kb3cpLnN0YXJ0VGVzdCA9IGZ1bmN0aW9uKGFwcDogQXBwKSB7XG4gICAgYXBwLmRlYnVnZ2VyID0gdHJ1ZTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBhcHAuX3VzZXIgPSBuZXcgVXNlcih7XG4gICAgICAgIHVpZDogJ2EnLFxuICAgICAgICBuYW1lOiAnYSdcbiAgICB9KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBhcHAuX2JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFwcC5lbnRlckhhbGwoKTtcbiAgICBhcHAuZW50ZXJSb29tKHtcbiAgICAgICAgcm9vbUlkOiAnMTIzJyxcbiAgICAgICAgcGxheWVyczoge1xuICAgICAgICAgICAgJ2EnOiB7XG4gICAgICAgICAgICAgICAgcGxheWVyTmFtZTogJ2EnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdiJzoge1xuICAgICAgICAgICAgICAgIHBsYXllck5hbWU6ICdiJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnYyc6IHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lOiAnYycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBhcHAucm9vbS5fZW50ZXJBc2tMYW5kbG9yZCh7XG4gICAgICAgIGFza1BsYXllcjogJ2EnLFxuICAgICAgICBwdWtlczogW1wiMS0yOVwiLCBcIjQtMjlcIiwgXCI0LTIyXCIsIFwiMi0zMVwiLCBcIjEtMjRcIiwgXCIyLTI1XCIsIFwiMi0yMVwiLCBcIjMtMjZcIiwgXCIzLTE5XCIsIFwiMS0yMVwiLCBcIjMtMzBcIiwgXCIzLTMxXCIsIFwiMy0yMVwiLCBcIjQtMjZcIiwgXCIyLTMwXCIsIFwiMS0zMFwiLCBcIjEtMjdcIl1cbiAgICB9KTtcblxuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvLyAgICAgYXBwLnJvb20uX2dhbWVTdGFydCh7XG4gICAgLy8gICAgICAgICBsYW5kbG9yZFBsYXllcjogJ2EnLFxuICAgIC8vICAgICAgICAgbGFuZGxvcmRQdWtlczogW1wiMS0yOVwiLCBcIjQtMjlcIiwgXCI0LTIyXCJdXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0sIDMwMDApO1xuXG4gICAgKDxhbnk+d2luZG93KS5zb21lb25lUHVrZXMgPSBmdW5jdGlvbih1c2VyOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBhcHAucm9vbS5fcGxheWVyUHVrZXMoe1xuICAgICAgICAgICAgcGxheWVyOiB1c2VyLFxuICAgICAgICAgICAgcHVrZXM6IFsnMS0yOScsICc0LTI5JywgJzEtMjknLCAnNC0yOScsICcxLTI5JywgJzQtMjknLCAnMS0yOScsICc0LTI5J11cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuIiwiaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vcmVuZGVyL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5pbnRlcmZhY2UgaV9OZXR3b3JrT3B0aW9ucyB7XG4gICAgaG9zdDogc3RyaW5nO1xuICAgIHBvcnQ/OiBudW1iZXI7XG4gICAgdXNlU2VjdXJpdHk/OiBib29sZWFuXG59XG5cbmVudW0gTkVUV09SS19TVEFUVVMge1xuICAgIFVOT1BFTixcbiAgICBPUEVOSU5HLFxuICAgIE9QRU5FRFxufTtcblxuY2xhc3MgTmV0d29yayBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgcHJpdmF0ZSBfaG9zdDogc3RyaW5nO1xuICAgIHByaXZhdGUgX3BvcnQ6IG51bWJlcnxudWxsO1xuICAgIHByaXZhdGUgX3VzZVNlY3VyaXR5OiBib29sZWFuO1xuICAgIHByaXZhdGUgX2NhbGxiYWNrSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfY2FsbGJhY2tzOiBGdW5jdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBORVRXT1JLX1NUQVRVUztcbiAgICBwcml2YXRlIF93cz86IFdlYlNvY2tldDtcblxuICAgIHByaXZhdGUgX3Byb2Nlc3NNZXNzYWdlKG1zZzogYW55KSB7XG4gICAgICAgIC8vIHJlc3BvbnNl5raI5oGvXG4gICAgICAgIGlmIChtc2cuaWQpIHtcbiAgICAgICAgICAgIGxldCBjYiA9IHRoaXMuX2NhbGxiYWNrc1ttc2cuaWRdO1xuXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW21zZy5pZF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb24gZm9yIHJlcXVlc3Q6ICcsIG1zZy5pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYihtc2cuYm9keSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOacjeWKoeWZqOaOqOmAgea2iOaBr1xuICAgICAgICBsZXQgcm91dGUgPSBtc2cucm91dGU7XG5cbiAgICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignbm8gcm91dGUgaW4gbWVzc2FnZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHJvdXRlLCBtc2cuZGF0YSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJvY2Vzc01lc3NhZ2VCYXRjaChtc2c6IGFueSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc01lc3NhZ2UobXNnW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfTmV0d29ya09wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9ob3N0ID0gb3B0aW9ucy5ob3N0O1xuICAgICAgICB0aGlzLl9wb3J0ID0gb3B0aW9ucy5wb3J0IHx8IG51bGw7XG4gICAgICAgIHRoaXMuX3VzZVNlY3VyaXR5ID0gb3B0aW9ucy51c2VTZWN1cml0eSB8fCBmYWxzZTtcblxuICAgICAgICB0aGlzLl9zdGF0dXMgPSBORVRXT1JLX1NUQVRVUy5VTk9QRU47XG4gICAgfVxuXG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuX3VzZVNlY3VyaXR5Pyd3c3MnOid3cyd9Oi8vJHt0aGlzLl9ob3N0fWA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9wb3J0KSB7XG4gICAgICAgICAgICAgICAgdXJsICs9IGA6JHt0aGlzLl9wb3J0fWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3dzID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBORVRXT1JLX1NUQVRVUy5PUEVOSU5HO1xuXG4gICAgICAgICAgICB0aGlzLl93cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gTkVUV09SS19TVEFUVVMuT1BFTkVEO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLl93cy5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IE5FVFdPUktfU1RBVFVTLlVOT1BFTjtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xvc2UnKTtcblxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fd3Mub25tZXNzYWdlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzTWVzc2FnZUJhdGNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NNZXNzYWdlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeShtc2c6IGFueSwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBtc2cuaWQgPSArK3RoaXMuX2NhbGxiYWNrSW5kZXg7XG5cbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1ttc2cuaWRdID0gY2FsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl93cy5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldHdvcms7IiwiaW1wb3J0IERpc3BsYXlPYmplY3QsIHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcblxuZXhwb3J0IHR5cGUgaV9CaXRtYXBPcHRpb25zID0gaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyAmIHtcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbn1cblxuY2xhc3MgQml0bWFwIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG4gICAgcHJvdGVjdGVkIF9pbWFnZTogSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfQml0bWFwT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9pbWFnZSA9IG9wdGlvbnMuaW1hZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5riy5p+TXG4gICAgICogQHBhcmFtIHsqfSBjdHggXG4gICAgICovXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHN1cGVyLnJlbmRlcihjdHgpO1xuXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWFnZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpdG1hcDsiLCJpbXBvcnQgRGlzcGxheU9iamVjdCwgeyBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIH0gZnJvbSBcIi4vRGlzcGxheU9iamVjdFwiO1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcbiAgICBwcm90ZWN0ZWQgX2NoaWxkcmVuOiBEaXNwbGF5T2JqZWN0W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfRGlzcGxheU9iamVjdE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5re75Yqg5LiA5Liq5YWD57SgXG4gICAgICog5ZyoY2hpbGRyZW7otorlvoDlkI7vvIxpbmRleOi2iuWkp++8jOWxgue6p+i2iumrmFxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICAgICAqL1xuICAgIGFkZENoaWxkcmVuKG9iamVjdDogRGlzcGxheU9iamVjdCwgaW5kZXg/OiBudW1iZXIpIHtcbiAgICAgICAgb2JqZWN0LnBhcmVudCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIoOmZpOafkOS4quWFg+e0oFxuICAgICAqIEBwYXJhbSB7Kn0gb2JqZWN0IFxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkcmVuKG9iamVjdDogRGlzcGxheU9iamVjdCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihvYmplY3QpO1xuICAgICAgICBpZiAocG9zIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKHBvcywgMSk7XG4gICAgICAgIG9iamVjdC5wYXJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4suafk1xuICAgICAqIEBwYXJhbSB7Kn0gY3R4IFxuICAgICAqL1xuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgICAgICAgIGN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fZGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjdHguX19zYXZlVHJhbnNmb3JtKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY3R4Ll9fdHJhbnNmb3JtKHRoaXMuX21hdHJpeCk7XG5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmRpc3BsYXkgJiYgaXRlbS5yZW5kZXIgJiYgaXRlbS5yZW5kZXIoY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjdHguX19yZXN0b3JlVHJhbnNmb3JtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Kem5Y+R5LqL5Lu277yM5LiN5LuF5LuF6Ieq5bex55qE6KaB6Kem5Y+R77yM6L+Y6KaB6YCP5Lyg5Yiw5a2Q6IqC54K5XG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIuZGlzcGF0Y2hFdmVudChldmVudCwgZGF0YSk7XG5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmRpc3BhdGNoRXZlbnQgJiYgaXRlbS5kaXNwYXRjaEV2ZW50KGV2ZW50LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vYmFzZS9Qb2ludCc7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2Jhc2UvUmVjdCc7XG5pbXBvcnQgTWF0cml4MkQgZnJvbSAnLi9iYXNlL01hdHJpeDJEJztcblxuZXhwb3J0IGludGVyZmFjZSBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbn1cblxuY2xhc3MgRGlzcGxheU9iamVjdCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgcHJvdGVjdGVkIF93aWR0aDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9tYXRyaXg6IE1hdHJpeDJEO1xuICAgIHByb3RlY3RlZCBfcGFyZW50OiBEaXNwbGF5T2JqZWN0fG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfZGlzcGxheTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiDojrflvpfnm7jmr5TovoPkuo7lhajlsYDnmoRtYXRyaXhcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dldEdsb2JhbE1hdHJpeCgpOiBNYXRyaXgyRCB7XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuX2dldEdsb2JhbE1hdHJpeCgpLnRyYW5zZm9ybU1hdHJpeCh0aGlzLl9tYXRyaXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hdHJpeC5jbG9uZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6K+lZGlzcGxheW9iamVjdOeahHJlY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dldEFBQkIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgICAgICAgIHRoaXMuX21hdHJpeC50eCxcbiAgICAgICAgICAgIHRoaXMuX21hdHJpeC50eSxcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoLFxuICAgICAgICAgICAgdGhpcy5faGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9EaXNwbGF5T2JqZWN0T3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX3dpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5fbWF0cml4ID0gbmV3IE1hdHJpeDJEKCk7XG4gICAgICAgIHRoaXMuX21hdHJpeC50cmFuc2xhdGUob3B0aW9ucy5sZWZ0LCBvcHRpb25zLnRvcCk7XG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRyaXgudHg7XG4gICAgfVxuXG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRyaXgudHk7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG5cbiAgICBzZXQgcGFyZW50KG9iajogRGlzcGxheU9iamVjdHxudWxsKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG9iajtcbiAgICB9XG5cbiAgICBnZXQgcGFyZW50KCk6IERpc3BsYXlPYmplY3R8bnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc3BsYXkoZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZDtcbiAgICB9XG5cbiAgICBnZXQgZGlzcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5L2N572uXG4gICAgICogQHBhcmFtIHsqfSB4IFxuICAgICAqIEBwYXJhbSB7Kn0geSBcbiAgICAgKi9cbiAgICBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXRyaXgudHggPSB4O1xuICAgICAgICB0aGlzLl9tYXRyaXgudHkgPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHjmlrnlkJHlgY/np7tcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKi9cbiAgICB0cmFuc2xhdGVYKHg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXRyaXgudHJhbnNsYXRlWCh4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB55pa55ZCR5YGP56e7XG4gICAgICogQHBhcmFtIHkgXG4gICAgICovXG4gICAgdHJhbnNsYXRlWSh5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF0cml4LnRyYW5zbGF0ZVkoeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat5piv5ZCm5ZyoQUFCQuS4rVxuICAgICAqIOazqOaEj++8jOi/memHjHjvvIx55pivZ2xvYmFs55qE5Z2Q5qCH77yM5rKh5pyJ57uP6L+HdHJhbnNmb3JtXG4gICAgICog5omA5Lul6KaB6L+b6KGM6YCG55+p6Zi16K6h566XXG4gICAgICogQHBhcmFtIHsqfSB4IFxuICAgICAqIEBwYXJhbSB7Kn0geSBcbiAgICAgKi9cbiAgICBjb250YWluKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwb2ludCA9IG5ldyBQb2ludCh4LCB5KTtcbiAgICAgICAgbGV0IG1hdHJpeDogTWF0cml4MkQ7XG5cbiAgICAgICAgLy8g5YWI5rGC5Ye65a6M5pW055qE55+p6Zi1XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIG1hdHJpeCA9IHRoaXMuX3BhcmVudC5fZ2V0R2xvYmFsTWF0cml4KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4MkQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWGjeaxgumAhuefqemYtVxuICAgICAgICBtYXRyaXguaW52ZXJ0KCk7XG4gICAgICAgIFxuICAgICAgICAvLyDngrnov5vooYznn6npmLXlj5jmjaJcbiAgICAgICAgcG9pbnQudHJhbnNmb3JtV2l0aE1hdHJpeChtYXRyaXgpO1xuXG4gICAgICAgIGxldCByZWN0ID0gdGhpcy5fZ2V0QUFCQigpO1xuXG4gICAgICAgIHJldHVybiByZWN0LmNvbnRhaW5zKHBvaW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpmpDol49cbiAgICAgKi9cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV56S6XG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY3R4Ll9fc2F2ZVRyYW5zZm9ybSgpO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY3R4Ll9fdHJhbnNmb3JtKHRoaXMuX21hdHJpeCk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjdHguX19yZXN0b3JlVHJhbnNmb3JtKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheU9iamVjdDsiLCJpbnRlcmZhY2UgaV9MaXN0ZW5lcnMge1xuICAgIFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uW11cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgICBwcml2YXRlIF9saXN0ZW5lcnM6IGlfTGlzdGVuZXJzID0ge307XG5cbiAgICBwcml2YXRlIF9oYXNFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdLmluZGV4T2YoZnVuYykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0V2ZW50TGlzdGVuZXIodHlwZSwgZnVuYykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0ucHVzaChmdW5jKTtcbiAgICB9XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9oYXNFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uaW5kZXhPZihmdW5jKTtcblxuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaEV2ZW50KHR5cGU6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV1baV0uY2FsbCh0aGlzLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnREaXNwYXRjaGVyOyIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vRXZlbnREaXNwYXRjaGVyXCI7XG5cbmNvbnN0IGVudW0gUkVTT1VSQ0VfVFlQRSB7XG4gICAgSU1BR0UsXG4gICAgQVVESU8sXG59O1xuXG5jb25zdCBlbnVtIFJFU09VUkNFX1NUQVRVUyB7XG4gICAgTE9BRElORyxcbiAgICBDT01QTEVURUQsXG4gICAgRkFJTEVEXG59O1xuXG5jbGFzcyBSZXNvdXJjZU1hbmFnZSBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgLy8g5oC75YWx6ZyA6KaB5Yqg6L2955qE6LWE5rqQXG4gICAgcHJpdmF0ZSBfdG90YWw6IG51bWJlcjtcbiAgICAvLyDmraPlnKjliqDovb3nmoTotYTmupBcbiAgICBwcml2YXRlIF9sb2FkaW5nOiBudW1iZXI7XG4gICAgLy8g5b2T5YmN5bey57uP5Yqg6L2955qE6LWE5rqQXG4gICAgcHJpdmF0ZSBfY29tcGxldGVkOiBudW1iZXI7XG4gICAgLy8g5Yqg6L295aSx6LSl55qE6LWE5rqQXG4gICAgcHJpdmF0ZSBfZmFpbGVkOiBudW1iZXI7XG5cbiAgICAvLyDphY3nva5cbiAgICBwcml2YXRlIF9jb25maWc6IGFueSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfbG9hZChrZXk6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdG90YWwrKztcbiAgICAgICAgdGhpcy5fbG9hZGluZysrO1xuXG4gICAgICAgIGlmICh1cmwubWF0Y2goL3BuZ3xqcGcvKSkge1xuICAgICAgICAgICAgbGV0IGltYWdlID0gdGhpcy5fbG9hZEltYWdlKHVybCk7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnW2tleV0uc3RhdHVzID0gUkVTT1VSQ0VfU1RBVFVTLkNPTVBMRVRFRDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVMb2FkZWQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign6LWE5rqQ5Yqg6L295aSx6LSlOiAnLCBrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1trZXldLnN0YXR1cyA9IFJFU09VUkNFX1NUQVRVUy5GQUlMRUQ7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFU09VUkNFX1RZUEUuSU1BR0UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGltYWdlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogUkVTT1VSQ0VfU1RBVFVTLkxPQURJTkdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmsqHmnInpn7PkuZBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzdXBwb3J0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9sb2FkSW1hZ2UodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHVybDtcblxuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlTG9hZGVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nLS07XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZCsrO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25Qcm9ncmVzcycpO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uQ29tcGxldGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUVycm9yID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkaW5nLS07XG4gICAgICAgIHRoaXMuX2ZhaWxlZCsrO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25GYWlsJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbkNvbXBsZXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl90b3RhbCA9IDA7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSAwO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSAwO1xuICAgICAgICB0aGlzLl9mYWlsZWQgPSAwO1xuICAgIH1cblxuICAgIGdldCB0b3RhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsO1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgICB9XG5cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICAgIH1cblxuICAgIGdldCBmYWlsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWlsZWQ7XG4gICAgfVxuXG4gICAgbG9hZChjb25maWc6IGFueSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWQoa2V5LCBjb25maWdba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgLy8g5Y+v5Lul5pyJ5piv5ZCm5aSx6LSl44CB6YeN6K+V55qE5Yik5patXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdba2V5XS52YWx1ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVzb3VyY2VNYW5hZ2UoKTsiLCJpbXBvcnQgRGlzcGxheU9iamVjdCwgeyBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIH0gZnJvbSBcIi4vRGlzcGxheU9iamVjdFwiO1xuXG5leHBvcnQgdHlwZSBpX1RleHRPcHRpb25zID0gaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyAmIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgYm9sZD86IGJvb2xlYW47XG4gICAgc2l6ZTogbnVtYmVyO1xufVxuXG5jbGFzcyBUZXh0IGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG4gICAgc3RhdGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgc3RhdGljIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBUZXh0LmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBUZXh0LmNhbnZhcy53aWR0aCA9IDE7XG4gICAgICAgIFRleHQuY2FudmFzLmhlaWdodCA9IDUwMDtcbiAgICAgICAgVGV4dC5jYW52YXMuZGlyID0gJ2x0cic7XG4gICAgICAgIFRleHQuY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD5UZXh0LmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdGV4dDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2JvbGQ6IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIF9zaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZm9udFN0eWxlOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF90ZXh0V2lkdGg6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiDorqHnrpflh7rmloflrZfnmoTlrr3luqZcbiAgICAgKi9cbiAgICBwcml2YXRlIF9nZXRXaWR0aCgpIHtcbiAgICAgICAgVGV4dC5jdHguZm9udCA9IHRoaXMuX2ZvbnRTdHlsZTtcbiAgICAgICAgdGhpcy5fdGV4dFdpZHRoID0gVGV4dC5jdHgubWVhc3VyZVRleHQodGhpcy5fdGV4dCkud2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6h566X5Ye65paH5a2X55qE5qC35byPXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0Rm9udFN0eWxlKCkge1xuICAgICAgICB0aGlzLl9mb250U3R5bGUgPSBgJHt0aGlzLl9ib2xkID8gJ2JvbGQnIDogJyd9ICR7dGhpcy5fc2l6ZX1weCDlvq7ova/pm4Xpu5FgO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfVGV4dE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fdGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgdGhpcy5fY29sb3IgPSBvcHRpb25zLmNvbG9yIHx8ICcjMDAwMDAwJztcbiAgICAgICAgdGhpcy5fYm9sZCA9IG9wdGlvbnMuYm9sZCB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcblxuICAgICAgICB0aGlzLl9nZXRGb250U3R5bGUoKTtcbiAgICAgICAgdGhpcy5fZ2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgfVxuXG4gICAgc2V0IHRleHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9nZXRXaWR0aCgpO1xuICAgIH1cblxuICAgIGdldCBjb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICAgIH1cblxuICAgIHNldCBjb2xvcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBib2xkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9sZDtcbiAgICB9XG5cbiAgICBzZXQgYm9sZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9ib2xkID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2dldEZvbnRTdHlsZSgpO1xuICAgICAgICB0aGlzLl9nZXRXaWR0aCgpO1xuICAgIH1cblxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICBzZXQgc2l6ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2dldEZvbnRTdHlsZSgpO1xuICAgICAgICB0aGlzLl9nZXRXaWR0aCgpO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLl9mb250U3R5bGU7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9jb2xvcjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuX2JvbGQgPyAyIDogMTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgdGhpcy5fdGV4dCwgXG4gICAgICAgICAgICB0aGlzLnggKyAodGhpcy53aWR0aCAtIHRoaXMuX3RleHRXaWR0aCkgLyAyLCBcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMlxuICAgICAgICApO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG59O1xuXG5UZXh0LmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDsiLCJjbGFzcyBNYXRyaXgyRCB7XG4gICAgcHVibGljIGE6IG51bWJlcjtcbiAgICBwdWJsaWMgYjogbnVtYmVyO1xuICAgIHB1YmxpYyBjOiBudW1iZXI7XG4gICAgcHVibGljIGQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdHg6IG51bWJlcjtcbiAgICBwdWJsaWMgdHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlciA9IDEsIGI6IG51bWJlciA9IDAsIGM6IG51bWJlciA9IDAsIGQ6IG51bWJlciA9IDEsIHR4OiBudW1iZXIgPSAwLCB0eTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmMgPSBjO1xuICAgICAgICB0aGlzLmQgPSBkO1xuICAgICAgICB0aGlzLnR4ID0gdHg7XG4gICAgICAgIHRoaXMudHkgPSB0eTtcbiAgICB9XG5cbiAgICBjbG9uZSgpOiBNYXRyaXgyRCB7XG4gICAgICAgIGxldCBtYXRyaXggPSBuZXcgTWF0cml4MkQoKTtcblxuICAgICAgICBtYXRyaXguYSA9IHRoaXMuYTtcbiAgICAgICAgbWF0cml4LmIgPSB0aGlzLmI7XG4gICAgICAgIG1hdHJpeC5jID0gdGhpcy5jO1xuICAgICAgICBtYXRyaXguZCA9IHRoaXMuZDtcbiAgICAgICAgbWF0cml4LnR4ID0gdGhpcy50eDtcbiAgICAgICAgbWF0cml4LnR5ID0gdGhpcy50eTtcblxuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmEgPSAxO1xuICAgICAgICB0aGlzLmIgPSAwO1xuICAgICAgICB0aGlzLmMgPSAwO1xuICAgICAgICB0aGlzLmQgPSAxO1xuICAgICAgICB0aGlzLnR4ID0gMDtcbiAgICAgICAgdGhpcy50eSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YGP56e7XG4gICAgICogQHBhcmFtIHsqfSB4IFxuICAgICAqIEBwYXJhbSB7Kn0geSBcbiAgICAgKi9cbiAgICB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50eCArPSB4O1xuICAgICAgICB0aGlzLnR5ICs9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeOaWueWQkeWBj+enu1xuICAgICAqIEBwYXJhbSB7Kn0geCBcbiAgICAgKi9cbiAgICB0cmFuc2xhdGVYKHg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnR4ICs9IHg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeeaWueWQkeeahOWBj+enu1xuICAgICAqIEBwYXJhbSB7Kn0geSBcbiAgICAgKi9cbiAgICB0cmFuc2xhdGVZKHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnR5ICs9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57yp5pS+XG4gICAgICogQHBhcmFtIHsqfSB4IFxuICAgICAqIEBwYXJhbSB7Kn0geSBcbiAgICAgKi9cbiAgICBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmEgKj0geDtcbiAgICAgICAgdGhpcy5jICo9IHg7XG4gICAgICAgIHRoaXMudHggKj0geDtcblxuICAgICAgICB0aGlzLmIgKj0geTtcbiAgICAgICAgdGhpcy5kICo9IHk7XG4gICAgICAgIHRoaXMudHkgKj0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB45pa55ZCR57yp5pS+XG4gICAgICogQHBhcmFtIHsqfSB4IFxuICAgICAqL1xuICAgIHNjYWxlWCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hICo9IHg7XG4gICAgICAgIHRoaXMuYyAqPSB4O1xuICAgICAgICB0aGlzLnR4ICo9IHg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeeaWueWQkee8qeaUvlxuICAgICAqIEBwYXJhbSB7Kn0geSBcbiAgICAgKi9cbiAgICBzY2FsZVkoeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYiAqPSB5O1xuICAgICAgICB0aGlzLmQgKj0geTtcbiAgICAgICAgdGhpcy50eSAqPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiHqui6q+efqemYteS4juWPpuWkluS4gOS4quefqemYteebuOS5mFxuICAgICAqIEBwYXJhbSB7Kn0gbWF0cml4IFxuICAgICAqIEBwYXJhbSB7Kn0gdGFyZ2V0XG4gICAgICovXG4gICAgdHJhbnNmb3JtTWF0cml4KG1hdHJpeDogTWF0cml4MkQsIHRhcmdldD86IE1hdHJpeDJEKTogTWF0cml4MkQge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQuYSA9IHRoaXMuYSAqIG1hdHJpeC5hO1xuICAgICAgICB0YXJnZXQuYiA9IDA7XG4gICAgICAgIHRhcmdldC5jID0gMDtcbiAgICAgICAgdGFyZ2V0LmQgPSB0aGlzLmQgKiBtYXRyaXguZDtcbiAgICAgICAgdGFyZ2V0LnR4ID0gdGhpcy5hICogbWF0cml4LnR4ICsgdGhpcy50eDtcbiAgICAgICAgdGFyZ2V0LnR5ID0gdGhpcy5kICogbWF0cml4LnR5ICsgdGhpcy50eTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiHqui6q+efqemYteeahOmAhuefqemYtVxuICAgICAqIEBwYXJhbSB7Kn0gdGFyZ2V0XG4gICAgICovXG4gICAgaW52ZXJ0KHRhcmdldD86IE1hdHJpeDJEKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC5hID0gMSAvIHRoaXMuYTtcbiAgICAgICAgdGFyZ2V0LmQgPSAxIC8gdGhpcy5kO1xuXG4gICAgICAgIHRhcmdldC50eCA9IC10aGlzLmEgKiB0aGlzLnR4O1xuICAgICAgICB0YXJnZXQudHkgPSAtdGhpcy5kICogdGhpcy50eTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB0aGlzLmEsIHRoaXMuYiwgXG4gICAgICAgICAgICB0aGlzLmMsIHRoaXMuZCwgXG4gICAgICAgICAgICB0aGlzLnR4LCB0aGlzLnR5XG4gICAgICAgIF07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4MkQ7IiwiaW1wb3J0IE1hdHJpeDJEIGZyb20gXCIuL01hdHJpeDJEXCI7XG5cbmNsYXNzIFBvaW50IHtcbiAgICBwcml2YXRlIF94OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfeTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgIH1cblxuICAgIGdldCB4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgIH1cblxuICAgIGdldCB5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebtOaOpeS/ruaUueS9jee9rlxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqL1xuICAgIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDor6Xngrnnu4/ov4fkuIDkuKptYXRyaXjlj5jmjaJcbiAgICAgKiBAcGFyYW0gbWF0cml4IFxuICAgICAqL1xuICAgIHRyYW5zZm9ybVdpdGhNYXRyaXgobWF0cml4OiBNYXRyaXgyRCkge1xuICAgICAgICB0aGlzLl94ID0gbWF0cml4LmEgKiB0aGlzLl94ICsgbWF0cml4LnR4O1xuICAgICAgICB0aGlzLl95ID0gbWF0cml4LmQgKiB0aGlzLl95ICsgbWF0cml4LnR5O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50OyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IE1hdHJpeDJEIGZyb20gXCIuL01hdHJpeDJEXCI7XG5cbmNsYXNzIFJlY3Qge1xuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gdztcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaDtcbiAgICB9XG5cbiAgICBnZXQgeCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICB9XG5cbiAgICBnZXQgeSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm7TmjqXorr7nva7nn6nlvaLnmoTkvY3nva5cbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKi9cbiAgICBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5p+Q5Liq54K55piv5ZCm5Zyo6K+l55+p5Z6L5YaF6YOoXG4gICAgICogQHBhcmFtIHBvaW50IFxuICAgICAqL1xuICAgIGNvbnRhaW5zKHBvaW50OiBQb2ludCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHlcbiAgICAgICAgfSA9IHBvaW50O1xuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgeCA+IHRoaXMueCAmJlxuICAgICAgICAgICAgeCA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHkgPiB0aGlzLnkgJiZcbiAgICAgICAgICAgIHkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K+l55+p5Z6L57uP6L+H5LiA5LiqbWF0cml45Y+Y5o2iXG4gICAgICogQHBhcmFtIG1hdHJpeCBcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1XaXRoTWF0cml4KG1hdHJpeDogTWF0cml4MkQpIHtcbiAgICAgICAgbGV0IGEgPSBtYXRyaXguYTtcbiAgICAgICAgbGV0IGIgPSBtYXRyaXguYjtcbiAgICAgICAgbGV0IGMgPSBtYXRyaXguYztcbiAgICAgICAgbGV0IGQgPSBtYXRyaXguZDtcbiAgICAgICAgbGV0IHR4ID0gbWF0cml4LnR4O1xuICAgICAgICBsZXQgdHkgPSBtYXRyaXgudHk7XG5cbiAgICAgICAgbGV0IHggPSB0aGlzLng7XG4gICAgICAgIGxldCB5ID0gdGhpcy55O1xuICAgICAgICBsZXQgeE1heCA9IHggKyB0aGlzLndpZHRoO1xuICAgICAgICBsZXQgeU1heCA9IHkgKyB0aGlzLmhlaWdodDtcblxuICAgICAgICBsZXQgeDAgPSBhICogeCArIGMgKiB5ICsgdHg7XG4gICAgICAgIGxldCB5MCA9IGIgKiB4ICsgZCAqIHkgKyB0eTtcbiAgICAgICAgbGV0IHgxID0gYSAqIHhNYXggKyBjICogeSArIHR4O1xuICAgICAgICBsZXQgeTEgPSBiICogeE1heCArIGQgKiB5ICsgdHk7XG4gICAgICAgIGxldCB4MiA9IGEgKiB4TWF4ICsgYyAqIHlNYXggKyB0eDtcbiAgICAgICAgbGV0IHkyID0gYiAqIHhNYXggKyBkICogeU1heCArIHR5O1xuICAgICAgICBsZXQgeDMgPSBhICogeCArIGMgKiB5TWF4ICsgdHg7XG4gICAgICAgIGxldCB5MyA9IGIgKiB4ICsgZCAqIHlNYXggKyB0eTtcblxuICAgICAgICBsZXQgdG1wID0gMDtcblxuICAgICAgICBpZiAoeDAgPiB4MSkge1xuICAgICAgICAgICAgdG1wID0geDA7XG4gICAgICAgICAgICB4MCA9IHgxO1xuICAgICAgICAgICAgeDEgPSB0bXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHgyID4geDMpIHtcbiAgICAgICAgICAgIHRtcCA9IHgyO1xuICAgICAgICAgICAgeDIgPSB4MztcbiAgICAgICAgICAgIHgzID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5feCA9IE1hdGguZmxvb3IoeDAgPCB4MiA/IHgwIDogeDIpO1xuICAgICAgICB0aGlzLl93aWR0aCA9IE1hdGguY2VpbCgoeDEgPiB4MyA/IHgxIDogeDMpIC0gdGhpcy54KTtcblxuICAgICAgICBpZiAoeTAgPiB5MSkge1xuICAgICAgICAgICAgdG1wID0geTA7XG4gICAgICAgICAgICB5MCA9IHkxO1xuICAgICAgICAgICAgeTEgPSB0bXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkyID4geTMpIHtcbiAgICAgICAgICAgIHRtcCA9IHkyO1xuICAgICAgICAgICAgeTIgPSB5MztcbiAgICAgICAgICAgIHkzID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5feSA9IE1hdGguZmxvb3IoeTAgPCB5MiA/IHkwIDogeTIpO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBNYXRoLmNlaWwoKHkxID4geTMgPyB5MSA6IHkzKSAtIHRoaXMueSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjdDsiLCJpbXBvcnQgTWF0cml4MkQgZnJvbSBcIi4vYmFzZS9NYXRyaXgyRFwiO1xuXG4oPGFueT5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlKS5fX21hdHJpeCA9IG5ldyBNYXRyaXgyRCgpO1xuKDxhbnk+Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZSkuX19tYXRyaXhBcnIgPSBbXTtcblxuKDxhbnk+Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZSkuX19zYXZlVHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHQgPSB0aGlzLmdldFRyYW5zZm9ybSgpO1xuICAgIHRoaXMuX19tYXRyaXggPSBuZXcgTWF0cml4MkQodC5hLCB0LmIsIHQuYywgdC5kLCB0LmUsIHQuZik7XG4gICAgdGhpcy5fX21hdHJpeEFyci51bnNoaWZ0KHRoaXMuX19tYXRyaXguY2xvbmUoKSk7XG59O1xuXG4oPGFueT5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlKS5fX3RyYW5zZm9ybSA9IGZ1bmN0aW9uKG1hdHJpeDogTWF0cml4MkQpIHtcbiAgICB0aGlzLl9fbWF0cml4LnRyYW5zZm9ybU1hdHJpeChtYXRyaXgpO1xuICAgIHRoaXMuc2V0VHJhbnNmb3JtLmFwcGx5KHRoaXMsIHRoaXMuX19tYXRyaXguc2VyaWFsaXplKCkpO1xufTtcblxuKDxhbnk+Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZSkuX19yZXN0b3JlVHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fX21hdHJpeCA9IHRoaXMuX19tYXRyaXhBcnIuc2hpZnQoKTtcbiAgICB0aGlzLnNldFRyYW5zZm9ybS5hcHBseSh0aGlzLCB0aGlzLl9fbWF0cml4LnNlcmlhbGl6ZSgpKTtcbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUm9vbS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUm9vbS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jvb20uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IEFwcCBmcm9tIFwiLi4vQXBwXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vdXNlci9Vc2VyXCI7XG5pbXBvcnQgU3RhZ2UsIHsgUExBWUVSX1BPU0lUSU9OIH0gZnJvbSBcIi4uL2NvbXBvbmVudC9TdGFnZVwiO1xuaW1wb3J0IHsgY29tcGFyZVB1a2VzLCBSRVRfU1VDQ0VTUywgRVZFTlRfTkFNRSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vcmVuZGVyL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgJy4vUm9vbS5jc3MnO1xuXG5pbnRlcmZhY2UgaV9Sb29tT3B0aW9ucyB7XG4gICAgYXBwOiBBcHAsXG59O1xuXG5lbnVtIEdBTUVfVFlQRSB7XG4gICAgUExBWSxcbiAgICBXQVRDSFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBpX1Jvb21TaG93T3B0aW9ucyB7XG4gICAgcm9vbUlkOiBzdHJpbmcsXG4gICAgbWFpblVpZDogc3RyaW5nLFxuICAgIHBsYXllcnM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXToge1xuICAgICAgICAgICAgcGxheWVyTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgcG9zaXRpb246IG51bWJlclxuICAgICAgICB9XG4gICAgfVxufTtcblxuaW50ZXJmYWNlIGlfQWRkUml2YWxPcHRpb25zIHtcbiAgICBwbGF5ZXJVaWQ6IHN0cmluZyxcbiAgICBwbGF5ZXJOYW1lOiBzdHJpbmcsXG4gICAgcG9zaXRpb246IG51bWJlclxufTtcblxuY29uc3QgREVGQVVMVF9XSURUSCA9IDYwMDtcbmNvbnN0IERFRkFVTFRfSEVJR0hUID0gMzc1O1xuXG5mdW5jdGlvbiByZXNvbHZlU2NyZWVuKHNjcmVlbldpZHRoOiBudW1iZXIsIHNjcmVlbkhlaWdodDogbnVtYmVyKSB7XG4gICAgLy8g6auY5bqm5LiA5a6a6KaB5YWo6YOo5bGV56S65Ye65p2l77yI6L+Z6YeM55qE6auY5bqm5oyH55qE5piv5peL6L2s5ZCO55qE77yJXG4gICAgbGV0IHNjYWxlID0gc2NyZWVuSGVpZ2h0IC8gREVGQVVMVF9IRUlHSFQ7XG4gICAgbGV0IHdpZHRoID0gREVGQVVMVF9XSURUSCAqIHNjYWxlO1xuICAgIGxldCBsZWZ0ID0gKHNjcmVlbldpZHRoIC0gd2lkdGgpIC8gMjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHNjcmVlbkhlaWdodFxuICAgIH07XG59XG5cbmNsYXNzIFJvb20gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAgIHByaXZhdGUgX2FwcDogQXBwO1xuICAgIHByaXZhdGUgX3Jvb21JZCE6IHN0cmluZztcbiAgICAvLyDmmK/lkKbliJ3lp4vljJbov4fvvIzor6Xnu4Tku7blj6rkvJrliJ3lp4vljJbkuIDmrKFcbiAgICBwcml2YXRlIF9pbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyDmiL/pl7TnmoRkb23lrrnlmahcbiAgICBwcml2YXRlIF9ib3ghOiBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJpdmF0ZSBfc3RhZ2U6IFN0YWdlO1xuICAgIC8vIOeOqeWutuiHquW3seeahOS9jee9rlxuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBudW1iZXIgPSAwO1xuICAgIC8vIOWvueaJi+eahG1hcFxuICAgIHByaXZhdGUgX3JpdmFsOiBhbnkgPSB7fTtcbiAgICAvLyDkuLvop4bop5LnmoTnjqnlrrZpZFxuICAgIHByaXZhdGUgX21haW5VaWQhOiBzdHJpbmc7XG4gICAgLy8g5oi/6Ze05qih5byPXG4gICAgcHJpdmF0ZSBfZ2FtZVR5cGUhOiBHQU1FX1RZUEU7XG4gICAgLy8g5b2T5YmN5qGM6Z2i5LiK5pyA5aSn55qE5omR5YWL54mMXG4gICAgcHJpdmF0ZSBfZGVza3RvcFB1a2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIOW9k+WJjeahjOmdouS4iuacgOWkp+eahOaJkeWFi+eJjOWHuueJjOiAhVxuICAgIHByaXZhdGUgX2Rlc2t0b3BQdWtlc093bmVyITogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW77yM5Li76KaB5piv55Sf5oiQc3RhZ2VcbiAgICAgKiBAcGFyYW0gaW5mbyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zaG93KGluZm86IGlfUm9vbVNob3dPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IGluZm8ucm9vbUlkO1xuXG4gICAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTdGFnZSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVWRU5UX05BTUUuUk9PTV9TSE9XLCBpbmZvKTtcblxuICAgICAgICB0aGlzLl9hbGxvY2F0ZVBvc2l0aW9uKGluZm8ucGxheWVycyk7XG5cbiAgICAgICAgdGhpcy5fYWRkTWVzc2FnZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2dhbWVUeXBlID09PSBHQU1FX1RZUEUuUExBWSkge1xuICAgICAgICAgICAgLy8g55uR5ZCs5omL54mM5Y+Y5YyWXG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmhhbmRQdWtlcy5hZGRFdmVudExpc3RlbmVyKCdjaG9vc2VQdWtlc0NoYW5nZScsIHRoaXMuX2NoZWNrUHVrZXNDYW5TaG90KTtcblxuICAgICAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh0aGlzLl9tYWluVWlkKS5idXR0b25Db250cm9sLmVudGVyUmVhZHkoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWc3RhZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0U3RhZ2UoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMuX2FwcC5yb290Lm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5fYXBwLnJvb3Qub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9ib3guY2xhc3NOYW1lID0gJ3Jvb20tYm94JztcbiAgICAgICAgLy8g5a696auY5Y+N6L2sXG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS53aWR0aCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3dpZHRofXB4KSByb3RhdGUoOTBkZWcpYDtcblxuICAgICAgICAvLyDms6jmhI/lj4LmlbBcbiAgICAgICAgbGV0IHJlY3QgPSByZXNvbHZlU2NyZWVuKGhlaWdodCwgd2lkdGgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc3RhZ2UgPSBuZXcgU3RhZ2Uoe1xuICAgICAgICAgICAgYXBwOiB0aGlzLl9hcHAsXG4gICAgICAgICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgb2Zmc2V0WDogcmVjdC50b3AsXG4gICAgICAgICAgICBvZmZzZXRZOiByZWN0LmxlZnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuY2FudmFzLnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnR9cHhgO1xuICAgICAgICB0aGlzLl9zdGFnZS5jYW52YXMuc3R5bGUudG9wID0gYCR7cmVjdC50b3B9cHhgO1xuXG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9zdGFnZS5jYW52YXMpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5yb290LmFwcGVuZENoaWxkKHRoaXMuX2JveCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm9vbeWxleekuueahOaXtuWAme+8jOWIhumFjeS9jee9rlxuICAgICAqIEBwYXJhbSBpbmZvIFxuICAgICAqL1xuICAgIHByaXZhdGUgX2FsbG9jYXRlUG9zaXRpb24ocGxheWVyczogYW55KSB7XG4gICAgICAgIGxldCBwb3NpdGlvbjtcbiAgICAgICAgbGV0IHBsYXllck5hbWU7XG4gICAgICAgIGxldCBwbGF5ZXJVaWQ7XG5cbiAgICAgICAgLy8g5YWI5om+5Yiw6Ieq5bex55qE5L2N572uXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcGxheWVyc1t0aGlzLl9tYWluVWlkXS5wb3NpdGlvbjtcblxuICAgICAgICBmb3IgKHBsYXllclVpZCBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lID0gcGxheWVyc1twbGF5ZXJVaWRdLnBsYXllck5hbWU7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHBsYXllcnNbcGxheWVyVWlkXS5wb3NpdGlvbjtcblxuICAgICAgICAgICAgdGhpcy5fcGxheWVyRW50ZXJSb29tKHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lLFxuICAgICAgICAgICAgICAgIHBsYXllclVpZCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvblxuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oi/6Ze05qih5Z2X6ZqQ6JePXG4gICAgICog6Kej57uR5raI5oGv5o6o6YCBXG4gICAgICog6ZqQ6JePc3RhZ2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9oaWRlKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVNZXNzYWdlTGlzdGVuZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IHVzZXJJZCBpbiB0aGlzLl9yaXZhbCkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyTGVhdmVSb29tKHtcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IHVzZXJJZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRVZFTlRfTkFNRS5ST09NX0hJREUpO1xuXG4gICAgICAgIHRoaXMuX3N0YWdlLmhpZGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRNZXNzYWdlTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vIOWvueaJi+i/m+WFpVxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdSb29tLlBsYXllckVudGVyUm9vbScsIHRoaXMuX3BsYXllckVudGVyUm9vbSk7XG5cbiAgICAgICAgLy8g5a+55omL56a75byAXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyTGVhdmVSb29tJywgdGhpcy5fcGxheWVyTGVhdmVSb29tKTtcblxuICAgICAgICAvLyDnm5HlkKznjqnlrrblh4blpIdcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJSZWFkeScsIHRoaXMuX3BsYXllclJlYWR5KTtcblxuICAgICAgICAvLyDov5vlhaXlj6vlnLDkuLvpmLbmrrVcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5FbnRlckFza0xhbmRsb3JkJywgdGhpcy5fZW50ZXJBc2tMYW5kbG9yZCk7XG5cbiAgICAgICAgLy8g5a+55omL5Y+r5Zyw5Li7XG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyQXNrTGFuZGxvcmQnLCB0aGlzLl9wbGF5ZXJBc2tMYW5kbG9yZCk7XG5cbiAgICAgICAgLy8g6L+b5YWl5oqi5Zyw5Li76Zi25q61XG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoJ1Jvb20uRW50ZXJHcmFiTGFuZGxvcmQnLCB0aGlzLl9lbnRlckdyYWJMYW5kbG9yZCk7XG5cbiAgICAgICAgLy8g5a+55omL5oqi5Zyw5Li7XG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyR3JhYkxhbmRsb3JkJywgdGhpcy5fcGxheWVyR3JhYkxhbmRsb3JkKTtcblxuICAgICAgICAvLyDmuLjmiI/lvIDlp4tcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5HYW1lU3RhcnQnLCB0aGlzLl9nYW1lU3RhcnQpO1xuXG4gICAgICAgIC8vIOWHuueJjFxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdSb29tLlBsYXllclNob3RQdWtlcycsIHRoaXMuX3BsYXllclB1a2VzKTtcblxuICAgICAgICAvLyDnu6fnu63lh7rniYxcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5Mb29wUHVrZXMnLCB0aGlzLl9sb29wUHVrZXMpO1xuXG4gICAgICAgIC8vIOa4uOaIj+e7k+adn1xuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdSb29tLkdhbWVPdmVyJywgdGhpcy5fZ2FtZU92ZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZU1lc3NhZ2VMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJFbnRlclJvb20nLCB0aGlzLl9wbGF5ZXJFbnRlclJvb20pO1xuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyTGVhdmVSb29tJywgdGhpcy5fcGxheWVyTGVhdmVSb29tKTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5yZW1vdmVFdmVudExpc3RlbmVyKCdSb29tLlBsYXllclJlYWR5JywgdGhpcy5fcGxheWVyUmVhZHkpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uRW50ZXJBc2tMYW5kbG9yZCcsIHRoaXMuX2VudGVyQXNrTGFuZGxvcmQpO1xuICAgIFxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5yZW1vdmVFdmVudExpc3RlbmVyKCdSb29tLlBsYXllckFza0xhbmRsb3JkJywgdGhpcy5fcGxheWVyQXNrTGFuZGxvcmQpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uRW50ZXJHcmFiTGFuZGxvcmQnLCB0aGlzLl9lbnRlckdyYWJMYW5kbG9yZCk7XG5cbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJHcmFiTGFuZGxvcmQnLCB0aGlzLl9wbGF5ZXJHcmFiTGFuZGxvcmQpO1xuICAgIFxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5yZW1vdmVFdmVudExpc3RlbmVyKCdSb29tLkdhbWVTdGFydCcsIHRoaXMuX2dhbWVTdGFydCk7XG5cbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJTaG90UHVrZXMnLCB0aGlzLl9wbGF5ZXJQdWtlcyk7XG4gICAgXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uTG9vcFB1a2VzJywgdGhpcy5fbG9vcFB1a2VzKTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5yZW1vdmVFdmVudExpc3RlbmVyKCdSb29tLkdhbWVPdmVyJywgdGhpcy5fZ2FtZU92ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOacieWFtuS7lueOqeWutui/m+WFpVxuICAgICAqIEBwYXJhbSB7Kn0gdXNlciBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wbGF5ZXJFbnRlclJvb20gPSAoZGF0YTogaV9BZGRSaXZhbE9wdGlvbnMpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCB1c2VySW5mbyA9IG5ldyBVc2VyKHtcbiAgICAgICAgICAgIHVpZDogZGF0YS5wbGF5ZXJVaWQsXG4gICAgICAgICAgICBuYW1lOiBkYXRhLnBsYXllck5hbWVcbiAgICAgICAgfSk7O1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBkYXRhLnBvc2l0aW9uO1xuICAgICAgICBsZXQgZGlmZiA9IHRoaXMuX3Bvc2l0aW9uIC0gcG9zaXRpb247XG5cbiAgICAgICAgc3dpdGNoIChkaWZmKSB7XG4gICAgICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuX3JpdmFsW3VzZXJJbmZvLnVpZF0gPSB1c2VySW5mbztcbiAgICAgICAgICAgICAgICAvLyDmlrDmnaXnjqnlrrblnKjlj7PovrlcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFnZS5hZGRQbGF5ZXIodXNlckluZm8sIFBMQVlFUl9QT1NJVElPTi5SSUdIVCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIC0yOlxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuX3JpdmFsW3VzZXJJbmZvLnVpZF0gPSB1c2VySW5mbztcbiAgICAgICAgICAgICAgICAvLyDmlrDmnaXnjqnlrrblnKjlt6bovrlcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFnZS5hZGRQbGF5ZXIodXNlckluZm8sIFBMQVlFUl9QT1NJVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFnZS5hZGRQbGF5ZXIodXNlckluZm8sIFBMQVlFUl9QT1NJVElPTi5NQUlOKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgJ2ludmFsaWQgcG9zaXRpb24nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pyJ5YW25LuW546p5a6256a75byAXG4gICAgICog5aaC5p6c6Ieq5bex56a75byA5oi/6Ze077yM5Lmf5Lya5ZyodW5pbml05Lit6LCD55So77yM5riF6Zmk5a+55omL546p5a62XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wbGF5ZXJMZWF2ZVJvb20gPSAoZGF0YToge3BsYXllcjogc3RyaW5nfSkgPT4ge1xuICAgICAgICBsZXQgdXNlcklkID0gZGF0YS5wbGF5ZXI7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UucmVtb3ZlUGxheWVyKHVzZXJJZCk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuX3JpdmFsW3VzZXJJZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog546p5a625YeG5aSHXG4gICAgICogQHBhcmFtIGRhdGEgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcGxheWVyUmVhZHkgPSAoZGF0YToge3BsYXllcjogc3RyaW5nLCBpc1JlYWR5OiBib29sZWFufSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgaXNSZWFkeVxuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHBsYXllcikucmVhZHkoaXNSZWFkeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl5Y+r5Zyw5Li76Zi25q61XG4gICAgICog6L+Z6YeM5Lya5o6l5pS25Yiw5Yid5aeL5YyW55qE54mMXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZW50ZXJBc2tMYW5kbG9yZCA9IChkYXRhOiB7YXNrUGxheWVyOiBzdHJpbmcsIHB1a2VzOiBzdHJpbmdbXX0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGFza1BsYXllcixcbiAgICAgICAgICAgIHB1a2VzXG4gICAgICAgIH0gPSBkYXRhO1xuXG4gICAgICAgIC8vIOaOkuW6j1xuICAgICAgICBwdWtlcy5zb3J0KChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVQdWtlcyhbYV0sIFtiXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOiHquW3seWIneWni+WMlueahOaJi+eJjFxuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmluaXRQdWtlcyhwdWtlcyk7XG5cbiAgICAgICAgLy8g5a+55omL55qE54mM5Yid5aeL5YyW5LiA5LiLXG4gICAgICAgIGZvciAobGV0IHVzZXJJZCBpbiB0aGlzLl9yaXZhbCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh1c2VySWQpLmluaXRQdWtlcyhwdWtlcy5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5a+55bqU546p5a626L+b5YWl5Yiw5Y+r5Zyw5Li76Zi25q61XG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEoYXNrUGxheWVyKS5lbnRlckFza0xhbmRsb3JkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog546p5a625Y+r5Zyw5Li7XG4gICAgICovXG4gICAgcHJpdmF0ZSBfcGxheWVyQXNrTGFuZGxvcmQgPSAoZGF0YToge3BsYXllcjogc3RyaW5nLCBpc0FzazogYm9vbGVhbn0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgIGlzQXNrXG4gICAgICAgIH0gPSBkYXRhO1xuXG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEocGxheWVyKS5hc2tMYW5kbG9yZChpc0Fzayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl5oqi5Zyw5Li76Zi25q61XG4gICAgICovXG4gICAgcHJpdmF0ZSBfZW50ZXJHcmFiTGFuZGxvcmQgPSAoZGF0YToge2dyYWJQbGF5ZXI6IHN0cmluZ30pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGdyYWJQbGF5ZXJcbiAgICAgICAgfSA9IGRhdGE7XG5cbiAgICAgICAgLy8g5a+55bqU546p5a626L+b5YWl5Yiw5Y+r5Zyw5Li76Zi25q61XG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEoZ3JhYlBsYXllcikuZW50ZXJHcmFiTGFuZGxvcmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnjqnlrrbmiqLlnLDkuLtcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wbGF5ZXJHcmFiTGFuZGxvcmQgPSAoZGF0YToge3BsYXllcjogc3RyaW5nLCBpc0dyYWI6IGJvb2xlYW59KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICBpc0dyYWJcbiAgICAgICAgfSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShwbGF5ZXIpLmdyYWJMYW5kbG9yZChpc0dyYWIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+W8gOWni++8jOacjeWKoeWZqOS4i+WPkeWcsOS4u+aYr+iwge+8jOWcsOS4u+eahOaJkeWFi+S5n+S4i+WPkVxuICAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVTdGFydCA9IChkYXRhOiB7bGFuZGxvcmRQbGF5ZXI6IHN0cmluZywgbGFuZGxvcmRQdWtlczogc3RyaW5nW119KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBsYW5kbG9yZFBsYXllcixcbiAgICAgICAgICAgIGxhbmRsb3JkUHVrZXNcbiAgICAgICAgfSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVWRU5UX05BTUUuR0FNRV9TVEFSVCwgZGF0YSk7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh0aGlzLl9tYWluVWlkKS5nYW1lU3RhcnQobGFuZGxvcmRQbGF5ZXIgPT09IHRoaXMuX21haW5VaWQpO1xuXG4gICAgICAgIGZvciAobGV0IHVzZXJJZCBpbiB0aGlzLl9yaXZhbCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh1c2VySWQpLmdhbWVTdGFydChsYW5kbG9yZFBsYXllciA9PT0gdXNlcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEobGFuZGxvcmRQbGF5ZXIpLmVudGVyU2hvdFB1a2VzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FwcC51c2VyIS51aWQgPT09IGxhbmRsb3JkUGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmdldFB1a2VzKGxhbmRsb3JkUHVrZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShsYW5kbG9yZFBsYXllcikuZ2V0UHVrZXMobGFuZGxvcmRQdWtlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog546p5a625Ye654mMXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcGxheWVyUHVrZXMgPSAoZGF0YToge3BsYXllcjogc3RyaW5nLCBwdWtlczogc3RyaW5nW119KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICBwdWtlc1xuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICBpZiAocHVrZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5oiQ5Yqf5Ye654mM77yM6YKj5LmI5bCx6K6k5Li66L+Z5Liq54mM5piv5pyA5aSn55qE54mM5LqGXG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wUHVrZXMgPSBwdWtlcztcbiAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlc093bmVyID0gcGxheWVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShwbGF5ZXIpLnNob3RQdWtlcyhwdWtlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog546p5a626L+b5YWl5Ye654mM6Zi25q61XG4gICAgICovXG4gICAgcHJpdmF0ZSBfbG9vcFB1a2VzID0gKGRhdGE6IHtwbGF5ZXI6IHN0cmluZ30pID0+IHtcbiAgICAgICAgbGV0IHBsYXllciA9IGRhdGEucGxheWVyO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllciA9PT0gdGhpcy5fYXBwLnVzZXIhLnVpZCAmJlxuICAgICAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzT3duZXIgPT09IHRoaXMuX2FwcC51c2VyIS51aWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyDmu6HotrPov5nkuKrmnaHku7bvvIzlsLHmmK/lh7rniYzliLDkuoboh6rlt7HvvIzlubbkuJTmoYzpnaLkuIrmnIDlpKfnmoTniYzlsLHmmK/oh6rlt7HnmoRcbiAgICAgICAgICAgIC8vIOmCo+S5iOahjOmdouacgOWkp+eJjOWwseepuuaOieS6hu+8iOWboOS4uuebuOW9k+S6jumHjeaWsOWHuueJjOS6hu+8iVxuICAgICAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzID0gW107XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEocGxheWVyKS5lbnRlclNob3RQdWtlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+e7k+adn1xuICAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVPdmVyID0gKGRhdGE6IHtwbGF5ZXI6IHN0cmluZ30pID0+IHtcbiAgICAgICAgbGV0IHBsYXllciA9IGRhdGEucGxheWVyO1xuXG4gICAgICAgIHRoaXMuX3N0YWdlLm92ZXJNb2RhbC5zaG93KHBsYXllcik7XG5cbiAgICAgICAgZm9yIChsZXQgdXNlcklkIGluIHRoaXMuX3JpdmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHVzZXJJZCkuZ2FtZVJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygn5ri45oiP57uT5p2f77yM6IOc6ICF77yaJywgcGxheWVyKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX1Jvb21PcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fYXBwID0gb3B0aW9ucy5hcHA7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2t0b3BQdWtlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2t0b3BQdWtlcztcbiAgICB9XG5cbiAgICBnZXQgcm9vbUlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vbUlkO1xuICAgIH1cblxuICAgIHNob3coaW5mbzogaV9Sb29tU2hvd09wdGlvbnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+i/m+WFpeaIv+mXtCcpO1xuXG4gICAgICAgIHRoaXMuX21haW5VaWQgPSBpbmZvLm1haW5VaWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX21haW5VaWQgPT09IHRoaXMuX2FwcC51c2VyIS51aWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVUeXBlID0gR0FNRV9UWVBFLlBMQVk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lVHlwZSA9IEdBTUVfVFlQRS5XQVRDSDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Nob3coaW5mbyk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+emu+W8gOaIv+mXtCcpO1xuXG4gICAgICAgIHRoaXMuX2hpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh4blpIdcbiAgICAgKiBAcGFyYW0gaXNSZWFkeSBcbiAgICAgKi9cbiAgICByZWFkeShpc1JlYWR5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkucmVhZHkoaXNSZWFkeSk7XG5cbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsubm90aWZ5KHtcbiAgICAgICAgICAgIHJvdXRlOiAnUm9vbS5SZWFkeScsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgcmlkOiB0aGlzLl9yb29tSWQsXG4gICAgICAgICAgICAgICAgaXNSZWFkeTogaXNSZWFkeVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXRjb2RlICE9PSBSRVRfU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+WHhuWkh+W8guW4uCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpc1JlYWR5Pyflh4blpIcnOiflj5bmtojlh4blpIcnfeaIkOWKn2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj6vlnLDkuLtcbiAgICAgKiBAcGFyYW0gaXNBc2sgXG4gICAgICovXG4gICAgYXNrTGFuZGxvcmQoaXNBc2s6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh0aGlzLl9tYWluVWlkKS5hc2tMYW5kbG9yZChpc0Fzayk7XG5cbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsubm90aWZ5KHtcbiAgICAgICAgICAgIHJvdXRlOiAnUm9vbS5Bc2tMYW5kbG9yZCcsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgcmlkOiB0aGlzLl9yb29tSWQsXG4gICAgICAgICAgICAgICAgaXNBc2s6IGlzQXNrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJldGNvZGUgIT09IFJFVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5Y+r5Zyw5Li75byC5bi4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2lzQXNrPyflj6vlnLDkuLsnOifkuI3lj6vlnLDkuLsnfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiqLlnLDkuLtcbiAgICAgKiBAcGFyYW0gaXNHcmFiIFxuICAgICAqL1xuICAgIGdyYWJMYW5kbG9yZChpc0dyYWI6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh0aGlzLl9tYWluVWlkKS5ncmFiTGFuZGxvcmQoaXNHcmFiKTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5ub3RpZnkoe1xuICAgICAgICAgICAgcm91dGU6ICdSb29tLkdyYWJMYW5kbG9yZCcsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgcmlkOiB0aGlzLl9yb29tSWQsXG4gICAgICAgICAgICAgICAgaXNHcmFiOiBpc0dyYWJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmV0Y29kZSAhPT0gUkVUX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmiqLlnLDkuLvlvILluLgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aXNHcmFiPyfmiqLlnLDkuLsnOifkuI3miqLlnLDkuLsnfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnprvlvIDmiL/pl7RcbiAgICAgKi9cbiAgICBsZWF2ZVJvb20oKSB7XG4gICAgICAgIHRoaXMuX2FwcC5lbnRlckhhbGwoKTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5ub3RpZnkoe1xuICAgICAgICAgICAgcm91dGU6ICdIYWxsLkxlYXZlUm9vbScsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgcmlkOiB0aGlzLl9yb29tSWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmV0Y29kZSAhPT0gUkVUX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfnprvlvIDmiL/pl7TlvILluLgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+emu+W8gOaIv+mXtCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliKTmlq3pgInkuK3nmoTniYzvvIzog73lkKblh7pcbiAgICAgKiBAcGFyYW0gcHVrZXMgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2hlY2tQdWtlc0NhblNob3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwdWtlczogc3RyaW5nW10gPSB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmhhbmRQdWtlcy5nZXRDaG9vc2VQdWtlcygpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gY29tcGFyZVB1a2VzKHRoaXMuX2Rlc2t0b3BQdWtlcywgcHVrZXMpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmJ1dHRvbkNvbnRyb2wuY2FuU2hvdFB1a2VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmJ1dHRvbkNvbnRyb2wuY2FuTm90U2hvdFB1a2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh7rniYxcbiAgICAgKiBAcGFyYW0gY2hvb3NlIFxuICAgICAqL1xuICAgIHB1a2UoY2hvb3NlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBwdWtlczogc3RyaW5nW107XG5cbiAgICAgICAgaWYgKGNob29zZSkge1xuICAgICAgICAgICAgcHVrZXMgPSB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmhhbmRQdWtlcy5nZXRDaG9vc2VQdWtlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5pS+5byD5Ye654mMXG4gICAgICAgICAgICBwdWtlcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Ye654mMXG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuc2hvdFB1a2VzKHB1a2VzKTtcblxuICAgICAgICBpZiAodGhpcy5fYXBwLmRlYnVnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5ub3RpZnkoe1xuICAgICAgICAgICAgcm91dGU6ICdSb29tLlB1a2VzJyxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICByaWQ6IHRoaXMuX3Jvb21JZCxcbiAgICAgICAgICAgICAgICBwdWtlczogcHVrZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJldGNvZGUgIT09IFJFVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5Ye654mM5byC5bi4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflh7rniYzmiJDlip8nKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlcyA9IHB1a2VzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlc093bmVyID0gdGhpcy5fYXBwLnVzZXIhLnVpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uZmlybVJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgLy8g5by556qX6ZqQ6JePXG4gICAgICAgIHRoaXMuX3N0YWdlLm92ZXJNb2RhbC5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh0aGlzLl9tYWluVWlkKS5nYW1lUmVzZXQoKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRVZFTlRfTkFNRS5HQU1FX1JFU0VUKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb29tOyIsImludGVyZmFjZSBpX09wdGlvbnMge1xuICAgIHVpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn07XG5cbmNsYXNzIFVzZXIge1xuICAgIHByaXZhdGUgX3VpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfT3B0aW9ucykge1xuICAgICAgICB0aGlzLl91aWQgPSBvcHRpb25zLnVpZDtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgdWlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlkO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyIsImRlY2xhcmUgY29uc3QgTW9kdWxlOiBhbnk7XG5cbmV4cG9ydCBjb25zdCBSRVRfU1VDQ0VTUyA9IDEwMDAwO1xuXG5leHBvcnQgZW51bSBFVkVOVF9OQU1FIHtcbiAgICBST09NX1NIT1cgPSAnUm9vbVNob3cnLFxuICAgIFJPT01fSElERSA9ICdSb29tSGlkZScsXG5cbiAgICBQTEFZRVJfRU5URVJfUk9PTSA9ICdQbGF5ZXJFbnRlclJvb20nLFxuICAgIFBMQVlFUl9MRUFWRV9ST09NID0gJ1BsYXllckxlYXZlUm9vbScsXG4gICAgUExBWUVSX1JFQURZID0gJ1BsYXllclJlYWR5JyxcbiAgICBQTEFZRVJfRU5URVJfQVNLID0gJ1BsYXllckVudGVyQXNrJyxcbiAgICBQTEFZRVJfQVNLID0gJ1BsYXllckFzaycsXG4gICAgUExBWUVSX0VOVEVSX0dSQUIgPSAnUGxheWVyRW50ZXJHcmFiJyxcbiAgICBQTEFZRVJfR1JBQiA9ICdQbGF5ZXJHcmFiJyxcbiAgICBQTEFZRVJfRU5URVJfU0hPVCA9ICdQbGF5ZXJFbnRlclNob3QnLFxuICAgIFBMQVlFUl9TSE9UID0gJ1BsYXllclNob3QnLFxuICAgIFxuICAgIEdBTUVfU1RBUlQgPSAnR2FtZVN0YXJ0JyxcbiAgICBHQU1FX09WRVIgPSAnR2FtZU92ZXInLFxuICAgIEdBTUVfUkVTRVQgPSAnR0FNRVJlc2V0J1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQdWtlcyhwdWtlc0E6IHN0cmluZ1tdLCBwdWtlc0I6IHN0cmluZ1tdKSB7XG4gICAgLy8g5pWw57uE55qE5YaF5a2Y5YWI55Sz6K+35LqGXG4gICAgbGV0IHB0ckEgPSBNb2R1bGUuX21hbGxvYyg0ICogcHVrZXNBLmxlbmd0aCk7XG4gICAgbGV0IHB0ckIgPSBNb2R1bGUuX21hbGxvYyg0ICogcHVrZXNCLmxlbmd0aCk7XG4gICAgbGV0IGNwcFB1a2VzQTogYW55W10gPSBbXTtcbiAgICBsZXQgY3BwUHVrZXNCOiBhbnlbXSA9IFtdO1xuXG4gICAgLy8g55Sf5oiQ5omR5YWL54mMXG4gICAgcHVrZXNBLmZvckVhY2goKHB1a2VBOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgaW5mb0EgPSBwdWtlQS5zcGxpdCgnLScpO1xuICAgICAgICBjcHBQdWtlc0EucHVzaChcbiAgICAgICAgICAgIG5ldyBNb2R1bGUuSlNQdWtlKCtpbmZvQVswXSwgK2luZm9BWzFdKVxuICAgICAgICApO1xuXG4gICAgICAgIE1vZHVsZS5IRUFQMzJbKHB0ckEgPj4gMikgKyBpXSA9IGNwcFB1a2VzQVtpXS5wdHI7XG4gICAgfSk7XG5cbiAgICBwdWtlc0IuZm9yRWFjaCgocHVrZUI6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBpbmZvQiA9IHB1a2VCLnNwbGl0KCctJyk7XG4gICAgICAgIGNwcFB1a2VzQi5wdXNoKFxuICAgICAgICAgICAgbmV3IE1vZHVsZS5KU1B1a2UoK2luZm9CWzBdLCAraW5mb0JbMV0pXG4gICAgICAgICk7XG5cbiAgICAgICAgTW9kdWxlLkhFQVAzMlsocHRyQiA+PiAyKSArIGldID0gY3BwUHVrZXNCW2ldLnB0cjtcbiAgICB9KTtcblxuICAgIC8vIOW8gOWni+WIpOaWreWkp+Wwj1xuICAgIGxldCByZXN1bHQgPSBNb2R1bGUuX2NvbXBhcmVQdWtlcyhwdHJBLCBjcHBQdWtlc0EubGVuZ3RoLCBwdHJCLCBjcHBQdWtlc0IubGVuZ3RoKTtcblxuICAgIE1vZHVsZS5fZnJlZShwdHJBKTtcbiAgICBNb2R1bGUuX2ZyZWUocHRyQik7XG5cbiAgICBpZiAocmVzdWx0ID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IC0xO1xuICAgIH1cblxuICAgIC8vIOaekOaehFxuICAgIGNwcFB1a2VzQS5mb3JFYWNoKChjcHBQdWtlKSA9PiB7XG4gICAgICAgIGNwcFB1a2UuUmVsZWFzZSgpO1xuICAgIH0pO1xuXG4gICAgY3BwUHVrZXNCLmZvckVhY2goKGNwcFB1a2UpID0+IHtcbiAgICAgICAgY3BwUHVrZS5SZWxlYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm46IEZ1bmN0aW9uLCB3YWl0OiBudW1iZXIpIHtcbiAgICBsZXQgdGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH0sIHdhaXQpO1xuICAgIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==