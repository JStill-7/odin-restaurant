/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n* {\r\n    margin: 0;\r\n}\r\n\r\n\r\nbody::before {\r\n  content: \" \";\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  /* This creates the thin horizontal lines */\r\n  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), \r\n              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));\r\n  z-index: 10; \r\n  background-size: 100% 4px, 3px 100%;\r\n  pointer-events: none; \r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    gap: 60px;\r\n    justify-content: center;\r\n    height: 80px;\r\n    background-color: black;\r\n    position: sticky;\r\n    top: 0;\r\n  \r\n}\r\n\r\n\r\nnav button {\r\n    font-family:Orbitron, sans-serif;\r\n    background: rgba(0, 255, 65, 0.1); \r\n    border: 1px solid #00ff41;\r\n    color: #00ff41;\r\n    padding: 10px 20px;\r\n    font-family: 'Courier New', Courier, monospace; \r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    cursor: pointer;\r\n    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); \r\n    transition: all 0.3s ease;\r\n    width: 150px;\r\n}\r\n\r\nnav button:hover {\r\n    background: #00ff41;\r\n    color: black;\r\n    box-shadow: 0 0 15px #00ff41;\r\n}\r\n\r\n#content {\r\n    min-height: 100vh; \r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.home-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end; \r\n    padding-right: 10%; \r\n    padding-top: 80px;\r\n    min-height: 100vh;\r\n}\r\n\r\n.head-line-container {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#headline {\r\n    font-size: 6rem;\r\n    color: #159b24; \r\n    text-transform: uppercase;\r\n    font-family:Orbitron, sans-serif;\r\n    text-shadow: 0 0 10px #00ff41;\r\n}\r\n\r\n.subtitleTag {\r\n    margin-top: 10px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    color: rgba(0, 255, 65, 0.7); /* Slightly transparent green */\r\n    font-size: 0.9rem;\r\n    letter-spacing: 1px;\r\n    text-align: right; /* Keeps it aligned with your off-center title */\r\n}\r\n\r\n.dim {\r\n    color: rgba(0, 255, 65, 0.4); /* Much dimmer label */\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n#content {\r\n    background-color: black;\r\n}\r\n\r\n.menu-container {\r\n    display: flex;\r\n    flex-direction: column;;\r\n    align-items: center;\r\n    padding: 60px 20px;  \r\n}\r\n\r\n.section-header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #00ff41;\r\n    font-size: 36px;\r\n}\r\n\r\n.menu-section-header {\r\n    color: #00ff41;\r\n    font-family: 'Courier New', monospace;\r\n    margin-bottom: 40px;\r\n    border-bottom: 1px solid rgba(0, 255, 65, 0.5);\r\n    width: 100%;\r\n    max-width: 800px;\r\n    text-align: center;\r\n}\r\n\r\n.menu-category {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px; \r\n}\r\n\r\n\r\n.food-card {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 600px;\r\n    max-width: 800px;\r\n    border: 1px solid rgba(0, 255, 65, 0.4);\r\n    background: rgba(0, 0, 0, 0.6);\r\n    padding: 20px;\r\n    gap: 25px;\r\n    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);\r\n}\r\n\r\n.food-img {\r\n    width: 200px;\r\n    height: 200px;\r\n    object-fit: cover;\r\n    border: 1px solid #00ff41;\r\n}\r\n\r\n.food-text-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n}\r\n\r\n.food-title {\r\n    color: #00ff41;\r\n    font-family: 'Courier New', monospace;\r\n    font-size: 1.3rem;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid rgba(0, 255, 65, 0.3);\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.food-description {\r\n    font-family: 'Courier New', monospace;\r\n    color: #cccccc;\r\n    font-size: 1rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n/* Responsive fix: if screen is small, stack the card vertically */\r\n@media (max-width: 600px) {\r\n    .pizza-card {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n\r\n\r\n/* ABOUT PAGE STYLING */\r\n\r\n.about-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items:center;\r\n}\r\n\r\n.about-title {\r\n    font-size: 36px;\r\n}\r\n\r\n.body-paragraph {\r\n    font-family: 'Courier New', monospace;\r\n    color: #cccccc;\r\n    font-size: 28px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items:center;\r\n    width: 70%;\r\n}\r\n\r\n.ufoImg {\r\n    width: 900px;\r\n    height: auto;\r\n}\r\n\r\n.about-terminal {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    margin-top: 60px;\r\n    padding: 30px;\r\n    border-top: 1px solid #00ff41;\r\n    background: rgba(0, 255, 65, 0.05); /* Very faint green tint */\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 28px;\r\n}\r\n\r\n.terminal-col h4 {\r\n    color: #00ff41;\r\n    font-size: 0.9rem;\r\n    margin-bottom: 10px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.terminal-col p {\r\n    color: rgba(0, 255, 65, 0.7);\r\n    font-size: 20px;\r\n    margin: 5px 0;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/alien_landing.png"
/*!**************************************!*\
  !*** ./src/assets/alien_landing.png ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7592a23fa6036a276e75.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/assets/alien_landing.png?\n}");

/***/ },

