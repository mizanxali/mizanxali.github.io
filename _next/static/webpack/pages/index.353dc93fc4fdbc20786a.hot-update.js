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
      children: [props.liveURL && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
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
            columnNumber: 247
          }, _this), " APP"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 101
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 35
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImltZ1NyYyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNoU3RhY2siLCJtYXAiLCJpdGVtIiwiaSIsImxpdmVVUkwiLCJyZXBvVVJMIiwic3VibWlzc2lvblVSTCIsInByb3BUeXBlcyIsInR5cGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUN6QixzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFO0FBQW5CLEtBQVo7QUFBNEMsYUFBUyxFQUFDLDBFQUF0RDtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBcUMsYUFBRyxFQUFFRCxLQUFLLENBQUNFO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQSxrQkFBNENGLEtBQUssQ0FBQ0c7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0JBQWlESCxLQUFLLENBQUNJO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQUssaUJBQVMsRUFBQyw2Q0FBZjtBQUFBLGtCQUNLSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzlCLDhCQUFPO0FBQWMscUJBQVMsRUFBQyxzSEFBeEI7QUFBQSxzQkFBZ0pEO0FBQWhKLGFBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFjSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsaUJBQ0tSLEtBQUssQ0FBQ1MsT0FBTixpQkFBaUI7QUFBRyxZQUFJLEVBQUVULEtBQUssQ0FBQ1MsT0FBZjtBQUF3QixjQUFNLEVBQUMsUUFBL0I7QUFBd0MsV0FBRyxFQUFDLHFCQUE1QztBQUFBLCtCQUFrRTtBQUFLLG1CQUFTLEVBQUMsa0lBQWY7QUFBQSxrQ0FBa0oscUVBQUMscURBQUQ7QUFBUSxxQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHRCLGVBRUk7QUFBRyxZQUFJLEVBQUVULEtBQUssQ0FBQ1UsT0FBZjtBQUF3QixjQUFNLEVBQUMsUUFBL0I7QUFBd0MsV0FBRyxFQUFDLHFCQUE1QztBQUFBLCtCQUFrRTtBQUFLLG1CQUFTLEVBQUMsa0lBQWY7QUFBQSxrQ0FBa0oscUVBQUMsdURBQUQ7QUFBVSxxQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFHS1YsS0FBSyxDQUFDVyxhQUFOLGlCQUF1QjtBQUFHLFlBQUksRUFBRVgsS0FBSyxDQUFDVyxhQUFmO0FBQThCLGNBQU0sRUFBQyxRQUFyQztBQUE4QyxXQUFHLEVBQUMscUJBQWxEO0FBQUEsK0JBQXdFO0FBQUssbUJBQVMsRUFBQyxrSUFBZjtBQUFBLGtDQUFrSixxRUFBQyxxREFBRDtBQUFRLHFCQUFTLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0F2QkQ7O0tBQU1aLFc7QUF5Qk5BLFdBQVcsQ0FBQ2EsU0FBWixHQUF3QjtBQUNwQkMsTUFBSSxFQUFFQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURIO0FBRXBCYixPQUFLLEVBQUVXLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRko7QUFHcEJaLGFBQVcsRUFBRVUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFIVjtBQUlwQk4sU0FBTyxFQUFFSSxpREFBUyxDQUFDQyxNQUpDO0FBS3BCTixTQUFPLEVBQUVLLGlEQUFTLENBQUNDLE1BTEM7QUFNcEJiLFFBQU0sRUFBRVksaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFOTDtBQU9wQlgsV0FBUyxFQUFFUyxpREFBUyxDQUFDRyxLQUFWLENBQWdCRCxVQVBQO0FBUXBCTCxlQUFhLEVBQUVHLGlEQUFTLENBQUNDO0FBUkwsQ0FBeEI7QUFXZWhCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1M2RjOTNmYzRmZGJjMjA3ODZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgRmFQbGF5LCBGYUdpdGh1YiwgRmFDb2RlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5jb25zdCBQcm9qZWN0Q2FyZCA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjYzdiNjlkJyB9fSBjbGFzc05hbWU9J21heC13LTk2IHJvdW5kZWQtbGcgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyb3VuZGVkLXQtbGcgdy1mdWxsJyBzcmM9e3Byb3BzLmltZ1NyY30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktODAwIHRleHQtYmFzZSBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTIwMCBweS0yIHB4LTQgdGV4dC1jZW50ZXIgY3Vyc29yLWRlZmF1bHQnPntwcm9wcy50eXBlfTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yIHRleHQtMnhsIGZvbnQtbWVkaXVtJz57cHJvcHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMiBoLTUyIHNtOmgtNDAgdGV4dC1sZyBweC0zJz57cHJvcHMuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtNCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRlY2hTdGFjay5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPSdtLTEgYm9yZGVyLWJsYWNrIGJvcmRlci0yIGhvdmVyOmJnLWJsYWNrIHRleHQtYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBweS0xIHB4LTIgcm91bmRlZC14bCB0ZXh0LWNlbnRlciBjdXJzb3ItZGVmYXVsdCc+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMic+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMubGl2ZVVSTCAmJiA8YSBocmVmPXtwcm9wcy5saXZlVVJMfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz48ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtc20gbXItMiBteS0yIGJvcmRlci1ibGFjayBib3JkZXItMiBob3ZlcjpiZy1ibGFjayB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgcHktMiBweC00IHJvdW5kZWQnPjxGYVBsYXkgY2xhc3NOYW1lPSdpbmxpbmUnIC8+IEFQUDwvZGl2PjwvYT59XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5yZXBvVVJMfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz48ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtc20gbWwtMiBteS0yIGJvcmRlci1ibGFjayBib3JkZXItMiBob3ZlcjpiZy1ibGFjayB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgcHktMiBweC00IHJvdW5kZWQnPjxGYUdpdGh1YiBjbGFzc05hbWU9J2lubGluZScgLz4gUkVQTzwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJtaXNzaW9uVVJMICYmIDxhIGhyZWY9e3Byb3BzLnN1Ym1pc3Npb25VUkx9IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPjxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC1zbSBtbC0yIG15LTIgYm9yZGVyLWJsYWNrIGJvcmRlci0yIGhvdmVyOmJnLWJsYWNrIHRleHQtYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBweS0yIHB4LTQgcm91bmRlZCc+PEZhQ29kZSBjbGFzc05hbWU9J2lubGluZScgLz4gU1VCTUlTU0lPTjwvZGl2PjwvYT59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Qcm9qZWN0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlcG9VUkw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXZlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW1nU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0ZWNoU3RhY2s6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgc3VibWlzc2lvblVSTDogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9