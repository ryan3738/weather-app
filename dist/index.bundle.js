/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
// * Render the control and display elements
var render = function () {
  var someFunction = function someFunction() {};

  return {
    someFunction: someFunction
  };
}(); // * Render the main page component


function renderPage() {
  // Main container elements
  var main = document.createElement('div');
  main.classList.add('main'); // Populate main container elements

  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"utf-8\";\r\n/*\r\n\tAuthor\t\tCrystalCommerce.com // Ross Dallaire\r\n\r\n\tColors\r\n*/\r\n\r\n/* RESET */\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nq,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-weight: inherit;\r\n  font-style: inherit;\r\n  font-size: 100%;\r\n  font-family: inherit;\r\n}\r\n\r\nem {\r\n  font-style: italic;\r\n}\r\n\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/* /END RESET */\r\nbody {\r\n  background: whitesmoke;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  font-size: 100%;\r\n}\r\n\r\np {\r\n  line-height: 150%;\r\n  margin: 0 0 10px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: Roboto, Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.25rem;\r\n  margin: 0 0 15px;\r\n  font-weight: normal;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.62671rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.38316rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 5px 0 5px;\r\n  font-weight: bold;\r\n}\r\n\r\nh1 a,\r\nh2 a,\r\nh3 a,\r\nh4 a,\r\nh5 a,\r\nh6 a {\r\n  color: inherit;\r\n}\r\n\r\na img {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\na {\r\n  color: #363636;\r\n  outline: none;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #999;\r\n}\r\n\r\n/* remove dotted lines on some links in FF browser */\r\n\r\na,\r\na:active,\r\na:visited,\r\na img {\r\n  outline: none;\r\n}\r\n\r\n/* / */\r\n\r\n/* CLEARFIX */\r\n.clearfix:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n\r\n.clearfix {\r\n  display: inline-block;\r\n}\r\n\r\nhtml[xmlns] .clearfix {\r\n  display: block;\r\n}\r\n\r\n* html .clearfix {\r\n  height: 1%;\r\n}\r\n/* /END CLEARFIX */\r\n\r\n/*\r\n=====================================================\r\n\tLayout & Framework\r\n===================================================== */\r\n\r\n:root {\r\n  --color-50: #f2f2f2;\r\n  --color-100: #d9d9d9;\r\n  --color-200: #bfbfbf;\r\n  --color-300: #a6a6a6;\r\n  --color-400: #8c8c8c;\r\n  --color-500: #737373;\r\n  --color-600: #595959;\r\n  --color-700: #404040;\r\n  --color-800: #262626;\r\n  --color-900: #0d0d0d;\r\n\r\n  /* CSS HSL */\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n\r\n  --box-shadow: rgba(196, 166, 166, 0.16) 0px 3px 6px,\r\n    rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n\r\n  --radius: 3px;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n\r\n.btn {\r\n  font-size: 1.25rem;\r\n  border: none;\r\n  border-radius: var(--radius);\r\n  cursor: pointer;\r\n  min-width: 42px;\r\n  min-height: 42px;\r\n  /* margin: 1rem; */\r\n  /* aspect-ratio: 1; */\r\n  padding: 0.25rem;\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  background: none;\r\n  color: var(black);\r\n  /* transition: all 100ms ease-in-out; */\r\n  /* border: 0.125rem solid var(var(--cyan)); */\r\n  /* box-shadow: var(--box-shadow); */\r\n  opacity: 1;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.8;\r\n  /* background-color: var(--color-200); */\r\n  outline: 2px solid var(--indigo);\r\n  /* color: yellow; */\r\n}\r\n\r\n.btn:active,\r\n.btn:focus {\r\n  opacity: 0.6;\r\n  /* margin: 1.5rem; */\r\n  /* outline: 0.25rem solid var(--indigo); */\r\n  /* color: var(--color-500); */\r\n}\r\n\r\n.deleteBtn {\r\n  transition: opacity 300ms linear;\r\n  opacity: 0;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n  font-weight: 600;\r\n  /* font-size: 3rem; */\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 1rem 0;\r\n  background: var(--color-700);\r\n  color: var(--yellow);\r\n  border: 2px solid black;\r\n}\r\n\r\n.main {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--color-50);\r\n  color: black;\r\n  transition: all 300ms ease-in-out;\r\n  /* padding: 1rem; */\r\n  /* margin: 1rem; */\r\n}\r\n\r\n\r\n/* Form styles */\r\nform {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  transition: all 300ms ease-in-out;\r\n  opacity: 1;\r\n}\r\n\r\nlabel {\r\n  margin: 0.5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  padding: 0.5rem;\r\n  width: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: start;\r\n}\r\n\r\nlabel[type=\"checkbox\"] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  height: 100%;\r\n  width: auto;\r\n  position: relative;\r\n}\r\n\r\n/*\r\n=====================================================\r\n\tDynamic Displays\r\n===================================================== */\r\n\r\n/*\r\n=====================================================\r\n\tCurrently Unused Styles\r\n===================================================== */\r\n/* The Modal (background) */\r\n.modal {\r\n  /* Hidden by default */\r\n  display: none;\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: var(--radius);\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  color: black;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  border-radius: var(--radius);\r\n  width: 80vw; /* Could be more or less, depending on screen size */\r\n  max-width: 666px;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"utf-8\";\r\n/*\r\n\tAuthor\t\tCrystalCommerce.com // Ross Dallaire\r\n\r\n\tColors\r\n*/\r\n\r\n/* RESET */\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nq,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-weight: inherit;\r\n  font-style: inherit;\r\n  font-size: 100%;\r\n  font-family: inherit;\r\n}\r\n\r\nem {\r\n  font-style: italic;\r\n}\r\n\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/* /END RESET */\r\nbody {\r\n  background: whitesmoke;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  font-size: 100%;\r\n}\r\n\r\np {\r\n  line-height: 150%;\r\n  margin: 0 0 10px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: Roboto, Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.25rem;\r\n  margin: 0 0 15px;\r\n  font-weight: normal;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.62671rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.38316rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 5px 0 5px;\r\n  font-weight: bold;\r\n}\r\n\r\nh1 a,\r\nh2 a,\r\nh3 a,\r\nh4 a,\r\nh5 a,\r\nh6 a {\r\n  color: inherit;\r\n}\r\n\r\na img {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\na {\r\n  color: #363636;\r\n  outline: none;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #999;\r\n}\r\n\r\n/* remove dotted lines on some links in FF browser */\r\n\r\na,\r\na:active,\r\na:visited,\r\na img {\r\n  outline: none;\r\n}\r\n\r\n/* / */\r\n\r\n/* CLEARFIX */\r\n.clearfix:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n\r\n.clearfix {\r\n  display: inline-block;\r\n}\r\n\r\nhtml[xmlns] .clearfix {\r\n  display: block;\r\n}\r\n\r\n* html .clearfix {\r\n  height: 1%;\r\n}\r\n/* /END CLEARFIX */\r\n\r\n/*\r\n=====================================================\r\n\tLayout & Framework\r\n===================================================== */\r\n\r\n:root {\r\n  --color-50: #f2f2f2;\r\n  --color-100: #d9d9d9;\r\n  --color-200: #bfbfbf;\r\n  --color-300: #a6a6a6;\r\n  --color-400: #8c8c8c;\r\n  --color-500: #737373;\r\n  --color-600: #595959;\r\n  --color-700: #404040;\r\n  --color-800: #262626;\r\n  --color-900: #0d0d0d;\r\n\r\n  /* CSS HSL */\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n\r\n  --box-shadow: rgba(196, 166, 166, 0.16) 0px 3px 6px,\r\n    rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n\r\n  --radius: 3px;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n\r\n.btn {\r\n  font-size: 1.25rem;\r\n  border: none;\r\n  border-radius: var(--radius);\r\n  cursor: pointer;\r\n  min-width: 42px;\r\n  min-height: 42px;\r\n  /* margin: 1rem; */\r\n  /* aspect-ratio: 1; */\r\n  padding: 0.25rem;\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  background: none;\r\n  color: var(black);\r\n  /* transition: all 100ms ease-in-out; */\r\n  /* border: 0.125rem solid var(var(--cyan)); */\r\n  /* box-shadow: var(--box-shadow); */\r\n  opacity: 1;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.8;\r\n  /* background-color: var(--color-200); */\r\n  outline: 2px solid var(--indigo);\r\n  /* color: yellow; */\r\n}\r\n\r\n.btn:active,\r\n.btn:focus {\r\n  opacity: 0.6;\r\n  /* margin: 1.5rem; */\r\n  /* outline: 0.25rem solid var(--indigo); */\r\n  /* color: var(--color-500); */\r\n}\r\n\r\n.deleteBtn {\r\n  transition: opacity 300ms linear;\r\n  opacity: 0;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n  font-weight: 600;\r\n  /* font-size: 3rem; */\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 1rem 0;\r\n  background: var(--color-700);\r\n  color: var(--yellow);\r\n  border: 2px solid black;\r\n}\r\n\r\n.main {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--color-50);\r\n  color: black;\r\n  transition: all 300ms ease-in-out;\r\n  /* padding: 1rem; */\r\n  /* margin: 1rem; */\r\n}\r\n\r\n\r\n/* Form styles */\r\nform {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  transition: all 300ms ease-in-out;\r\n  opacity: 1;\r\n}\r\n\r\nlabel {\r\n  margin: 0.5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  padding: 0.5rem;\r\n  width: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: start;\r\n}\r\n\r\nlabel[type=\"checkbox\"] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  height: 100%;\r\n  width: auto;\r\n  position: relative;\r\n}\r\n\r\n/*\r\n=====================================================\r\n\tDynamic Displays\r\n===================================================== */\r\n\r\n/*\r\n=====================================================\r\n\tCurrently Unused Styles\r\n===================================================== */\r\n/* The Modal (background) */\r\n.modal {\r\n  /* Hidden by default */\r\n  display: none;\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: var(--radius);\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  color: black;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  border-radius: var(--radius);\r\n  width: 80vw; /* Could be more or less, depending on screen size */\r\n  max-width: 666px;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");



