(function(e){function t(t){for(var o,s,r=t[0],c=t[1],l=t[2],u=0,f=[];u<r.length;u++)s=r[u],i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},s={app:0},i={app:0},a=[];function r(e){return c.p+"js/"+({explosion:"explosion",fan:"fan",fanEx:"fanEx",repulsion:"repulsion",vglex:"vglex"}[e]||e)+"."+{explosion:"d3e0453e",fan:"e52de2c0",fanEx:"c3ee2d6e",repulsion:"6fc1de96",vglex:"359359f6"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={explosion:1,fan:1,fanEx:1,repulsion:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var o="css/"+({explosion:"explosion",fan:"fan",fanEx:"fanEx",repulsion:"repulsion",vglex:"vglex"}[e]||e)+"."+{explosion:"9800ffb4",fan:"c5e2f69a",fanEx:"c67563b4",repulsion:"bca57bc3",vglex:"31d6cfe0"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var l=a[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return t()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){l=f[r],u=l.getAttribute("data-href");if(u===o||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete s[e],d.parentNode.removeChild(d),n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){s[e]=0}));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(function(t,n){o=i[e]=[t,n]});t.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e),l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+s+")");a.type=o,a.request=s,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"21bb":function(e,t,n){"use strict";var o=n("bcc9"),s=n.n(o);s.a},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),s=n.n(o);s.a},"5e27":function(e,t,n){},bcc9:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("7f7f"),n("456d"),n("ac6a"),n("f3e2"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=n("f4b7"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=o["a"].extend({name:"home"}),c=r,l=(n("5c0b"),n("2877")),u=Object(l["a"])(c,i,a,!1,null,null,null),f=u.exports,d=n("c79e"),h=n.n(d),m=n("ecee"),p=n("c074"),v=n("f2d1"),g=n("ad3d"),_=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"nav"},e._l(e.dots,function(t,o){return n("div",{key:o,class:["huey-colors nav__dot "+t.class],on:{click:e.toggleClass}},[e._l(t.subdots,function(t,s){return n("div",{key:s,staticClass:"nav__subdot",on:{click:t.action}},[2==o?n("font-awesome-icon",{attrs:{icon:["fab",t.icon],size:"lg"}}):n("p",[e._v(e._s(t.title))])],1)}),n("p",{staticClass:"nav__dot-title"},[e._v(" "+e._s(t.content)+" ")]),n("font-awesome-icon",{staticClass:"nav__dot-title-svg",attrs:{icon:["fa",t.icon],size:"lg"}})],2)}),0),e._m(0),e._m(1),n("section",{staticClass:"home__section3"},[n("h1",{staticClass:"home__s3-title"},[e._v("explore")]),n("div",{staticClass:"home__s3-gallery gallery-appear"},[n("div",{staticClass:"home__s3-card"},[n("h2",[e._v("Simple UI")]),n("p",[e._v("\n                        A mere hint of complexity could lie at the heart of a website. Vuejs simplifies writing powerful code for complex structures. \n                        Check out some examples: "),n("router-link",{attrs:{to:"/tutorials/fan"}},[e._v(" swatch book")]),e._v(".or "),n("router-link",{attrs:{to:"/tutorials/explosion"}},[e._v("image exploding effect")]),e._v(".\n                    ")],1)]),n("div",{staticClass:"home__s3-card"},[n("h2",[e._v("3D with VGL")]),n("p",[e._v("\n                        3d effects engage the user and enhances the messge of a website. \n                        "),n("a",{attrs:{href:"https://threejs.org/"}},[e._v("Three.js")]),e._v(" is a js popular library which uses WebGL and it's been integrated\n                         in a vue based library - "),n("a",{attrs:{href:"https://vue-gl.github.io/"}},[e._v("Vue-Gl")]),e._v(".\n                        To discover it better,"),n("router-link",{attrs:{to:"/tutorials/repulsion"}},[e._v("check out a repulsion 3D effect ")]),e._v(".\n                    ")],1)])])]),n("section",{staticClass:"home__section4"},[n("h1",[e._v("contact")]),n("div",{staticClass:"home__s4-contact-box"},[n("div",{staticClass:"home__s4-contact-section"},[n("font-awesome-icon",{attrs:{icon:["fa","envelope"],size:"lg"}}),n("p",[e._v("ioanamdinca@gmail.com")])],1),n("div",{staticClass:"home__s4-contact-section"},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}}),n("a",{attrs:{href:"https://github.com/ioanadi"}},[e._v("https://github.com/ioanadi")])],1),n("div",{staticClass:"home__s4-contact-section"},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"lg"}}),n("a",{attrs:{href:"https://www.linkedin.com/in/maria-ioana-dinca-7a7352148"}},[e._v("www.linkedin.com/in/maria-ioana-dinca-7a7352148")])],1),n("div",{staticClass:"home__s4-contact-section"},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"lg"}}),n("a",{attrs:{href:"https://www.facebook.com/ioana.dinca.7"}},[e._v("https://www.facebook.com/ioana.dinca.7")])],1),n("div",{staticClass:"home__s4-contact-section-img"})])]),n("span",{staticClass:"credits"},[e._v("Photo by Markus Spiske on Unsplash")])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home__section1"},[n("div",{staticClass:"home__s1-title custom-text-style"},[n("h1",[e._v("Ioana Dinca ")]),n("h1",[e._v(" web dev  ")]),n("h3",[n("span",[e._v("▼")]),e._v("  Welcome to my frontend world "),n("span",[e._v("▼")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home__section2"},[n("h1",{staticClass:"home__s2-title custom-text-style"},[e._v(" lighter UI with VueJs ")]),n("div",{staticClass:"home__s2-infobox"},[n("p",[e._v("\n                Fast, easy, clear code = More time for strategy and planning. \n                Vuejs is a lightweight framework that offers just that.\n                "),n("br"),e._v("The virtualized DOM, reactivity, component life cycle and easy templating \n                paves the way to creativity and problem solving thinking. Moreover - the variety of libraries and components on the web makes for a fun dev experience. \n                "),n("br"),e._v("\n                Meet some interesting UI examples rewritten with Vue js - even 3D through VGL - and explore fun and impactful libraries such as ScrollMagic.\n            ")])])])}],x=function(){document.getElementsByClassName("home__section2")[0].scrollIntoView()},y=function(){document.getElementsByClassName("home__section3")[0].scrollIntoView()},k=function(){document.getElementsByClassName("home__section4")[0].scrollIntoView()};function C(e){var t=window.open(e,"_blank");t&&t.focus()}var E=[{content:"Contents",class:"first",icon:"bars",subdots:[{icon:"circle",title:"Intro",action:x},{icon:"shapes",title:"Explore",action:y},{icon:"play",title:"Contact",action:k}]},{content:"Tutorials",class:"second",icon:"book-open",subdots:[{icon:"circle",title:"Fan",action:function(){L.push("/tutorials/fan")}},{icon:"shapes",title:"Repulsion",action:function(){L.push("/tutorials/repulsion")}},{icon:"cube",title:"Explosion",action:function(){L.push("/tutorials/explosion")}}]},{content:"Connect",class:"thid",icon:"envelope",subdots:[{icon:"github",title:"Github",action:function(){C("https://github.com/ioanadi")}},{icon:"linkedin",title:"Linkedin",action:function(){C("https://github.com/ioanadi")}},{icon:"facebook",title:"Facebook",action:function(){C("https://github.com/ioanadi")}}]}],j=o["a"].extend({name:"home",data:function(){return{dots:E,scenes:[]}},mounted:function(){this.scenes[0]=this.$scrollmagic.scene({triggerElement:"section.home__section2",triggerHook:"onLeave",duration:"150%"}).setPin("section.home__section2").setTween(".home__s2-infobox p",{css:{transform:"translateX(-1rem) translateY(-3rem)"}}),this.$scrollmagic.addScene(this.scenes[0]),this.scenes[1]=this.$scrollmagic.scene({triggerElement:"section.home__section2",triggerHook:"onLeave",duration:"100%"}).setTween(".home__s2-infobox",{css:{transform:"translateX(1rem) translateY(2rem)"}}),this.$scrollmagic.addScene(this.scenes[1]),this.scenes[2]=this.$scrollmagic.scene({triggerElement:"section.home__section2",triggerHook:"onCenter"}).setClassToggle(".home__s2-title","animate-text"),this.$scrollmagic.addScene(this.scenes[2]),this.scenes[3]=this.$scrollmagic.scene({triggerElement:"section.home__section3",triggerHook:"onLeave",duration:"100%"}).setPin("section.home__section3").setTween(".home__s3-title",{css:{transform:"translateX(-1rem) translateY(-3rem)","letter-spacing":"2rem",opacity:.2}}),this.$scrollmagic.addScene(this.scenes[3]),this.onResize(null),window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(e){var t=e?e.srcElement.innerWidth:window.innerWidth;t<600?(this.scenes[0].enabled(!1),this.scenes[1].enabled(!1),this.scenes[2].enabled(!1),this.scenes[3].enabled(!1)):(this.scenes[0].enabled(!0),this.scenes[1].enabled(!0),this.scenes[2].enabled(!0),this.scenes[3].enabled(!0))},toggleClass:function(e){e.currentTarget.classList.toggle("nav__dot--clicked")}}}),S=j,T=(n("21bb"),Object(l["a"])(S,b,w,!1,null,null,null)),O=T.exports;o["a"].use(_["a"]);var L=new _["a"]({mode:"history",routes:[{path:"/",name:"home",component:O},{path:"/tutorials/",component:function(){return n.e("vglex").then(n.bind(null,"c302"))},children:[{path:"/tutorials/repulsion",name:"repulsion",component:function(){return n.e("repulsion").then(n.bind(null,"c061"))}},{path:"/tutorials/fan",name:"fan",component:function(){return n.e("fan").then(n.bind(null,"28df"))}},{path:"/tutorials/fan-extended",name:"fan-extended",component:function(){return n.e("fanEx").then(n.bind(null,"0533"))}},{path:"/tutorials/explosion",name:"explosion",component:function(){return n.e("explosion").then(n.bind(null,"0fb8"))}}]}]}),z=n("2f62");o["a"].use(z["a"]);var $=new z["a"].Store({state:{},mutations:{},actions:{}}),P=n("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),m["c"].add(p["b"],v["c"],v["a"],v["b"],p["c"],p["g"],p["i"],p["a"],p["h"],p["d"],p["e"],p["f"]),o["a"].use(h.a),o["a"].component("font-awesome-icon",g["a"]),o["a"].config.productionTip=!1,Object.keys(s).forEach(function(e){o["a"].component(e,s[e])}),new o["a"]({router:L,store:$,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.3fe247c7.js.map