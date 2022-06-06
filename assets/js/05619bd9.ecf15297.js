"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3079],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,c(c({ref:t},s),{},{components:a})):r.createElement(f,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4936:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),c=["components"],o={sidebar_position:2},p="Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",l={unversionedId:"Device/Trackpad Haptic",id:"Device/Trackpad Haptic",title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",description:"Access the haptic engine on a macOS trackpad.",source:"@site/docs/Device/Trackpad Haptic.md",sourceDirName:"Device",slug:"/Device/Trackpad Haptic",permalink:"/OrigamiStudio/docs/Device/Trackpad Haptic",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Device/Trackpad Haptic.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654509971,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touches \u89e6\u6478",permalink:"/OrigamiStudio/docs/Device/Touches"},next:{title:"Trackpad \u89e6\u63a7\u677f",permalink:"/OrigamiStudio/docs/Device/Trackpad"}},s={},u=[{value:"PlaY",id:"play",level:3},{value:"Type",id:"type",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trackpad-haptic-\u89e6\u63a7\u677f\u89e6\u89c9"},"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9"),(0,i.kt)("p",null,"Access the haptic engine on a macOS trackpad."),(0,i.kt)("p",null,"\u5728macOS\u89e6\u63a7\u677f\u4e0a\u8bbf\u95ee\u89e6\u89c9\u5f15\u64ce\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/48ad53e6-bc63-4743-9415-f9f63e1f0e34/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170410Z&X-Amz-Expires=86400&X-Amz-Signature=0dacce4b22fabaa45109704afa69eb7e60eb0e24c91714b423e5655a15345a18&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,i.kt)("h3",{id:"play"},"PlaY"),(0,i.kt)("p",null,"A pulse that plays the selected haptic feedback."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u64ad\u653e\u9009\u5b9a\u7684\u89e6\u89c9\u53cd\u9988\u3002"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("p",null,"The type of haptic response to activate on the macOS trackpad (Alignment, Level Change)"),(0,i.kt)("p",null,"\u5728macOS\u89e6\u63a7\u677f\u4e0a\u6fc0\u6d3b\u7684\u89e6\u89c9\u53cd\u5e94\u7c7b\u578b(\u5bf9\u9f50\uff0c\u7ea7\u522b\u66f4\u6539)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Device/Vibrate"},"Vibrate \u9707\u52a8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Device/Haptic"},"Haptic \u89e6\u89c9")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da257f22-c75f-4ece-a8dd-2556da49b310/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170417Z&X-Amz-Expires=86400&X-Amz-Signature=e4c6cd1d68a963cf14de681c5d3c260289a73e8ad249956cadfeccd497e1b302&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);