"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[87716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:2},i="Array Sort \u6570\u7ec4\u53cd\u8f6c",u={unversionedId:"documentation/Data/Array Reverse",id:"documentation/Data/Array Reverse",title:"Array Sort \u6570\u7ec4\u53cd\u8f6c",description:"Returns an array in reverse order.",source:"@site/docs/documentation/Data/Array Reverse.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Array Reverse",permalink:"/OrigamiStudio/docs/documentation/Data/Array Reverse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Array Reverse.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1661751679,formattedLastUpdatedAt:"2022\u5e748\u670829\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Array Join \u6570\u7ec4\u8fde\u63a5",permalink:"/OrigamiStudio/docs/documentation/Data/Array Join"},next:{title:"Array Sort \u6570\u7ec4\u6392\u5e8f",permalink:"/OrigamiStudio/docs/documentation/Data/Array Sort"}},c={},l=[{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:l};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"array-sort-\u6570\u7ec4\u53cd\u8f6c"},"Array Sort \u6570\u7ec4\u53cd\u8f6c"),(0,n.kt)("p",null,"Returns an array in reverse order."),(0,n.kt)("p",null,"\u4ee5\u76f8\u53cd\u7684\u987a\u5e8f\u8fd4\u56de\u6570\u7ec4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(74269).Z,width:"1508",height:"200"})),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"An array to reverse."),(0,n.kt)("p",null,"\u9700\u8981\u53cd\u8f6c\u7684\u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"The reversed array."),(0,n.kt)("p",null,"\u53cd\u8f6c\u540e\u7684\u6570\u7ec4\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./Array%20Sort"},"Array Sort \u6570\u7ec4\u6392\u5e8f")))}p.isMDXComponent=!0},74269:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/array-reverse-f86c86423c740d3d53052bb87171fa86.png"}}]);