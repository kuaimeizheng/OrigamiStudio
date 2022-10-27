"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:5},i="Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",u={unversionedId:"documentation/Logic/Greater Than or Equal",id:"documentation/Logic/Greater Than or Equal",title:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",description:"Check if a value is greater than or equal to another.",source:"@site/docs/documentation/Logic/Greater Than or Equal.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Greater Than or Equal",permalink:"/OrigamiStudio/docs/documentation/Logic/Greater Than or Equal",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Greater Than or Equal.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666887881,formattedLastUpdatedAt:"2022\u5e7410\u670827\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Equals"},next:{title:"Greater Than \u5927\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Greater Than"}},l={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"greater-than-or-equal-\u5927\u4e8e\u7b49\u4e8e"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e"),(0,n.kt)("p",null,"Check if a value is greater than or equal to another."),(0,n.kt)("p",null,"\u68c0\u67e5\u503c\u662f\u5426\u5927\u4e8e\u6216\u7b49\u4e8e\u53e6\u4e00\u4e2a\u503c\u3002"),(0,n.kt)("p",null,"Each value is compared to the next one in order, and results are combined in one output. For example, 3 >= 2 >= 2 is true, while 4 >= 4 >= 10 is false."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u503c\u6309\u987a\u5e8f\u4e0e\u4e0b\u4e00\u4e2a\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u7ed3\u679c\u5408\u5e76\u5728\u4e00\u4e2a\u8f93\u51fa\u53e3\u4e2d\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c3 > \u6216 = 2 > \u6216 = 2\u4e3a\u771f\uff0c\u800c 4 > \u6216 = 4 > \u6216 = 10\u4e3a\u5047\u3002"),(0,n.kt)("p",null,"You can right-click to add more values to compare (will only output 1 if every value is greater or equal to the subsequent one) or change the type."),(0,n.kt)("p",null,"\u53f3\u952e\u6dfb\u52a0\u66f4\u591a\u503c\u8fdb\u884c\u6bd4\u8f83\uff08\u5982\u679c\u6bcf\u4e2a\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u53ea\u8f93\u51fa1\u4e2a\uff09\uff0c\u4e5f\u53ef\u4ee5\u66f4\u6539\u7c7b\u578b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(40410).Z,width:"1502",height:"228"})),(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("p",null,"The base value."),(0,n.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,n.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,n.kt)("p",null,"The value to compare to the base."),(0,n.kt)("p",null,"\u548c\u57fa\u7840\u503c\u505a\u6bd4\u8f83\u7684\u503c\u3002"),(0,n.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,n.kt)("p",null,"A boolean that is true if the base value is greater than or equal to the subsequent values."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u57fa\u7840\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/And"},"And \u548c")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Or"},"Or \u6216")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Not"},"Not \u975e")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}s.isMDXComponent=!0},40410:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/greater-than-or-equal-ab5a1b381c4b388746b308867b9f40ad.png"}}]);