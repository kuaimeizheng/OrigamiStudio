"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[34015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Power \u5e42\u503c",u={unversionedId:"documentation/Math/Power",id:"documentation/Math/Power",title:"Power \u5e42\u503c",description:"Calculate the first value (base) to the second value (exponent)\u2019s power (ex: 2^3).",source:"@site/docs/documentation/Math/Power.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Power",permalink:"/OrigamiStudio/docs/documentation/Math/Power",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Power.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575955,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Mod \u6c42\u4f59\u51fd\u6570",permalink:"/OrigamiStudio/docs/documentation/Math/Mod"},next:{title:"Round \u56db\u820d\u4e94\u5165",permalink:"/OrigamiStudio/docs/documentation/Math/Round"}},l={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"power-\u5e42\u503c"},"Power \u5e42\u503c"),(0,o.kt)("p",null,"Calculate the first value (base) to the second value (exponent)\u2019s power (ex: 2^3)."),(0,o.kt)("p",null,"\u8ba1\u7b97\u7b2c\u4e00\u4e2a\u503c ( \u57fa\u6570 ) \u5230\u7b2c\u4e8c\u4e2a\u503c ( \u6307\u6570 ) \u7684\u5e42\u503c\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a2\xb3\uff0c\u53ef\u4ee5\u5199\u4e3a\uff1aPOWER(2,3)\u3002"),(0,o.kt)("p",null,"Right-click to add ports for additional exponents to chain, or change the type (ex: number, position, rotation)."),(0,o.kt)("p",null,"\u53f3\u952e\u9009\u62e9\u66f4\u591a\u7684\u7aef\u53e3\u6570\u91cf\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\uff0c\u4f4d\u7f6e\uff0c\u89d2\u5ea6\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(44274).Z,width:"1494",height:"230"})),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The base value."),(0,o.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A value that represents the exponent to raise the previous number by."),(0,o.kt)("p",null,"\u4e00\u4e2a\u503c\uff0c\u8868\u793a\u5c06\u5148\u524d\u7684\u6570\u5b57\u4e58\u4ee5\u8f93\u5165\u7684\u6b21\u65b9\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The base value to the subsequent exponents\u2019 powers."),(0,o.kt)("p",null,"\u57fa\u7840\u503c\u4e58\u4ee5\u8f93\u5165\u7684\u6b21\u65b9\u540e\u7684\u5e42\u503c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Square%20Root"},"\u221a \u6839\u53f7")))}s.isMDXComponent=!0},44274:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/power-f05ff128de437a038c4d877cb24d6663.png"}}]);