"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[58615],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var m=r.createContext({}),l=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,m=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(m,".").concat(d)]||p[d]||s[d]||i;return n?r.createElement(f,a(a({ref:e},u),{},{components:n})):r.createElement(f,a({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var m in e)hasOwnProperty.call(e,m)&&(c[m]=e[m]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23108:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Comment \u6ce8\u91ca",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Comment \u6ce8\u91ca",c={unversionedId:"documentation/Utility/Comment",id:"documentation/Utility/Comment",title:"Comment \u6ce8\u91ca",description:"Add comments and notes to the patch editor around patches to organize and clarify.",source:"@site/docs/documentation/Utility/Comment.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Comment",permalink:"/OrigamiStudio/docs/documentation/Utility/Comment",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Comment.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667580855,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Comment \u6ce8\u91ca",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Clip \u88c1\u526a",permalink:"/OrigamiStudio/docs/documentation/Utility/Clip"},next:{title:"Convert Position \u8f6c\u6362\u70b9",permalink:"/OrigamiStudio/docs/documentation/Utility/Convert Position"}},m={},l=[],u={toc:l};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comment-\u6ce8\u91ca"},"Comment \u6ce8\u91ca"),(0,o.kt)("p",null,"Add comments and notes to the patch editor around patches to organize and clarify."),(0,o.kt)("p",null,"Select any number of patches and press Patch > Comment Around Patches ctrl command c to add a comment sized to surround the patches."),(0,o.kt)("p",null,"\u5728\u6a21\u5757\u5468\u56f4\u6dfb\u52a0\u6ce8\u91ca\uff0c\u53ef\u4ee5\u6574\u7406\u6a21\u5757\uff0c\u4ee5\u53ca\u589e\u52a0\u6a21\u5757\u7684\u53ef\u8bfb\u6027\u3002"),(0,o.kt)("p",null,"\u9009\u62e9\u4efb\u610f\u6570\u91cf\u7684\u6a21\u5757\uff0c\u7136\u540e\u9009\u62e9\u83dc\u5355 Patch > Comment \uff0c\u6216\u8005\u7528\u5feb\u6377\u952e ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl Cmd C")," \u6dfb\u52a0\u4e00\u4e2a\u5305\u56f4\u6240\u9009\u6a21\u5757\u5927\u5c0f\u7684\u6ce8\u91ca\u3002"),(0,o.kt)("p",null,"Double-click the name or hit return to edit the comment. Right-click the patch to change the color. Drag the bottom right corner to resize the comment."),(0,o.kt)("p",null,"\u53cc\u51fb\u6a21\u5757\u6216\u6309\u56de\u8f66\u952e\u7f16\u8f91\u6ce8\u91ca\u3002\u5728\u6a21\u5757\u4e0a\u53f3\u952e\u66f4\u6539\u989c\u8272\uff0c\u4ee5\u53ca\u62d6\u52a8\u53f3\u4e0b\u89d2\u8c03\u6574\u5c3a\u5bf8\u3002"),(0,o.kt)("div",{className:"patch-container"},(0,o.kt)("div",{className:"patch processor"},(0,o.kt)("h3",null,"Comment"),(0,o.kt)("ul",{className:"inputs"}),(0,o.kt)("ul",{className:"outputs"}))))}s.isMDXComponent=!0}}]);