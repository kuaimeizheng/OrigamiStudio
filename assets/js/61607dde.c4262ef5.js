"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[58393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Text Field \u6587\u672c\u8f93\u5165\u6846",sidebar_position:10,tags:["components"]},a="Text Field \u6587\u672c\u8f93\u5165\u6846",s={unversionedId:"system/components/input",id:"system/components/input",title:"Text Field \u6587\u672c\u8f93\u5165\u6846",description:"---",source:"@site/docs/system/components/input.md",sourceDirName:"system/components",slug:"/system/components/input",permalink:"/OrigamiStudio/docs/system/components/input",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/system/components/input.md",tags:[{label:"components",permalink:"/OrigamiStudio/docs/tags/components"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:10,frontMatter:{title:"Text Field \u6587\u672c\u8f93\u5165\u6846",sidebar_position:10,tags:["components"]},sidebar:"systemSidebar",previous:{title:"Button \u6309\u94ae",permalink:"/OrigamiStudio/docs/system/components/button"},next:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/docs/system/components/switch"}},l={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:5},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:5},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:5}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-field-\u6587\u672c\u8f93\u5165\u6846"},"Text Field \u6587\u672c\u8f93\u5165\u6846"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u8f93\u5165\u6846\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u8f93\u5165\u6570\u636e\u3002"),(0,o.kt)("h4",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h5",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u53c2\u6570\u63cf\u8ff0\u3002"),(0,o.kt)("h5",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u53c2\u6570\u63cf\u8ff0\u3002"),(0,o.kt)("h4",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h5",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u53c2\u6570\u63cf\u8ff0\u3002"))}c.isMDXComponent=!0}}]);