_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),s=r("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,l=d.length;s<l;s++){var u=d[s];if(o.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?a=!1:r.add(u);else{var p=o.props[u],m=n[u]||new Set;"name"===u&&i||!m.has(p)?(m.add(p),n[u]=m):a=!1}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function f(e){var t=e.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)}f.rewind=function(){};var h=f;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),o=r.n(n),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return o.a.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return o.a.createElement(p,c({attr:c({},e.attr)},t),l(e.child))}}function p(e){var t=function(t){var r,n=e.attr,a=e.size,i=e.title,l=s(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),e.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var n=r("nKUr"),o=r("g4pe"),a=r.n(o),i=(r("q1tI"),r("ma3e")),c=function(e){return Object(n.jsxs)("div",{className:"max-w-96 bg-gray-400 text-center hover:shadow flex flex-col justify-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:"w-full",src:e.imgSrc})}),Object(n.jsx)("div",{className:"text-gray-800 my-2 text-2xl font-medium",children:e.title}),Object(n.jsx)("div",{className:"text-gray-800 my-2 h-52 sm:h-40 text-lg px-3",children:e.description}),Object(n.jsx)("div",{className:"mx-4 flex flex-row flex-wrap justify-center",children:e.techStack.map((function(e,t){return Object(n.jsx)("span",{className:"m-1 bg-gray-300 hover:bg-gray-200 py-1 px-2 rounded-xl text-center cursor-default",children:e},t)}))})]}),Object(n.jsxs)("div",{className:"mb-2",children:[Object(n.jsx)("a",{href:e.liveURL,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsxs)("div",{className:"inline-block text-sm mr-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded",children:[Object(n.jsx)(i.e,{className:"inline"})," APP"]})}),Object(n.jsx)("a",{href:e.repoURL,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsxs)("div",{className:"inline-block text-sm ml-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded",children:[Object(n.jsx)(i.b,{className:"inline"})," REPO"]})}),e.submissionURL&&Object(n.jsx)("a",{href:e.submissionURL,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsxs)("div",{className:"inline-block text-sm ml-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded",children:[Object(n.jsx)(i.a,{className:"inline"})," SUBMISSION"]})})]})]})},s=["Flutter","React","GraphQL","Apollo Client","Redux","Next.js","Node.js","Express","Apollo Server","MongoDB","Firebase","TypeScript","Socket.IO","SSR/SSG","Docusaurus","Heroku","Git","Tailwind CSS"],l=[{type:"Team Project",title:"Recon",description:"Recon is a marketplace for gamers to buy and sell gameplay clips as NFTs. Treating gameplay like the art it is.",imgSrc:"/recon.png",repoURL:"https://github.com/mizanxali/recon",liveURL:"https://recon-pink.vercel.app/",submissionURL:"https://devfolio.co/submissions/recon-dcd6",techStack:["Polygon","Solidity","Hardhat","IPFS","MetaMask","Alchemy","Next.js","Tailwind CSS"]},{type:"Team Project",title:"Raven",description:"Raven is an Android app that allows you to do more with less. Chat with friends, lend and borrow money from those you trust, find places to visit and share cab rides with friends, all in one app.",imgSrc:"/raven.png",repoURL:"https://github.com/elecTRON-Fellowship/raven-frontend",liveURL:"https://drive.google.com/file/d/1EGUI2HfoNEjTll-CEhQP3XuA7qckfkT_/view",submissionURL:"https://devpost.com/software/fwallet",techStack:["Flutter","Firebase"]},{type:"Personal Project",title:"UNO Online",description:"Two player online version of the card game UNO. Real time multiplayer communication supported using web sockets. Includes text chat functionality too.",imgSrc:"/uno-online.png",repoURL:"https://github.com/mizanxali/uno-online",liveURL:"https://uno-online-multiplayer.herokuapp.com/",techStack:["React","Socket.IO","Express","Node.js"]},{type:"Personal Project",title:"Drake Lyrics",description:"Web app to randomly generate lyrics from over 170 different songs by Drake to use as your social media captions/bios. Fetches lyrics from Genius.",imgSrc:"/drake-lyrics.png",repoURL:"https://github.com/mizanxali/drake-lyrics",liveURL:"https://drake-lyrics.herokuapp.com/",techStack:["React","Express","Node.js"]},{type:"Personal Project",title:"GOTPEDIA",description:"Online encyclopedia of the world of Game of Thrones. Includes plot for every episode and information about characters and houses. Uses Firebase database.",imgSrc:"/gotpedia.png",repoURL:"https://github.com/mizanxali/gotpedia",liveURL:"https://mizanxali.github.io/gotpedia/",techStack:["React","React-Bootstrap","Firebase"]},{type:"Personal Project",title:"Cricket Scorer",description:"Front-end web app to keep score of cricket matches. Includes real time batting and bowling scorecard for each team.",imgSrc:"/cricket-scorer.png",repoURL:"https://github.com/mizanxali/cricket-scorer-js",liveURL:"https://mizanxali.github.io/cricket-scorer-js",techStack:["React","Redux","Material-UI"]},{type:"Personal Project",title:"mizanxali's Game Zone",description:"A collection of some browser games made purely with Vanilla JavaScript. Includes 2048, Snake, Pac-Man, Whack-A-Mole, Candy Crush Saga, and more.",imgSrc:"/gamezone.png",repoURL:"https://github.com/mizanxali/vanilla-js-games",liveURL:"https://mizanxali.github.io/vanilla-js-games/",techStack:["HTML","Javascript"]},{type:"Team Project",title:"One Step - elecTRON",description:"OneStepML is a community-led, open-sourced, e-learning platform for Machine Learning and Data Science.",imgSrc:"/onestep-electron.png",repoURL:"https://github.com/OneStep-elecTRON/onestep-electron.github.io",liveURL:"https://onestep-electron.github.io/",techStack:["React","Next.js","Docusaurus","Typescript"]},{type:"Personal Project",title:"GK Quiz App",description:"A Simple GK Quiz Web App of 10 random general knowledge questions, dynamically fetched from Open Trivia DB. Made with React JS, using Typescript.",imgSrc:"/gk-quiz-app.png",repoURL:"https://github.com/mizanxali/GK-quiz-app",liveURL:"https://mizanxali.github.io/GK-quiz-app",techStack:["React","Typescript"]},{type:"Personal Project",title:"Chat Web App",description:"Real-time chat web app built with React, Express and Socket.IO. Multiple users can join different rooms using the room name and chat with each other.",imgSrc:"/chat-app.png",repoURL:"https://github.com/mizanxali/chat-app-react",liveURL:"https://chat-app-react-5270.herokuapp.com/",techStack:["React","Socket.IO","Express","Node.js"]},{type:"Course Project",title:"Dev Connect",description:"Full stack social network application for developers. Includes features like user profile, feed, posts, comments.",imgSrc:"/dev-connect.png",repoURL:"https://github.com/mizanxali/dev-connect",liveURL:"https://dev-connect-5270.herokuapp.com/",techStack:["React","Express","MongoDB","Node.js","JWT"]},{type:"Course Project",title:"Netflix Clone",description:"Front-end Netflix clone with Firebase authentication and Firestore database built as a part of Sonny Sangha's 5 Day React Challenge on YouTube.",imgSrc:"/netflix-clone.png",repoURL:"https://github.com/mizanxali/netflix-clone",liveURL:"https://mizanxali.github.io/netflix-clone/",techStack:["React","Firebase"]}];function u(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(a.a,{children:[Object(n.jsx)("title",{children:"mizanxali | Portfolio"}),Object(n.jsx)("meta",{name:"description",content:"Portfolio website built using Next.js and Tailwind CSS."}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(n.jsxs)("div",{className:"flex flex-col md:flex-row justify-around items-center w-3/4 mt-5 mb-10 mx-auto py-5 px-3 rounded-lg",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"/mizan.jpg",className:"w-3/4 rounded-full mx-auto"})}),Object(n.jsxs)("div",{className:"mt-5 md:mt-0 flex-auto text-center px-5",children:[Object(n.jsxs)("div",{className:"text-4xl text-gray-100",children:["Hey there! I am Mizan Ali, aka ",Object(n.jsx)("em",{children:"mizanxali"}),"."]}),Object(n.jsxs)("div",{className:"text-2xl mt-2 text-gray-400",children:["I'm a third year student at VIT Bhopal University studying CS Engineering with specialization in Gaming Technology.",Object(n.jsx)("br",{}),"I build full stack web apps using the MERN stack and mobile apps using Flutter.",Object(n.jsx)("br",{}),"I love React, Flutter, Cricket, Rap Music, and Game of Thrones. I'm also a skilled Video Editor."]}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"https://drive.google.com/file/d/1ZduwTp8SBzDnM_hUklnVChQ75t8ey3w0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("div",{className:"inline-block text-base my-3 border-gray-100 border-2 hover:bg-gray-300 text-gray-100 hover:text-gray-800 cursor-pointer py-2 px-6 rounded",children:"Resume"})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"https://github.com/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.b,{className:"my-3 mx-3 text-3xl text-gray-100 inline"})}),Object(n.jsx)("a",{href:"https://linkedin.com/in/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.d,{className:"my-3 mx-3 text-3xl text-gray-100 inline"})}),Object(n.jsx)("a",{href:"https://twitter.com/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.f,{className:"my-3 mx-3 text-3xl text-gray-100 inline"})}),Object(n.jsx)("a",{href:"https://instagram.com/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.c,{className:"my-3 mx-3 text-3xl text-gray-100 inline"})})]})]})]}),Object(n.jsx)("h1",{className:"text-center text-white text-3xl mb-2",children:"Tools & Technologies I've Worked With"}),Object(n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 w-3/4 mx-auto py-5 px-3  rounded-lg mb-10",children:s.map((function(e,t){return Object(n.jsx)("span",{className:"text-base bg-gray-300 hover:bg-gray-200 py-2 px-4 rounded-md text-center cursor-default",children:e},t)}))}),Object(n.jsx)("h1",{className:"text-center text-white text-3xl mb-2",children:"My Web/Mobile Apps"}),Object(n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 mx-auto py-5 px-3 rounded-lg",children:l.map((function(e,t){return e.submissionURL?Object(n.jsx)(c,{type:e.type,title:e.title,description:e.description,imgSrc:e.imgSrc,repoURL:e.repoURL,liveURL:e.liveURL,techStack:e.techStack,submissionURL:e.submissionURL},t):Object(n.jsx)(c,{type:e.type,title:e.title,description:e.description,imgSrc:e.imgSrc,repoURL:e.repoURL,liveURL:e.liveURL,techStack:e.techStack},t)}))}),Object(n.jsx)("div",{className:"text-center mb-5 text-gray-200 italic",children:"This website was made using Next.js and Tailwind CSS."})]})}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),a=r("W8MJ"),i=(r("PJYZ"),r("7W2i")),c=r("a1gu"),s=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),p=function(e){i(r,e);var t=l(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=p},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,3]]]);