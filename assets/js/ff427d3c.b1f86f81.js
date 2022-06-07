"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7157],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66003:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={sidebar_position:2},c="Get Keys \u83b7\u53d6\u952e",l={unversionedId:"Data/Get Keys",id:"Data/Get Keys",title:"Get Keys \u83b7\u53d6\u952e",description:"Returns all of the keys within a JSON object.",source:"@site/docs/Data/Get Keys.md",sourceDirName:"Data",slug:"/Data/Get Keys",permalink:"/OrigamiStudio/docs/Data/Get Keys",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Data/Get Keys.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Array Sort \u6570\u7ec4\u6392\u5e8f",permalink:"/OrigamiStudio/docs/Data/Array Sort"},next:{title:"Index Of \u7d22\u5f15",permalink:"/OrigamiStudio/docs/Data/Index Of"}},s={},p=[{value:"Object \u5bf9\u8c61",id:"object-\u5bf9\u8c61",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],f={toc:p};function d(e){var t=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-keys-\u83b7\u53d6\u952e"},"Get Keys \u83b7\u53d6\u952e"),(0,o.kt)("p",null,"Returns all of the keys within a JSON object."),(0,o.kt)("p",null,"\u8fd4\u56deJSON\u5bf9\u8c61\u4e2d\u7684\u6240\u6709\u952e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(88574).Z,width:"1506",height:"200"})),(0,o.kt)("h3",{id:"object-\u5bf9\u8c61"},"Object \u5bf9\u8c61"),(0,o.kt)("p",null,"A JSON object."),(0,o.kt)("p",null,"\u4e00\u4e2aJSON\u5bf9\u8c61"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"An array of keys."),(0,o.kt)("p",null,"\u5305\u542b\u952e\u7684\u6570\u7ec4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./Array%20Reverse"},"Array Reverse \u6570\u7ec4\u53cd\u8f6c")))}d.isMDXComponent=!0},88574:function(e,t,r){t.Z=r.p+"assets/images/get-keys-e41cd68891cfa38cb31f07e8a6f72350.png"}}]);