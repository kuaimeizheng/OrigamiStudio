"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[95581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Checkbox \u591a\u9009\u6846",sidebar_position:20,tags:["components"]},c="Checkbox \u591a\u9009\u6846",a={unversionedId:"system/components/checkbox",id:"system/components/checkbox",title:"Checkbox \u591a\u9009\u6846",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/system/components/checkbox.md",sourceDirName:"system/components",slug:"/system/components/checkbox",permalink:"/OrigamiStudio/en/docs/system/components/checkbox",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/system/components/checkbox.md",tags:[{label:"components",permalink:"/OrigamiStudio/en/docs/tags/components"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:20,frontMatter:{title:"Checkbox \u591a\u9009\u6846",sidebar_position:20,tags:["components"]},sidebar:"systemSidebar",previous:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/en/docs/system/components/switch"},next:{title:"Tabbar \u6807\u7b7e\u680f",permalink:"/OrigamiStudio/en/docs/system/components/tabbar"}},s={},l=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:5},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:5},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:5}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"checkbox-\u591a\u9009\u6846"},"Checkbox \u591a\u9009\u6846"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u591a\u9009\u6846\u7ec4\u4ef6\u3002"),(0,o.kt)("h4",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h5",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u53c2\u6570\u63cf\u8ff0\u3002"),(0,o.kt)("h5",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u53c2\u6570\u63cf\u8ff0\u3002"),(0,o.kt)("h4",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h5",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u53c2\u6570\u63cf\u8ff0\u3002"))}u.isMDXComponent=!0}}]);