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
var tech = ['Flutter', 'React', 'GraphQL', 'Apollo Client', 'Redux', 'Next.js', 'Node.js', 'Express', 'Apollo Server', 'MongoDB', 'Firebase', 'TypeScript', 'Socket.IO', 'SSR/SSG', 'Docusaurus', 'Heroku', 'Git', 'Tailwind CSS'];
var projects = [{
  type: 'Team Project',
  title: 'Raven',
  description: 'Raven is an Android app that allows you to do more with less. Chat with friends, lend and borrow money from those you trust, find places to visit and share cab rides with friends, all in one app.',
  imgSrc: '/raven.png',
  repoURL: 'https://github.com/elecTRON-Fellowship/raven-frontend',
  liveURL: 'https://drive.google.com/file/d/1EGUI2HfoNEjTll-CEhQP3XuA7qckfkT_/view',
  devpostURL: 'https://devpost.com/software/fwallet',
  techStack: ['Flutter', 'Firebase']
}, {
  type: 'Personal Project',
  title: 'UNO Online',
  description: 'Two player online version of the card game UNO. Real time multiplayer communication supported using web sockets. Includes text chat functionality too.',
  imgSrc: '/uno-online.png',
  repoURL: 'https://github.com/mizanxali/uno-online',
  liveURL: 'https://uno-online-multiplayer.herokuapp.com/',
  techStack: ['React', 'Socket.IO', 'Express', 'Node.js']
}, {
  type: 'Personal Project',
  title: 'Drake Lyrics',
  description: 'Web app to randomly generate lyrics from over 170 different songs by Drake to use as your social media captions/bios. Fetches lyrics from Genius.',
  imgSrc: '/drake-lyrics.png',
  repoURL: 'https://github.com/mizanxali/drake-lyrics',
  liveURL: 'https://drake-lyrics.herokuapp.com/',
  techStack: ['React', 'Express', 'Node.js']
}, {
  type: 'Personal Project',
  title: 'GOTPEDIA',
  description: 'Online encyclopedia of the world of Game of Thrones. Includes plot for every episode and information about characters and houses. Uses Firebase database.',
  imgSrc: '/gotpedia.png',
  repoURL: 'https://github.com/mizanxali/gotpedia',
  liveURL: 'https://mizanxali.github.io/gotpedia/',
  techStack: ['React', 'React-Bootstrap', 'Firebase']
}, {
  type: 'Personal Project',
  title: 'Cricket Scorer',
  description: 'Front-end web app to keep score of cricket matches. Includes real time batting and bowling scorecard for each team.',
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
  description: 'OneStepML is a community-led, open-sourced, e-learning platform for Machine Learning and Data Science.',
  imgSrc: '/onestep-electron.png',
  repoURL: 'https://github.com/OneStep-elecTRON/onestep-electron.github.io',
  liveURL: 'https://onestep-electron.github.io/',
  techStack: ['React', 'Next.js', 'Docusaurus', 'Typescript']
}, {
  type: 'Personal Project',
  title: 'GK Quiz App',
  description: "A Simple GK Quiz Web App of 10 random general knowledge questions, dynamically fetched from Open Trivia DB. Made with React JS, using Typescript.",
  imgSrc: '/gk-quiz-app.png',
  repoURL: 'https://github.com/mizanxali/GK-quiz-app',
  liveURL: 'https://mizanxali.github.io/GK-quiz-app',
  techStack: ['React', 'Typescript']
}, {
  type: 'Personal Project',
  title: 'Chat Web App',
  description: "Real-time chat web app built with React, Express and Socket.IO. Multiple users can join different rooms using the room name and chat with each other.",
  imgSrc: '/chat-app.png',
  repoURL: 'https://github.com/mizanxali/chat-app-react',
  liveURL: 'https://chat-app-react-5270.herokuapp.com/',
  techStack: ['React', 'Socket.IO', 'Express', 'Node.js']
}, {
  type: 'Course Project',
  title: 'Dev Connect',
  description: 'Full stack social network application for developers. Includes features like user profile, feed, posts, comments.',
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
  description: "A website to build and order a custom burger. Uses Firebase authentication and database for each user's order history.",
  imgSrc: '/flamin-burger.png',
  repoURL: 'https://github.com/mizanxali/flamin-burger',
  liveURL: 'https://mizanxali.github.io/flamin-burger/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS5qcyJdLCJuYW1lcyI6WyJ0ZWNoIiwicHJvamVjdHMiLCJ0eXBlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZ1NyYyIsInJlcG9VUkwiLCJsaXZlVVJMIiwiZGV2cG9zdFVSTCIsInRlY2hTdGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLElBQUksR0FBRyxDQUNoQixTQURnQixFQUNMLE9BREssRUFDSSxTQURKLEVBQ2UsZUFEZixFQUNnQyxPQURoQyxFQUN5QyxTQUR6QyxFQUNvRCxTQURwRCxFQUMrRCxTQUQvRCxFQUMwRSxlQUQxRSxFQUMyRixTQUQzRixFQUNzRyxVQUR0RyxFQUNrSCxZQURsSCxFQUNnSSxXQURoSSxFQUM2SSxTQUQ3SSxFQUN3SixZQUR4SixFQUNzSyxRQUR0SyxFQUNnTCxLQURoTCxFQUN1TCxjQUR2TCxDQUFiO0FBSUEsSUFBTUMsUUFBUSxHQUFHLENBQ3BCO0FBQ0lDLE1BQUksRUFBRSxjQURWO0FBRUlDLE9BQUssRUFBRSxPQUZYO0FBR0lDLGFBQVcsRUFBRSxxTUFIakI7QUFJSUMsUUFBTSxFQUFFLFlBSlo7QUFLSUMsU0FBTyxFQUFFLHVEQUxiO0FBTUlDLFNBQU8sRUFBRSx3RUFOYjtBQU9JQyxZQUFVLEVBQUUsc0NBUGhCO0FBUUlDLFdBQVMsRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaO0FBUmYsQ0FEb0IsRUFXcEI7QUFDSVAsTUFBSSxFQUFFLGtCQURWO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLGFBQVcsRUFBRSx3SkFIakI7QUFJSUMsUUFBTSxFQUFFLGlCQUpaO0FBS0lDLFNBQU8sRUFBRSx5Q0FMYjtBQU1JQyxTQUFPLEVBQUUsK0NBTmI7QUFPSUUsV0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEM7QUFQZixDQVhvQixFQW9CcEI7QUFDSVAsTUFBSSxFQUFFLGtCQURW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QURWO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLGFBQVcsRUFBRSx3SEFIakI7QUFJSUMsUUFBTSxFQUFFLG9CQUpaO0FBS0lDLFNBQU8sRUFBRSw0Q0FMYjtBQU1JQyxTQUFPLEVBQUUsNENBTmI7QUFPSUUsV0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsVUFBbkI7QUFQZixDQXJHb0IsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTU5MzhkMGZjZWVkNDE3NmE3N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZWNoID0gW1xyXG4gICAgJ0ZsdXR0ZXInLCAnUmVhY3QnLCAnR3JhcGhRTCcsICdBcG9sbG8gQ2xpZW50JywgJ1JlZHV4JywgJ05leHQuanMnLCAnTm9kZS5qcycsICdFeHByZXNzJywgJ0Fwb2xsbyBTZXJ2ZXInLCAnTW9uZ29EQicsICdGaXJlYmFzZScsICdUeXBlU2NyaXB0JywgJ1NvY2tldC5JTycsICdTU1IvU1NHJywgJ0RvY3VzYXVydXMnLCAnSGVyb2t1JywgJ0dpdCcsICdUYWlsd2luZCBDU1MnLFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1RlYW0gUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdSYXZlbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdSYXZlbiBpcyBhbiBBbmRyb2lkIGFwcCB0aGF0IGFsbG93cyB5b3UgdG8gZG8gbW9yZSB3aXRoIGxlc3MuIENoYXQgd2l0aCBmcmllbmRzLCBsZW5kIGFuZCBib3Jyb3cgbW9uZXkgZnJvbSB0aG9zZSB5b3UgdHJ1c3QsIGZpbmQgcGxhY2VzIHRvIHZpc2l0IGFuZCBzaGFyZSBjYWIgcmlkZXMgd2l0aCBmcmllbmRzLCBhbGwgaW4gb25lIGFwcC4nLFxyXG4gICAgICAgIGltZ1NyYzogJy9yYXZlbi5wbmcnLFxyXG4gICAgICAgIHJlcG9VUkw6ICdodHRwczovL2dpdGh1Yi5jb20vZWxlY1RST04tRmVsbG93c2hpcC9yYXZlbi1mcm9udGVuZCcsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUVHVUkySGZvTkVqVGxsLUNFaFFQM1h1QTdxY2tma1RfL3ZpZXcnLFxyXG4gICAgICAgIGRldnBvc3RVUkw6ICdodHRwczovL2RldnBvc3QuY29tL3NvZnR3YXJlL2Z3YWxsZXQnLFxyXG4gICAgICAgIHRlY2hTdGFjazogWydGbHV0dGVyJywgJ0ZpcmViYXNlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1BlcnNvbmFsIFByb2plY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnVU5PIE9ubGluZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUd28gcGxheWVyIG9ubGluZSB2ZXJzaW9uIG9mIHRoZSBjYXJkIGdhbWUgVU5PLiBSZWFsIHRpbWUgbXVsdGlwbGF5ZXIgY29tbXVuaWNhdGlvbiBzdXBwb3J0ZWQgdXNpbmcgd2ViIHNvY2tldHMuIEluY2x1ZGVzIHRleHQgY2hhdCBmdW5jdGlvbmFsaXR5IHRvby4nLFxyXG4gICAgICAgIGltZ1NyYzogJy91bm8tb25saW5lLnBuZycsXHJcbiAgICAgICAgcmVwb1VSTDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taXphbnhhbGkvdW5vLW9ubGluZScsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vdW5vLW9ubGluZS1tdWx0aXBsYXllci5oZXJva3VhcHAuY29tLycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ1NvY2tldC5JTycsICdFeHByZXNzJywgJ05vZGUuanMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnUGVyc29uYWwgUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdEcmFrZSBMeXJpY3MnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2ViIGFwcCB0byByYW5kb21seSBnZW5lcmF0ZSBseXJpY3MgZnJvbSBvdmVyIDE3MCBkaWZmZXJlbnQgc29uZ3MgYnkgRHJha2UgdG8gdXNlIGFzIHlvdXIgc29jaWFsIG1lZGlhIGNhcHRpb25zL2Jpb3MuIEZldGNoZXMgbHlyaWNzIGZyb20gR2VuaXVzLicsXHJcbiAgICAgICAgaW1nU3JjOiAnL2RyYWtlLWx5cmljcy5wbmcnLFxyXG4gICAgICAgIHJlcG9VUkw6ICdodHRwczovL2dpdGh1Yi5jb20vbWl6YW54YWxpL2RyYWtlLWx5cmljcycsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vZHJha2UtbHlyaWNzLmhlcm9rdWFwcC5jb20vJyxcclxuICAgICAgICB0ZWNoU3RhY2s6IFsnUmVhY3QnLCAnRXhwcmVzcycsICdOb2RlLmpzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1BlcnNvbmFsIFByb2plY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnR09UUEVESUEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT25saW5lIGVuY3ljbG9wZWRpYSBvZiB0aGUgd29ybGQgb2YgR2FtZSBvZiBUaHJvbmVzLiBJbmNsdWRlcyBwbG90IGZvciBldmVyeSBlcGlzb2RlIGFuZCBpbmZvcm1hdGlvbiBhYm91dCBjaGFyYWN0ZXJzIGFuZCBob3VzZXMuIFVzZXMgRmlyZWJhc2UgZGF0YWJhc2UuJyxcclxuICAgICAgICBpbWdTcmM6ICcvZ290cGVkaWEucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS9nb3RwZWRpYScsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vbWl6YW54YWxpLmdpdGh1Yi5pby9nb3RwZWRpYS8nLFxyXG4gICAgICAgIHRlY2hTdGFjazogWydSZWFjdCcsICdSZWFjdC1Cb290c3RyYXAnLCAnRmlyZWJhc2UnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnUGVyc29uYWwgUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdDcmlja2V0IFNjb3JlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdGcm9udC1lbmQgd2ViIGFwcCB0byBrZWVwIHNjb3JlIG9mIGNyaWNrZXQgbWF0Y2hlcy4gSW5jbHVkZXMgcmVhbCB0aW1lIGJhdHRpbmcgYW5kIGJvd2xpbmcgc2NvcmVjYXJkIGZvciBlYWNoIHRlYW0uJyxcclxuICAgICAgICBpbWdTcmM6ICcvY3JpY2tldC1zY29yZXIucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS9jcmlja2V0LXNjb3Jlci1qcycsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vbWl6YW54YWxpLmdpdGh1Yi5pby9jcmlja2V0LXNjb3Jlci1qcycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ01hdGVyaWFsLVVJJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1BlcnNvbmFsIFByb2plY3QnLFxyXG4gICAgICAgIHRpdGxlOiBcIm1pemFueGFsaSdzIEdhbWUgWm9uZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjb2xsZWN0aW9uIG9mIHNvbWUgYnJvd3NlciBnYW1lcyBtYWRlIHB1cmVseSB3aXRoIFZhbmlsbGEgSmF2YVNjcmlwdC4gSW5jbHVkZXMgMjA0OCwgU25ha2UsIFBhYy1NYW4sIFdoYWNrLUEtTW9sZSwgQ2FuZHkgQ3J1c2ggU2FnYSwgYW5kIG1vcmUuJyxcclxuICAgICAgICBpbWdTcmM6ICcvZ2FtZXpvbmUucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS92YW5pbGxhLWpzLWdhbWVzJyxcclxuICAgICAgICBsaXZlVVJMOiAnaHR0cHM6Ly9taXphbnhhbGkuZ2l0aHViLmlvL3ZhbmlsbGEtanMtZ2FtZXMvJyxcclxuICAgICAgICB0ZWNoU3RhY2s6IFsnSFRNTCcsICdKYXZhc2NyaXB0J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1RlYW0gUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdPbmUgU3RlcCAtIGVsZWNUUk9OJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ09uZVN0ZXBNTCBpcyBhIGNvbW11bml0eS1sZWQsIG9wZW4tc291cmNlZCwgZS1sZWFybmluZyBwbGF0Zm9ybSBmb3IgTWFjaGluZSBMZWFybmluZyBhbmQgRGF0YSBTY2llbmNlLicsXHJcbiAgICAgICAgaW1nU3JjOiAnL29uZXN0ZXAtZWxlY3Ryb24ucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL09uZVN0ZXAtZWxlY1RST04vb25lc3RlcC1lbGVjdHJvbi5naXRodWIuaW8nLFxyXG4gICAgICAgIGxpdmVVUkw6ICdodHRwczovL29uZXN0ZXAtZWxlY3Ryb24uZ2l0aHViLmlvLycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ05leHQuanMnLCAnRG9jdXNhdXJ1cycsICdUeXBlc2NyaXB0J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ1BlcnNvbmFsIFByb2plY3QnLFxyXG4gICAgICAgIHRpdGxlOiAnR0sgUXVpeiBBcHAnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgU2ltcGxlIEdLIFF1aXogV2ViIEFwcCBvZiAxMCByYW5kb20gZ2VuZXJhbCBrbm93bGVkZ2UgcXVlc3Rpb25zLCBkeW5hbWljYWxseSBmZXRjaGVkIGZyb20gT3BlbiBUcml2aWEgREIuIE1hZGUgd2l0aCBSZWFjdCBKUywgdXNpbmcgVHlwZXNjcmlwdC5cIixcclxuICAgICAgICBpbWdTcmM6ICcvZ2stcXVpei1hcHAucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS9HSy1xdWl6LWFwcCcsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vbWl6YW54YWxpLmdpdGh1Yi5pby9HSy1xdWl6LWFwcCcsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ1R5cGVzY3JpcHQnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnUGVyc29uYWwgUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdDaGF0IFdlYiBBcHAnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlYWwtdGltZSBjaGF0IHdlYiBhcHAgYnVpbHQgd2l0aCBSZWFjdCwgRXhwcmVzcyBhbmQgU29ja2V0LklPLiBNdWx0aXBsZSB1c2VycyBjYW4gam9pbiBkaWZmZXJlbnQgcm9vbXMgdXNpbmcgdGhlIHJvb20gbmFtZSBhbmQgY2hhdCB3aXRoIGVhY2ggb3RoZXIuXCIsXHJcbiAgICAgICAgaW1nU3JjOiAnL2NoYXQtYXBwLnBuZycsXHJcbiAgICAgICAgcmVwb1VSTDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taXphbnhhbGkvY2hhdC1hcHAtcmVhY3QnLFxyXG4gICAgICAgIGxpdmVVUkw6ICdodHRwczovL2NoYXQtYXBwLXJlYWN0LTUyNzAuaGVyb2t1YXBwLmNvbS8nLFxyXG4gICAgICAgIHRlY2hTdGFjazogWydSZWFjdCcsICdTb2NrZXQuSU8nLCAnRXhwcmVzcycsICdOb2RlLmpzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ0NvdXJzZSBQcm9qZWN0JyxcclxuICAgICAgICB0aXRsZTogJ0RldiBDb25uZWN0JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Z1bGwgc3RhY2sgc29jaWFsIG5ldHdvcmsgYXBwbGljYXRpb24gZm9yIGRldmVsb3BlcnMuIEluY2x1ZGVzIGZlYXR1cmVzIGxpa2UgdXNlciBwcm9maWxlLCBmZWVkLCBwb3N0cywgY29tbWVudHMuJyxcclxuICAgICAgICBpbWdTcmM6ICcvZGV2LWNvbm5lY3QucG5nJyxcclxuICAgICAgICByZXBvVVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL21pemFueGFsaS9kZXYtY29ubmVjdCcsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vZGV2LWNvbm5lY3QtNTI3MC5oZXJva3VhcHAuY29tLycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ0V4cHJlc3MnLCAnTW9uZ29EQicsICdOb2RlLmpzJywgJ0pXVCddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdDb3Vyc2UgUHJvamVjdCcsXHJcbiAgICAgICAgdGl0bGU6ICdOZXRmbGl4IENsb25lJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcm9udC1lbmQgTmV0ZmxpeCBjbG9uZSB3aXRoIEZpcmViYXNlIGF1dGhlbnRpY2F0aW9uIGFuZCBGaXJlc3RvcmUgZGF0YWJhc2UgYnVpbHQgYXMgYSBwYXJ0IG9mIFNvbm55IFNhbmdoYSdzIDUgRGF5IFJlYWN0IENoYWxsZW5nZSBvbiBZb3VUdWJlLlwiLFxyXG4gICAgICAgIGltZ1NyYzogJy9uZXRmbGl4LWNsb25lLnBuZycsXHJcbiAgICAgICAgcmVwb1VSTDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taXphbnhhbGkvbmV0ZmxpeC1jbG9uZScsXHJcbiAgICAgICAgbGl2ZVVSTDogJ2h0dHBzOi8vbWl6YW54YWxpLmdpdGh1Yi5pby9uZXRmbGl4LWNsb25lLycsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbJ1JlYWN0JywgJ0ZpcmViYXNlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ0NvdXJzZSBQcm9qZWN0JyxcclxuICAgICAgICB0aXRsZTogJ0ZsYW1pbiBCdXJnZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgd2Vic2l0ZSB0byBidWlsZCBhbmQgb3JkZXIgYSBjdXN0b20gYnVyZ2VyLiBVc2VzIEZpcmViYXNlIGF1dGhlbnRpY2F0aW9uIGFuZCBkYXRhYmFzZSBmb3IgZWFjaCB1c2VyJ3Mgb3JkZXIgaGlzdG9yeS5cIixcclxuICAgICAgICBpbWdTcmM6ICcvZmxhbWluLWJ1cmdlci5wbmcnLFxyXG4gICAgICAgIHJlcG9VUkw6ICdodHRwczovL2dpdGh1Yi5jb20vbWl6YW54YWxpL2ZsYW1pbi1idXJnZXInLFxyXG4gICAgICAgIGxpdmVVUkw6ICdodHRwczovL21pemFueGFsaS5naXRodWIuaW8vZmxhbWluLWJ1cmdlci8nLFxyXG4gICAgICAgIHRlY2hTdGFjazogWydSZWFjdCcsICdSZWR1eCcsICdGaXJlYmFzZSddXHJcbiAgICB9XHJcbl0iXSwic291cmNlUm9vdCI6IiJ9