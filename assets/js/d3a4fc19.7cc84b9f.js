"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[67339],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,i=new Array(l);i[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},32046:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const l={sidebar_position:5},i="Loop Filter \u5faa\u73af\u7b5b\u9009",r={unversionedId:"documentation/Loops/Loop Filter",id:"documentation/Loops/Loop Filter",title:"Loop Filter \u5faa\u73af\u7b5b\u9009",description:"This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times.",source:"@site/docs/documentation/Loops/Loop Filter.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Filter",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Filter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Filter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Dedupe"},next:{title:"Loop Insert at End \u5faa\u73af\u7ed3\u5c3e\u63d2\u5165",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Insert at End"}},p={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Include \u5305\u542b###",id:"include-\u5305\u542b",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loop-filter-\u5faa\u73af\u7b5b\u9009"},"Loop Filter \u5faa\u73af\u7b5b\u9009"),(0,a.kt)("p",null,"This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times."),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u6a21\u5757\uff0c\u6709\u5f88\u591a\u529f\u80fd\uff01\u5b83\u53ef\u4ee5\u4ece\u5faa\u73af\u4e2d\u8fc7\u6ee4\u9879\u76ee\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u91cd\u590d\u9879\u76ee\u3002\u5b83\u751a\u81f3\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u91cd\u590d X \u6b21\u503c\u7684\u65b0\u5faa\u73af\u3002"),(0,a.kt)("p",null,"The idea is that you pass in two loops. The values loop is what you want to modify \u2014 you either want to remove items or repeat items in this loop. The second loop you pass in tells us how many times each value should appear (or if it should be removed by repeating 0 times)."),(0,a.kt)("p",null,"\u4f60\u9700\u8981\u4f7f\u7528\u4e24\u4e2a\u5faa\u73af\u3002 values\u503c \u5faa\u73af\u662f\u60a8\u8981\u4fee\u6539\u7684\u5185\u5bb9\u2014\u2014\u5728\u6b64\u5faa\u73af\u4e2d\u5220\u9664\u9879\u76ee\u6216\u8005\u91cd\u590d\u9879\u76ee\u3002\u4f20\u5165\u7684\u7b2c\u4e8c\u4e2a\u5faa\u73af\u8bbe\u7f6e\u6bcf\u4e2a\u503c\u5e94\u8be5\u51fa\u73b0\u591a\u5c11\u6b21\uff08\u6216\u8005\u662f\u5426\u901a\u8fc7\u91cd\u590d 0 \u6b21\u6765\u5220\u9664\u5b83\uff09\u3002"),(0,a.kt)("p",null,"Example A: Filter to a subset of a loop."),(0,a.kt)("p",null,"\u793a\u4f8b A\uff1a\u7b5b\u9009\u5230\u5faa\u73af\u7684\u5b50\u96c6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:o(63076).Z,width:"190",height:"606"})),(0,a.kt)("p",null,"Example B: Make a new loop by repeating a single value X times."),(0,a.kt)("p",null,"\u793a\u4f8b B\uff1a\u901a\u8fc7\u5c06\u5355\u4e2a\u503c\u91cd\u590d X \u6b21\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u5faa\u73af\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:o(19135).Z,width:"190",height:"562"})),(0,a.kt)("p",null,"Example C: Repeat and filter values by using a loop of numbers."),(0,a.kt)("p",null,"\u793a\u4f8b C\uff1a\u4f7f\u7528\u6570\u5b57\u5faa\u73af\u91cd\u590d\u548c\u8fc7\u6ee4\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:o(53560).Z,width:"190",height:"606"})),(0,a.kt)("p",null,"Right-click the patch to change the expected type of the Input loop."),(0,a.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539\u8f93\u5165\u5faa\u73af\u7684\u9884\u671f\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"Use Loop Builder to make a boolean or number loop."),(0,a.kt)("p",null,"\u4f7f\u7528 Loop Builder \u521b\u5efa\u4e00\u4e2a\u5e03\u5c14\u503c\u6216\u6570\u5b57\u5faa\u73af\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:o(14882).Z,width:"1486",height:"242"})),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A loop of values."),(0,a.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"),(0,a.kt)("h3",{id:"include-\u5305\u542b"},"Include \u5305\u542b###"),(0,a.kt)("p",null,"A loop of booleans (to include or not include), or a loop of numbers (to decide how many times a value is repeated)."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u5faa\u73af\uff08\u5305\u62ec\u6216\u4e0d\u5305\u62ec\uff09\uff0c\u6216\u4e00\u4e2a\u6570\u5b57\u5faa\u73af\uff08\u51b3\u5b9a\u4e00\u4e2a\u503c\u91cd\u590d\u591a\u5c11\u6b21\uff09\u3002"),(0,a.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,a.kt)("p",null,"The result loop, with values either filtered or repeated"),(0,a.kt)("p",null,"\u7ed3\u679c\u5faa\u73af\uff0c\u503c\u5df2\u88ab\u8fc7\u6ee4\u6216\u91cd\u590d\u3002"),(0,a.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,a.kt)("p",null,"A loop of indices for the result loop"),(0,a.kt)("p",null,"\u7ed3\u679c\u5faa\u73af\u7684\u7d22\u5f15\u5faa\u73af"),(0,a.kt)("h3",{id:"\u652f\u6301\u7684\u7c7b\u578b"},"\u652f\u6301\u7684\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:o(73308).Z,width:"156",height:"494"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")))}d.isMDXComponent=!0},63076:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-filter-1-a4325af0f80a2b4a1667eddfc162148b.png"},19135:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-filter-2-2a31ed31a782315439ea0b55928ec76e.png"},53560:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-filter-3-a4325af0f80a2b4a1667eddfc162148b.png"},73308:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-filter-item-14fab3109fdb15df1d221682d62bee9d.png"},14882:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-filter-c8f1bf342b3877494386a65fe73b708a.png"}}]);