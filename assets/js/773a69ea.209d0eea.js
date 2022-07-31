"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2785],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:e},c),{},{components:n})):r.createElement(f,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35596:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},u="Progress \u8fdb\u5ea6",s={unversionedId:"documentation/Utility/Progress",id:"documentation/Utility/Progress",title:"Progress \u8fdb\u5ea6",description:"Convert a number from any range to progress (0 to 1). Useful with Transition to convert an animating value to another range.",source:"@site/docs/documentation/Utility/Progress.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Progress",permalink:"/OrigamiStudio/docs/documentation/Utility/Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Progress.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Point \u70b9",permalink:"/OrigamiStudio/docs/documentation/Utility/Point"},next:{title:"Pulse on Change \u8109\u51b2\u53d8\u5316",permalink:"/OrigamiStudio/docs/documentation/Utility/Pulse on Change"}},c={},p=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Start Value \u5f00\u59cb\u503c",id:"start-value-\u5f00\u59cb\u503c",level:3},{value:"End Value \u7ed3\u675f\u503c",id:"end-value-\u7ed3\u675f\u503c",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function m(t){var e=t.components,l=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"Convert a number from any range to progress (0 to 1). Useful with ",(0,o.kt)("a",{parentName:"p",href:"https://origami.design/documentation/patches/builtin.transition.html"},"Transition")," to convert an animating value to another range."),(0,o.kt)("p",null,"\u5c06\u4efb\u4f55\u8303\u56f4\u5185\u7684\u6570\u5b57\u8f6c\u6362\u4e3a\u8fdb\u5ea6\uff080\u52301\uff09\u3002\u548c ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")," \u4e00\u8d77\u4f7f\u7528\u53ef\u4ee5\u5c06\u52a8\u753b\u503c\u8f6c\u6362\u4e3a\u5176\u5b83\u7684\u8303\u56f4\uff08\u4f8b\u5982\uff1a100\uff5e125\u300120\uff5e30\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(79387).Z,width:"1348",height:"266"})),(0,o.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,o.kt)("p",null,"A number to convert."),(0,o.kt)("p",null,"\u8981\u8f6c\u6362\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"start-value-\u5f00\u59cb\u503c"},"Start Value \u5f00\u59cb\u503c"),(0,o.kt)("p",null,"The start value of the range."),(0,o.kt)("p",null,"\u8303\u56f4\u7684\u5f00\u59cb\u503c\u3002"),(0,o.kt)("h3",{id:"end-value-\u7ed3\u675f\u503c"},"End Value \u7ed3\u675f\u503c"),(0,o.kt)("p",null,"The end value of the range."),(0,o.kt)("p",null,"\u8303\u56f4\u7684\u7ed3\u675f\u503c\u3002"),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A progress value."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/Animations"},"Animation Basics")," for more information."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002"),(0,o.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 Animation Basic\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Clip"},"Clip \u88c1\u526a")))}m.isMDXComponent=!0},79387:function(t,e,n){e.Z=n.p+"assets/images/progress-afbe7863107e352bf43f4b55300b661d.png"}}]);