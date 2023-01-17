"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[67339],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=u(a),s=l,c=m["".concat(i,".").concat(s)]||m[s]||k[s]||r;return a?n.createElement(c,o(o({ref:e},d),{},{components:a})):n.createElement(c,o({ref:e},d))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:l,o[1]=p;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32046:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),r=a(11419);const o={title:"Loop Filter \u5faa\u73af\u7b5b\u9009",sidebar_position:35,last_update:{author:"\u84af\u7f8e\u653f"}},p="Loop Filter \u5faa\u73af\u7b5b\u9009",i={unversionedId:"documentation/Loops/Loop Filter",id:"documentation/Loops/Loop Filter",title:"Loop Filter \u5faa\u73af\u7b5b\u9009",description:"---",source:"@site/docs/documentation/Loops/Loop Filter.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Filter",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Filter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Filter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:35,frontMatter:{title:"Loop Filter \u5faa\u73af\u7b5b\u9009",sidebar_position:35,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Dedupe"},next:{title:"Loop Insert \u5faa\u73af\u63d2\u5165",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Insert"}},u={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Include \u5305\u542b",id:"include-\u5305\u542b",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],k={toc:d};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"loop-filter-\u5faa\u73af\u7b5b\u9009"},"Loop Filter \u5faa\u73af\u7b5b\u9009"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times."),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u6a21\u5757\uff0c\u6709\u5f88\u591a\u529f\u80fd\uff01\u5b83\u53ef\u4ee5\u4ece\u5faa\u73af\u4e2d\u8fc7\u6ee4\u9879\u76ee\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u91cd\u590d\u9879\u76ee\u3002\u5b83\u751a\u81f3\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u91cd\u590d X \u6b21\u503c\u7684\u65b0\u5faa\u73af\u3002"),(0,l.kt)("p",null,"The idea is that you pass in two loops. The values loop is what you want to modify \u2014 you either want to remove items or repeat items in this loop. The second loop you pass in tells us how many times each value should appear (or if it should be removed by repeating 0 times)."),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u4f7f\u7528\u4e24\u4e2a\u5faa\u73af\u3002 values \u503c\u5faa\u73af\u662f\u60a8\u8981\u4fee\u6539\u7684\u5185\u5bb9\u2014\u2014\u5728\u6b64\u5faa\u73af\u4e2d\u5220\u9664\u9879\u76ee\u6216\u8005\u91cd\u590d\u9879\u76ee\u3002\u4f20\u5165\u7684\u7b2c\u4e8c\u4e2a\u5faa\u73af\u8bbe\u7f6e\u6bcf\u4e2a\u503c\u5e94\u8be5\u51fa\u73b0\u591a\u5c11\u6b21\uff08\u6216\u8005\u662f\u5426\u901a\u8fc7\u91cd\u590d 0 \u6b21\u6765\u5220\u9664\u5b83\uff09\u3002"),(0,l.kt)("p",null,"Example A: Filter to a subset of a loop."),(0,l.kt)("p",null,"\u793a\u4f8b A\uff1a\u4ece\u4e00\u4e2a\u5faa\u73af\u4e2d\u7b5b\u9009\u51fa\u7684\u5b50\u96c6\u3002"),(0,l.kt)("div",{className:r.Z.main},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Include"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange")))),(0,l.kt)("p",null,"Example B: Make a new loop by repeating a single value X times."),(0,l.kt)("p",null,"\u793a\u4f8b B\uff1a\u901a\u8fc7\u5c06\u5355\u4e2a\u503c\u91cd\u590d X \u6b21\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u5faa\u73af\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Include"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")))),(0,l.kt)("p",null,"Example C: Repeat and filter values by using a loop of numbers."),(0,l.kt)("p",null,"\u793a\u4f8b C\uff1a\u4f7f\u7528\u6570\u5b57\u5faa\u73af\u91cd\u590d\u548c\u8fc7\u6ee4\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"apple")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Include"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orange"))))),(0,l.kt)("p",null,"Right-click the patch to change the expected type of the Input loop."),(0,l.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539\u8f93\u5165\u5faa\u73af\u7684\u9884\u671f\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"Use Loop Builder to make a boolean or number loop."),(0,l.kt)("p",null,"\u4f7f\u7528 Loop Builder \u521b\u5efa\u4e00\u4e2a\u5e03\u5c14\u503c\u6216\u6570\u5b57\u5faa\u73af\u3002"),(0,l.kt)("div",{className:"patch-container"},(0,l.kt)("div",{className:"patch loop"},(0,l.kt)("h3",null,"Loop Filter"),(0,l.kt)("ul",{className:"inputs"},(0,l.kt)("li",null,"Input",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Include",(0,l.kt)("span",null,"1"))),(0,l.kt)("ul",{className:"outputs"},(0,l.kt)("li",null,"Loop",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Index",(0,l.kt)("span",null,"0"))))),(0,l.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"A loop of values."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"),(0,l.kt)("h3",{id:"include-\u5305\u542b"},"Include \u5305\u542b"),(0,l.kt)("p",null,"A loop of booleans (to include or not include), or a loop of numbers (to decide how many times a value is repeated)."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u5faa\u73af\uff08\u5305\u62ec\u6216\u4e0d\u5305\u62ec\uff09\uff0c\u6216\u4e00\u4e2a\u6570\u5b57\u5faa\u73af\uff08\u51b3\u5b9a\u4e00\u4e2a\u503c\u91cd\u590d\u591a\u5c11\u6b21\uff09\u3002"),(0,l.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,l.kt)("p",null,"The result loop, with values either filtered or repeated"),(0,l.kt)("p",null,"\u7ed3\u679c\u5faa\u73af\uff0c\u503c\u5df2\u88ab\u8fc7\u6ee4\u6216\u91cd\u590d\u3002"),(0,l.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,l.kt)("p",null,"A loop of indices for the result loop"),(0,l.kt)("p",null,"\u4e00\u4e2a\u7ed3\u679c\u5faa\u73af\u4e2d\u7684\u7d22\u5f15\u5faa\u73af\u3002"),(0,l.kt)("h3",{id:"\u652f\u6301\u7684\u7c7b\u578b"},"\u652f\u6301\u7684\u7c7b\u578b"),(0,l.kt)("p",null,"Anchor"),(0,l.kt)("p",null,"Bezier"),(0,l.kt)("p",null,"Boolean"),(0,l.kt)("p",null,"Color"),(0,l.kt)("p",null,"Edges"),(0,l.kt)("p",null,"Image"),(0,l.kt)("p",null,"Index"),(0,l.kt)("p",null,"JSON"),(0,l.kt)("p",null,"Layer"),(0,l.kt)("p",null,"Number"),(0,l.kt)("p",null,"Photo Library Asset"),(0,l.kt)("p",null,"Point 3D"),(0,l.kt)("p",null,"Position"),(0,l.kt)("p",null,"Progress"),(0,l.kt)("p",null,"Pulse"),(0,l.kt)("p",null,"Size"),(0,l.kt)("p",null,"Size Axis"),(0,l.kt)("p",null,"Sound"),(0,l.kt)("p",null,"Space Axis"),(0,l.kt)("p",null,"Spacing"),(0,l.kt)("p",null,"Text"),(0,l.kt)("p",null,"Video"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")))}m.isMDXComponent=!0},11419:(t,e,a)=>{a.d(e,{Z:()=>n});const n={main:"main_cahh"}}}]);