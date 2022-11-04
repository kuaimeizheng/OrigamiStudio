"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[53570],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},79981:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={title:"Loop Join \u5faa\u73af\u52a0\u5165",sidebar_position:20,tags:["loop"]},a="Loop Join",p={unversionedId:"patches/Loop/Loop Join",id:"patches/Loop/Loop Join",title:"Loop Join \u5faa\u73af\u52a0\u5165",description:"Loop Join",source:"@site/docs/patches/Loop/Loop Join.md",sourceDirName:"patches/Loop",slug:"/patches/Loop/Loop Join",permalink:"/OrigamiStudio/docs/patches/Loop/Loop Join",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Loop/Loop Join.md",tags:[{label:"loop",permalink:"/OrigamiStudio/docs/tags/loop"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:20,frontMatter:{title:"Loop Join \u5faa\u73af\u52a0\u5165",sidebar_position:20,tags:["loop"]},sidebar:"patchesSidebar",previous:{title:"Loop Info \u5faa\u73af\u4fe1\u606f",permalink:"/OrigamiStudio/docs/patches/Loop/Loop Info"},next:{title:"Loop Remove Insert At End \u79fb\u9664\u63d2\u5165",permalink:"/OrigamiStudio/docs/patches/Loop/Loop Remove Insert At End"}},l={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:4},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"JSON",id:"json",level:4},{value:"JSON",id:"json-1",level:4},{value:"JSON",id:"json-2",level:4},{value:"JSON",id:"json-3",level:4},{value:"JSON",id:"json-4",level:4}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-join"},"Loop Join"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Loop Join"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,(0,r.kt)("span",null,"50"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,(0,r.kt)("span",null,"0"))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,r.kt)("h4",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"json"},"JSON"),(0,r.kt)("h4",{id:"json-1"},"JSON"),(0,r.kt)("h4",{id:"json-2"},"JSON"),(0,r.kt)("h4",{id:"json-3"},"JSON"),(0,r.kt)("h4",{id:"json-4"},"JSON"))))}u.isMDXComponent=!0}}]);