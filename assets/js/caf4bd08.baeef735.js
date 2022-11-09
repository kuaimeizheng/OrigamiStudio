"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[30691],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),p=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return n?o.createElement(k,l(l({ref:e},c),{},{components:n})):o.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var o=n(87462),a=(n(67294),n(3905)),r=n(11419);const l={title:"Running Total \u7d2f\u79ef\u603b\u8ba1",sidebar_position:100,last_update:{author:"\u84af\u7f8e\u653f"}},i="Running Total \u7d2f\u79ef\u603b\u8ba1",u={unversionedId:"documentation/Loops/Running Total",id:"documentation/Loops/Running Total",title:"Running Total \u7d2f\u79ef\u603b\u8ba1",description:"---",source:"@site/docs/documentation/Loops/Running Total.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Running Total",permalink:"/OrigamiStudio/docs/documentation/Loops/Running Total",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Running Total.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:100,frontMatter:{title:"Running Total \u7d2f\u79ef\u603b\u8ba1",sidebar_position:100,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop to Array"},next:{title:"Math \u6570\u5b66",permalink:"/OrigamiStudio/docs/category/math-\u6570\u5b66"}},p={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-total-\u7d2f\u79ef\u603b\u8ba1"},"Running Total \u7d2f\u79ef\u603b\u8ba1"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Calculate the sums of a loop of numbers, where the sum at each index is the sum of the numbers preceding the current number."),(0,a.kt)("p",null,"\u8ba1\u7b97\u6570\u5b57\u5faa\u73af\u7684\u603b\u548c\uff0c\u5176\u4e2d\u6bcf\u4e2a\u7d22\u5f15\u5904\u7684\u603b\u548c\u662f\u5f53\u524d\u6570\u5b57\u4e4b\u524d\u7684\u6570\u5b57\u7684\u603b\u548c\u3002"),(0,a.kt)("div",{className:r.Z.main},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Input"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"))))),(0,a.kt)("p",null,"To calculate the total sum of all numbers, use the ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Sum"},"Sum")," patch."),(0,a.kt)("p",null,"\u8981\u8ba1\u7b97\u6240\u6709\u6570\u5b57\u7684\u603b\u548c\uff0c\u8bf7\u4f7f\u7528 Sum \u6a21\u5757\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch loop"},(0,a.kt)("h3",null,"Running Total"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Input",(0,a.kt)("span",null,"0"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,(0,a.kt)("span",null,"0"))))),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A loop of numbers, indices, or booleans."),(0,a.kt)("p",null,"\u6570\u5b57\u3001\u7d22\u5f15\u6216\u5e03\u5c14\u503c\u7684\u5faa\u73af\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"A loop of sums."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5faa\u73af\u7684\u603b\u548c\u3002"),(0,a.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,a.kt)("p",null,"Anchor"),(0,a.kt)("p",null,"Color"),(0,a.kt)("p",null,"Index"),(0,a.kt)("p",null,"Number"),(0,a.kt)("p",null,"Point 3D"),(0,a.kt)("p",null,"Position"),(0,a.kt)("p",null,"Progress"),(0,a.kt)("p",null,"Size"),(0,a.kt)("p",null,"Size Axis"),(0,a.kt)("p",null,"Space Axis"),(0,a.kt)("p",null,"Spacing"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Sum"},"Loop Sum \u5faa\u73af\u603b\u548c")))}d.isMDXComponent=!0},11419:(t,e,n)=>{n.d(e,{Z:()=>o});const o={main:"main_cahh"}}}]);