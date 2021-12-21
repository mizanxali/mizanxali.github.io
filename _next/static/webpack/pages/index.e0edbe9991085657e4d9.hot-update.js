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
      }, _this), props.submissionURL && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: props.submissionURL,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inline-block text-base ml-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCode"], {
            className: "inline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 246
          }, _this), " DEVPOST"]
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectCard */ "./components/ProjectCard.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./data.js");

var _jsxFileName = "C:\\Users\\mizan\\Documents\\mizanxali.github.io\\pages\\index.js";




function Home() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "mizanxali | Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Portfolio website built using Next.js and Tailwind CSS."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col md:flex-row justify-around items-center w-3/4 mt-5 mb-10 mx-auto py-5 px-3 rounded-lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/mizan.jpg",
          className: "w-3/4 rounded-full mx-auto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mt-5 md:mt-0 flex-auto text-center px-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-4xl text-gray-100",
          children: ["Hey there! I am Mizan Ali, aka ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
            children: "mizanxali"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 82
          }, this), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-2xl mt-2 text-gray-400",
          children: ["I'm a third year student at VIT Bhopal University studying CS Engineering with specialization in Gaming Technology.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 171
          }, this), "I build full stack web apps using the MERN stack and mobile apps using Flutter.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 256
          }, this), "I love React, Flutter, Cricket, Rap Music, and Game of Thrones. I'm also a skilled Video Editor."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://drive.google.com/file/d/1ZduwTp8SBzDnM_hUklnVChQ75t8ey3w0/view?usp=sharing",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "inline-block text-base my-3 border-gray-100 border-2 hover:bg-gray-300 text-gray-100 hover:text-gray-800 cursor-pointer py-2 px-6 rounded",
              children: "Resume"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 148
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://github.com/mizanxali",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
              className: "my-3 mx-3 text-3xl text-gray-100 inline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 94
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://linkedin.com/in/mizanxali",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
              className: "my-3 mx-3 text-3xl text-gray-100 inline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 99
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://twitter.com/mizanxali",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTwitter"], {
              className: "my-3 mx-3 text-3xl text-gray-100 inline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 95
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://instagram.com/mizanxali",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaInstagram"], {
              className: "my-3 mx-3 text-3xl text-gray-100 inline"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 97
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-center text-white text-3xl mb-2",
      children: "Tools & Technologies I've Worked With"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 w-3/4 mx-auto py-5 px-3  rounded-lg mb-10",
      children: _data__WEBPACK_IMPORTED_MODULE_4__["tech"].map(function (item, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-base bg-gray-300 hover:bg-gray-200 py-2 px-4 rounded-md text-center cursor-default",
          children: item
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-center text-white text-3xl mb-2",
      children: "My Web/Mobile Apps"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 mx-auto py-5 px-3 rounded-lg",
      children: _data__WEBPACK_IMPORTED_MODULE_4__["projects"].map(function (project, i) {
        return project.submissionURL ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: project.type,
          title: project.title,
          description: project.description,
          imgSrc: project.imgSrc,
          repoURL: project.repoURL,
          liveURL: project.liveURL,
          techStack: project.techStack,
          submissionURL: project.submissionURL
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: project.type,
          title: project.title,
          description: project.description,
          imgSrc: project.imgSrc,
          repoURL: project.repoURL,
          liveURL: project.liveURL,
          techStack: project.techStack
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center mb-5 text-gray-200 italic",
      children: "This website was made using Next.js and Tailwind CSS."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvcHMiLCJpbWdTcmMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaFN0YWNrIiwibWFwIiwiaXRlbSIsImkiLCJsaXZlVVJMIiwicmVwb1VSTCIsInN1Ym1pc3Npb25VUkwiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiSG9tZSIsInRlY2giLCJwcm9qZWN0cyIsInByb2plY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUssRUFBSTtBQUN6QixzQkFDSTtBQUFLLGFBQVMsRUFBQyw2RUFBZjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0k7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUF3QixhQUFHLEVBQUVBLEtBQUssQ0FBQ0M7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUtJO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGtCQUEwREQsS0FBSyxDQUFDRTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFNSTtBQUFLLGlCQUFTLEVBQUMsOENBQWY7QUFBQSxrQkFBK0RGLEtBQUssQ0FBQ0c7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBT0k7QUFBSyxpQkFBUyxFQUFDLDZDQUFmO0FBQUEsa0JBQ0tILEtBQUssQ0FBQ0ksU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDOUIsOEJBQU87QUFBYyxxQkFBUyxFQUFDLG1GQUF4QjtBQUFBLHNCQUE2R0Q7QUFBN0csYUFBV0MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FGQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQWNJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDSTtBQUFHLFlBQUksRUFBRVAsS0FBSyxDQUFDUSxPQUFmO0FBQXdCLGNBQU0sRUFBQyxRQUEvQjtBQUF3QyxXQUFHLEVBQUMscUJBQTVDO0FBQUEsK0JBQWtFO0FBQUssbUJBQVMsRUFBQyxxSEFBZjtBQUFBLGtDQUFxSSxxRUFBQyxxREFBRDtBQUFRLHFCQUFTLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUcsWUFBSSxFQUFFUixLQUFLLENBQUNTLE9BQWY7QUFBd0IsY0FBTSxFQUFDLFFBQS9CO0FBQXdDLFdBQUcsRUFBQyxxQkFBNUM7QUFBQSwrQkFBa0U7QUFBSyxtQkFBUyxFQUFDLHFIQUFmO0FBQUEsa0NBQXFJLHFFQUFDLHVEQUFEO0FBQVUscUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBR0tULEtBQUssQ0FBQ1UsYUFBTixpQkFBdUI7QUFBRyxZQUFJLEVBQUVWLEtBQUssQ0FBQ1UsYUFBZjtBQUE4QixjQUFNLEVBQUMsUUFBckM7QUFBOEMsV0FBRyxFQUFDLHFCQUFsRDtBQUFBLCtCQUF3RTtBQUFLLG1CQUFTLEVBQUMscUhBQWY7QUFBQSxrQ0FBcUkscUVBQUMscURBQUQ7QUFBUSxxQkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBdkJEOztLQUFNWCxXO0FBeUJOQSxXQUFXLENBQUNZLFNBQVosR0FBd0I7QUFDcEJDLE1BQUksRUFBRUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESDtBQUVwQmIsT0FBSyxFQUFFVyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUZKO0FBR3BCWixhQUFXLEVBQUVVLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBSFY7QUFJcEJOLFNBQU8sRUFBRUksaURBQVMsQ0FBQ0MsTUFKQztBQUtwQk4sU0FBTyxFQUFFSyxpREFBUyxDQUFDQyxNQUxDO0FBTXBCYixRQUFNLEVBQUVZLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBTkw7QUFPcEJYLFdBQVMsRUFBRVMsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQsVUFQUDtBQVFwQkwsZUFBYSxFQUFFRyxpREFBUyxDQUFDQztBQVJMLENBQXhCO0FBV2VmLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTa0IsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQUssZUFBUyxFQUFDLHFHQUFmO0FBQUEsOEJBQ0U7QUFBQSwrQkFBSztBQUFLLGFBQUcsRUFBQyxZQUFUO0FBQXNCLG1CQUFTLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLHFFQUF1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLDZCQUFmO0FBQUEseUpBQWdLO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhLLGtHQUFxUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFyUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLGlDQUNFO0FBQUcsZ0JBQUksRUFBQyxvRkFBUjtBQUE2RixrQkFBTSxFQUFDLFFBQXBHO0FBQTZHLGVBQUcsRUFBQyxxQkFBakg7QUFBQSxtQ0FBdUk7QUFBSyx1QkFBUyxFQUFDLDJJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBTUU7QUFBQSxrQ0FDRTtBQUFHLGdCQUFJLEVBQUMsOEJBQVI7QUFBdUMsa0JBQU0sRUFBQyxRQUE5QztBQUF1RCxlQUFHLEVBQUMscUJBQTNEO0FBQUEsbUNBQWlGLHFFQUFDLHVEQUFEO0FBQVUsdUJBQVMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFHLGdCQUFJLEVBQUMsbUNBQVI7QUFBNEMsa0JBQU0sRUFBQyxRQUFuRDtBQUE0RCxlQUFHLEVBQUMscUJBQWhFO0FBQUEsbUNBQXNGLHFFQUFDLHlEQUFEO0FBQVksdUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFHLGdCQUFJLEVBQUMsK0JBQVI7QUFBd0Msa0JBQU0sRUFBQyxRQUEvQztBQUF3RCxlQUFHLEVBQUMscUJBQTVEO0FBQUEsbUNBQWtGLHFFQUFDLHdEQUFEO0FBQVcsdUJBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRTtBQUFHLGdCQUFJLEVBQUMsaUNBQVI7QUFBMEMsa0JBQU0sRUFBQyxRQUFqRDtBQUEwRCxlQUFHLEVBQUMscUJBQTlEO0FBQUEsbUNBQW9GLHFFQUFDLDBEQUFEO0FBQWEsdUJBQVMsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBMEJFO0FBQUksZUFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGLGVBMkJFO0FBQUssZUFBUyxFQUFDLGdHQUFmO0FBQUEsZ0JBQ0dDLDBDQUFJLENBQUNiLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNyQiw0QkFBTztBQUFjLG1CQUFTLEVBQUMseUZBQXhCO0FBQUEsb0JBQW1IRDtBQUFuSCxXQUFXQyxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCRixlQWtDRTtBQUFJLGVBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDRixlQW1DRTtBQUFLLGVBQVMsRUFBQywwRUFBZjtBQUFBLGdCQUNHWSw4Q0FBUSxDQUFDZCxHQUFULENBQWEsVUFBQ2UsT0FBRCxFQUFVYixDQUFWLEVBQWdCO0FBQzVCLGVBQU9hLE9BQU8sQ0FBQ1YsYUFBUixnQkFDTCxxRUFBQywrREFBRDtBQUFxQixjQUFJLEVBQUVVLE9BQU8sQ0FBQ1IsSUFBbkM7QUFBeUMsZUFBSyxFQUFFUSxPQUFPLENBQUNsQixLQUF4RDtBQUErRCxxQkFBVyxFQUFFa0IsT0FBTyxDQUFDakIsV0FBcEY7QUFBaUcsZ0JBQU0sRUFBRWlCLE9BQU8sQ0FBQ25CLE1BQWpIO0FBQXlILGlCQUFPLEVBQUVtQixPQUFPLENBQUNYLE9BQTFJO0FBQW1KLGlCQUFPLEVBQUVXLE9BQU8sQ0FBQ1osT0FBcEs7QUFBNkssbUJBQVMsRUFBRVksT0FBTyxDQUFDaEIsU0FBaE07QUFBMk0sdUJBQWEsRUFBRWdCLE9BQU8sQ0FBQ1Y7QUFBbE8sV0FBa0JILENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssZ0JBRUgscUVBQUMsK0RBQUQ7QUFBcUIsY0FBSSxFQUFFYSxPQUFPLENBQUNSLElBQW5DO0FBQXlDLGVBQUssRUFBRVEsT0FBTyxDQUFDbEIsS0FBeEQ7QUFBK0QscUJBQVcsRUFBRWtCLE9BQU8sQ0FBQ2pCLFdBQXBGO0FBQWlHLGdCQUFNLEVBQUVpQixPQUFPLENBQUNuQixNQUFqSDtBQUF5SCxpQkFBTyxFQUFFbUIsT0FBTyxDQUFDWCxPQUExSTtBQUFtSixpQkFBTyxFQUFFVyxPQUFPLENBQUNaLE9BQXBLO0FBQTZLLG1CQUFTLEVBQUVZLE9BQU8sQ0FBQ2hCO0FBQWhNLFdBQWtCRyxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBR0QsT0FKQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0YsZUE0Q0U7QUFBSyxlQUFTLEVBQUMsdUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7S0FqRHVCVSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUwZWRiZTk5OTEwODU2NTdlNGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgRmFQbGF5LCBGYUdpdGh1YiwgRmFDb2RlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5jb25zdCBQcm9qZWN0Q2FyZCA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LTk2IGJnLWdyYXktNDAwIHRleHQtY2VudGVyIGhvdmVyOnNoYWRvdyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd3LWZ1bGwnIHNyYz17cHJvcHMuaW1nU3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS04MDAgdGV4dC1iYXNlIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMjAwIHB5LTIgcHgtNCB0ZXh0LWNlbnRlciBjdXJzb3ItZGVmYXVsdCc+e3Byb3BzLnR5cGV9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS04MDAgbXktMiB0ZXh0LTJ4bCBmb250LW1lZGl1bSc+e3Byb3BzLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS04MDAgbXktMiBoLTUyIHNtOmgtNDAgdGV4dC1sZyBweC0zJz57cHJvcHMuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtNCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRlY2hTdGFjay5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPSdtLTEgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0yMDAgcHktMSBweC0yIHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgY3Vyc29yLWRlZmF1bHQnPntpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTInPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvcHMubGl2ZVVSTH0gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+PGRpdiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LWJhc2UgbXItMiBteS0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktODAwIGhvdmVyOnRleHQtZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgcHktMiBweC00IHJvdW5kZWQnPjxGYVBsYXkgY2xhc3NOYW1lPSdpbmxpbmUnIC8+IEFQUDwvZGl2PjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnJlcG9VUkx9IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPjxkaXYgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC1iYXNlIG1sLTIgbXktMiBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIHB5LTIgcHgtNCByb3VuZGVkJz48RmFHaXRodWIgY2xhc3NOYW1lPSdpbmxpbmUnIC8+IFJFUE88L2Rpdj48L2E+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc3VibWlzc2lvblVSTCAmJiA8YSBocmVmPXtwcm9wcy5zdWJtaXNzaW9uVVJMfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz48ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtYmFzZSBtbC0yIG15LTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTMwMCBjdXJzb3ItcG9pbnRlciBweS0yIHB4LTQgcm91bmRlZCc+PEZhQ29kZSBjbGFzc05hbWU9J2lubGluZScgLz4gREVWUE9TVDwvZGl2PjwvYT59XHJcbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Qcm9qZWN0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlcG9VUkw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsaXZlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW1nU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0ZWNoU3RhY2s6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgc3VibWlzc2lvblVSTDogUHJvcFR5cGVzLnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZFxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RDYXJkJ1xyXG5pbXBvcnQgeyBGYUdpdGh1YiwgRmFMaW5rZWRpbiwgRmFUd2l0dGVyLCBGYUluc3RhZ3JhbSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyB0ZWNoLCBwcm9qZWN0cyB9IGZyb20gJy4uL2RhdGEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+bWl6YW54YWxpIHwgUG9ydGZvbGlvPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nUG9ydGZvbGlvIHdlYnNpdGUgYnVpbHQgdXNpbmcgTmV4dC5qcyBhbmQgVGFpbHdpbmQgQ1NTLicgLz5cclxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgey8qIEludHJvICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgdy0zLzQgbXQtNSBtYi0xMCBteC1hdXRvIHB5LTUgcHgtMyByb3VuZGVkLWxnJz5cclxuICAgICAgICA8ZGl2PjxpbWcgc3JjPScvbWl6YW4uanBnJyBjbGFzc05hbWU9J3ctMy80IHJvdW5kZWQtZnVsbCBteC1hdXRvJyAvPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01IG1kOm10LTAgZmxleC1hdXRvIHRleHQtY2VudGVyIHB4LTUnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNHhsIHRleHQtZ3JheS0xMDAnPkhleSB0aGVyZSEgSSBhbSBNaXphbiBBbGksIGFrYSA8ZW0+bWl6YW54YWxpPC9lbT4uPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC0yeGwgbXQtMiB0ZXh0LWdyYXktNDAwJz5JJ20gYSB0aGlyZCB5ZWFyIHN0dWRlbnQgYXQgVklUIEJob3BhbCBVbml2ZXJzaXR5IHN0dWR5aW5nIENTIEVuZ2luZWVyaW5nIHdpdGggc3BlY2lhbGl6YXRpb24gaW4gR2FtaW5nIFRlY2hub2xvZ3kuPGJyIC8+SSBidWlsZCBmdWxsIHN0YWNrIHdlYiBhcHBzIHVzaW5nIHRoZSBNRVJOIHN0YWNrIGFuZCBtb2JpbGUgYXBwcyB1c2luZyBGbHV0dGVyLjxiciAvPkkgbG92ZSBSZWFjdCwgRmx1dHRlciwgQ3JpY2tldCwgUmFwIE11c2ljLCBhbmQgR2FtZSBvZiBUaHJvbmVzLiBJJ20gYWxzbyBhIHNraWxsZWQgVmlkZW8gRWRpdG9yLjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWmR1d1RwOFNCekRuTV9oVWtsblZDaFE3NXQ4ZXkzdzAvdmlldz91c3A9c2hhcmluZycgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+PGRpdiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LWJhc2UgbXktMyBib3JkZXItZ3JheS0xMDAgYm9yZGVyLTIgaG92ZXI6YmctZ3JheS0zMDAgdGV4dC1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktODAwIGN1cnNvci1wb2ludGVyIHB5LTIgcHgtNiByb3VuZGVkJz5SZXN1bWU8L2Rpdj48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9taXphbnhhbGknIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPjxGYUdpdGh1YiBjbGFzc05hbWU9J215LTMgbXgtMyB0ZXh0LTN4bCB0ZXh0LWdyYXktMTAwIGlubGluZScgLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vbGlua2VkaW4uY29tL2luL21pemFueGFsaScgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+PEZhTGlua2VkaW4gY2xhc3NOYW1lPSdteS0zIG14LTMgdGV4dC0zeGwgdGV4dC1ncmF5LTEwMCBpbmxpbmUnIC8+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL21pemFueGFsaScgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+PEZhVHdpdHRlciBjbGFzc05hbWU9J215LTMgbXgtMyB0ZXh0LTN4bCB0ZXh0LWdyYXktMTAwIGlubGluZScgLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vaW5zdGFncmFtLmNvbS9taXphbnhhbGknIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPjxGYUluc3RhZ3JhbSBjbGFzc05hbWU9J215LTMgbXgtMyB0ZXh0LTN4bCB0ZXh0LWdyYXktMTAwIGlubGluZScgLz48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogVGVjaCBTdGFjayAqL31cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LTN4bCBtYi0yJz5Ub29scyAmIFRlY2hub2xvZ2llcyBJJ3ZlIFdvcmtlZCBXaXRoPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTQgbGc6Z3JpZC1jb2xzLTYgZ2FwLTIgdy0zLzQgbXgtYXV0byBweS01IHB4LTMgIHJvdW5kZWQtbGcgbWItMTAnPlxyXG4gICAgICAgIHt0ZWNoLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPSd0ZXh0LWJhc2UgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0yMDAgcHktMiBweC00IHJvdW5kZWQtbWQgdGV4dC1jZW50ZXIgY3Vyc29yLWRlZmF1bHQnPntpdGVtfTwvc3Bhbj5cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogV2ViIFByb2plY3RzICovfVxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtM3hsIG1iLTInPk15IFdlYi9Nb2JpbGUgQXBwczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IHctMy80IG14LWF1dG8gcHktNSBweC0zIHJvdW5kZWQtbGcnPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcm9qZWN0LnN1Ym1pc3Npb25VUkwgP1xyXG4gICAgICAgICAgICA8UHJvamVjdENhcmQga2V5PXtpfSB0eXBlPXtwcm9qZWN0LnR5cGV9IHRpdGxlPXtwcm9qZWN0LnRpdGxlfSBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn0gaW1nU3JjPXtwcm9qZWN0LmltZ1NyY30gcmVwb1VSTD17cHJvamVjdC5yZXBvVVJMfSBsaXZlVVJMPXtwcm9qZWN0LmxpdmVVUkx9IHRlY2hTdGFjaz17cHJvamVjdC50ZWNoU3RhY2t9IHN1Ym1pc3Npb25VUkw9e3Byb2plY3Quc3VibWlzc2lvblVSTH0gLz5cclxuICAgICAgICAgICAgOiA8UHJvamVjdENhcmQga2V5PXtpfSB0eXBlPXtwcm9qZWN0LnR5cGV9IHRpdGxlPXtwcm9qZWN0LnRpdGxlfSBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn0gaW1nU3JjPXtwcm9qZWN0LmltZ1NyY30gcmVwb1VSTD17cHJvamVjdC5yZXBvVVJMfSBsaXZlVVJMPXtwcm9qZWN0LmxpdmVVUkx9IHRlY2hTdGFjaz17cHJvamVjdC50ZWNoU3RhY2t9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1iLTUgdGV4dC1ncmF5LTIwMCBpdGFsaWMnPlRoaXMgd2Vic2l0ZSB3YXMgbWFkZSB1c2luZyBOZXh0LmpzIGFuZCBUYWlsd2luZCBDU1MuPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==