"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[95469],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return o?n.createElement(k,a(a({ref:t},s),{},{components:o})):n.createElement(k,a({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<l;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},43573:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const l={title:"Loop Reverse \u5faa\u73af\u53cd\u8f6c",sidebar_position:70,last_update:{author:"\u84af\u7f8e\u653f"}},a="Loop Reverse \u5faa\u73af\u53cd\u8f6c",p={unversionedId:"documentation/Loops/Loop Reverse",id:"documentation/Loops/Loop Reverse",title:"Loop Reverse \u5faa\u73af\u53cd\u8f6c",description:"---",source:"@site/docs/documentation/Loops/Loop Reverse.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop Reverse",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Reverse",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop Reverse.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:70,frontMatter:{title:"Loop Reverse \u5faa\u73af\u53cd\u8f6c",sidebar_position:70,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Remove Last \u5faa\u73af\u672b\u5c3e\u79fb\u9664",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Remove Last"},next:{title:"Loop Select \u5faa\u73af\u9009\u62e9",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Select"}},i={},u=[{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-reverse-\u5faa\u73af\u53cd\u8f6c"},"Loop Reverse \u5faa\u73af\u53cd\u8f6c"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Reverse order of values in a loop."),(0,r.kt)("p",null,"\u53cd\u8f6c\u5faa\u73af\u4e2d\u503c\u7684\u987a\u5e8f\u3002"),(0,r.kt)("p",null,"Right-click to change the type of the loop."),(0,r.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u4ee5\u66f4\u6539\u5faa\u73af\u7684\u7c7b\u578b\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch loop"},(0,r.kt)("h3",null,"Loop Reverse"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Loop",(0,r.kt)("span",null,"0"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,(0,r.kt)("span",null,"0"))))),(0,r.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,r.kt)("p",null,"A loop to reverse values for."),(0,r.kt)("p",null,"\u9700\u8981\u53cd\u8f6c\u503c\u987a\u5e8f\u7684\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"The resulting loop with values in reverse order."),(0,r.kt)("p",null,"\u53cd\u8f6c\u503c\u987a\u5e8f\u540e\u7684\u7ed3\u679c\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,r.kt)("p",null,"Anchor"),(0,r.kt)("p",null,"Bezier"),(0,r.kt)("p",null,"Boolean"),(0,r.kt)("p",null,"Color"),(0,r.kt)("p",null,"Edges"),(0,r.kt)("p",null,"Image"),(0,r.kt)("p",null,"Index"),(0,r.kt)("p",null,"JSON"),(0,r.kt)("p",null,"Layer"),(0,r.kt)("p",null,"Number"),(0,r.kt)("p",null,"Photo Library Asset"),(0,r.kt)("p",null,"Point 3D"),(0,r.kt)("p",null,"Position"),(0,r.kt)("p",null,"Progress"),(0,r.kt)("p",null,"Pulse"),(0,r.kt)("p",null,"Size"),(0,r.kt)("p",null,"Size Axis"),(0,r.kt)("p",null,"Sound"),(0,r.kt)("p",null,"Space Axis"),(0,r.kt)("p",null,"Spacing"),(0,r.kt)("p",null,"Text"),(0,r.kt)("p",null,"Video"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Array%20Reverse"},"Array Reverse \u6570\u7ec4\u53cd\u8f6c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Dedupe"},"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Shuffle"},"Loop Shuffle \u5faa\u73af\u968f\u673a\u6392\u5e8f")))}c.isMDXComponent=!0}}]);