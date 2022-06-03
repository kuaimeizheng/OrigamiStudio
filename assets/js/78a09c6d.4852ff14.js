"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3737],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},p="Loop Select \u5faa\u73af\u9009\u62e9",s={unversionedId:"Loops/Loop Select",id:"Loops/Loop Select",title:"Loop Select \u5faa\u73af\u9009\u62e9",description:"Select one or more values from a loop.",source:"@site/docs/Loops/Loop Select.md",sourceDirName:"Loops",slug:"/Loops/Loop Select",permalink:"/OrigamiStudio/docs/Loops/Loop Select",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Loops/Loop Select.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loop Reverse \u5faa\u73af\u53cd\u8f6c",permalink:"/OrigamiStudio/docs/Loops/Loop Reverse"},next:{title:"Loop Shuffle \u73af\u968f\u673a\u6392\u5e8f",permalink:"/OrigamiStudio/docs/Loops/Loop Shuffle"}},c={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Index Loop \u5faa\u73af\u7d22\u5f15",id:"index-loop-\u5faa\u73af\u7d22\u5f15",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loop-select-\u5faa\u73af\u9009\u62e9"},"Loop Select \u5faa\u73af\u9009\u62e9"),(0,i.kt)("p",null,"Select one or more values from a loop."),(0,i.kt)("p",null,"\u4ece\u5faa\u73af\u4e2d\u9009\u62e9\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u3002"),(0,i.kt)("p",null,"Example A: Select one value."),(0,i.kt)("p",null,"\u793a\u4f8b A\uff1a\u9009\u62e9\u4e00\u4e2a\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e8f15f43-1887-41ce-885c-517bb7c3766c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173528Z&X-Amz-Expires=86400&X-Amz-Signature=380a6ebda0098467257ead41e17e27154748cbb6dc086fd0a31f35ff78e8bedb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,i.kt)("p",null,"Example B: Select and reorder multiple values."),(0,i.kt)("p",null,"\u793a\u4f8b B\uff1a\u9009\u62e9\u5e76\u91cd\u65b0\u6392\u5e8f\u591a\u4e2a\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0972c5f9-94bf-438f-8fec-54a89062624f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173536Z&X-Amz-Expires=86400&X-Amz-Signature=0079a1617216fae7561cffc1d40563f48f295b3b37e1a592f19a75d96cc6a588&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,i.kt)("p",null,"Right-click the patch to change the expected type of the Input loop."),(0,i.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539 \u8f93\u5165\u5faa\u73af \u7684\u7c7b\u578b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7b7c9b1-f9a4-4974-851d-59c2158c3c64/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173546Z&X-Amz-Expires=86400&X-Amz-Signature=4f775fb49480010f0e57e2f6627ff888ec3ccfe9ee82c53bbebef926587d75ef&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A loop of values."),(0,i.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"),(0,i.kt)("h3",{id:"index-loop-\u5faa\u73af\u7d22\u5f15"},"Index Loop \u5faa\u73af\u7d22\u5f15"),(0,i.kt)("p",null,"An index of the value to select. By default, the index is 0. Select multiple values using a loop of indices."),(0,i.kt)("p",null,"\u8981\u9009\u62e9\u503c\u7684\u7d22\u5f15\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7d22\u5f15\u4e3a 0\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u7d22\u5f15\u5faa\u73af\u9009\u62e9\u591a\u4e2a\u503c\u3002"),(0,i.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,i.kt)("p",null,"A value (or loop of values) from the loop at the selected index (or indices)."),(0,i.kt)("p",null,"\u4ece\u5faa\u73af\u6240\u9009\u7d22\u5f15\u5904(\u6216\u591a\u4e2a\u7d22\u5f15\u5904)\u83b7\u5f97\u7684\u4e00\u4e2a\u503c(\u6216\u503c\u7684\u5faa\u73af)\u3002"),(0,i.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,i.kt)("p",null,"The new index or set of indices to related to the output loop."),(0,i.kt)("p",null,"\u4e0e\u8f93\u51fa\u5faa\u73af\u76f8\u5173\u7684\u65b0\u7d22\u5f15\u6216\u4e00\u7ec4\u7d22\u5f15\u3002"),(0,i.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2618d2d2-cfba-44fd-8aac-64658ebfad0b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173556Z&X-Amz-Expires=86400&X-Amz-Signature=36777bcf190f5cb68922f006fd43ba0f2600acf3e415956f7f6f4655ef433a08&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop"},"Loop \u5faa\u73af")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4e10ce59-8d47-48a6-bf49-19d5d631b54a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173605Z&X-Amz-Expires=86400&X-Amz-Signature=b348350b67373f254a8368a6689d4d5b8d676805f6987cc1f2fc9d3d13279138&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);