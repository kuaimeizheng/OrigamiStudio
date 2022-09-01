"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[39822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),O=a,m=s["".concat(c,".").concat(O)]||s[O]||d[O]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},64502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},i="JSON Object JSON\u5bf9\u8c61",l={unversionedId:"documentation/Data/JSON Object",id:"documentation/Data/JSON Object",title:"JSON Object JSON\u5bf9\u8c61",description:"Create a JSON object from provided key and value.",source:"@site/docs/documentation/Data/JSON Object.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/JSON Object",permalink:"/OrigamiStudio/docs/documentation/Data/JSON Object",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/JSON Object.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1662017179,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"JSON Array JSON\u6570\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Data/JSON Array"},next:{title:"JSON to Text JSON\u8f6c\u6587\u672c",permalink:"/OrigamiStudio/docs/documentation/Data/JSON to Text"}},c={},u=[{value:"Key \u952e",id:"key-\u952e",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Object \u5bf9\u8c61###",id:"object-\u5bf9\u8c61",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-object-json\u5bf9\u8c61"},"JSON Object JSON\u5bf9\u8c61"),(0,a.kt)("p",null,"Create a JSON object from provided key and value."),(0,a.kt)("p",null,"\u4ece\u63d0\u4f9b\u7684\u952e\u548c\u503c\u521b\u5efa\u4e00\u4e2aJSON\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"Right-click to change the type of value."),(0,a.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u53ef\u4ee5\u66f4\u6539\u503c\u7684\u7c7b\u578b\uff0c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(70643).Z,width:"1510",height:"232"})),(0,a.kt)("h3",{id:"key-\u952e"},"Key \u952e"),(0,a.kt)("p",null,"A text string that represents the key of the object."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5bf9\u8c61\u7684\u952e\u3002"),(0,a.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,a.kt)("p",null,"Desired value for a given key."),(0,a.kt)("p",null,"\u60f3\u8981\u7ed9\u952e\u8d4b\u4e88\u7684\u503c\u3002"),(0,a.kt)("h3",{id:"object-\u5bf9\u8c61"},"Object \u5bf9\u8c61###"),(0,a.kt)("p",null,"The JSON Object containing the key-value pair."),(0,a.kt)("p",null,"\u5305\u542b\u952e\u503c\u5bf9\u7684JSON\u5bf9\u8c61\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Set%20Value%20for%20Key"},"Set Value for Key \u8bbe\u7f6e\u952e\u503c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./Value%20for%20Key"},"Value for Key \u5173\u952e\u503c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")))}d.isMDXComponent=!0},70643:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/json-object-b81564b20d21194b17edbf00dafbe2e5.png"}}]);