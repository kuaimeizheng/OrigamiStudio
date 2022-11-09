"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[14279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),y=l,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const i={title:"Delay \u5ef6\u8fdf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Delay \u5ef6\u8fdf",o={unversionedId:"documentation/Utility/Delay",id:"documentation/Utility/Delay",title:"Delay \u5ef6\u8fdf",description:"---",source:"@site/docs/documentation/Utility/Delay.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Delay",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Delay.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Delay \u5ef6\u8fdf",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Delay 1 \u5ef6\u8fdf 1",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay 1"},next:{title:"Face Detection \u4eba\u8138\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/documentation/Utility/Face Detection"}},u={},c=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Duration \u6301\u7eed\u65f6\u95f4",id:"duration-\u6301\u7eed\u65f6\u95f4",level:3},{value:"Style \u6837\u5f0f",id:"style-\u6837\u5f0f",level:3},{value:"Value \u503c",id:"value-\u503c-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"delay-\u5ef6\u8fdf"},"Delay \u5ef6\u8fdf"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Delay a value by the specified number of seconds. The patch will not output the value it receives until the delay has elapsed."),(0,l.kt)("p",null,"\u4ee5\u6307\u5b9a\u7684\u79d2\u6570\u5ef6\u8fdf\u8109\u51b2\u3002Delay \u6a21\u5757\u5728\u63a5\u6536\u5230\u4fe1\u606f\u540e\u4e0d\u4f1a\u9a6c\u4e0a\u8f93\u51fa\uff0c\u800c\u662f\u7b49\u5230\u6307\u5b9a\u7684\u5ef6\u8fdf\u65f6\u95f4\u8fc7\u4e86\u4e4b\u540e\u624d\u8f93\u51fa\u3002"),(0,l.kt)("p",null,"Right-click to change the type (ex: number, boolean, color)."),(0,l.kt)("div",{className:"patch-container"},(0,l.kt)("div",{className:"patch processor"},(0,l.kt)("h3",null,"Delay"),(0,l.kt)("ul",{className:"inputs"},(0,l.kt)("li",null,"Value",(0,l.kt)("span",null,"0")),(0,l.kt)("li",null,"Duration",(0,l.kt)("span",null,"1s")),(0,l.kt)("li",null,"Style",(0,l.kt)("span",null,"Always"))),(0,l.kt)("ul",{className:"outputs"},(0,l.kt)("li",null,"Value",(0,l.kt)("span",null,"0"))))),(0,l.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,l.kt)("p",null,"The value to delay."),(0,l.kt)("p",null,"\u8981\u5ef6\u8fdf\u7684\u503c\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,l.kt)("h3",{id:"duration-\u6301\u7eed\u65f6\u95f4"},"Duration \u6301\u7eed\u65f6\u95f4"),(0,l.kt)("p",null,"The number of seconds to wait."),(0,l.kt)("p",null,"\u7b49\u5f85\u591a\u957f\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002"),(0,l.kt)("h3",{id:"style-\u6837\u5f0f"},"Style \u6837\u5f0f"),(0,l.kt)("p",null,"The condition for triggering the delay, one of Always, When Increasing, and When Decreasing. The default Always option will always trigger a delay, while When Increasing and When Decreasing will trigger a delay only when the value is currently increasing or decreasing."),(0,l.kt)("p",null,"Note that the When Increasing and When Decreasing options only apply to number and boolean values; otherwise, When Increasing and When Decreasing will function the same as Always."),(0,l.kt)("p",null,"\u89e6\u53d1\u5ef6\u8fdf\u7684\u6761\u4ef6\uff0c\u53ef\u4ee5\u9009\u62e9 \u201c\u59cb\u7ec8\u201d\u3001\u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d\u3002\u9ed8\u8ba4\u7684 \u201c\u59cb\u7ec8\u201d\u9009\u9879\u5c06\u59cb\u7ec8\u89e6\u53d1\u5ef6\u8fdf\u3002\u800c \u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d\u9009\u9879\u5c06\u4ec5\u5728\u5f53\u524d\u503c\u589e\u52a0\u6216\u51cf\u5c11\u65f6\u89e6\u53d1\u5ef6\u8fdf\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f \u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d \u9009\u9879\u4ec5\u9002\u7528\u4e8e\u6570\u503c\u548c\u5e03\u5c14\u503c\uff1b\u5426\u5219\uff0c\u201c\u5f53\u589e\u52a0\u65f6\u201d\u3001\u201c\u5f53\u51cf\u5c11\u65f6\u201d\u548c \u201c\u59cb\u7ec8\u201d \u529f\u80fd\u76f8\u540c\u3002"),(0,l.kt)("h3",{id:"value-\u503c-1"},"Value \u503c"),(0,l.kt)("p",null,"The value, which will be output only after the delay has elapsed."),(0,l.kt)("p",null,"\u8f93\u51fa\u5ef6\u8fdf\u540e\u7684\u503c\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Delay%201"},"Delay 1 \u5ef6\u8fdf 1")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")))}d.isMDXComponent=!0}}]);