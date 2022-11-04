"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[64305],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(o),m=a,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return o?n.createElement(v,l(l({ref:t},u),{},{components:o})):n.createElement(v,l({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},35156:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={title:"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},l="Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664",p={unversionedId:"documentation/Loops/Loop Remove Last",id:"documentation/Loops/Loop Remove Last",title:"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664",description:"---",source:"@site/docs/documentation/Loops/Loop Remove Last.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Remove Last",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Remove Last",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Remove Last.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Over Array \u6570\u7ec4\u904d\u5386",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Over Array"},next:{title:"Loop Remove \u5faa\u73af\u79fb\u9664",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Remove"}},i={},s=[{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Remove Last \u5220\u9664\u672b\u5c3e",id:"remove-last-\u5220\u9664\u672b\u5c3e",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af-1",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loop-remove-last-\u5faa\u73af\u672b\u5c3e\u79fb\u9664"},"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Remove the last value from a loop."),(0,a.kt)("p",null,"\u4ece\u5faa\u73af\u4e2d\u5220\u9664\u6700\u540e\u4e00\u4e2a\u503c\u3002"),(0,a.kt)("p",null,"Right-click to change the type of the loop."),(0,a.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u5faa\u73af\u7684\u7c7b\u578b\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch loop"},(0,a.kt)("h3",null,"Loop Remove Last"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Loop",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"Remove Last",(0,a.kt)("span",{className:"patch-pulse-preview"},(0,a.kt)("span",{className:"dot"})))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Loop",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"Index",(0,a.kt)("span",null,"0"))))),(0,a.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,a.kt)("p",null,"A loop to remove the last value from."),(0,a.kt)("p",null,"\u9700\u8981\u5220\u9664\u6700\u540e\u4e00\u4e2a\u503c\u7684\u5faa\u73af\u3002"),(0,a.kt)("h3",{id:"remove-last-\u5220\u9664\u672b\u5c3e"},"Remove Last \u5220\u9664\u672b\u5c3e"),(0,a.kt)("p",null,"A pulse that removes the last value from the loop."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u4ece\u5faa\u73af\u4e2d\u5220\u9664\u6700\u540e\u4e00\u4e2a\u503c\u3002"),(0,a.kt)("h3",{id:"loop-\u5faa\u73af-1"},"Loop \u5faa\u73af"),(0,a.kt)("p",null,"The resulting loop with the last value."),(0,a.kt)("p",null,"\u5220\u9664\u6700\u540e\u4e00\u4e2a\u503c\u540e\u7684\u7ed3\u679c\u5faa\u73af\u3002"),(0,a.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,a.kt)("p",null,"A loop of indices"),(0,a.kt)("p",null,"\u7d22\u5f15\u5faa\u73af"),(0,a.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:o(36942).Z,width:"156",height:"494"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Insert"},"Loop Insert \u5faa\u73af\u63d2\u5165")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Insert%20at%20End"},"Loop Insert at End \u5faa\u73af\u7ed3\u5c3e\u63d2\u5165")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Remove"},"Loop Remove \u5faa\u73af\u79fb\u9664")))}c.isMDXComponent=!0},36942:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-remove-last-item-a969f833b279d3024fc66ba41dbc5cb7.png"}}]);