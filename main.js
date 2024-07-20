/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../styles/fonts/Melodrama-Variable.ttf */ "./styles/fonts/Melodrama-Variable.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Poiret+One&family=Ruda:wght@400..900&family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
@font-face {
    font-family: "Melodrama";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
:root {
    --off-white: #fafaef;
    --accent-primary: #4A9DAB;
    --accent-secondary: #89D69A;
    --accent-tertiary: #E1E17E;
    --main-font-fam: "Melodrama", Arial, Helvetica, sans-serif;
    --secondary-font-fam: "Wix Madefor Text", Arial, Helvetica, sans-serif;

    --size-1: 11.391rem;
    --size-2: 7.594rem;
    --size-3: 5.063rem;
    --size-4: 3.375rem;
    --size-5: 2.25rem;
    --size-p: 1rem;
    --size-s: 0.667rem;

}
*, *::before, *::after {
    box-sizing: border-box;
}
* {
    margin: 0;
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    min-width: 100%;
    
}
img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}
input, button, textarea, select {
    font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: var(--main-font-fam);
    font-weight: 400;
}

#root, #__next {
    isolation: isolate;
}

button {
    border: 0;
    border-radius: 1.25rem;
    background-color: var(--accent-primary);
    padding-left: 4px;
    padding-right: 4px;
}

header {
    display: flex;
    justify-content: space-between;
    background-color: var(--accent-primary);
    padding-left: 32px;
    padding-right: 32px;
    font-family: var(--main-font-fam);
}

footer {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--accent-primary);
    color: var(--off-white);
}

footer p {
    font-family: var(--secondary-font-fam);
}

.branding, nav {
    font-family: inherit;
    display: flex;
    justify-content: center;
    gap: 1rem;
    color: var(--off-white);
}

.branding {
    font-size: var(--size-5);
    padding-top: 16px;
    padding-bottom: 16px;
    align-items: center;
}

nav button {
    background-color: transparent;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    font-size: var(--size-5);
    height: 100%;
    color: inherit;
    border-radius: 0;
    padding-left: 8px;
    padding-right: 8px;
}

nav button .active {
    background-color: var(--accent-secondary);
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    gap: 128px;
}

.tagline {
    font-size: var(--size-2);
}

.section {
    padding-top: 64px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    white-space: pre; /*Forces line break from .textContent*/
    gap: 100px
}

.section p {
    text-wrap: wrap;
    font-size: var(--size-5);
    font-weight: 200;
    font-family: var(--secondary-font-fam);
    color: rgb(130, 130, 130);
}

.section h2 {
    font-size: var(--size-3);
    font-weight: 700;
}

.actionBtn {
    background-color: var(--accent-tertiary);
    padding: 12px;
    margin-top: 8px;
    font-family: var(--secondary-font-fam);
}

.menuSpan {
    background-color: var(--accent-secondary);
    width: 100%;
    padding-top: 32px;
    padding-bottom: 32px;
    display: flex;
}

.menuSpan p {
    font-family: var(--secondary-font-fam);
}

.menuSpan img {
    width: 640px;
    height: auto;
}

/*Full bleed allows the background colour to break out of the containing div */
.fullBleed {
    box-shadow: 0 0 0 100vmax var(--accent-secondary);
    clip-path: inset(0 -100vmax);
}

.menu {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
    padding-bottom: 32px;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 4px;
    border-radius: 1rem;
}

.card img {
    width: 100%;
    height: auto;
}

.card h4 {
    font-weight: 700;
    line-height: 2;
    color: inherit;
    font-size: var(--size-5);
}

.card p, .card h6 {
    font-family: var(--secondary-font-fam);
    color: inherit;
}

.card h6 {
    font-weight: 800;
    font-size: var(--size-6);
}

.aboutUsDesc {
    background-color: var(--accent-secondary);
    font-family: var(--secondary-font-fam);
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    margin-top: 64px;
}

