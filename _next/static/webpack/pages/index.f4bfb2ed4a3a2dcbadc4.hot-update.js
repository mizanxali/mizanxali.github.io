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
    style: {
      backgroundColor: '#c7b69d'
    },
    className: "max-w-96 rounded-lg text-black text-center flex flex-col justify-between",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "rounded-t-lg w-full",
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
          className: "inline-block text-sm mr-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 229
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
          className: "inline-block text-sm ml-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 229
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
          className: "inline-block text-sm ml-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCode"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 259
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImltZ1NyYyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNoU3RhY2siLCJtYXAiLCJpdGVtIiwiaSIsImxpdmVVUkwiLCJyZXBvVVJMIiwic3VibWlzc2lvblVSTCIsInByb3BUeXBlcyIsInR5cGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUN6QixzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFO0FBQW5CLEtBQVo7QUFBNEMsYUFBUyxFQUFDLDBFQUF0RDtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBcUMsYUFBRyxFQUFFRCxLQUFLLENBQUNFO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQSxrQkFBNENGLEtBQUssQ0FBQ0c7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0JBQWlESCxLQUFLLENBQUNJO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQUssaUJBQVMsRUFBQyw2Q0FBZjtBQUFBLGtCQUNLSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzlCLDhCQUFPO0FBQWMscUJBQVMsRUFBQyxzSEFBeEI7QUFBQSxzQkFBZ0pEO0FBQWhKLGFBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFjSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUVSLEtBQUssQ0FBQ1MsT0FBZjtBQUF3QixjQUFNLEVBQUMsUUFBL0I7QUFBd0MsV0FBRyxFQUFDLHFCQUE1QztBQUFBLCtCQUFrRTtBQUFLLG1CQUFTLEVBQUMsa0lBQWY7QUFBQSxrQ0FBa0oscUVBQUMscURBQUQ7QUFBUSxxQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFHLFlBQUksRUFBRVQsS0FBSyxDQUFDVSxPQUFmO0FBQXdCLGNBQU0sRUFBQyxRQUEvQjtBQUF3QyxXQUFHLEVBQUMscUJBQTVDO0FBQUEsK0JBQWtFO0FBQUssbUJBQVMsRUFBQyxrSUFBZjtBQUFBLGtDQUFrSixxRUFBQyx1REFBRDtBQUFVLHFCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdLVixLQUFLLENBQUNXLGFBQU4saUJBQXVCO0FBQUcsWUFBSSxFQUFFWCxLQUFLLENBQUNXLGFBQWY7QUFBOEIsY0FBTSxFQUFDLFFBQXJDO0FBQThDLFdBQUcsRUFBQyxxQkFBbEQ7QUFBQSwrQkFBd0U7QUFBSyxtQkFBUyxFQUFDLGtJQUFmO0FBQUEsa0NBQWtKLHFFQUFDLHFEQUFEO0FBQVEscUJBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXZCRDs7S0FBTVosVztBQXlCTkEsV0FBVyxDQUFDYSxTQUFaLEdBQXdCO0FBQ3BCQyxNQUFJLEVBQUVDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREg7QUFFcEJiLE9BQUssRUFBRVcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGSjtBQUdwQlosYUFBVyxFQUFFVSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUhWO0FBSXBCTixTQUFPLEVBQUVJLGlEQUFTLENBQUNDLE1BSkM7QUFLcEJOLFNBQU8sRUFBRUssaURBQVMsQ0FBQ0MsTUFMQztBQU1wQmIsUUFBTSxFQUFFWSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQU5MO0FBT3BCWCxXQUFTLEVBQUVTLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JELFVBUFA7QUFRcEJMLGVBQWEsRUFBRUcsaURBQVMsQ0FBQ0M7QUFSTCxDQUF4QjtBQVdlaEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjRiZmIyZWQ0YTNhMmRjYmFkYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGYVBsYXksIEZhR2l0aHViLCBGYUNvZGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmNvbnN0IFByb2plY3RDYXJkID0gcHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNjN2I2OWQnIH19IGNsYXNzTmFtZT0nbWF4LXctOTYgcm91bmRlZC1sZyB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3JvdW5kZWQtdC1sZyB3LWZ1bGwnIHNyYz17cHJvcHMuaW1nU3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS04MDAgdGV4dC1iYXNlIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMjAwIHB5LTIgcHgtNCB0ZXh0LWNlbnRlciBjdXJzb3ItZGVmYXVsdCc+e3Byb3BzLnR5cGV9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTIgdGV4dC0yeGwgZm9udC1tZWRpdW0nPntwcm9wcy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yIGgtNTIgc206aC00MCB0ZXh0LWxnIHB4LTMnPntwcm9wcy5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC00IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGVjaFN0YWNrLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9J20tMSBib3JkZXItYmxhY2sgYm9yZGVyLTIgaG92ZXI6YmctYmxhY2sgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LXdoaXRlIHB5LTEgcHgtMiByb3VuZGVkLXhsIHRleHQtY2VudGVyIGN1cnNvci1kZWZhdWx0Jz57aXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0yJz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLmxpdmVVUkx9IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPjxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC1zbSBtci0yIG15LTIgYm9yZGVyLWJsYWNrIGJvcmRlci0yIGhvdmVyOmJnLWJsYWNrIHRleHQtYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBweS0yIHB4LTQgcm91bmRlZCc+PEZhUGxheSBjbGFzc05hbWU9J2lubGluZScgLz4gQVBQPC9kaXY+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvcHMucmVwb1VSTH0gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+PGRpdiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LXNtIG1sLTIgbXktMiBib3JkZXItYmxhY2sgYm9yZGVyLTIgaG92ZXI6YmctYmxhY2sgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHB5LTIgcHgtNCByb3VuZGVkJz48RmFHaXRodWIgY2xhc3NOYW1lPSdpbmxpbmUnIC8+IFJFUE88L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3VibWlzc2lvblVSTCAmJiA8YSBocmVmPXtwcm9wcy5zdWJtaXNzaW9uVVJMfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz48ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtc20gbWwtMiBteS0yIGJvcmRlci1ibGFjayBib3JkZXItMiBob3ZlcjpiZy1ibGFjayB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgcHktMiBweC00IHJvdW5kZWQnPjxGYUNvZGUgY2xhc3NOYW1lPSdpbmxpbmUnIC8+IFNVQk1JU1NJT048L2Rpdj48L2E+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUHJvamVjdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXBvVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGl2ZVVSTDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGltZ1NyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdGVjaFN0YWNrOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIHN1Ym1pc3Npb25VUkw6IFByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==