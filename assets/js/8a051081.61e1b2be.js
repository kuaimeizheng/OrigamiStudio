"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7609],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=n,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},16416:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const i={title:"Loop Trim \u5faa\u73af\u4fee\u526a",sidebar_position:20,tags:["loop"]},a="Loop Trim",l={unversionedId:"patches/Loop/Loop Trim",id:"patches/Loop/Loop Trim",title:"Loop Trim \u5faa\u73af\u4fee\u526a",description:"Loop Trim",source:"@site/docs/patches/Loop/Loop Trim.md",sourceDirName:"patches/Loop",slug:"/patches/Loop/Loop Trim",permalink:"/OrigamiStudio/docs/patches/Loop/Loop Trim",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Loop/Loop Trim.md",tags:[{label:"loop",permalink:"/OrigamiStudio/docs/tags/loop"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667659545,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:20,frontMatter:{title:"Loop Trim \u5faa\u73af\u4fee\u526a",sidebar_position:20,tags:["loop"]},sidebar:"patchesSidebar",previous:{title:"Loop Split \u5faa\u73af\u5206\u5272",permalink:"/OrigamiStudio/docs/patches/Loop/Loop Split"},next:{title:"Utilities \u5de5\u5177",permalink:"/OrigamiStudio/docs/category/utilities-\u5de5\u5177"}},p={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:4},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"JSON",id:"json",level:4},{value:"JSON",id:"json-1",level:4},{value:"JSON",id:"json-2",level:4},{value:"JSON",id:"json-3",level:4},{value:"JSON",id:"json-4",level:4}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loop-trim"},"Loop Trim"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Loop Trim"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Loop ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"Start ",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"Length ",(0,n.kt)("span",null,"15")),(0,n.kt)("li",null,"Custom ",(0,n.kt)("span",null,"0"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Loop ",(0,n.kt)("span",null,"0"))))),(0,n.kt)("div",{className:"port-descriptions"},(0,n.kt)("div",{className:"inputs"},(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("h4",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,n.kt)("h4",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15")),(0,n.kt)("div",{className:"outputs"},(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("h4",{id:"json"},"JSON"),(0,n.kt)("h4",{id:"json-1"},"JSON"),(0,n.kt)("h4",{id:"json-2"},"JSON"),(0,n.kt)("h4",{id:"json-3"},"JSON"),(0,n.kt)("h4",{id:"json-4"},"JSON"))))}c.isMDXComponent=!0}}]);