"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[21222],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,l=function(t,e){if(null==t)return{};var n,i,l={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=i.createContext({}),p=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return n?i.createElement(f,a(a({ref:e},c),{},{components:n})):i.createElement(f,a({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62638:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),l=(n(67294),n(3905));const r={title:"Clip \u88c1\u526a",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Clip \u88c1\u526a",o={unversionedId:"documentation/Utility/Clip",id:"documentation/Utility/Clip",title:"Clip \u88c1\u526a",description:"Clip a number so that it does not exceed the specified bounds.",source:"@site/docs/documentation/Utility/Clip.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Clip",permalink:"/OrigamiStudio/docs/documentation/Utility/Clip",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Clip.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{title:"Clip \u88c1\u526a",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Arc Transition \u5f27\u5f62\u8fc7\u6e21",permalink:"/OrigamiStudio/docs/documentation/Utility/Arc Transition"},next:{title:"Comment \u6ce8\u91ca",permalink:"/OrigamiStudio/docs/documentation/Utility/Comment"}},u={},p=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Min \u6700\u5c0f\u503c",id:"min-\u6700\u5c0f\u503c",level:3},{value:"Max \u6700\u5927\u503c",id:"max-\u6700\u5927\u503c",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clip-\u88c1\u526a"},"Clip \u88c1\u526a"),(0,l.kt)("p",null,"Clip a number so that it does not exceed the specified bounds."),(0,l.kt)("p",null,"\u88c1\u526a\u4e00\u4e2a\u6570\u503c\uff0c\u4f7f\u5176\u4e0d\u8d85\u8fc7\u6307\u5b9a\u7684\u8303\u56f4\u3002"),(0,l.kt)("p",null,"For example, if an input value is 1.5, but the Max bound is set to 1, the output value will be clipped to 1."),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8f93\u5165\u503c\u4e3a 1.5\u3002\u4f46\u6700\u5927\u8303\u56f4\u8bbe\u7f6e\u4e3a 1\uff0c\u5219\u8f93\u51fa\u503c\u5c06\u88ab\u88c1\u526a\u4e3a 1."),(0,l.kt)("div",{className:"patch-container"},(0,l.kt)("div",{className:"patch processor"},(0,l.kt)("h3",null,"Clip"),(0,l.kt)("ul",{className:"inputs"},(0,l.kt)("li",null,"Value",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Min",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Max",(0,l.kt)("span",null,"0"))),(0,l.kt)("ul",{className:"outputs"},(0,l.kt)("li",null,(0,l.kt)("span",null,"0"))))),(0,l.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,l.kt)("p",null,"A number to clip."),(0,l.kt)("p",null,"\u8981\u88c1\u526a\u7684\u503c\u3002"),(0,l.kt)("h3",{id:"min-\u6700\u5c0f\u503c"},"Min \u6700\u5c0f\u503c"),(0,l.kt)("p",null,"The lowest number to allow. The output value must be greater than or equal to this number."),(0,l.kt)("p",null,"\u5141\u8bb8\u7684\u6700\u5c0f\u6570\u503c\u3002"),(0,l.kt)("p",null,"\u8f93\u51fa\u503c\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e\u6b64\u6570\u503c\u3002"),(0,l.kt)("h3",{id:"max-\u6700\u5927\u503c"},"Max \u6700\u5927\u503c"),(0,l.kt)("p",null,"The highest number to allow. The output value must be lower than or equal to this number."),(0,l.kt)("p",null,"\u5141\u8bb8\u7684\u6700\u5927\u6570\u503c\u3002"),(0,l.kt)("p",null,"\u8f93\u51fa\u503c\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6b64\u6570\u503c\u3002"),(0,l.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,l.kt)("p",null,"The clipped value."),(0,l.kt)("p",null,"\u88c1\u526a\u8fc7\u7684\u503c\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}s.isMDXComponent=!0}}]);