/***/ "./src/assets/space cake.png"
/*!***********************************!*\
  !*** ./src/assets/space cake.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8e25ea3f5bffe1e1d872.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/assets/space_cake.png?\n}");

/***/ },

/***/ "./src/assets/space pizza 2.png"
/*!**************************************!*\
  !*** ./src/assets/space pizza 2.png ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7c098f6a0b84f266da04.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/assets/space_pizza_2.png?\n}");

/***/ },

/***/ "./src/assets/space pizza.png"
/*!************************************!*\
  !*** ./src/assets/space pizza.png ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"781d227876216484e08e.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/assets/space_pizza.png?\n}");

/***/ },

/***/ "./src/assets/space soda1.png"
/*!************************************!*\
  !*** ./src/assets/space soda1.png ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4d7877d1a1a4466552ed.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/assets/space_soda1.png?\n}");

/***/ },

/***/ "./src/assets/ufoPizza.png"
/*!*********************************!*\
  !*** ./src/assets/ufoPizza.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f59a9fd1e83322e202a4.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/assets/ufoPizza.png?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _assets_ufoPizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ufoPizza.png */ \"./src/assets/ufoPizza.png\");\n\r\n\r\nfunction loadAbout() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const AboutWrapper = document.createElement('div');\r\n    AboutWrapper.classList.add('about-container');\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('about-title')\r\n    title.textContent = \"ABOUT UFO PIZZA\";\r\n    title.style.color = \"#00ff41\";\r\n\r\n    const ufoImg = document.createElement('img');\r\n    ufoImg.classList.add('ufoImg');\r\n    ufoImg.src = _assets_ufoPizza_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n\r\n    const bodyParagraph = document.createElement('div');\r\n    bodyParagraph.textContent= 'Founded by The Greys.Located at the edge of the Milky way galaxy. Expierence real Earth style pizza.';\r\n    bodyParagraph.classList.add('body-paragraph');\r\n\r\n\r\n    const footer = createAboutFooter();\r\n\r\n    function createAboutFooter() {\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('about-terminal');\r\n\r\n    footer.innerHTML = `\r\n        <div class=\"terminal-col\">\r\n            <h4>[ COMMS_CHANNEL ]</h4>\r\n            <p>FREQ: 1-800-VOID-PIE</p>\r\n            <p>PING: admin@ufopizza.io</p>\r\n        </div>\r\n        <div class=\"terminal-col\">\r\n            <h4>[ OP_CYCLES ]</h4>\r\n            <p>0600 - 0000 // UTC</p>\r\n            <p>DOCKING: 24/7 ACTIVE</p>\r\n        </div>\r\n        <div class=\"terminal-col\">\r\n            <h4>[ NAVIGATION ]</h4>\r\n            <p>SECTOR 7G // BAY 94</p>\r\n            <p>COORD: 51.5074 N, 0.1278 W</p>\r\n        </div>\r\n    `;\r\n    return footer;\r\n}\r\n  \r\n\r\n    AboutWrapper.appendChild(title);\r\n    AboutWrapper.appendChild(ufoImg);\r\n    AboutWrapper.appendChild(bodyParagraph);\r\n    AboutWrapper.appendChild(footer);\r\n    content.appendChild(AboutWrapper);\r\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_alien_landing_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/alien_landing.png */ \"./src/assets/alien_landing.png\");\n\r\n\r\nfunction loadHome() {\r\n    console.log('home loaded')\r\n    const content = document.getElementById(\"content\");\r\n\r\n    // Clear content first\r\n    content.innerHTML = \"\";\r\n    \r\n\r\n    //home page wrapper (whole page)\r\n    let homeWrapper = document.createElement('div');\r\n    homeWrapper.classList.add('home-container');\r\n\r\n    homeWrapper.style.backgroundImage = `url(${_assets_alien_landing_png__WEBPACK_IMPORTED_MODULE_0__})`;\r\n\r\n    homeWrapper.style.backgroundSize = \"cover\";\r\n    homeWrapper.style.backgroundPosition = \"center\";\r\n    homeWrapper.style.height = \"100vh\"; \r\n\r\n\r\n\r\n\r\n    //headline wrapper (top of page)\r\n    let headlineWrapper = document.createElement('div');\r\n    headlineWrapper.classList.add('head-line-container');\r\n\r\n\r\n    //indivual page elements\r\n    let headline = document.createElement('h1');\r\n    headline.id = 'headline'\r\n    headline.textContent = 'UFO Pizza'\r\n\r\n    //sub title tag\r\n    const subtitleTag = document.createElement('div');\r\n    subtitleTag.classList.add('subtitleTag');\r\n\r\n    const fluff1 = document.createElement('p');\r\n    fluff1.innerHTML = `<span class=\"dim\">ORIGIN:</span> SECTOR 7G`;\r\n\r\n    const fluff2 = document.createElement('p');\r\n    fluff2.innerHTML = '<span class=\"dim\">STATUS </span>FUEL: LOW';\r\n\r\n    const fluff3 = document.createElement('p');\r\n    fluff3.innerHTML = '<span class=\"dim\">ENTRY:</span> 04:00 SEC'\r\n\r\n\r\n\r\n    // Append the children to the WRAPPER\r\n    headlineWrapper.appendChild(headline);\r\n    homeWrapper.appendChild(headlineWrapper);\r\n    headlineWrapper.appendChild(subtitleTag);\r\n    subtitleTag.appendChild(fluff1);\r\n    subtitleTag.appendChild(fluff2);\r\n    subtitleTag.appendChild(fluff3);\r\n\r\n\r\n    content.appendChild(homeWrapper);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n// default home view\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n\r\n//switching to other pages\r\nconst navButtons = document.querySelectorAll(\"nav button\");\r\nconst contentDiv = document.getElementById(\"content\");\r\n\r\nnavButtons.forEach(button => {\r\n    button.addEventListener(\"click\", (e) => {\r\n        // Clear the current content\r\n        contentDiv.innerHTML = \"\";\r\n\r\n        // Determine which tab was clicked\r\n        const tabName = e.target.textContent.toLowerCase();\r\n\r\n        if (tabName === \"home\") {\r\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n        } else if (tabName === \"menu\") {\r\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n        } else if (tabName === \"about\") {\r\n            (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\r\n        }\r\n    });\r\n});\r\n\r\nconsole.log('testing.....')\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_space_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/space pizza.png */ \"./src/assets/space pizza.png\");\n/* harmony import */ var _assets_space_pizza_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/space pizza 2.png */ \"./src/assets/space pizza 2.png\");\n/* harmony import */ var _assets_space_soda1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/space soda1.png */ \"./src/assets/space soda1.png\");\n/* harmony import */ var _assets_space_cake_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/space cake.png */ \"./src/assets/space cake.png\");\n//import images dont forget\r\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    //menu wrapper\r\n    const menuWrapper = document.createElement('div');\r\n    menuWrapper.classList.add('menu-container');\r\n    \r\n    // PIZZA SECTION\r\n    const pizzaSection = createMenuSection(\"PIZZAS\");\r\n    pizzaSection.appendChild(createFoodCard(_assets_space_pizza_png__WEBPACK_IMPORTED_MODULE_0__, 'PEPPORINI PIZZA', 'A classic pepporini pizza with sauce,cheese, and pepporini. A taste of Earth.'));\r\n    pizzaSection.appendChild(createFoodCard(_assets_space_pizza_2_png__WEBPACK_IMPORTED_MODULE_1__, 'VEGGIE PIZZA','Our same classic pizza but with veggies instead of meat for our vegans. Made with vegan cheese.'));\r\n\r\n    //  DRINK SECTION\r\n    const drinkSection = createMenuSection(\"DRINKS\");\r\n    drinkSection.appendChild(createFoodCard(_assets_space_soda1_png__WEBPACK_IMPORTED_MODULE_2__, 'LIME SODA', 'The famous fruit from Earth the Lime in a carbonated fizzy form.'));\r\n\r\n    // DESSERT SECTION \r\n    const desertSection = createMenuSection(\"DESSERTS\");\r\n    desertSection.appendChild(createFoodCard(_assets_space_cake_png__WEBPACK_IMPORTED_MODULE_3__, 'CHOCOLATE CAKE', 'Our famous chocholate cake made with real belgian chocholate. (Its a country on Earth)'));\r\n\r\n    // Add all sections to the main wrapper\r\n    menuWrapper.appendChild(pizzaSection);\r\n    menuWrapper.appendChild(drinkSection);\r\n    menuWrapper.appendChild(desertSection);\r\n\r\n    content.appendChild(menuWrapper);\r\n}\r\n\r\n\r\n\r\n// Reusable Section Creator\r\nfunction createMenuSection(titleText) {\r\n    const sectionWrapper = document.createElement('section');\r\n    sectionWrapper.classList.add('menu-section');\r\n\r\n    const title = document.createElement('h2');\r\n    title.classList.add('section-header'); \r\n    title.textContent = titleText;\r\n\r\n    sectionWrapper.appendChild(title);\r\n    return sectionWrapper; \r\n}\r\n\r\n\r\nfunction createFoodCard(imageSrc, title, description) {\r\n    const card = document.createElement('div');\r\n    card.classList.add('food-card');\r\n\r\n    card.innerHTML = `\r\n        <img src=\"${imageSrc}\" class=\"food-img\" alt=\"Specimen\">\r\n        <div class=\"food-text-content\">\r\n            <h3 class=\"food-title\">${title}</h3>\r\n            <p class=\"food-description\">${description}</p>\r\n        </div>\r\n    `;\r\n\r\n    return card;\r\n}\r\n    \n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;