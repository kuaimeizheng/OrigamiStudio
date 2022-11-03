"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[86160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),s=o,f=m["".concat(d,".").concat(s)]||m[s]||c[s]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Round \u56db\u820d\u4e94\u5165",u={unversionedId:"documentation/Math/Round",id:"documentation/Math/Round",title:"Round \u56db\u820d\u4e94\u5165",description:"Round a number.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Math/Round.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Round",permalink:"/OrigamiStudio/en/docs/documentation/Math/Round",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Round.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667493511,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Power \u5e42\u503c",permalink:"/OrigamiStudio/en/docs/documentation/Math/Power"},next:{title:"Sine \u6b63\u5f26",permalink:"/OrigamiStudio/en/docs/documentation/Math/Sine"}},d={},l=[{value:"Input",id:"input",level:3},{value:"Rounded \u56db\u820d\u4e94\u5165",id:"rounded-\u56db\u820d\u4e94\u5165",level:3},{value:"Rounded Down \u5411\u4e0b\u53d6\u6574###",id:"rounded-down-\u5411\u4e0b\u53d6\u6574",level:3},{value:"Rounded Up \u5411\u4e0a\u53d6\u6574###",id:"rounded-up-\u5411\u4e0a\u53d6\u6574",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"round-\u56db\u820d\u4e94\u5165"},"Round \u56db\u820d\u4e94\u5165"),(0,o.kt)("p",null,"Round a number."),(0,o.kt)("p",null,"\u56db\u820d\u4e94\u5165\u6570\u5b57\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(6027).Z,width:"1500",height:"256"})),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("p",null,"The number to round."),(0,o.kt)("p",null,"\u8f93\u5165\u7684\u6570\u5b57\u3002"),(0,o.kt)("h3",{id:"rounded-\u56db\u820d\u4e94\u5165"},"Rounded \u56db\u820d\u4e94\u5165"),(0,o.kt)("p",null,"The number rounded to the nearest integer."),(0,o.kt)("p",null,"\u6570\u5b57\u56db\u820d\u4e94\u5165\u4e3a\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a4.3 \u2192 4\u30014.7 \u2192 5\u3002"),(0,o.kt)("h3",{id:"rounded-down-\u5411\u4e0b\u53d6\u6574"},"Rounded Down \u5411\u4e0b\u53d6\u6574###"),(0,o.kt)("p",null,"The number rounded down."),(0,o.kt)("p",null,"\u6570\u5b57\u5411\u4e0b\u53d6\u6574\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a4.3 \u2192 4\u30014.7 \u2192 4\u3002"),(0,o.kt)("h3",{id:"rounded-up-\u5411\u4e0a\u53d6\u6574"},"Rounded Up \u5411\u4e0a\u53d6\u6574###"),(0,o.kt)("p",null,"The number rounded up."),(0,o.kt)("p",null,"\u6570\u5b57\u5411\u4e0a\u53d6\u6574\u3002"),(0,o.kt)("p",null,"4.3 \u2192 5\u30014.7 \u2192 5\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/+"},"+ \u52a0")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/-"},"\u2212 \u51cf")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/x"},"x \u4e58")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/%C3%B7"},"\xf7 \u9664")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Mod"},"Mod \u6c42\u4f59\u51fd\u6570")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Min"},"Min \u6700\u5c0f\u503c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Max"},"Max \u6700\u5927")))}c.isMDXComponent=!0},6027:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/round-dc8e1a4724a9f6aa8432f31b51cfbc44.png"}}]);