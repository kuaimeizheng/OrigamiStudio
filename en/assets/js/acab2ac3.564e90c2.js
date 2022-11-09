"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[97685],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75701:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5},i="Drag \u62d6\u62fd",l={unversionedId:"documentation/Interaction/Drag",id:"documentation/Interaction/Drag",title:"Drag \u62d6\u62fd",description:"Drag a layer in any direction. Choose the layer to drag and then connect the Position output to the layer\u2019s Position port.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Interaction/Drag.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Drag",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Drag",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Drag.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Drag Settings"},next:{title:"Gesture \u624b\u52bf",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Gesture"}},s={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:3},{value:"Settings \u8bbe\u7f6e",id:"settings-\u8bbe\u7f6e",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:c};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drag-\u62d6\u62fd"},"Drag \u62d6\u62fd"),(0,a.kt)("p",null,"Drag a layer in any direction. Choose the layer to drag and then connect the Position output to the layer\u2019s Position port."),(0,a.kt)("p",null,"\u6cbf\u4efb\u4f55\u65b9\u5411\u62d6\u52a8\u4e00\u5c42\u3002\u9009\u62e9\u8981\u62d6\u52a8\u7684\u56fe\u5c42\uff0c\u7136\u540e\u5c06 \u4f4d\u7f6e \u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u56fe\u5c42\u7684 \u4f4d\u7f6e \u7aef\u53e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(14169).Z,width:"1662",height:"428"})),(0,a.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A boolean that is true when dragging is enabled"),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u62d6\u62fd\u542f\u7528\u65f6\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,a.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,a.kt)("p",null,"The name of the layer to drag. Click the value (\u201cNone\u201d, by default) to select a layer. Controls which layer activates drag on touch."),(0,a.kt)("p",null,"\u62d6\u62fd\u56fe\u5c42\u540d\u79f0\u3002\u70b9\u51fbLayer\u7684\u503c\u9009\u62e9\u56fe\u5c42\u3002\u89e6\u6478\u54ea\u4e2a\u56fe\u5c42\u6fc0\u6d3b\u62d6\u62fd\u3002"),(0,a.kt)("p",null,"(\u4f8b\u5982\uff1a\u6709A\u3001B\u4e24\u4e2a\u56fe\u5c42\uff0cDrag\u7684\u8f93\u51fa\u53e3\u8fde\u63a5\u7684A\u7684\u4f4d\u7f6e\u5c5e\u6027\uff0cDrag\u7684Layer\u9009\u62e9\u4e3a\u56fe\u5c42B\uff0c\u90a3\u89e6\u6478B\u53ef\u4ee5\u62d6\u52a8A\uff0c\u5982\u679c\u89e6\u6478B\u610f\u5916\u7684\u8303\u56f4\u5c31\u62d6\u4e0d\u52a8\u3002\u4e0d\u9009\u5c31\u662f\u89e6\u6478\u6574\u4e2a\u5c4f\u5e55\u6fc0\u6d3b\u56fe\u5c42\u7684\u62d6\u62fd\u3002)"),(0,a.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,a.kt)("p",null,"The position the layer starts at when the prototype starts."),(0,a.kt)("p",null,"\u5f53\u539f\u578b\u5f00\u59cb\u65f6\uff0c\u88ab\u62d6\u62fd\u7684\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("h3",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e"),(0,a.kt)("p",null,"A pulse that resets the position to the start position."),(0,a.kt)("p",null,"\u91cd\u7f6e\u5230\u542f\u52a8\u4f4d\u7f6e\u3002 (\u4f8b\u5982\uff1aStart\u8bbe\u7f6e\u7684\u4f4d\u7f6e\u3002)"),(0,a.kt)("h3",{id:"settings-\u8bbe\u7f6e"},"Settings \u8bbe\u7f6e"),(0,a.kt)("p",null,"The settings from a Drag Settings patch that further customize drag behavior."),(0,a.kt)("p",null,"\u4eceDrag Setting\u6a21\u5757\u8fdb\u4e00\u6b65\u81ea\u5b9a\u4e49\u62d6\u52a8\u884c\u4e3a\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,a.kt)("p",null,"The current position of the draggable layer."),(0,a.kt)("p",null,"\u62d6\u52a8\u5c42\u7684\u5f53\u524d\u4f4d\u7f6e\u3002(\u4f8b\u5982\uff1a\u5c31\u662f\u8fd9\u4e2a\u63a5\u53e3\u8fde\u63a5\u5230\u8981\u62d6\u7684\u56fe\u5c42\u4f4d\u7f6e\u5c5e\u6027)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/Drag%20Settings"},"Drag Settings \u62d6\u62fd\u8bbe\u7f6e")))}p.isMDXComponent=!0},14169:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/drag-08f6e412afcfa5db6bce616432b460fe.png"}}]);