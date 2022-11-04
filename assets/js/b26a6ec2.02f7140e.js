"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[32650],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)o=l[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)o=l[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(o),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return o?r.createElement(f,a(a({ref:e},u),{},{components:o})):r.createElement(f,a({ref:e},u))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},44648:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const l={title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Scrollaway \u6eda\u52a8\u8ddd\u79bb",i={unversionedId:"documentation/Interaction/Scrollaway",id:"documentation/Interaction/Scrollaway",title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",description:"Calculate the progress off a scrollaway navigation element.",source:"@site/docs/documentation/Interaction/Scrollaway.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Scrollaway",permalink:"/OrigamiStudio/docs/documentation/Interaction/Scrollaway",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Scrollaway.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Scroll \u6eda\u52a8",permalink:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},next:{title:"Logic \u903b\u8f91",permalink:"/OrigamiStudio/docs/category/logic-\u903b\u8f91"}},c={},s=[{value:"Scroll Position \u6eda\u52a8\u4f4d\u7f6e",id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e",level:3},{value:"Scrollaway Offset \u6eda\u52a8\u504f\u79fb",id:"scrollaway-offset-\u6eda\u52a8\u504f\u79fb",level:3},{value:"Bottom Bound \u4e0b\u8fb9\u754c",id:"bottom-bound-\u4e0b\u8fb9\u754c",level:3},{value:"Top Bound \u4e0a\u8fb9\u754c",id:"top-bound-\u4e0a\u8fb9\u754c",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:s};function p(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scrollaway-\u6eda\u52a8\u8ddd\u79bb"},"Scrollaway \u6eda\u52a8\u8ddd\u79bb"),(0,n.kt)("p",null,"Calculate the progress off a scrollaway navigation element."),(0,n.kt)("p",null,"\u8ba1\u7b97\u6eda\u52a8\u5bfc\u822a\u5143\u7d20\u7684\u8fdb\u5ea6\u3002"),(0,n.kt)("div",{className:"patch-container"},(0,n.kt)("div",{className:"patch processor"},(0,n.kt)("h3",null,"Scrollaway"),(0,n.kt)("ul",{className:"inputs"},(0,n.kt)("li",null,"Scroll Position",(0,n.kt)("span",null,"0")),(0,n.kt)("li",null,"Scrollaway Offset",(0,n.kt)("span",null,"60")),(0,n.kt)("li",null,"Bottom Bound",(0,n.kt)("span",null,"-50")),(0,n.kt)("li",null,"Top Bound",(0,n.kt)("span",null,"500"))),(0,n.kt)("ul",{className:"outputs"},(0,n.kt)("li",null,"Progress",(0,n.kt)("span",null,"0.5"))))),(0,n.kt)("h3",{id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e"},"Scroll Position \u6eda\u52a8\u4f4d\u7f6e"),(0,n.kt)("p",null,"The current scroll position from a Scroll patch."),(0,n.kt)("p",null,"Scroll \u6eda\u52a8 \u6a21\u5757\u7684\u5f53\u524d\u6eda\u52a8\u4f4d\u7f6e\u3002"),(0,n.kt)("h3",{id:"scrollaway-offset-\u6eda\u52a8\u504f\u79fb"},"Scrollaway Offset \u6eda\u52a8\u504f\u79fb"),(0,n.kt)("p",null,"The offset the element should be scrolled away by."),(0,n.kt)("p",null,"\u5143\u7d20\u6eda\u52a8\u4f4d\u79fb\u7684\u504f\u79fb\u91cf\u3002"),(0,n.kt)("h3",{id:"bottom-bound-\u4e0b\u8fb9\u754c"},"Bottom Bound \u4e0b\u8fb9\u754c"),(0,n.kt)("p",null,"A number that represents the lowest bound of the Scroll (ex: -1500). Get this by scrolling the layer to the top and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u7684\u6700\u4f4e\u8fb9\u754c\uff08\u4f8b\u5982\uff1a-1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u9876\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,n.kt)("h3",{id:"top-bound-\u4e0a\u8fb9\u754c"},"Top Bound \u4e0a\u8fb9\u754c"),(0,n.kt)("p",null,"A number that represents the highest bound of the Scroll (ex: 1500). Get this by scrolling the layer to the bottom and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u6700\u9ad8\u8fb9\u754c\uff08\u4f8b\u5982\uff1a1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u5e95\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,n.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,n.kt)("p",null,"A number from 0-1 that represents the progress of the scrollaway. Connect to Transition patches to convert it to the position, scale, opacity or any other property."),(0,n.kt)("p",null,"\u4e00\u4e2a 0-1 \u7684\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u8fdb\u5ea6\uff0c\u8fde\u63a5\u5230 Transition \u6a21\u5757\u4ee5\u5c06\u5176\u8f6c\u6362\u4e3a\u4f4d\u7f6e\u3001\u6bd4\u4f8b\u3001\u4e0d\u900f\u660e\u5ea6\u6216\u5176\u4ed6\u5c5e\u6027\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")))}p.isMDXComponent=!0}}]);