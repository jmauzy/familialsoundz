webpackHotUpdate("static/development/pages/releases.js",{

/***/ "./components/release_writeup.js":
/*!***************************************!*\
  !*** ./components/release_writeup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReleasePlaque; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./helpers.js");

var _jsxFileName = "/Users/mauzy/Sites/familialsoundz/components/release_writeup.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tline-height: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tfont-weight: bold;\n\tmargin-bottom: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t@media only screen and (min-width: 900px) {\n\t\twidth: 300px;\n\t}\n\n\tfont-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function ReleasePlaque(_ref) {
  var issue = _ref.issue;
  var release = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getReleaseByIssue"])(issue);
  var formatted_date = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(release.date).format('MMMM YYYY');
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WriteupWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WriteupHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Issue ", release.issue, " - ", formatted_date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, release.title, " - ", release.artist)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WriteupContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, release.description));
}
var WriteupWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var WriteupHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var WriteupContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());

/***/ })

})
//# sourceMappingURL=releases.js.61abd9b0609f64655385.hot-update.js.map