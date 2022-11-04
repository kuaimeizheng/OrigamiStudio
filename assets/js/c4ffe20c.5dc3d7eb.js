"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[53893],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var i=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,i,l=function(e,t){if(null==e)return{};var o,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var d=i.createContext({}),u=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(o),h=l,m=c["".concat(d,".").concat(h)]||c[h]||s[h]||a;return o?i.createElement(m,n(n({ref:t},p),{},{components:o})):i.createElement(m,n({ref:t},p))}));function h(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,n=new Array(a);n[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:l,n[1]=r;for(var u=2;u<a;u++)n[u]=o[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}c.displayName="MDXCreateElement"},67875:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>s,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=o(87462),l=(o(67294),o(3905));const a={sidebar_position:5},n="Video Stream \u89c6\u9891\u6d41",r={unversionedId:"documentation/Layer/Video Stream",id:"documentation/Layer/Video Stream",title:"Video Stream \u89c6\u9891\u6d41",description:"A layer that can play a video stream using HTTP Live Streaming.",source:"@site/docs/documentation/Layer/Video Stream.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Video Stream",permalink:"/OrigamiStudio/docs/documentation/Layer/Video Stream",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Video Stream.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667575393,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Video Layer \u89c6\u9891\u56fe\u5c42",permalink:"/OrigamiStudio/docs/documentation/Layer/Video Layer"},next:{title:"Viewfinder \u53d6\u666f\u5668",permalink:"/OrigamiStudio/docs/documentation/Layer/Viewfinder"}},d={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Rotation \u65cb\u8f6c",id:"rotation-\u65cb\u8f6c",level:3},{value:"Pivot \u4e2d\u5fc3\u70b9",id:"pivot-\u4e2d\u5fc3\u70b9",level:3},{value:"URL \u94fe\u63a5",id:"url-\u94fe\u63a5",level:3},{value:"Play \u64ad\u653e",id:"play-\u64ad\u653e",level:3},{value:"Fill Style \u586b\u5145\u6837\u5f0f",id:"fill-style-\u586b\u5145\u6837\u5f0f",level:3},{value:"Shadow Color \u9634\u5f71\u989c\u8272",id:"shadow-color-\u9634\u5f71\u989c\u8272",level:3},{value:"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6",id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Shadow Radius \u9634\u5f71\u534a\u5f84",id:"shadow-radius-\u9634\u5f71\u534a\u5f84",level:3},{value:"Shadow Offset \u9634\u5f71\u504f\u79fb",id:"shadow-offset-\u9634\u5f71\u504f\u79fb",level:3},{value:"Video Rate \u89c6\u9891\u901f\u7387",id:"video-rate-\u89c6\u9891\u901f\u7387",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Volume \u97f3\u91cf",id:"volume-\u97f3\u91cf",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:u};function s(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"video-stream-\u89c6\u9891\u6d41"},"Video Stream \u89c6\u9891\u6d41"),(0,l.kt)("p",null,"A layer that can play a video stream using HTTP Live Streaming."),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 HTTP Live Streaming \u64ad\u653e\u89c6\u9891\u6d41\u7684\u56fe\u5c42\u3002"),(0,l.kt)("div",{class:"patch-container"},(0,l.kt)("div",{class:"patch layer"},(0,l.kt)("h3",null,"View Stream"),(0,l.kt)("ul",{class:"inputs"},(0,l.kt)("li",null,"Enable"),(0,l.kt)("li",null,"Position"),(0,l.kt)("li",null,"Anchor"),(0,l.kt)("li",null,"Size"),(0,l.kt)("li",null,"Opacity"),(0,l.kt)("li",null,"Scale"),(0,l.kt)("li",null,"Rotation"),(0,l.kt)("li",null,"Pivot"),(0,l.kt)("li",null,"URL"),(0,l.kt)("li",null,"Play"),(0,l.kt)("li",null,"Fill Style"),(0,l.kt)("li",null,"Shadow Color"),(0,l.kt)("li",null,"Shadow Opacity"),(0,l.kt)("li",null,"Shadow Radius"),(0,l.kt)("li",null,"Shadow Offset"),(0,l.kt)("li",null,"Video Raye"),(0,l.kt)("li",null,"Loop"),(0,l.kt)("li",null,"Volume"),">"))),(0,l.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,l.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u56fe\u5c42\u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,l.kt)("p",null,"The position to display the layer. Use ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,l.kt)("p",null,"\u56fe\u5c42\u7684\u663e\u793a\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"),(0,l.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,l.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,l.kt)("p",null,"\u76f8\u5bf9\u4e8e\u56fe\u5c42\u5b9a\u4f4d\u7684\u951a\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,l.kt)("h3",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,l.kt)("p",null,"The size of the layer."),(0,l.kt)("p",null,"\u56fe\u5c42\u7684\u5927\u5c0f\u3002"),(0,l.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,l.kt)("p",null,"The opacity of the layer."),(0,l.kt)("p",null,"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,l.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,l.kt)("p",null,"The scale of the layer."),(0,l.kt)("p",null,"\u56fe\u5c42\u663e\u793a\u7684\u6bd4\u4f8b\u3002"),(0,l.kt)("h3",{id:"rotation-\u65cb\u8f6c"},"Rotation \u65cb\u8f6c"),(0,l.kt)("p",null,"The rotation of the layer. Use ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set X or Y rotations."),(0,l.kt)("p",null,"\u56fe\u5c42\u7684\u65cb\u8f6c\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e X \u6216 Y \u65cb\u8f6c\u89d2\u5ea6\u3002"),(0,l.kt)("h3",{id:"pivot-\u4e2d\u5fc3\u70b9"},"Pivot \u4e2d\u5fc3\u70b9"),(0,l.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,l.kt)("p",null,"\u56fe\u5c42\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u79fb\u52a8\u65f6\u7684\u4e2d\u5fc3\u70b9\u6216\u521d\u59cb\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,l.kt)("h3",{id:"url-\u94fe\u63a5"},"URL \u94fe\u63a5"),(0,l.kt)("p",null,"A text string that represents the source URL of the .m3u8 video stream to play."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8981\u64ad\u653e\u7684.m3u8\u89c6\u9891\u6d41\u7684\u94fe\u63a5\u3002"),(0,l.kt)("h3",{id:"play-\u64ad\u653e"},"Play \u64ad\u653e"),(0,l.kt)("p",null,"A boolean that is true when the video is playing."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5728\u89c6\u9891\u64ad\u653e\u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"fill-style-\u586b\u5145\u6837\u5f0f"},"Fill Style \u586b\u5145\u6837\u5f0f"),(0,l.kt)("p",null,"The image sizing behavior: fit, fill, stretch, or tile."),(0,l.kt)("p",null,"\u56fe\u50cf\u5927\u5c0f\u7684\u8c03\u6574\u6837\u5f0f\uff1a\u9002\u5408\u3001\u586b\u5145\u3001\u62c9\u4f38\u6216\u5e73\u94fa\u3002"),(0,l.kt)("p",null,"\u9634\u5f71\uff1a"),(0,l.kt)("h3",{id:"shadow-color-\u9634\u5f71\u989c\u8272"},"Shadow Color \u9634\u5f71\u989c\u8272"),(0,l.kt)("p",null,"The color of the shadow."),(0,l.kt)("p",null,"\u9634\u5f71\u7684\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6"},"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6"),(0,l.kt)("p",null,"The opacity of the shadow. By default, the opacity is 0, which disables the shadow."),(0,l.kt)("p",null,"\u9634\u5f71\u7684\u4e0d\u900f\u660e\u5ea6\u3002 \u9ed8\u8ba4\u503c\u4e3a0\uff0c\u4e0d\u663e\u793a\u9634\u5f71\u3002"),(0,l.kt)("h3",{id:"shadow-radius-\u9634\u5f71\u534a\u5f84"},"Shadow Radius \u9634\u5f71\u534a\u5f84"),(0,l.kt)("p",null,"The blur radius of the shadow."),(0,l.kt)("p",null,"\u9634\u5f71\u7684\u6a21\u7cca\u534a\u5f84\u503c\u3002\uff08\u503c\u8d8a\u5927\u8303\u56f4\u8d8a\u5927\uff0c\u989c\u8272\u8d8a\u6de1\uff09"),(0,l.kt)("h3",{id:"shadow-offset-\u9634\u5f71\u504f\u79fb"},"Shadow Offset \u9634\u5f71\u504f\u79fb"),(0,l.kt)("p",null,"The size of the shadow relative to the size of the layer."),(0,l.kt)("p",null,"\u9634\u5f71\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u8ddd\u79bb\u548c\u89d2\u5ea6\u3002"),(0,l.kt)("h3",{id:"video-rate-\u89c6\u9891\u901f\u7387"},"Video Rate \u89c6\u9891\u901f\u7387"),(0,l.kt)("p",null,"A number that represents the speed multiplier to play the video. 0 pauses the video. 2 plays it at twice the speed."),(0,l.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u64ad\u653e\u89c6\u9891\u7684\u901f\u5ea6\u901f\u7387\u30020\u6682\u505c\u89c6\u9891\u30022\u4ee5\u4e24\u500d\u7684\u901f\u5ea6\u64ad\u653e\u3002"),(0,l.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,l.kt)("p",null,"A boolean that is true when the video will loop to the beginning at the end."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u89c6\u9891\u4ece\u5f00\u59cb\u5faa\u73af\u5230\u7ed3\u5c3e\u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"volume-\u97f3\u91cf"},"Volume \u97f3\u91cf"),(0,l.kt)("p",null,"A number from 0-1 that represents the loudness of the video."),(0,l.kt)("p",null,"\u4e00\u4e2a 0-1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u89c6\u9891\u7684\u97f3\u91cf\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Video%20Info"},"Video Info \u89c6\u9891\u4fe1\u606f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Video%20File"},"Video File \u89c6\u9891\u6587\u4ef6")))}s.isMDXComponent=!0}}]);