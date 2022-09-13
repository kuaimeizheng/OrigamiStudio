"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[32785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:2},a="Progress \u8fdb\u5ea6",l={unversionedId:"documentation/Utility/Progress",id:"documentation/Utility/Progress",title:"Progress \u8fdb\u5ea6",description:"Convert a number from any range to progress (0 to 1). Useful with Transition to convert an animating value to another range.",source:"@site/docs/documentation/Utility/Progress.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Progress",permalink:"/OrigamiStudio/docs/documentation/Utility/Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Progress.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1663054532,formattedLastUpdatedAt:"2022\u5e749\u670813\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Point \u70b9",permalink:"/OrigamiStudio/docs/documentation/Utility/Point"},next:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/OrigamiStudio/docs/documentation/Utility/Pulse on Change"}},s={},u=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Start Value \u5f00\u59cb\u503c",id:"start-value-\u5f00\u59cb\u503c",level:3},{value:"End Value \u7ed3\u675f\u503c",id:"end-value-\u7ed3\u675f\u503c",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"Convert a number from any range to progress (0 to 1). Useful with ",(0,i.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.transition.html"},"Transition")," to convert an animating value to another range."),(0,i.kt)("p",null,"\u5c06\u4efb\u4f55\u8303\u56f4\u5185\u7684\u6570\u5b57\u8f6c\u6362\u4e3a\u8fdb\u5ea6\uff080\u52301\uff09\u3002\u548c ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")," \u4e00\u8d77\u4f7f\u7528\u53ef\u4ee5\u5c06\u52a8\u753b\u503c\u8f6c\u6362\u4e3a\u5176\u5b83\u7684\u8303\u56f4\uff08\u4f8b\u5982\uff1a100\uff5e125\u300120\uff5e30\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(79387).Z,width:"1348",height:"266"})),(0,i.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,i.kt)("p",null,"A number to convert."),(0,i.kt)("p",null,"\u8981\u8f6c\u6362\u7684\u503c\u3002"),(0,i.kt)("h3",{id:"start-value-\u5f00\u59cb\u503c"},"Start Value \u5f00\u59cb\u503c"),(0,i.kt)("p",null,"The start value of the range."),(0,i.kt)("p",null,"\u8303\u56f4\u7684\u5f00\u59cb\u503c\u3002"),(0,i.kt)("h3",{id:"end-value-\u7ed3\u675f\u503c"},"End Value \u7ed3\u675f\u503c"),(0,i.kt)("p",null,"The end value of the range."),(0,i.kt)("p",null,"\u8303\u56f4\u7684\u7ed3\u675f\u503c\u3002"),(0,i.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"A progress value."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"Animation Basics")," for more information."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002"),(0,i.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 Animation Basic\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Clip"},"Clip \u88c1\u526a")))}p.isMDXComponent=!0},79387:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/progress-afbe7863107e352bf43f4b55300b661d.png"}}]);