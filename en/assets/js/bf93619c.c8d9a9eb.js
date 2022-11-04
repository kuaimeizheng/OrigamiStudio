"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[67933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Any \u4efb\u610f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Any \u4efb\u610f",l={unversionedId:"documentation/Loops/Any",id:"documentation/Loops/Any",title:"Any \u4efb\u610f",description:"Check if any of the booleans in a loop are true.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Any.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Any",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Any",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Any.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{title:"Any \u4efb\u610f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop \u5faa\u73af",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop"},next:{title:"Grid Layout \u7f51\u683c\u5e03\u5c40",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Grid Layout"}},p={},u=[{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Grouping \u5206\u7ec4",id:"grouping-\u5206\u7ec4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"any-\u4efb\u610f"},"Any \u4efb\u610f"),(0,r.kt)("p",null,"Check if any of the booleans in a loop are true."),(0,r.kt)("p",null,"\u68c0\u67e5\u5faa\u73af\u4e2d\u7684\u4efb\u4f55\u5e03\u5c14\u503c\u662f\u5426\u4e3a\u771f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(4128).Z,width:"170",height:"441"})),(0,r.kt)("p",null,"Often used with an ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction")," patch on a looped layer to check when any of the layers are tapped."),(0,r.kt)("p",null,"\u901a\u5e38\u4e0e\u5faa\u73af\u56fe\u5c42\u4e0a\u7684\u4ea4\u4e92\u6a21\u5757\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u68c0\u67e5\u7a81\u51fa\u4ec0\u4e48\u65f6\u5019\u88ab\u70b9\u51fb\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(78748).Z,width:"1384",height:"224"})),(0,r.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,r.kt)("p",null,"A loop of booleans."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5305\u542b\u5e03\u5c14\u503c\u7684\u5faa\u73af"),(0,r.kt)("h3",{id:"grouping-\u5206\u7ec4"},"Grouping \u5206\u7ec4"),(0,r.kt)("p",null,"For advanced use only. An index or a loop of indices. By default, the number is -1."),(0,r.kt)("p",null,"\u4ec5\u4f9b\u9ad8\u7ea7\u4f7f\u7528\u3002\u7d22\u5f15\u6216\u7d22\u5f15\u5faa\u73af\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u6570\u5b57\u4e3a -1\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"A boolean that is true if any of the loop of booleans are true. If a loop is passed into Grouping, then a loop of booleans."),(0,r.kt)("p",null,"\u5982\u679c\u5e03\u5c14\u503c\u5faa\u73af\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u4e3a\u771f\uff0c\u5219\u8be5\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5faa\u73af\u88ab\u4f20\u9012\u5230\u5206\u7ec4\u4e2d\uff0c\u90a3\u4e48\u5b83\u5c31\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\u5faa\u73af\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")))}s.isMDXComponent=!0},4128:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/any-1-e53a1c8c2105656b7efee947e06f8534.png"},78748:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/any-6a57932c321b7deb64f14bdd1f2efb8b.png"}}]);