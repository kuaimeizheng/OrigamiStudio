"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[44242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Get Keys \u83b7\u53d6\u952e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Get Keys \u83b7\u53d6\u952e",c={unversionedId:"documentation/Data/Get Keys",id:"documentation/Data/Get Keys",title:"Get Keys \u83b7\u53d6\u952e",description:"Returns all of the keys within a JSON object.",source:"@site/docs/documentation/Data/Get Keys.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Get Keys",permalink:"/OrigamiStudio/docs/documentation/Data/Get Keys",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Get Keys.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Get Keys \u83b7\u53d6\u952e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Array Sort \u6570\u7ec4\u6392\u5e8f",permalink:"/OrigamiStudio/docs/documentation/Data/Array Sort"},next:{title:"Index Of \u7d22\u5f15",permalink:"/OrigamiStudio/docs/documentation/Data/Index Of"}},l={},u=[{value:"Object \u5bf9\u8c61",id:"object-\u5bf9\u8c61",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-keys-\u83b7\u53d6\u952e"},"Get Keys \u83b7\u53d6\u952e"),(0,a.kt)("p",null,"Returns all of the keys within a JSON object."),(0,a.kt)("p",null,"\u8fd4\u56deJSON\u5bf9\u8c61\u4e2d\u7684\u6240\u6709\u952e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(88574).Z,width:"1506",height:"200"})),(0,a.kt)("h3",{id:"object-\u5bf9\u8c61"},"Object \u5bf9\u8c61"),(0,a.kt)("p",null,"A JSON object."),(0,a.kt)("p",null,"\u4e00\u4e2aJSON\u5bf9\u8c61"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"An array of keys."),(0,a.kt)("p",null,"\u5305\u542b\u952e\u7684\u6570\u7ec4\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Array%20Reverse"},"Array Reverse \u6570\u7ec4\u53cd\u8f6c")))}p.isMDXComponent=!0},88574:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/get-keys-e41cd68891cfa38cb31f07e8a6f72350.png"}}]);