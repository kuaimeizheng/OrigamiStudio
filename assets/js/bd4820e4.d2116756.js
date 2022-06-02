"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3573],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4322:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},p="Double Tap \u53cc\u51fb",s={unversionedId:"Interaction/Double Tap",id:"Interaction/Double Tap",title:"Double Tap \u53cc\u51fb",description:"Capture double taps or single taps within a specified time frame. To be used with the Tap port in the Interaction patch.",source:"@site/docs/Interaction/Double Tap.md",sourceDirName:"Interaction",slug:"/Interaction/Double Tap",permalink:"/OrigamiStudio/docs/Interaction/Double Tap",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Interaction/Double Tap.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interaction \u4ea4\u4e92",permalink:"/OrigamiStudio/docs/category/interaction-\u4ea4\u4e92"},next:{title:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e",permalink:"/OrigamiStudio/docs/Interaction/Drag Settings"}},l={},u=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"double-tap-\u53cc\u51fb"},"Double Tap \u53cc\u51fb"),(0,o.kt)("p",null,"Capture double taps or single taps within a specified time frame. To be used with the Tap port in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/f0d3991c97e346fcaae69a6c4c8c5bd1"},"Interaction")," patch."),(0,o.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,o.kt)("p",null,"\u6355\u6349\u6307\u5b9a\u65f6\u95f4\u5185\u7684\u53cc\u51fb\u6216\u5355\u51fb\u3002\u4e0e Interaction \u6a21\u5757\u7684Tap \u8f93\u51fa\u63a5\u53e3\u8fde\u63a5\u5728\u4e00\u8d77\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/704baf32-c3e6-4ef4-97bd-3a303001bf31/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170559Z&X-Amz-Expires=86400&X-Amz-Signature=4f520af896073c4c5be71bc8179b3fae7622cd414d2c9e9509b520badaaa0c08&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tap \u8f7b\u70b9")),(0,o.kt)("p",null,"A pulse that comes from the Interaction patch\u2019s Tap output."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u4ea4\u4e92\u6a21\u5757\u7684 Tap \u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Delay \u5ef6\u8fdf")),(0,o.kt)("p",null,"The maximum time duration between two taps to activate a double tap. By default, the delay is 0.3s."),(0,o.kt)("p",null,"\u5728\u6700\u5927\u6301\u7eed\u65f6\u95f4\u5185\u70b9\u51fb\u4e24\u6b21\u80fd\u6fc0\u6d3b\u53cc\u51fb\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5ef6\u8fdf\u4e3a0.3\u79d2\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Double Tap \u53cc\u51fb")),(0,o.kt)("p",null,"Pulses when two taps occur in the specified delay"),(0,o.kt)("p",null,"\u5f53\u53cc\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Single Tap \u5355\u51fb")),(0,o.kt)("p",null,"Pulses when one tap occurs in the specified delay"),(0,o.kt)("p",null,"\u5f53\u70b9\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,o.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc"},"Interaction \u4ea4\u4e92")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Mouse-7e67b503f9a44bc8bfff08505144b8c0"},"Mouse \u9f20\u6807")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Long-Press-f6f170c58c5d48938720250735334f34"},"Long Press \u957f\u6309")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Touches-2a30a276b98e4c11b8b23bda1cde914c"},"Touches \u89e6\u6478")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Trackpad-b999de442b7342ed9a00aa3f9547ea65"},"Trackpad \u89e6\u63a7\u677f")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c95fd539-3c14-4ff8-b278-917ff7da8af4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170552Z&X-Amz-Expires=86400&X-Amz-Signature=033c838a211d677b053f1e7df65b8cc75fe059885262df2bcd4d5acc0498f543&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}f.isMDXComponent=!0}}]);