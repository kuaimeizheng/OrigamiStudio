"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[69191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,r[1]=u;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={title:"Pop Animation \u6d41\u884c\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Pop Animation \u6d41\u884c\u52a8\u753b",u={unversionedId:"documentation/Animation/Pop Animation",id:"documentation/Animation/Pop Animation",title:"Pop Animation \u6d41\u884c\u52a8\u753b",description:"Animate a numeric value (ex: position, opacity, scale) using a spring effect whenever the value is changed.",source:"@site/docs/documentation/Animation/Pop Animation.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Pop Animation",permalink:"/OrigamiStudio/docs/documentation/Animation/Pop Animation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Pop Animation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Pop Animation \u6d41\u884c\u52a8\u753b",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Curve \u66f2\u7ebf",permalink:"/OrigamiStudio/docs/documentation/Animation/Curve"},next:{title:"Repeating Animation \u91cd\u590d\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Repeating Animation"}},l={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Number \u503c",id:"number-\u503c",level:4},{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:4},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pop-animation-\u6d41\u884c\u52a8\u753b"},"Pop Animation \u6d41\u884c\u52a8\u753b"),(0,o.kt)("p",null,"Animate a numeric value (ex: position, opacity, scale) using a spring effect whenever the value is changed."),(0,o.kt)("p",null,"\u6bcf\u5f53\u503c\u66f4\u6539\u65f6\uff0c\u4f7f\u7528\u5f39\u6027\u6548\u679c\u4e3a\u503c\uff08\u4f8b\u5982\uff1a\u4f4d\u7f6e\u3001\u4e0d\u900f\u660e\u5ea6\u3001\u6bd4\u4f8b\uff09\u8bbe\u7f6e\u52a8\u753b\u3002"),(0,o.kt)("p",null,"Bounciness and Speed values can be passed to developers using the Pop framework for iOS, Rebound for Android, and Rebound JS for web."),(0,o.kt)("p",null,"\u5f39\u6027\u548c\u901f\u5ea6\u7684\u503c\u53ef\u4ee5\u4ea4\u4ed8\u7ed9\u5f00\u53d1\uff0c\u56e0\u4e3a\u4f7f\u7528\u7684\u662f iOS\u7684 Pop \u6846\u67b6\uff0cAndroid \u7684 Rebound \u5f39\u6027\u52a8\u753b\uff0c\u548c web \u7684 Rebound JS\u3002"),(0,o.kt)("p",null,"Use\xa0","[Classic Animation]","for traditional animation curves. See\xa0","[Animation Basics]","or more information."),(0,o.kt)("p",null,"\u4f7f\u7528 Classic Animation \u6a21\u5757\u7684\u7ecf\u5178\u52a8\u753b\u66f2\u7ebf\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ","[Animation Basics \u52a8\u753b\u57fa\u7840]","\u3002"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Pop Animation"),(0,o.kt)("ul",{className:"inputs"},(0,o.kt)("li",null,"Number",(0,o.kt)("span",null,"0")),(0,o.kt)("li",null,"Bounciness",(0,o.kt)("span",null,"5")),(0,o.kt)("li",null,"Speed",(0,o.kt)("span",null,"10"))),(0,o.kt)("ul",{className:"outputs"},(0,o.kt)("li",null,"Progress",(0,o.kt)("span",null,"0"))))),(0,o.kt)("div",{className:"port-descriptions"},(0,o.kt)("div",{className:"inputs"},(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("h4",{id:"number-\u503c"},"Number \u503c"),(0,o.kt)("p",null,"The number to animate to."),(0,o.kt)("p",null,"\u8868\u793a\u52a8\u753b\u5f00\u59cb\u7684\u6570\u503c\u3002"),(0,o.kt)("h4",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,o.kt)("p",null,"A number that represents the bounciness of the animation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u7684\u5f39\u6027\u3002"),(0,o.kt)("h4",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,o.kt)("p",null,"A number that represents the speed of the animation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u7684\u901f\u5ea6\u3002")),(0,o.kt)("div",{className:"outputs"},(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("h4",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A number that is tweened (or interpolated) with a bouncy animation as it moves toward the Number input.\nTypically a progress value. See\xa0Animation Basics\xa0for more information."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5f53\u5b83\u5411\u8f93\u5165\u7684\u6570\u503c\u79fb\u52a8\u65f6\uff0c\u4f1a\u7528\u5f39\u6027\u52a8\u753b\u8fdb\u884c\u8865\u95f4\uff08\u6216\u63d2\u503c\uff09\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u8fd9\u662f\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003  Animation Basics\u3002"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Bouncy%20Converter"},"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Spring%20Converter"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}c.isMDXComponent=!0}}]);