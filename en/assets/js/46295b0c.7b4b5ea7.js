"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[41607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Progress \u8fdb\u5ea6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Progress \u8fdb\u5ea6",l={unversionedId:"documentation/Utility/Progress",id:"documentation/Utility/Progress",title:"Progress \u8fdb\u5ea6",description:"Convert a number from any range to progress (0 to 1). Useful with Transition to convert an animating value to another range.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Progress.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Progress",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Progress.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{title:"Progress \u8fdb\u5ea6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Point \u70b9",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Point"},next:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Pulse on Change"}},s={},u=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Start Value \u5f00\u59cb\u503c",id:"start-value-\u5f00\u59cb\u503c",level:3},{value:"End Value \u7ed3\u675f\u503c",id:"end-value-\u7ed3\u675f\u503c",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"Convert a number from any range to progress (0 to 1). Useful with ",(0,o.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.transition.html"},"Transition")," to convert an animating value to another range."),(0,o.kt)("p",null,"\u5c06\u4efb\u4f55\u8303\u56f4\u5185\u7684\u6570\u5b57\u8f6c\u6362\u4e3a\u8fdb\u5ea6\uff080\u52301\uff09\u3002\u548c ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")," \u4e00\u8d77\u4f7f\u7528\u53ef\u4ee5\u5c06\u52a8\u753b\u503c\u8f6c\u6362\u4e3a\u5176\u5b83\u7684\u8303\u56f4\uff08\u4f8b\u5982\uff1a100\uff5e125\u300120\uff5e30\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(79387).Z,width:"1348",height:"266"})),(0,o.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,o.kt)("p",null,"A number to convert."),(0,o.kt)("p",null,"\u8981\u8f6c\u6362\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"start-value-\u5f00\u59cb\u503c"},"Start Value \u5f00\u59cb\u503c"),(0,o.kt)("p",null,"The start value of the range."),(0,o.kt)("p",null,"\u8303\u56f4\u7684\u5f00\u59cb\u503c\u3002"),(0,o.kt)("h3",{id:"end-value-\u7ed3\u675f\u503c"},"End Value \u7ed3\u675f\u503c"),(0,o.kt)("p",null,"The end value of the range."),(0,o.kt)("p",null,"\u8303\u56f4\u7684\u7ed3\u675f\u503c\u3002"),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A progress value."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/Animations"},"Animation Basics")," for more information."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002"),(0,o.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 Animation Basic\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Clip"},"Clip \u88c1\u526a")))}p.isMDXComponent=!0},79387:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/progress-afbe7863107e352bf43f4b55300b661d.png"}}]);