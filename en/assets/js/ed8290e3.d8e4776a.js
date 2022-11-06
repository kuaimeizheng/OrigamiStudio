"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[67942],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),p=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?i.createElement(f,l(l({ref:e},c),{},{components:n})):i.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58026:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={title:"Clip \u88c1\u526a",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},l="Clip \u88c1\u526a",a={unversionedId:"documentation/Utility/Clip",id:"documentation/Utility/Clip",title:"Clip \u88c1\u526a",description:"Clip a number so that it does not exceed the specified bounds.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Utility/Clip.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Clip",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Clip",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Clip.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{title:"Clip \u88c1\u526a",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Arc Transition \u5f27\u5f62\u8fc7\u6e21",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Arc Transition"},next:{title:"Comment \u6ce8\u91ca",permalink:"/OrigamiStudio/en/docs/documentation/Utility/Comment"}},u={},p=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Min \u6700\u5c0f\u503c",id:"min-\u6700\u5c0f\u503c",level:3},{value:"Max \u6700\u5927\u503c",id:"max-\u6700\u5927\u503c",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,i.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clip-\u88c1\u526a"},"Clip \u88c1\u526a"),(0,r.kt)("p",null,"Clip a number so that it does not exceed the specified bounds."),(0,r.kt)("p",null,"\u88c1\u526a\u4e00\u4e2a\u6570\u503c\uff0c\u4f7f\u5176\u4e0d\u8d85\u8fc7\u6307\u5b9a\u7684\u8303\u56f4\u3002"),(0,r.kt)("p",null,"For example, if an input value is 1.5, but the Max bound is set to 1, the output value will be clipped to 1."),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8f93\u5165\u503c\u4e3a 1.5\u3002\u4f46\u6700\u5927\u8303\u56f4\u8bbe\u7f6e\u4e3a 1\uff0c\u5219\u8f93\u51fa\u503c\u5c06\u88ab\u88c1\u526a\u4e3a 1."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(82448).Z,width:"1374",height:"254"})),(0,r.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,r.kt)("p",null,"A number to clip."),(0,r.kt)("p",null,"\u8981\u88c1\u526a\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"min-\u6700\u5c0f\u503c"},"Min \u6700\u5c0f\u503c"),(0,r.kt)("p",null,"The lowest number to allow. The output value must be greater than or equal to this number."),(0,r.kt)("p",null,"\u5141\u8bb8\u7684\u6700\u5c0f\u6570\u503c\u3002"),(0,r.kt)("p",null,"\u8f93\u51fa\u503c\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e\u6b64\u6570\u503c\u3002"),(0,r.kt)("h3",{id:"max-\u6700\u5927\u503c"},"Max \u6700\u5927\u503c"),(0,r.kt)("p",null,"The highest number to allow. The output value must be lower than or equal to this number."),(0,r.kt)("p",null,"\u5141\u8bb8\u7684\u6700\u5927\u6570\u503c\u3002"),(0,r.kt)("p",null,"\u8f93\u51fa\u503c\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6b64\u6570\u503c\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"The clipped value."),(0,r.kt)("p",null,"\u88c1\u526a\u8fc7\u7684\u503c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}s.isMDXComponent=!0},82448:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/clip-68043e45afb3630499270d579cbd7286.png"}}]);