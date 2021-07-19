webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectCard.jsx":
/*!************************************!*\
  !*** ./components/ProjectCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


var _jsxFileName = "C:\\Users\\mizan\\Documents\\mizanxali.github.io\\components\\ProjectCard.jsx",
    _this = undefined;





var ProjectCard = function ProjectCard(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "max-w-96 bg-gray-400 text-center hover:shadow flex flex-col justify-between",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "w-full",
          src: props.imgSrc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-gray-800 text-base bg-gray-300 hover:bg-gray-200 py-2 px-4 text-center cursor-default",
        children: props.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-gray-800 my-2 text-2xl font-medium",
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-gray-800 my-2 h-52 sm:h-40 text-lg px-3",
        children: props.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mx-4 flex flex-row flex-wrap justify-center",
        children: props.techStack.map(function (item, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "m-1 bg-gray-300 hover:bg-gray-200 py-1 px-2 rounded-xl text-center cursor-default",
            children: item
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mb-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: props.liveURL,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inline-block text-base mr-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 216
          }, _this), " LIVE"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 83
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: props.repoURL,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inline-block text-base ml-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 216
          }, _this), " REPO"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 83
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), props.devpostURL && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: props.repoURL,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inline-block text-base ml-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCode"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 237
          }, _this), " DEVPOST"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 104
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 38
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = ProjectCard;
ProjectCard.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  repoURL: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  liveURL: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  imgSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  techStack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  devpostURL: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

$RefreshReg$(_c, "ProjectCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9wcyIsImltZ1NyYyIsInR5cGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaFN0YWNrIiwibWFwIiwiaXRlbSIsImkiLCJsaXZlVVJMIiwicmVwb1VSTCIsImRldnBvc3RVUkwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUN6QixzQkFDSTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUF3QixhQUFHLEVBQUVBLEtBQUssQ0FBQ0M7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUssaUJBQVMsRUFBQyw0RkFBZjtBQUFBLGtCQUE2R0QsS0FBSyxDQUFDRTtBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQSxrQkFBMERGLEtBQUssQ0FBQ0c7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLDhDQUFmO0FBQUEsa0JBQStESCxLQUFLLENBQUNJO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQUssaUJBQVMsRUFBQyw2Q0FBZjtBQUFBLGtCQUNLSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzlCLDhCQUFPO0FBQWMscUJBQVMsRUFBQyxtRkFBeEI7QUFBQSxzQkFBNkdEO0FBQTdHLGFBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFjSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUVSLEtBQUssQ0FBQ1MsT0FBZjtBQUF3QixjQUFNLEVBQUMsUUFBL0I7QUFBd0MsV0FBRyxFQUFDLHFCQUE1QztBQUFBLCtCQUFrRTtBQUFLLG1CQUFTLEVBQUMscUhBQWY7QUFBQSxrQ0FBcUkscUVBQUMscURBQUQ7QUFBUSxxQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFHLFlBQUksRUFBRVQsS0FBSyxDQUFDVSxPQUFmO0FBQXdCLGNBQU0sRUFBQyxRQUEvQjtBQUF3QyxXQUFHLEVBQUMscUJBQTVDO0FBQUEsK0JBQWtFO0FBQUssbUJBQVMsRUFBQyxxSEFBZjtBQUFBLGtDQUFxSSxxRUFBQyx1REFBRDtBQUFVLHFCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdLVixLQUFLLENBQUNXLFVBQU4saUJBQW9CO0FBQUcsWUFBSSxFQUFFWCxLQUFLLENBQUNVLE9BQWY7QUFBd0IsY0FBTSxFQUFDLFFBQS9CO0FBQXdDLFdBQUcsRUFBQyxxQkFBNUM7QUFBQSwrQkFBa0U7QUFBSyxtQkFBUyxFQUFDLHFIQUFmO0FBQUEsa0NBQXFJLHFFQUFDLHFEQUFEO0FBQVEscUJBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXZCRDs7S0FBTVgsVztBQXlCTkEsV0FBVyxDQUFDYSxTQUFaLEdBQXdCO0FBQ3BCVixNQUFJLEVBQUVXLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREg7QUFFcEJaLE9BQUssRUFBRVUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGSjtBQUdwQlgsYUFBVyxFQUFFUyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUhWO0FBSXBCTCxTQUFPLEVBQUVHLGlEQUFTLENBQUNDLE1BSkM7QUFLcEJMLFNBQU8sRUFBRUksaURBQVMsQ0FBQ0MsTUFMQztBQU1wQmIsUUFBTSxFQUFFWSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQU5MO0FBT3BCVixXQUFTLEVBQUVRLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JELFVBUFA7QUFRcEJKLFlBQVUsRUFBRUUsaURBQVMsQ0FBQ0M7QUFSRixDQUF4QjtBQVdlZiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTI1NjM0YzBjMjRlZGM2M2Q2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZhUGxheSwgRmFHaXRodWIsIEZhQ29kZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy05NiBiZy1ncmF5LTQwMCB0ZXh0LWNlbnRlciBob3ZlcjpzaGFkb3cgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy1mdWxsJyBzcmM9e3Byb3BzLmltZ1NyY30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS04MDAgdGV4dC1iYXNlIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMjAwIHB5LTIgcHgtNCB0ZXh0LWNlbnRlciBjdXJzb3ItZGVmYXVsdCc+e3Byb3BzLnR5cGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTgwMCBteS0yIHRleHQtMnhsIGZvbnQtbWVkaXVtJz57cHJvcHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTgwMCBteS0yIGgtNTIgc206aC00MCB0ZXh0LWxnIHB4LTMnPntwcm9wcy5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC00IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGVjaFN0YWNrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9J20tMSBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTIwMCBweS0xIHB4LTIgcm91bmRlZC14bCB0ZXh0LWNlbnRlciBjdXJzb3ItZGVmYXVsdCc+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMic+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5saXZlVVJMfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz48ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtYmFzZSBtci0yIG15LTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBweS0yIHB4LTQgcm91bmRlZCc+PEZhUGxheSBjbGFzc05hbWU9J2lubGluZScgLz4gTElWRTwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnJlcG9VUkx9IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPjxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC1iYXNlIG1sLTIgbXktMiBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIHB5LTIgcHgtNCByb3VuZGVkJz48RmFHaXRodWIgY2xhc3NOYW1lPSdpbmxpbmUnIC8+IFJFUE88L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZGV2cG9zdFVSTCAmJiA8YSBocmVmPXtwcm9wcy5yZXBvVVJMfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz48ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtYmFzZSBtbC0yIG15LTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBweS0yIHB4LTQgcm91bmRlZCc+PEZhQ29kZSBjbGFzc05hbWU9J2lubGluZScgLz4gREVWUE9TVDwvZGl2PjwvYT59XHJcbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Qcm9qZWN0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlcG9VUkw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXZlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW1nU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0ZWNoU3RhY2s6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZGV2cG9zdFVSTDogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9