(function(e){function n(n){for(var r,o,u=n[0],c=n[1],i=n[2],s=0,p=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(p.length)p.shift()();return l.push.apply(l,i||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==a[c]&&(r=!1)}r&&(l.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={app:0},l=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/vue-use-parallax/vue2-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var f=c;l.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"38c8":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=t("a6f4"),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("pageHeader"),t("div",{ref:"wrapperRef",attrs:{id:"wrapper"}},[t("div",{ref:"bgRef",staticClass:"bg"}),t("div",{ref:"titleRef",staticClass:"text-a"},[e._v("Unapologetically Replaceable")]),t("div",{ref:"heroRef",staticClass:"text-b"},[e._v("Unapologetically Replaceable")]),t("div",{ref:"buttonRef",staticClass:"text-c"},[e._v("button")])]),e._m(0)],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"source"},[t("pre",[e._v("      "),t("code",[e._v("\n/*\n* How to use it?\n*\n*/\n\nimport { onMounted, onUnmounted, ref } from '@vue/composition-api'\nimport useParallax from 'vue-use-parallax2'\n\nexport default {\n  name: 'App',\n  \n  setup () {\n    const wrapperRef = ref(null)\n    const bgRef = ref(null)\n    const titleRef = ref(null)\n    const heroRef = ref(null)\n    const buttonRef = ref(null)\n\n    onMounted(() => {\n      console.log(wrapperRef);\n      \n      const { setParallax } = useParallax(wrapperRef.value, [bgRef.value, [titleRef.value, 20]])\n\n      setParallax([\n        [heroRef.value, 50],\n        [buttonRef.value, -20]\n      ])\n\n      onUnmounted(() => {\n        resetParallax()\n      })\n    })\n\n    return {\n      wrapperRef,\n      bgRef,\n      titleRef,\n      heroRef,\n      buttonRef\n    }\n  }\n}\n      ")]),e._v("\n    ")])])}],u=t("9edc"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",{staticClass:"page-header"},[t("h1",[e._v("vue-use-parallax-v2")]),t("p",[t("a",{attrs:{href:"//github.com/tomieric/vue-use-parallax"}},[t("svg",{staticClass:"octicon octicon-mark-github v-align-middle",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])])])])},i=[],f={name:"HelloWorld",props:{msg:String},data:function(){return{count:0}}},s=f,p=(t("8baf"),t("2877")),d=Object(p["a"])(s,c,i,!1,null,null,null),v=d.exports,b={name:"App",components:{pageHeader:v},setup:function(){var e=Object(a["d"])(null),n=Object(a["d"])(null),t=Object(a["d"])(null),r=Object(a["d"])(null),l=Object(a["d"])(null);return Object(a["b"])((function(){var o=Object(u["a"])(e.value,[n.value,[t.value,20]]),c=o.setParallax,i=o.resetParallax;c([[r.value,50],[l.value,-20]]),Object(a["c"])((function(){i()}))})),{wrapperRef:e,bgRef:n,titleRef:t,heroRef:r,buttonRef:l}}},h=b,g=Object(p["a"])(h,l,o,!1,null,null,null),m=g.exports;t("38c8");r["a"].config.productionTip=!1,r["a"].use(a["a"]),new r["a"]({render:function(e){return e(m)}}).$mount("#app")},6860:function(e,n,t){},"8baf":function(e,n,t){"use strict";var r=t("6860"),a=t.n(r);a.a}});
//# sourceMappingURL=app.6aa8e449.js.map