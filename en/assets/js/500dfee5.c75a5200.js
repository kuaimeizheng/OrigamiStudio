"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[15439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},i="Running Total \u7d2f\u79ef\u603b\u8ba1",u={unversionedId:"documentation/Loops/Running Total",id:"documentation/Loops/Running Total",title:"Running Total \u7d2f\u79ef\u603b\u8ba1",description:"Calculate the sums of a loop of numbers, where the sum at each index is the sum of the numbers preceding the current number.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Running Total.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Running Total",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Running Total",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Running Total.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop to Array"},next:{title:"Math \u6570\u5b66",permalink:"/OrigamiStudio/en/docs/category/math-\u6570\u5b66"}},l={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-total-\u7d2f\u79ef\u603b\u8ba1"},"Running Total \u7d2f\u79ef\u603b\u8ba1"),(0,r.kt)("p",null,"Calculate the sums of a loop of numbers, where the sum at each index is the sum of the numbers preceding the current number."),(0,r.kt)("p",null,"\u8ba1\u7b97\u6570\u5b57\u5faa\u73af\u7684\u603b\u548c\uff0c\u5176\u4e2d\u6bcf\u4e2a\u7d22\u5f15\u5904\u7684\u603b\u548c\u662f\u5f53\u524d\u6570\u5b57\u4e4b\u524d\u7684\u6570\u5b57\u7684\u603b\u548c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(1547).Z,width:"220",height:"521"})),(0,r.kt)("p",null,"To calculate the total sum of all numbers, use the ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Sum"},"Sum")," patch."),(0,r.kt)("p",null,"\u8981\u8ba1\u7b97\u6240\u6709\u6570\u5b57\u7684\u603b\u548c\uff0c\u8bf7\u4f7f\u7528 Sum \u6a21\u5757\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(70955).Z,width:"1332",height:"210"})),(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A loop of numbers, indices, or booleans."),(0,r.kt)("p",null,"\u6570\u5b57\u3001\u7d22\u5f15\u6216\u5e03\u5c14\u503c\u7684\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"A loop of sums."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5faa\u73af\u7684\u603b\u548c\u3002"),(0,r.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(89293).Z,width:"104",height:"252"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Sum"},"Loop Sum \u5faa\u73af\u603b\u548c")))}s.isMDXComponent=!0},1547:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/running-total-1-ec0f94e6a9e68709ed3d6f1f82e39546.png"},89293:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/running-total-item-d4d1e4e85b4c5c65bfbbe276fcf86a98.png"},70955:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/running-total-bfc3d4d36aec4d3dfd4920499b1c20c5.png"}}]);