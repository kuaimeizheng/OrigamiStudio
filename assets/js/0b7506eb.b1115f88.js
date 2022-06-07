"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4427],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},55035:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={sidebar_position:2},c="Keyboard \u952e\u76d8",u={unversionedId:"Interaction/Keyboard",id:"Interaction/Keyboard",title:"Keyboard \u952e\u76d8",description:"Capture key presses from the computer keyboard. Useful for quickly toggling a switch.",source:"@site/docs/Interaction/Keyboard.md",sourceDirName:"Interaction",slug:"/Interaction/Keyboard",permalink:"/OrigamiStudio/docs/Interaction/Keyboard",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Interaction/Keyboard.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interaction \u4ea4\u4e92",permalink:"/OrigamiStudio/docs/Interaction/"},next:{title:"Long Press \u957f\u6309",permalink:"/OrigamiStudio/docs/Interaction/Long Press"}},d={},p=[{value:"Key \u952e",id:"key-\u952e",level:3},{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:p};function f(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keyboard-\u952e\u76d8"},"Keyboard \u952e\u76d8"),(0,i.kt)("p",null,"Capture key presses from the computer keyboard. Useful for quickly toggling a switch."),(0,i.kt)("p",null,"\u4ece\u8ba1\u7b97\u673a\u952e\u76d8\u4e2d\u6355\u83b7\u6309\u952e\u3002\u7528\u4e8e\u5feb\u901f\u62e8\u52a8\u5f00\u5173\u3002"),(0,i.kt)("p",null,"Use a ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Text%20Field"},"Material Text Field")," or ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Text%20Field"},"iOS Text Field")," for free text input."),(0,i.kt)("p",null,"\u4f7f\u7528Material Text Field\u6216iOS Text Field\u4f5c\u4e3a\u81ea\u7531\u6587\u672c\u8f93\u5165\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(52930).Z,width:"1226",height:"200"})),(0,i.kt)("h3",{id:"key-\u952e"},"Key \u952e"),(0,i.kt)("p",null,"A text string that represents the key on the keyboard to capture."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8981\u6355\u83b7\u7684\u952e\u76d8\u4e0a\u7684\u6309\u952e\u3002"),(0,i.kt)("h3",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,i.kt)("p",null,"A boolean that is true when the key is pressed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6309\u952e\u88ab\u6309\u4e0b\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}f.isMDXComponent=!0},52930:function(e,t,r){t.Z=r.p+"assets/images/keyboard-dd86b38874941bb95d406c6a8fcb3f32.png"}}]);