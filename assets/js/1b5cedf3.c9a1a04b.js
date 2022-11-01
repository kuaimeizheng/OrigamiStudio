"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[86852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"Touch Indicator \u89e6\u63a7\u6307\u793a",sidebar_position:20,tags:["interaction"]},a="Touch Indicator",c={unversionedId:"patches/Interaction/Touch Indicator",id:"patches/Interaction/Touch Indicator",title:"Touch Indicator \u89e6\u63a7\u6307\u793a",description:"Touch Indicator",source:"@site/docs/patches/Interaction/Touch Indicator.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Touch Indicator",permalink:"/OrigamiStudio/docs/patches/Interaction/Touch Indicator",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Touch Indicator.md",tags:[{label:"interaction",permalink:"/OrigamiStudio/docs/tags/interaction"}],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667268661,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:20,frontMatter:{title:"Touch Indicator \u89e6\u63a7\u6307\u793a",sidebar_position:20,tags:["interaction"]},sidebar:"patchesSidebar",previous:{title:"Pinch Scale \u634f\u653e\u6bd4\u4f8b",permalink:"/OrigamiStudio/docs/patches/Interaction/Pinch Scale"},next:{title:"Touch Over \u63a5\u8fd1",permalink:"/OrigamiStudio/docs/patches/Interaction/Touch Over"}},l={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Color \u989c\u8272",id:"color-\u989c\u8272",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:3},{value:"Show on \u663e\u793a",id:"show-on-\u663e\u793a",level:3},{value:"Fade out \u6de1\u51fa",id:"fade-out-\u6de1\u51fa",level:3},{value:"Bounciness \u5f39\u529b",id:"bounciness-\u5f39\u529b",level:3},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:3},{value:"Mass \u8d28\u91cf",id:"mass-\u8d28\u91cf",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"touch-indicator"},"Touch Indicator"),(0,o.kt)("div",{class:"patch-container"},(0,o.kt)("div",{class:"patch layer"},(0,o.kt)("h3",null,"Touch Indicator"),(0,o.kt)("ul",{class:"inputs"},(0,o.kt)("li",null,"Enable"),(0,o.kt)("li",null,"Color"),(0,o.kt)("li",null,"Size"),(0,o.kt)("li",null,"Show on"),(0,o.kt)("li",null,"Fade out"),(0,o.kt)("li",null,"Bounciness"),(0,o.kt)("li",null,"Speed"),(0,o.kt)("li",null,"Mass")))),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("h3",{id:"color-\u989c\u8272"},"Color \u989c\u8272"),(0,o.kt)("h3",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,o.kt)("h3",{id:"show-on-\u663e\u793a"},"Show on \u663e\u793a"),(0,o.kt)("h3",{id:"fade-out-\u6de1\u51fa"},"Fade out \u6de1\u51fa"),(0,o.kt)("h3",{id:"bounciness-\u5f39\u529b"},"Bounciness \u5f39\u529b"),(0,o.kt)("h3",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,o.kt)("h3",{id:"mass-\u8d28\u91cf"},"Mass \u8d28\u91cf"),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);