.aboutUsDesc p {
    font: inherit;
    font-size: var(--size-5);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Poiret+One&family=Ruda:wght@400..900&family=Wix+Madefor+Text:ital,wght@0,400..800;1,400..800&display=swap');\n\n@font-face {\n    font-family: \"Melodrama\";\n    src: url(\"../styles/fonts/Melodrama-Variable.ttf\");\n}\n:root {\n    --off-white: #fafaef;\n    --accent-primary: #4A9DAB;\n    --accent-secondary: #89D69A;\n    --accent-tertiary: #E1E17E;\n    --main-font-fam: \"Melodrama\", Arial, Helvetica, sans-serif;\n    --secondary-font-fam: \"Wix Madefor Text\", Arial, Helvetica, sans-serif;\n\n    --size-1: 11.391rem;\n    --size-2: 7.594rem;\n    --size-3: 5.063rem;\n    --size-4: 3.375rem;\n    --size-5: 2.25rem;\n    --size-p: 1rem;\n    --size-s: 0.667rem;\n\n}\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n* {\n    margin: 0;\n}\n\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    min-width: 100%;\n    \n}\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\ninput, button, textarea, select {\n    font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n    font-family: var(--main-font-fam);\n    font-weight: 400;\n}\n\n#root, #__next {\n    isolation: isolate;\n}\n\nbutton {\n    border: 0;\n    border-radius: 1.25rem;\n    background-color: var(--accent-primary);\n    padding-left: 4px;\n    padding-right: 4px;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--accent-primary);\n    padding-left: 32px;\n    padding-right: 32px;\n    font-family: var(--main-font-fam);\n}\n\nfooter {\n    padding-left: 32px;\n    padding-right: 32px;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--accent-primary);\n    color: var(--off-white);\n}\n\nfooter p {\n    font-family: var(--secondary-font-fam);\n}\n\n.branding, nav {\n    font-family: inherit;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    color: var(--off-white);\n}\n\n.branding {\n    font-size: var(--size-5);\n    padding-top: 16px;\n    padding-bottom: 16px;\n    align-items: center;\n}\n\nnav button {\n    background-color: transparent;\n    cursor: pointer;\n    overflow: hidden;\n    outline: none;\n    font-size: var(--size-5);\n    height: 100%;\n    color: inherit;\n    border-radius: 0;\n    padding-left: 8px;\n    padding-right: 8px;\n}\n\nnav button .active {\n    background-color: var(--accent-secondary);\n}\n\n.wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1280px;\n    width: 100%;\n    gap: 128px;\n}\n\n.tagline {\n    font-size: var(--size-2);\n}\n\n.section {\n    padding-top: 64px;\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    white-space: pre; /*Forces line break from .textContent*/\n    gap: 100px\n}\n\n.section p {\n    text-wrap: wrap;\n    font-size: var(--size-5);\n    font-weight: 200;\n    font-family: var(--secondary-font-fam);\n    color: rgb(130, 130, 130);\n}\n\n.section h2 {\n    font-size: var(--size-3);\n    font-weight: 700;\n}\n\n.actionBtn {\n    background-color: var(--accent-tertiary);\n    padding: 12px;\n    margin-top: 8px;\n    font-family: var(--secondary-font-fam);\n}\n\n.menuSpan {\n    background-color: var(--accent-secondary);\n    width: 100%;\n    padding-top: 32px;\n    padding-bottom: 32px;\n    display: flex;\n}\n\n.menuSpan p {\n    font-family: var(--secondary-font-fam);\n}\n\n.menuSpan img {\n    width: 640px;\n    height: auto;\n}\n\n/*Full bleed allows the background colour to break out of the containing div */\n.fullBleed {\n    box-shadow: 0 0 0 100vmax var(--accent-secondary);\n    clip-path: inset(0 -100vmax);\n}\n\n.menu {\n    display: grid;\n    gap: 16px;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n    padding-bottom: 32px;\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    padding: 4px;\n    border-radius: 1rem;\n}\n\n.card img {\n    width: 100%;\n    height: auto;\n}\n\n.card h4 {\n    font-weight: 700;\n    line-height: 2;\n    color: inherit;\n    font-size: var(--size-5);\n}\n\n.card p, .card h6 {\n    font-family: var(--secondary-font-fam);\n    color: inherit;\n}\n\n.card h6 {\n    font-weight: 800;\n    font-size: var(--size-6);\n}\n\n.aboutUsDesc {\n    background-color: var(--accent-secondary);\n    font-family: var(--secondary-font-fam);\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    padding-top: 32px;\n    padding-bottom: 32px;\n    margin-top: 64px;\n}\n\n.aboutUsDesc p {\n    font: inherit;\n    font-size: var(--size-5);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./misc/restaurant-menu.csv":
/*!**********************************!*\
  !*** ./misc/restaurant-menu.csv ***!
  \**********************************/
/***/ ((module) => {

module.exports = [{"src":"https://www.seakayakadventures.com/sites/seakayakadventures.com/files/images/poutine-quebec_0.jpg","alt":"Poutine lathered with gravy and topped with cheese curds","desc":"Quebec’s reputation for poutine extends well beyond its borders and you can’t come to the province without trying this signature dish","price":12.99,"name":"Poutine"},{"src":"https://www.seakayakadventures.com/sites/seakayakadventures.com/files/images/Tourti%C3%A8re.jpg","alt":"A pie filled with meat","desc":"These meat pies are a staple in the bakeries of Quebec City, as well as being a standard dish on local tables at Christmas and New Year’s Eve","price":16.99,"name":"Tourtière"},{"src":"https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","alt":"Crepes next to some strawberries","desc":"Traditionally made with milk, flour, and eggs, they are cooked on a cast-iron plate before being stuffed with either savory of sweet fillings","price":10.99,"name":"Crêpes"},{"src":"https://images.pexels.com/photos/18410573/pexels-photo-18410573/free-photo-of-soup-with-onion-in-pan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","alt":"French onion soup in a skillet topped with red onion","desc":"While you can find plenty of different versions, traditionally speaking, it comprises a beef broth and caramelized onions, which are topped with croutons and melted cheese","price":8.99,"name":"French onion soup"},{"src":"https://www.seakayakadventures.com/sites/seakayakadventures.com/files/images/Soupe-aux-pois.jpg","alt":"A bowl of soup with a little bit of garnish","desc":"It consists of dried yellow peas cooked with salted pork and a variety of vegetables. The French explorer Samuel de Champlain is credited with bringing the soup to Canadian shores around 400 years ago and it has long since been embraced by families throughout the province","price":8.99,"name":"Soupe aux pois"},{"src":"https://www.seakayakadventures.com/sites/seakayakadventures.com/files/images/Cretons-Quebec.jpg","alt":"Ground pork in a bowl","desc":"Cretons is a pork pâté that is similar to French rilettes. Made from ground pork, onions, and spices (plus marrow to help it congeal) it is usually served on toast as part of a traditional Quebecois breakfast","price":6.99,"name":"Cretons"},{"src":"https://www.seakayakadventures.com/sites/seakayakadventures.com/files/images/Tire-sur-la-neige-quebec.jpg","alt":"Popsicle sticks with taffy sitting on top of ice","desc":"It is created by pouring hot maple syrup sap directly onto fresh snow. What results is a soft candy that is eaten straight away using long wooden sticks","price":4.99,"name":"Tire sur la neige"},{"src":"https://www.seakayakadventures.com/sites/seakayakadventures.com/files/images/Tarte-au-sucre_0.jpg","alt":"A sugar pie with a quarter cut out","desc":"Translating as “sugar pie”, this deliciously sweet dish is popular throughout Northern France and Belgium but has a slightly grainier texture in its Quebecois version. Made using cream, flour, egg, and brown sugar (or sometimes maple syrup)","price":12.99,"name":"Tarte au sucre"},{"src":"https://www.seakayakadventures.com/sites/seakayakadventures.com/files/images/B%C3%BBche-de-No%C3%ABl.jpg","alt":"A log shaped chocolate cake with a vanilla spiral in the middle","desc":"This log-shaped cake is a must-have at any Quebecois Christmas and is believed to have originated from the 12th-century yule log tradition. When sprinkled with oil and wine, it was thought that a burning log would help to ward off evil spirits","price":10.99,"name":"Bûche de Noël"}]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutUs: () => (/* binding */ aboutUs)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const aboutUs = () => {

    const card = document.createElement("div");
    card.classList.add("section");
    //
    const header = document.createElement("h2");
    header.textContent = "About Us";

    // Paragraphs
    const pg = document.createElement("p");
    pg.textContent = "Welcome to Le Trèfle, a little slice of France nestled in the heart of Quebec. Founded by a group of passionate French immigrants, our restaurant is a heartfelt tribute to the culinary traditions and flavors of our homeland. Le Trèfle, which means \"The Clover,\" symbolizes our love for good fortune, community, and the rich, comforting cuisine that we grew up with.";

    const pg2 = document.createElement("p");
    pg2.textContent = "When you step into Le Trèfle, you're not just entering a restaurant—you're becoming part of our extended family. Our cozy, rustic decor, with wooden beams and vintage French posters, is designed to make you feel like you’ve walked into a bistro in a quaint French village. We believe in creating a warm and inviting atmosphere where you can relax, enjoy good food, and make lasting memories with friends and loved ones.";

    const pg3 = document.createElement("p");
    pg3.textContent = "Our menu is a love letter to traditional French cuisine, featuring dishes that have been passed down through generations. From the savory goodness of our Tourtière to the sweet indulgence of our Crêpes, each dish is prepared with the same care and authenticity that our founders’ grandmothers used in their kitchens back in France. We take pride in using fresh, locally-sourced ingredients, ensuring that every bite is a perfect blend of French tradition and Quebec’s finest produce.";

    const pg4 = document.createElement("p");
    pg4.textContent = "At Le Trèfle, we believe that food is more than just sustenance—it's a celebration of culture and heritage. Whether you’re here for a casual lunch, a romantic dinner, or simply to enjoy a glass of wine with friends, we’re dedicated to providing an experience that is both delicious and heartwarming. So come on in, sit back, and let us transport you to the charming streets of France, right here in Quebec. Bon appétit!";

    // append elements to card
    card.appendChild(header);
    card.appendChild(pg);

    // Style and add extra pgs to page
    const aboutDesc = document.createElement("div");
    aboutDesc.appendChild(pg2);
    aboutDesc.appendChild(pg3);
    aboutDesc.appendChild(pg4);
    aboutDesc.classList.add("fullBleed");
    aboutDesc.classList.add("aboutUsDesc");

    const couple = document.createElement("div");
    couple.appendChild(card);
    couple.appendChild(aboutDesc);

    return couple;
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactUs: () => (/* binding */ contactUs)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const contactUs = () => {

    const card = document.createElement("div");
    card.classList.add("section");
    //
    const header = document.createElement("h2");
    header.textContent = "Contact Us";

    // holder
    const holder = document.createElement("div");

    // Paragraphs
    const pg = document.createElement("p");
    pg.textContent = "Looking to book your next reservation?";

    // Call button
    const callToAct = document.createElement("button");
    callToAct.textContent = "Give us a call!";
    callToAct.classList.add("actionBtn");

    // holder
    holder.appendChild(pg);
    holder.appendChild(callToAct);
    holder.style.paddingBottom = "32px";

    // Append
    card.appendChild(header);
    card.appendChild(holder);

    return card;

}



/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLoad: () => (/* binding */ initLoad),
/* harmony export */   menuPrev: () => (/* binding */ menuPrev)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const initLoad = () => {
    //var cont = document.getElementById("content"); // returns as null - fix
    var wrapper = document.createElement("div");

    // Make wrapper for main content
    var title = document.createElement("h2");
    title.textContent = "Fortune favours \nthe flavourful";
    wrapper.appendChild(title);

    // Create paragraph and call to action
    var card = document.createElement("div");

    var pg = document.createElement("p");
    pg.textContent = "Welcome to Le Trèfle, a Québec-based restaurant which serves authentic dishes from passed down from generations of French immigrants. We pride ourselves in our roots and the flavours that they brought us.";
    card.appendChild(pg);

    const callToAct = document.createElement("button");
    callToAct.textContent = "Learn More";
    callToAct.classList.add("actionBtn");
    card.appendChild(callToAct);

    // 
    wrapper.appendChild(card);
    wrapper.classList.add("section")
    return wrapper;
}

const menuPrev = () => {
    const menuSect = document.createElement("section");
    menuSect.classList.add("menuSpan");
    menuSect.classList.add("fullBleed");
    menuSect.classList.add("section");

    // Create paragraph and call to action
    var card = document.createElement("div");

    const pg = document.createElement("p");
    pg.textContent = "Discover our versatile menu with flavours for every craving. Indluge in our sweet crêpes or try our savoury Québécois poutine.";
    card.appendChild(pg);

    const callToAct = document.createElement("button");
    callToAct.textContent = "Learn More";
    callToAct.classList.add("actionBtn");
    card.appendChild(callToAct);

    // Make image
    const img = document.createElement("img");
    img.src = "../styles/imgs/crepes.jpg";

    // Export
    menuSect.appendChild(card);
    menuSect.appendChild(img);

    return menuSect;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuGrid: () => (/* binding */ menuGrid),
/* harmony export */   menuHead: () => (/* binding */ menuHead)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _misc_restaurant_menu_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/restaurant-menu.csv */ "./misc/restaurant-menu.csv");
/* harmony import */ var _misc_restaurant_menu_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_misc_restaurant_menu_csv__WEBPACK_IMPORTED_MODULE_1__);



const menuHead = () => {
    const card = document.createElement("div");
    card.classList.add("section");
    //
    const header = document.createElement("h2");
    header.textContent = "Our Menu";

    const pg = document.createElement("p");
    pg.textContent = "Take a look at our vast array of authentic Québécois dishes. We're sure there will be something you'll love.";

    // append elements to card
    card.appendChild(header);
    card.appendChild(pg);

    return card;
}

const menuGrid = () => {
    var grid = document.createElement("div");
    grid.classList.add("menu");

    console.log((_misc_restaurant_menu_csv__WEBPACK_IMPORTED_MODULE_1___default()));
    populateGrid(grid);

    return grid;
}

const populateGrid = (grid) => {
    _misc_restaurant_menu_csv__WEBPACK_IMPORTED_MODULE_1___default().forEach(row => {
        console.log(row.name); // shows as undefined
        var tempCard = createItem(row.src, row.alt, row.desc, row.price, row.name);
        grid.appendChild(tempCard);
    });
}

const createItem = (itemSrc, itemAlt, itemDesc, itemPrice, itemName) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = itemSrc;
    img.alt = itemAlt;

    const name = document.createElement("h4");
    name.textContent = itemName;

    const desc = document.createElement("p");
    desc.textContent = itemDesc;

    const price = document.createElement("h6");
    price.textContent = "$ "+itemPrice;

    // Append to the card all items
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(price);

    return card;
}



/***/ }),

