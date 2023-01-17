"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[28249],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(n),m=r,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=s;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},72094:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Max \u6700\u5927\u503c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Max \u6700\u5927\u503c",u={unversionedId:"documentation/Math/Max",id:"documentation/Math/Max",title:"Max \u6700\u5927\u503c",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Math/Max.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Max",permalink:"/OrigamiStudio/en/docs/documentation/Math/Max",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Max.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1673935232,formattedLastUpdatedAt:"Jan 17, 2023",sidebarPosition:5,frontMatter:{title:"Max \u6700\u5927\u503c",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Math Expression \u6570\u5b66\u8868\u8fbe\u5f0f",permalink:"/OrigamiStudio/en/docs/documentation/Math/Math Expression"},next:{title:"Min \u6700\u5c0f\u503c",permalink:"/OrigamiStudio/en/docs/documentation/Math/Min"}},l={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function d(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"max-\u6700\u5927\u503c"},"Max \u6700\u5927\u503c"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Compare two or more values and output the largest one. Although the patch\u2019s default type is number, it can be used to compare position, point, color and index values as well."),(0,r.kt)("p",null,"\u6bd4\u8f83\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u5e76\u8f93\u51fa\u6700\u5927\u503c\u3002\u867d\u7136\u6a21\u5757\u7684\u9ed8\u8ba4\u7c7b\u578b\u662f\u6570\u5b57\uff0c\u4f46\u5b83\u4e5f\u53ef\u4ee5\u7528\u4e8e\u6bd4\u8f83\u4f4d\u7f6e\uff0c\u70b9\uff0c\u989c\u8272\u548c\u7d22\u5f15\u503c\u3002"),(0,r.kt)("p",null,"Right-click to add more values, or change the type (ex: number, position, rotation)."),(0,r.kt)("p",null,"\u6bd4\u8f83\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u5e76\u8f93\u51fa\u6700\u5927\u503c\u3002\u867d\u7136\u6a21\u5757\u7684\u9ed8\u8ba4\u7c7b\u578b\u662f\u6570\u5b57\uff0c\u4f46\u5b83\u4e5f\u53ef\u4ee5\u7528\u4e8e\u6bd4\u8f83\u4f4d\u7f6e\uff0c\u70b9\uff0c\u989c\u8272\u548c\u7d22\u5f15\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(81332).Z,width:"1498",height:"232"})),(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A value to compare to other input values. By default, the value is a number."),(0,r.kt)("p",null,"\u4e0e\u5176\u4ed6 Input \u8f93\u5165\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,r.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A value to compare to other input values. By default, the value is a number."),(0,r.kt)("p",null,"\u4e0e\u5176\u4ed6 Input \u8f93\u5165\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"The largest of the input values."),(0,r.kt)("p",null,"\u8f93\u51fa\u6700\u5927\u7684\u503c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/+"},"+ \u52a0")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/-"},"\u2212 \u51cf")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/x"},"x \u4e58")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/%C3%B7"},"\xf7 \u9664")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Round"},"Round \u56db\u820d\u4e94\u5165")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Min"},"Min \u6700\u5c0f\u503c")))}d.isMDXComponent=!0},81332:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/max-5edb9335b652a863d65d93b19a3063e0.png"}}]);