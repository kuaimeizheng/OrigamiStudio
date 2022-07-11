"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2383],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],o={sidebar_position:2},p="Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",u={unversionedId:"documentation/Device/Trackpad Haptic",id:"documentation/Device/Trackpad Haptic",title:"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9",description:"Access the haptic engine on a macOS trackpad.",source:"@site/docs/documentation/Device/Trackpad Haptic.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Trackpad Haptic",permalink:"/OrigamiStudio/docs/documentation/Device/Trackpad Haptic",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Trackpad Haptic.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657510818,formattedLastUpdatedAt:"2022\u5e747\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Touches \u89e6\u6478",permalink:"/OrigamiStudio/docs/documentation/Device/Touches"},next:{title:"Trackpad \u89e6\u63a7\u677f",permalink:"/OrigamiStudio/docs/documentation/Device/Trackpad"}},l={},d=[{value:"PlaY",id:"play",level:3},{value:"Type",id:"type",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trackpad-haptic-\u89e6\u63a7\u677f\u89e6\u89c9"},"Trackpad Haptic \u89e6\u63a7\u677f\u89e6\u89c9"),(0,i.kt)("p",null,"Access the haptic engine on a macOS trackpad."),(0,i.kt)("p",null,"\u5728macOS\u89e6\u63a7\u677f\u4e0a\u8bbf\u95ee\u89e6\u89c9\u5f15\u64ce\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(28650).Z,width:"1184",height:"228"})),(0,i.kt)("h3",{id:"play"},"PlaY"),(0,i.kt)("p",null,"A pulse that plays the selected haptic feedback."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u64ad\u653e\u9009\u5b9a\u7684\u89e6\u89c9\u53cd\u9988\u3002"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("p",null,"The type of haptic response to activate on the macOS trackpad (Alignment, Level Change)"),(0,i.kt)("p",null,"\u5728macOS\u89e6\u63a7\u677f\u4e0a\u6fc0\u6d3b\u7684\u89e6\u89c9\u53cd\u5e94\u7c7b\u578b(\u5bf9\u9f50\uff0c\u7ea7\u522b\u66f4\u6539)"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Vibrate"},"Vibrate \u9707\u52a8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Haptic"},"Haptic \u89e6\u89c9")))}m.isMDXComponent=!0},28650:function(e,t,n){t.Z=n.p+"assets/images/trackpad-haptic-a17b35ff828eb0ca9530d07718515a21.png"}}]);