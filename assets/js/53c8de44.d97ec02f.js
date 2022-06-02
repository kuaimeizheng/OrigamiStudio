"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1330],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,l(l({ref:e},p),{},{components:n})):r.createElement(d,l({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9715:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},c="Scrollaway \u6eda\u52a8\u8ddd\u79bb",s={unversionedId:"Interaction/Scrollaway",id:"Interaction/Scrollaway",title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",description:"Calculate the progress off a scrollaway navigation element.",source:"@site/docs/Interaction/Scrollaway.md",sourceDirName:"Interaction",slug:"/Interaction/Scrollaway",permalink:"/OrigamiStudio/docs/Interaction/Scrollaway",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Interaction/Scrollaway.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scroll \u6eda\u52a8",permalink:"/OrigamiStudio/docs/Interaction/Scroll"},next:{title:"Logic \u903b\u8f91",permalink:"/OrigamiStudio/docs/category/logic-\u903b\u8f91"}},p={},u=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:u};function f(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scrollaway-\u6eda\u52a8\u8ddd\u79bb"},"Scrollaway \u6eda\u52a8\u8ddd\u79bb"),(0,a.kt)("p",null,"Calculate the progress off a scrollaway navigation element."),(0,a.kt)("p",null,"\u8ba1\u7b97\u6eda\u52a8\u5bfc\u822a\u5143\u7d20\u7684\u8fdb\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b47c217-5437-4614-be9c-f1142973dc88/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171249Z&X-Amz-Expires=86400&X-Amz-Signature=ee6b82b410e1327a73382988003abb715586c406a0b148dafe9dc1b18c99e480&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scroll Position \u6eda\u52a8\u4f4d\u7f6e")),(0,a.kt)("p",null,"The current scroll position from a Scroll patch."),(0,a.kt)("p",null,"Scroll \u6eda\u52a8 \u6a21\u5757\u7684\u5f53\u524d\u6eda\u52a8\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scrollaway Offset \u6eda\u52a8\u504f\u79fb")),(0,a.kt)("p",null,"The offset the element should be scrolled away by."),(0,a.kt)("p",null,"\u5143\u7d20\u6eda\u52a8\u4f4d\u79fb\u7684\u504f\u79fb\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bottom Bound \u4e0b\u8fb9\u754c")),(0,a.kt)("p",null,"A number that represents the lowest bound of the Scroll (ex: -1500). Get this by scrolling the layer to the top and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u7684\u6700\u4f4e\u8fb9\u754c\uff08\u4f8b\u5982\uff1a-1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u9876\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Top Bound \u4e0a\u8fb9\u754c")),(0,a.kt)("p",null,"A number that represents the highest bound of the Scroll (ex: 1500). Get this by scrolling the layer to the bottom and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u6700\u9ad8\u8fb9\u754c\uff08\u4f8b\u5982\uff1a1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u5e95\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Progress \u8fdb\u5ea6")),(0,a.kt)("p",null,"A number from 0-1 that represents the progress of the scrollaway. Connect to Transition patches to convert it to the position, scale, opacity or any other property."),(0,a.kt)("p",null,"\u4e00\u4e2a 0-1 \u7684\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u8fdb\u5ea6\uff0c\u8fde\u63a5\u5230 Transition \u6a21\u5757\u4ee5\u5c06\u5176\u8f6c\u6362\u4e3a\u4f4d\u7f6e\u3001\u6bd4\u4f8b\u3001\u4e0d\u900f\u660e\u5ea6\u6216\u5176\u4ed6\u5c5e\u6027\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,a.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Transition-105402795ee34baea7dd7a6b4bb251cc"},"Transition \u8fc7\u6e21")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Scroll-2f1508bfbec742279786513c26602209"},"Scroll \u6eda\u52a8")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5addc78b-baae-4f23-b686-526df6b04d33/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171257Z&X-Amz-Expires=86400&X-Amz-Signature=c8c2a73c45a3cc72e496140375fbe5f27a9fd2251e88b98ee8f96d0bfbb24f30&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}f.isMDXComponent=!0}}]);