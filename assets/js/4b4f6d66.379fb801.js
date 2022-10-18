"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[89600],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>h});var a=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,i=function(t,e){if(null==t)return{};var o,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var d=a.createContext({}),u=function(t){var e=a.useContext(d),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},s=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var o=t.components,i=t.mdxType,n=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=u(o),h=i,m=c["".concat(d,".").concat(h)]||c[h]||p[h]||n;return o?a.createElement(m,r(r({ref:e},s),{},{components:o})):a.createElement(m,r({ref:e},s))}));function h(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=o.length,r=new Array(n);r[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var u=2;u<n;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},57161:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=o(87462),i=(o(67294),o(3905));const n={sidebar_position:5},r="Group \u7ec4",l={unversionedId:"documentation/Layer/Group",id:"documentation/Layer/Group",title:"Group \u7ec4",description:"Organize related layers that move, scale, rotate, and fade together. Groups have a size that clips the layers within.",source:"@site/docs/documentation/Layer/Group.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Group",permalink:"/OrigamiStudio/docs/documentation/Layer/Group",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Group.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666104246,formattedLastUpdatedAt:"2022\u5e7410\u670818\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Gradient Fill \u6e10\u53d8\u586b\u5145",permalink:"/OrigamiStudio/docs/documentation/Layer/Grdient Fill"},next:{title:"Hit Area \u70b9\u51fb\u70ed\u533a",permalink:"/OrigamiStudio/docs/documentation/Layer/Hit Area"}},d={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Rotation \u89d2\u5ea6",id:"rotation-\u89d2\u5ea6",level:3},{value:"Pivot \u8f74\u5fc3\u70b9",id:"pivot-\u8f74\u5fc3\u70b9",level:3},{value:"Shadow Color \u9634\u5f71\u989c\u8272",id:"shadow-color-\u9634\u5f71\u989c\u8272",level:3},{value:"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6",id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Shadow Radius \u9634\u5f71\u534a\u5f84",id:"shadow-radius-\u9634\u5f71\u534a\u5f84",level:3},{value:"Shadow Offset \u9634\u5f71\u504f\u79fb",id:"shadow-offset-\u9634\u5f71\u504f\u79fb",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:u};function p(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"group-\u7ec4"},"Group \u7ec4"),(0,i.kt)("p",null,"Organize related layers that move, scale, rotate, and fade together. Groups have a size that clips the layers within."),(0,i.kt)("p",null,"\u5c06\u56fe\u5c42\u6574\u7406\u5728\u4e00\u8d77\u53ef\u4ee5\u79fb\u52a8\u3001\u7f29\u653e\u3001\u65cb\u8f6c\u548c\u6de1\u5165\u3002\u7ec4\u7684\u5927\u5c0f\u53ef\u4ee5\u88c1\u526a\u5176\u4e2d\u7684\u56fe\u5c42\u3002"),(0,i.kt)("div",{class:"patch-container"},(0,i.kt)("div",{class:"patch layer"},(0,i.kt)("h3",null,"Group"),(0,i.kt)("ul",{class:"inputs"},(0,i.kt)("li",null,"Enable"),(0,i.kt)("li",null,"Position"),(0,i.kt)("li",null,"Anchor"),(0,i.kt)("li",null,"Size"),(0,i.kt)("li",null,"Opacity"),(0,i.kt)("li",null,"Scale"),(0,i.kt)("li",null,"Rotation"),(0,i.kt)("li",null,"Pivot"),(0,i.kt)("li",null,"Shadow Color"),(0,i.kt)("li",null,"Shadow Opacity"),(0,i.kt)("li",null,"Shadow Radius"),(0,i.kt)("li",null,"Shadow Offset")))),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,i.kt)("p",null,"\u52fe\u9009\u542f\u7528\u56fe\u5c42\u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position to display the layer. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,i.kt)("p",null,"\u663e\u793a\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"),(0,i.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,i.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,i.kt)("p",null,"\u76f8\u5bf9\u4e8e\u56fe\u5c42\u5b9a\u4f4d\u7684\u951a\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,i.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,i.kt)("p",null,"The size of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u5927\u5c0f "),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,i.kt)("p",null,"The scale of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u663e\u793a\u7684\u6bd4\u4f8b\u3002"),(0,i.kt)("h3",{id:"rotation-\u89d2\u5ea6"},"Rotation \u89d2\u5ea6"),(0,i.kt)("p",null,"The rotation of the layer. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set X or Y rotations."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u65cb\u8f6c\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e X \u6216 Y \u65cb\u8f6c\u89d2\u5ea6\u3002"),(0,i.kt)("h3",{id:"pivot-\u8f74\u5fc3\u70b9"},"Pivot \u8f74\u5fc3\u70b9"),(0,i.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,i.kt)("p",null,"\u56fe\u5c42\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u79fb\u52a8\u65f6\u7684\u4e2d\u5fc3\u70b9\u6216\u521d\u59cb\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,i.kt)("p",null,"\u9634\u5f71\uff1a"),(0,i.kt)("h3",{id:"shadow-color-\u9634\u5f71\u989c\u8272"},"Shadow Color \u9634\u5f71\u989c\u8272"),(0,i.kt)("p",null,"The color of the shadow."),(0,i.kt)("p",null,"\u9634\u5f71\u7684\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6"},"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the shadow. By default, the opacity is 0, which disables the shadow."),(0,i.kt)("p",null,"\u9634\u5f71\u7684\u4e0d\u900f\u660e\u5ea6\u3002 \u9ed8\u8ba4\u503c\u4e3a0\uff0c\u4e0d\u663e\u793a\u9634\u5f71\u3002"),(0,i.kt)("h3",{id:"shadow-radius-\u9634\u5f71\u534a\u5f84"},"Shadow Radius \u9634\u5f71\u534a\u5f84"),(0,i.kt)("p",null,"The blur radius of the shadow."),(0,i.kt)("p",null,"\u9634\u5f71\u7684\u6a21\u7cca\u534a\u5f84\u503c\u3002\uff08\u503c\u8d8a\u5927\u8303\u56f4\u8d8a\u5927\uff0c\u989c\u8272\u8d8a\u6de1\uff09"),(0,i.kt)("h3",{id:"shadow-offset-\u9634\u5f71\u504f\u79fb"},"Shadow Offset \u9634\u5f71\u504f\u79fb"),(0,i.kt)("p",null,"The size of the shadow relative to the size of the layer."),(0,i.kt)("p",null,"\u9634\u5f71\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u8ddd\u79bb\u548c\u89d2\u5ea6\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")))}p.isMDXComponent=!0}}]);