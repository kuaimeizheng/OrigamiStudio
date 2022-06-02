"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8543],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={sidebar_position:2},s="Peek Pop \u8f7b\u538b\u91cd\u538b",l={unversionedId:"Interaction/Peek Pop",id:"Interaction/Peek Pop",title:"Peek Pop \u8f7b\u538b\u91cd\u538b",description:"Allows you to build prototypes using Apple\u2019s Peek/Pop 3D Touch feature from iOS 9. This patch takes in a touch force and exposes peek progress, pop progress and whether or not the current content should be peeking or popped.",source:"@site/docs/Interaction/Peek Pop.md",sourceDirName:"Interaction",slug:"/Interaction/Peek Pop",permalink:"/OrigamiStudio/docs/Interaction/Peek Pop",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Interaction/Peek Pop.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mouse \u9f20\u6807",permalink:"/OrigamiStudio/docs/Interaction/Mouse"},next:{title:"Pop Switch \u6d41\u884c\u5f00\u5173",permalink:"/OrigamiStudio/docs/Interaction/Pop Switch"}},c={},u=[{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"<strong>Sample  \u793a\u4f8b</strong>",id:"sample--\u793a\u4f8b",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"peek-pop-\u8f7b\u538b\u91cd\u538b"},"Peek Pop \u8f7b\u538b\u91cd\u538b"),(0,a.kt)("p",null,"Allows you to build prototypes using Apple\u2019s Peek/Pop 3D Touch feature from iOS 9. This patch takes in a touch force and exposes peek progress, pop progress and whether or not the current content should be peeking or popped."),(0,a.kt)("p",null,"\u5141\u8bb8\u4f60\u4f7f\u7528 iOS 9\u7684\u82f9\u679c Peek/Pop 3D Touch \u529f\u80fd\u6765\u6784\u5efa\u539f\u578b\u3002\u8fd9\u4e2a\u6a21\u5757\u5728\u89e6\u6478\u529b\u5ea6\u548c\u8f7b\u538b\u529b\u5ea6\uff0c\u91cd\u538b\u529b\u5ea6\u4ee5\u53ca\u662f\u5426\u5141\u8bb8\u5f53\u524d\u7684\u5185\u5bb9\u53ef\u4ee5\u88ab\u8f7b\u538b\u6216\u91cd\u538b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19a9918f-9d5e-4a6b-9bb0-0285f9804e8c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171340Z&X-Amz-Expires=86400&X-Amz-Signature=aa894315e380553cba4b8bc8ecce388c6d02f088741147d762eb0617fe57746d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Pop \u542f\u7528\u8f7b\u538b")),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u63a5\u6536\u5230\u4ea4\u4e92\u6a21\u5757\u542f\u7528\u65f6\u4e3a\u771f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Force \u538b\u529b")),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u63a5\u6536\u5230\u7684\u89e6\u6478\u7684\u538b\u529b\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reset \u91cd\u7f6e")),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u91cd\u7f6e\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Peek Force \u8f7b\u538b\u529b\u5ea6")),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8fbe\u5230\u8f7b\u538b\u6240\u9700\u7684\u529b\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pop Force \u91cd\u538b\u529b\u5ea6")),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8fbe\u5230\u91cd\u538b\u6240\u9700\u7684\u529b\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Peek Progress \u8f7b\u538b\u8fdb\u5ea6")),(0,a.kt)("p",null,"\u4e00\u4e2a\u4ece0\u52301\u7684\u6570\u5b57\u52a8\u753b\uff0c\u8868\u793a\u5f53\u524d\u8f7b\u538b\u7684\u529b\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Popped Progress \u91cd\u538b\u8fdb\u5ea6")),(0,a.kt)("p",null,"\u4e00\u4e2a\u4ece0\u52301\u7684\u6570\u5b57\u52a8\u753b\uff0c\u8868\u793a\u5f53\u524d\u91cd\u538b\u7684\u529b\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Peeking \u662f\u5426\u8f7b\u538b")),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u662f\u5426\u88ab\u8f7b\u538b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Popped \u662f\u5426\u91cd\u538b")),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u662f\u5426\u88ab\u91cd\u538b\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc"},"Interaction \u4ea4\u4e92")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sample--\u793a\u4f8b"},(0,a.kt)("strong",{parentName:"h3"},"Sample  \u793a\u4f8b")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5b9c5b4a-7f9e-4621-bb9d-26b9e9f75051/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171347Z&X-Amz-Expires=86400&X-Amz-Signature=12a7a19385e55c935745c4298bd6f23ae2e8bef2c5839d594d66121acfc3b2be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,"\u5982\u56fe\uff1a"),(0,a.kt)("p",null,"\u5f53\u68c0\u6d4b\u5230\u6309\u4e0b\u65f6\uff0c Enable Pop \u8f93\u5165\u7aef\u53e3\u4e3a\u771f\uff0cForce \u8f93\u5165\u7aef\u53e3\u663e\u793a\u5f53\u524d\u538b\u529b\u503c\u7684\u6570\u5b57\uff0c\u5f53\u538b\u529b\u503c\u4ece 0 \u5230 3 \u65f6\uff0cPeek Progress \u8f93\u51fa\u7aef\u53e3\u505a\u4ece 0 \u5230 1 \u7684\u52a8\u753b\uff0c\u5e76\u8f93\u51fa\u4e3a 1\uff0c\u5f53\u524d\u538b\u529b\u503c\u4ece 3 \u5230 6.65 \u65f6\uff0cPopped Progress \u8f93\u51fa\u7aef\u53e3\u4ece 0 \u5230 1 \u7684\u52a8\u753b\uff0c\u5e76\u8f93\u51fa\u4e3a 1\uff0c\u5f53\u538b\u529b\u503c\u8fbe\u5230 3 \u548c 6.65 \u65f6\uff0cPeeking \u548cPopped \u7aef\u53e3\u8f93\u51fa\u4e3a\u771f\u3002"))}m.isMDXComponent=!0}}]);