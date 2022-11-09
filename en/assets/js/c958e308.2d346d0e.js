"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[97761],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),s=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return i.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,f=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return n?i.createElement(f,o(o({ref:e},u),{},{components:n})):i.createElement(f,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39251:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={title:"Trackpad Action",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},o="Trackpad Action",l={unversionedId:"patches/Interaction/Trackpad Action",id:"patches/Interaction/Trackpad Action",title:"Trackpad Action",description:"---",source:"@site/docs/patches/Interaction/Trackpad Action.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Trackpad Action",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Trackpad Action",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Trackpad Action.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/en/docs/tags/interaction"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:20,frontMatter:{title:"Trackpad Action",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"},tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Touches Recorder \u89e6\u6478\u8bb0\u5f55",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Touches Recorder"},next:{title:"Trackpad \u89e6\u6478\u677f",permalink:"/OrigamiStudio/en/docs/patches/Interaction/Trackpad"}},c={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Container\u5bb9\u5668",id:"container\u5bb9\u5668",level:4},{value:"Mouse Cursor \u9f20\u6807\u5149\u6807",id:"mouse-cursor-\u9f20\u6807\u5149\u6807",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:4},{value:"Convert Position",id:"convert-position",level:4},{value:"Button \u6309\u94ae",id:"button-\u6309\u94ae",level:4},{value:"Left Up",id:"left-up",level:4},{value:"Left Middle",id:"left-middle",level:4},{value:"Left Right",id:"left-right",level:4},{value:"Right Up",id:"right-up",level:4},{value:"Right Middle",id:"right-middle",level:4},{value:"Right Down",id:"right-down",level:4}],u={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trackpad-action"},"Trackpad Action"),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch consumer"},(0,r.kt)("h3",null,"Trackpad Action"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Container",(0,r.kt)("span",null,"layer name")),(0,r.kt)("li",null,"Mouse Cursor",(0,r.kt)("span",null,"Hide"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Down",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Convert Position",(0,r.kt)("small",null,"X",(0,r.kt)("span",null,"0"),"Y",(0,r.kt)("span",null,"0"))),(0,r.kt)("li",null,"Button",(0,r.kt)("span",null,"null")," "),(0,r.kt)("li",null,"Left Up",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Left Middle",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Left Down",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Right Up",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Right Middle",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Right Down",(0,r.kt)("span",{className:"checkbox-off"}))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"container\u5bb9\u5668"},"Container\u5bb9\u5668"),(0,r.kt)("h4",{id:"mouse-cursor-\u9f20\u6807\u5149\u6807"},"Mouse Cursor \u9f20\u6807\u5149\u6807")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,r.kt)("h4",{id:"convert-position"},"Convert Position"),(0,r.kt)("h4",{id:"button-\u6309\u94ae"},"Button \u6309\u94ae"),(0,r.kt)("h4",{id:"left-up"},"Left Up"),(0,r.kt)("h4",{id:"left-middle"},"Left Middle"),(0,r.kt)("h4",{id:"left-right"},"Left Right"),(0,r.kt)("h4",{id:"right-up"},"Right Up"),(0,r.kt)("h4",{id:"right-middle"},"Right Middle"),(0,r.kt)("h4",{id:"right-down"},"Right Down"))),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);