/***/ "./styles/fonts/Melodrama-Variable.ttf":
/*!*********************************************!*\
  !*** ./styles/fonts/Melodrama-Variable.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "94cb5d31e2ef87b79578.ttf";

/***/ })

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
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
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
// Imports





// vars 
const mainCont = document.querySelector("#content");

// Default
mainCont.appendChild((0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.initLoad)());
mainCont.appendChild((0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.menuPrev)());

const navButtons = document.querySelectorAll("nav button");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        var pageAction = button.getAttribute("data-page-type");
        clearContent(mainCont); // Clears page of current content

        // Displays current selected tab
        navButtons.forEach(btn => {
            if (btn.getAttribute("data-page-type") == pageAction){
                btn.style.background = "#89D69A";
            }
            else {
                btn.style.background = "transparent";
            }
        });
        
        switch(pageAction) {
            case "home":
                // init load and menupreview
                mainCont.appendChild((0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.initLoad)());
                mainCont.appendChild((0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.menuPrev)());
                break;
            case "menu":
                mainCont.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuHead)());
                mainCont.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuGrid)());
                break;
            case "about":
                mainCont.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutUs)());
                break;
            case "contact":
                mainCont.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactUs)());
                //
                break;
        }

        
    });
});

function clearContent(maintCont) {
    maintCont.replaceChildren();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG9KQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SCxNQUFNLE1BQU0sK0ZBQStGLHlCQUF5QjtBQUM3UCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RUFBNEUsS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlB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QztBQUNBO0FBQ0EscUNBQXFDLG1EQUFTO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9taXNjL3Jlc3RhdXJhbnQtbWVudS5jc3YiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3R5bGVzL2ZvbnRzL01lbG9kcmFtYS1WYXJpYWJsZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhbnRhcmVsbDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PVBvaXJldCtPbmUmZmFtaWx5PVJ1ZGE6d2dodEA0MDAuLjkwMCZmYW1pbHk9V2l4K01hZGVmb3IrVGV4dDppdGFsLHdnaHRAMCw0MDAuLjgwMDsxLDQwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVsb2RyYW1hXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG46cm9vdCB7XG4gICAgLS1vZmYtd2hpdGU6ICNmYWZhZWY7XG4gICAgLS1hY2NlbnQtcHJpbWFyeTogIzRBOURBQjtcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICM4OUQ2OUE7XG4gICAgLS1hY2NlbnQtdGVydGlhcnk6ICNFMUUxN0U7XG4gICAgLS1tYWluLWZvbnQtZmFtOiBcIk1lbG9kcmFtYVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIC0tc2Vjb25kYXJ5LWZvbnQtZmFtOiBcIldpeCBNYWRlZm9yIFRleHRcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuICAgIC0tc2l6ZS0xOiAxMS4zOTFyZW07XG4gICAgLS1zaXplLTI6IDcuNTk0cmVtO1xuICAgIC0tc2l6ZS0zOiA1LjA2M3JlbTtcbiAgICAtLXNpemUtNDogMy4zNzVyZW07XG4gICAgLS1zaXplLTU6IDIuMjVyZW07XG4gICAgLS1zaXplLXA6IDFyZW07XG4gICAgLS1zaXplLXM6IDAuNjY3cmVtO1xuXG59XG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBcbn1cbmltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xufVxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250LWZhbSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI3Jvb3QsICNfX25leHQge1xuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250LWZhbSk7XG59XG5cbmZvb3RlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XG59XG5cbmZvb3RlciBwIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtKTtcbn1cblxuLmJyYW5kaW5nLCBuYXYge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xufVxuXG4uYnJhbmRpbmcge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS01KTtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5uYXYgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS01KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbm5hdiBidXR0b24gLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMTI4cHg7XG59XG5cbi50YWdsaW5lIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtMik7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7IC8qRm9yY2VzIGxpbmUgYnJlYWsgZnJvbSAudGV4dENvbnRlbnQqL1xuICAgIGdhcDogMTAwcHhcbn1cblxuLnNlY3Rpb24gcCB7XG4gICAgdGV4dC13cmFwOiB3cmFwO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS01KTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udC1mYW0pO1xuICAgIGNvbG9yOiByZ2IoMTMwLCAxMzAsIDEzMCk7XG59XG5cbi5zZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFjdGlvbkJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtKTtcbn1cblxuLm1lbnVTcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWVudVNwYW4gcCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbSk7XG59XG5cbi5tZW51U3BhbiBpbWcge1xuICAgIHdpZHRoOiA2NDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qRnVsbCBibGVlZCBhbGxvd3MgdGhlIGJhY2tncm91bmQgY29sb3VyIHRvIGJyZWFrIG91dCBvZiB0aGUgY29udGFpbmluZyBkaXYgKi9cbi5mdWxsQmxlZWQge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZtYXggdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwIC0xMDB2bWF4KTtcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5jYXJkIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZCBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtNSk7XG59XG5cbi5jYXJkIHAsIC5jYXJkIGg2IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtKTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmNhcmQgaDYge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTYpO1xufVxuXG4uYWJvdXRVc0Rlc2Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udC1mYW0pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMycHg7XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgbWFyZ2luLXRvcDogNjRweDtcbn1cblxuLmFib3V0VXNEZXNjIHAge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsNENBQWtEO0FBQ3REO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsMERBQTBEO0lBQzFELHNFQUFzRTs7SUFFdEUsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUUsc0NBQXNDO0lBQ3hEO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsOEVBQThFO0FBQzlFO0lBQ0ksaURBQWlEO0lBQ2pELDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHdEQUF3RDtJQUN4RCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhbnRhcmVsbDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PVBvaXJldCtPbmUmZmFtaWx5PVJ1ZGE6d2dodEA0MDAuLjkwMCZmYW1pbHk9V2l4K01hZGVmb3IrVGV4dDppdGFsLHdnaHRAMCw0MDAuLjgwMDsxLDQwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1lbG9kcmFtYVxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9zdHlsZXMvZm9udHMvTWVsb2RyYW1hLVZhcmlhYmxlLnR0ZlxcXCIpO1xcbn1cXG46cm9vdCB7XFxuICAgIC0tb2ZmLXdoaXRlOiAjZmFmYWVmO1xcbiAgICAtLWFjY2VudC1wcmltYXJ5OiAjNEE5REFCO1xcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICM4OUQ2OUE7XFxuICAgIC0tYWNjZW50LXRlcnRpYXJ5OiAjRTFFMTdFO1xcbiAgICAtLW1haW4tZm9udC1mYW06IFxcXCJNZWxvZHJhbWFcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICAtLXNlY29uZGFyeS1mb250LWZhbTogXFxcIldpeCBNYWRlZm9yIFRleHRcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgICAtLXNpemUtMTogMTEuMzkxcmVtO1xcbiAgICAtLXNpemUtMjogNy41OTRyZW07XFxuICAgIC0tc2l6ZS0zOiA1LjA2M3JlbTtcXG4gICAgLS1zaXplLTQ6IDMuMzc1cmVtO1xcbiAgICAtLXNpemUtNTogMi4yNXJlbTtcXG4gICAgLS1zaXplLXA6IDFyZW07XFxuICAgIC0tc2l6ZS1zOiAwLjY2N3JlbTtcXG5cXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG59XFxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQtZmFtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250LWZhbSk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLW9mZi13aGl0ZSk7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250LWZhbSk7XFxufVxcblxcbi5icmFuZGluZywgbmF2IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xcbn1cXG5cXG4uYnJhbmRpbmcge1xcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtNSk7XFxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS01KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG59XFxuXFxubmF2IGJ1dHRvbiAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEyOHB4O1xcbn1cXG5cXG4udGFnbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTsgLypGb3JjZXMgbGluZSBicmVhayBmcm9tIC50ZXh0Q29udGVudCovXFxuICAgIGdhcDogMTAwcHhcXG59XFxuXFxuLnNlY3Rpb24gcCB7XFxuICAgIHRleHQtd3JhcDogd3JhcDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtKTtcXG4gICAgY29sb3I6IHJnYigxMzAsIDEzMCwgMTMwKTtcXG59XFxuXFxuLnNlY3Rpb24gaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hY3Rpb25CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udC1mYW0pO1xcbn1cXG5cXG4ubWVudVNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lbnVTcGFuIHAge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtKTtcXG59XFxuXFxuLm1lbnVTcGFuIGltZyB7XFxuICAgIHdpZHRoOiA2NDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKkZ1bGwgYmxlZWQgYWxsb3dzIHRoZSBiYWNrZ3JvdW5kIGNvbG91ciB0byBicmVhayBvdXQgb2YgdGhlIGNvbnRhaW5pbmcgZGl2ICovXFxuLmZ1bGxCbGVlZCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZtYXggdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMCAtMTAwdm1heCk7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY2FyZCBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xcbn1cXG5cXG4uY2FyZCBwLCAuY2FyZCBoNiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udC1mYW0pO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmNhcmQgaDYge1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtNik7XFxufVxcblxcbi5hYm91dFVzRGVzYyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtZmFtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxuICAgIG1hcmdpbi10b3A6IDY0cHg7XFxufVxcblxcbi5hYm91dFVzRGVzYyBwIHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJzcmNcIjpcImh0dHBzOi8vd3d3LnNlYWtheWFrYWR2ZW50dXJlcy5jb20vc2l0ZXMvc2Vha2F5YWthZHZlbnR1cmVzLmNvbS9maWxlcy9pbWFnZXMvcG91dGluZS1xdWViZWNfMC5qcGdcIixcImFsdFwiOlwiUG91dGluZSBsYXRoZXJlZCB3aXRoIGdyYXZ5IGFuZCB0b3BwZWQgd2l0aCBjaGVlc2UgY3VyZHNcIixcImRlc2NcIjpcIlF1ZWJlY+KAmXMgcmVwdXRhdGlvbiBmb3IgcG91dGluZSBleHRlbmRzIHdlbGwgYmV5b25kIGl0cyBib3JkZXJzIGFuZCB5b3UgY2Fu4oCZdCBjb21lIHRvIHRoZSBwcm92aW5jZSB3aXRob3V0IHRyeWluZyB0aGlzIHNpZ25hdHVyZSBkaXNoXCIsXCJwcmljZVwiOjEyLjk5LFwibmFtZVwiOlwiUG91dGluZVwifSx7XCJzcmNcIjpcImh0dHBzOi8vd3d3LnNlYWtheWFrYWR2ZW50dXJlcy5jb20vc2l0ZXMvc2Vha2F5YWthZHZlbnR1cmVzLmNvbS9maWxlcy9pbWFnZXMvVG91cnRpJUMzJUE4cmUuanBnXCIsXCJhbHRcIjpcIkEgcGllIGZpbGxlZCB3aXRoIG1lYXRcIixcImRlc2NcIjpcIlRoZXNlIG1lYXQgcGllcyBhcmUgYSBzdGFwbGUgaW4gdGhlIGJha2VyaWVzIG9mIFF1ZWJlYyBDaXR5LCBhcyB3ZWxsIGFzIGJlaW5nIGEgc3RhbmRhcmQgZGlzaCBvbiBsb2NhbCB0YWJsZXMgYXQgQ2hyaXN0bWFzIGFuZCBOZXcgWWVhcuKAmXMgRXZlXCIsXCJwcmljZVwiOjE2Ljk5LFwibmFtZVwiOlwiVG91cnRpw6hyZVwifSx7XCJzcmNcIjpcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzUzNDgzL3N0cmF3YmVycmllcy1jcmVwZS1kZXNzZXJ0LXN3ZWV0LTUzNDgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIixcImFsdFwiOlwiQ3JlcGVzIG5leHQgdG8gc29tZSBzdHJhd2JlcnJpZXNcIixcImRlc2NcIjpcIlRyYWRpdGlvbmFsbHkgbWFkZSB3aXRoIG1pbGssIGZsb3VyLCBhbmQgZWdncywgdGhleSBhcmUgY29va2VkIG9uIGEgY2FzdC1pcm9uIHBsYXRlIGJlZm9yZSBiZWluZyBzdHVmZmVkIHdpdGggZWl0aGVyIHNhdm9yeSBvZiBzd2VldCBmaWxsaW5nc1wiLFwicHJpY2VcIjoxMC45OSxcIm5hbWVcIjpcIkNyw6pwZXNcIn0se1wic3JjXCI6XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xODQxMDU3My9wZXhlbHMtcGhvdG8tMTg0MTA1NzMvZnJlZS1waG90by1vZi1zb3VwLXdpdGgtb25pb24taW4tcGFuLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIixcImFsdFwiOlwiRnJlbmNoIG9uaW9uIHNvdXAgaW4gYSBza2lsbGV0IHRvcHBlZCB3aXRoIHJlZCBvbmlvblwiLFwiZGVzY1wiOlwiV2hpbGUgeW91IGNhbiBmaW5kIHBsZW50eSBvZiBkaWZmZXJlbnQgdmVyc2lvbnMsIHRyYWRpdGlvbmFsbHkgc3BlYWtpbmcsIGl0IGNvbXByaXNlcyBhIGJlZWYgYnJvdGggYW5kIGNhcmFtZWxpemVkIG9uaW9ucywgd2hpY2ggYXJlIHRvcHBlZCB3aXRoIGNyb3V0b25zIGFuZCBtZWx0ZWQgY2hlZXNlXCIsXCJwcmljZVwiOjguOTksXCJuYW1lXCI6XCJGcmVuY2ggb25pb24gc291cFwifSx7XCJzcmNcIjpcImh0dHBzOi8vd3d3LnNlYWtheWFrYWR2ZW50dXJlcy5jb20vc2l0ZXMvc2Vha2F5YWthZHZlbnR1cmVzLmNvbS9maWxlcy9pbWFnZXMvU291cGUtYXV4LXBvaXMuanBnXCIsXCJhbHRcIjpcIkEgYm93bCBvZiBzb3VwIHdpdGggYSBsaXR0bGUgYml0IG9mIGdhcm5pc2hcIixcImRlc2NcIjpcIkl0IGNvbnNpc3RzIG9mIGRyaWVkIHllbGxvdyBwZWFzIGNvb2tlZCB3aXRoIHNhbHRlZCBwb3JrIGFuZCBhIHZhcmlldHkgb2YgdmVnZXRhYmxlcy4gVGhlIEZyZW5jaCBleHBsb3JlciBTYW11ZWwgZGUgQ2hhbXBsYWluIGlzIGNyZWRpdGVkIHdpdGggYnJpbmdpbmcgdGhlIHNvdXAgdG8gQ2FuYWRpYW4gc2hvcmVzIGFyb3VuZCA0MDAgeWVhcnMgYWdvIGFuZCBpdCBoYXMgbG9uZyBzaW5jZSBiZWVuIGVtYnJhY2VkIGJ5IGZhbWlsaWVzIHRocm91Z2hvdXQgdGhlIHByb3ZpbmNlXCIsXCJwcmljZVwiOjguOTksXCJuYW1lXCI6XCJTb3VwZSBhdXggcG9pc1wifSx7XCJzcmNcIjpcImh0dHBzOi8vd3d3LnNlYWtheWFrYWR2ZW50dXJlcy5jb20vc2l0ZXMvc2Vha2F5YWthZHZlbnR1cmVzLmNvbS9maWxlcy9pbWFnZXMvQ3JldG9ucy1RdWViZWMuanBnXCIsXCJhbHRcIjpcIkdyb3VuZCBwb3JrIGluIGEgYm93bFwiLFwiZGVzY1wiOlwiQ3JldG9ucyBpcyBhIHBvcmsgcMOidMOpIHRoYXQgaXMgc2ltaWxhciB0byBGcmVuY2ggcmlsZXR0ZXMuIE1hZGUgZnJvbSBncm91bmQgcG9yaywgb25pb25zLCBhbmQgc3BpY2VzIChwbHVzIG1hcnJvdyB0byBoZWxwIGl0IGNvbmdlYWwpIGl0IGlzIHVzdWFsbHkgc2VydmVkIG9uIHRvYXN0IGFzIHBhcnQgb2YgYSB0cmFkaXRpb25hbCBRdWViZWNvaXMgYnJlYWtmYXN0XCIsXCJwcmljZVwiOjYuOTksXCJuYW1lXCI6XCJDcmV0b25zXCJ9LHtcInNyY1wiOlwiaHR0cHM6Ly93d3cuc2Vha2F5YWthZHZlbnR1cmVzLmNvbS9zaXRlcy9zZWFrYXlha2FkdmVudHVyZXMuY29tL2ZpbGVzL2ltYWdlcy9UaXJlLXN1ci1sYS1uZWlnZS1xdWViZWMuanBnXCIsXCJhbHRcIjpcIlBvcHNpY2xlIHN0aWNrcyB3aXRoIHRhZmZ5IHNpdHRpbmcgb24gdG9wIG9mIGljZVwiLFwiZGVzY1wiOlwiSXQgaXMgY3JlYXRlZCBieSBwb3VyaW5nIGhvdCBtYXBsZSBzeXJ1cCBzYXAgZGlyZWN0bHkgb250byBmcmVzaCBzbm93LiBXaGF0IHJlc3VsdHMgaXMgYSBzb2Z0IGNhbmR5IHRoYXQgaXMgZWF0ZW4gc3RyYWlnaHQgYXdheSB1c2luZyBsb25nIHdvb2RlbiBzdGlja3NcIixcInByaWNlXCI6NC45OSxcIm5hbWVcIjpcIlRpcmUgc3VyIGxhIG5laWdlXCJ9LHtcInNyY1wiOlwiaHR0cHM6Ly93d3cuc2Vha2F5YWthZHZlbnR1cmVzLmNvbS9zaXRlcy9zZWFrYXlha2FkdmVudHVyZXMuY29tL2ZpbGVzL2ltYWdlcy9UYXJ0ZS1hdS1zdWNyZV8wLmpwZ1wiLFwiYWx0XCI6XCJBIHN1Z2FyIHBpZSB3aXRoIGEgcXVhcnRlciBjdXQgb3V0XCIsXCJkZXNjXCI6XCJUcmFuc2xhdGluZyBhcyDigJxzdWdhciBwaWXigJ0sIHRoaXMgZGVsaWNpb3VzbHkgc3dlZXQgZGlzaCBpcyBwb3B1bGFyIHRocm91Z2hvdXQgTm9ydGhlcm4gRnJhbmNlIGFuZCBCZWxnaXVtIGJ1dCBoYXMgYSBzbGlnaHRseSBncmFpbmllciB0ZXh0dXJlIGluIGl0cyBRdWViZWNvaXMgdmVyc2lvbi4gTWFkZSB1c2luZyBjcmVhbSwgZmxvdXIsIGVnZywgYW5kIGJyb3duIHN1Z2FyIChvciBzb21ldGltZXMgbWFwbGUgc3lydXApXCIsXCJwcmljZVwiOjEyLjk5LFwibmFtZVwiOlwiVGFydGUgYXUgc3VjcmVcIn0se1wic3JjXCI6XCJodHRwczovL3d3dy5zZWFrYXlha2FkdmVudHVyZXMuY29tL3NpdGVzL3NlYWtheWFrYWR2ZW50dXJlcy5jb20vZmlsZXMvaW1hZ2VzL0IlQzMlQkJjaGUtZGUtTm8lQzMlQUJsLmpwZ1wiLFwiYWx0XCI6XCJBIGxvZyBzaGFwZWQgY2hvY29sYXRlIGNha2Ugd2l0aCBhIHZhbmlsbGEgc3BpcmFsIGluIHRoZSBtaWRkbGVcIixcImRlc2NcIjpcIlRoaXMgbG9nLXNoYXBlZCBjYWtlIGlzIGEgbXVzdC1oYXZlIGF0IGFueSBRdWViZWNvaXMgQ2hyaXN0bWFzIGFuZCBpcyBiZWxpZXZlZCB0byBoYXZlIG9yaWdpbmF0ZWQgZnJvbSB0aGUgMTJ0aC1jZW50dXJ5IHl1bGUgbG9nIHRyYWRpdGlvbi4gV2hlbiBzcHJpbmtsZWQgd2l0aCBvaWwgYW5kIHdpbmUsIGl0IHdhcyB0aG91Z2h0IHRoYXQgYSBidXJuaW5nIGxvZyB3b3VsZCBoZWxwIHRvIHdhcmQgb2ZmIGV2aWwgc3Bpcml0c1wiLFwicHJpY2VcIjoxMC45OSxcIm5hbWVcIjpcIkLDu2NoZSBkZSBOb8OrbFwifV0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBhYm91dFVzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcbiAgICAvL1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG5cbiAgICAvLyBQYXJhZ3JhcGhzXG4gICAgY29uc3QgcGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwZy50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBMZSBUcsOoZmxlLCBhIGxpdHRsZSBzbGljZSBvZiBGcmFuY2UgbmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgUXVlYmVjLiBGb3VuZGVkIGJ5IGEgZ3JvdXAgb2YgcGFzc2lvbmF0ZSBGcmVuY2ggaW1taWdyYW50cywgb3VyIHJlc3RhdXJhbnQgaXMgYSBoZWFydGZlbHQgdHJpYnV0ZSB0byB0aGUgY3VsaW5hcnkgdHJhZGl0aW9ucyBhbmQgZmxhdm9ycyBvZiBvdXIgaG9tZWxhbmQuIExlIFRyw6hmbGUsIHdoaWNoIG1lYW5zIFxcXCJUaGUgQ2xvdmVyLFxcXCIgc3ltYm9saXplcyBvdXIgbG92ZSBmb3IgZ29vZCBmb3J0dW5lLCBjb21tdW5pdHksIGFuZCB0aGUgcmljaCwgY29tZm9ydGluZyBjdWlzaW5lIHRoYXQgd2UgZ3JldyB1cCB3aXRoLlwiO1xuXG4gICAgY29uc3QgcGcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGcyLnRleHRDb250ZW50ID0gXCJXaGVuIHlvdSBzdGVwIGludG8gTGUgVHLDqGZsZSwgeW91J3JlIG5vdCBqdXN0IGVudGVyaW5nIGEgcmVzdGF1cmFudOKAlHlvdSdyZSBiZWNvbWluZyBwYXJ0IG9mIG91ciBleHRlbmRlZCBmYW1pbHkuIE91ciBjb3p5LCBydXN0aWMgZGVjb3IsIHdpdGggd29vZGVuIGJlYW1zIGFuZCB2aW50YWdlIEZyZW5jaCBwb3N0ZXJzLCBpcyBkZXNpZ25lZCB0byBtYWtlIHlvdSBmZWVsIGxpa2UgeW914oCZdmUgd2Fsa2VkIGludG8gYSBiaXN0cm8gaW4gYSBxdWFpbnQgRnJlbmNoIHZpbGxhZ2UuIFdlIGJlbGlldmUgaW4gY3JlYXRpbmcgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHdoZXJlIHlvdSBjYW4gcmVsYXgsIGVuam95IGdvb2QgZm9vZCwgYW5kIG1ha2UgbGFzdGluZyBtZW1vcmllcyB3aXRoIGZyaWVuZHMgYW5kIGxvdmVkIG9uZXMuXCI7XG5cbiAgICBjb25zdCBwZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwZzMudGV4dENvbnRlbnQgPSBcIk91ciBtZW51IGlzIGEgbG92ZSBsZXR0ZXIgdG8gdHJhZGl0aW9uYWwgRnJlbmNoIGN1aXNpbmUsIGZlYXR1cmluZyBkaXNoZXMgdGhhdCBoYXZlIGJlZW4gcGFzc2VkIGRvd24gdGhyb3VnaCBnZW5lcmF0aW9ucy4gRnJvbSB0aGUgc2F2b3J5IGdvb2RuZXNzIG9mIG91ciBUb3VydGnDqHJlIHRvIHRoZSBzd2VldCBpbmR1bGdlbmNlIG9mIG91ciBDcsOqcGVzLCBlYWNoIGRpc2ggaXMgcHJlcGFyZWQgd2l0aCB0aGUgc2FtZSBjYXJlIGFuZCBhdXRoZW50aWNpdHkgdGhhdCBvdXIgZm91bmRlcnPigJkgZ3JhbmRtb3RoZXJzIHVzZWQgaW4gdGhlaXIga2l0Y2hlbnMgYmFjayBpbiBGcmFuY2UuIFdlIHRha2UgcHJpZGUgaW4gdXNpbmcgZnJlc2gsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cywgZW5zdXJpbmcgdGhhdCBldmVyeSBiaXRlIGlzIGEgcGVyZmVjdCBibGVuZCBvZiBGcmVuY2ggdHJhZGl0aW9uIGFuZCBRdWViZWPigJlzIGZpbmVzdCBwcm9kdWNlLlwiO1xuXG4gICAgY29uc3QgcGc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGc0LnRleHRDb250ZW50ID0gXCJBdCBMZSBUcsOoZmxlLCB3ZSBiZWxpZXZlIHRoYXQgZm9vZCBpcyBtb3JlIHRoYW4ganVzdCBzdXN0ZW5hbmNl4oCUaXQncyBhIGNlbGVicmF0aW9uIG9mIGN1bHR1cmUgYW5kIGhlcml0YWdlLiBXaGV0aGVyIHlvdeKAmXJlIGhlcmUgZm9yIGEgY2FzdWFsIGx1bmNoLCBhIHJvbWFudGljIGRpbm5lciwgb3Igc2ltcGx5IHRvIGVuam95IGEgZ2xhc3Mgb2Ygd2luZSB3aXRoIGZyaWVuZHMsIHdl4oCZcmUgZGVkaWNhdGVkIHRvIHByb3ZpZGluZyBhbiBleHBlcmllbmNlIHRoYXQgaXMgYm90aCBkZWxpY2lvdXMgYW5kIGhlYXJ0d2FybWluZy4gU28gY29tZSBvbiBpbiwgc2l0IGJhY2ssIGFuZCBsZXQgdXMgdHJhbnNwb3J0IHlvdSB0byB0aGUgY2hhcm1pbmcgc3RyZWV0cyBvZiBGcmFuY2UsIHJpZ2h0IGhlcmUgaW4gUXVlYmVjLiBCb24gYXBww6l0aXQhXCI7XG5cbiAgICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gY2FyZFxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHBnKTtcblxuICAgIC8vIFN0eWxlIGFuZCBhZGQgZXh0cmEgcGdzIHRvIHBhZ2VcbiAgICBjb25zdCBhYm91dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFib3V0RGVzYy5hcHBlbmRDaGlsZChwZzIpO1xuICAgIGFib3V0RGVzYy5hcHBlbmRDaGlsZChwZzMpO1xuICAgIGFib3V0RGVzYy5hcHBlbmRDaGlsZChwZzQpO1xuICAgIGFib3V0RGVzYy5jbGFzc0xpc3QuYWRkKFwiZnVsbEJsZWVkXCIpO1xuICAgIGFib3V0RGVzYy5jbGFzc0xpc3QuYWRkKFwiYWJvdXRVc0Rlc2NcIik7XG5cbiAgICBjb25zdCBjb3VwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvdXBsZS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBjb3VwbGUuYXBwZW5kQ2hpbGQoYWJvdXREZXNjKTtcblxuICAgIHJldHVybiBjb3VwbGU7XG59XG5cbmV4cG9ydCB7IGFib3V0VXMgfTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250YWN0VXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuICAgIC8vXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuXG4gICAgLy8gaG9sZGVyXG4gICAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIFBhcmFncmFwaHNcbiAgICBjb25zdCBwZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBnLnRleHRDb250ZW50ID0gXCJMb29raW5nIHRvIGJvb2sgeW91ciBuZXh0IHJlc2VydmF0aW9uP1wiO1xuXG4gICAgLy8gQ2FsbCBidXR0b25cbiAgICBjb25zdCBjYWxsVG9BY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbGxUb0FjdC50ZXh0Q29udGVudCA9IFwiR2l2ZSB1cyBhIGNhbGwhXCI7XG4gICAgY2FsbFRvQWN0LmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25CdG5cIik7XG5cbiAgICAvLyBob2xkZXJcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQocGcpO1xuICAgIGhvbGRlci5hcHBlbmRDaGlsZChjYWxsVG9BY3QpO1xuICAgIGhvbGRlci5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIzMnB4XCI7XG5cbiAgICAvLyBBcHBlbmRcbiAgICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChob2xkZXIpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG5cbn1cblxuZXhwb3J0IHtjb250YWN0VXN9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGluaXRMb2FkID0gKCkgPT4ge1xuICAgIC8vdmFyIGNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7IC8vIHJldHVybnMgYXMgbnVsbCAtIGZpeFxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIE1ha2Ugd3JhcHBlciBmb3IgbWFpbiBjb250ZW50XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJGb3J0dW5lIGZhdm91cnMgXFxudGhlIGZsYXZvdXJmdWxcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGggYW5kIGNhbGwgdG8gYWN0aW9uXG4gICAgdmFyIGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgdmFyIHBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gTGUgVHLDqGZsZSwgYSBRdcOpYmVjLWJhc2VkIHJlc3RhdXJhbnQgd2hpY2ggc2VydmVzIGF1dGhlbnRpYyBkaXNoZXMgZnJvbSBwYXNzZWQgZG93biBmcm9tIGdlbmVyYXRpb25zIG9mIEZyZW5jaCBpbW1pZ3JhbnRzLiBXZSBwcmlkZSBvdXJzZWx2ZXMgaW4gb3VyIHJvb3RzIGFuZCB0aGUgZmxhdm91cnMgdGhhdCB0aGV5IGJyb3VnaHQgdXMuXCI7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwZyk7XG5cbiAgICBjb25zdCBjYWxsVG9BY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbGxUb0FjdC50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xuICAgIGNhbGxUb0FjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uQnRuXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FsbFRvQWN0KTtcblxuICAgIC8vIFxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKVxuICAgIHJldHVybiB3cmFwcGVyO1xufVxuXG5jb25zdCBtZW51UHJldiA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1lbnVTZWN0LmNsYXNzTGlzdC5hZGQoXCJtZW51U3BhblwiKTtcbiAgICBtZW51U2VjdC5jbGFzc0xpc3QuYWRkKFwiZnVsbEJsZWVkXCIpO1xuICAgIG1lbnVTZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHBhcmFncmFwaCBhbmQgY2FsbCB0byBhY3Rpb25cbiAgICB2YXIgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBwZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBnLnRleHRDb250ZW50ID0gXCJEaXNjb3ZlciBvdXIgdmVyc2F0aWxlIG1lbnUgd2l0aCBmbGF2b3VycyBmb3IgZXZlcnkgY3JhdmluZy4gSW5kbHVnZSBpbiBvdXIgc3dlZXQgY3LDqnBlcyBvciB0cnkgb3VyIHNhdm91cnkgUXXDqWLDqWNvaXMgcG91dGluZS5cIjtcbiAgICBjYXJkLmFwcGVuZENoaWxkKHBnKTtcblxuICAgIGNvbnN0IGNhbGxUb0FjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FsbFRvQWN0LnRleHRDb250ZW50ID0gXCJMZWFybiBNb3JlXCI7XG4gICAgY2FsbFRvQWN0LmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25CdG5cIik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYWxsVG9BY3QpO1xuXG4gICAgLy8gTWFrZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IFwiLi4vc3R5bGVzL2ltZ3MvY3JlcGVzLmpwZ1wiO1xuXG4gICAgLy8gRXhwb3J0XG4gICAgbWVudVNlY3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgbWVudVNlY3QuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIHJldHVybiBtZW51U2VjdDtcbn1cblxuZXhwb3J0IHtpbml0TG9hZCwgbWVudVByZXZ9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vbWlzYy9yZXN0YXVyYW50LW1lbnUuY3N2XCI7XG5cbmNvbnN0IG1lbnVIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb25cIik7XG4gICAgLy9cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xuXG4gICAgY29uc3QgcGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwZy50ZXh0Q29udGVudCA9IFwiVGFrZSBhIGxvb2sgYXQgb3VyIHZhc3QgYXJyYXkgb2YgYXV0aGVudGljIFF1w6liw6ljb2lzIGRpc2hlcy4gV2UncmUgc3VyZSB0aGVyZSB3aWxsIGJlIHNvbWV0aGluZyB5b3UnbGwgbG92ZS5cIjtcblxuICAgIC8vIGFwcGVuZCBlbGVtZW50cyB0byBjYXJkXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGcpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmNvbnN0IG1lbnVHcmlkID0gKCkgPT4ge1xuICAgIHZhciBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgY29uc29sZS5sb2coTWVudSk7XG4gICAgcG9wdWxhdGVHcmlkKGdyaWQpO1xuXG4gICAgcmV0dXJuIGdyaWQ7XG59XG5cbmNvbnN0IHBvcHVsYXRlR3JpZCA9IChncmlkKSA9PiB7XG4gICAgTWVudS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdy5uYW1lKTsgLy8gc2hvd3MgYXMgdW5kZWZpbmVkXG4gICAgICAgIHZhciB0ZW1wQ2FyZCA9IGNyZWF0ZUl0ZW0ocm93LnNyYywgcm93LmFsdCwgcm93LmRlc2MsIHJvdy5wcmljZSwgcm93Lm5hbWUpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHRlbXBDYXJkKTtcbiAgICB9KTtcbn1cblxuY29uc3QgY3JlYXRlSXRlbSA9IChpdGVtU3JjLCBpdGVtQWx0LCBpdGVtRGVzYywgaXRlbVByaWNlLCBpdGVtTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBpdGVtU3JjO1xuICAgIGltZy5hbHQgPSBpdGVtQWx0O1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbU5hbWU7XG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IGl0ZW1EZXNjO1xuXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIiQgXCIraXRlbVByaWNlO1xuXG4gICAgLy8gQXBwZW5kIHRvIHRoZSBjYXJkIGFsbCBpdGVtc1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbn1cblxuZXhwb3J0IHttZW51SGVhZCwgbWVudUdyaWR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnRzXG5pbXBvcnQge2luaXRMb2FkLCBtZW51UHJldn0gZnJvbSBcIi4vbG9hZFBhZ2VcIjtcbmltcG9ydCB7IG1lbnVIZWFkLCBtZW51R3JpZCB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGFib3V0VXMgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgY29udGFjdFVzIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vLyB2YXJzIFxuY29uc3QgbWFpbkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbi8vIERlZmF1bHRcbm1haW5Db250LmFwcGVuZENoaWxkKGluaXRMb2FkKCkpO1xubWFpbkNvbnQuYXBwZW5kQ2hpbGQobWVudVByZXYoKSk7XG5cbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGJ1dHRvblwiKTtcblxubmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICB2YXIgcGFnZUFjdGlvbiA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhZ2UtdHlwZVwiKTtcbiAgICAgICAgY2xlYXJDb250ZW50KG1haW5Db250KTsgLy8gQ2xlYXJzIHBhZ2Ugb2YgY3VycmVudCBjb250ZW50XG5cbiAgICAgICAgLy8gRGlzcGxheXMgY3VycmVudCBzZWxlY3RlZCB0YWJcbiAgICAgICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBpZiAoYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtcGFnZS10eXBlXCIpID09IHBhZ2VBY3Rpb24pe1xuICAgICAgICAgICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjODlENjlBXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2gocGFnZUFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICAgICAgICAvLyBpbml0IGxvYWQgYW5kIG1lbnVwcmV2aWV3XG4gICAgICAgICAgICAgICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoaW5pdExvYWQoKSk7XG4gICAgICAgICAgICAgICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQobWVudVByZXYoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICAgICAgICAgIG1haW5Db250LmFwcGVuZENoaWxkKG1lbnVIZWFkKCkpO1xuICAgICAgICAgICAgICAgIG1haW5Db250LmFwcGVuZENoaWxkKG1lbnVHcmlkKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFib3V0XCI6XG4gICAgICAgICAgICAgICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoYWJvdXRVcygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICAgICAgICAgICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoY29udGFjdFVzKCkpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQobWFpbnRDb250KSB7XG4gICAgbWFpbnRDb250LnJlcGxhY2VDaGlsZHJlbigpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==