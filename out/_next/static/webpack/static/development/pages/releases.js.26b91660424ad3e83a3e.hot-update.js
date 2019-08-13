webpackHotUpdate("static/development/pages/releases.js",{

/***/ "./components/release_plaque.js":
/*!**************************************!*\
  !*** ./components/release_plaque.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReleasePlaque; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./helpers.js");
/* harmony import */ var _discogs_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discogs_link */ "./components/discogs_link.js");


var _jsxFileName = "/Users/mauzy/Sites/familialsoundz/components/release_plaque.js";

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tposition: absolute;\n\ttransform: rotate(90deg) translate(0, -100%);\n\ttransform-origin: 100% 0;\n\tmargin-right: -42px;\n\tmargin-top: 130px;\n\twidth: 230px;\n\theight: 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\ttext-align: center;\t\n\tpadding: 3px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmargin: auto;\n\theight: 210px;\n\twidth: 210px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tflex: none;\n\tfont-style: italic;\n\tfont-weight: 400;\n\tposition: relative;\n\tdisplay: flex;\n\tcolor: white;\n\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: ", ";\n\tcolor: white;\n\theight: 300px;\n\twidth: 300px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmargin: auto;\n\tmargin-bottom: 10px;\n\n\t@media only screen and (min-width: 900px) {\n\t\tmargin: 0;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function ReleasePlaque(_ref) {
  var issue = _ref.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      cover_url = _useState2[0],
      setCoverUrl = _useState2[1];

  var surround_color = '#000000';
  var release = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getReleaseByIssue"])(issue);
  console.log(issue, release);

  if (release.color) {
    surround_color = release.color;
  }

  var split_date = release.date.split('_');
  var formatted_date = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(new Date(split_date[0], split_date[1] - 1, 1)).format('M.YY');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaqueWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaqueSurround, {
    surround_color: surround_color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaqueCoverArt, {
    src: "/static/covers/".concat(issue, ".jpg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaqueDate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, formatted_date), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaqueTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, release.title.toUpperCase())), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinksWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discogs_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    release: release.discogs_release,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
}
var PlaqueWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var PlaqueSurround = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2(), function (props) {
  return props.surround_color;
});
var PlaqueCoverArt = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject3());
var PlaqueDate = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
var LinksWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
var PlaqueTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());

/***/ })

})
//# sourceMappingURL=releases.js.26b91660424ad3e83a3e.hot-update.js.map