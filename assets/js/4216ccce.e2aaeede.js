"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[12537],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(o),m=n,y=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return o?r.createElement(y,l(l({ref:e},c),{},{components:o})):r.createElement(y,l({ref:e},c))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},76638:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",sidebar_position:90,last_update:{author:"\u84af\u7f8e\u653f"}},l="Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",i={unversionedId:"documentation/Loops/Loop to Array",id:"documentation/Loops/Loop to Array",title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",description:"---",source:"@site/docs/documentation/Loops/Loop to Array.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop to Array",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop to Array",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop to Array.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:90,frontMatter:{title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",sidebar_position:90,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop Sum \u5faa\u73af\u603b\u548c",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Sum"},next:{title:"Running Total \u7d2f\u79ef\u603b\u8ba1",permalink:"/OrigamiStudio/docs/documentation/Loops/Running Total"}},p={},u=[{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Array \u6570\u7ec4",id:"array-\u6570\u7ec4",level:3},{value:"\u652f\u6301\u7c7b\u578b",id:"\u652f\u6301\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function s(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loop-to-array-\u5faa\u73af\u8f6c\u6362\u6570\u7ec4"},"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Convert a loop to an array."),(0,n.kt)("p",null,"\u5c06\u5faa\u73af\u8f6c\u6362\u4e3a\u6570\u7ec4\u3002"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch loop"},(0,n.kt)("h3",null,"Loop to Array"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Loop",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Array",(0,n.kt)("span",null,"[...]"))))),(0,n.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,n.kt)("p",null,"A loop of values."),(0,n.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af"),(0,n.kt)("h3",{id:"array-\u6570\u7ec4"},"Array \u6570\u7ec4"),(0,n.kt)("p",null,"A JSON array of values."),(0,n.kt)("p",null,"\u5305\u542b\u503c\u7684 JSON \u6570\u7ec4\u3002"),(0,n.kt)("h3",{id:"\u652f\u6301\u7c7b\u578b"},"\u652f\u6301\u7c7b\u578b"),(0,n.kt)("p",null,"Anchor"),(0,n.kt)("p",null,"Bezier"),(0,n.kt)("p",null,"Boolean"),(0,n.kt)("p",null,"Color"),(0,n.kt)("p",null,"Index"),(0,n.kt)("p",null,"JSON"),(0,n.kt)("p",null,"Layer"),(0,n.kt)("p",null,"Number"),(0,n.kt)("p",null,"Point 3D"),(0,n.kt)("p",null,"Position"),(0,n.kt)("p",null,"Progress"),(0,n.kt)("p",null,"Size"),(0,n.kt)("p",null,"Size Axis"),(0,n.kt)("p",null,"Space Axis"),(0,n.kt)("p",null,"Spacing"),(0,n.kt)("p",null,"Text"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")))}s.isMDXComponent=!0}}]);