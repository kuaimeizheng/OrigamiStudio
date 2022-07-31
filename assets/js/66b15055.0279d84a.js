"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6961],{3905:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return m}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(i),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return i?r.createElement(f,l(l({ref:t},s),{},{components:i})):r.createElement(f,l({ref:t},s))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<a;u++)l[u]=i[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},71726:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=i(87462),n=i(63366),a=(i(67294),i(3905)),l=["components"],c={sidebar_position:24,tags:["utilities"]},o="Decimal Place",u={unversionedId:"patches/Utilities/Decimal Place",id:"patches/Utilities/Decimal Place",title:"Decimal Place",description:"Decimal Place",source:"@site/docs/patches/Utilities/Decimal Place.md",sourceDirName:"patches/Utilities",slug:"/patches/Utilities/Decimal Place",permalink:"/OrigamiStudio/docs/patches/Utilities/Decimal Place",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Utilities/Decimal Place.md",tags:[{label:"utilities",permalink:"/OrigamiStudio/docs/tags/utilities"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:24,frontMatter:{sidebar_position:24,tags:["utilities"]},sidebar:"patchesSidebar",previous:{title:"Auto Size",permalink:"/OrigamiStudio/docs/patches/Utilities/Auto Size"},next:{title:"Pulse Info",permalink:"/OrigamiStudio/docs/patches/Utilities/Pulse Info"}},s={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Number \u6570\u503c",id:"number-\u6570\u503c",level:4},{value:"Decimal Places \u5c0f\u6570\u4f4d\u6570",id:"decimal-places-\u5c0f\u6570\u4f4d\u6570",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Rounded Number \u53d6\u6574\u6570",id:"rounded-number-\u53d6\u6574\u6570",level:4}],d={toc:p};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decimal-place"},"Decimal Place"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"Decimal Place"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Number ",(0,a.kt)("span",null,"1")),(0,a.kt)("li",null,"Decimal Places ",(0,a.kt)("span",null,"1"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Rounded Number ",(0,a.kt)("span",null,"1.0"))))),(0,a.kt)("div",{className:"port-descriptions"},(0,a.kt)("div",{className:"inputs"},(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("h4",{id:"number-\u6570\u503c"},"Number \u6570\u503c"),(0,a.kt)("h4",{id:"decimal-places-\u5c0f\u6570\u4f4d\u6570"},"Decimal Places \u5c0f\u6570\u4f4d\u6570")),(0,a.kt)("div",{className:"outputs"},(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("h4",{id:"rounded-number-\u53d6\u6574\u6570"},"Rounded Number \u53d6\u6574\u6570"))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);