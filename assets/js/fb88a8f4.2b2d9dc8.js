"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5},i="Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e",u={unversionedId:"documentation/Logic/Less Than or Equal",id:"documentation/Logic/Less Than or Equal",title:"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e",description:"Check if a value is less than or equal to another.",source:"@site/docs/documentation/Logic/Less Than or Equal.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Less Than or Equal",permalink:"/OrigamiStudio/docs/documentation/Logic/Less Than or Equal",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Less Than or Equal.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667268661,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Greater Than \u5927\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Greater Than"},next:{title:"Less Than \u5c0f\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Less Than"}},l={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"less-than-or-equal-\u5c0f\u4e8e\u7b49\u4e8e"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e"),(0,r.kt)("p",null,"Check if a value is less than or equal to another."),(0,r.kt)("p",null,"\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u5426\u5c0f\u4e8e\u6216\u7b49\u4e8e\u5176\u5b83\u7684\u503c\u3002"),(0,r.kt)("p",null,"Each value is compared to the next one in order, and results are combined in one output. For example, 1 <= 1 <= 3 is true, while 3 <= 3 <= 1 is false."),(0,r.kt)("p",null,"\u6bcf\u4e2a\u503c\u6309\u987a\u5e8f\u4e0e\u4e0b\u4e00\u4e2a\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u7ed3\u679c\u5408\u5e76\u5728\u4e00\u4e2a\u8f93\u51fa\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f8b\uff1a1 <= 1 <= 3 \u4e3a\u771f\uff0c\u800c 3 <= 3 <= 1\u4e3a\u5047\u3002"),(0,r.kt)("p",null,"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."),(0,r.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u53ef\u6dfb\u52a0\u66f4\u591a\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u6216\u66f4\u6539\u7c7b\u578b(\u4f8b\u5982:\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c)\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(22753).Z,width:"1500",height:"226"})),(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"The base value."),(0,r.kt)("p",null,"\u57fa\u7840\u503c"),(0,r.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"The value to compare to the base."),(0,r.kt)("p",null,"\u548c\u57fa\u7840\u503c\u505a\u6bd4\u8f83\u7684\u503c\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"A boolean that is true if the base value is less than or equal to the subsequent values."),(0,r.kt)("p",null,"\u5982\u679c\u57fa\u7840\u503c\u5c0f\u4e8e\u6216\u7b49\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/And"},"And \u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Or"},"Or \u6216")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Not"},"Not \u975e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}p.isMDXComponent=!0},22753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/less-than-or-equal-d4fd5efc9de5d89d965bf7f8e77a762a.png"}}]);