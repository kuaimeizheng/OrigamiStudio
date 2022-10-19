"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[48664],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},96173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:5},i="Equals \u7b49\u4e8e",l={unversionedId:"documentation/Logic/Equals",id:"documentation/Logic/Equals",title:"Equals \u7b49\u4e8e",description:"Check if two numbers are equal, or approximately equal within a tolerance. Useful for bouncy values that don\u2019t settle on round integers.",source:"@site/docs/documentation/Logic/Equals.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Equals",permalink:"/OrigamiStudio/docs/documentation/Logic/Equals",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Equals.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666145039,formattedLastUpdatedAt:"2022\u5e7410\u670819\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Equals Exactly"},next:{title:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Greater Than or Equal"}},u={},c=[{value:"First Value \u7b2c\u4e00\u4e2a\u503c",id:"first-value-\u7b2c\u4e00\u4e2a\u503c",level:3},{value:"Second Value \u7b2c\u4e8c\u4e2a\u503c",id:"second-value-\u7b2c\u4e8c\u4e2a\u503c",level:3},{value:"Tolerance \u5bb9\u5dee",id:"tolerance-\u5bb9\u5dee",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"equals-\u7b49\u4e8e"},"Equals \u7b49\u4e8e"),(0,r.kt)("p",null,"Check if two numbers are equal, or approximately equal within a tolerance. Useful for bouncy values that don\u2019t settle on round integers."),(0,r.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6570\u5b57\u662f\u5426\u76f8\u7b49\uff0c\u6216\u8005\u5728\u516c\u5dee\u8303\u56f4\u5185\u8fd1\u4f3c\u76f8\u7b49\u3002\u9002\u7528\u4e8e\u4e0d\u662f\u56fa\u5b9a\u6574\u6570\u7684\u5f39\u6027\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(806).Z,width:"1234",height:"300"})),(0,r.kt)("h3",{id:"first-value-\u7b2c\u4e00\u4e2a\u503c"},"First Value \u7b2c\u4e00\u4e2a\u503c"),(0,r.kt)("p",null,"The base number."),(0,r.kt)("p",null,"\u57fa\u6570\u503c\u3002"),(0,r.kt)("h3",{id:"second-value-\u7b2c\u4e8c\u4e2a\u503c"},"Second Value \u7b2c\u4e8c\u4e2a\u503c"),(0,r.kt)("p",null,"The number to compare to the base."),(0,r.kt)("p",null,"\u548c\u57fa\u6570\u503c\u6bd4\u8f83\u7684\u503c\uff0c"),(0,r.kt)("h3",{id:"tolerance-\u5bb9\u5dee"},"Tolerance \u5bb9\u5dee"),(0,r.kt)("p",null,"A number that represents the wiggle room between the first and second values where. For example, a tolerance of .1 means that 2.1 is equal to 2. Useful for bouncy/smoothed values."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u57fa\u6570\u503c\u548c\u7b2c\u4e8c\u4e2a\u503c\u4e4b\u95f4\u5141\u8bb8\u76f8\u5dee\u7684\u8303\u56f4\u3002"),(0,r.kt)("p",null,"\u4f8b\uff1a\u516c\u5dee\u4e3a0.1\uff0c\u8868\u793a 2.1 \u6216 1.9 \u7b49\u4e8e 2\u3002\u9002\u7528\u4e8e\u5f39\u6027\uff0f\u5e73\u6ed1\u503c\u3002"),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"A boolean that is true if the first and second values are equal within the tolerance."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u57fa\u6570\u503c\u548c\u7b2c\u4e8c\u4e2a\u503c\u5728\u5bb9\u5dee\u503c\u5167\u65f6\u4e3a\u771f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/And"},"And \u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Or"},"Or \u6216")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Not"},"Not \u975e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/acb68c9b-b9fa-449a-8dcf-77723da01686/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172028Z&X-Amz-Expires=86400&X-Amz-Signature=36780d6bfb2c5f9263572c9070fb44829db8f1146283390ccdec1b71ec575aa1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}d.isMDXComponent=!0},806:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/equals-795102288c379e4ab47022b6a19173f1.png"}}]);