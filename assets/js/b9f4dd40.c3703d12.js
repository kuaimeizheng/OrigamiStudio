"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[966],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},3009:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:2},u="Touches \u89e6\u6478",p={unversionedId:"Device/Touches",id:"Device/Touches",title:"Touches \u89e6\u6478",description:"Capture the touches from the simulated or connected phone, tablet or computer.",source:"@site/docs/Device/Touches.md",sourceDirName:"Device",slug:"/Device/Touches",permalink:"/OrigamiStudio/docs/Device/Touches",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Device/Touches.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sound Player \u58f0\u97f3\u64ad\u653e\u5668",permalink:"/OrigamiStudio/docs/Device/Sound Player"},next:{title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",permalink:"/OrigamiStudio/docs/Device/Trackpad Haptic"}},s={},d=[{value:"Touches \u89e6\u6478###",id:"touches-\u89e6\u6478-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],l={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"touches-\u89e6\u6478"},"Touches \u89e6\u6478"),(0,o.kt)("p",null,"Capture the touches from the simulated or connected phone, tablet or computer."),(0,o.kt)("p",null,"Read the JSON with the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Data/JSON%20to%20Text"},"Structure Formatter")," patch connected to a Text Layer. Get an individual touch with an ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Data/Value%20at%20Index"},"Object at Index")," patch Read an individual touch\u2019s position or force with ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Data/Value%20for%20Key"},"Structure Key")," and a ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Splitter"},"Splitter")," set to position or number to cast the value."),(0,o.kt)("p",null,"\u4ece\u6a21\u62df\u6216\u8fde\u63a5\u7684\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u6355\u6349\u89e6\u6478\u3002 \u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Data/JSON%20to%20Text"},"Structure Formatter")," \u6a21\u5757\u8fde\u63a5\u4e00\u4e2a\u6587\u672c\u5c42\u4ee5\u8bfb\u53d6JSON\u683c\u5f0f\u7a0b\u5e8f\u3002\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Data/Value%20at%20Index"},"Object at Index")," \u6a21\u5757\u83b7\u5f97\u4e00\u4e2a\u5355\u72ec\u7684\u89e6\u6478\uff0c\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Touches-2a30a276b98e4c11b8b23bda1cde914c"},"Structure Key")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Splitter"},"Splitter")," \u6a21\u5757\u8bfb\u53d6\u5355\u4e2a\u89e6\u6478\u7684\u4f4d\u7f6e\u6216\u529b\u5ea6\uff0c\u8bbe\u7f6e\u4f4d\u7f6e\u6216\u6570\u5b57\u4ee5\u8f6c\u6362\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9eda2dd6-f9b3-4c6a-bf88-3b27d3aed4f8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170340Z&X-Amz-Expires=86400&X-Amz-Signature=4d83787221805aff872b707bb746aaad17a79cbe46b10f28bf926a489d25f4fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("h3",{id:"touches-\u89e6\u6478-1"},"Touches \u89e6\u6478###"),(0,o.kt)("p",null,"A JSON object containing information about the position and force of every touch on the viewer and/or device."),(0,o.kt)("p",null,"\u4e00\u4e2aJSON\u5bf9\u8c61\uff0c\u5305\u542b\u6bcf\u4e2a\u5728\u67e5\u770b\u5668\u548c/\u6216\u8bbe\u5907\u4e0a\u7684\u89e6\u6478\u4f4d\u7f6e\u548c\u529b\u5ea6\u4fe1\u606f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Splitter"},"Splitter \u5206\u79bb\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction \u4ea4\u4e92")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Data/Value%20for%20Key"},"Value for Key \u5173\u952e\u503c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Data/Value%20at%20Index"},"Value at Index \u7d22\u5f15\u503c")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b7855f6d-11eb-4dbd-bc8b-ccd02e8d0cfe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170347Z&X-Amz-Expires=86400&X-Amz-Signature=85168dbb7a005d0c966116ee0c226b4d54d36b5c7c5c8d4d5c37e9a96cfb5253&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);