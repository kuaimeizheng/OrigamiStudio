"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[35448],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(o),m=r,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||p;return o?n.createElement(f,a(a({ref:t},d),{},{components:o})):n.createElement(f,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=o.length,a=new Array(p);a[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<p;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},74116:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const p={sidebar_position:5},a="Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",i={unversionedId:"documentation/Loops/Loop Dedupe",id:"documentation/Loops/Loop Dedupe",title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",description:"Remove duplicate values in a loop.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Loop Dedupe.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Dedupe",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Dedupe",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Dedupe.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667659545,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop Count \u5faa\u73af\u6570\u91cf",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Count"},next:{title:"Loop Filter \u5faa\u73af\u7b5b\u9009",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop Filter"}},l={},u=[{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af-1",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function c(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-dedupe-\u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664"},"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664"),(0,r.kt)("p",null,"Remove duplicate values in a loop."),(0,r.kt)("p",null,"\u5220\u9664\u5faa\u73af\u4e2d\u7684\u91cd\u590d\u503c\u3002"),(0,r.kt)("p",null,"Right-click to change the type of the loop."),(0,r.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u5faa\u73af\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(9958).Z,width:"1374",height:"260"})),(0,r.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,r.kt)("p",null,"A loop to remove duplicate values from."),(0,r.kt)("p",null,"\u9700\u8981\u5220\u9664\u91cd\u590d\u6570\u636e\u7684\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"loop-\u5faa\u73af-1"},"Loop \u5faa\u73af"),(0,r.kt)("p",null,"The resulting loop without duplicated values."),(0,r.kt)("p",null,"\u6ca1\u6709\u91cd\u590d\u6570\u636e\u7684\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,r.kt)("p",null,"A loop of the indices for the output values. ex: ","[0, 1, 2]"),(0,r.kt)("p",null,"\u8f93\u51fa\u6570\u636e\u7684\u7d22\u5f15\u5faa\u73af\u3002\u4f8b\u5982\uff1a","[0, 1, 2]"),(0,r.kt)("h3",{id:"\u652f\u6301\u7684\u7c7b\u578b"},"\u652f\u6301\u7684\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(96255).Z,width:"156",height:"494"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Remove"},"Loop Remove \u5faa\u73af\u79fb\u9664")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Remove%20Last"},"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Reverse"},"Loop Reverse \u5faa\u73af\u53cd\u8f6c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Shuffle"},"Loop Shuffle \u5faa\u73af\u968f\u673a\u6392\u5e8f")))}c.isMDXComponent=!0},96255:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-dedepe-item-ddb6cac4124f9dfaaf01b7e6d969a928.png"},9958:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-dedepe-e0b2f10f1bccb508b239739c420ca4f7.png"}}]);