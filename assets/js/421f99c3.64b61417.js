"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[65809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Spring Conversion",sidebar_position:20,tags:["animation"]},o="Spring Conversion",l={unversionedId:"patches/Animation/Spring Conversion",id:"patches/Animation/Spring Conversion",title:"Spring Conversion",description:"---",source:"@site/docs/patches/Animation/Spring Conversion.md",sourceDirName:"patches/Animation",slug:"/patches/Animation/Spring Conversion",permalink:"/OrigamiStudio/docs/patches/Animation/Spring Conversion",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Animation/Spring Conversion.md",tags:[{label:"animation",permalink:"/OrigamiStudio/docs/tags/animation"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:20,frontMatter:{title:"Spring Conversion",sidebar_position:20,tags:["animation"]},sidebar:"patchesSidebar",previous:{title:"Skeleton \u9aa8\u67b6\u5c4f",permalink:"/OrigamiStudio/docs/patches/Animation/Skeleton"},next:{title:"Stacked Animation \u5806\u53e0\u52a8\u753b",permalink:"/OrigamiStudio/docs/patches/Animation/Stacked Animation"}},s={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"On/Off \u5f00/\u5173",id:"onoff-\u5f00\u5173",level:4},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:4},{value:"Damping \u963b\u5c3c",id:"damping-\u963b\u5c3c",level:4},{value:"Stiffness \u521a\u6027",id:"stiffness-\u521a\u6027",level:4},{value:"Mass \u8d28\u91cf",id:"mass-\u8d28\u91cf",level:4},{value:"Velocity \u901f\u5ea6",id:"velocity-\u901f\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Value \u8f93\u51fa\u503c",id:"value-\u8f93\u51fa\u503c",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spring-conversion"},"Spring Conversion"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Spring Conversion"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"On/Off",(0,r.kt)("span",{className:"patch-pulse-preview"},(0,r.kt)("span",{className:"dot"}))),(0,r.kt)("li",null,"Duration",(0,r.kt)("span",null,"0.45s")),(0,r.kt)("li",null,"Damping",(0,r.kt)("span",null,"10")),(0,r.kt)("li",null,"Stiffness",(0,r.kt)("span",null,"100")),(0,r.kt)("li",null,"Mass",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Velocity",(0,r.kt)("span",null,"0"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Value",(0,r.kt)("span",null,"0")," ")))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"onoff-\u5f00\u5173"},"On/Off \u5f00/\u5173"),(0,r.kt)("h4",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,r.kt)("h4",{id:"damping-\u963b\u5c3c"},"Damping \u963b\u5c3c"),(0,r.kt)("h4",{id:"stiffness-\u521a\u6027"},"Stiffness \u521a\u6027"),(0,r.kt)("h4",{id:"mass-\u8d28\u91cf"},"Mass \u8d28\u91cf"),(0,r.kt)("h4",{id:"velocity-\u901f\u5ea6"},"Velocity \u901f\u5ea6")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"value-\u8f93\u51fa\u503c"},"Value \u8f93\u51fa\u503c"))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);