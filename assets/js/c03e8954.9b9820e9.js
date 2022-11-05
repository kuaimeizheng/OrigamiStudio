"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[18007],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(b,o(o({ref:t},s),{},{components:r})):a.createElement(b,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const n={title:"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668",l={unversionedId:"documentation/Utility/Variable Receiver",id:"documentation/Utility/Variable Receiver",title:"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668",description:"Use a value sent from a Variable Broadcaster. You can choose variables from within the current patch graph, as well as any Global variables from the root of the document or parents of the current component. Learn more about Global Variables.",source:"@site/docs/documentation/Utility/Variable Receiver.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Variable Receiver",permalink:"/OrigamiStudio/docs/documentation/Utility/Variable Receiver",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Variable Receiver.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Variable Broadcaster"},next:{title:"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Vec4 Unpack"}},c={},u=[{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"variable-receiver-\u53d8\u91cf\u63a5\u6536\u5668"},"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668"),(0,i.kt)("p",null,"Use a value sent from a Variable Broadcaster. You can choose variables from within the current patch graph, as well as any Global variables from the root of the document or parents of the current component. Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Variables"},"Global Variables"),"."),(0,i.kt)("p",null,"\u63a5\u6536\u4ece\u53d8\u91cf\u53d1\u9001\u5668\u53d1\u9001\u7684\u503c\u3002\u60a8\u53ef\u4ee5\u4ece\u5f53\u524d\u6a21\u5757\u56fe\u4e2d\u9009\u62e9\u53d8\u91cf\uff0c\u4ee5\u53ca\u6765\u81ea\u6587\u6863\u6839\u76ee\u5f55\u6216\u5f53\u524d\u7ec4\u4ef6\u7236\u9879\u7684\u4efb\u4f55\u5168\u5c40\u53d8\u91cf\u3002\u8be6\u7ec6\u4e86\u89e3",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Variables"},"\u5168\u5c40\u53d8\u91cf"),"\u3002"),(0,i.kt)("p",null,"Click the patch name to select the value to receive. Click the wireless icon to jump to the corresponding local Variable Broadcaster."),(0,i.kt)("p",null,"\u5355\u51fb\u6a21\u5757\u540d\u79f0\u4ee5\u9009\u62e9\u8981\u63a5\u6536\u7684\u503c\u3002\u70b9\u51fb\u65e0\u7ebf\u56fe\u6807\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u672c\u5730\u53d8\u91cf\u53d1\u9001\u5668\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(15380).Z,width:"1306",height:"168"})),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"The value received from a matching broadcaster."),(0,i.kt)("p",null,"\u4ece\u5339\u914d\u7684\u65e0\u7ebf\u53d1\u9001\u5668\u63a5\u6536\u5230\u7684\u503c\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Variable%20Receiver"},"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter \u5206\u79bb\u5668")))}p.isMDXComponent=!0},15380:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/variable-receiver-edfccdd2631d3f38fead5ae51632dd6f.png"}}]);