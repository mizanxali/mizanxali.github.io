_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),s=r("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,l=d.length;s<l;s++){var u=d[s];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var p=a.props[u],m=n[u]||new Set;"name"===u&&i||!m.has(p)?(m.add(p),n[u]=m):o=!1}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function f(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)}f.rewind=function(){};var h=f;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),a=r.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.a.createContext&&a.a.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return a.a.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return a.a.createElement(p,c({attr:c({},e.attr)},t),l(e.child))}}function p(e){var t=function(t){var r,n=e.attr,o=e.size,i=e.title,l=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&a.a.createElement("title",null,i),e.children)};return void 0!==i?a.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r("nKUr"),a=r("g4pe"),o=r.n(a),i=(r("q1tI"),r("ma3e")),c=function(e){return Object(n.jsxs)("div",{style:{backgroundColor:"#c7b69d"},className:"max-w-96 rounded-lg text-black text-center flex flex-col justify-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:"rounded-t-lg w-full",src:e.imgSrc})}),Object(n.jsx)("div",{className:"my-2 text-2xl font-medium",children:e.title}),Object(n.jsx)("div",{className:"my-2 h-52 sm:h-40 text-lg px-3",children:e.description}),Object(n.jsx)("div",{className:"my-4 mx-4 flex flex-row flex-wrap justify-center",children:e.techStack.map((function(e,t){return Object(n.jsx)("span",{className:"m-1 border-black border-2 hover:bg-black text-black hover:text-white py-1 px-2 rounded-xl text-center cursor-default",children:e},t)}))})]}),Object(n.jsxs)("div",{className:"mb-2",children:[e.liveURL&&Object(n.jsx)("a",{href:e.liveURL,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsxs)("div",{className:"inline-block text-sm mr-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded",children:[Object(n.jsx)(i.e,{className:"inline"})," APP"]})}),Object(n.jsx)("a",{href:e.repoURL,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsxs)("div",{className:"inline-block text-sm ml-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded",children:[Object(n.jsx)(i.b,{className:"inline"})," REPO"]})}),e.submissionURL&&Object(n.jsx)("a",{href:e.submissionURL,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsxs)("div",{className:"inline-block text-sm ml-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded",children:[Object(n.jsx)(i.a,{className:"inline"})," SUBMISSION"]})})]})]})},s=["Flutter","React","React Native","GraphQL","Apollo Client","Redux","Next.js","Node.js","Express","Apollo Server","MongoDB","Firebase","Socket.IO","SSR/SSG","Polygon","IPFS","Docusaurus","Tailwind CSS"],l=[{type:"Team Project",title:"Pit Stop",description:"Pit Stop is a a web3 Formula1 fantasy game platform where players can build their virtual garages by minting F1 cars as NFTs and compete with others by wagering these NFT cars on real life F1 Grand Prix.",imgSrc:"/pit-stop.png",repoURL:"https://github.com/mizanxali/pit-stop",liveURL:"https://pit-stop.vercel.app//",submissionURL:"https://devfolio.co/projects/pit-stop-a06f",techStack:["Polygon","Solidity","Hardhat","IPFS","MetaMask","Alchemy","Next.js","Tailwind CSS"]},{type:"Personal Project",title:"Valcon",description:"Valcon is a mobile app to find Valorant players to match and play with, by swiping right or left on their gameplay clips. In-game IDs are hidden from players until they match!",imgSrc:"/valcon.png",repoURL:"https://github.com/mizanxali/valcon",techStack:["React Native","Apollo GraphQL Client","Apollo GraphQL Server","TypeGraphQL","Typegoose","MongoDB"]},{type:"Team Project",title:"Recon",description:"Recon is a marketplace for gamers to buy and sell gameplay clips as NFTs. Treating gameplay like the art it is.",imgSrc:"/recon.png",repoURL:"https://github.com/mizanxali/recon",liveURL:"https://recon-pink.vercel.app/",submissionURL:"https://devfolio.co/submissions/recon-dcd6",techStack:["Polygon","Solidity","Hardhat","IPFS","MetaMask","Alchemy","Next.js","Tailwind CSS"]},{type:"Personal Project",title:"UNO Online",description:"Two player online version of the card game UNO. Real time multiplayer communication supported using web sockets. Includes text chat functionality too.",imgSrc:"/uno-online.png",repoURL:"https://github.com/mizanxali/uno-online",liveURL:"https://uno-online-multiplayer.herokuapp.com/",techStack:["React","Socket.IO","Express","Node.js"]},{type:"Personal Project",title:"Drake Lyrics",description:"Web app to randomly generate lyrics from over 170 different songs by Drake to use as your social media captions/bios. Fetches lyrics from Genius.",imgSrc:"/drake-lyrics.png",repoURL:"https://github.com/mizanxali/drake-lyrics",liveURL:"https://drake-lyrics.herokuapp.com/",techStack:["React","Express","Node.js"]},{type:"Personal Project",title:"Comsic Cars",description:"An online 3D car showroom. Built with React and Three.js using React Three Fibre.",imgSrc:"/cosmic-cars.png",repoURL:"https://github.com/mizanxali/cosmic-cars",liveURL:"https://mizanxali.github.io/cosmic-cars/",techStack:["React","Three.js","React Three Fibre"]},{type:"Personal Project",title:"GOTPEDIA",description:"Online encyclopedia of the world of Game of Thrones. Includes plot for every episode and information about characters and houses. Uses Firebase database.",imgSrc:"/gotpedia.png",repoURL:"https://github.com/mizanxali/gotpedia",liveURL:"https://mizanxali.github.io/gotpedia/",techStack:["React","React-Bootstrap","Firebase"]},{type:"Personal Project",title:"Cricket Scorer",description:"Front-end web app to keep score of cricket matches. Includes real time batting and bowling scorecard for each team.",imgSrc:"/cricket-scorer.png",repoURL:"https://github.com/mizanxali/cricket-scorer-js",liveURL:"https://mizanxali.github.io/cricket-scorer-js",techStack:["React","Redux","Material-UI"]},{type:"Personal Project",title:"mizanxali's Game Zone",description:"A collection of some browser games made purely with Vanilla JavaScript. Includes 2048, Snake, Pac-Man, Whack-A-Mole, Candy Crush Saga, and more.",imgSrc:"/gamezone.png",repoURL:"https://github.com/mizanxali/vanilla-js-games",liveURL:"https://mizanxali.github.io/vanilla-js-games/",techStack:["HTML","Javascript"]},{type:"Team Project",title:"Raven",description:"Raven is an Android app that allows you to do more with less. Chat with friends, lend and borrow money from those you trust, find places to visit and share cab rides with friends, all in one app.",imgSrc:"/raven.png",repoURL:"https://github.com/elecTRON-Fellowship/raven-frontend",liveURL:"https://drive.google.com/file/d/1EGUI2HfoNEjTll-CEhQP3XuA7qckfkT_/view",submissionURL:"https://devpost.com/software/fwallet",techStack:["Flutter","Firebase"]},{type:"Team Project",title:"One Step - elecTRON",description:"OneStepML is a community-led, open-sourced, e-learning platform for Machine Learning and Data Science.",imgSrc:"/onestep-electron.png",repoURL:"https://github.com/OneStep-elecTRON/onestep-electron.github.io",liveURL:"https://onestep-electron.github.io/",techStack:["React","Next.js","Docusaurus","Typescript"]},{type:"Personal Project",title:"GK Quiz App",description:"A Simple GK Quiz Web App of 10 random general knowledge questions, dynamically fetched from Open Trivia DB. Made with React JS, using Typescript.",imgSrc:"/gk-quiz-app.png",repoURL:"https://github.com/mizanxali/GK-quiz-app",liveURL:"https://mizanxali.github.io/GK-quiz-app",techStack:["React","Typescript"]},{type:"Course Project",title:"Dev Connect",description:"Full stack social network application for developers. Includes features like user profile, feed, posts, comments.",imgSrc:"/dev-connect.png",repoURL:"https://github.com/mizanxali/dev-connect",liveURL:"https://dev-connect-5270.herokuapp.com/",techStack:["React","Express","MongoDB","Node.js","JWT"]},{type:"Course Project",title:"Netflix Clone",description:"Front-end Netflix clone with Firebase authentication and Firestore database built as a part of Sonny Sangha's 5 Day React Challenge on YouTube.",imgSrc:"/netflix-clone.png",repoURL:"https://github.com/mizanxali/netflix-clone",liveURL:"https://mizanxali.github.io/netflix-clone/",techStack:["React","Firebase"]},{type:"Course Project",title:"Flamin Burger",description:"A website to build and order a custom burger. Uses Firebase authentication and database for each user's order history.",imgSrc:"/flamin-burger.png",repoURL:"https://github.com/mizanxali/flamin-burger",liveURL:"https://mizanxali.github.io/flamin-burger/",techStack:["React","Redux","Firebase"]}],u=r("YFqc"),p=r.n(u);function d(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(o.a,{children:[Object(n.jsx)("title",{children:"mizanxali | Portfolio"}),Object(n.jsx)("meta",{name:"description",content:"Portfolio website built using Next.js and Tailwind CSS."}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(n.jsxs)("div",{className:"flex flex-col md:flex-row justify-around items-center w-full md:w-3/4 mt-5 mb-10 mx-auto py-5 px-3 rounded-lg",children:[Object(n.jsx)("div",{className:"w-3/4 md:w-1/4 px-5 md:order-last",children:Object(n.jsx)("img",{src:"/mizan1.jpg",className:"rounded-full mx-auto"})}),Object(n.jsxs)("div",{className:"md:w-3/4 mt-5 md:mt-0 flex-auto text-center md:text-left px-5",children:[Object(n.jsx)("div",{className:"my-2 text-4xl text-purple-700",children:"Hey there!"}),Object(n.jsxs)("div",{className:"my-2 text-4xl text-purple-700 font-semibold",children:[" ","I'm Mizan Ali, aka"," ",Object(n.jsx)("span",{className:"italic font-normal",children:"mizanxali"}),"."]}),Object(n.jsxs)("div",{className:"text-xl my-4 text-purple-300",children:["I'm a third year student at VIT Bhopal University studying CS Engineering with specialization in Gaming Technology.",Object(n.jsx)("br",{}),"I build full stack web apps using the MERN stack and mobile apps using React Native and Flutter.",Object(n.jsx)("br",{}),"I love React, Cricket, Rap Music, and Game of Thrones.",Object(n.jsx)("br",{}),"I'm also a skilled video editor."]}),Object(n.jsx)("div",{children:Object(n.jsx)(p.a,{href:"/resume",children:Object(n.jsx)("div",{className:"inline-block text-base my-2 border-purple-700 border-2 hover:bg-purple-700 text-purple-700 hover:text-white cursor-pointer py-2 px-6 rounded",children:"Resume"})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"https://github.com/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.b,{className:"my-3 mr-3 text-3xl text-purple-700 inline"})}),Object(n.jsx)("a",{href:"https://linkedin.com/in/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.d,{className:"my-3 mx-3 text-3xl text-purple-700 inline"})}),Object(n.jsx)("a",{href:"https://twitter.com/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.f,{className:"my-3 mx-3 text-3xl text-purple-700 inline"})}),Object(n.jsx)("a",{href:"https://instagram.com/mizanxali",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.c,{className:"my-3 mx-3 text-3xl text-purple-700 inline"})}),Object(n.jsx)("a",{href:"https://www.youtube.com/channel/UC2Q5f_ERpGo-wEK_9eP_ipg",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)(i.g,{className:"my-3 ml-3 text-4xl text-purple-700 inline"})})]})]})]}),Object(n.jsx)("h1",{className:"text-center text-yellow-600 text-3xl mb-2",children:"Some Tools & Technologies I've Worked With"}),Object(n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 w-3/4 mx-auto py-5 px-3 rounded-lg mb-10",children:s.map((function(e,t){return Object(n.jsx)("span",{className:"text-base cursor-pointer border-yellow-600 border-2 hover:bg-yellow-600 text-yellow-600 hover:text-white py-2 px-1 rounded-md text-center",children:e},t)}))}),Object(n.jsx)("h1",{style:{color:"#c7b69d"},className:"text-center text-3xl mb-2",children:"My Web/Mobile Apps"}),Object(n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-3/4 mx-auto py-5 px-3 rounded-lg",children:l.map((function(e,t){return e.submissionURL?Object(n.jsx)(c,{type:e.type,title:e.title,description:e.description,imgSrc:e.imgSrc,repoURL:e.repoURL,liveURL:e.liveURL,techStack:e.techStack,submissionURL:e.submissionURL},t):Object(n.jsx)(c,{type:e.type,title:e.title,description:e.description,imgSrc:e.imgSrc,repoURL:e.repoURL,liveURL:e.liveURL,techStack:e.techStack},t)}))}),Object(n.jsx)("div",{className:"text-center mb-5 text-gray-200 italic",children:"This website was made using Next.js and Tailwind CSS."})]})}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),a=r("lwsE"),o=r("W8MJ"),i=(r("PJYZ"),r("7W2i")),c=r("a1gu"),s=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),p=function(e){i(r,e);var t=l(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=p},YFqc:function(e,t,r){e.exports=r("cTJO")},a1gu:function(e,t,r){var n=r("cDf5"),a=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var o=a(r("q1tI")),i=r("elyg"),c=r("nOHt"),s=r("vNVm"),l={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",p=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=p.href,m=p.as,f=e.children,h=e.replace,b=e.shallow,x=e.scroll,g=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var v=o.Children.only(f),y=v&&"object"===typeof v&&v.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),w=n(j,2),k=w[0],O=w[1],S=o.default.useCallback((function(e){k(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,k]);(0,o.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof g?g:r&&r.locale,a=l[d+"%"+m+(n?"%"+n:"")];e&&!a&&u(r,d,m,{locale:n})}),[m,d,O,g,t,r]);var R={ref:S,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,r,d,m,h,b,x,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(r,d,m,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var N="undefined"!==typeof g?g:r&&r.locale,L=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(m,N,r&&r.locales,r&&r.domainLocales);R.href=L||(0,i.addBasePath)((0,i.addLocale)(m,N,r&&r.defaultLocale))}return o.default.cloneElement(v,R)};t.default=p},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=(0,a.useRef)(),l=(0,a.useState)(!1),u=n(l,2),p=u[0],d=u[1],m=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||p||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,p]);return(0,a.useEffect)((function(){if(!i&&!p){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[p]),[m,p]};var a=r("q1tI"),o=r("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,3,2]]]);