function appPage() {
  return (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.default)();
}

appPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLFNBQVNNLE9BQVQsR0FBbUI7QUFDakIsU0FBT04sb0RBQVUsRUFBakI7QUFDRDs7QUFFRE0sT0FBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICogUmVuZGVyIHRoZSBjb250cm9sIGFuZCBkaXNwbGF5IGVsZW1lbnRzXHJcbmNvbnN0IHJlbmRlciA9ICgoKSA9PiB7XHJcbiAgY29uc3Qgc29tZUZ1bmN0aW9uID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzb21lRnVuY3Rpb24sXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbi8vICogUmVuZGVyIHRoZSBtYWluIHBhZ2UgY29tcG9uZW50XHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XHJcbiAgLy8gTWFpbiBjb250YWluZXIgZWxlbWVudHNcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcblxyXG4gIC8vIFBvcHVsYXRlIG1haW4gY29udGFpbmVyIGVsZW1lbnRzXHJcblxyXG4gIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQYWdlO1xyXG5cclxuZXhwb3J0IHsgcmVuZGVyIH07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcInV0Zi04XFxcIjtcXHJcXG4vKlxcclxcblxcdEF1dGhvclxcdFxcdENyeXN0YWxDb21tZXJjZS5jb20gLy8gUm9zcyBEYWxsYWlyZVxcclxcblxcclxcblxcdENvbG9yc1xcclxcbiovXFxyXFxuXFxyXFxuLyogUkVTRVQgKi9cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuZGl2LFxcclxcbnNwYW4sXFxyXFxub2JqZWN0LFxcclxcbmlmcmFtZSxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5wLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxucHJlLFxcclxcbmEsXFxyXFxuYWJicixcXHJcXG5hY3JvbnltLFxcclxcbmFkZHJlc3MsXFxyXFxuY29kZSxcXHJcXG5kZWwsXFxyXFxuZGZuLFxcclxcbmVtLFxcclxcbmltZyxcXHJcXG5xLFxcclxcbmRsLFxcclxcbmR0LFxcclxcbmRkLFxcclxcbm9sLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbmZpZWxkc2V0LFxcclxcbmZvcm0sXFxyXFxubGFiZWwsXFxyXFxubGVnZW5kLFxcclxcbnRhYmxlLFxcclxcbmNhcHRpb24sXFxyXFxudGJvZHksXFxyXFxudGZvb3QsXFxyXFxudGhlYWQsXFxyXFxudHIsXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5lbSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi8qIC9FTkQgUkVTRVQgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXHJcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAgMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42MjY3MXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwIDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6IDEuMzgzMTZyZW07XFxyXFxuICBtYXJnaW46IDAgMCAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgbWFyZ2luOiA1cHggMCA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaDEgYSxcXHJcXG5oMiBhLFxcclxcbmgzIGEsXFxyXFxuaDQgYSxcXHJcXG5oNSBhLFxcclxcbmg2IGEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmEgaW1nIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICMzNjM2MzY7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZW1vdmUgZG90dGVkIGxpbmVzIG9uIHNvbWUgbGlua3MgaW4gRkYgYnJvd3NlciAqL1xcclxcblxcclxcbmEsXFxyXFxuYTphY3RpdmUsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmEgaW1nIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC8gKi9cXHJcXG5cXHJcXG4vKiBDTEVBUkZJWCAqL1xcclxcbi5jbGVhcmZpeDphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcmZpeCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmh0bWxbeG1sbnNdIC5jbGVhcmZpeCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuKiBodG1sIC5jbGVhcmZpeCB7XFxyXFxuICBoZWlnaHQ6IDElO1xcclxcbn1cXHJcXG4vKiAvRU5EIENMRUFSRklYICovXFxyXFxuXFxyXFxuLypcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcdExheW91dCAmIEZyYW1ld29ya1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci01MDogI2YyZjJmMjtcXHJcXG4gIC0tY29sb3ItMTAwOiAjZDlkOWQ5O1xcclxcbiAgLS1jb2xvci0yMDA6ICNiZmJmYmY7XFxyXFxuICAtLWNvbG9yLTMwMDogI2E2YTZhNjtcXHJcXG4gIC0tY29sb3ItNDAwOiAjOGM4YzhjO1xcclxcbiAgLS1jb2xvci01MDA6ICM3MzczNzM7XFxyXFxuICAtLWNvbG9yLTYwMDogIzU5NTk1OTtcXHJcXG4gIC0tY29sb3ItNzAwOiAjNDA0MDQwO1xcclxcbiAgLS1jb2xvci04MDA6ICMyNjI2MjY7XFxyXFxuICAtLWNvbG9yLTkwMDogIzBkMGQwZDtcXHJcXG5cXHJcXG4gIC8qIENTUyBIU0wgKi9cXHJcXG4gIC0tYmx1ZTogIzAwN2JmZjtcXHJcXG4gIC0taW5kaWdvOiAjNjYxMGYyO1xcclxcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XFxyXFxuICAtLXBpbms6ICNlODNlOGM7XFxyXFxuICAtLXJlZDogI2RjMzU0NTtcXHJcXG4gIC0tb3JhbmdlOiAjZmQ3ZTE0O1xcclxcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XFxyXFxuICAtLWdyZWVuOiAjMjhhNzQ1O1xcclxcbiAgLS10ZWFsOiAjMjBjOTk3O1xcclxcbiAgLS1jeWFuOiAjMTdhMmI4O1xcclxcbiAgLS13aGl0ZTogI2ZmZjtcXHJcXG4gIC0tZ3JheTogIzZjNzU3ZDtcXHJcXG4gIC0tZ3JheS1kYXJrOiAjMzQzYTQwO1xcclxcbiAgLS1wcmltYXJ5OiAjMDA3YmZmO1xcclxcbiAgLS1zZWNvbmRhcnk6ICM2Yzc1N2Q7XFxyXFxuICAtLXN1Y2Nlc3M6ICMyOGE3NDU7XFxyXFxuICAtLWluZm86ICMxN2EyYjg7XFxyXFxuICAtLXdhcm5pbmc6ICNmZmMxMDc7XFxyXFxuICAtLWRhbmdlcjogI2RjMzU0NTtcXHJcXG4gIC0tbGlnaHQ6ICNmOGY5ZmE7XFxyXFxuICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAtLWJyZWFrcG9pbnQteHM6IDA7XFxyXFxuICAtLWJyZWFrcG9pbnQtc206IDU3NnB4O1xcclxcbiAgLS1icmVha3BvaW50LW1kOiA3NjhweDtcXHJcXG4gIC0tYnJlYWtwb2ludC1sZzogOTkycHg7XFxyXFxuICAtLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcXHJcXG5cXHJcXG4gIC0tYm94LXNoYWRvdzogcmdiYSgxOTYsIDE2NiwgMTY2LCAwLjE2KSAwcHggM3B4IDZweCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG5cXHJcXG4gIC0tcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogNDJweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQycHg7XFxyXFxuICAvKiBtYXJnaW46IDFyZW07ICovXFxyXFxuICAvKiBhc3BlY3QtcmF0aW86IDE7ICovXFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoYmxhY2spO1xcclxcbiAgLyogdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0OyAqL1xcclxcbiAgLyogYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCB2YXIodmFyKC0tY3lhbikpOyAqL1xcclxcbiAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7ICovXFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIwMCk7ICovXFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0taW5kaWdvKTtcXHJcXG4gIC8qIGNvbG9yOiB5ZWxsb3c7ICovXFxyXFxufVxcclxcblxcclxcbi5idG46YWN0aXZlLFxcclxcbi5idG46Zm9jdXMge1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgLyogbWFyZ2luOiAxLjVyZW07ICovXFxyXFxuICAvKiBvdXRsaW5lOiAwLjI1cmVtIHNvbGlkIHZhcigtLWluZGlnbyk7ICovXFxyXFxuICAvKiBjb2xvcjogdmFyKC0tY29sb3ItNTAwKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZUJ0biB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgLyogZm9udC1zaXplOiAzcmVtOyAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci03MDApO1xcclxcbiAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci01MCk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xcclxcbiAgLyogbWFyZ2luOiAxcmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb3JtIHN0eWxlcyAqL1xcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmxhYmVsW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFx0RHluYW1pYyBEaXNwbGF5c1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcdEN1cnJlbnRseSBVbnVzZWQgU3R5bGVzXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcclxcbiAgd2lkdGg6IDgwdnc7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxyXFxuICBtYXgtd2lkdGg6IDY2NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcixcXHJcXG4uY2xvc2U6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUNoQjs7OztDQUlDOztBQUVELFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBLGVBQWU7QUFDZjtFQUNFLHNCQUFzQjtFQUN0QjtnRUFDOEQ7RUFDOUQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7OztFQU1FLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7O0VBTUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxvREFBb0Q7O0FBRXBEOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLE1BQU07O0FBRU4sYUFBYTtBQUNiO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VB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O0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzdEOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCLEVBQUUsa0NBQWtDO0VBQ3BELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVcsRUFBRSxvREFBb0Q7RUFDakUsZ0JBQWdCO0FBQ2xCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcInV0Zi04XFxcIjtcXHJcXG4vKlxcclxcblxcdEF1dGhvclxcdFxcdENyeXN0YWxDb21tZXJjZS5jb20gLy8gUm9zcyBEYWxsYWlyZVxcclxcblxcclxcblxcdENvbG9yc1xcclxcbiovXFxyXFxuXFxyXFxuLyogUkVTRVQgKi9cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuZGl2LFxcclxcbnNwYW4sXFxyXFxub2JqZWN0LFxcclxcbmlmcmFtZSxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5wLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxucHJlLFxcclxcbmEsXFxyXFxuYWJicixcXHJcXG5hY3JvbnltLFxcclxcbmFkZHJlc3MsXFxyXFxuY29kZSxcXHJcXG5kZWwsXFxyXFxuZGZuLFxcclxcbmVtLFxcclxcbmltZyxcXHJcXG5xLFxcclxcbmRsLFxcclxcbmR0LFxcclxcbmRkLFxcclxcbm9sLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbmZpZWxkc2V0LFxcclxcbmZvcm0sXFxyXFxubGFiZWwsXFxyXFxubGVnZW5kLFxcclxcbnRhYmxlLFxcclxcbmNhcHRpb24sXFxyXFxudGJvZHksXFxyXFxudGZvb3QsXFxyXFxudGhlYWQsXFxyXFxudHIsXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5lbSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi8qIC9FTkQgUkVTRVQgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXHJcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAgMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42MjY3MXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwIDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6IDEuMzgzMTZyZW07XFxyXFxuICBtYXJnaW46IDAgMCAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgbWFyZ2luOiA1cHggMCA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaDEgYSxcXHJcXG5oMiBhLFxcclxcbmgzIGEsXFxyXFxuaDQgYSxcXHJcXG5oNSBhLFxcclxcbmg2IGEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmEgaW1nIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICMzNjM2MzY7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZW1vdmUgZG90dGVkIGxpbmVzIG9uIHNvbWUgbGlua3MgaW4gRkYgYnJvd3NlciAqL1xcclxcblxcclxcbmEsXFxyXFxuYTphY3RpdmUsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmEgaW1nIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC8gKi9cXHJcXG5cXHJcXG4vKiBDTEVBUkZJWCAqL1xcclxcbi5jbGVhcmZpeDphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcmZpeCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmh0bWxbeG1sbnNdIC5jbGVhcmZpeCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuKiBodG1sIC5jbGVhcmZpeCB7XFxyXFxuICBoZWlnaHQ6IDElO1xcclxcbn1cXHJcXG4vKiAvRU5EIENMRUFSRklYICovXFxyXFxuXFxyXFxuLypcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcdExheW91dCAmIEZyYW1ld29ya1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1jb2xvci01MDogI2YyZjJmMjtcXHJcXG4gIC0tY29sb3ItMTAwOiAjZDlkOWQ5O1xcclxcbiAgLS1jb2xvci0yMDA6ICNiZmJmYmY7XFxyXFxuICAtLWNvbG9yLTMwMDogI2E2YTZhNjtcXHJcXG4gIC0tY29sb3ItNDAwOiAjOGM4YzhjO1xcclxcbiAgLS1jb2xvci01MDA6ICM3MzczNzM7XFxyXFxuICAtLWNvbG9yLTYwMDogIzU5NTk1OTtcXHJcXG4gIC0tY29sb3ItNzAwOiAjNDA0MDQwO1xcclxcbiAgLS1jb2xvci04MDA6ICMyNjI2MjY7XFxyXFxuICAtLWNvbG9yLTkwMDogIzBkMGQwZDtcXHJcXG5cXHJcXG4gIC8qIENTUyBIU0wgKi9cXHJcXG4gIC0tYmx1ZTogIzAwN2JmZjtcXHJcXG4gIC0taW5kaWdvOiAjNjYxMGYyO1xcclxcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XFxyXFxuICAtLXBpbms6ICNlODNlOGM7XFxyXFxuICAtLXJlZDogI2RjMzU0NTtcXHJcXG4gIC0tb3JhbmdlOiAjZmQ3ZTE0O1xcclxcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XFxyXFxuICAtLWdyZWVuOiAjMjhhNzQ1O1xcclxcbiAgLS10ZWFsOiAjMjBjOTk3O1xcclxcbiAgLS1jeWFuOiAjMTdhMmI4O1xcclxcbiAgLS13aGl0ZTogI2ZmZjtcXHJcXG4gIC0tZ3JheTogIzZjNzU3ZDtcXHJcXG4gIC0tZ3JheS1kYXJrOiAjMzQzYTQwO1xcclxcbiAgLS1wcmltYXJ5OiAjMDA3YmZmO1xcclxcbiAgLS1zZWNvbmRhcnk6ICM2Yzc1N2Q7XFxyXFxuICAtLXN1Y2Nlc3M6ICMyOGE3NDU7XFxyXFxuICAtLWluZm86ICMxN2EyYjg7XFxyXFxuICAtLXdhcm5pbmc6ICNmZmMxMDc7XFxyXFxuICAtLWRhbmdlcjogI2RjMzU0NTtcXHJcXG4gIC0tbGlnaHQ6ICNmOGY5ZmE7XFxyXFxuICAtLWRhcms6ICMzNDNhNDA7XFxyXFxuICAtLWJyZWFrcG9pbnQteHM6IDA7XFxyXFxuICAtLWJyZWFrcG9pbnQtc206IDU3NnB4O1xcclxcbiAgLS1icmVha3BvaW50LW1kOiA3NjhweDtcXHJcXG4gIC0tYnJlYWtwb2ludC1sZzogOTkycHg7XFxyXFxuICAtLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcXHJcXG5cXHJcXG4gIC0tYm94LXNoYWRvdzogcmdiYSgxOTYsIDE2NiwgMTY2LCAwLjE2KSAwcHggM3B4IDZweCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG5cXHJcXG4gIC0tcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogNDJweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQycHg7XFxyXFxuICAvKiBtYXJnaW46IDFyZW07ICovXFxyXFxuICAvKiBhc3BlY3QtcmF0aW86IDE7ICovXFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoYmxhY2spO1xcclxcbiAgLyogdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0OyAqL1xcclxcbiAgLyogYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCB2YXIodmFyKC0tY3lhbikpOyAqL1xcclxcbiAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7ICovXFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIwMCk7ICovXFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0taW5kaWdvKTtcXHJcXG4gIC8qIGNvbG9yOiB5ZWxsb3c7ICovXFxyXFxufVxcclxcblxcclxcbi5idG46YWN0aXZlLFxcclxcbi5idG46Zm9jdXMge1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgLyogbWFyZ2luOiAxLjVyZW07ICovXFxyXFxuICAvKiBvdXRsaW5lOiAwLjI1cmVtIHNvbGlkIHZhcigtLWluZGlnbyk7ICovXFxyXFxuICAvKiBjb2xvcjogdmFyKC0tY29sb3ItNTAwKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZUJ0biB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgLyogZm9udC1zaXplOiAzcmVtOyAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci03MDApO1xcclxcbiAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci01MCk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xcclxcbiAgLyogbWFyZ2luOiAxcmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBGb3JtIHN0eWxlcyAqL1xcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmxhYmVsW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFx0RHluYW1pYyBEaXNwbGF5c1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcdEN1cnJlbnRseSBVbnVzZWQgU3R5bGVzXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcclxcbiAgd2lkdGg6IDgwdnc7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxyXFxuICBtYXgtd2lkdGg6IDY2NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcixcXHJcXG4uY2xvc2U6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgcmVuZGVyUGFnZSBmcm9tICcuL3JlbmRlclBhZ2UnO1xyXG5cclxuZnVuY3Rpb24gYXBwUGFnZSgpIHtcclxuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xyXG59XHJcblxyXG5hcHBQYWdlKCk7XHJcbiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJzb21lRnVuY3Rpb24iLCJyZW5kZXJQYWdlIiwibWFpbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9