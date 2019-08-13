webpackHotUpdate("static/development/pages/releases.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReleasesNavigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./helpers.js");

var _jsxFileName = "/Users/mauzy/Sites/familialsoundz/components/navigation.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-bottom: 10px;\n\n\t& a {\n\t\tcolor: black;\n\t\ttext-decoration: none;\n\t\tcursor: pointer;\n\t}\n\n\t& a:visited {\n\t\tcolor: black;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function ReleasesNavigation(_ref) {
  var issue = _ref.issue;
  var release = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getReleaseByIssue"])(issue);
  if (!release) return null;
  var latest_issue = Number(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getLatestIssue"])());

  function getIssueLink(issue, anchor_text) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/releases?issue=".concat(issue),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, anchor_text);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavigationWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, issue === 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }) : getIssueLink(issue - 1, "<< Issue ".concat(issue - 1)), issue === latest_issue ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }) : getIssueLink(issue + 1, " Issue ".concat(issue + 1, " >>")));
}
var NavigationWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=releases.js.0f699725386f530e6488.hot-update.js.map