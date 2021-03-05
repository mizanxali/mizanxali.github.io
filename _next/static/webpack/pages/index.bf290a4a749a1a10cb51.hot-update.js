webpackHotUpdate_N_E("pages/index",{

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: tech, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tech", function() { return tech; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
var tech = ['React', 'Redux', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'TypeScript', 'Socket.IO', 'SSR/SSG', 'Heroku', 'Git', 'Tailwind CSS', 'React-Bootstrap', 'Material-UI'];
var projects = [{
  type: 'Personal Project',
  title: 'UNO Online',
  description: 'Two player online game of UNO.',
  imgSrc: '/uno-online.png',
  repoURL: 'https://github.com/mizanxali/uno-online',
  liveURL: 'https://uno-online-multiplayer.herokuapp.com/',
  techStack: ['React', 'Socket.IO', 'Express', 'Node.js']
}, {
  type: 'Personal Project',
  title: 'Drake Lyrics',
  description: 'Web app to randomly generate lyrics from over 170 different songs by Drake to use as your social media captions/bios.',
  imgSrc: '/drake-lyrics.png',
  repoURL: 'https://github.com/mizanxali/drake-lyrics',
  liveURL: 'http://www.drakelyrics.live/',
  techStack: ['React', 'Express', 'Node.js']
}, {
  type: 'Personal Project',
  title: 'GOTPEDIA',
  description: 'Online encyclopedia of the world of Game of Thrones. Includes plot for every episode and information about characters and houses.',
  imgSrc: '/gotpedia.png',
  repoURL: 'https://github.com/mizanxali/gotpedia',
  liveURL: 'https://mizanxali.github.io/gotpedia/',
  techStack: ['React', 'React-Bootstrap']
}, {
  type: 'Personal Project',
  title: 'Cricket Scorer',
  description: 'Web app to keep score of cricket matches. Includes real time batting/bowling scorecard for each team.',
  imgSrc: '/cricket-scorer.png',
  repoURL: 'https://github.com/mizanxali/cricket-scorer-js',
  liveURL: 'https://mizanxali.github.io/cricket-scorer-js',
  techStack: ['React', 'Redux', 'Material-UI']
}, {
  type: 'Personal Project',
  title: "mizanxali's Game Zone",
  description: 'A collection of some browser games made purely with Vanilla JavaScript. Includes 2048, Snake, Pac-Man, Whack-A-Mole, Candy Crush Saga, and more.',
  imgSrc: '/gamezone.png',
  repoURL: 'https://github.com/mizanxali/vanilla-js-games',
  liveURL: 'https://mizanxali.github.io/vanilla-js-games/',
  techStack: ['HTML', 'Javascript']
}, {
  type: 'Team Project',
  title: 'One Step - elecTRON',
  description: 'OneStepML is a community-led, open-sourced, e-learning platform for Machine Learning and Data Science, developed at elecTRON.',
  imgSrc: '/onestep-electron.png',
  repoURL: 'https://github.com/OneStep-elecTRON/onestep-electron.github.io',
  liveURL: 'https://onestep-electron.github.io/',
  techStack: ['React', 'Next.js', 'Docusaurus', 'Typescript']
}, {
  type: 'Course Project',
  title: 'Dev Connect',
  description: 'Social network for developers.',
  imgSrc: '/dev-connect.png',
  repoURL: 'https://github.com/mizanxali/dev-connect',
  liveURL: 'https://dev-connect-5270.herokuapp.com/',
  techStack: ['React', 'Express', 'MongoDB', 'Node.js', 'JWT']
}, {
  type: 'Course Project',
  title: 'Netflix Clone',
  description: "Front-end Netflix clone with Firebase authentication and Firestore database built as a part of Sonny Sangha's 5 Day React Challenge on YouTube.",
  imgSrc: '/netflix-clone.png',
  repoURL: 'https://github.com/mizanxali/netflix-clone',
  liveURL: 'https://mizanxali.github.io/netflix-clone/',
  techStack: ['React', 'Firebase']
}, {
  type: 'Course Project',
  title: 'Flamin Burger',
  description: "A website to build and order a custom burger.",
  imgSrc: '',
  repoURL: 'https://github.com/mizanxali/flamin-burger',
  liveURL: '',
  techStack: ['React', 'Redux', 'Firebase']
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS5qcyJdLCJuYW1lcyI6WyJ0ZWNoIiwicHJvamVjdHMiLCJ0eXBlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1NyYyIsInJlcG9VUkwiLCJsaXZlVVJMIiwidGVjaFN0YWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsSUFBSSxHQUFHLENBQ2hCLE9BRGdCLEVBQ1AsT0FETyxFQUNFLFNBREYsRUFDYSxTQURiLEVBQ3dCLFNBRHhCLEVBQ21DLFNBRG5DLEVBQzhDLFVBRDlDLEVBQzBELFlBRDFELEVBQ3dFLFdBRHhFLEVBQ3FGLFNBRHJGLEVBQ2dHLFFBRGhHLEVBQzBHLEtBRDFHLEVBQ2lILGNBRGpILEVBQ2lJLGlCQURqSSxFQUNvSixhQURwSixDQUFiO0FBSUEsSUFBTUMsUUFBUSxHQUFHLENBQ3BCO0FBQ0lDLE1BQUksRUFBRSxrQkFEVjtBQUVJQyxPQUFLLEVBQUUsWUFGWDtBQUdJQyxhQUFXLEVBQUUsZ0NBSGpCO0FBSUlDLFFBQU0sRUFBRSxpQkFKWjtBQUtJQyxTQUFPLEVBQUUseUNBTGI7QUFNSUMsU0FBTyxFQUFFLCtDQU5iO0FBT0lDLFdBQVMsRUFBRSxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDO0FBUGYsQ0FEb0IsRUFVcEI7QUFDSU4sTUFBSSxFQUFFLGtCQURWO0FBRUlDLE9BQUssRUFBRSxjQUZYO0FBR0lDLGFBQVcsRUFBRSx1SEFIakI7QUFJSUMsUUFBTSxFQUFFLG1CQUpaO0FBS0lDLFNBQU8sRUFBRSwyQ0FMYjtBQU1JQyxTQUFPLEVBQUUsOEJBTmI7QUFPSUMsV0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsU0FBckI7QUFQZixDQVZvQixFQW1CcEI7QUFDSU4sTUFBSSxFQUFFLGtCQURWO0FBRUlDLE9BQUssRUFBRSxVQUZYO0FBR0lDLGFBQVcsRUFBRSxtSUFIakI7QUFJSUMsUUFBTSxFQUFFLGVBSlo7QUFLSUMsU0FBTyxFQUFFLHVDQUxiO0FBTUlDLFNBQU8sRUFBRSx1Q0FOYjtBQU9JQyxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsaUJBQVY7QUFQZixDQW5Cb0IsRUE0QnBCO0FBQ0lOLE1BQUksRUFBRSxrQkFEVjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsYUFBVyxFQUFFLHVHQUhqQjtBQUlJQyxRQUFNLEVBQUUscUJBSlo7QUFLSUMsU0FBTyxFQUFFLGdEQUxiO0FBTUlDLFNBQU8sRUFBRSwrQ0FOYjtBQU9JQyxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixhQUFuQjtBQVBmLENBNUJvQixFQXFDcEI7QUFDSU4sTUFBSSxFQUFFLGtCQURWO0FBRUlDLE9BQUssRUFBRSx1QkFGWDtBQUdJQyxhQUFXLEVBQUUsa0pBSGpCO0FBSUlDLFFBQU0sRUFBRSxlQUpaO0FBS0lDLFNBQU8sRUFBRSwrQ0FMYjtBQU1JQyxTQUFPLEVBQUUsK0NBTmI7QUFPSUMsV0FBUyxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQVQ7QUFQZixDQXJDb0IsRUE4Q3BCO0FBQ0lOLE1BQUksRUFBRSxjQURWO0FBRUlDLE9BQUssRUFBRSxxQkFGWDtBQUdJQyxhQUFXLEVBQUUsK0hBSGpCO0FBSUlDLFFBQU0sRUFBRSx1QkFKWjtBQUtJQyxTQUFPLEVBQUUsZ0VBTGI7QUFNSUMsU0FBTyxFQUFFLHFDQU5iO0FBT0lDLFdBQVMsRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFlBQXJCLEVBQW1DLFlBQW5DO0FBUGYsQ0E5Q29CLEVBdURwQjtBQUNJTixNQUFJLEVBQUUsZ0JBRFY7QUFFSUMsT0FBSyxFQUFFLGFBRlg7QUFHSUMsYUFBVyxFQUFFLGdDQUhqQjtBQUlJQyxRQUFNLEVBQUUsa0JBSlo7QUFLSUMsU0FBTyxFQUFFLDBDQUxiO0FBTUlDLFNBQU8sRUFBRSx5Q0FOYjtBQU9JQyxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixTQUFyQixFQUFnQyxTQUFoQyxFQUEyQyxLQUEzQztBQVBmLENBdkRvQixFQWdFcEI7QUFDSU4sTUFBSSxFQUFFLGdCQURWO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLGFBQVcsRUFBRSxpSkFIakI7QUFJSUMsUUFBTSxFQUFFLG9CQUpaO0FBS0lDLFNBQU8sRUFBRSw0Q0FMYjtBQU1JQyxTQUFPLEVBQUUsNENBTmI7QUFPSUMsV0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLFVBQVY7QUFQZixDQWhFb0IsRUF5RXBCO0FBQ0lOLE1BQUksRUFBRSxnQkFEVjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxhQUFXLEVBQUUsK0NBSGpCO0FBSUlDLFFBQU0sRUFBRSxFQUpaO0FBS0lDLFNBQU8sRUFBRSw0Q0FMYjtBQU1JQyxTQUFPLEVBQUUsRUFOYjtBQU9JQyxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixVQUFuQjtBQVBmLENBekVvQixDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZjI5MGE0YTc0OWExYTEwY2I1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlY2ggPSBbXHJcbiAgICAnUmVhY3QnLCAnUmVkdXgnLCAnTmV4dC5qcycsICdOb2RlLmpzJywgJ0V4cHJlc3MnLCAnTW9uZ29EQicsICdGaXJlYmFzZScsICdUeXBlU2NyaXB0JywgJ1NvY2tldC5JTycsICdTU1IvU1NHJywgJ0hlcm9rdScsICdHaXQnLCAnVGFpbHdpbmQgQ1NTJywgJ1JlYWN0LUJvb3RzdHJhcCcsICdNYXRlcmlhbC1VSSdcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdQZXJzb25hbCBQcm9qZWN0JyxcclxuICAgICAgICB0aXRsZTogJ1VOTyBPbmxpbmUnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVHdvIHBsYXllciBvbmxpbmUgZ2FtZSBvZiBVTk8uJyxcclxuICAgICAgICBpbWdTcmM6ICcvdW5vLW9ubGluZS5wbmcnLFxyXG4gICAgICAgIHJlcG9VUkw6ICdodHRwczovL2dpdGh1Yi5jb20vbWl6YW54YWxpL3Vuby1vbmxpbmUnLFxyXG4gICAgICAgIGxpdmVVUkw6ICdodHRwczovL3Vuby1vbmxpbmUtbXVsdGlwbGF5ZXIuaGVyb2t1YXBwLmNvbS8nLFxyXG4gICAgICAgIHRlY2hTdGFjazogWydSZWFjdCcsICdTb2NrZXQuSU8nLCAnRXhwcmVzcycsICdOb2RlLmpzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1BlcnNvbmFsIFByb2plY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRHJha2UgTHlyaWNzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1dlYiBhcHAgdG8gcmFuZG9tbHkgZ2VuZXJhdGUgbHlyaWNzIGZyb20gb3ZlciAxNzAgZGlmZmVyZW50IHNvbmdzIGJ5IERyYWtlIHRvIHVzZSBhcyB5b3VyIHNvY2lhbCBtZWRpYSBjYXB0aW9ucy9iaW9zLicsXHJcbiAgICAgICAgaW1nU3JjOiAnL2RyYWtlLWx5cmljcy5wbmcnLFxyXG4gICAgICAgIHJlcG9VUkw6ICdodHRwczovL2dpdGh1Yi5jb20vbWl6YW54YWxpL2RyYWtlLWx5cmljcycsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHA6Ly93d3cuZHJha2VseXJpY3MubGl2ZS8nLFxyXG4gICAgICAgIHRlY2hTdGFjazogWydSZWFjdCcsICdFeHByZXNzJywgJ05vZGUuanMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnUGVyc29uYWwgUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdHT1RQRURJQScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdPbmxpbmUgZW5jeWNsb3BlZGlhIG9mIHRoZSB3b3JsZCBvZiBHYW1lIG9mIFRocm9uZXMuIEluY2x1ZGVzIHBsb3QgZm9yIGV2ZXJ5IGVwaXNvZGUgYW5kIGluZm9ybWF0aW9uIGFib3V0IGNoYXJhY3RlcnMgYW5kIGhvdXNlcy4nLFxyXG4gICAgICAgIGltZ1NyYzogJy9nb3RwZWRpYS5wbmcnLFxyXG4gICAgICAgIHJlcG9VUkw6ICdodHRwczovL2dpdGh1Yi5jb20vbWl6YW54YWxpL2dvdHBlZGlhJyxcclxuICAgICAgICBsaXZlVVJMOiAnaHR0cHM6Ly9taXphbnhhbGkuZ2l0aHViLmlvL2dvdHBlZGlhLycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ1JlYWN0LUJvb3RzdHJhcCddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdQZXJzb25hbCBQcm9qZWN0JyxcclxuICAgICAgICB0aXRsZTogJ0NyaWNrZXQgU2NvcmVyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1dlYiBhcHAgdG8ga2VlcCBzY29yZSBvZiBjcmlja2V0IG1hdGNoZXMuIEluY2x1ZGVzIHJlYWwgdGltZSBiYXR0aW5nL2Jvd2xpbmcgc2NvcmVjYXJkIGZvciBlYWNoIHRlYW0uJyxcclxuICAgICAgICBpbWdTcmM6ICcvY3JpY2tldC1zY29yZXIucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS9jcmlja2V0LXNjb3Jlci1qcycsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vbWl6YW54YWxpLmdpdGh1Yi5pby9jcmlja2V0LXNjb3Jlci1qcycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ01hdGVyaWFsLVVJJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1BlcnNvbmFsIFByb2plY3QnLFxyXG4gICAgICAgIHRpdGxlOiBcIm1pemFueGFsaSdzIEdhbWUgWm9uZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjb2xsZWN0aW9uIG9mIHNvbWUgYnJvd3NlciBnYW1lcyBtYWRlIHB1cmVseSB3aXRoIFZhbmlsbGEgSmF2YVNjcmlwdC4gSW5jbHVkZXMgMjA0OCwgU25ha2UsIFBhYy1NYW4sIFdoYWNrLUEtTW9sZSwgQ2FuZHkgQ3J1c2ggU2FnYSwgYW5kIG1vcmUuJyxcclxuICAgICAgICBpbWdTcmM6ICcvZ2FtZXpvbmUucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS92YW5pbGxhLWpzLWdhbWVzJyxcclxuICAgICAgICBsaXZlVVJMOiAnaHR0cHM6Ly9taXphbnhhbGkuZ2l0aHViLmlvL3ZhbmlsbGEtanMtZ2FtZXMvJyxcclxuICAgICAgICB0ZWNoU3RhY2s6IFsnSFRNTCcsICdKYXZhc2NyaXB0J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1RlYW0gUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdPbmUgU3RlcCAtIGVsZWNUUk9OJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ09uZVN0ZXBNTCBpcyBhIGNvbW11bml0eS1sZWQsIG9wZW4tc291cmNlZCwgZS1sZWFybmluZyBwbGF0Zm9ybSBmb3IgTWFjaGluZSBMZWFybmluZyBhbmQgRGF0YSBTY2llbmNlLCBkZXZlbG9wZWQgYXQgZWxlY1RST04uJyxcclxuICAgICAgICBpbWdTcmM6ICcvb25lc3RlcC1lbGVjdHJvbi5wbmcnLFxyXG4gICAgICAgIHJlcG9VUkw6ICdodHRwczovL2dpdGh1Yi5jb20vT25lU3RlcC1lbGVjVFJPTi9vbmVzdGVwLWVsZWN0cm9uLmdpdGh1Yi5pbycsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vb25lc3RlcC1lbGVjdHJvbi5naXRodWIuaW8vJyxcclxuICAgICAgICB0ZWNoU3RhY2s6IFsnUmVhY3QnLCAnTmV4dC5qcycsICdEb2N1c2F1cnVzJywgJ1R5cGVzY3JpcHQnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnQ291cnNlIFByb2plY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRGV2IENvbm5lY3QnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU29jaWFsIG5ldHdvcmsgZm9yIGRldmVsb3BlcnMuJyxcclxuICAgICAgICBpbWdTcmM6ICcvZGV2LWNvbm5lY3QucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS9kZXYtY29ubmVjdCcsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vZGV2LWNvbm5lY3QtNTI3MC5oZXJva3VhcHAuY29tLycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ0V4cHJlc3MnLCAnTW9uZ29EQicsICdOb2RlLmpzJywgJ0pXVCddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdDb3Vyc2UgUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdOZXRmbGl4IENsb25lJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcm9udC1lbmQgTmV0ZmxpeCBjbG9uZSB3aXRoIEZpcmViYXNlIGF1dGhlbnRpY2F0aW9uIGFuZCBGaXJlc3RvcmUgZGF0YWJhc2UgYnVpbHQgYXMgYSBwYXJ0IG9mIFNvbm55IFNhbmdoYSdzIDUgRGF5IFJlYWN0IENoYWxsZW5nZSBvbiBZb3VUdWJlLlwiLFxyXG4gICAgICAgIGltZ1NyYzogJy9uZXRmbGl4LWNsb25lLnBuZycsXHJcbiAgICAgICAgcmVwb1VSTDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taXphbnhhbGkvbmV0ZmxpeC1jbG9uZScsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vbWl6YW54YWxpLmdpdGh1Yi5pby9uZXRmbGl4LWNsb25lLycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ0ZpcmViYXNlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ0NvdXJzZSBQcm9qZWN0JyxcclxuICAgICAgICB0aXRsZTogJ0ZsYW1pbiBCdXJnZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgd2Vic2l0ZSB0byBidWlsZCBhbmQgb3JkZXIgYSBjdXN0b20gYnVyZ2VyLlwiLFxyXG4gICAgICAgIGltZ1NyYzogJycsXHJcbiAgICAgICAgcmVwb1VSTDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taXphbnhhbGkvZmxhbWluLWJ1cmdlcicsXHJcbiAgICAgICAgbGl2ZVVSTDogJycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ0ZpcmViYXNlJ11cclxuICAgIH0sXHJcbl0iXSwic291cmNlUm9vdCI6IiJ9