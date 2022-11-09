"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[77036],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(v,a(a({ref:e},s),{},{components:n})):o.createElement(v,a({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61366:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",u={unversionedId:"documentation/Animation/Bouncy Converter",id:"documentation/Animation/Bouncy Converter",title:"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",description:"Convert Pop Animation values to spring tension and friction.",source:"@site/docs/documentation/Animation/Bouncy Converter.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Bouncy Converter",permalink:"/OrigamiStudio/docs/documentation/Animation/Bouncy Converter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Bouncy Converter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Animation \u52a8\u753b",permalink:"/OrigamiStudio/docs/category/animation-\u52a8\u753b"},next:{title:"Classic Animation \u7ecf\u5178\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Classic Animation"}},l={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:4},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Friction \u5f20\u529b",id:"friction-\u5f20\u529b",level:4},{value:"Tension \u6469\u64e6\u529b",id:"tension-\u6469\u64e6\u529b",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bouncy-converter-\u5f39\u6027\u8f6c\u6362\u5668"},"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668"),(0,r.kt)("p",null,"Convert Pop Animation values to spring tension and friction."),(0,r.kt)("p",null,"\u628a Pop Animation \u7684\u503c\u8f6c\u6362\u4e3a\u5f39\u7c27\u5f20\u529b\u548c\u6469\u64e6\u529b\u3002"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Bouncy Converter"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Bounciness"),(0,r.kt)("li",null,"Speed")),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Friction"),(0,r.kt)("li",null,"Tension")))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,r.kt)("p",null,"A number that represents bounciness from Pop Animation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u5f39\u6027\uff0c\u503c\u8d8a\u5927\u8d8a\u6709\u5f39\u6027\u3002"),(0,r.kt)("h4",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,r.kt)("p",null,"A number that represents speed of Pop Animation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u901f\u5ea6\uff0c\u503c\u8d8a\u5927\u901f\u5ea6\u8d8a\u5feb\u3002")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"friction-\u5f20\u529b"},"Friction \u5f20\u529b"),(0,r.kt)("p",null,"A number that represents friction."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5f20\u529b\u3002"),(0,r.kt)("h4",{id:"tension-\u6469\u64e6\u529b"},"Tension \u6469\u64e6\u529b"),(0,r.kt)("p",null,"A number that represents spring tension."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6469\u64e6\u529b\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Spring%20Converter"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668")))}p.isMDXComponent=!0}}]);