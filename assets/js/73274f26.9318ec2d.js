"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[73893],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),i=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=i(t.components);return a.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=i(n),c=l,s=m["".concat(u,".").concat(c)]||m[c]||k[c]||r;return n?a.createElement(s,o(o({ref:e},d),{},{components:n})):a.createElement(s,o({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,o[1]=p;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38869:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),r=n(11419);const o={title:"Loop Select \u5faa\u73af\u9009\u62e9",sidebar_position:75,last_update:{author:"\u84af\u7f8e\u653f"}},p="Loop Select \u5faa\u73af\u9009\u62e9",u={unversionedId:"documentation/Loops/Loop Select",id:"documentation/Loops/Loop Select",title:"Loop Select \u5faa\u73af\u9009\u62e9",description:"---",source:"@site/docs/documentation/Loops/Loop Select.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Select",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Select",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Select.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:75,frontMatter:{title:"Loop Select \u5faa\u73af\u9009\u62e9",sidebar_position:75,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Reverse \u5faa\u73af\u53cd\u8f6c",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Reverse"},next:{title:"Loop Shuffle \u5faa\u73af\u968f\u673a\u6392\u5e8f",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Shuffle"}},i={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Index Loop \u5faa\u73af\u7d22\u5f15",id:"index-loop-\u5faa\u73af\u7d22\u5f15",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],k={toc:d};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"loop-select-\u5faa\u73af\u9009\u62e9"},"Loop Select \u5faa\u73af\u9009\u62e9"),(0,l.kt)("hr",null),(0,l.kt)("div",{className:r.Z.main},(0,l.kt)("p",null,"Select one or more values from a loop."),(0,l.kt)("p",null,"\u4ece\u5faa\u73af\u4e2d\u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u3002"),(0,l.kt)("p",null,"Example A: Select one value."),(0,l.kt)("p",null,"\u793a\u4f8b A\uff1a\u9009\u62e9\u4e00\u4e2a\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Index Loop"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output Loop"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output Index"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("p",null,"Example B: Select and reorder multiple values."),(0,l.kt)("p",null,"\u793a\u4f8b B\uff1a\u9009\u62e9\u5e76\u91cd\u65b0\u6392\u5e8f\u591a\u4e2a\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Index Loop"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output Loop"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output Index"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"))))),(0,l.kt)("p",null,"Right-click the patch to change the expected type of the Input loop."),(0,l.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539 \u8f93\u5165\u5faa\u73af \u7684\u7c7b\u578b\u3002"),(0,l.kt)("div",{className:"patch-container"},(0,l.kt)("div",{className:"patch loop"},(0,l.kt)("h3",null,"Loop Select"),(0,l.kt)("ul",{className:"inputs"},(0,l.kt)("li",null,"Input",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Index Loop",(0,l.kt)("span",null,"0"))),(0,l.kt)("ul",{className:"outputs"},(0,l.kt)("li",null,"Loop",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Index",(0,l.kt)("span",null,"0"))))),(0,l.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"A loop of values."),(0,l.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"),(0,l.kt)("h3",{id:"index-loop-\u5faa\u73af\u7d22\u5f15"},"Index Loop \u5faa\u73af\u7d22\u5f15"),(0,l.kt)("p",null,"An index of the value to select. By default, the index is 0. Select multiple values using a loop of indices."),(0,l.kt)("p",null,"\u8981\u9009\u62e9\u503c\u7684\u7d22\u5f15\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7d22\u5f15\u4e3a 0\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u7d22\u5f15\u5faa\u73af\u9009\u62e9\u591a\u4e2a\u503c\u3002"),(0,l.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,l.kt)("p",null,"A value (or loop of values) from the loop at the selected index (or indices)."),(0,l.kt)("p",null,"\u4ece\u5faa\u73af\u6240\u9009\u7d22\u5f15\u5904(\u6216\u591a\u4e2a\u7d22\u5f15\u5904)\u83b7\u5f97\u7684\u4e00\u4e2a\u503c(\u6216\u503c\u7684\u5faa\u73af)\u3002"),(0,l.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,l.kt)("p",null,"The new index or set of indices to related to the output loop."),(0,l.kt)("p",null,"\u4e0e\u8f93\u51fa\u5faa\u73af\u76f8\u5173\u7684\u65b0\u7d22\u5f15\u6216\u4e00\u7ec4\u7d22\u5f15\u3002"),(0,l.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,l.kt)("p",null,"Anchor"),(0,l.kt)("p",null,"Bezier"),(0,l.kt)("p",null,"Boolean"),(0,l.kt)("p",null,"Color"),(0,l.kt)("p",null,"Edges"),(0,l.kt)("p",null,"Image"),(0,l.kt)("p",null,"Index"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("p",null,"Layer"),(0,l.kt)("p",null,"Number"),(0,l.kt)("p",null,"Photo Library Asset"),(0,l.kt)("p",null,"Point 3D"),(0,l.kt)("p",null,"Position"),(0,l.kt)("p",null,"Progress"),(0,l.kt)("p",null,"Pulse"),(0,l.kt)("p",null,"Size"),(0,l.kt)("p",null,"Size Axis"),(0,l.kt)("p",null,"Sound"),(0,l.kt)("p",null,"Space Axis"),(0,l.kt)("p",null,"Spacing"),(0,l.kt)("p",null,"Text"),(0,l.kt)("p",null,"Video"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")))}m.isMDXComponent=!0},11419:(t,e,n)=>{n.d(e,{Z:()=>a});const a={main:"main_cahh"}}}]);