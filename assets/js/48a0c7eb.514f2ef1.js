"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[52288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),s=r,g=d["".concat(u,".").concat(s)]||d[s]||p[s]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Image \u56fe\u7247",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Image \u56fe\u7247",l={unversionedId:"documentation/Utility/Image",id:"documentation/Utility/Image",title:"Image \u56fe\u7247",description:"An image represented as a patch. Double-click the thumbnail to select an image from Finder. Drag an image into the graph to create an Image patch. Connect to an Image Layer to display it in the viewer.",source:"@site/docs/documentation/Utility/Image.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Image",permalink:"/OrigamiStudio/docs/documentation/Utility/Image",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Image.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667579570,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Image \u56fe\u7247",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Image Info \u56fe\u7247\u4fe1\u606f",permalink:"/OrigamiStudio/docs/documentation/Utility/Image Info"},next:{title:"JSON to Shape JSON \u8f6c\u6362\u56fe\u5f62",permalink:"/OrigamiStudio/docs/documentation/Utility/JSON to Shape"}},u={},c=[{value:"\u7ed9\u6a21\u5757\u6dfb\u52a0\u56fe\u7247\uff1a",id:"\u7ed9\u6a21\u5757\u6dfb\u52a0\u56fe\u7247",level:3},{value:"\u4f7f\u56fe\u7247\u5728\u67e5\u770b\u5668\u4e2d\u663e\u793a\uff1a",id:"\u4f7f\u56fe\u7247\u5728\u67e5\u770b\u5668\u4e2d\u663e\u793a",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"image-\u56fe\u7247"},"Image \u56fe\u7247"),(0,r.kt)("p",null,"An image represented as a patch. Double-click the thumbnail to select an image from Finder. Drag an image into the graph to create an Image patch. Connect to an ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Image%20Layer"},"Image Layer")," to display it in the viewer."),(0,r.kt)("p",null,"\u8868\u793a\u56fe\u50cf\u7684\u6a21\u5757\u3002"),(0,r.kt)("h3",{id:"\u7ed9\u6a21\u5757\u6dfb\u52a0\u56fe\u7247"},"\u7ed9\u6a21\u5757\u6dfb\u52a0\u56fe\u7247\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53cc\u51fb\u7f29\u7565\u56fe\u4ece Finder \u4e2d\u9009\u62e9\u56fe\u7247\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u56fe\u7247\u62d6\u52a8\u5230\u6a21\u5757\u7684\u7f29\u7565\u56fe\u533a\u57df\u4e2d\u4e5f\u53ef\u4ee5\u7ed9\u6a21\u5757\u6dfb\u52a0\u56fe\u7247\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u56fe\u7247\u5728\u67e5\u770b\u5668\u4e2d\u663e\u793a"},"\u4f7f\u56fe\u7247\u5728\u67e5\u770b\u5668\u4e2d\u663e\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06 Image \u6a21\u5757\u7684\u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230 Image Layer \u7684 Image \u5c5e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u56fe\u7247\u76f4\u63a5\u62d6\u52a8\u5230\u56fe\u5c42\u5217\u8868\u4e2d\u4ee5\u521b\u5efa Image Layer\u3002")),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Image"),(0,r.kt)("ul",{className:"inputs"}),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"\xa0",(0,r.kt)("span",null))))),(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("p",null,"The image."),(0,r.kt)("p",null,"\u8f93\u51fa\u4e00\u5f20\u56fe\u7247\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Image%20Info"},"Image Info \u56fe\u7247\u4fe1\u606f")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Image%20File"},"Image File \u56fe\u50cf\u6587\u4ef6")))}p.isMDXComponent=!0}}]);