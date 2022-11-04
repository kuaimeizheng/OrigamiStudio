"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[65765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Long Press Pro \u957f\u6309",sidebar_position:20,tags:["interaction"]},l="Long Press Pro",s={unversionedId:"patches/Interaction/Long Press Pro",id:"patches/Interaction/Long Press Pro",title:"Long Press Pro \u957f\u6309",description:"\u76f8\u5bf9\u5b98\u65b9\u7684 Long Press \u6a21\u5757\uff0c\u589e\u5f3a\u4e86\u4e00\u4e9b\u529f\u80fd\u3002",source:"@site/docs/patches/Interaction/Long Press Pro.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Long Press Pro",permalink:"/OrigamiStudio/docs/patches/Interaction/Long Press Pro",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Long Press Pro.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:20,frontMatter:{title:"Long Press Pro \u957f\u6309",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Interaction Recorder \u4ea4\u4e92\u8bb0\u5f55",permalink:"/OrigamiStudio/docs/patches/Interaction/Interaction Recorder"},next:{title:"Mouse Cursor \u9f20\u6807\u5149\u6807",permalink:"/OrigamiStudio/docs/patches/Interaction/Mouse Cursor"}},i={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:4},{value:"Tap \u8f7b\u6309",id:"tap-\u8f7b\u6309",level:4},{value:"Delay \u5ef6\u8fdf",id:"delay-\u5ef6\u8fdf",level:4},{value:"Allowable Movement \u5141\u8bb8\u504f\u79fb",id:"allowable-movement-\u5141\u8bb8\u504f\u79fb",level:4},{value:"Cancel \u53d6\u6d88",id:"cancel-\u53d6\u6d88",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Long Press \u957f\u6309",id:"long-press-\u957f\u6309",level:4},{value:"Tap \u8f7b\u6309",id:"tap-\u8f7b\u6309-1",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"long-press-pro"},"Long Press Pro"),(0,a.kt)("p",null,"\u76f8\u5bf9\u5b98\u65b9\u7684 Long Press \u6a21\u5757\uff0c\u589e\u5f3a\u4e86\u4e00\u4e9b\u529f\u80fd\u3002"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Long Press Pro"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Down ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Tap ",(0,a.kt)("span",{className:"patch-pulse-preview"},(0,a.kt)("span",{className:"dot"}))),(0,a.kt)("li",null,"Delay ",(0,a.kt)("span",null,"0.5s")),(0,a.kt)("li",null,"Allowable Movement ",(0,a.kt)("span",null,"10")),(0,a.kt)("li",null,"Cancel ",(0,a.kt)("span",{className:"patch-pulse-preview"},(0,a.kt)("span",{className:"dot"})))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Long Press ",(0,a.kt)("span",{className:"checkbox-off"})),(0,a.kt)("li",null,"Tap ",(0,a.kt)("span",{className:"patch-pulse-preview"},(0,a.kt)("span",{className:"dot"})))))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,a.kt)("h4",{id:"tap-\u8f7b\u6309"},"Tap \u8f7b\u6309"),(0,a.kt)("h4",{id:"delay-\u5ef6\u8fdf"},"Delay \u5ef6\u8fdf"),(0,a.kt)("h4",{id:"allowable-movement-\u5141\u8bb8\u504f\u79fb"},"Allowable Movement \u5141\u8bb8\u504f\u79fb"),(0,a.kt)("h4",{id:"cancel-\u53d6\u6d88"},"Cancel \u53d6\u6d88")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"long-press-\u957f\u6309"},"Long Press \u957f\u6309"),(0,a.kt)("h4",{id:"tap-\u8f7b\u6309-1"},"Tap \u8f7b\u6309"))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);