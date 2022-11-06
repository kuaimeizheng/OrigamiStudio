"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[69137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5},i="Equals Exactly \u5b8c\u5168\u7b49\u4e8e",l={unversionedId:"documentation/Logic/Equals Exactly",id:"documentation/Logic/Equals Exactly",title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",description:"Check if two or more values are exactly the same as each other.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Logic/Equals Exactly.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Equals Exactly",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Equals Exactly",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Equals Exactly.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"And \u548c",permalink:"/OrigamiStudio/en/docs/documentation/Logic/And"},next:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/en/docs/documentation/Logic/Equals"}},u={},c=[{value:"Input",id:"input",level:3},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"equals-exactly-\u5b8c\u5168\u7b49\u4e8e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e"),(0,r.kt)("p",null,"Check if two or more values are exactly the same as each other."),(0,r.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u540c\u3002"),(0,r.kt)("p",null,"This is a convenience equivalent of using the (Equals)","[builtin.compare.equal Approx]"," patch with tolerance set to 0."),(0,r.kt)("p",null,"\u8fd9\u76f8\u5f53\u4e8e\u4f7f\u7528(Equals)","[builtin.compare.equal Approx]","(python \u8fd1\u4f3c\u6bd4\u8f83)\u6a21\u5757\uff0c\u7136\u540e\u516c\u5dee\u8bbe\u7f6e\u4e3a 0\u3002"),(0,r.kt)("p",null,"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."),(0,r.kt)("p",null,"\u53f3\u952e\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u63a5\u53e3\u53bb\u6bd4\u8f83\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u5982\uff1a\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(47297).Z,width:"1504",height:"226"})),(0,r.kt)("h3",{id:"input"},"Input"),(0,r.kt)("p",null,"The base value."),(0,r.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,r.kt)("h3",{id:"input-1"},"Input"),(0,r.kt)("p",null,"The value to compare to the base."),(0,r.kt)("p",null,"\u548c\u57fa\u7840\u503c\u6bd4\u8f83\u7684\u503c"),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("p",null,"A boolean that is true if the values are exactly equal to each other."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u8f93\u5165\u7684\u503c\u5f7c\u6b64\u5b8c\u5168\u76f8\u7b49\uff0c\u5219\u4e3a \u771f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/And"},"And \u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Or"},"Or \u6216")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Not"},"Not \u975e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}s.isMDXComponent=!0},47297:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/equals-exactly-78394816234ac21ef51257a167c47d31.png"}}]);