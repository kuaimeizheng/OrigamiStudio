"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[46321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Gesture \u624b\u52bf",l={unversionedId:"documentation/Interaction/Gesture",id:"documentation/Interaction/Gesture",title:"Gesture \u624b\u52bf",description:"A more advanced Interaction patch (see Interaction for more information). Provides translation and velocity as outputs to build interruptible animations (e.g. with Spring Animation).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Interaction/Gesture.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Gesture",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Gesture",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Gesture.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Drag \u62d6\u62fd",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Drag"},next:{title:"Hover \u60ac\u505c",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Hover"}},c={},s=[{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Enabled \u542f\u7528",id:"enabled-\u542f\u7528",level:3},{value:"Down \u6309\u4e0b",id:"down-\u6309\u4e0b",level:3},{value:"Tap \u8f7b\u89e6",id:"tap-\u8f7b\u89e6",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Velocity \u901f\u5ea6",id:"velocity-\u901f\u5ea6",level:3},{value:"Translation \u8fc7\u6e21",id:"translation-\u8fc7\u6e21",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gesture-\u624b\u52bf"},"Gesture \u624b\u52bf"),(0,o.kt)("p",null,"A more advanced Interaction patch (see ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc"},"Interaction")," for more information). Provides translation and velocity as outputs to build interruptible animations (e.g. with ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Spring-Animation-a19684147ec740ccbf6d62d962990a98"},"Spring Animation"),")."),(0,o.kt)("p",null,"\u9ad8\u7ea7\u4ea4\u4e92\u6a21\u5757\uff08\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ea4\u4e92\uff09\u3002\u63d0\u4f9b\u5e73\u79fb\u548c\u901f\u5ea6\u6765\u6784\u5efa\u53ef\u4e2d\u65ad\u7684\u52a8\u753b\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 Spring Animation\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(60845).Z,width:"1550",height:"378"})),(0,o.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,o.kt)("p",null,"The layer to check for touch interactions. When no layer is specified, the touches on the whole screen are registered."),(0,o.kt)("p",null,"\u68c0\u67e5\u89e6\u6478\u4ea4\u4e92\u7684\u56fe\u5c42\u3002\u672a\u6307\u5b9a\u56fe\u5c42\u65f6\uff0c\u5c06\u89e6\u6478\u6574\u4e2a\u5c4f\u5e55\u3002"),(0,o.kt)("h3",{id:"enabled-\u542f\u7528"},"Enabled \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when touch detection is on. To disable interactions on this layer, disable it."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6253\u5f00\u89e6\u6478\u68c0\u6d4b\u65f6\u4e3a\u771f\u3002\u8981\u7981\u7528\u6b64\u5c42\u4e0a\u7684\u4ea4\u4e92\uff0c\u8bf7\u7981\u7528\u5b83\u3002"),(0,o.kt)("h3",{id:"down-\u6309\u4e0b"},"Down \u6309\u4e0b"),(0,o.kt)("p",null,"A boolean that is true when there is a touch on the layer."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u56fe\u5c42\u4e0a\u6709\u89e6\u6478\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"tap-\u8f7b\u89e6"},"Tap \u8f7b\u89e6"),(0,o.kt)("p",null,"A pulse that represents the moment a touch has been released from the layer (touch up) as long as the touch is inside of the layer and hasn\u2019t moved."),(0,o.kt)("p",null,"\u4e00\u79cd\u8109\u51b2\uff0c\u8868\u793a\u53ea\u8981\u89e6\u6478\u5728\u56fe\u5c42\u5185\u4e14\u672a\u79fb\u52a8\uff0c\u89e6\u6478\u5df2\u4ece\u56fe\u5c42\u4e2d\u91ca\u653e\uff08\u89e6\u78b0\uff09\u7684\u65f6\u523b\u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"The position of the touch, relative to the center of the layer\u2019s parent group or device"),(0,o.kt)("p",null,"\u89e6\u6478\u7684\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u7236\u7ec4\u6216\u8bbe\u5907\u7684\u4e2d\u5fc3"),(0,o.kt)("h3",{id:"velocity-\u901f\u5ea6"},"Velocity \u901f\u5ea6"),(0,o.kt)("p",null,"The current velocity of the touch in points per second."),(0,o.kt)("p",null,"\u89e6\u6478\u7684\u5f53\u524d\u901f\u5ea6\uff0c\u5355\u4f4d\u662f\u70b9/\u79d2\u3002"),(0,o.kt)("h3",{id:"translation-\u8fc7\u6e21"},"Translation \u8fc7\u6e21"),(0,o.kt)("p",null,"The translation of the touch relative to where the touch initially started."),(0,o.kt)("p",null,"\u89e6\u6478\u7684\u5e73\u79fb\u76f8\u5bf9\u4e8e\u89e6\u6478\u6700\u521d\u5f00\u59cb\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Spring-Animation-a19684147ec740ccbf6d62d962990a98"},"Spring Animation \u5f39\u6027\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Interaction-8cd3ac66434546eda4b4bcf8173958fc"},"Interaction \u4ea4\u4e92")))}p.isMDXComponent=!0},60845:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gesture-62699adac052b8bd4d6f2ee9ca1a539d.png"}}]);