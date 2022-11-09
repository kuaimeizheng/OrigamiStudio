"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8883],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),d=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=d(n),s=a,h=m["".concat(l,".").concat(s)]||m[s]||c[s]||o;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74634:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"Mod \u6c42\u4f59\u51fd\u6570",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Mod \u6c42\u4f59\u51fd\u6570",u={unversionedId:"documentation/Math/Mod",id:"documentation/Math/Mod",title:"Mod \u6c42\u4f59\u51fd\u6570",description:"---",source:"@site/docs/documentation/Math/Mod.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Mod",permalink:"/OrigamiStudio/docs/documentation/Math/Mod",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Mod.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667996896,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Mod \u6c42\u4f59\u51fd\u6570",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Min \u6700\u5c0f\u503c",permalink:"/OrigamiStudio/docs/documentation/Math/Min"},next:{title:"Power \u5e42\u503c",permalink:"/OrigamiStudio/docs/documentation/Math/Power"}},l={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:d};function c(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mod-\u6c42\u4f59\u51fd\u6570"},"Mod \u6c42\u4f59\u51fd\u6570"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Calculate the remainder when one or more values are divided."),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u88ab\u9664\u65f6\uff0c\u8ba1\u7b97\u4f59\u6570\u3002"),(0,a.kt)("p",null,"\u516c\u5f0f\uff1a\u3010MOD(n,d) = n - d","*","INT(n/d)\u3011"),(0,a.kt)("p",null,"\u4f8b\uff1aMOD(3, 2) = 1"),(0,a.kt)("p",null,"Right-click to add more values, or change the type (ex: number, position, rotation)."),(0,a.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u53ef\u6dfb\u52a0\u66f4\u591a\u503c\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u503c\u3001\u4f4d\u7f6e\u3001\u65cb\u8f6c\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(91942).Z,width:"1502",height:"228"})),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"The base value to divide (numerator). By default, the value is a number."),(0,a.kt)("p",null,"\u88ab\u9664\u7684\u57fa\u7840\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1an"),(0,a.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"The first value to divide by (denominator). By default, the value is a number."),(0,a.kt)("p",null,"\u63a5\u5165\u7b2c\u4e00\u4e2a\u8981\u9664\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1ad"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The remainder of the values."),(0,a.kt)("p",null,"\u4f5c\u9664\u6cd5\u540e\u7684\u4f59\u6570\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/+"},"+ \u52a0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/-"},"\u2212 \u51cf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/x"},"x \u4e58")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/%C3%B7"},"\xf7 \u9664")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Round"},"Round \u56db\u820d\u4e94\u5165")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Min"},"Min \u6700\u5c0f\u503c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Max"},"Max \u6700\u5927")))}c.isMDXComponent=!0},91942:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/mod-b56e823dae251ce941a2be96c3c03381.png"}}]);