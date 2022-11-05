"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,h=m["".concat(l,".").concat(s)]||m[s]||c[s]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5},i="Mod \u6c42\u4f59\u51fd\u6570",u={unversionedId:"documentation/Math/Mod",id:"documentation/Math/Mod",title:"Mod \u6c42\u4f59\u51fd\u6570",description:"Calculate the remainder when one or more values are divided.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Math/Mod.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Mod",permalink:"/OrigamiStudio/en/docs/documentation/Math/Mod",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Mod.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667659545,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Min \u6700\u5c0f\u503c",permalink:"/OrigamiStudio/en/docs/documentation/Math/Min"},next:{title:"Power \u5e42\u503c",permalink:"/OrigamiStudio/en/docs/documentation/Math/Power"}},l={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mod-\u6c42\u4f59\u51fd\u6570"},"Mod \u6c42\u4f59\u51fd\u6570"),(0,a.kt)("p",null,"Calculate the remainder when one or more values are divided."),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u88ab\u9664\u65f6\uff0c\u8ba1\u7b97\u4f59\u6570\u3002"),(0,a.kt)("p",null,"\u516c\u5f0f\uff1a\u3010MOD(n,d) = n - d*INT(n/d)\u3011"),(0,a.kt)("p",null,"\u4f8b\uff1aMOD(3, 2) = 1"),(0,a.kt)("p",null,"Right-click to add more values, or change the type (ex: number, position, rotation)."),(0,a.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u53ef\u6dfb\u52a0\u66f4\u591a\u503c\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u503c\u3001\u4f4d\u7f6e\u3001\u65cb\u8f6c\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(91942).Z,width:"1502",height:"228"})),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"The base value to divide (numerator). By default, the value is a number."),(0,a.kt)("p",null,"\u88ab\u9664\u7684\u57fa\u7840\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1an"),(0,a.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"The first value to divide by (denominator). By default, the value is a number."),(0,a.kt)("p",null,"\u63a5\u5165\u7b2c\u4e00\u4e2a\u8981\u9664\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1ad"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The remainder of the values."),(0,a.kt)("p",null,"\u4f5c\u9664\u6cd5\u540e\u7684\u4f59\u6570\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/+"},"+ \u52a0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/-"},"\u2212 \u51cf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/x"},"x \u4e58")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/%C3%B7"},"\xf7 \u9664")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Round"},"Round \u56db\u820d\u4e94\u5165")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Min"},"Min \u6700\u5c0f\u503c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Max"},"Max \u6700\u5927")))}c.isMDXComponent=!0},91942:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mod-b56e823dae251ce941a2be96c3c03381.png"}}]);