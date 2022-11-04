"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[16611],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42488:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={title:"Split Text \u62c6\u5206\u6587\u672c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Split Text \u62c6\u5206\u6587\u672c",l={unversionedId:"documentation/Text/Split Text",id:"documentation/Text/Split Text",title:"Split Text \u62c6\u5206\u6587\u672c",description:"Splits the text into a loop using the token.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Text/Split Text.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Split Text",permalink:"/OrigamiStudio/en/docs/documentation/Text/Split Text",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Split Text.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{title:"Split Text \u62c6\u5206\u6587\u672c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Text \u6587\u672c",permalink:"/OrigamiStudio/en/docs/category/text-\u6587\u672c"},next:{title:"Text Ends With \u6587\u672c\u7ed3\u5c3e",permalink:"/OrigamiStudio/en/docs/documentation/Text/Text Ends With"}},p={},u=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Token \u6807\u8bb0",id:"token-\u6807\u8bb0",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Sample  \u793a\u4f8b",id:"sample--\u793a\u4f8b",level:3},{value:"Output \u8f93\u51fa\u5c06\u8f93\u51fa\u5faa\u73af\u4e3a\uff1a\u8fd9\u662f\u3002",id:"output-\u8f93\u51fa\u5c06\u8f93\u51fa\u5faa\u73af\u4e3a\u8fd9\u662f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:u};function c(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"split-text-\u62c6\u5206\u6587\u672c"},"Split Text \u62c6\u5206\u6587\u672c"),(0,i.kt)("p",null,"Splits the text into a loop using the token."),(0,i.kt)("p",null,"\u4f7f\u7528\u6807\u8bb0\u5c06\u6587\u672c\u62c6\u5206\u4e3a\u5faa\u73af\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(22818).Z,width:"1500",height:"232"})),(0,i.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,i.kt)("p",null,"A text string to evaluate."),(0,i.kt)("p",null,"\u5f85\u5904\u7406\u7684\u6587\u672c"),(0,i.kt)("h3",{id:"token-\u6807\u8bb0"},"Token \u6807\u8bb0"),(0,i.kt)("p",null,"A text string to find and split the the text into parts around."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u67e5\u627e\u4ee5\u8fd9\u4e2a\u6807\u8bb0\u6587\u672c\u4f4d\u7f6e\u5c06\u6574\u4e2a\u6587\u672c\u5206\u5272\u4e3a\u51e0\u4e2a\u90e8\u5206\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"A loop of the parts of the text split by the token. The entire text will be returned if the token is not found."),(0,i.kt)("p",null,"\u5c06\u6807\u8bb0\u5206\u5272\u51fa\u6765\u51e0\u4e2a\u90e8\u5206\u7684\u6587\u672c\u7ec4\u6210\u5faa\u73af\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\u8f93\u5165\u7684\u6807\u8bb0\u6587\u672c\uff0c\u5c06\u8fd4\u56de\u6574\u4e2a\u6587\u672c\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sample--\u793a\u4f8b"},"Sample  \u793a\u4f8b"),(0,i.kt)("p",null,"\u5982\u56fe\uff1a"),(0,i.kt)("p",null,"\u8f93\u5165\u7684 ### Text \u6587\u672c\u6587\u672c\u5b57\u7b26\u4e32\u4e3a\uff1a\u8fd9\u662f\u793a\u4f8b\u6587\u672c\u3002"),(0,i.kt)("p",null,"\u8f93\u5165\u7684 ### Token \u6807\u8bb0\u6587\u672c\u5b57\u7b26\u4e32\u4e3a\uff1a\u793a\u4f8b\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa\u5c06\u8f93\u51fa\u5faa\u73af\u4e3a\u8fd9\u662f"},"Output \u8f93\u51fa\u5c06\u8f93\u51fa\u5faa\u73af\u4e3a\uff1a","[\u8fd9\u662f][\u6587\u672c]","\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(30402).Z,width:"812",height:"339"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Trim%20Text"},"Trim Text \u4fee\u526a\u6587\u672c")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Replace"},"Text Replace \u6587\u672c\u66ff\u6362")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}c.isMDXComponent=!0},30402:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/split-text-example-312efe9ed59eef865da24cfb6721a221.png"},22818:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/split-text-4861beb3c425d141f67dbaf8223b4e94.png"}}]);