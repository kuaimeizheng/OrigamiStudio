"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[8428],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},u="Hit Area \u70b9\u51fb\u70ed\u533a",c={unversionedId:"documentation/Layer/Hit Area",id:"documentation/Layer/Hit Area",title:"Hit Area \u70b9\u51fb\u70ed\u533a",description:"Add interaction to a specific rectangle on the screen. Toggle the \u2018Setup Mode\u2019 of the hit area to see where it\u2019s positioned.",source:"@site/docs/documentation/Layer/Hit Area.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Hit Area",permalink:"/OrigamiStudio/docs/documentation/Layer/Hit Area",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Hit Area.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657511776,formattedLastUpdatedAt:"2022\u5e747\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Group \u7ec4",permalink:"/OrigamiStudio/docs/documentation/Layer/Group"},next:{title:"Image File \u56fe\u50cf\u6587\u4ef6",permalink:"/OrigamiStudio/docs/documentation/Layer/Image File"}},p={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Setup Mode \u8bbe\u7f6e\u6a21\u5f0f",id:"setup-mode-\u8bbe\u7f6e\u6a21\u5f0f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hit-area-\u70b9\u51fb\u70ed\u533a"},"Hit Area \u70b9\u51fb\u70ed\u533a"),(0,o.kt)("p",null,"Add interaction to a specific rectangle on the screen. Toggle the \u2018Setup Mode\u2019 of the hit area to see where it\u2019s positioned."),(0,o.kt)("p",null,"\u5c06\u4ea4\u4e92\u6dfb\u52a0\u5230\u7279\u5b9a\u7684\u77e9\u5f62\u4e0a\u3002\u5c5e\u6027\u201cSetup Mode\u201d\u9009\u4e2d\u65f6\uff0c\u67e5\u770b\u5668\u663e\u793a\u4e00\u4e2a\u7ea2\u8272\u77e9\u5f62\uff0c\u7528\u6765\u67e5\u770b\u70ed\u533a\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,"\u4f8b\uff1a\u5047\u8bbe\u63d2\u5165\u4e86\u4e00\u5f20\u754c\u9762\u56fe\uff0c\u56fe\u91cc\u6709\u4e2a\u6309\u94ae\uff0c\u5728\u6309\u94ae\u4e0a\u76d6\u4e00\u4e2a\u70ed\u533a\u5c31\u80fd\u5b9e\u73b0\u70b9\u51fb\u70ed\u533a\u6fc0\u6d3b\u4ea4\u4e92\uff1b\u79fb\u5165\u6216\u70b9\u51fb\u65f6\u6ca1\u6709\u6309\u94ae\u6ca1\u6709\u53d8\u5316\u7684\u65f6\u5019\u9002\u5408\u7528\u70ed\u533a\u3002"),(0,o.kt)("div",{class:"patch-container"},(0,o.kt)("div",{class:"patch layer"},(0,o.kt)("h3",null,"Hit Area"),(0,o.kt)("ul",{class:"inputs"},(0,o.kt)("li",null,"Enable"),(0,o.kt)("li",null,"Position"),(0,o.kt)("li",null,"Anchor"),(0,o.kt)("li",null,"Size"),(0,o.kt)("li",null,"Opacity"),(0,o.kt)("li",null,"Setup Mode")))),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,o.kt)("p",null,"\u52fe\u9009\u542f\u7528\u56fe\u5c42\u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"The position to display the layer. Use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,o.kt)("p",null,"\u663e\u793a\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,o.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,o.kt)("p",null,"\u76f8\u5bf9\u4e8e\u56fe\u5c42\u5b9a\u4f4d\u7684\u951a\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,o.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,o.kt)("p",null,"The size of the layer."),(0,o.kt)("p",null,"\u56fe\u5c42\u7684\u5927\u5c0f"),(0,o.kt)("h3",{id:"setup-mode-\u8bbe\u7f6e\u6a21\u5f0f"},"Setup Mode \u8bbe\u7f6e\u6a21\u5f0f"),(0,o.kt)("p",null,"A boolean that is true when the hit area is in setup mode."),(0,o.kt)("p",null,"\u52fe\u9009\u65f6\u663e\u793a\u70ed\u533a\u8303\u56f4\u53ca\u4f4d\u7f6e\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"))}m.isMDXComponent=!0}}]);