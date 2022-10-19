"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[88161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:5},o="Value at Path \u8def\u5f84\u503c",i={unversionedId:"documentation/Data/Value at Path",id:"documentation/Data/Value at Path",title:"Value at Path \u8def\u5f84\u503c",description:"Get a value from a JSON object at a specified path. A path is a text value in dot notation that contains:",source:"@site/docs/documentation/Data/Value at Path.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Value at Path",permalink:"/OrigamiStudio/docs/documentation/Data/Value at Path",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Value at Path.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666145039,formattedLastUpdatedAt:"2022\u5e7410\u670819\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Value at Index \u7d22\u5f15\u503c",permalink:"/OrigamiStudio/docs/documentation/Data/Value at Index"},next:{title:"Value for Key \u5173\u952e\u503c",permalink:"/OrigamiStudio/docs/documentation/Data/Value for Key"}},u={},c=[{value:"Object \u5bf9\u8c61",id:"object-\u5bf9\u8c61",level:3},{value:"Path \u8def\u5f84",id:"path-\u8def\u5f84",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"value-at-path-\u8def\u5f84\u503c"},"Value at Path \u8def\u5f84\u503c"),(0,r.kt)("p",null,"Get a value from a JSON object at a specified path. A path is a text value in dot notation that contains:"),(0,r.kt)("p",null,"\u4ece\u6307\u5b9a\u8def\u5f84\u7684 JSON \u5bf9\u8c61\u4e2d\u83b7\u53d6\u503c\u3002\u8def\u5f84\u662f\u70b9\u8868\u793a\u6cd5\u7684\u6587\u672c\u503c\uff0c\u5305\u542b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number(s) to select a value at an array index. For example, \u201cbooks.0\u201d will select the first book in an array of books."),(0,r.kt)("li",{parentName:"ul"},"Number(s) \u5728\u6570\u7ec4\u7d22\u5f15\u5904\u9009\u62e9\u4e00\u4e2a\u503c\u3002\u4f8b\u5982\uff0c\u201cbooks.0\u201d\u5c06\u9009\u62e9\u4e66\u7c4d\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u672c\u4e66\u3002"),(0,r.kt)("li",{parentName:"ul"},"Text string(s) to select a value for a key. For example, \u201cbooks.0.title\u201d will select the title of the first in array of books."),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u4e3a\u952e\u9009\u62e9\u503c\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002\u4f8b\u5982\uff0c\u201cbooks.0.title\u201d\u5c06\u9009\u62e9\u4e66\u7c4d\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u7684\u6807\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"Asterisk(s) (",(0,r.kt)("em",{parentName:"li"},") to select an array of child values. For example, \u201cbooks."),".title\u201d will select an array of titles of all books."),(0,r.kt)("li",{parentName:"ul"},"\u661f\u53f7 (",(0,r.kt)("em",{parentName:"li"},")\u7528\u4e8e\u9009\u62e9\u5b50\u503c\u6570\u7ec4\u3002\u4f8b\u5982\uff0c\u201dbooks"),".*.title\u201d\u5c06\u9009\u62e9\u6240\u6709\u4e66\u7c4d\u7684\u6807\u9898\u6570\u7ec4\u3002")),(0,r.kt)("p",null,"Starting the path with two dots will get a recursive search for the following values, for example \u201c..title\u201d will get all the values for the key \u201ctitle\u201d, no matter how deep in the JSON object they are."),(0,r.kt)("p",null,"\u4ee5\u4e24\u4e2a\u70b9\u5f00\u59cb\u7684\u8def\u5f84\u5c06\u9012\u5f52\u641c\u7d22\u4ee5\u4e0b\u503c\uff0c\u4f8b\u5982\u201c..title\u201d\u5c06\u83b7\u53d6\u952e\u201ctitle\u201d\u7684\u6240\u6709\u503c\uff0c\u65e0\u8bba\u5b83\u4eec\u5728 JSON \u5bf9\u8c61\u4e2d\u6709\u591a\u6df1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(71807).Z,width:"1500",height:"226"})),(0,r.kt)("h3",{id:"object-\u5bf9\u8c61"},"Object \u5bf9\u8c61"),(0,r.kt)("p",null,"The JSON object or array to get the value from."),(0,r.kt)("p",null,"\u8981\u4ece\u4e2d\u83b7\u53d6\u503c\u7684 JSON \u5bf9\u8c61\u6216\u6570\u7ec4\u3002"),(0,r.kt)("h3",{id:"path-\u8def\u5f84"},"Path \u8def\u5f84"),(0,r.kt)("p",null,"A text string of the path in dot notation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u4ee5\u70b9\u6807\u8bb0\u7b26\u53f7\u8868\u793a\u7684\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("p",null,"\u201d.0.name\u201d\uff0c\u8f93\u51fa\u4e3a \u201d\u83e0\u841d\u201d\uff0c"),(0,r.kt)("p",null,"\u201d.1.name\u201d\uff0c\u8f93\u51fa\u4e3a \u201d\u6d77\u67a3\u201d\uff0c"),(0,r.kt)("p",null,"\u201d.name\u201d\uff0c\u8f93\u51fa\u4e3a \u201d\u83e0\u841d\u3001\u6d77\u67a3\u201d\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d Object \u63a5\u6536\u5230\u7684\u6570\u7ec4\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n"name" : "\u83e0\u841d",\n"score" : 0.99999404000000003\n},\n{\n"name" : "\u6d77\u67a3",\n"score" : 1.4050611e-06\n}\n')),(0,r.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,r.kt)("p",null,"The value at the path."),(0,r.kt)("p",null,"\u8def\u5f84\u4e0a\u7684\u503c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./Value%20for%20Key"},"Value for Key \u5173\u952e\u503c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")))}s.isMDXComponent=!0},71807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/value-at-path-94855abe650ac4c4c25824ec0e7f0937.png"}}]);