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
        let a = this.a;
        let b = this.b;
        let c = this.c;
        let d = this.d;
        let tx = this.tx;
        let ty = this.ty;
        if (b == 0 && c == 0) {
            target.b = target.c = 0;
            if (a == 0 || d == 0) {
                target.a = target.d = target.tx = target.ty = 0;
            }
            else {
                a = target.a = 1 / a;
                d = target.d = 1 / d;
                target.tx = -a * tx;
                target.ty = -d * ty;
            }
            return;
        }
        let determinant = a * d - b * c;
        if (determinant == 0) {
            target.reset();
            return;
        }
        determinant = 1 / determinant;
        let k = target.a = d * determinant;
        b = target.b = -b * determinant;
        c = target.c = -c * determinant;
        d = target.d = a * determinant;
        target.tx = -(k * tx + c * ty);
        target.ty = -(b * tx + d * ty);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QdWtlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9QdWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1B1a2UvLi9zcmMvQXBwLmNzcyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2hhbGwvSGFsbC5jc3MiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yb29tL1Jvb20uY3NzIiwid2VicGFjazovL1B1a2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1B1a2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vUHVrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9BcHAuY3NzPzJlMTQiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvYXJlYS9wbGF5ZXItYXJlYS9MZWZ0UGxheWVyQXJlYS50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9hcmVhL3BsYXllci1hcmVhL01haW5QbGF5ZXJBcmVhLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvcGxheWVyLWFyZWEvUmlnaHRQbGF5ZXJBcmVhLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvcGxheWVyLWFyZWEvU2lkZVBsYXllckFyZWEudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvYXJlYS90b3AtYXJlYS9CYWNrQnV0dG9uLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvdG9wLWFyZWEvTGFuZGxvcmRQdWtlcy50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9hcmVhL3RvcC1hcmVhL1Jvb21JbmZvLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2FyZWEvdG9wLWFyZWEvVG9wQXJlYS50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9idXR0b24vQnV0dG9uQ29udHJvbC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L2Rlc2t0b3AvRGVza3RvcC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9kZXNrdG9wL0Rlc2t0b3BQdWtlcy50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2NvbXBvbmVudC9kZXNrdG9wL0Rlc2t0b3BUZXh0LnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L21vZGFsL01vZGVsLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L3BsYXllci9BdmF0YXIudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcGxheWVyL05hbWUudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcHVrZXMvQmFzZVB1a2UudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcHVrZXMvQmFzZVB1a2VzQ29udGFpbmVyLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvY29tcG9uZW50L3B1a2VzL01haW5IYW5kUHVrZXMudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9jb21wb25lbnQvcHVrZXMvU2lkZUhhbmRQdWtlcy50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2hhbGwvSGFsbC5jc3M/Y2MxMSIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2hhbGwvSGFsbC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvbmV0d29yay9OZXR3b3JrLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcmVuZGVyL0JpdG1hcC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL3JlbmRlci9Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvRGlzcGxheU9iamVjdC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL3JlbmRlci9FdmVudERpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvUmVzb3VyY2VNYW5hZ2UudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvVGV4dC50cyIsIndlYnBhY2s6Ly9QdWtlLy4vc3JjL3JlbmRlci9iYXNlL01hdHJpeDJELnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcmVuZGVyL2Jhc2UvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vUHVrZS8uL3NyYy9yZW5kZXIvYmFzZS9SZWN0LnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcmVuZGVyL3BvbHlmaWxsLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvcm9vbS9Sb29tLmNzcz81OTBjIiwid2VicGFjazovL1B1a2UvLi9zcmMvcm9vbS9Sb29tLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvdXNlci9Vc2VyLnRzIiwid2VicGFjazovL1B1a2UvLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtC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SyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBQyxFQUFZLEVBQUUsSUFBWTtJQUMvQyxJQUFJLEtBQUssR0FBa0IsSUFBSSxDQUFDO0lBQ2hDLE9BQU87UUFDSCxhQUFhO1FBQ2IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNyQixJQUFJLEtBQUssRUFBRTtZQUNQLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO1FBQ0QsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQztBQUNOLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJQdWtlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlB1a2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUHVrZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleC1ib3gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbmRleC1yZXNvdXJjZS1wcm9ncmVzcyB7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhNGZjO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLmluZGV4LXN0YXJ0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA3MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzVweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2E0ZmM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oYWxsLWJveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhhbGwtY3JlYXRlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgdG9wOiA3MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzVweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2E0ZmM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5oYWxsLXJpZC1pbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFjYTRmYztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgbGVmdDogNzUlO1xcbiAgICB0b3A6IDcwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1cHgsIC01MHB4KTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5oYWxsLWVudGVyLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDc1JTtcXG4gICAgdG9wOiA3MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzVweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2E0ZmM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yb29tLWJveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXIvVXNlclwiO1xuaW1wb3J0IE5ldHdvcmsgZnJvbSBcIi4vbmV0d29yay9OZXR3b3JrXCI7XG5pbXBvcnQgUm9vbSBmcm9tIFwiLi9yb29tL1Jvb21cIjtcbmltcG9ydCBIYWxsIGZyb20gXCIuL2hhbGwvSGFsbFwiO1xuaW1wb3J0IHsgUkVUX1NVQ0NFU1MgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IFJlc291cmNlQ29uZmlnIGZyb20gXCIuL3Jlc291cmNlLmpzb25cIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi9yZW5kZXIvUmVzb3VyY2VNYW5hZ2VcIjtcblxuaW50ZXJmYWNlIGlfQXBwT3B0aW9ucyB7XG4gICAgcm9vdDogSFRNTERpdkVsZW1lbnQ7XG59XG5cbmNsYXNzIEFwcCB7XG4gICAgLy8g55So5oi35L+h5oGvXG4gICAgcHJpdmF0ZSBfdXNlcj86IFVzZXI7XG4gICAgLy8g572R57ucXG4gICAgcHVibGljIG5ldHdvcms6IE5ldHdvcms7XG4gICAgLy8g5pyA5aSW5bGC5a655ZmoXG4gICAgcHJpdmF0ZSBfcm9vdDogSFRNTERpdkVsZW1lbnQ7XG4gICAgLy8g5aSn5Y6FXG4gICAgcHJpdmF0ZSBfaGFsbCE6IEhhbGw7XG4gICAgLy8g5oi/6Ze0XG4gICAgcHJpdmF0ZSBfcm9vbSE6IFJvb207XG5cbiAgICAvLyDpppbpobXpnIDopoFkb23nmoTlrrnlmahcbiAgICBwcml2YXRlIF9ib3ghOiBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyDotYTmupDliqDovb3ov5vluqbmnaFcbiAgICBwcml2YXRlIF9yZXNvdXJjZVByb2dyZXNzITogSFRNTERpdkVsZW1lbnQ7XG4gICAgLy8g5byA5aeL5oyJ6ZKuXG4gICAgcHJpdmF0ZSBfc3RhcnRCdXR0b24hOiBIVE1MRGl2RWxlbWVudDtcbiAgICBcbiAgICBwdWJsaWMgZGVidWdnZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMllxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VQcm9ncmVzcy5jbGFzc05hbWUgPSAnaW5kZXgtcmVzb3VyY2UtcHJvZ3Jlc3MnO1xuXG4gICAgICAgIHRoaXMuX3N0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3N0YXJ0QnV0dG9uLmNsYXNzTmFtZSA9ICdpbmRleC1zdGFydC1idXR0b24nO1xuICAgICAgICB0aGlzLl9zdGFydEJ1dHRvbi5pbm5lclRleHQgPSAn5b+r6YCf5byA5aeLJztcbiAgICAgICAgdGhpcy5fc3RhcnRCdXR0b24ub25jbGljayA9IHRoaXMuX3N0YXJ0O1xuXG4gICAgICAgIHRoaXMuX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9ib3guY2xhc3NOYW1lID0gJ2luZGV4LWJveCc7XG5cbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3Jlc291cmNlUHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fc3RhcnRCdXR0b24pO1xuXG4gICAgICAgIHRoaXMuX3Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5fYm94KTtcblxuICAgICAgICAvLyDlvIDlp4vliqDovb3otYTmupBcbiAgICAgICAgUmVzb3VyY2VNYW5hZ2UubG9hZChSZXNvdXJjZUNvbmZpZyk7XG5cbiAgICAgICAgLy8g6L+b5bqm5p2hXG4gICAgICAgIFJlc291cmNlTWFuYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ29uUHJvZ3Jlc3MnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvdXJjZVByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7MTAwICogUmVzb3VyY2VNYW5hZ2UuY29tcGxldGVkIC8gUmVzb3VyY2VNYW5hZ2UudG90YWx9JWA7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhSZXNvdXJjZU1hbmFnZS50b3RhbCwgUmVzb3VyY2VNYW5hZ2UuY29tcGxldGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5Yqg6L295a6M5q+V77yM44CM5byA5aeL5ri45oiP5oyJ6ZKu5bGV56S644CNXG4gICAgICAgIFJlc291cmNlTWFuYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ29uQ29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV56S6XG4gICAgICovXG4gICAgcHJpdmF0ZSAgX3N0YXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLl9ib3gucmVtb3ZlQ2hpbGQodGhpcy5fc3RhcnRCdXR0b24pO1xuXG4gICAgICAgIGxldCB1aWQgPSBTdHJpbmcoRGF0ZS5ub3coKSAlIDEwMDApO1xuICAgICAgICBsZXQgbmFtZSA9IHVpZDtcblxuICAgICAgICB0aGlzLl91c2VyID0gbmV3IFVzZXIoe1xuICAgICAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdEdhbWUoKTtcblxuICAgICAgICB0aGlzLl9ib3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICB0aGlzLmVudGVySGFsbCgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfQXBwT3B0aW9ucykge1xuICAgICAgICB0aGlzLl9yb290ID0gb3B0aW9ucy5yb290O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXR3b3JrID0gbmV3IE5ldHdvcmsoe1xuICAgICAgICAgICAgaG9zdDogJzEwLjY2LjEyMS40MScsXG4gICAgICAgICAgICBwb3J0OiA3OTk5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICBnZXQgcm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyO1xuICAgIH1cblxuICAgIGdldCBoYWxsKCk6IEhhbGwge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFsbDtcbiAgICB9XG5cbiAgICBnZXQgcm9vbSgpOiBSb29tIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5ri45oiP77yM566A5Y6Gd2Vic29ja2V06L+e5o6lXG4gICAgICovXG4gICAgYXN5bmMgaW5pdEdhbWUoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubmV0d29yay5pbml0KCk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gYXdhaXQgdGhpcy5sb2dpbih0aGlzLl91c2VyIS51aWQsIHRoaXMuX3VzZXIhLm5hbWUpO1xuICAgIFxuICAgICAgICBpZiAocmVzdWx0LnJldGNvZGUgPT09IFJFVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5oiQ5YqfOiAnLCByZXN1bHQpO1xuXG4gICAgICAgICAgICB0aGlzLmVudGVySGFsbCgpOyAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+eZu+W9leW8guW4uCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW50ZXJIYWxsKCkge1xuICAgICAgICBpZiAodGhpcy5fcm9vbSkge1xuICAgICAgICAgICAgdGhpcy5fcm9vbS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hhbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbGwgPSBuZXcgSGFsbCh7XG4gICAgICAgICAgICAgICAgYXBwOiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hhbGwuc2hvdygpO1xuICAgIH1cblxuICAgIGVudGVyUm9vbShyb29tSW5mbzogYW55KSB7XG4gICAgICAgIHRoaXMuX2hhbGwuaGlkZSgpO1xuXG4gICAgICAgIHJvb21JbmZvLm1haW5VaWQgPSB0aGlzLl91c2VyIS51aWQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9yb29tKSB7XG4gICAgICAgICAgICB0aGlzLl9yb29tID0gbmV3IFJvb20oe1xuICAgICAgICAgICAgICAgIGFwcDogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yb29tLnNob3cocm9vbUluZm8pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeZu+W9lVxuICAgICAqIEBwYXJhbSB1aWQgXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICovXG4gICAgYXN5bmMgbG9naW4odWlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXR3b3JrLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgcm91dGU6ICdHYW1lLkVudGVyR2FtZScsXG4gICAgICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9yZW5kZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9BcHBcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi91c2VyL1VzZXJcIjtcbmltcG9ydCBSaWdodFBsYXllckFyZWEgZnJvbSBcIi4vYXJlYS9wbGF5ZXItYXJlYS9SaWdodFBsYXllckFyZWFcIjtcbmltcG9ydCBMZWZ0UGxheWVyQXJlYSBmcm9tIFwiLi9hcmVhL3BsYXllci1hcmVhL0xlZnRQbGF5ZXJBcmVhXCI7XG5pbXBvcnQgeyBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIH0gZnJvbSBcIi4uL3JlbmRlci9EaXNwbGF5T2JqZWN0XCI7XG5pbXBvcnQgVG9wQXJlYSBmcm9tIFwiLi9hcmVhL3RvcC1hcmVhL1RvcEFyZWFcIjtcbmltcG9ydCBNYWluUGxheWVyQXJlYSBmcm9tIFwiLi9hcmVhL3BsYXllci1hcmVhL01haW5QbGF5ZXJBcmVhXCI7XG5pbXBvcnQgT3Zlck1vZGFsIGZyb20gXCIuL21vZGFsL01vZGVsXCI7XG5cbnR5cGUgaV9TdGFnZU9wdGlvbnMgPSBpX0Rpc3BsYXlPYmplY3RPcHRpb25zICYge1xuICAgIGFwcDogQXBwLFxuICAgIG9mZnNldFg6IG51bWJlcixcbiAgICBvZmZzZXRZOiBudW1iZXIsXG5cbn07XG5cbmV4cG9ydCBlbnVtIFBMQVlFUl9QT1NJVElPTiB7XG4gICAgTUFJTixcbiAgICBSSUdIVCxcbiAgICBMRUZUXG59O1xuXG5jbGFzcyBTdGFnZSBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBfYXBwOiBBcHA7XG4gICAgLy8gY2FudmFz6Iie5Y+wXG4gICAgcHJpdmF0ZSBfY2FudmFzITogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgLy8gY2FudmFz5LiK5LiL5paHXG4gICAgcHJpdmF0ZSBfY3R4ITogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIC8vIOiInuWPsOebuOWvueWxj+W5leeahOWBj+enu++8iOm7kei+ueeahOWkp+Wwj++8iVxuICAgIHByaXZhdGUgX29mZnNldFghOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfb2Zmc2V0WSE6IG51bWJlcjtcbiAgICAvLyDnjqnlrrbnmoTljLrln59cbiAgICBwcml2YXRlIF9wbGF5ZXJBcmVhOiBhbnkgPSB7fTtcbiAgICAvLyDpobbpg6jnmoTljLrln59cbiAgICBwcml2YXRlIF90b3BBcmVhITogVG9wQXJlYTtcbiAgICAvLyDmuLjmiI/nu5PmnZ/nmoTlvLnnqpfmj5DnpLpcbiAgICBwcml2YXRlIF9vdmVyTW9kYWwhOiBPdmVyTW9kYWw7XG4gICAgLy8g5riy5p+T55qE5a6a5pe25ZmoXG4gICAgcHJpdmF0ZSBfdGljazogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlmNhbnZhc+ebuOWFs1xuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRDYW52YXMoKSB7XG4gICAgICAgIGxldCBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBsZXQgY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgLy8gbGV0IHJlY3QgPSB0aGlzLl9yZXNvbHZlU2NyZWVuKHRoaXMuX2FwcC5yb290Lm9mZnNldFdpZHRoLCB0aGlzLl9hcHAucm9vdC5vZmZzZXRIZWlnaHQpO1xuICAgICAgICAvLyDlvIDlp4vov5vooYznvKnmlL7lsY/luZXpgILphY3nmoTpl67pophcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5fd2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XG5cbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnJyArIE1hdGgucm91bmQod2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKSk7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcnICsgTWF0aC5yb3VuZChoZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSk7XG4gICAgICAgIFxuICAgICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5fY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuX2N0eC5zY2FsZShkZXZpY2VQaXhlbFJhdGlvLCBkZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgdGhpcy5fY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgdGhpcy5fY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICAvLyB0aGlzLl9jYW52YXMuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ2xlZnQgdG9wJztcbiAgICAgICAgLy8gdGhpcy5fY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aGVpZ2h0fXB4KSByb3RhdGUoOTBkZWcpYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpobbpg6jljLrln5/lronmjpLkuIDkuItcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hZGRUb3BBcmVhKCkge1xuICAgICAgICBsZXQgdG9wQXJlYSA9IG5ldyBUb3BBcmVhKHRoaXMuX2FwcCwge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdG9wQXJlYSA9IHRvcEFyZWE7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odG9wQXJlYSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5by556qX5a6J5o6S5LiA5LiLXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYWRkTW9kYWwoKSB7XG4gICAgICAgIGxldCBvdmVyTW9kYWwgPSBuZXcgT3Zlck1vZGFsKHRoaXMuX2FwcCwge1xuICAgICAgICAgICAgd2lkdGg6IDI4MCxcbiAgICAgICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICAgICAgdG9wOiAxMjAsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5fd2lkdGggLSAyODApIC8gMlxuICAgICAgICB9KTtcbiAgICAgICAgb3Zlck1vZGFsLmhpZGUoKTtcblxuICAgICAgICB0aGlzLl9vdmVyTW9kYWwgPSBvdmVyTW9kYWw7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4ob3Zlck1vZGFsLCAxMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe7keWumuS6pOS6kuS6i+S7tlxuICAgICAqL1xuICAgIHByaXZhdGUgX2FkZFRvdWNoTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fdG91Y2hzdGFydCk7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX3RvdWNobW92ZSk7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fdG91Y2hlbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOino+e7keS6pOS6kuS6i+S7tlxuICAgICAqL1xuICAgIHByaXZhdGUgX3JlbW92ZVRvdWNoTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fdG91Y2hzdGFydCk7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX3RvdWNobW92ZSk7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fdG91Y2hlbmQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvdWNoc3RhcnQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGxldCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmhlaWdodCAtIHRoaXMuX29mZnNldFggLSB0b3VjaC5jbGllbnRYO1xuICAgICAgICBsZXQgeCA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLl9vZmZzZXRZO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndG91Y2hzdGFydCcsIHtcbiAgICAgICAgICAgIHgsIHlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG91Y2htb3ZlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBsZXQgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgIGxldCB5ID0gdGhpcy5oZWlnaHQgLSB0aGlzLl9vZmZzZXRYIC0gdG91Y2guY2xpZW50WDtcbiAgICAgICAgbGV0IHggPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5fb2Zmc2V0WTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3RvdWNobW92ZScsIHtcbiAgICAgICAgICAgIHgsIHlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG91Y2hlbmQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndG91Y2hlbmQnKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX1N0YWdlT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBvcHRpb25zLmFwcDtcblxuICAgICAgICB0aGlzLl9vZmZzZXRYID0gb3B0aW9ucy5vZmZzZXRYO1xuICAgICAgICB0aGlzLl9vZmZzZXRZID0gb3B0aW9ucy5vZmZzZXRZO1xuXG4gICAgICAgIHRoaXMuX2luaXRDYW52YXMoKTtcblxuICAgICAgICB0aGlzLl9hZGRUb3BBcmVhKCk7XG5cbiAgICAgICAgdGhpcy5fYWRkTW9kYWwoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGdldCBjYW52YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7XG4gICAgfVxuXG4gICAgZ2V0IHRvcEFyZWEoKTogVG9wQXJlYSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3BBcmVhO1xuICAgIH1cblxuICAgIGdldCBvdmVyTW9kYWwoKTogT3Zlck1vZGFsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJNb2RhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflvpflr7nlupTnmoTnjqnlrrbljLrln59cbiAgICAgKiBAcGFyYW0gaWQgXG4gICAgICovXG4gICAgZ2V0UGxheWVyQXJlYShpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJBcmVhW2lkXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmnInlhbbku5bnjqnlrrbliqDlhaVcbiAgICAgKiBAcGFyYW0gdXNlciBcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gXG4gICAgICovXG4gICAgYWRkUGxheWVyKHVzZXI6IFVzZXIsIHBvc2l0aW9uOiBQTEFZRVJfUE9TSVRJT04pIHtcbiAgICAgICAgbGV0IHBsYXllckFyZWE7XG5cbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSBQTEFZRVJfUE9TSVRJT04uUklHSFQ6XG4gICAgICAgICAgICAgICAgcGxheWVyQXJlYSA9IG5ldyBSaWdodFBsYXllckFyZWEodGhpcy5fYXBwLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoIC8gMyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMud2lkdGggLyAyICsgMTAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBMQVlFUl9QT1NJVElPTi5MRUZUOlxuICAgICAgICAgICAgICAgIHBsYXllckFyZWEgPSBuZXcgTGVmdFBsYXllckFyZWEodGhpcy5fYXBwLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoIC8gMyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjUsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBMQVlFUl9QT1NJVElPTi5NQUlOOlxuICAgICAgICAgICAgICAgIHBsYXllckFyZWEgPSBuZXcgTWFpblBsYXllckFyZWEodGhpcy5fYXBwLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4Ny41LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDE4Ny41LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAnaW52YWxpZCBwb3NpdGlvbic7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wbGF5ZXJBcmVhW3VzZXIudWlkXSA9IHBsYXllckFyZWE7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4ocGxheWVyQXJlYSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog546p5a6256a75byAXG4gICAgICogQHBhcmFtIHVzZXJJZCBcbiAgICAgKi9cbiAgICByZW1vdmVQbGF5ZXIodXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZHJlbih0aGlzLl9wbGF5ZXJBcmVhW3VzZXJJZF0pO1xuICAgICAgICBkZWxldGUgdGhpcy5fcGxheWVyQXJlYVt1c2VySWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleekunN0YWdlXG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIHRoaXMuX2FkZFRvdWNoTGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmakOiXj3N0YWdlXG4gICAgICovXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4suafk1xuICAgICAqL1xuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcblxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmRpc3BsYXkgJiYgaXRlbS5yZW5kZXIodGhpcy5fY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdGljayA9IHNldFRpbWVvdXQodGhpcy5yZW5kZXIsIDYwKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFnZTsiLCJpbXBvcnQgQXZhdGFyIGZyb20gXCIuLi8uLi9wbGF5ZXIvQXZhdGFyXCI7XG5pbXBvcnQgTmFtZSBmcm9tIFwiLi4vLi4vcGxheWVyL05hbWVcIjtcbmltcG9ydCBTaWRlUGxheWVyQXJlYSwgeyBpX1NpZGVQbGF5ZXJBcmVhT3B0aW9ucyB9IGZyb20gXCIuL1NpZGVQbGF5ZXJBcmVhXCI7XG5pbXBvcnQgU2lkZUhhbmRQdWtlcyBmcm9tIFwiLi4vLi4vcHVrZXMvU2lkZUhhbmRQdWtlc1wiO1xuaW1wb3J0IERlc2t0b3AgZnJvbSBcIi4uLy4uL2Rlc2t0b3AvRGVza3RvcFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vQXBwXCI7XG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2UgZnJvbSBcIi4uLy4uLy4uL3JlbmRlci9SZXNvdXJjZU1hbmFnZVwiO1xuXG5jbGFzcyBMZWZ0UGxheWVyQXJlYSBleHRlbmRzIFNpZGVQbGF5ZXJBcmVhIHtcbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblpLTlg49cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0QXZhdGFyKCkge1xuICAgICAgICB0aGlzLl9hdmF0YXIgPSBuZXcgQXZhdGFyKHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGltYWdlOiBSZXNvdXJjZU1hbmFnZS5nZXQoJ0FWQVRBUicpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fYXZhdGFyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblkI3np7BcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5ldyBOYW1lKHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0ZXh0OiBuYW1lLFxuICAgICAgICAgICAgc2l6ZTogMThcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmiYvniYxcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0SGFuZFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMgPSBuZXcgU2lkZUhhbmRQdWtlcyh0aGlzLl9hcHAsIHtcbiAgICAgICAgICAgIHB1a2VXaWR0aDogMjAsXG4gICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgIGxlZnQ6IDEwMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9oYW5kUHVrZXMpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIF9pbml0RGVza3RvcFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wID0gbmV3IERlc2t0b3Aoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGggLSAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDEwMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9kZXNrdG9wKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9TaWRlUGxheWVyQXJlYU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoYXBwLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9pbml0QXZhdGFyKCk7XG4gICAgICAgIHRoaXMuX2luaXROYW1lKG9wdGlvbnMudXNlci5uYW1lKTtcbiAgICAgICAgdGhpcy5faW5pdEhhbmRQdWtlcygpO1xuICAgICAgICB0aGlzLl9pbml0RGVza3RvcFB1a2VzKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVmdFBsYXllckFyZWE7IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vLi4vcmVuZGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vLi4vcGxheWVyL0F2YXRhclwiO1xuaW1wb3J0IE5hbWUgZnJvbSBcIi4uLy4uL3BsYXllci9OYW1lXCI7XG5pbXBvcnQgTWFpbkhhbmRQdWtlcyBmcm9tIFwiLi4vLi4vcHVrZXMvTWFpbkhhbmRQdWtlc1wiO1xuaW1wb3J0IHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9yZW5kZXIvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vQXBwXCI7XG5pbXBvcnQgQnV0dG9uQ29udHJvbCBmcm9tIFwiLi4vLi4vYnV0dG9uL0J1dHRvbkNvbnRyb2xcIjtcbmltcG9ydCBEZXNrdG9wIGZyb20gXCIuLi8uLi9kZXNrdG9wL0Rlc2t0b3BcIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi4vLi4vLi4vcmVuZGVyL1Jlc291cmNlTWFuYWdlXCI7XG5cbmNsYXNzIE1haW5QbGF5ZXJBcmVhIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIF9hcHAhOiBBcHA7XG5cbiAgICBwcml2YXRlIF9hdmF0YXIhOiBBdmF0YXI7XG5cbiAgICBwcml2YXRlIF9uYW1lITogTmFtZTtcblxuICAgIHByaXZhdGUgX2hhbmRQdWtlcyE6IE1haW5IYW5kUHVrZXM7XG5cbiAgICBwcml2YXRlIF9idXR0b25Db250cm9sITogQnV0dG9uQ29udHJvbDtcblxuICAgIHByaXZhdGUgX2Rlc2t0b3AhOiBEZXNrdG9wO1xuXG4gICAgcHJpdmF0ZSBfdXNlcklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblpLTlg49cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0QXZhdGFyKCkge1xuICAgICAgICB0aGlzLl9hdmF0YXIgPSBuZXcgQXZhdGFyKHtcbiAgICAgICAgICAgIHRvcDogNjIuNSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIGltYWdlOiBSZXNvdXJjZU1hbmFnZS5nZXQoJ0FWQVRBUicpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fYXZhdGFyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblkI3np7BcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5ldyBOYW1lKHtcbiAgICAgICAgICAgIHRvcDogMTYyLjUsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHRleHQ6IG5hbWUsXG4gICAgICAgICAgICBzaXplOiAxOFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX25hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJi+eJjFxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRIYW5kUHVrZXMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcyA9IG5ldyBNYWluSGFuZFB1a2VzKHRoaXMuX2FwcCwge1xuICAgICAgICAgICAgcHVrZVdpZHRoOiA3MCxcbiAgICAgICAgICAgIGludGVydmFsOiA1MCxcbiAgICAgICAgICAgIHRvcDogNjIuNSArIDI1IC8gMixcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5faGFuZFB1a2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmjInpkq5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0QnV0dG9uQ29udHJvbCgpIHtcbiAgICAgICAgdGhpcy5fYnV0dG9uQ29udHJvbCA9IG5ldyBCdXR0b25Db250cm9sKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogNjIuNSxcbiAgICAgICAgICAgIGFwcDogdGhpcy5fYXBwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fYnV0dG9uQ29udHJvbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdERlc2t0b3AoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AgPSBuZXcgRGVza3RvcCh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IDYyLjUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fZGVza3RvcCk7XG5cbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIG9wdGlvbnM6IGlfRGlzcGxheU9iamVjdE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fYXBwID0gYXBwO1xuICAgICAgICB0aGlzLl91c2VySWQgPSB0aGlzLl9hcHAudXNlciEudWlkO1xuXG4gICAgICAgIHRoaXMuX2luaXRBdmF0YXIoKTtcbiAgICAgICAgdGhpcy5faW5pdE5hbWUodGhpcy5fYXBwLnVzZXIhLm5hbWUpO1xuICAgICAgICB0aGlzLl9pbml0SGFuZFB1a2VzKCk7XG4gICAgICAgIHRoaXMuX2luaXRCdXR0b25Db250cm9sKCk7XG4gICAgICAgIHRoaXMuX2luaXREZXNrdG9wKCk7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgICB9XG5cbiAgICBnZXQgaGFuZFB1a2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZFB1a2VzO1xuICAgIH1cblxuICAgIGdldCBidXR0b25Db250cm9sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnV0dG9uQ29udHJvbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8g5qGM6Z2i6ZqQ6JePXG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuICAgICAgICAvLyDmiYvniYzpmpDol49cbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh4blpIdcbiAgICAgKiBAcGFyYW0gaXNSZWFkeSBcbiAgICAgKi9cbiAgICByZWFkeShpc1JlYWR5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0gJHtpc1JlYWR5Pyflh4blpIcnOiflj5bmtojlh4blpIcnfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJi+eJjO+8jOacieWKqOeUu1xuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBpbml0UHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHRpbWUgPSAyMDA7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLmhpZGUoKTtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnNob3coKTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRQdWtlKCkge1xuICAgICAgICAgICAgaWYgKHB1a2VzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX2hhbmRQdWtlcy5wb3N0UHVrZXMoW3B1a2VzW2ldXSk7XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgc2V0VGltZW91dChnZXRQdWtlLCB0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFB1a2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflvpfmlrDnmoTniYzvvIzml6DliqjnlLtcbiAgICAgKiBAcGFyYW0gcHVrZXMgXG4gICAgICovXG4gICAgZ2V0UHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5wb3N0UHVrZXMocHVrZXMsIHRydWUpO1xuICAgICAgICB0aGlzLl9oYW5kUHVrZXMuY2hvb3NlUHVrZXMocHVrZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+ihjOWPq+WcsOS4u1xuICAgICAqL1xuICAgIGVudGVyQXNrTGFuZGxvcmQoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLnNob3coKTtcblxuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLmVudGVyQXNrTGFuZGxvcmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vooYzmiqLlnLDkuLtcbiAgICAgKi9cbiAgICBlbnRlckdyYWJMYW5kbG9yZCgpIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuc2hvdygpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fYnV0dG9uQ29udHJvbC5lbnRlckdyYWJMYW5kbG9yZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+W8gOWni1xuICAgICAqIEBwYXJhbSBpc0xhbmRsb3JkIOaYr+WQpuaYr+WcsOS4u1xuICAgICAqL1xuICAgIGdhbWVTdGFydChpc0xhbmRsb3JkOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc0xhbmRsb3JkKSB7XG4gICAgICAgICAgICB0aGlzLl9hdmF0YXIuYmVMYW5kbG9yZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPq+WcsOS4u1xuICAgICAqIEBwYXJhbSBpc0FzayBcbiAgICAgKi9cbiAgICBhc2tMYW5kbG9yZChpc0FzazogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLmhpZGUoKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5fZGVza3RvcC5hc2tMYW5kbG9yZChpc0Fzayk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fdXNlcklkfSAke2lzQXNrPyflj6vlnLDkuLsnOifkuI3lj6vlnLDkuLsnfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaKouWcsOS4u1xuICAgICAqIEBwYXJhbSBpc0dyYWIgXG4gICAgICovXG4gICAgZ3JhYkxhbmRsb3JkKGlzR3JhYjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLmhpZGUoKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5fZGVza3RvcC5ncmFiTGFuZGxvcmQoaXNHcmFiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl91c2VySWR9ICR7aXNHcmFiPyfmiqLlnLDkuLsnOifkuI3miqLlnLDkuLsnfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHuueJjFxuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBzaG90UHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0g5Ye654mMICR7cHVrZXN9YCk7XG5cbiAgICAgICAgLy8g5omL54mM5Ye65o6JXG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5zaG90Q2hvb3NlUHVrZXMoKTtcbiAgICAgICAgLy8g5oyJ6ZKu6ZqQ6JePXG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuaGlkZSgpO1xuICAgICAgICAvLyDmoYzpnaLniYzlronmjpLkuItcbiAgICAgICAgdGhpcy5fZGVza3RvcC5zaG90UHVrZXMocHVrZXMpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vlhaXlh7rniYzpmLbmrrVcbiAgICAgKi9cbiAgICBlbnRlclNob3RQdWtlcygpIHtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5yZXNldCgpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcblxuICAgICAgICAvLyDlpoLmnpzmoYzpnaLkuIrmnIDlpKfnmoTniYzmmK/nqbrnmoTvvIzmhI/lkbPnnYDov5nmrKHvvIzkuLvop4bop5Lnjqnlrrblv4Xpobvlh7rniYxcbiAgICAgICAgdGhpcy5fYnV0dG9uQ29udHJvbC5lbnRlclB1a2VzKHRoaXMuX2FwcC5yb29tLmRlc2t0b3BQdWtlcy5sZW5ndGggPT09IDApO1xuICAgICAgICB0aGlzLl9idXR0b25Db250cm9sLnNob3coKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5wdWtlc0NoYW5nZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+mHjee9rlxuICAgICAqL1xuICAgIGdhbWVSZXNldCgpIHtcbiAgICAgICAgLy8g5Zyw5Li75qCH56S66YeN572u5LiA5LiLXG4gICAgICAgIHRoaXMuX2F2YXRhci5iZU5vcm1hbCgpO1xuXG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuZW50ZXJSZWFkeShmYWxzZSk7XG4gICAgICAgIHRoaXMuX2J1dHRvbkNvbnRyb2wuc2hvdygpO1xuXG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5kZWxldGVBbGwoKTtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLmhpZGUoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluUGxheWVyQXJlYTsiLCJpbXBvcnQgQXZhdGFyIGZyb20gXCIuLi8uLi9wbGF5ZXIvQXZhdGFyXCI7XG5pbXBvcnQgTmFtZSBmcm9tIFwiLi4vLi4vcGxheWVyL05hbWVcIjtcbmltcG9ydCBTaWRlUGxheWVyQXJlYSwgeyBpX1NpZGVQbGF5ZXJBcmVhT3B0aW9ucyB9IGZyb20gXCIuL1NpZGVQbGF5ZXJBcmVhXCI7XG5pbXBvcnQgU2lkZUhhbmRQdWtlcyBmcm9tIFwiLi4vLi4vcHVrZXMvU2lkZUhhbmRQdWtlc1wiO1xuaW1wb3J0IERlc2t0b3AgZnJvbSBcIi4uLy4uL2Rlc2t0b3AvRGVza3RvcFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vQXBwXCI7XG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2UgZnJvbSBcIi4uLy4uLy4uL3JlbmRlci9SZXNvdXJjZU1hbmFnZVwiO1xuXG5jbGFzcyBSaWdodFBsYXllckFyZWEgZXh0ZW5kcyBTaWRlUGxheWVyQXJlYSB7XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5aS05YOPXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdEF2YXRhcigpIHtcbiAgICAgICAgdGhpcy5fYXZhdGFyID0gbmV3IEF2YXRhcih7XG4gICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMud2lkdGggLSAxMDAsXG4gICAgICAgICAgICBpbWFnZTogUmVzb3VyY2VNYW5hZ2UuZ2V0KCdBVkFUQVInKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2F2YXRhcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5ZCN56ewXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuZXcgTmFtZSh7XG4gICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgdG9wOiAxMDAsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLndpZHRoIC0gMTAwLFxuICAgICAgICAgICAgdGV4dDogbmFtZSxcbiAgICAgICAgICAgIHNpemU6IDE4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omL54mMXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdEhhbmRQdWtlcygpIHtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzID0gbmV3IFNpZGVIYW5kUHVrZXModGhpcy5fYXBwLCB7XG4gICAgICAgICAgICBwdWtlV2lkdGg6IDIwLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDAsXG4gICAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgdG9wOiAxMDAsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLndpZHRoIC0gMjAgLSAxMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9oYW5kUHVrZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXREZXNrdG9wUHVrZXMoKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AgPSBuZXcgRGVza3RvcCh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCAtIDEwMCxcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9kZXNrdG9wKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9TaWRlUGxheWVyQXJlYU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoYXBwLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9pbml0QXZhdGFyKCk7XG4gICAgICAgIHRoaXMuX2luaXROYW1lKG9wdGlvbnMudXNlci5uYW1lKTtcbiAgICAgICAgdGhpcy5faW5pdEhhbmRQdWtlcygpO1xuICAgICAgICB0aGlzLl9pbml0RGVza3RvcFB1a2VzKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRQbGF5ZXJBcmVhOyIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uLy4uL3JlbmRlci9Db250YWluZXJcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uLy4uL3BsYXllci9hdmF0YXJcIjtcbmltcG9ydCBOYW1lIGZyb20gXCIuLi8uLi9wbGF5ZXIvbmFtZVwiO1xuaW1wb3J0IFNpZGVIYW5kUHVrZXMgZnJvbSBcIi4uLy4uL3B1a2VzL1NpZGVIYW5kUHVrZXNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi91c2VyL1VzZXJcIjtcbmltcG9ydCB7IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vcmVuZGVyL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBEZXNrdG9wIGZyb20gXCIuLi8uLi9kZXNrdG9wL0Rlc2t0b3BcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uLy4uL0FwcFwiO1xuXG5leHBvcnQgdHlwZSBpX1NpZGVQbGF5ZXJBcmVhT3B0aW9ucyA9IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgJiB7XG4gICAgdXNlcjogVXNlcjtcbn07XG5cbmNsYXNzIFNpZGVQbGF5ZXJBcmVhIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcm90ZWN0ZWQgX2FwcDogQXBwO1xuICAgIC8vIOWktOWDj1xuICAgIHByb3RlY3RlZCBfYXZhdGFyITogQXZhdGFyO1xuICAgIC8vIOWQjeensFxuICAgIHByb3RlY3RlZCBfbmFtZSE6IE5hbWU7XG4gICAgLy8g5omL54mMXG4gICAgcHJvdGVjdGVkIF9oYW5kUHVrZXMhOiBTaWRlSGFuZFB1a2VzO1xuICAgIC8vIOWHuuWOu+eahOeJjFxuICAgIHByb3RlY3RlZCBfZGVza3RvcCE6IERlc2t0b3A7XG4gICAgLy8g55So5oi3aWRcbiAgICBwcm90ZWN0ZWQgX3VzZXJJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIG9wdGlvbnM6IGlfU2lkZVBsYXllckFyZWFPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2FwcCA9IGFwcDtcblxuICAgICAgICB0aGlzLl91c2VySWQgPSBvcHRpb25zLnVzZXIudWlkO1xuICAgIH1cblxuICAgIGdldCB1c2VySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN572uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIOahjOmdoumakOiXj1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcbiAgICAgICAgLy8g5omL54mM6ZqQ6JePXG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5oaWRlKCk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIOWHhuWkh1xuICAgICAqIEBwYXJhbSBpc1JlYWR5IFxuICAgICAqL1xuICAgIHJlYWR5KGlzUmVhZHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLmhpZGUoKTtcblxuICAgICAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgICAgICAgLy8g5qGM6Z2i5bGV56S677yM5bm25LiU5pi+56S65YeG5aSHXG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3AucmVhZHkoaXNSZWFkeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0gJHtpc1JlYWR5Pyflh4blpIcnOiflj5bmtojlh4blpIcnfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIOWIneWni+WMluaJi+eJjFxuICAgICAqIEBwYXJhbSBhbW91bnQgXG4gICAgICovXG4gICAgaW5pdFB1a2VzKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5wb3N0UHVrZXMoYW1vdW50KTtcbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiDliJ3lp4vljJbmiYvniYxcbiAgICAgKiBAcGFyYW0gYW1vdW50IFxuICAgICAqL1xuICAgIGdldFB1a2VzKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5wb3N0UHVrZXMoYW1vdW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vooYzlj6vlnLDkuLtcbiAgICAgKi9cbiAgICBlbnRlckFza0xhbmRsb3JkKCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl91c2VySWR9IOi/m+WFpeWPq+WcsOS4u+eKtuaAgWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+ihjOaKouWcsOS4u1xuICAgICAqL1xuICAgIGVudGVyR3JhYkxhbmRsb3JkKCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wLmhpZGUoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl91c2VySWR9IOi/m+WFpeaKouWcsOS4u+eKtuaAgWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+W8gOWni1xuICAgICAqL1xuICAgIGdhbWVTdGFydChpc0xhbmRsb3JkOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc0xhbmRsb3JkKSB7XG4gICAgICAgICAgICB0aGlzLl9hdmF0YXIuYmVMYW5kbG9yZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPq+WcsOS4u1xuICAgICAqIEBwYXJhbSBpc0FzayBcbiAgICAgKi9cbiAgICBhc2tMYW5kbG9yZChpc0FzazogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3coKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5hc2tMYW5kbG9yZChpc0Fzayk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fdXNlcklkfSAke2lzQXNrPyflj6vlnLDkuLsnOifkuI3lj6vlnLDkuLsnfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaKouWcsOS4u1xuICAgICAqIEBwYXJhbSBpc0dyYWIgXG4gICAgICovXG4gICAgZ3JhYkxhbmRsb3JkKGlzR3JhYjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kZXNrdG9wLnNob3coKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5ncmFiTGFuZGxvcmQoaXNHcmFiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl91c2VySWR9ICR7aXNHcmFiPyfmiqLlnLDkuLsnOifkuI3miqLlnLDkuLsnfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHuueJjFxuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBzaG90UHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3VzZXJJZH0g5Ye654mMICR7cHVrZXN9YCk7XG5cbiAgICAgICAgLy8g5omL54mM5Ye65o6JXG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5zaG90UHVrZXMocHVrZXMubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgLy8g5qGM6Z2i54mM5a6J5o6S5LiLXG4gICAgICAgIHRoaXMuX2Rlc2t0b3Auc2hvdFB1a2VzKHB1a2VzKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl5Ye654mM6Zi25q61XG4gICAgICovXG4gICAgZW50ZXJTaG90UHVrZXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMudXNlcklkfSDov5vlhaXlh7rniYzpmLbmrrVgKTtcblxuICAgICAgICB0aGlzLl9kZXNrdG9wLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+mHjee9rlxuICAgICAqL1xuICAgIGdhbWVSZXNldCgpIHtcbiAgICAgICAgdGhpcy5fYXZhdGFyLmJlTm9ybWFsKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZFB1a2VzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2hhbmRQdWtlcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3AucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcC5oaWRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlUGxheWVyQXJlYTsiLCJpbXBvcnQgQnV0dG9uLCB7IGlfQnV0dG9uT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9idXR0b24vYnV0dG9uXCI7XG5cbmNsYXNzIEJhY2tCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfQnV0dG9uT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrQnV0dG9uOyIsImltcG9ydCBCYXNlUHVrZXNDb250YWluZXIsIHsgaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3B1a2VzL0Jhc2VQdWtlc0NvbnRhaW5lclwiO1xuXG5jbGFzcyBMYW5kbG9yZFB1a2VzIGV4dGVuZHMgQmFzZVB1a2VzQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0Jhc2VQdWtlc0NvbnRhaW5lck9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGxvcmRQdWtlczsiLCJpbXBvcnQgVGV4dCwgeyBpX1RleHRPcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3JlbmRlci9UZXh0XCI7XG5cbmNsYXNzIFJvb21JbmZvIGV4dGVuZHMgVGV4dCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9UZXh0T3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb29tSW5mbzsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi9yZW5kZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9BcHBcIjtcbmltcG9ydCBMYW5kbG9yZFB1a2VzIGZyb20gXCIuL0xhbmRsb3JkUHVrZXNcIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuL0JhY2tCdXR0b25cIjtcbmltcG9ydCBSb29tSW5mbyBmcm9tIFwiLi9Sb29tSW5mb1wiO1xuaW1wb3J0IHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9yZW5kZXIvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IHsgRVZFTlRfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi91dGlsc1wiO1xuXG5jbGFzcyBUb3BBcmVhIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIF9hcHA6IEFwcDtcblxuICAgIHByaXZhdGUgX2JhY2tCdXR0b24hOiBCYWNrQnV0dG9uO1xuXG4gICAgcHJpdmF0ZSBfcm9vbUluZm8hOiBSb29tSW5mbztcblxuICAgIHByaXZhdGUgX2xhbmRsb3JkUHVrZXMhOiBMYW5kbG9yZFB1a2VzO1xuXG4gICAgcHJpdmF0ZSBfaW5pdEJhY2tCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuX2JhY2tCdXR0b24gPSBuZXcgQmFja0J1dHRvbih7XG4gICAgICAgICAgICB0ZXh0OiAn6L+U5ZueJyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/lOWbnuWkp+WOhScpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcC5yb29tLmxlYXZlUm9vbSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgICBsZWZ0OiAxMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2JhY2tCdXR0b24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRSb29tSW5mbygpIHtcbiAgICAgICAgdGhpcy5fcm9vbUluZm8gPSBuZXcgUm9vbUluZm8oe1xuICAgICAgICAgICAgdGV4dDogJ+aIv+mXtOWPtzogJyxcbiAgICAgICAgICAgIHNpemU6IDE2LFxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgbGVmdDogODAsXG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX3Jvb21JbmZvKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TGFuZGxvcmRQdWtlcygpIHtcbiAgICAgICAgdGhpcy5fbGFuZGxvcmRQdWtlcyA9IG5ldyBMYW5kbG9yZFB1a2VzKHtcbiAgICAgICAgICAgIHB1a2VXaWR0aDogMjgsXG4gICAgICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAyOCAqIDMsXG4gICAgICAgICAgICBoZWlnaHQ6IDQyLFxuICAgICAgICAgICAgbGVmdDogKHRoaXMuX3dpZHRoIC0gMjggKiAzKSAvIDIsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9sYW5kbG9yZFB1a2VzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVSb29tU2hvdyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcm9vbUluZm8udGV4dCA9IGDmiL/pl7Tlj7c6ICR7dGhpcy5fYXBwLnJvb20ucm9vbUlkfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlR2FtZVN0YXJ0ID0gKGRhdGE6IHtsYW5kbG9yZFBsYXllcjogc3RyaW5nLCBsYW5kbG9yZFB1a2VzOiBzdHJpbmdbXX0pID0+IHtcbiAgICAgICAgdGhpcy5fbGFuZGxvcmRQdWtlcy5wb3N0UHVrZXMoZGF0YS5sYW5kbG9yZFB1a2VzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVHYW1lUmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2xhbmRsb3JkUHVrZXMuZGVsZXRlQWxsKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIG9wdGlvbnM6IGlfRGlzcGxheU9iamVjdE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fYXBwID0gYXBwO1xuXG4gICAgICAgIHRoaXMuX2luaXRCYWNrQnV0dG9uKCk7XG5cbiAgICAgICAgdGhpcy5faW5pdFJvb21JbmZvKCk7XG5cbiAgICAgICAgdGhpcy5faW5pdExhbmRsb3JkUHVrZXMoKTtcblxuICAgICAgICB0aGlzLl9hcHAucm9vbS5hZGRFdmVudExpc3RlbmVyKEVWRU5UX05BTUUuUk9PTV9TSE9XLCB0aGlzLl9oYW5kbGVSb29tU2hvdyk7XG4gICAgXG4gICAgICAgIHRoaXMuX2FwcC5yb29tLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfTkFNRS5HQU1FX1NUQVJULCB0aGlzLl9oYW5kbGVHYW1lU3RhcnQpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5yb29tLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfTkFNRS5HQU1FX1JFU0VULCB0aGlzLl9oYW5kbGVHYW1lUmVzZXQpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEFyZWE7IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vcmVuZGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCB7IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vQXBwJztcblxudHlwZSBpX0J1dHRvbkNvbnRyb2xPcHRpb25zID0gaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyAmIHtcbiAgICBhcHA6IEFwcDtcbn07XG5cbmNsYXNzIEJ1dHRvbkNvbnRyb2wgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHByaXZhdGUgX2FwcDogQXBwO1xuICAgIHByaXZhdGUgX2xlZnRCdXR0b246IEJ1dHRvbjtcbiAgICBwcml2YXRlIF9yaWdodEJ1dHRvbjogQnV0dG9uO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9CdXR0b25Db250cm9sT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBvcHRpb25zLmFwcDtcbiAgICAgICAgXG4gICAgICAgIGxldCBidXR0b25XaWR0aCA9IDEwMDtcbiAgICAgICAgbGV0IGJ1dHRvbkhlaWdodCA9IDQwO1xuXG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgICAgICAgICAgIHRleHQ6ICflt6bmjInpkq4nLFxuICAgICAgICAgICAgbGVmdDogdGhpcy53aWR0aCAvIDIgLSBidXR0b25XaWR0aCAtIDQwLFxuICAgICAgICAgICAgdG9wOiAodGhpcy5oZWlnaHQgLSBidXR0b25IZWlnaHQpIC8gMixcbiAgICAgICAgICAgIHdpZHRoOiBidXR0b25XaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgICAgICAgdGV4dDogJ+WPs+aMiemSricsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLndpZHRoIC8gMiArIDQwLFxuICAgICAgICAgICAgdG9wOiAodGhpcy5oZWlnaHQgLSBidXR0b25IZWlnaHQpIC8gMixcbiAgICAgICAgICAgIHdpZHRoOiBidXR0b25XaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uaGlkZSgpO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9sZWZ0QnV0dG9uKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9yaWdodEJ1dHRvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl562J5b6F6Zi25q61XG4gICAgICovXG4gICAgZW50ZXJSZWFkeShoYXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24udGV4dCA9ICflh4blpIcnO1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20ucmVhZHkodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmVudGVyUmVhZHkodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24udGV4dCA9ICflj5bmtojlh4blpIcnO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FwcC5yb29tLnJlYWR5KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJSZWFkeShmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uc2hvdygpO1xuXG4gICAgICAgIGlmIChoYXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5lbmFibGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xlZnRCdXR0b24uZW5hYmxlKCk7XG4gICAgICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vlhaUg5Y+r5Zyw5Li7IOmYtuautVxuICAgICAqL1xuICAgIGVudGVyQXNrTGFuZGxvcmQoKSB7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24udGV4dCA9ICfkuI3lj6snO1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20uYXNrTGFuZGxvcmQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24udGV4dCA9ICflj6vlnLDkuLsnO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FwcC5yb29tLmFza0xhbmRsb3JkKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5oaWRlQWxsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5lbmFibGUoKTtcbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uZW5hYmxlKCk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLnNob3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vlhaUg5oqi5Zyw5Li7IOmYtuautVxuICAgICAqL1xuICAgIGVudGVyR3JhYkxhbmRsb3JkKCkge1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLnRleHQgPSAn5LiN5oqiJztcbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5jYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FwcC5yb29tLmdyYWJMYW5kbG9yZChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLnRleHQgPSAn5oqi5Zyw5Li7JztcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hcHAucm9vbS5ncmFiTGFuZGxvcmQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmVuYWJsZSgpO1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLnNob3coKTtcblxuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5lbmFibGUoKTtcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+WFpSDlh7rniYwg6Zi25q61XG4gICAgICovXG4gICAgZW50ZXJQdWtlcyhpc011c3RTaG90OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24udGV4dCA9ICfkuI3lh7onO1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20ucHVrZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVBbGwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi50ZXh0ID0gJ+WHuueJjCc7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYXBwLnJvb20ucHVrZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFsbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xlZnRCdXR0b24uc2hvdygpO1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5zaG93KCk7XG5cbiAgICAgICAgaWYgKGlzTXVzdFNob3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2xlZnRCdXR0b24uZGlzYWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDliJ3lp4vljJbnmoTml7blgJnvvIzpu5jorqTml6Dms5Xlh7rniYxcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPr+S7peWHuueJjFxuICAgICAqL1xuICAgIGNhblNob3RQdWtlcygpIHtcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiN6IO95Ye654mMXG4gICAgICovXG4gICAgY2FuTm90U2hvdFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9yaWdodEJ1dHRvbi5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZqQ6JeP5omA5pyJ5oyJ6ZKuXG4gICAgICovXG4gICAgaGlkZUFsbCgpIHtcbiAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5oaWRlKCk7XG4gICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiYDmnInmjInpkq7pg73kuI3lj6/nlKhcbiAgICAgKi9cbiAgICBkaXNhYmxlQWxsKCkge1xuICAgICAgICB0aGlzLl9sZWZ0QnV0dG9uLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uZGlzYWJsZSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNvbnRyb2w7IiwiaW1wb3J0IFRleHQgZnJvbSBcIi4uLy4uL3JlbmRlci9UZXh0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9yZW5kZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBpX0Rpc3BsYXlPYmplY3RPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9EaXNwbGF5T2JqZWN0XCI7XG5cbmV4cG9ydCB0eXBlIGlfQnV0dG9uT3B0aW9ucyA9IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgJiB7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICBjYWxsYmFjaz86IEZ1bmN0aW9uO1xuICAgIHZhbGlkPzoge2NvbG9yPzogc3RyaW5nLCBiZ0NvbG9yPzogc3RyaW5nfTtcbiAgICBpbnZhbGlkPzoge2NvbG9yPzogc3RyaW5nLCBiZ0NvbG9yPzogc3RyaW5nfTtcbiAgICBhdmFpbGFibGU/OiBib29sZWFuXG59XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByaXZhdGUgX3Zpc2lhYmxlOiBib29sZWFuO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcml2YXRlIF9jYWxsYmFjazogRnVuY3Rpb247XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByaXZhdGUgX3ZhbGlkOiB7Y29sb3I6IHN0cmluZywgYmdDb2xvcjogc3RyaW5nfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcHJpdmF0ZSBfaW52YWxpZDoge2NvbG9yOiBzdHJpbmcsIGJnQ29sb3I6IHN0cmluZ307XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByaXZhdGUgX3RleHRPYmplY3Q6IFRleHQ7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHByaXZhdGUgX2F2YWlsYWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIOaMiemSruWPr+eUqOaAgeWSjOS4jeWPr+eUqOaAgeWkhOeQhuS4gOS4i1xuICAgICAqIEBwYXJhbSBvcHRpb25zIFxuICAgICAqL1xuICAgIHByaXZhdGUgX3NldENvbmZpZyhvcHRpb25zOiBpX0J1dHRvbk9wdGlvbnMpIHtcbiAgICAgICAgLy8g5pyJ5pWI54q25oCB5LiL5qC35byP5a6J5o6S5LiA5LiLXG4gICAgICAgIGlmIChvcHRpb25zLnZhbGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudmFsaWQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl92YWxpZCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBiZ0NvbG9yOiAnIzAwOTlGRidcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl92YWxpZCwgb3B0aW9ucy52YWxpZCk7XG5cbiAgICAgICAgLy8g5peg5pWI54q25oCB5LiL5qC35byP5a6J5o6S5LiA5LiLXG4gICAgICAgIGlmIChvcHRpb25zLmludmFsaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucy5pbnZhbGlkID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW52YWxpZCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBiZ0NvbG9yOiAnIzk2OTY5NidcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9pbnZhbGlkLCBvcHRpb25zLmludmFsaWQpO1xuXG4gICAgICAgIC8vIOWIneWni+eKtuaAgeaYr+WQpuWPr+eUqFxuICAgICAgICBpZiAob3B0aW9ucy5hdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe7meaMiemSrua3u+WKoOaWh+Wtl+e7hOS7tlxuICAgICAqIEBwYXJhbSB0ZXh0IFxuICAgICAqL1xuICAgIF9zZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgdGV4dE9iamVjdCA9IG5ldyBUZXh0KHtcbiAgICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICAgIHNpemU6ICh0aGlzLmhlaWdodCAvIDIpID4+IDAsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3RleHRPYmplY3QgPSB0ZXh0T2JqZWN0O1xuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRleHRPYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOeahOeCueWHu+S6i+S7tlxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqL1xuICAgIHByaXZhdGUgX3RvdWNoID0gKGRhdGE6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHgsIHlcbiAgICAgICAgfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKHRoaXMuX2F2YWlsYWJsZSAmJiB0aGlzLmNvbnRhaW4oeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBvcHRpb25zXG4gICAgICogIHRleHQg5oyJ6ZKu5YaF5a65XG4gICAgICogIHZhbGlkIOWPr+eUqOeKtuaAgeS4i1xuICAgICAqICAgICAgY29sb3Ig5paH5a2X6aKc6ImyXG4gICAgICogICAgICBiZ0NvbG9yIOiDjOaZr+iJslxuICAgICAqICBpbnZhbGlkIOS4jeWPr+eUqOeKtuaAgeS4i1xuICAgICAqICAgICAgY29sb3Ig5paH5a2X6aKc6ImyXG4gICAgICogICAgICBiZ0NvbG9yIOiDjOaZr+iJslxuICAgICAqICBhdmFpbGFibGUg5piv5ZCm5Y+v55SoXG4gICAgICogIHN0eWxlIOagt+W8j1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfQnV0dG9uT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl92aXNpYWJsZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl90b3VjaCk7XG5cbiAgICAgICAgdGhpcy5fc2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9zZXRUZXh0KG9wdGlvbnMudGV4dCB8fCAnJyk7XG4gICAgfVxuXG4gICAgZ2V0IHRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0T2JqZWN0LnRleHQ7XG4gICAgfVxuXG4gICAgc2V0IHRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RleHRPYmplY3QudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgZ2V0IGNvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlID8gdGhpcy5fdmFsaWQuY29sb3IgOiB0aGlzLl9pbnZhbGlkLmNvbG9yO1xuICAgIH1cblxuICAgIGdldCBiZ0NvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlID8gdGhpcy5fdmFsaWQuYmdDb2xvciA6IHRoaXMuX2ludmFsaWQuYmdDb2xvcjtcbiAgICB9XG5cbiAgICBnZXQgY2FsbGJhY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFjaztcbiAgICB9XG5cbiAgICBzZXQgY2FsbGJhY2soY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9hdmFpbGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuX3Zpc2lhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLl92aXNpYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Zpc2lhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmJnQ29sb3I7XG4gICAgICAgIGN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgICAgICBzdXBlci5yZW5kZXIoY3R4KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vcmVuZGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi9yZW5kZXIvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IERlc2t0b3BQdWtlcyBmcm9tIFwiLi9EZXNrdG9wUHVrZXNcIjtcbmltcG9ydCBEZXNrdG9wVGV4dCBmcm9tIFwiLi9EZXNrdG9wVGV4dFwiO1xuaW1wb3J0IFJlc291cmNlTWFuYWdlIGZyb20gXCIuLi8uLi9yZW5kZXIvUmVzb3VyY2VNYW5hZ2VcIjtcblxuY2xhc3MgRGVza3RvcCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBfZGVza3RvcFB1a2VzITogRGVza3RvcFB1a2VzO1xuICAgIHByaXZhdGUgX2Rlc2t0b3BUZXh0ITogRGVza3RvcFRleHQ7XG5cbiAgICBwcml2YXRlIF9pbml0RGVza3RvcFB1a2VzKCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wUHVrZXMgPSBuZXcgRGVza3RvcFB1a2VzKHtcbiAgICAgICAgICAgIHB1a2VXaWR0aDogNDAsXG4gICAgICAgICAgICBpbnRlcnZhbDogMzAsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuX2Rlc2t0b3BQdWtlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdERlc2t0b3BUZXh0KCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dCA9IG5ldyBEZXNrdG9wVGV4dCh7XG4gICAgICAgICAgICB0b3A6ICh0aGlzLmhlaWdodCAtIDYwKSAvIDIsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy53aWR0aCAtIDEyMCkgLyAyLFxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgICAgICBpbWFnZTogUmVzb3VyY2VNYW5hZ2UuZ2V0KCdSRUFEWScpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dC5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl9kZXNrdG9wVGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9EaXNwbGF5T2JqZWN0T3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9pbml0RGVza3RvcFB1a2VzKCk7XG4gICAgICAgIHRoaXMuX2luaXREZXNrdG9wVGV4dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9rlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dC5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlcy5kZWxldGVBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh4blpIdcbiAgICAgKi9cbiAgICByZWFkeShpc1JlYWR5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0LnJlYWR5KGlzUmVhZHkpO1xuICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dC5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+r5Zyw5Li7XG4gICAgICogQHBhcmFtIGlzQXNrIFxuICAgICAqL1xuICAgIGFza0xhbmRsb3JkKGlzQXNrOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0LmFza0xhbmRsb3JkKGlzQXNrKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcFRleHQuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaKouWcsOS4u1xuICAgICAqIEBwYXJhbSBpc0dyYWIgXG4gICAgICovXG4gICAgZ3JhYkxhbmRsb3JkKGlzR3JhYjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kZXNrdG9wVGV4dC5ncmFiTGFuZGxvcmQoaXNHcmFiKTtcbiAgICAgICAgdGhpcy5fZGVza3RvcFRleHQuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHuueJjFxuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBzaG90UHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmIChwdWtlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3BUZXh0Lm5vU2hvdCgpO1xuICAgICAgICAgICAgdGhpcy5fZGVza3RvcFRleHQuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzLnBvc3RQdWtlcyhwdWtlcyk7XG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wUHVrZXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcDsiLCJpbXBvcnQgQmFzZVB1a2VzQ29udGFpbmVyLCB7IGlfQmFzZVB1a2VzQ29udGFpbmVyT3B0aW9ucyB9IGZyb20gXCIuLi9wdWtlcy9CYXNlUHVrZXNDb250YWluZXJcIjtcblxuY2xhc3MgRGVza3RvcFB1a2VzIGV4dGVuZHMgQmFzZVB1a2VzQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0Jhc2VQdWtlc0NvbnRhaW5lck9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcFB1a2VzOyIsImltcG9ydCBCaXRtYXAsIHsgaV9CaXRtYXBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9CaXRtYXBcIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi4vLi4vcmVuZGVyL1Jlc291cmNlTWFuYWdlXCI7XG5cbmNsYXNzIERlc2t0b3BUZXh0IGV4dGVuZHMgQml0bWFwIHtcbiAgICBwcml2YXRlIF9jaGFuZ2Uoa2V5OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgICAgIGlmIChrZXkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW1hZ2UgPSBSZXNvdXJjZU1hbmFnZS5nZXQoa2V5KTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9CaXRtYXBPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJlYWR5KGlzUmVhZHk6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGlzUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZSgnUkVBRFknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZShudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFza0xhbmRsb3JkKGlzQXNrOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc0Fzaykge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlKCdBU0snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZSgnTk9fQVNLJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBncmFiTGFuZGxvcmQoaXNHcmFiOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc0dyYWIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZSgnR1JBQicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlKCdOT19HUkFCJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub1Nob3QoKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZSgnTk9fU0hPVCcpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BUZXh0OyIsImltcG9ydCB7IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL3JlbmRlci9Db250YWluZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi8uLi9yZW5kZXIvVGV4dFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vQXBwXCI7XG5cbmNsYXNzIE92ZXJNb2RhbCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBfYXBwOiBBcHA7XG4gICAgLy8g5bGV56S655qE6I636IOc6ICF5ZCN56ewXG4gICAgcHJpdmF0ZSBfdGV4dCE6IFRleHQ7XG4gICAgLy8g56Gu5a6a55qE5oyJ6ZKuXG4gICAgcHJpdmF0ZSBfYnV0dG9uITogQnV0dG9uO1xuXG4gICAgcHJpdmF0ZSBfaW5pdFRleHQoKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSBuZXcgVGV4dCh7XG4gICAgICAgICAgICB0ZXh0OiAn6I636IOc6ICFOiAnLFxuICAgICAgICAgICAgc2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgd2lkdGg6IDE0MCxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICB0b3A6IDIwLFxuICAgICAgICAgICAgbGVmdDogKHRoaXMuX3dpZHRoIC0gMTQwKSAvIDJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLl90ZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QnV0dG9uKCkge1xuICAgICAgICB0aGlzLl9idXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgICAgICAgICAgIHRleHQ6ICfnoa7lrponLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHAucm9vbS5jb25maXJtUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHRvcDogNzAsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5fd2lkdGggLSA2MCkgLyAyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgb3B0aW9uczogaV9EaXNwbGF5T2JqZWN0T3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBhcHA7XG5cbiAgICAgICAgdGhpcy5faW5pdFRleHQoKTtcblxuICAgICAgICB0aGlzLl9pbml0QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgc2hvdyh1aWQ/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdGV4dC50ZXh0ID0gYOiOt+iDnOiAhTogJHt1aWR9YDtcblxuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgLjcpJztcbiAgICAgICAgY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICAgIHN1cGVyLnJlbmRlcihjdHgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJNb2RhbDsiLCJpbXBvcnQgQml0bWFwLCB7IGlfQml0bWFwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9yZW5kZXIvQml0bWFwXCI7XG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2UgZnJvbSBcIi4uLy4uL3JlbmRlci9SZXNvdXJjZU1hbmFnZVwiO1xuXG5cbi8qKlxuICog546p5a625aS05YOPXG4gKi9cbmNsYXNzIEF2YXRhciBleHRlbmRzIEJpdG1hcCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9CaXRtYXBPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGJlTGFuZGxvcmQoKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlID0gUmVzb3VyY2VNYW5hZ2UuZ2V0KCdMQU5ETE9SRCcpO1xuICAgIH1cblxuICAgIGJlTm9ybWFsKCkge1xuICAgICAgICB0aGlzLl9pbWFnZSA9IFJlc291cmNlTWFuYWdlLmdldCgnQVZBVEFSJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIiwiaW1wb3J0IFRleHQsIHsgaV9UZXh0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi9yZW5kZXIvVGV4dFwiO1xuXG5jbGFzcyBOYW1lIGV4dGVuZHMgVGV4dCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9UZXh0T3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYW1lOyIsImltcG9ydCBCaXRtYXAsIHsgaV9CaXRtYXBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3JlbmRlci9CaXRtYXBcIjtcblxuZXhwb3J0IHR5cGUgaV9CYXNlUHVrZU9wdGlvbnMgPSBpX0JpdG1hcE9wdGlvbnMgJiB7XG4gICAgY2hvb3NlPzogYm9vbGVhbixcbiAgICBpZDogc3RyaW5nO1xufVxuXG5jbGFzcyBCYXNlUHVrZSBleHRlbmRzIEJpdG1hcCB7XG4gICAgLy8g5piv5ZCm6YCJ5LitXG4gICAgcHJpdmF0ZSBfY2hvb3NlOiBib29sZWFuO1xuICAgIC8vIGlkXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0Jhc2VQdWtlT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9pZCA9IG9wdGlvbnMuaWQ7XG5cbiAgICAgICAgLy8g6buY6K6k5rKh5pyJ6YCJ5LitXG4gICAgICAgIHRoaXMuX2Nob29zZSA9IG9wdGlvbnMuY2hvb3NlIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBjaG9vc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaG9vc2U7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YCJ5LitXG4gICAgICovXG4gICAgc2VsZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jaG9vc2UpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlWSgoKHRoaXMuaGVpZ2h0ICogMC4xNSkgPj4gMCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZKC0oKHRoaXMuaGVpZ2h0ICogMC4xNSkgPj4gMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2hvb3NlID0gIXRoaXMuX2Nob29zZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQdWtlOyIsImltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL3JlbmRlci9Db250YWluZXJcIjtcbmltcG9ydCB7IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vcmVuZGVyL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBCYXNlUHVrZSBmcm9tIFwiLi9CYXNlUHVrZVwiO1xuaW1wb3J0IFJlc291cmNlTWFuYWdlIGZyb20gXCIuLi8uLi9yZW5kZXIvUmVzb3VyY2VNYW5hZ2VcIjtcblxuZXhwb3J0IHR5cGUgaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zID0gaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyAmIHtcbiAgICBwdWtlV2lkdGg6IG51bWJlcixcblxuICAgIGludGVydmFsPzogbnVtYmVyLFxuICAgIHZlcnRpY2FsQWxpZ24/OiBQVUtFX1ZFUlRJQ0FMX0FMSUdOLFxuICAgIGhvcml6b250YWxBbGlnbj86IFBVS0VfSE9SSVpPTlRBTF9BTElHTixcbn07XG5cbmVudW0gUFVLRV9IT1JJWk9OVEFMX0FMSUdOIHtcbiAgICBMRUZULFxuICAgIENFTlRFUixcbiAgICBSSUdIVFxufTtcblxuZW51bSBQVUtFX1ZFUlRJQ0FMX0FMSUdOIHtcbiAgICBUT1AsXG4gICAgTUlERExFLFxuICAgIEJPVFRPTVxufTtcblxuY2xhc3MgQmFzZVB1a2VzQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICAvLyDmiZHlhYvniYzlrr3luqZcbiAgICBwcm90ZWN0ZWQgX3B1a2VXaWR0aDogbnVtYmVyO1xuICAgIC8vIOaJkeWFi+eJjOmrmOW6plxuICAgIHByb3RlY3RlZCBfcHVrZUhlaWdodDogbnVtYmVyO1xuICAgIC8vIOaJkeWFi+eJjOawtOW5s+Wvuem9kOaWueW8j1xuICAgIHByb3RlY3RlZCBfaG9yaXpvbnRhbEFsaWduOiBQVUtFX0hPUklaT05UQUxfQUxJR047XG4gICAgLy8g5omR5YWL54mM5Z6C55u05a+56b2Q5pa55byPXG4gICAgcHJvdGVjdGVkIF92ZXJ0aWNhbEFsaWduOiBQVUtFX1ZFUlRJQ0FMX0FMSUdOO1xuICAgIC8vIOaJkeWFi+eJjOS5i+mXtOS4pOS4pOeahOimhuebluWkp+Wwj1xuICAgIHByaXZhdGUgX2ludGVydmFsOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTmn5DlvKDmiZHlhYvniYxcbiAgICAgKiBAcGFyYW0geyp9IG9iamVjdCBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2RlbGV0ZVB1a2Uob2JqZWN0OiBCYXNlUHVrZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKG9iamVjdCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlUHVrZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDlhaXljZXlvKDmiZHlhYvniYxcbiAgICAgKiBAcGFyYW0geyp9IHB1a2UgXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9wb3N0UHVrZShwdWtlOiBCYXNlUHVrZSwgekluZGV4PzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4ocHVrZSwgekluZGV4KTtcblxuICAgICAgICB0aGlzLl91cGRhdGVQdWtlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOinpuWPkeabtOaWsOe7tOaKpOeahOaJkeWFi+eJjOeahOS9jee9rlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfdXBkYXRlUHVrZXMoKSB7XG4gICAgICAgIC8vIOiOt+WPluaJi+S4iuaJkeWFi+aAu+aVsFxuICAgICAgICBsZXQgbGVuID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorqHnrpflh7rmnaXov5nmrKHmiYvkuIrmiZHlhYvniYzmnIDlpKflrr3luqZcbiAgICAgICAgbGV0IG1heFdpZHRoID0gdGhpcy5fcHVrZVdpZHRoICsgKHRoaXMuX3B1a2VXaWR0aCAtIHRoaXMuX2ludGVydmFsKSAqIChsZW4gLSAxKTtcblxuICAgICAgICAvLyDotbflp4vngrl477yMeVxuICAgICAgICBsZXQgeDtcbiAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcnQgPSBsZW47XG4gICAgICAgIC8vIOWmguaenOacgOWkp+WuveW6pui2heS6hu+8jOaEj+WRs+edgOmcgOimgeacieWkmuihjFxuICAgICAgICBpZiAobWF4V2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAvLyDmr4/ooYznmoTmiZHlhYvniYzmlbDph49cbiAgICAgICAgICAgIHBhcnQgPSAodGhpcy53aWR0aCAvIG1heFdpZHRoICogbGVuKSA+PiAwO1xuICAgICAgICAgICAgLy8g6YKj5LmIeOW/heeEtuS7jjDlvIDlp4vkuoZcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6K6h566XeOeahOS9jee9rlxuICAgICAgICAgICAgeCA9ICh0aGlzLndpZHRoIC0gbWF4V2lkdGgpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwdWtlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBwdWtlID0gdGhpcy5fY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIC8vIOiuvue9ruaJkeWFi+eJjOeahOS9jee9rlxuICAgICAgICAgICAgcHVrZS5zZXRQb3NpdGlvbih4LCB5ICsgKChpIC8gcGFydCkgPj4gMCkgKiB0aGlzLl9wdWtlSGVpZ2h0IC8gMyk7XG5cbiAgICAgICAgICAgIHggKz0gKHRoaXMuX3B1a2VXaWR0aCAtIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICAgIGlmICh4ID4gdGhpcy53aWR0aCAtIHRoaXMuX3B1a2VXaWR0aCkge1xuICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIOWuueWZqOS4reWMheWQq+eahOaJkeWFi+eJjOWuieaOkuS4gOS4i1xuICAgICAgICB0aGlzLl9wdWtlV2lkdGggPSBvcHRpb25zLnB1a2VXaWR0aDtcbiAgICAgICAgdGhpcy5fcHVrZUhlaWdodCA9ICh0aGlzLl9wdWtlV2lkdGggLyAxMDUgKiAxNTApID4+IDA7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJ2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBvcHRpb25zLmludGVydmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSB0aGlzLl9wdWtlV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlr7npvZDlronmjpLkuIDkuItcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbEFsaWduID0gb3B0aW9ucy5ob3Jpem9udGFsQWxpZ24gfHwgUFVLRV9IT1JJWk9OVEFMX0FMSUdOLkxFRlRcbiAgICAgICAgdGhpcy5fdmVydGljYWxBbGlnbiA9IG9wdGlvbnMudmVydGljYWxBbGlnbiB8fCBQVUtFX1ZFUlRJQ0FMX0FMSUdOLlRPUDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTpg6jliIbmiZHlhYvniYxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwdWtlc1xuICAgICAqL1xuICAgIGRlbGV0ZVB1a2VzKHB1a2VzOiBzdHJpbmdbXSkge1xuICAgICAgICAoPEJhc2VQdWtlW10+dGhpcy5fY2hpbGRyZW4pLmZvckVhY2goKHB1a2U6IEJhc2VQdWtlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwdWtlcy5pbmRleE9mKHB1a2UuaWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxldGVQdWtlKHB1a2UpO1xuICAgICAgICAgICAgICAgIHB1a2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOmDqOWIhuaJkeWFi+eJjFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHB1a2VzXG4gICAgICovXG4gICAgcG9zdFB1a2VzKHB1a2VzOiBzdHJpbmdbXSkge1xuICAgICAgICBwdWtlcy5mb3JFYWNoKChwdWtlU3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHVrZSA9IG5ldyBCYXNlUHVrZSh7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IFJlc291cmNlTWFuYWdlLmdldChgUFVLRV8ke3B1a2VTdHJpbmd9YCksXG4gICAgICAgICAgICAgICAgaWQ6IHB1a2VTdHJpbmcsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3B1a2VXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX3B1a2VIZWlnaHQsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9wb3N0UHVrZShwdWtlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5omA5pyJ54mMXG4gICAgICovXG4gICAgZGVsZXRlQWxsKCkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQdWtlc0NvbnRhaW5lcjsiLCJpbXBvcnQgQmFzZVB1a2VzQ29udGFpbmVyLCB7IGlfQmFzZVB1a2VzQ29udGFpbmVyT3B0aW9ucyB9IGZyb20gXCIuL0Jhc2VQdWtlc0NvbnRhaW5lclwiO1xuaW1wb3J0IEJhc2VQdWtlIGZyb20gXCIuL0Jhc2VQdWtlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSwgY29tcGFyZVB1a2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9BcHBcIjtcbmltcG9ydCBSZXNvdXJjZU1hbmFnZSBmcm9tIFwiLi4vLi4vcmVuZGVyL1Jlc291cmNlTWFuYWdlXCI7XG5cbmNsYXNzIE1haW5IYW5kUHVrZXMgZXh0ZW5kcyBCYXNlUHVrZXNDb250YWluZXIge1xuICAgIHByaXZhdGUgX2FwcDogQXBwO1xuXG4gICAgcHJpdmF0ZSBfdG91Y2hTZXQ6IFNldDxCYXNlUHVrZT4gPSBuZXcgU2V0KCk7XG5cbiAgICAvKipcbiAgICAgKiB0b3VjaHN0YXJ077yMdG91Y2htb3Zl55qE5pe25YCZ6Kem5Y+RXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdG91Y2ggPSAoZGF0YTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB4LCB5XG4gICAgICAgIH0gPSBkYXRhO1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHRlbXA6IEJhc2VQdWtlO1xuICAgICAgICBsZXQgcHVrZTogQmFzZVB1a2UgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRlbXAgPSA8QmFzZVB1a2U+dGhpcy5fY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodGVtcC5jb250YWluKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgcHVrZSA9IHRlbXA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHVrZSkge1xuICAgICAgICAgICAgdGhpcy5fY2hvb3NlUHVrZShwdWtlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvdWNoZW5k55qE5pe25YCZ6Kem5Y+RXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3RvdWNoU2V0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hvb3NlUHVrZShwdWtlOiBCYXNlUHVrZSkge1xuICAgICAgICBpZiAodGhpcy5fdG91Y2hTZXQuaGFzKHB1a2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b3VjaFNldC5hZGQocHVrZSk7XG4gICAgICAgIHB1a2Uuc2VsZWN0KCk7XG5cbiAgICAgICAgdGhpcy5wdWtlc0NoYW5nZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJvuWIsOWwhuimgea3u+WKoOeahHB1a2XnmoTlsYLnuqfvvIzmjpLluo/mj5LlhaXml7bkvb/nlKhcbiAgICAgKiBAcGFyYW0gcHVrZUEgXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZmluZFB1a2VJbmRleChwdWtlQTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwdWtlQjogc3RyaW5nO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHB1a2VCID0gKDxCYXNlUHVrZT50aGlzLl9jaGlsZHJlbltpXSkuaWQ7XG5cbiAgICAgICAgICAgIGlmIChjb21wYXJlUHVrZXMoW3B1a2VBXSwgW3B1a2VCXSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJi+eJjO+8jOacieWKqOeUu1xuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0UHVrZXMgPSAocHVrZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHRpbWUgPSAyMDA7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRQdWtlKCkge1xuICAgICAgICAgICAgaWYgKHB1a2VzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYucG9zdFB1a2VzKFtwdWtlc1tpXV0pO1xuXG4gICAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZ2V0UHVrZSwgdGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRQdWtlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIG9wdGlvbnM6IGlfQmFzZVB1a2VzQ29udGFpbmVyT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBhcHA7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fdG91Y2gpO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fdG91Y2gpO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl90b3VjaEVuZCk7XG5cbiAgICAgICAgdGhpcy5wdWtlc0NoYW5nZSA9IGRlYm91bmNlKHRoaXMucHVrZXNDaGFuZ2UsIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgInkuK3pg6jliIbmiZHlhYvniYxcbiAgICAgKiBAcGFyYW0gcHVrZXMgXG4gICAgICovXG4gICAgY2hvb3NlUHVrZXMocHVrZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIGxldCBpZDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZCA9ICg8QmFzZVB1a2U+dGhpcy5fY2hpbGRyZW5baV0pLmlkO1xuXG4gICAgICAgICAgICBpZiAocHVrZXMuaW5kZXhPZihpZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIC8vIOmcgOimgemAieS4rVxuICAgICAgICAgICAgICAgIHRoaXMuX2Nob29zZVB1a2UoPEJhc2VQdWtlPnRoaXMuX2NoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlueUqOaIt+mAieS4reeahOaJkeWFi+eJjFxuICAgICAqL1xuICAgIGdldENob29zZVB1a2VzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCB0ZW1wOiBCYXNlUHVrZTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSA8QmFzZVB1a2U+dGhpcy5fY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIGlmICh0ZW1wLmNob29zZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRlbXAuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbpgInkuK3nmoTniYzlh7rmjolcbiAgICAgKi9cbiAgICBzaG90Q2hvb3NlUHVrZXMoKSB7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgdGVtcDogQmFzZVB1a2U7XG5cbiAgICAgICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRlbXAgPSA8QmFzZVB1a2U+dGhpcy5fY2hpbGRyZW5baV07XG5cbiAgICAgICAgICAgIGlmICh0ZW1wLmNob29zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGV0ZVB1a2UodGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiDmt7vliqDpg6jliIbmiZHlhYvniYxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwdWtlc1xuICAgICAqL1xuICAgIHBvc3RQdWtlcyhwdWtlczogc3RyaW5nW10sIHJlb3JkZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBwdWtlcy5mb3JFYWNoKChwdWtlU3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHVrZSA9IG5ldyBCYXNlUHVrZSh7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IFJlc291cmNlTWFuYWdlLmdldChgUFVLRV8ke3B1a2VTdHJpbmd9YCksXG4gICAgICAgICAgICAgICAgaWQ6IHB1a2VTdHJpbmcsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3B1a2VXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX3B1a2VIZWlnaHQsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVvcmRlcikge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5fZmluZFB1a2VJbmRleChwdWtlU3RyaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcG9zdFB1a2UocHVrZSwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiYvniYzkuK3pgInkuK3nmoTniYzlj5HnlJ/lj5jljJbml7bop6blj5FcbiAgICAgKi9cbiAgICBwdWtlc0NoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjaG9vc2VQdWtlc0NoYW5nZScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5IYW5kUHVrZXM7IiwiaW1wb3J0IHsgaV9CYXNlUHVrZXNDb250YWluZXJPcHRpb25zIH0gZnJvbSBcIi4vQmFzZVB1a2VzQ29udGFpbmVyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vLi4vcmVuZGVyL1RleHRcIjtcbmltcG9ydCBCYXNlUHVrZSBmcm9tIFwiLi9CYXNlUHVrZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vcmVuZGVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vQXBwXCI7XG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2UgZnJvbSBcIi4uLy4uL3JlbmRlci9SZXNvdXJjZU1hbmFnZVwiO1xuXG5jbGFzcyBTaWRlSGFuZFB1a2VzIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIF9hcHA6IEFwcDtcblxuICAgIHByaXZhdGUgX2JhY2tQdWtlITogQmFzZVB1a2U7XG4gICAgcHJpdmF0ZSBfcHVrZXNDb3VudCE6IFRleHQ7XG4gICAgcHJpdmF0ZSBfcmVtYWluaW5nUHVrZXM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfcHVrZVdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHVrZUhlaWdodDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfYWRkQmFja1B1a2VzKCkge1xuICAgICAgICBsZXQgcHVrZVVybDtcblxuICAgICAgICBwdWtlVXJsID0gJ2JhY2snO1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuX2JhY2tQdWtlID0gbmV3IEJhc2VQdWtlKHtcbiAgICAgICAgICAgIGltYWdlOiBSZXNvdXJjZU1hbmFnZS5nZXQoYEJBQ0tgKSxcbiAgICAgICAgICAgIGlkOiBwdWtlVXJsLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3B1a2VXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fcHVrZUhlaWdodCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fYmFja1B1a2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZFB1a2VzQ291bnQoKSB7XG4gICAgICAgIHRoaXMuX3B1a2VzQ291bnQgPSBuZXcgVGV4dCh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fcHVrZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9wdWtlSGVpZ2h0LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHRleHQ6IFN0cmluZyh0aGlzLl9yZW1haW5pbmdQdWtlcyksXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIHNpemU6IDE2XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5fcHVrZXNDb3VudCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIG9wdGlvbnM6IGlfQmFzZVB1a2VzQ29udGFpbmVyT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBhcHA7XG5cbiAgICAgICAgdGhpcy5fcHVrZVdpZHRoID0gKG9wdGlvbnMud2lkdGggLyAxKSA+PiAwO1xuICAgICAgICB0aGlzLl9wdWtlSGVpZ2h0ID0gKHRoaXMuX3B1a2VXaWR0aCAvIDEwNSAqIDE1MCkgPj4gMDtcblxuICAgICAgICB0aGlzLl9hZGRCYWNrUHVrZXMoKTtcbiAgICAgICAgdGhpcy5fYWRkUHVrZXNDb3VudCgpO1xuXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh7rniYxcbiAgICAgKiBAcGFyYW0gYW1vdW50IFxuICAgICAqL1xuICAgIHNob3RQdWtlcyhhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmdQdWtlcyAtPSBhbW91bnQ7XG5cbiAgICAgICAgdGhpcy5fcHVrZXNDb3VudC50ZXh0ID0gU3RyaW5nKHRoaXMuX3JlbWFpbmluZ1B1a2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDpg6jliIbmiZHlhYvniYxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwdWtlc1xuICAgICAqL1xuICAgIHBvc3RQdWtlcyhhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmdQdWtlcyArPSBhbW91bnQ7XG5cbiAgICAgICAgdGhpcy5fcHVrZXNDb3VudC50ZXh0ID0gU3RyaW5nKHRoaXMuX3JlbWFpbmluZ1B1a2VzKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nUHVrZXMgPSAwO1xuXG4gICAgICAgIHRoaXMuX3B1a2VzQ291bnQudGV4dCA9IFN0cmluZyh0aGlzLl9yZW1haW5pbmdQdWtlcyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUhhbmRQdWtlczsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IYWxsLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IYWxsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGFsbC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9BcHBcIjtcbmltcG9ydCB7IFJFVF9TVUNDRVNTIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmltcG9ydCAnLi9IYWxsLmNzcyc7XG5cbmludGVyZmFjZSBpX0hhbGxPcHRpb25zIHtcbiAgICBhcHA6IEFwcDtcbn1cblxuY2xhc3MgSGFsbCB7XG4gICAgcHJpdmF0ZSBfYXBwOiBBcHA7XG4gICAgLy8g5piv5ZCm5Yid5aeL5YyW6L+H77yM6K+l57uE5Lu25Y+q5Lya5Yid5aeL5YyW5LiA5qyhXG4gICAgcHJpdmF0ZSBfaW5pdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8g5aSn5Y6F55qEZG9t5a655ZmoXG4gICAgcHJpdmF0ZSBfYm94ITogSFRNTERpdkVsZW1lbnQ7XG4gICAgLy8g5Yib5bu65oi/6Ze055qE5oyJ6ZKuXG4gICAgcHJpdmF0ZSBfY3JlYXRlQnV0dG9uITogSFRNTERpdkVsZW1lbnQ7XG4gICAgLy8g6L6T5YWl5oi/6Ze05Y+355qE6L6T5YWl5qGGXG4gICAgcHJpdmF0ZSBfcm9vbUlkSW5wdXQhOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIC8vIOWKoOWFpeaIv+mXtOeahOaMiemSrlxuICAgIHByaXZhdGUgX2VudGVyQnV0dG9uITogSFRNTERpdkVsZW1lbnQ7XG5cblxuICAgIHByaXZhdGUgX3Nob3coKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fYm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5pdFVJKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oaWRlKCkge1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0VUkoKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9jcmVhdGVCdXR0b24uY2xhc3NOYW1lID0gJ2hhbGwtY3JlYXRlLWJ1dHRvbic7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUJ1dHRvbi5pbm5lclRleHQgPSAn5Yib5bu65oi/6Ze0JztcbiAgICAgICAgdGhpcy5fY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJvb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Jvb21JZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5fcm9vbUlkSW5wdXQuY2xhc3NOYW1lID0gJ2hhbGwtcmlkLWlucHV0JztcblxuICAgICAgICB0aGlzLl9lbnRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9lbnRlckJ1dHRvbi5jbGFzc05hbWUgPSAnaGFsbC1lbnRlci1idXR0b24nO1xuICAgICAgICB0aGlzLl9lbnRlckJ1dHRvbi5pbm5lclRleHQgPSAn5Yqg5YWl5oi/6Ze0JztcbiAgICAgICAgdGhpcy5fZW50ZXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW50ZXJSb29tKHRoaXMuX3Jvb21JZElucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9ib3guY2xhc3NOYW1lID0gJ2hhbGwtYm94JztcblxuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQnV0dG9uKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3Jvb21JZElucHV0KTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX2VudGVyQnV0dG9uKTtcblxuICAgICAgICB0aGlzLl9hcHAucm9vdC5hcHBlbmRDaGlsZCh0aGlzLl9ib3gpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2NyZWF0ZVJvb20oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hcHAubmV0d29yay5ub3RpZnkoe1xuICAgICAgICAgICAgICAgIHJvdXRlOiAnSGFsbC5DcmVhdGVSb29tJyxcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXRjb2RlID09PSBSRVRfU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Yib5bu65oi/6Ze05oiQ5YqfJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+WIm+W7uuaIv+mXtOWksei0pScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9lbnRlclJvb20ocmlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgcm91dGU6ICdIYWxsLkVudGVyUm9vbScsXG4gICAgICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgICAgICByaWQ6IHJpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXRjb2RlID09PSBSRVRfU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6L+b5YWl5oi/6Ze05oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfov5vlhaXmiL/pl7TlpLHotKUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9IYWxsT3B0aW9ucykge1xuICAgICAgICB0aGlzLl9hcHAgPSBvcHRpb25zLmFwcDtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBjb25zb2xlLmxvZygn6L+b5YWl5aSn5Y6FJyk7XG5cbiAgICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfnprvlvIDlpKfljoUnKTtcblxuICAgICAgICB0aGlzLl9oaWRlKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUm9vbSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2NyZWF0ZVJvb20oKTtcblxuICAgICAgICB0aGlzLl9hcHAuZW50ZXJSb29tKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZW50ZXJSb29tKHJpZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IGF3YWl0IHRoaXMuX2VudGVyUm9vbShyaWQpO1xuXG4gICAgICAgIHJlc3VsdC5yb29tSWQgPSByaWQ7XG4gICAgICAgIHRoaXMuX2FwcC5lbnRlclJvb20ocmVzdWx0KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIYWxsOyIsImltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0ICcuL3JlbmRlci9wb2x5ZmlsbCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXIvVXNlcic7XG5cblxuKDxhbnk+d2luZG93KS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBhcHAgPSBuZXcgQXBwKHtcbiAgICAgICAgcm9vdDogPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb290JylcbiAgICB9KTtcblxuICAgICg8YW55PndpbmRvdykuYXBwID0gYXBwO1xufTtcblxuKDxhbnk+d2luZG93KS5zdGFydFRlc3QgPSBmdW5jdGlvbihhcHA6IEFwcCkge1xuICAgIGFwcC5kZWJ1Z2dlciA9IHRydWU7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYXBwLl91c2VyID0gbmV3IFVzZXIoe1xuICAgICAgICB1aWQ6ICdhJyxcbiAgICAgICAgbmFtZTogJ2EnXG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYXBwLl9ib3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhcHAuZW50ZXJIYWxsKCk7XG4gICAgYXBwLmVudGVyUm9vbSh7XG4gICAgICAgIHJvb21JZDogJzEyMycsXG4gICAgICAgIHBsYXllcnM6IHtcbiAgICAgICAgICAgICdhJzoge1xuICAgICAgICAgICAgICAgIHBsYXllck5hbWU6ICdhJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnYic6IHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lOiAnYicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2MnOiB7XG4gICAgICAgICAgICAgICAgcGxheWVyTmFtZTogJ2MnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAyLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYXBwLnJvb20uX2VudGVyQXNrTGFuZGxvcmQoe1xuICAgICAgICBhc2tQbGF5ZXI6ICdhJyxcbiAgICAgICAgcHVrZXM6IFtcIjEtMjlcIiwgXCI0LTI5XCIsIFwiNC0yMlwiLCBcIjItMzFcIiwgXCIxLTI0XCIsIFwiMi0yNVwiLCBcIjItMjFcIiwgXCIzLTI2XCIsIFwiMy0xOVwiLCBcIjEtMjFcIiwgXCIzLTMwXCIsIFwiMy0zMVwiLCBcIjMtMjFcIiwgXCI0LTI2XCIsIFwiMi0zMFwiLCBcIjEtMzBcIiwgXCIxLTI3XCJdXG4gICAgfSk7XG5cbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAvLyBAdHMtaWdub3JlXG4gICAgLy8gICAgIGFwcC5yb29tLl9nYW1lU3RhcnQoe1xuICAgIC8vICAgICAgICAgbGFuZGxvcmRQbGF5ZXI6ICdhJyxcbiAgICAvLyAgICAgICAgIGxhbmRsb3JkUHVrZXM6IFtcIjEtMjlcIiwgXCI0LTI5XCIsIFwiNC0yMlwiXVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9LCAzMDAwKTtcblxuICAgICg8YW55PndpbmRvdykuc29tZW9uZVB1a2VzID0gZnVuY3Rpb24odXNlcjogc3RyaW5nKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgYXBwLnJvb20uX3BsYXllclB1a2VzKHtcbiAgICAgICAgICAgIHBsYXllcjogdXNlcixcbiAgICAgICAgICAgIHB1a2VzOiBbJzEtMjknLCAnNC0yOScsICcxLTI5JywgJzQtMjknLCAnMS0yOScsICc0LTI5JywgJzEtMjknLCAnNC0yOSddXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbiIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uL3JlbmRlci9FdmVudERpc3BhdGNoZXJcIjtcblxuaW50ZXJmYWNlIGlfTmV0d29ya09wdGlvbnMge1xuICAgIGhvc3Q6IHN0cmluZztcbiAgICBwb3J0PzogbnVtYmVyO1xuICAgIHVzZVNlY3VyaXR5PzogYm9vbGVhblxufVxuXG5lbnVtIE5FVFdPUktfU1RBVFVTIHtcbiAgICBVTk9QRU4sXG4gICAgT1BFTklORyxcbiAgICBPUEVORURcbn07XG5cbmNsYXNzIE5ldHdvcmsgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAgIHByaXZhdGUgX2hvc3Q6IHN0cmluZztcbiAgICBwcml2YXRlIF9wb3J0OiBudW1iZXJ8bnVsbDtcbiAgICBwcml2YXRlIF91c2VTZWN1cml0eTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jYWxsYmFja0luZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2NhbGxiYWNrczogRnVuY3Rpb25bXSA9IFtdO1xuICAgIHByaXZhdGUgX3N0YXR1czogTkVUV09SS19TVEFUVVM7XG4gICAgcHJpdmF0ZSBfd3M/OiBXZWJTb2NrZXQ7XG5cbiAgICBwcml2YXRlIF9wcm9jZXNzTWVzc2FnZShtc2c6IGFueSkge1xuICAgICAgICAvLyByZXNwb25zZea2iOaBr1xuICAgICAgICBpZiAobXNnLmlkKSB7XG4gICAgICAgICAgICBsZXQgY2IgPSB0aGlzLl9jYWxsYmFja3NbbXNnLmlkXTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1ttc2cuaWRdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uIGZvciByZXF1ZXN0OiAnLCBtc2cuaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2IobXNnLmJvZHkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmnI3liqHlmajmjqjpgIHmtojmga9cbiAgICAgICAgbGV0IHJvdXRlID0gbXNnLnJvdXRlO1xuXG4gICAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ25vIHJvdXRlIGluIG1lc3NhZ2UnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChyb3V0ZSwgbXNnLmRhdGEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Byb2Nlc3NNZXNzYWdlQmF0Y2gobXNnOiBhbnkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NNZXNzYWdlKG1zZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX05ldHdvcmtPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5faG9zdCA9IG9wdGlvbnMuaG9zdDtcbiAgICAgICAgdGhpcy5fcG9ydCA9IG9wdGlvbnMucG9ydCB8fCBudWxsO1xuICAgICAgICB0aGlzLl91c2VTZWN1cml0eSA9IG9wdGlvbnMudXNlU2VjdXJpdHkgfHwgZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fc3RhdHVzID0gTkVUV09SS19TVEFUVVMuVU5PUEVOO1xuICAgIH1cblxuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLl91c2VTZWN1cml0eT8nd3NzJzond3MnfTovLyR7dGhpcy5faG9zdH1gO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgICAgICAgICAgIHVybCArPSBgOiR7dGhpcy5fcG9ydH1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl93cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gTkVUV09SS19TVEFUVVMuT1BFTklORztcblxuICAgICAgICAgICAgdGhpcy5fd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IE5FVFdPUktfU1RBVFVTLk9QRU5FRDtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fd3Mub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBORVRXT1JLX1NUQVRVUy5VTk9QRU47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nsb3NlJyk7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX3dzLm9ubWVzc2FnZSA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc01lc3NhZ2VCYXRjaChkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzTWVzc2FnZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnkobXNnOiBhbnksIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbXNnLmlkID0gKyt0aGlzLl9jYWxsYmFja0luZGV4O1xuXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbbXNnLmlkXSA9IGNhbGxiYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fd3Muc2VuZChKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXR3b3JrOyIsImltcG9ydCBEaXNwbGF5T2JqZWN0LCB7IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgfSBmcm9tIFwiLi9EaXNwbGF5T2JqZWN0XCI7XG5cbmV4cG9ydCB0eXBlIGlfQml0bWFwT3B0aW9ucyA9IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgJiB7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG59XG5cbmNsYXNzIEJpdG1hcCBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xuICAgIHByb3RlY3RlZCBfaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0JpdG1hcE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5faW1hZ2UgPSBvcHRpb25zLmltYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4suafk1xuICAgICAqIEBwYXJhbSB7Kn0gY3R4IFxuICAgICAqL1xuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBzdXBlci5yZW5kZXIoY3R4KTtcblxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaXRtYXA7IiwiaW1wb3J0IERpc3BsYXlPYmplY3QsIHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG4gICAgcHJvdGVjdGVkIF9jaGlsZHJlbjogRGlzcGxheU9iamVjdFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX0Rpc3BsYXlPYmplY3RPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOS4quWFg+e0oFxuICAgICAqIOWcqGNoaWxkcmVu6LaK5b6A5ZCO77yMaW5kZXjotorlpKfvvIzlsYLnuqfotorpq5hcbiAgICAgKiBAcGFyYW0geyp9IG9iamVjdCBcbiAgICAgKi9cbiAgICBhZGRDaGlsZHJlbihvYmplY3Q6IERpc3BsYXlPYmplY3QsIGluZGV4PzogbnVtYmVyKSB7XG4gICAgICAgIG9iamVjdC5wYXJlbnQgPSB0aGlzO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKG9iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTmn5DkuKrlhYPntKBcbiAgICAgKiBAcGFyYW0geyp9IG9iamVjdCBcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZHJlbihvYmplY3Q6IERpc3BsYXlPYmplY3QpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2Yob2JqZWN0KTtcbiAgICAgICAgaWYgKHBvcyA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShwb3MsIDEpO1xuICAgICAgICBvYmplY3QucGFyZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLLmn5NcbiAgICAgKiBAcGFyYW0geyp9IGN0eCBcbiAgICAgKi9cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAgICAgICBjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2Rpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY3R4Ll9fc2F2ZVRyYW5zZm9ybSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGN0eC5fX3RyYW5zZm9ybSh0aGlzLl9tYXRyaXgpO1xuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5kaXNwbGF5ICYmIGl0ZW0ucmVuZGVyICYmIGl0ZW0ucmVuZGVyKGN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY3R4Ll9fcmVzdG9yZVRyYW5zZm9ybSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOinpuWPkeS6i+S7tu+8jOS4jeS7heS7heiHquW3seeahOimgeinpuWPke+8jOi/mOimgemAj+S8oOWIsOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudChldmVudDogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIHN1cGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQsIGRhdGEpO1xuXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5kaXNwYXRjaEV2ZW50ICYmIGl0ZW0uZGlzcGF0Y2hFdmVudChldmVudCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4vRXZlbnREaXNwYXRjaGVyJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2Jhc2UvUG9pbnQnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9iYXNlL1JlY3QnO1xuaW1wb3J0IE1hdHJpeDJEIGZyb20gJy4vYmFzZS9NYXRyaXgyRCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG59XG5cbmNsYXNzIERpc3BsYXlPYmplY3QgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAgIHByb3RlY3RlZCBfd2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2hlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfbWF0cml4OiBNYXRyaXgyRDtcbiAgICBwcm90ZWN0ZWQgX3BhcmVudDogRGlzcGxheU9iamVjdHxudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX2Rpc3BsYXk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICog6I635b6X55u45q+U6L6D5LqO5YWo5bGA55qEbWF0cml4XG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9nZXRHbG9iYWxNYXRyaXgoKTogTWF0cml4MkQge1xuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50Ll9nZXRHbG9iYWxNYXRyaXgoKS50cmFuc2Zvcm1NYXRyaXgodGhpcy5fbWF0cml4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXRyaXguY2xvbmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluivpWRpc3BsYXlvYmplY3TnmoRyZWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9nZXRBQUJCKCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICAgICAgICB0aGlzLl9tYXRyaXgudHgsXG4gICAgICAgICAgICB0aGlzLl9tYXRyaXgudHksXG4gICAgICAgICAgICB0aGlzLl93aWR0aCxcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfRGlzcGxheU9iamVjdE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl93aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuX21hdHJpeCA9IG5ldyBNYXRyaXgyRCgpO1xuICAgICAgICB0aGlzLl9tYXRyaXgudHJhbnNsYXRlKG9wdGlvbnMubGVmdCwgb3B0aW9ucy50b3ApO1xuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF0cml4LnR4O1xuICAgIH1cblxuICAgIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF0cml4LnR5O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuXG4gICAgc2V0IHBhcmVudChvYmo6IERpc3BsYXlPYmplY3R8bnVsbCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBvYmo7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmVudCgpOiBEaXNwbGF5T2JqZWN0fG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cblxuICAgIHNldCBkaXNwbGF5KGQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IGQ7XG4gICAgfVxuXG4gICAgZ2V0IGRpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruS9jee9rlxuICAgICAqIEBwYXJhbSB7Kn0geCBcbiAgICAgKiBAcGFyYW0geyp9IHkgXG4gICAgICovXG4gICAgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF0cml4LnR4ID0geDtcbiAgICAgICAgdGhpcy5fbWF0cml4LnR5ID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB45pa55ZCR5YGP56e7XG4gICAgICogQHBhcmFtIHggXG4gICAgICovXG4gICAgdHJhbnNsYXRlWCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF0cml4LnRyYW5zbGF0ZVgoeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeeaWueWQkeWBj+enu1xuICAgICAqIEBwYXJhbSB5IFxuICAgICAqL1xuICAgIHRyYW5zbGF0ZVkoeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21hdHJpeC50cmFuc2xhdGVZKHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIpOaWreaYr+WQpuWcqEFBQkLkuK1cbiAgICAgKiDms6jmhI/vvIzov5nph4x477yMeeaYr2dsb2JhbOeahOWdkOagh++8jOayoeaciee7j+i/h3RyYW5zZm9ybVxuICAgICAqIOaJgOS7peimgei/m+ihjOmAhuefqemYteiuoeeul1xuICAgICAqIEBwYXJhbSB7Kn0geCBcbiAgICAgKiBAcGFyYW0geyp9IHkgXG4gICAgICovXG4gICAgY29udGFpbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoeCwgeSk7XG4gICAgICAgIGxldCBtYXRyaXg6IE1hdHJpeDJEO1xuXG4gICAgICAgIC8vIOWFiOaxguWHuuWujOaVtOeahOefqemYtVxuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICBtYXRyaXggPSB0aGlzLl9wYXJlbnQuX2dldEdsb2JhbE1hdHJpeCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeDJEKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlho3msYLpgIbnn6npmLVcbiAgICAgICAgbWF0cml4LmludmVydCgpO1xuICAgICAgICBcbiAgICAgICAgLy8g54K56L+b6KGM55+p6Zi15Y+Y5o2iXG4gICAgICAgIHBvaW50LnRyYW5zZm9ybVdpdGhNYXRyaXgobWF0cml4KTtcblxuICAgICAgICBsZXQgcmVjdCA9IHRoaXMuX2dldEFBQkIoKTtcblxuICAgICAgICByZXR1cm4gcmVjdC5jb250YWlucyhwb2ludCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZqQ6JePXG4gICAgICovXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleekulxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGN0eC5fX3NhdmVUcmFuc2Zvcm0oKTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGN0eC5fX3RyYW5zZm9ybSh0aGlzLl9tYXRyaXgpO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY3R4Ll9fcmVzdG9yZVRyYW5zZm9ybSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlPYmplY3Q7IiwiaW50ZXJmYWNlIGlfTGlzdGVuZXJzIHtcbiAgICBba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdXG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgcHJpdmF0ZSBfbGlzdGVuZXJzOiBpX0xpc3RlbmVycyA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfaGFzRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5pbmRleE9mKGZ1bmMpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2goZnVuYyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5faGFzRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLmluZGV4T2YoZnVuYyk7XG5cbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hFdmVudCh0eXBlOiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdW2ldLmNhbGwodGhpcywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGlzcGF0Y2hlcjsiLCJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5jb25zdCBlbnVtIFJFU09VUkNFX1RZUEUge1xuICAgIElNQUdFLFxuICAgIEFVRElPLFxufTtcblxuY29uc3QgZW51bSBSRVNPVVJDRV9TVEFUVVMge1xuICAgIExPQURJTkcsXG4gICAgQ09NUExFVEVELFxuICAgIEZBSUxFRFxufTtcblxuY2xhc3MgUmVzb3VyY2VNYW5hZ2UgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICAgIC8vIOaAu+WFsemcgOimgeWKoOi9veeahOi1hOa6kFxuICAgIHByaXZhdGUgX3RvdGFsOiBudW1iZXI7XG4gICAgLy8g5q2j5Zyo5Yqg6L2955qE6LWE5rqQXG4gICAgcHJpdmF0ZSBfbG9hZGluZzogbnVtYmVyO1xuICAgIC8vIOW9k+WJjeW3sue7j+WKoOi9veeahOi1hOa6kFxuICAgIHByaXZhdGUgX2NvbXBsZXRlZDogbnVtYmVyO1xuICAgIC8vIOWKoOi9veWksei0peeahOi1hOa6kFxuICAgIHByaXZhdGUgX2ZhaWxlZDogbnVtYmVyO1xuXG4gICAgLy8g6YWN572uXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBhbnkgPSB7fTtcblxuICAgIHByaXZhdGUgX2xvYWQoa2V5OiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsKys7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcrKztcblxuICAgICAgICBpZiAodXJsLm1hdGNoKC9wbmd8anBnLykpIHtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IHRoaXMuX2xvYWRJbWFnZSh1cmwpO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1trZXldLnN0YXR1cyA9IFJFU09VUkNFX1NUQVRVUy5DT01QTEVURUQ7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlTG9hZGVkKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ+i1hOa6kOWKoOi9veWksei0pTogJywga2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdba2V5XS5zdGF0dXMgPSBSRVNPVVJDRV9TVEFUVVMuRkFJTEVEO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLl9jb25maWdba2V5XSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRVNPVVJDRV9UWVBFLklNQUdFLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbWFnZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJFU09VUkNFX1NUQVRVUy5MT0FESU5HXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5rKh5pyJ6Z+z5LmQXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3VwcG9ydCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9hZEltYWdlKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XG5cbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUxvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZy0tO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWQrKztcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uUHJvZ3Jlc3MnKTtcblxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbkNvbXBsZXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVFcnJvciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZy0tO1xuICAgICAgICB0aGlzLl9mYWlsZWQrKztcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uRmFpbCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmcgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25Db21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fdG90YWwgPSAwO1xuICAgICAgICB0aGlzLl9sb2FkaW5nID0gMDtcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gMDtcbiAgICAgICAgdGhpcy5fZmFpbGVkID0gMDtcbiAgICB9XG5cbiAgICBnZXQgdG90YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuXG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgICB9XG5cbiAgICBnZXQgZmFpbGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFpbGVkO1xuICAgIH1cblxuICAgIGxvYWQoY29uZmlnOiBhbnkpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkKGtleSwgY29uZmlnW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgICAgIC8vIOWPr+S7peacieaYr+WQpuWksei0peOAgemHjeivleeahOWIpOaWrVxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnW2tleV0udmFsdWU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJlc291cmNlTWFuYWdlKCk7IiwiaW1wb3J0IERpc3BsYXlPYmplY3QsIHsgaV9EaXNwbGF5T2JqZWN0T3B0aW9ucyB9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcblxuZXhwb3J0IHR5cGUgaV9UZXh0T3B0aW9ucyA9IGlfRGlzcGxheU9iamVjdE9wdGlvbnMgJiB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIGJvbGQ/OiBib29sZWFuO1xuICAgIHNpemU6IG51bWJlcjtcbn1cblxuY2xhc3MgVGV4dCBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xuICAgIHN0YXRpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHN0YXRpYyBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgVGV4dC5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgVGV4dC5jYW52YXMud2lkdGggPSAxO1xuICAgICAgICBUZXh0LmNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gICAgICAgIFRleHQuY2FudmFzLmRpciA9ICdsdHInO1xuICAgICAgICBUZXh0LmN0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+VGV4dC5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3RleHQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2NvbG9yOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIF9ib2xkOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBfc2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ZvbnRTdHlsZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfdGV4dFdpZHRoOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICog6K6h566X5Ye65paH5a2X55qE5a695bqmXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0V2lkdGgoKSB7XG4gICAgICAgIFRleHQuY3R4LmZvbnQgPSB0aGlzLl9mb250U3R5bGU7XG4gICAgICAgIHRoaXMuX3RleHRXaWR0aCA9IFRleHQuY3R4Lm1lYXN1cmVUZXh0KHRoaXMuX3RleHQpLndpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuoeeul+WHuuaWh+Wtl+eahOagt+W8j1xuICAgICAqL1xuICAgIHByaXZhdGUgX2dldEZvbnRTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5fZm9udFN0eWxlID0gYCR7dGhpcy5fYm9sZCA/ICdib2xkJyA6ICcnfSAke3RoaXMuX3NpemV9cHgg5b6u6L2v6ZuF6buRYDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBpX1RleHRPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX3RleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgIHRoaXMuX2NvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnIzAwMDAwMCc7XG4gICAgICAgIHRoaXMuX2JvbGQgPSBvcHRpb25zLmJvbGQgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuX3NpemUgPSBvcHRpb25zLnNpemU7XG5cbiAgICAgICAgdGhpcy5fZ2V0Rm9udFN0eWxlKCk7XG4gICAgICAgIHRoaXMuX2dldFdpZHRoKCk7XG4gICAgfVxuXG4gICAgZ2V0IHRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgIH1cblxuICAgIHNldCB0ZXh0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZ2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgICB9XG5cbiAgICBzZXQgY29sb3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYm9sZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvbGQ7XG4gICAgfVxuXG4gICAgc2V0IGJvbGQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYm9sZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9nZXRGb250U3R5bGUoKTtcbiAgICAgICAgdGhpcy5fZ2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgc2V0IHNpemUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9nZXRGb250U3R5bGUoKTtcbiAgICAgICAgdGhpcy5fZ2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5jbGlwKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5fZm9udFN0eWxlO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5fY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLl9ib2xkID8gMiA6IDE7XG4gICAgICAgIGN0eC5maWxsVGV4dChcbiAgICAgICAgICAgIHRoaXMuX3RleHQsIFxuICAgICAgICAgICAgdGhpcy54ICsgKHRoaXMud2lkdGggLSB0aGlzLl90ZXh0V2lkdGgpIC8gMiwgXG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDJcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxufTtcblxuVGV4dC5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7IiwiY2xhc3MgTWF0cml4MkQge1xuICAgIHB1YmxpYyBhOiBudW1iZXI7XG4gICAgcHVibGljIGI6IG51bWJlcjtcbiAgICBwdWJsaWMgYzogbnVtYmVyO1xuICAgIHB1YmxpYyBkOiBudW1iZXI7XG4gICAgcHVibGljIHR4OiBudW1iZXI7XG4gICAgcHVibGljIHR5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIgPSAxLCBiOiBudW1iZXIgPSAwLCBjOiBudW1iZXIgPSAwLCBkOiBudW1iZXIgPSAxLCB0eDogbnVtYmVyID0gMCwgdHk6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5hID0gYTtcbiAgICAgICAgdGhpcy5iID0gYjtcbiAgICAgICAgdGhpcy5jID0gYztcbiAgICAgICAgdGhpcy5kID0gZDtcbiAgICAgICAgdGhpcy50eCA9IHR4O1xuICAgICAgICB0aGlzLnR5ID0gdHk7XG4gICAgfVxuXG4gICAgY2xvbmUoKTogTWF0cml4MkQge1xuICAgICAgICBsZXQgbWF0cml4ID0gbmV3IE1hdHJpeDJEKCk7XG5cbiAgICAgICAgbWF0cml4LmEgPSB0aGlzLmE7XG4gICAgICAgIG1hdHJpeC5iID0gdGhpcy5iO1xuICAgICAgICBtYXRyaXguYyA9IHRoaXMuYztcbiAgICAgICAgbWF0cml4LmQgPSB0aGlzLmQ7XG4gICAgICAgIG1hdHJpeC50eCA9IHRoaXMudHg7XG4gICAgICAgIG1hdHJpeC50eSA9IHRoaXMudHk7XG5cbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5hID0gMTtcbiAgICAgICAgdGhpcy5iID0gMDtcbiAgICAgICAgdGhpcy5jID0gMDtcbiAgICAgICAgdGhpcy5kID0gMTtcbiAgICAgICAgdGhpcy50eCA9IDA7XG4gICAgICAgIHRoaXMudHkgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWBj+enu1xuICAgICAqIEBwYXJhbSB7Kn0geCBcbiAgICAgKiBAcGFyYW0geyp9IHkgXG4gICAgICovXG4gICAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudHggKz0geDtcbiAgICAgICAgdGhpcy50eSArPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHjmlrnlkJHlgY/np7tcbiAgICAgKiBAcGFyYW0geyp9IHggXG4gICAgICovXG4gICAgdHJhbnNsYXRlWCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50eCArPSB4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHnmlrnlkJHnmoTlgY/np7tcbiAgICAgKiBAcGFyYW0geyp9IHkgXG4gICAgICovXG4gICAgdHJhbnNsYXRlWSh5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50eSArPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe8qeaUvlxuICAgICAqIEBwYXJhbSB7Kn0geCBcbiAgICAgKiBAcGFyYW0geyp9IHkgXG4gICAgICovXG4gICAgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hICo9IHg7XG4gICAgICAgIHRoaXMuYyAqPSB4O1xuICAgICAgICB0aGlzLnR4ICo9IHg7XG5cbiAgICAgICAgdGhpcy5iICo9IHk7XG4gICAgICAgIHRoaXMuZCAqPSB5O1xuICAgICAgICB0aGlzLnR5ICo9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogeOaWueWQkee8qeaUvlxuICAgICAqIEBwYXJhbSB7Kn0geCBcbiAgICAgKi9cbiAgICBzY2FsZVgoeDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYSAqPSB4O1xuICAgICAgICB0aGlzLmMgKj0geDtcbiAgICAgICAgdGhpcy50eCAqPSB4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHnmlrnlkJHnvKnmlL5cbiAgICAgKiBAcGFyYW0geyp9IHkgXG4gICAgICovXG4gICAgc2NhbGVZKHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmIgKj0geTtcbiAgICAgICAgdGhpcy5kICo9IHk7XG4gICAgICAgIHRoaXMudHkgKj0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDoh6rouqvnn6npmLXkuI7lj6blpJbkuIDkuKrnn6npmLXnm7jkuZhcbiAgICAgKiBAcGFyYW0geyp9IG1hdHJpeCBcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldFxuICAgICAqL1xuICAgIHRyYW5zZm9ybU1hdHJpeChtYXRyaXg6IE1hdHJpeDJELCB0YXJnZXQ/OiBNYXRyaXgyRCk6IE1hdHJpeDJEIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0LmEgPSB0aGlzLmEgKiBtYXRyaXguYTtcbiAgICAgICAgdGFyZ2V0LmIgPSAwO1xuICAgICAgICB0YXJnZXQuYyA9IDA7XG4gICAgICAgIHRhcmdldC5kID0gdGhpcy5kICogbWF0cml4LmQ7XG4gICAgICAgIHRhcmdldC50eCA9IHRoaXMuYSAqIG1hdHJpeC50eCArIHRoaXMudHg7XG4gICAgICAgIHRhcmdldC50eSA9IHRoaXMuZCAqIG1hdHJpeC50eSArIHRoaXMudHk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDoh6rouqvnn6npmLXnmoTpgIbnn6npmLVcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldFxuICAgICAqL1xuICAgIGludmVydCh0YXJnZXQ/OiBNYXRyaXgyRCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYSA9IHRoaXMuYTtcbiAgICAgICAgbGV0IGIgPSB0aGlzLmI7XG4gICAgICAgIGxldCBjID0gdGhpcy5jO1xuICAgICAgICBsZXQgZCA9IHRoaXMuZDtcbiAgICAgICAgbGV0IHR4ID0gdGhpcy50eDtcbiAgICAgICAgbGV0IHR5ID0gdGhpcy50eTtcbiAgICAgICAgaWYgKGIgPT0gMCAmJiBjID09IDApIHtcbiAgICAgICAgICAgIHRhcmdldC5iID0gdGFyZ2V0LmMgPSAwO1xuICAgICAgICAgICAgaWYgKGEgPT0gMCB8fCBkID09IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYSA9IHRhcmdldC5kID0gdGFyZ2V0LnR4ID0gdGFyZ2V0LnR5ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYSA9IHRhcmdldC5hID0gMSAvIGE7XG4gICAgICAgICAgICAgICAgZCA9IHRhcmdldC5kID0gMSAvIGQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnR4ID0gLWEgKiB0eDtcbiAgICAgICAgICAgICAgICB0YXJnZXQudHkgPSAtZCAqIHR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjO1xuICAgICAgICBpZiAoZGV0ZXJtaW5hbnQgPT0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRldGVybWluYW50ID0gMSAvIGRldGVybWluYW50O1xuICAgICAgICBsZXQgayA9IHRhcmdldC5hID0gZCAqIGRldGVybWluYW50O1xuICAgICAgICBiID0gdGFyZ2V0LmIgPSAtYiAqIGRldGVybWluYW50O1xuICAgICAgICBjID0gdGFyZ2V0LmMgPSAtYyAqIGRldGVybWluYW50O1xuICAgICAgICBkID0gdGFyZ2V0LmQgPSBhICogZGV0ZXJtaW5hbnQ7XG4gICAgICAgIHRhcmdldC50eCA9IC0oayAqIHR4ICsgYyAqIHR5KTtcbiAgICAgICAgdGFyZ2V0LnR5ID0gLShiICogdHggKyBkICogdHkpO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMuYSwgdGhpcy5iLCBcbiAgICAgICAgICAgIHRoaXMuYywgdGhpcy5kLCBcbiAgICAgICAgICAgIHRoaXMudHgsIHRoaXMudHlcbiAgICAgICAgXTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXgyRDsiLCJpbXBvcnQgTWF0cml4MkQgZnJvbSBcIi4vTWF0cml4MkRcIjtcblxuY2xhc3MgUG9pbnQge1xuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgfVxuXG4gICAgZ2V0IHgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XG4gICAgfVxuXG4gICAgZ2V0IHkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55u05o6l5L+u5pS55L2N572uXG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICovXG4gICAgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOivpeeCuee7j+i/h+S4gOS4qm1hdHJpeOWPmOaNolxuICAgICAqIEBwYXJhbSBtYXRyaXggXG4gICAgICovXG4gICAgdHJhbnNmb3JtV2l0aE1hdHJpeChtYXRyaXg6IE1hdHJpeDJEKSB7XG4gICAgICAgIHRoaXMuX3ggPSBtYXRyaXguYSAqIHRoaXMuX3ggKyBtYXRyaXgudHg7XG4gICAgICAgIHRoaXMuX3kgPSBtYXRyaXguZCAqIHRoaXMuX3kgKyBtYXRyaXgudHk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7IiwiaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgTWF0cml4MkQgZnJvbSBcIi4vTWF0cml4MkRcIjtcblxuY2xhc3MgUmVjdCB7XG4gICAgcHJpdmF0ZSBfeDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3O1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoO1xuICAgIH1cblxuICAgIGdldCB4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgIH1cblxuICAgIGdldCB5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebtOaOpeiuvue9ruefqeW9oueahOS9jee9rlxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqL1xuICAgIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmn5DkuKrngrnmmK/lkKblnKjor6Xnn6nlnovlhoXpg6hcbiAgICAgKiBAcGFyYW0gcG9pbnQgXG4gICAgICovXG4gICAgY29udGFpbnMocG9pbnQ6IFBvaW50KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeVxuICAgICAgICB9ID0gcG9pbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB4ID4gdGhpcy54ICYmXG4gICAgICAgICAgICB4IDwgdGhpcy54ICsgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgeSA+IHRoaXMueSAmJlxuICAgICAgICAgICAgeSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDor6Xnn6nlnovnu4/ov4fkuIDkuKptYXRyaXjlj5jmjaJcbiAgICAgKiBAcGFyYW0gbWF0cml4IFxuICAgICAqL1xuICAgIHRyYW5zZm9ybVdpdGhNYXRyaXgobWF0cml4OiBNYXRyaXgyRCkge1xuICAgICAgICBsZXQgYSA9IG1hdHJpeC5hO1xuICAgICAgICBsZXQgYiA9IG1hdHJpeC5iO1xuICAgICAgICBsZXQgYyA9IG1hdHJpeC5jO1xuICAgICAgICBsZXQgZCA9IG1hdHJpeC5kO1xuICAgICAgICBsZXQgdHggPSBtYXRyaXgudHg7XG4gICAgICAgIGxldCB0eSA9IG1hdHJpeC50eTtcblxuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG4gICAgICAgIGxldCB4TWF4ID0geCArIHRoaXMud2lkdGg7XG4gICAgICAgIGxldCB5TWF4ID0geSArIHRoaXMuaGVpZ2h0O1xuXG4gICAgICAgIGxldCB4MCA9IGEgKiB4ICsgYyAqIHkgKyB0eDtcbiAgICAgICAgbGV0IHkwID0gYiAqIHggKyBkICogeSArIHR5O1xuICAgICAgICBsZXQgeDEgPSBhICogeE1heCArIGMgKiB5ICsgdHg7XG4gICAgICAgIGxldCB5MSA9IGIgKiB4TWF4ICsgZCAqIHkgKyB0eTtcbiAgICAgICAgbGV0IHgyID0gYSAqIHhNYXggKyBjICogeU1heCArIHR4O1xuICAgICAgICBsZXQgeTIgPSBiICogeE1heCArIGQgKiB5TWF4ICsgdHk7XG4gICAgICAgIGxldCB4MyA9IGEgKiB4ICsgYyAqIHlNYXggKyB0eDtcbiAgICAgICAgbGV0IHkzID0gYiAqIHggKyBkICogeU1heCArIHR5O1xuXG4gICAgICAgIGxldCB0bXAgPSAwO1xuXG4gICAgICAgIGlmICh4MCA+IHgxKSB7XG4gICAgICAgICAgICB0bXAgPSB4MDtcbiAgICAgICAgICAgIHgwID0geDE7XG4gICAgICAgICAgICB4MSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeDIgPiB4Mykge1xuICAgICAgICAgICAgdG1wID0geDI7XG4gICAgICAgICAgICB4MiA9IHgzO1xuICAgICAgICAgICAgeDMgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl94ID0gTWF0aC5mbG9vcih4MCA8IHgyID8geDAgOiB4Mik7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gTWF0aC5jZWlsKCh4MSA+IHgzID8geDEgOiB4MykgLSB0aGlzLngpO1xuXG4gICAgICAgIGlmICh5MCA+IHkxKSB7XG4gICAgICAgICAgICB0bXAgPSB5MDtcbiAgICAgICAgICAgIHkwID0geTE7XG4gICAgICAgICAgICB5MSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeTIgPiB5Mykge1xuICAgICAgICAgICAgdG1wID0geTI7XG4gICAgICAgICAgICB5MiA9IHkzO1xuICAgICAgICAgICAgeTMgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl95ID0gTWF0aC5mbG9vcih5MCA8IHkyID8geTAgOiB5Mik7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IE1hdGguY2VpbCgoeTEgPiB5MyA/IHkxIDogeTMpIC0gdGhpcy55KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWN0OyIsImltcG9ydCBNYXRyaXgyRCBmcm9tIFwiLi9iYXNlL01hdHJpeDJEXCI7XG5cbig8YW55PkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUpLl9fbWF0cml4ID0gbmV3IE1hdHJpeDJEKCk7XG4oPGFueT5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlKS5fX21hdHJpeEFyciA9IFtdO1xuXG4oPGFueT5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlKS5fX3NhdmVUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgdCA9IHRoaXMuZ2V0VHJhbnNmb3JtKCk7XG4gICAgdGhpcy5fX21hdHJpeCA9IG5ldyBNYXRyaXgyRCh0LmEsIHQuYiwgdC5jLCB0LmQsIHQuZSwgdC5mKTtcbiAgICB0aGlzLl9fbWF0cml4QXJyLnVuc2hpZnQodGhpcy5fX21hdHJpeC5jbG9uZSgpKTtcbn07XG5cbig8YW55PkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUpLl9fdHJhbnNmb3JtID0gZnVuY3Rpb24obWF0cml4OiBNYXRyaXgyRCkge1xuICAgIHRoaXMuX19tYXRyaXgudHJhbnNmb3JtTWF0cml4KG1hdHJpeCk7XG4gICAgdGhpcy5zZXRUcmFuc2Zvcm0uYXBwbHkodGhpcywgdGhpcy5fX21hdHJpeC5zZXJpYWxpemUoKSk7XG59O1xuXG4oPGFueT5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlKS5fX3Jlc3RvcmVUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9fbWF0cml4ID0gdGhpcy5fX21hdHJpeEFyci5zaGlmdCgpO1xuICAgIHRoaXMuc2V0VHJhbnNmb3JtLmFwcGx5KHRoaXMsIHRoaXMuX19tYXRyaXguc2VyaWFsaXplKCkpO1xufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Sb29tLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Sb29tLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUm9vbS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgQXBwIGZyb20gXCIuLi9BcHBcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi91c2VyL1VzZXJcIjtcbmltcG9ydCBTdGFnZSwgeyBQTEFZRVJfUE9TSVRJT04gfSBmcm9tIFwiLi4vY29tcG9uZW50L1N0YWdlXCI7XG5pbXBvcnQgeyBjb21wYXJlUHVrZXMsIFJFVF9TVUNDRVNTLCBFVkVOVF9OQU1FIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi9yZW5kZXIvRXZlbnREaXNwYXRjaGVyXCI7XG5cbmltcG9ydCAnLi9Sb29tLmNzcyc7XG5cbmludGVyZmFjZSBpX1Jvb21PcHRpb25zIHtcbiAgICBhcHA6IEFwcCxcbn07XG5cbmVudW0gR0FNRV9UWVBFIHtcbiAgICBQTEFZLFxuICAgIFdBVENIXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIGlfUm9vbVNob3dPcHRpb25zIHtcbiAgICByb29tSWQ6IHN0cmluZyxcbiAgICBtYWluVWlkOiBzdHJpbmcsXG4gICAgcGxheWVyczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiB7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICBwb3NpdGlvbjogbnVtYmVyXG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5pbnRlcmZhY2UgaV9BZGRSaXZhbE9wdGlvbnMge1xuICAgIHBsYXllclVpZDogc3RyaW5nLFxuICAgIHBsYXllck5hbWU6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogbnVtYmVyXG59O1xuXG5jb25zdCBERUZBVUxUX1dJRFRIID0gNjAwO1xuY29uc3QgREVGQVVMVF9IRUlHSFQgPSAzNzU7XG5cbmZ1bmN0aW9uIHJlc29sdmVTY3JlZW4oc2NyZWVuV2lkdGg6IG51bWJlciwgc2NyZWVuSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAvLyDpq5jluqbkuIDlrpropoHlhajpg6jlsZXnpLrlh7rmnaXvvIjov5nph4znmoTpq5jluqbmjIfnmoTmmK/ml4vovazlkI7nmoTvvIlcbiAgICBsZXQgc2NhbGUgPSBzY3JlZW5IZWlnaHQgLyBERUZBVUxUX0hFSUdIVDtcbiAgICBsZXQgd2lkdGggPSBERUZBVUxUX1dJRFRIICogc2NhbGU7XG4gICAgbGV0IGxlZnQgPSAoc2NyZWVuV2lkdGggLSB3aWR0aCkgLyAyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogc2NyZWVuSGVpZ2h0XG4gICAgfTtcbn1cblxuY2xhc3MgUm9vbSBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgcHJpdmF0ZSBfYXBwOiBBcHA7XG4gICAgcHJpdmF0ZSBfcm9vbUlkITogc3RyaW5nO1xuICAgIC8vIOaYr+WQpuWIneWni+WMlui/h++8jOivpee7hOS7tuWPquS8muWIneWni+WMluS4gOasoVxuICAgIHByaXZhdGUgX2luaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIOaIv+mXtOeahGRvbeWuueWZqFxuICAgIHByaXZhdGUgX2JveCE6IEhUTUxEaXZFbGVtZW50O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcml2YXRlIF9zdGFnZTogU3RhZ2U7XG4gICAgLy8g546p5a626Ieq5bex55qE5L2N572uXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlciA9IDA7XG4gICAgLy8g5a+55omL55qEbWFwXG4gICAgcHJpdmF0ZSBfcml2YWw6IGFueSA9IHt9O1xuICAgIC8vIOS4u+inhuinkueahOeOqeWutmlkXG4gICAgcHJpdmF0ZSBfbWFpblVpZCE6IHN0cmluZztcbiAgICAvLyDmiL/pl7TmqKHlvI9cbiAgICBwcml2YXRlIF9nYW1lVHlwZSE6IEdBTUVfVFlQRTtcbiAgICAvLyDlvZPliY3moYzpnaLkuIrmnIDlpKfnmoTmiZHlhYvniYxcbiAgICBwcml2YXRlIF9kZXNrdG9wUHVrZXM6IHN0cmluZ1tdID0gW107XG4gICAgLy8g5b2T5YmN5qGM6Z2i5LiK5pyA5aSn55qE5omR5YWL54mM5Ye654mM6ICFXG4gICAgcHJpdmF0ZSBfZGVza3RvcFB1a2VzT3duZXIhOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbvvIzkuLvopoHmmK/nlJ/miJBzdGFnZVxuICAgICAqIEBwYXJhbSBpbmZvIFxuICAgICAqL1xuICAgIHByaXZhdGUgX3Nob3coaW5mbzogaV9Sb29tU2hvd09wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaW5mby5yb29tSWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhZ2Uuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5pdFN0YWdlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRVZFTlRfTkFNRS5ST09NX1NIT1csIGluZm8pO1xuXG4gICAgICAgIHRoaXMuX2FsbG9jYXRlUG9zaXRpb24oaW5mby5wbGF5ZXJzKTtcblxuICAgICAgICB0aGlzLl9hZGRNZXNzYWdlTGlzdGVuZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5fZ2FtZVR5cGUgPT09IEdBTUVfVFlQRS5QTEFZKSB7XG4gICAgICAgICAgICAvLyDnm5HlkKzmiYvniYzlj5jljJZcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuaGFuZFB1a2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2Nob29zZVB1a2VzQ2hhbmdlJywgdGhpcy5fY2hlY2tQdWtlc0NhblNob3QpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmJ1dHRvbkNvbnRyb2wuZW50ZXJSZWFkeShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJZzdGFnZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2luaXRTdGFnZSgpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5fYXBwLnJvb3Qub2Zmc2V0V2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLl9hcHAucm9vdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5fYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX2JveC5jbGFzc05hbWUgPSAncm9vbS1ib3gnO1xuICAgICAgICAvLyDlrr3pq5jlj43ovaxcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmhlaWdodCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7d2lkdGh9cHgpIHJvdGF0ZSg5MGRlZylgO1xuXG4gICAgICAgIC8vIOazqOaEj+WPguaVsFxuICAgICAgICBsZXQgcmVjdCA9IHJlc29sdmVTY3JlZW4oaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9zdGFnZSA9IG5ldyBTdGFnZSh7XG4gICAgICAgICAgICBhcHA6IHRoaXMuX2FwcCxcbiAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBvZmZzZXRYOiByZWN0LnRvcCxcbiAgICAgICAgICAgIG9mZnNldFk6IHJlY3QubGVmdFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zdGFnZS5jYW52YXMuc3R5bGUubGVmdCA9IGAke3JlY3QubGVmdH1weGA7XG4gICAgICAgIHRoaXMuX3N0YWdlLmNhbnZhcy5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcH1weGA7XG5cbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3N0YWdlLmNhbnZhcyk7XG5cbiAgICAgICAgdGhpcy5fYXBwLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5fYm94KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSb29t5bGV56S655qE5pe25YCZ77yM5YiG6YWN5L2N572uXG4gICAgICogQHBhcmFtIGluZm8gXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYWxsb2NhdGVQb3NpdGlvbihwbGF5ZXJzOiBhbnkpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uO1xuICAgICAgICBsZXQgcGxheWVyTmFtZTtcbiAgICAgICAgbGV0IHBsYXllclVpZDtcblxuICAgICAgICAvLyDlhYjmib7liLDoh6rlt7HnmoTkvY3nva5cbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBwbGF5ZXJzW3RoaXMuX21haW5VaWRdLnBvc2l0aW9uO1xuXG4gICAgICAgIGZvciAocGxheWVyVWlkIGluIHBsYXllcnMpIHtcbiAgICAgICAgICAgIHBsYXllck5hbWUgPSBwbGF5ZXJzW3BsYXllclVpZF0ucGxheWVyTmFtZTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gcGxheWVyc1twbGF5ZXJVaWRdLnBvc2l0aW9uO1xuXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJFbnRlclJvb20oe1xuICAgICAgICAgICAgICAgIHBsYXllck5hbWUsXG4gICAgICAgICAgICAgICAgcGxheWVyVWlkLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICB9KTsgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiL/pl7TmqKHlnZfpmpDol49cbiAgICAgKiDop6Pnu5Hmtojmga/mjqjpgIFcbiAgICAgKiDpmpDol49zdGFnZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZU1lc3NhZ2VMaXN0ZW5lcigpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgdXNlcklkIGluIHRoaXMuX3JpdmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJMZWF2ZVJvb20oe1xuICAgICAgICAgICAgICAgIHBsYXllcjogdXNlcklkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChFVkVOVF9OQU1FLlJPT01fSElERSk7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuaGlkZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZE1lc3NhZ2VMaXN0ZW5lcigpIHtcbiAgICAgICAgLy8g5a+55omL6L+b5YWlXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyRW50ZXJSb29tJywgdGhpcy5fcGxheWVyRW50ZXJSb29tKTtcblxuICAgICAgICAvLyDlr7nmiYvnprvlvIBcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJMZWF2ZVJvb20nLCB0aGlzLl9wbGF5ZXJMZWF2ZVJvb20pO1xuXG4gICAgICAgIC8vIOebkeWQrOeOqeWutuWHhuWkh1xuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdSb29tLlBsYXllclJlYWR5JywgdGhpcy5fcGxheWVyUmVhZHkpO1xuXG4gICAgICAgIC8vIOi/m+WFpeWPq+WcsOS4u+mYtuautVxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdSb29tLkVudGVyQXNrTGFuZGxvcmQnLCB0aGlzLl9lbnRlckFza0xhbmRsb3JkKTtcblxuICAgICAgICAvLyDlr7nmiYvlj6vlnLDkuLtcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJBc2tMYW5kbG9yZCcsIHRoaXMuX3BsYXllckFza0xhbmRsb3JkKTtcblxuICAgICAgICAvLyDov5vlhaXmiqLlnLDkuLvpmLbmrrVcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5FbnRlckdyYWJMYW5kbG9yZCcsIHRoaXMuX2VudGVyR3JhYkxhbmRsb3JkKTtcblxuICAgICAgICAvLyDlr7nmiYvmiqLlnLDkuLtcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJHcmFiTGFuZGxvcmQnLCB0aGlzLl9wbGF5ZXJHcmFiTGFuZGxvcmQpO1xuXG4gICAgICAgIC8vIOa4uOaIj+W8gOWni1xuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdSb29tLkdhbWVTdGFydCcsIHRoaXMuX2dhbWVTdGFydCk7XG5cbiAgICAgICAgLy8g5Ye654mMXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyU2hvdFB1a2VzJywgdGhpcy5fcGxheWVyUHVrZXMpO1xuXG4gICAgICAgIC8vIOe7p+e7reWHuueJjFxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdSb29tLkxvb3BQdWtlcycsIHRoaXMuX2xvb3BQdWtlcyk7XG5cbiAgICAgICAgLy8g5ri45oiP57uT5p2fXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLmFkZEV2ZW50TGlzdGVuZXIoJ1Jvb20uR2FtZU92ZXInLCB0aGlzLl9nYW1lT3Zlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlTWVzc2FnZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5yZW1vdmVFdmVudExpc3RlbmVyKCdSb29tLlBsYXllckVudGVyUm9vbScsIHRoaXMuX3BsYXllckVudGVyUm9vbSk7XG5cbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignUm9vbS5QbGF5ZXJMZWF2ZVJvb20nLCB0aGlzLl9wbGF5ZXJMZWF2ZVJvb20pO1xuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyUmVhZHknLCB0aGlzLl9wbGF5ZXJSZWFkeSk7XG5cbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignUm9vbS5FbnRlckFza0xhbmRsb3JkJywgdGhpcy5fZW50ZXJBc2tMYW5kbG9yZCk7XG4gICAgXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uUGxheWVyQXNrTGFuZGxvcmQnLCB0aGlzLl9wbGF5ZXJBc2tMYW5kbG9yZCk7XG5cbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignUm9vbS5FbnRlckdyYWJMYW5kbG9yZCcsIHRoaXMuX2VudGVyR3JhYkxhbmRsb3JkKTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5yZW1vdmVFdmVudExpc3RlbmVyKCdSb29tLlBsYXllckdyYWJMYW5kbG9yZCcsIHRoaXMuX3BsYXllckdyYWJMYW5kbG9yZCk7XG4gICAgXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uR2FtZVN0YXJ0JywgdGhpcy5fZ2FtZVN0YXJ0KTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5yZW1vdmVFdmVudExpc3RlbmVyKCdSb29tLlBsYXllclNob3RQdWtlcycsIHRoaXMuX3BsYXllclB1a2VzKTtcbiAgICBcbiAgICAgICAgdGhpcy5fYXBwLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignUm9vbS5Mb29wUHVrZXMnLCB0aGlzLl9sb29wUHVrZXMpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1Jvb20uR2FtZU92ZXInLCB0aGlzLl9nYW1lT3Zlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pyJ5YW25LuW546p5a626L+b5YWlXG4gICAgICogQHBhcmFtIHsqfSB1c2VyIFxuICAgICAqL1xuICAgIHByaXZhdGUgX3BsYXllckVudGVyUm9vbSA9IChkYXRhOiBpX0FkZFJpdmFsT3B0aW9ucykgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IHVzZXJJbmZvID0gbmV3IFVzZXIoe1xuICAgICAgICAgICAgdWlkOiBkYXRhLnBsYXllclVpZCxcbiAgICAgICAgICAgIG5hbWU6IGRhdGEucGxheWVyTmFtZVxuICAgICAgICB9KTs7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGRhdGEucG9zaXRpb247XG4gICAgICAgIGxldCBkaWZmID0gdGhpcy5fcG9zaXRpb24gLSBwb3NpdGlvbjtcblxuICAgICAgICBzd2l0Y2ggKGRpZmYpIHtcbiAgICAgICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5fcml2YWxbdXNlckluZm8udWlkXSA9IHVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIC8vIOaWsOadpeeOqeWutuWcqOWPs+i+uVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWdlLmFkZFBsYXllcih1c2VySW5mbywgUExBWUVSX1BPU0lUSU9OLlJJR0hUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgLTI6XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5fcml2YWxbdXNlckluZm8udWlkXSA9IHVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIC8vIOaWsOadpeeOqeWutuWcqOW3pui+uVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWdlLmFkZFBsYXllcih1c2VySW5mbywgUExBWUVSX1BPU0lUSU9OLkxFRlQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWdlLmFkZFBsYXllcih1c2VySW5mbywgUExBWUVSX1BPU0lUSU9OLk1BSU4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAnaW52YWxpZCBwb3NpdGlvbic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmnInlhbbku5bnjqnlrrbnprvlvIBcbiAgICAgKiDlpoLmnpzoh6rlt7HnprvlvIDmiL/pl7TvvIzkuZ/kvJrlnKh1bmluaXTkuK3osIPnlKjvvIzmuIXpmaTlr7nmiYvnjqnlrrZcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgX3BsYXllckxlYXZlUm9vbSA9IChkYXRhOiB7cGxheWVyOiBzdHJpbmd9KSA9PiB7XG4gICAgICAgIGxldCB1c2VySWQgPSBkYXRhLnBsYXllcjtcblxuICAgICAgICB0aGlzLl9zdGFnZS5yZW1vdmVQbGF5ZXIodXNlcklkKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5fcml2YWxbdXNlcklkXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnjqnlrrblh4blpIdcbiAgICAgKiBAcGFyYW0gZGF0YSBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wbGF5ZXJSZWFkeSA9IChkYXRhOiB7cGxheWVyOiBzdHJpbmcsIGlzUmVhZHk6IGJvb2xlYW59KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICBpc1JlYWR5XG4gICAgICAgIH0gPSBkYXRhO1xuXG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEocGxheWVyKS5yZWFkeShpc1JlYWR5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vlhaXlj6vlnLDkuLvpmLbmrrVcbiAgICAgKiDov5nph4zkvJrmjqXmlLbliLDliJ3lp4vljJbnmoTniYxcbiAgICAgKi9cbiAgICBwcml2YXRlIF9lbnRlckFza0xhbmRsb3JkID0gKGRhdGE6IHthc2tQbGF5ZXI6IHN0cmluZywgcHVrZXM6IHN0cmluZ1tdfSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgYXNrUGxheWVyLFxuICAgICAgICAgICAgcHVrZXNcbiAgICAgICAgfSA9IGRhdGE7XG5cbiAgICAgICAgLy8g5o6S5bqPXG4gICAgICAgIHB1a2VzLnNvcnQoKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZVB1a2VzKFthXSwgW2JdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g6Ieq5bex5Yid5aeL5YyW55qE5omL54mMXG4gICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuaW5pdFB1a2VzKHB1a2VzKTtcblxuICAgICAgICAvLyDlr7nmiYvnmoTniYzliJ3lp4vljJbkuIDkuItcbiAgICAgICAgZm9yIChsZXQgdXNlcklkIGluIHRoaXMuX3JpdmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHVzZXJJZCkuaW5pdFB1a2VzKHB1a2VzLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlr7nlupTnjqnlrrbov5vlhaXliLDlj6vlnLDkuLvpmLbmrrVcbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShhc2tQbGF5ZXIpLmVudGVyQXNrTGFuZGxvcmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnjqnlrrblj6vlnLDkuLtcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wbGF5ZXJBc2tMYW5kbG9yZCA9IChkYXRhOiB7cGxheWVyOiBzdHJpbmcsIGlzQXNrOiBib29sZWFufSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgaXNBc2tcbiAgICAgICAgfSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShwbGF5ZXIpLmFza0xhbmRsb3JkKGlzQXNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5vlhaXmiqLlnLDkuLvpmLbmrrVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9lbnRlckdyYWJMYW5kbG9yZCA9IChkYXRhOiB7Z3JhYlBsYXllcjogc3RyaW5nfSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZ3JhYlBsYXllclxuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICAvLyDlr7nlupTnjqnlrrbov5vlhaXliLDlj6vlnLDkuLvpmLbmrrVcbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShncmFiUGxheWVyKS5lbnRlckdyYWJMYW5kbG9yZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeOqeWutuaKouWcsOS4u1xuICAgICAqL1xuICAgIHByaXZhdGUgX3BsYXllckdyYWJMYW5kbG9yZCA9IChkYXRhOiB7cGxheWVyOiBzdHJpbmcsIGlzR3JhYjogYm9vbGVhbn0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgIGlzR3JhYlxuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHBsYXllcikuZ3JhYkxhbmRsb3JkKGlzR3JhYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5byA5aeL77yM5pyN5Yqh5Zmo5LiL5Y+R5Zyw5Li75piv6LCB77yM5Zyw5Li755qE5omR5YWL5Lmf5LiL5Y+RXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZVN0YXJ0ID0gKGRhdGE6IHtsYW5kbG9yZFBsYXllcjogc3RyaW5nLCBsYW5kbG9yZFB1a2VzOiBzdHJpbmdbXX0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGxhbmRsb3JkUGxheWVyLFxuICAgICAgICAgICAgbGFuZGxvcmRQdWtlc1xuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRVZFTlRfTkFNRS5HQU1FX1NUQVJULCBkYXRhKTtcblxuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmdhbWVTdGFydChsYW5kbG9yZFBsYXllciA9PT0gdGhpcy5fbWFpblVpZCk7XG5cbiAgICAgICAgZm9yIChsZXQgdXNlcklkIGluIHRoaXMuX3JpdmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHVzZXJJZCkuZ2FtZVN0YXJ0KGxhbmRsb3JkUGxheWVyID09PSB1c2VySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShsYW5kbG9yZFBsYXllcikuZW50ZXJTaG90UHVrZXMoKTtcblxuICAgICAgICBpZiAodGhpcy5fYXBwLnVzZXIhLnVpZCA9PT0gbGFuZGxvcmRQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuZ2V0UHVrZXMobGFuZGxvcmRQdWtlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKGxhbmRsb3JkUGxheWVyKS5nZXRQdWtlcyhsYW5kbG9yZFB1a2VzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnjqnlrrblh7rniYxcbiAgICAgKi9cbiAgICBwcml2YXRlIF9wbGF5ZXJQdWtlcyA9IChkYXRhOiB7cGxheWVyOiBzdHJpbmcsIHB1a2VzOiBzdHJpbmdbXX0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHBsYXllcixcbiAgICAgICAgICAgIHB1a2VzXG4gICAgICAgIH0gPSBkYXRhO1xuXG4gICAgICAgIGlmIChwdWtlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmiJDlip/lh7rniYzvvIzpgqPkuYjlsLHorqTkuLrov5nkuKrniYzmmK/mnIDlpKfnmoTniYzkuoZcbiAgICAgICAgICAgIHRoaXMuX2Rlc2t0b3BQdWtlcyA9IHB1a2VzO1xuICAgICAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzT3duZXIgPSBwbGF5ZXI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHBsYXllcikuc2hvdFB1a2VzKHB1a2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnjqnlrrbov5vlhaXlh7rniYzpmLbmrrVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9sb29wUHVrZXMgPSAoZGF0YToge3BsYXllcjogc3RyaW5nfSkgPT4ge1xuICAgICAgICBsZXQgcGxheWVyID0gZGF0YS5wbGF5ZXI7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyID09PSB0aGlzLl9hcHAudXNlciEudWlkICYmXG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wUHVrZXNPd25lciA9PT0gdGhpcy5fYXBwLnVzZXIhLnVpZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIOa7oei2s+i/meS4quadoeS7tu+8jOWwseaYr+WHuueJjOWIsOS6huiHquW3se+8jOW5tuS4lOahjOmdouS4iuacgOWkp+eahOeJjOWwseaYr+iHquW3seeahFxuICAgICAgICAgICAgLy8g6YKj5LmI5qGM6Z2i5pyA5aSn54mM5bCx56m65o6J5LqG77yI5Zug5Li655u45b2T5LqO6YeN5paw5Ye654mM5LqG77yJXG4gICAgICAgICAgICB0aGlzLl9kZXNrdG9wUHVrZXMgPSBbXTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYShwbGF5ZXIpLmVudGVyU2hvdFB1a2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZU92ZXIgPSAoZGF0YToge3BsYXllcjogc3RyaW5nfSkgPT4ge1xuICAgICAgICBsZXQgcGxheWVyID0gZGF0YS5wbGF5ZXI7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2Uub3Zlck1vZGFsLnNob3cocGxheWVyKTtcblxuICAgICAgICBmb3IgKGxldCB1c2VySWQgaW4gdGhpcy5fcml2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodXNlcklkKS5nYW1lUmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCfmuLjmiI/nu5PmnZ/vvIzog5zogIXvvJonLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGlfUm9vbU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9hcHAgPSBvcHRpb25zLmFwcDtcbiAgICB9XG5cbiAgICBnZXQgZGVza3RvcFB1a2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVza3RvcFB1a2VzO1xuICAgIH1cblxuICAgIGdldCByb29tSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb29tSWQ7XG4gICAgfVxuXG4gICAgc2hvdyhpbmZvOiBpX1Jvb21TaG93T3B0aW9ucykge1xuICAgICAgICBjb25zb2xlLmxvZygn6L+b5YWl5oi/6Ze0Jyk7XG5cbiAgICAgICAgdGhpcy5fbWFpblVpZCA9IGluZm8ubWFpblVpZDtcblxuICAgICAgICBpZiAodGhpcy5fbWFpblVpZCA9PT0gdGhpcy5fYXBwLnVzZXIhLnVpZCkge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZVR5cGUgPSBHQU1FX1RZUEUuUExBWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVUeXBlID0gR0FNRV9UWVBFLldBVENIO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2hvdyhpbmZvKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygn56a75byA5oi/6Ze0Jyk7XG5cbiAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHhuWkh1xuICAgICAqIEBwYXJhbSBpc1JlYWR5IFxuICAgICAqL1xuICAgIHJlYWR5KGlzUmVhZHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh0aGlzLl9tYWluVWlkKS5yZWFkeShpc1JlYWR5KTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5ub3RpZnkoe1xuICAgICAgICAgICAgcm91dGU6ICdSb29tLlJlYWR5JyxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICByaWQ6IHRoaXMuX3Jvb21JZCxcbiAgICAgICAgICAgICAgICBpc1JlYWR5OiBpc1JlYWR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJldGNvZGUgIT09IFJFVF9TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5YeG5aSH5byC5bi4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2lzUmVhZHk/J+WHhuWkhyc6J+WPlua2iOWHhuWkhyd95oiQ5YqfYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPq+WcsOS4u1xuICAgICAqIEBwYXJhbSBpc0FzayBcbiAgICAgKi9cbiAgICBhc2tMYW5kbG9yZChpc0FzazogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmFza0xhbmRsb3JkKGlzQXNrKTtcblxuICAgICAgICB0aGlzLl9hcHAubmV0d29yay5ub3RpZnkoe1xuICAgICAgICAgICAgcm91dGU6ICdSb29tLkFza0xhbmRsb3JkJyxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICByaWQ6IHRoaXMuX3Jvb21JZCxcbiAgICAgICAgICAgICAgICBpc0FzazogaXNBc2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmV0Y29kZSAhPT0gUkVUX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflj6vlnLDkuLvlvILluLgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aXNBc2s/J+WPq+WcsOS4uyc6J+S4jeWPq+WcsOS4uyd9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaKouWcsOS4u1xuICAgICAqIEBwYXJhbSBpc0dyYWIgXG4gICAgICovXG4gICAgZ3JhYkxhbmRsb3JkKGlzR3JhYjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmdyYWJMYW5kbG9yZChpc0dyYWIpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLm5vdGlmeSh7XG4gICAgICAgICAgICByb3V0ZTogJ1Jvb20uR3JhYkxhbmRsb3JkJyxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICByaWQ6IHRoaXMuX3Jvb21JZCxcbiAgICAgICAgICAgICAgICBpc0dyYWI6IGlzR3JhYlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXRjb2RlICE9PSBSRVRfU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aKouWcsOS4u+W8guW4uCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpc0dyYWI/J+aKouWcsOS4uyc6J+S4jeaKouWcsOS4uyd9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOemu+W8gOaIv+mXtFxuICAgICAqL1xuICAgIGxlYXZlUm9vbSgpIHtcbiAgICAgICAgdGhpcy5fYXBwLmVudGVySGFsbCgpO1xuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLm5vdGlmeSh7XG4gICAgICAgICAgICByb3V0ZTogJ0hhbGwuTGVhdmVSb29tJyxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICByaWQ6IHRoaXMuX3Jvb21JZFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXRjb2RlICE9PSBSRVRfU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+emu+W8gOaIv+mXtOW8guW4uCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn56a75byA5oi/6Ze0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIpOaWremAieS4reeahOeJjO+8jOiDveWQpuWHulxuICAgICAqIEBwYXJhbSBwdWtlcyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jaGVja1B1a2VzQ2FuU2hvdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHB1a2VzOiBzdHJpbmdbXSA9IHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuaGFuZFB1a2VzLmdldENob29zZVB1a2VzKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBjb21wYXJlUHVrZXModGhpcy5fZGVza3RvcFB1a2VzLCBwdWtlcyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuYnV0dG9uQ29udHJvbC5jYW5TaG90UHVrZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuYnV0dG9uQ29udHJvbC5jYW5Ob3RTaG90UHVrZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWHuueJjFxuICAgICAqIEBwYXJhbSBjaG9vc2UgXG4gICAgICovXG4gICAgcHVrZShjaG9vc2U6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHB1a2VzOiBzdHJpbmdbXTtcblxuICAgICAgICBpZiAoY2hvb3NlKSB7XG4gICAgICAgICAgICBwdWtlcyA9IHRoaXMuX3N0YWdlLmdldFBsYXllckFyZWEodGhpcy5fbWFpblVpZCkuaGFuZFB1a2VzLmdldENob29zZVB1a2VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmlL7lvIPlh7rniYxcbiAgICAgICAgICAgIHB1a2VzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlh7rniYxcbiAgICAgICAgdGhpcy5fc3RhZ2UuZ2V0UGxheWVyQXJlYSh0aGlzLl9tYWluVWlkKS5zaG90UHVrZXMocHVrZXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9hcHAuZGVidWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FwcC5uZXR3b3JrLm5vdGlmeSh7XG4gICAgICAgICAgICByb3V0ZTogJ1Jvb20uUHVrZXMnLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHJpZDogdGhpcy5fcm9vbUlkLFxuICAgICAgICAgICAgICAgIHB1a2VzOiBwdWtlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmV0Y29kZSAhPT0gUkVUX1NVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflh7rniYzlvILluLgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WHuueJjOaIkOWKnycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzID0gcHVrZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVza3RvcFB1a2VzT3duZXIgPSB0aGlzLl9hcHAudXNlciEudWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25maXJtUmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICAvLyDlvLnnqpfpmpDol49cbiAgICAgICAgdGhpcy5fc3RhZ2Uub3Zlck1vZGFsLmhpZGUoKTtcblxuICAgICAgICB0aGlzLl9zdGFnZS5nZXRQbGF5ZXJBcmVhKHRoaXMuX21haW5VaWQpLmdhbWVSZXNldCgpO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChFVkVOVF9OQU1FLkdBTUVfUkVTRVQpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb207IiwiaW50ZXJmYWNlIGlfT3B0aW9ucyB7XG4gICAgdWlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xufTtcblxuY2xhc3MgVXNlciB7XG4gICAgcHJpdmF0ZSBfdWlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogaV9PcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3VpZCA9IG9wdGlvbnMudWlkO1xuICAgICAgICB0aGlzLl9uYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgIH1cblxuICAgIGdldCB1aWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aWQ7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7IiwiZGVjbGFyZSBjb25zdCBNb2R1bGU6IGFueTtcblxuZXhwb3J0IGNvbnN0IFJFVF9TVUNDRVNTID0gMTAwMDA7XG5cbmV4cG9ydCBlbnVtIEVWRU5UX05BTUUge1xuICAgIFJPT01fU0hPVyA9ICdSb29tU2hvdycsXG4gICAgUk9PTV9ISURFID0gJ1Jvb21IaWRlJyxcblxuICAgIFBMQVlFUl9FTlRFUl9ST09NID0gJ1BsYXllckVudGVyUm9vbScsXG4gICAgUExBWUVSX0xFQVZFX1JPT00gPSAnUGxheWVyTGVhdmVSb29tJyxcbiAgICBQTEFZRVJfUkVBRFkgPSAnUGxheWVyUmVhZHknLFxuICAgIFBMQVlFUl9FTlRFUl9BU0sgPSAnUGxheWVyRW50ZXJBc2snLFxuICAgIFBMQVlFUl9BU0sgPSAnUGxheWVyQXNrJyxcbiAgICBQTEFZRVJfRU5URVJfR1JBQiA9ICdQbGF5ZXJFbnRlckdyYWInLFxuICAgIFBMQVlFUl9HUkFCID0gJ1BsYXllckdyYWInLFxuICAgIFBMQVlFUl9FTlRFUl9TSE9UID0gJ1BsYXllckVudGVyU2hvdCcsXG4gICAgUExBWUVSX1NIT1QgPSAnUGxheWVyU2hvdCcsXG4gICAgXG4gICAgR0FNRV9TVEFSVCA9ICdHYW1lU3RhcnQnLFxuICAgIEdBTUVfT1ZFUiA9ICdHYW1lT3ZlcicsXG4gICAgR0FNRV9SRVNFVCA9ICdHQU1FUmVzZXQnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVB1a2VzKHB1a2VzQTogc3RyaW5nW10sIHB1a2VzQjogc3RyaW5nW10pIHtcbiAgICAvLyDmlbDnu4TnmoTlhoXlrZjlhYjnlLPor7fkuoZcbiAgICBsZXQgcHRyQSA9IE1vZHVsZS5fbWFsbG9jKDQgKiBwdWtlc0EubGVuZ3RoKTtcbiAgICBsZXQgcHRyQiA9IE1vZHVsZS5fbWFsbG9jKDQgKiBwdWtlc0IubGVuZ3RoKTtcbiAgICBsZXQgY3BwUHVrZXNBOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjcHBQdWtlc0I6IGFueVtdID0gW107XG5cbiAgICAvLyDnlJ/miJDmiZHlhYvniYxcbiAgICBwdWtlc0EuZm9yRWFjaCgocHVrZUE6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBpbmZvQSA9IHB1a2VBLnNwbGl0KCctJyk7XG4gICAgICAgIGNwcFB1a2VzQS5wdXNoKFxuICAgICAgICAgICAgbmV3IE1vZHVsZS5KU1B1a2UoK2luZm9BWzBdLCAraW5mb0FbMV0pXG4gICAgICAgICk7XG5cbiAgICAgICAgTW9kdWxlLkhFQVAzMlsocHRyQSA+PiAyKSArIGldID0gY3BwUHVrZXNBW2ldLnB0cjtcbiAgICB9KTtcblxuICAgIHB1a2VzQi5mb3JFYWNoKChwdWtlQjogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGluZm9CID0gcHVrZUIuc3BsaXQoJy0nKTtcbiAgICAgICAgY3BwUHVrZXNCLnB1c2goXG4gICAgICAgICAgICBuZXcgTW9kdWxlLkpTUHVrZSgraW5mb0JbMF0sICtpbmZvQlsxXSlcbiAgICAgICAgKTtcblxuICAgICAgICBNb2R1bGUuSEVBUDMyWyhwdHJCID4+IDIpICsgaV0gPSBjcHBQdWtlc0JbaV0ucHRyO1xuICAgIH0pO1xuXG4gICAgLy8g5byA5aeL5Yik5pat5aSn5bCPXG4gICAgbGV0IHJlc3VsdCA9IE1vZHVsZS5fY29tcGFyZVB1a2VzKHB0ckEsIGNwcFB1a2VzQS5sZW5ndGgsIHB0ckIsIGNwcFB1a2VzQi5sZW5ndGgpO1xuXG4gICAgTW9kdWxlLl9mcmVlKHB0ckEpO1xuICAgIE1vZHVsZS5fZnJlZShwdHJCKTtcblxuICAgIGlmIChyZXN1bHQgPT09IDApIHtcbiAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgfVxuXG4gICAgLy8g5p6Q5p6EXG4gICAgY3BwUHVrZXNBLmZvckVhY2goKGNwcFB1a2UpID0+IHtcbiAgICAgICAgY3BwUHVrZS5SZWxlYXNlKCk7XG4gICAgfSk7XG5cbiAgICBjcHBQdWtlc0IuZm9yRWFjaCgoY3BwUHVrZSkgPT4ge1xuICAgICAgICBjcHBQdWtlLlJlbGVhc2UoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbjogRnVuY3Rpb24sIHdhaXQ6IG51bWJlcikge1xuICAgIGxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfSwgd2FpdCk7XG4gICAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9