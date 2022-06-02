"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2892],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},l="Interaction \u4ea4\u4e92",s={unversionedId:"Interaction/Interaction",id:"Interaction/Interaction",title:"Interaction \u4ea4\u4e92",description:"Capture touch events on specific layers. Note that layers must be enabled and have an opacity larger than 0 to receive touches.",source:"@site/docs/Interaction/Interaction.md",sourceDirName:"Interaction",slug:"/Interaction/",permalink:"/OrigamiStudio/docs/Interaction/",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Interaction/Interaction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hover \u60ac\u505c",permalink:"/OrigamiStudio/docs/Interaction/Hover"},next:{title:"Keyboard \u952e\u76d8",permalink:"/OrigamiStudio/docs/Interaction/Keyboard"}},p={},u=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interaction-\u4ea4\u4e92"},"Interaction \u4ea4\u4e92"),(0,a.kt)("p",null,"Capture touch events on specific layers. Note that layers must be enabled and have an opacity larger than 0 to receive touches."),(0,a.kt)("p",null,"\u6355\u83b7\u6307\u5b9a\u56fe\u5c42\u4e0a\u7684\u89e6\u6478\u4e8b\u4ef6\u3002\u8bf7\u6ce8\u610f\uff0c\u56fe\u5c42\u5fc5\u987b\u542f\u7528\u5e76\u4e14\u4e0d\u900f\u660e\u5ea6\u5927\u4e8e 0 \u624d\u80fd\u63a5\u6536\u89e6\u6478\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"Detect ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Double-Tap-47170ee048384400a023e5749b34d441"},"Double Tap")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Long-Press-f6f170c58c5d48938720250735334f34"},"Long Press")," with additional patches."),(0,a.kt)("p",null,"\u9700\u4f7f\u7528\u989d\u5916\u7684\u6a21\u5757\u68c0\u6d4b Double Tap \u6216\u8005 Long Press\u3002"),(0,a.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,a.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch\u89e6\u6478 \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c78945f-a37d-46dd-aa8e-ef264317648e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170843Z&X-Amz-Expires=86400&X-Amz-Signature=8168d724e1ca2754cfbd107043278c1dfa203c14b6940254760bdaf01b27ef98&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Layer \u56fe\u5c42")),(0,a.kt)("p",null,"The layer to check for touch interactions. When no layer is specified, the touches on the whole screen are registered."),(0,a.kt)("p",null,"\u68c0\u67e5\u89e6\u6478\u4ea4\u4e92\u7684\u56fe\u5c42\u3002\u5f53\u6ca1\u6709\u6307\u5b9a\u56fe\u5c42\u65f6\uff0c\u89e6\u6478\u5c06\u4f1a\u4f5c\u7528\u5728\u6574\u4e2a\u5c4f\u5e55\u4e0a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable \u542f\u7528")),(0,a.kt)("p",null,"A boolean that is true when touch detection is on. To disable interactions on this layer, disable it."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u89e6\u6478\u68c0\u6d4b\u542f\u7528\u65f6\u4e3a\u771f\u3002\u8981\u7981\u7528\u6b64\u56fe\u5c42\u4e0a\u7684\u4ea4\u4e92\uff0c\u8bf7\u7981\u7528\u5b83\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Down \u6309\u4e0b")),(0,a.kt)("p",null,"A boolean that is true when there is a touch on the layer."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u56fe\u5c42\u4e0a\u6709\u89e6\u6478\u65f6\u4e3a\u771f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tap \u8f7b\u6309")),(0,a.kt)("p",null,"A pulse that represents the moment a touch has been released from the layer (touch up) as long as the touch is inside of the layer and hasn\u2019t moved."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u89e6\u6478\u5728\u56fe\u5c42\u4e0a\u6ca1\u6709\u79fb\u52a8\uff0c\u5e76\u4e14\u5728\u56fe\u5c42\u4e0a\u91ca\u653e\u89e6\u6478\u7684\u90a3\u4e00\u523b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Position \u4f4d\u7f6e")),(0,a.kt)("p",null,"The position of the touch, relative to the center of the layer\u2019s parent group or device"),(0,a.kt)("p",null,"\u89e6\u6478\u7684\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u7236\u7ec4\u6216\u8bbe\u5907\u7684\u4e2d\u5fc3\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Force \u538b\u529b")),(0,a.kt)("p",null,"A number between 0 and 6.67 that represents the force of the touch."),(0,a.kt)("p",null,"\u4e00\u4e2a\u4ecb\u4e8e 0 \u5230 6.67 \u4e4b\u95f4\u7684\u6570\u503c\uff0c\u8868\u793a\u89e6\u6478\u7684\u529b\u5ea6\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,a.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Hover-8a951bdf20e149c38bef9ac012568e7c"},"Hover \u60ac\u505c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Double-Tap-47170ee048384400a023e5749b34d441"},"Double Tap \u53cc\u51fb")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Long-Press-f6f170c58c5d48938720250735334f34"},"Long Press \u957f\u6309")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Scroll-2f1508bfbec742279786513c26602209"},"Scroll \u6eda\u52a8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Gesture-15b95cc3df9a4392808b8eec7af17734"},"Gesture \u624b\u52bf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Mouse-7e67b503f9a44bc8bfff08505144b8c0"},"Mouse \u9f20\u6807")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Touches-2a30a276b98e4c11b8b23bda1cde914c"},"Touches \u89e6\u6478")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Trackpad-b999de442b7342ed9a00aa3f9547ea65"},"Trackpad \u89e6\u63a7\u677f")))}f.isMDXComponent=!0}}]);