"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[39790],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),p=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||s[h]||i;return n?o.createElement(m,a(a({ref:e},c),{},{components:n})):o.createElement(m,a({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34486:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:5},a="Convert Position \u8f6c\u6362\u70b9",l={unversionedId:"documentation/Utility/Convert Position",id:"documentation/Utility/Convert Position",title:"Convert Position \u8f6c\u6362\u70b9",description:"Use this to align layers that have different parent layers. This can be helpful to align overlays with content in scrollviews, for example.",source:"@site/docs/documentation/Utility/Convert Position.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Convert Position",permalink:"/OrigamiStudio/docs/documentation/Utility/Convert Position",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Convert Position.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666672704,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Comment \u6ce8\u91ca",permalink:"/OrigamiStudio/docs/documentation/Utility/Comment"},next:{title:"Counter \u8ba1\u6570\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Counter"}},u={},p=[{value:"From Parent \u4ece\u7236\u7ea7",id:"from-parent-\u4ece\u7236\u7ea7",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"To Parent \u5230\u7236\u7ea7",id:"to-parent-\u5230\u7236\u7ea7",level:3},{value:"To Anchor \u5230\u951a\u70b9",id:"to-anchor-\u5230\u951a\u70b9",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Error \u9519\u8bef",id:"error-\u9519\u8bef",level:3}],c={toc:p};function s(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"convert-position-\u8f6c\u6362\u70b9"},"Convert Position \u8f6c\u6362\u70b9"),(0,r.kt)("p",null,"Use this to align layers that have different parent layers. This can be helpful to align overlays with content in scrollviews, for example."),(0,r.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u53ef\u4ee5\u5bf9\u9f50\u5177\u6709\u4e0d\u540c\u7236\u7ea7\u7684\u56fe\u5c42\u3002\u4f8b\u5982\uff0c\u8fd9\u53ef\u4ee5\u5c06\u53e0\u52a0\u5143\u7d20\u4e0e\u6eda\u52a8\u89c6\u56fe\u4e2d\u7684\u5185\u5bb9\u5bf9\u9f50\u3002"),(0,r.kt)("p",null,"If you want to have layer B follow layer A, add layer A as the \u201cFrom parent\u201d and use the position 0,0. Then put the parent of layer B into To Parent. Connect the output of this patch to layer B."),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u8ba9 B \u56fe\u5c42\u8ddf\u968f A \u56fe\u5c42\uff0c\u8bf7\u5c06 A \u56fe\u5c42\u6dfb\u52a0\u4e3a \u201cFrom Parent\u201d \u5e76\u4f7f\u7528\u4f4d\u7f6e 0,0\u3002\u7136\u540e\u5c06\u56fe\u5c42 B \u7684\u7236\u7ea7\u653e\u5165 To Parent\u3002\u5c06\u6b64\u6a21\u5757\u7684\u8f93\u51fa\u8fde\u63a5\u5230 B \u56fe\u5c42\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(79079).Z,width:"1610",height:"310"})),(0,r.kt)("h3",{id:"from-parent-\u4ece\u7236\u7ea7"},"From Parent \u4ece\u7236\u7ea7"),(0,r.kt)("p",null,"The layer you would like to get the position of."),(0,r.kt)("p",null,"\u60a8\u60f3\u8981\u83b7\u5f97\u4f4d\u7f6e\u7684\u56fe\u5c42\u3002"),(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"Optionally, pass in a position within the layer parent layer. 0,0 works well."),(0,r.kt)("p",null,"\u53ef\u9009\uff0c\u5728\u56fe\u5c42\u7684\u7236\u7ea7\u4e2d\u4f20\u9012\u4e00\u4e2a\u4f4d\u7f6e\u3002 \u5efa\u8bae0,0\u3002"),(0,r.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,r.kt)("p",null,"Use this to determine whether you are converting the top left, middle, bottom right, etc"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6765\u786e\u5b9a\u60a8\u662f\u5426\u6b63\u5728\u8f6c\u6362\u5de6\u4e0a\u3001\u4e2d\u95f4\u3001\u53f3\u4e0b\u7b49\u7b49"),(0,r.kt)("h3",{id:"to-parent-\u5230\u7236\u7ea7"},"To Parent \u5230\u7236\u7ea7"),(0,r.kt)("p",null,"The parent layer you would like to get your converted position in context of"),(0,r.kt)("p",null,"\u8981\u5728\u5176\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6\u8f6c\u6362\u4f4d\u7f6e\u7684\u7236\u5c42"),(0,r.kt)("h3",{id:"to-anchor-\u5230\u951a\u70b9"},"To Anchor \u5230\u951a\u70b9"),(0,r.kt)("p",null,"The converted position will use this anchor relative to the parent."),(0,r.kt)("p",null,"\u8f6c\u6362\u540e\u7684\u4f4d\u7f6e\u5c06\u4f7f\u7528\u8fd9\u4e2a\u76f8\u5bf9\u4e8e\u7236\u7ea7\u7684\u951a\u70b9\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"The converted X / Y position. (Use a Point Unpack patch to get each individual coordinate value)"),(0,r.kt)("p",null,"\u8f6c\u6362\u540e\u7684 X / Y \u4f4d\u7f6e\u3002 \uff08\u4f7f\u7528 Point Unpack \u6a21\u5757\u83b7\u53d6\u6bcf\u4e2a\u5355\u72ec\u7684\u5750\u6807\u503c\uff09"),(0,r.kt)("h3",{id:"error-\u9519\u8bef"},"Error \u9519\u8bef"),(0,r.kt)("p",null,"A boolean if there was an error getting the converted position coordinates. Typically this is caused by one of the layers being disabled."),(0,r.kt)("p",null,"\u5982\u679c\u83b7\u53d6\u8f6c\u6362\u540e\u7684\u4f4d\u7f6e\u5750\u6807\u65f6\u51fa\u9519\uff0c\u5219\u4e3a\u5e03\u5c14\u503c\u3002\u901a\u5e38\u8fd9\u662f\u7531\u5176\u4e2d\u4e00\u5c42\u88ab\u7981\u7528\u5f15\u8d77\u7684\u3002"))}s.isMDXComponent=!0},79079:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/convert-position-ccf57517cd076e72c8e0b38a3bbe35bb.png"}}]);