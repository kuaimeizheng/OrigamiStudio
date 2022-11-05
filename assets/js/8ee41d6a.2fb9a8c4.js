"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[42587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=l,h=c["".concat(u,".").concat(m)]||c[m]||s[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},10155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Sample and Hold \u91c7\u6837\u4fdd\u6301",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Sample and Hold \u91c7\u6837\u4fdd\u6301",o={unversionedId:"documentation/Utility/Sample and Hold",id:"documentation/Utility/Sample and Hold",title:"Sample and Hold \u91c7\u6837\u4fdd\u6301",description:"Store a value of any type. The patch will store the value until a new value is sampled or until the current value is reset.",source:"@site/docs/documentation/Utility/Sample and Hold.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Sample and Hold",permalink:"/OrigamiStudio/docs/documentation/Utility/Sample and Hold",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Sample and Hold.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Sample and Hold \u91c7\u6837\u4fdd\u6301",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6",permalink:"/OrigamiStudio/docs/documentation/Utility/Reverse Progress"},next:{title:"Snapshot \u5feb\u7167",permalink:"/OrigamiStudio/docs/documentation/Utility/Snapshot"}},u={},p=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Sample \u91c7\u6837",id:"sample-\u91c7\u6837",level:3},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sample-and-hold-\u91c7\u6837\u4fdd\u6301"},"Sample and Hold \u91c7\u6837\u4fdd\u6301"),(0,l.kt)("p",null,"Store a value of any type. The patch will store the value until a new value is sampled or until the current value is reset."),(0,l.kt)("p",null,"\u5b58\u50a8\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u3002\u6a21\u5757\u5c06\u5b58\u50a8\u91c7\u96c6\u7684\u503c\uff0c\u76f4\u5230\u65b0\u503c\u88ab\u91c7\u6837\u6216\u76f4\u5230\u5f53\u524d\u503c\u88ab\u91cd\u7f6e\u4e3a\u6b62\u3002"),(0,l.kt)("p",null,"Right-click to change the type (ex: number, text, color)."),(0,l.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u63a5\u53e3\u6570\u91cf\u548c\u7c7b\u578b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:a(5478).Z,width:"1518",height:"264"})),(0,l.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,l.kt)("p",null,"A value of any type. By default, the value is a number."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4efb\u610f\u7c7b\u578b\u7684\u503c\uff0c\u901a\u5e38\u662f\u6570\u5b57\u3002"),(0,l.kt)("h3",{id:"sample-\u91c7\u6837"},"Sample \u91c7\u6837"),(0,l.kt)("p",null,"A boolean that is true when the patch is sampling a value. When false, the patch will not sample the value, even if it changes. The patch outputs the most recently sampled value."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u6a21\u5757\u5bf9\u503c\u91c7\u6837\u65f6\u4e3atrue\u3002"),(0,l.kt)("p",null,"\u5f53\u503c\u4e3afalse\u65f6\uff0c\u6a21\u5757\u4e0d\u4f1a\u5bf9\u8be5\u503c\u8fdb\u884c\u91c7\u6837\uff0c\u5373\u4f7f\u66f4\u6539\u3002"),(0,l.kt)("p",null,"\u6a21\u5757\u8f93\u51fa\u6700\u8fd1\u91c7\u6837\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u901a\u4fd7\u89e3\u91ca\u5c31\u662fSample\u5f00\u5173\u6253\u5f00\uff0cValue\u7684\u503c\u5c31\u4f1a\u8f93\u51fa\u5230\u8f93\u51fa\u7aef\u53e3\u3002"),(0,l.kt)("h3",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e"),(0,l.kt)("p",null,"A pulse that clears the currently stored value."),(0,l.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5728\u8f93\u51fa\u7aef\u53e3\u6e05\u9664\u5f53\u524d\u5b58\u50a8\u7684\u503c\uff0c\u91cd\u7f6e\u4e3a 0 \u3002"),(0,l.kt)("h3",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:a(79483).Z,width:"670",height:"627"})),(0,l.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,l.kt)("p",null,"The currently stored value."),(0,l.kt)("p",null,"\u8f93\u51fa\u5f53\u524d\u5b58\u50a8\u7684\u503c"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Pulse"},"Pulse \u8109\u51b2")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")))}s.isMDXComponent=!0},79483:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sample-and-hold-item-b20b2d4a790d115bb36e5da50463bfbb.png"},5478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sample-and-hold-4d37116813f5a7207dbfee5243ed3295.png"}}]);