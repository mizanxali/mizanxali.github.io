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
    className: "max-w-96 bg-green-200 rounded-lg text-black text-center flex flex-col justify-between",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "rounded-lg w-full",
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
        className: "my-2 text-2xl font-medium",
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2 h-52 sm:h-40 text-lg px-3",
        children: props.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mx-4 flex flex-row flex-wrap justify-center",
        children: props.techStack.map(function (item, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "m-1 border-black border-2 hover:bg-black text-black hover:text-white py-1 px-2 rounded-xl text-center cursor-default",
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
          className: "inline-block text-sm mr-2 my-2 border-green-500 border-2 hover:bg-green-500 text-green-500 hover:text-white cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 241
          }, _this), " APP"]
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
          className: "inline-block text-sm ml-2 my-2 border-green-500 border-2 hover:bg-green-500 text-green-500 hover:text-white cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 241
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
      }, _this), props.submissionURL && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: props.submissionURL,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inline-block text-sm ml-2 my-2 border-green-500 border-2 hover:bg-green-500 text-green-500 hover:text-white cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCode"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 271
          }, _this), " SUBMISSION"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 113
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 41
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
  submissionURL: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9wcyIsImltZ1NyYyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNoU3RhY2siLCJtYXAiLCJpdGVtIiwiaSIsImxpdmVVUkwiLCJyZXBvVVJMIiwic3VibWlzc2lvblVSTCIsInByb3BUeXBlcyIsInR5cGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUN6QixzQkFDSTtBQUFLLGFBQVMsRUFBQyx1RkFBZjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBbUMsYUFBRyxFQUFFQSxLQUFLLENBQUNDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQSxrQkFBNENELEtBQUssQ0FBQ0U7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0JBQWlERixLQUFLLENBQUNHO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQUssaUJBQVMsRUFBQyw2Q0FBZjtBQUFBLGtCQUNLSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzlCLDhCQUFPO0FBQWMscUJBQVMsRUFBQyxzSEFBeEI7QUFBQSxzQkFBZ0pEO0FBQWhKLGFBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFjSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUVQLEtBQUssQ0FBQ1EsT0FBZjtBQUF3QixjQUFNLEVBQUMsUUFBL0I7QUFBd0MsV0FBRyxFQUFDLHFCQUE1QztBQUFBLCtCQUFrRTtBQUFLLG1CQUFTLEVBQUMsOElBQWY7QUFBQSxrQ0FBOEoscUVBQUMscURBQUQ7QUFBUSxxQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTlKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFHLFlBQUksRUFBRVIsS0FBSyxDQUFDUyxPQUFmO0FBQXdCLGNBQU0sRUFBQyxRQUEvQjtBQUF3QyxXQUFHLEVBQUMscUJBQTVDO0FBQUEsK0JBQWtFO0FBQUssbUJBQVMsRUFBQyw4SUFBZjtBQUFBLGtDQUE4SixxRUFBQyx1REFBRDtBQUFVLHFCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdLVCxLQUFLLENBQUNVLGFBQU4saUJBQXVCO0FBQUcsWUFBSSxFQUFFVixLQUFLLENBQUNVLGFBQWY7QUFBOEIsY0FBTSxFQUFDLFFBQXJDO0FBQThDLFdBQUcsRUFBQyxxQkFBbEQ7QUFBQSwrQkFBd0U7QUFBSyxtQkFBUyxFQUFDLDhJQUFmO0FBQUEsa0NBQThKLHFFQUFDLHFEQUFEO0FBQVEscUJBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE5SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXZCRDs7S0FBTVgsVztBQXlCTkEsV0FBVyxDQUFDWSxTQUFaLEdBQXdCO0FBQ3BCQyxNQUFJLEVBQUVDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREg7QUFFcEJiLE9BQUssRUFBRVcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGSjtBQUdwQlosYUFBVyxFQUFFVSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUhWO0FBSXBCTixTQUFPLEVBQUVJLGlEQUFTLENBQUNDLE1BSkM7QUFLcEJOLFNBQU8sRUFBRUssaURBQVMsQ0FBQ0MsTUFMQztBQU1wQmIsUUFBTSxFQUFFWSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQU5MO0FBT3BCWCxXQUFTLEVBQUVTLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JELFVBUFA7QUFRcEJMLGVBQWEsRUFBRUcsaURBQVMsQ0FBQ0M7QUFSTCxDQUF4QjtBQVdlZiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MjRhNGI0ZDkzNTI2MzAyMWE5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZhUGxheSwgRmFHaXRodWIsIEZhQ29kZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy05NiBiZy1ncmVlbi0yMDAgcm91bmRlZC1sZyB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3JvdW5kZWQtbGcgdy1mdWxsJyBzcmM9e3Byb3BzLmltZ1NyY30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktODAwIHRleHQtYmFzZSBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTIwMCBweS0yIHB4LTQgdGV4dC1jZW50ZXIgY3Vyc29yLWRlZmF1bHQnPntwcm9wcy50eXBlfTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yIHRleHQtMnhsIGZvbnQtbWVkaXVtJz57cHJvcHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMiBoLTUyIHNtOmgtNDAgdGV4dC1sZyBweC0zJz57cHJvcHMuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtNCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRlY2hTdGFjay5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPSdtLTEgYm9yZGVyLWJsYWNrIGJvcmRlci0yIGhvdmVyOmJnLWJsYWNrIHRleHQtYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBweS0xIHB4LTIgcm91bmRlZC14bCB0ZXh0LWNlbnRlciBjdXJzb3ItZGVmYXVsdCc+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMic+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5saXZlVVJMfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz48ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtc20gbXItMiBteS0yIGJvcmRlci1ncmVlbi01MDAgYm9yZGVyLTIgaG92ZXI6YmctZ3JlZW4tNTAwIHRleHQtZ3JlZW4tNTAwIGhvdmVyOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgcHktMiBweC00IHJvdW5kZWQnPjxGYVBsYXkgY2xhc3NOYW1lPSdpbmxpbmUnIC8+IEFQUDwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnJlcG9VUkx9IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPjxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC1zbSBtbC0yIG15LTIgYm9yZGVyLWdyZWVuLTUwMCBib3JkZXItMiBob3ZlcjpiZy1ncmVlbi01MDAgdGV4dC1ncmVlbi01MDAgaG92ZXI6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBweS0yIHB4LTQgcm91bmRlZCc+PEZhR2l0aHViIGNsYXNzTmFtZT0naW5saW5lJyAvPiBSRVBPPC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnN1Ym1pc3Npb25VUkwgJiYgPGEgaHJlZj17cHJvcHMuc3VibWlzc2lvblVSTH0gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+PGRpdiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LXNtIG1sLTIgbXktMiBib3JkZXItZ3JlZW4tNTAwIGJvcmRlci0yIGhvdmVyOmJnLWdyZWVuLTUwMCB0ZXh0LWdyZWVuLTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHB5LTIgcHgtNCByb3VuZGVkJz48RmFDb2RlIGNsYXNzTmFtZT0naW5saW5lJyAvPiBTVUJNSVNTSU9OPC9kaXY+PC9hPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblByb2plY3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVwb1VSTDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxpdmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRlY2hTdGFjazogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBzdWJtaXNzaW9uVVJMOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=