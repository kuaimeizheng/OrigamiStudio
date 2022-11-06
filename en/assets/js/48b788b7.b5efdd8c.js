"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[29361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6",s={unversionedId:"documentation/Utility/Reverse Progress",id:"documentation/Utility/Reverse Progress",title:"Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6",description:"Reverse a progress value, ex: 0 to 1 becomes 1 to 0, .3 becomes .7.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Reverse Progress.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Reverse Progress",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Reverse Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Reverse Progress.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{title:"Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Restart Prototype \u91cd\u542f\u539f\u578b",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Restart Prototype"},next:{title:"Sample and Hold \u91c7\u6837\u4fdd\u6301",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Sample and Hold"}},l={},c=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reverse-progress-\u53cd\u8f6c\u8fdb\u5ea6"},"Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6"),(0,o.kt)("p",null,"Reverse a progress value, ex: 0 to 1 becomes 1 to 0, .3 becomes .7."),(0,o.kt)("p",null,"\u53cd\u8f6c\u4e00\u4e2a\u8fdb\u5ea6\u503c\uff0c\u4f8b\u5982\uff1a0 \u5230 1 \u53d8\u4e3a 1 \u5230 0\uff0c0.3 \u53d8\u4e3a 0.7\u3002"),(0,o.kt)("p",null,"Useful to sync an animation that is reversed (ex: a photo that fades in as another fades out)."),(0,o.kt)("p",null,"\u7528\u4e8e\u540c\u6b65\u53cd\u8f6c\u7684\u52a8\u753b\uff08\u4f8b\u5982\uff1a\u4e00\u5f20\u7167\u7247\u6de1\u5165\uff0c\u53e6\u4e00\u5f20\u6de1\u51fa\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(22434).Z,width:"1260",height:"168"})),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A progress value. See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/Animations"},"Animation Basics")," for more information."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u52a8\u753b\u57fa\u7840\u77e5\u8bc6\u3002"),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"The reversed progress value. See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/Animations"},"Animation Basics")," for more information."),(0,o.kt)("p",null,"\u53cd\u8f6c\u8fdb\u5ea6\u503c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u52a8\u753b\u57fa\u7840\u77e5\u8bc6\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}p.isMDXComponent=!0},22434:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reverse-progress-3ca81b3bd0aedc9d650df5024cc9eb76.png"}}]);