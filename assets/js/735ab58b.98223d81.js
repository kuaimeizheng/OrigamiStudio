"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[47043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=o.createContext({}),s=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||n;return a?o.createElement(h,r(r({ref:t},u),{},{components:a})):o.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<n;s++)r[s]=a[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=a(87462),i=(a(67294),a(3905));const n={sidebar_position:5},r="Image Layer \u56fe\u50cf\u56fe\u5c42",l={unversionedId:"documentation/Layer/Image Layer",id:"documentation/Layer/Image Layer",title:"Image Layer \u56fe\u50cf\u56fe\u5c42",description:"A layer that can display an image.",source:"@site/docs/documentation/Layer/Image Layer.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Image Layer",permalink:"/OrigamiStudio/docs/documentation/Layer/Image Layer",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Image Layer.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666145039,formattedLastUpdatedAt:"2022\u5e7410\u670819\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Image File \u56fe\u50cf\u6587\u4ef6",permalink:"/OrigamiStudio/docs/documentation/Layer/Image File"},next:{title:"Live Image \u5b9e\u65f6\u56fe\u50cf",permalink:"/OrigamiStudio/docs/documentation/Layer/Live Image"}},d={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Rotation \u89d2\u5ea6",id:"rotation-\u89d2\u5ea6",level:3},{value:"Pivot \u8f74\u5fc3\u70b9",id:"pivot-\u8f74\u5fc3\u70b9",level:3},{value:"Image \u56fe\u7247",id:"image-\u56fe\u7247",level:3},{value:"Fill Style \u586b\u5145\u6837\u5f0f",id:"fill-style-\u586b\u5145\u6837\u5f0f",level:3},{value:"Shadow Color \u9634\u5f71\u989c\u8272",id:"shadow-color-\u9634\u5f71\u989c\u8272",level:3},{value:"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6",id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Shadow Radius \u9634\u5f71\u534a\u5f84",id:"shadow-radius-\u9634\u5f71\u534a\u5f84",level:3},{value:"Shadow Offset \u9634\u5f71\u504f\u79fb",id:"shadow-offset-\u9634\u5f71\u504f\u79fb",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-layer-\u56fe\u50cf\u56fe\u5c42"},"Image Layer \u56fe\u50cf\u56fe\u5c42"),(0,i.kt)("p",null,"A layer that can display an image."),(0,i.kt)("p",null,"\u53ef\u4ee5\u663e\u793a\u56fe\u50cf\u7684\u56fe\u5c42\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:a(40529).Z,width:"1536",height:"648"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,i.kt)("p",null,"\u52fe\u9009\u542f\u7528\u56fe\u5c42\u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position to display the layer. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,i.kt)("p",null,"\u663e\u793a\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"),(0,i.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,i.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("p",null,"\u76f8\u5bf9\u4e8e\u56fe\u5c42\u5b9a\u4f4d\u7684\u951a\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,i.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,i.kt)("p",null,"The size of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u5927\u5c0f"),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,i.kt)("p",null,"The scale of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u663e\u793a\u7684\u6bd4\u4f8b\u3002"),(0,i.kt)("h3",{id:"rotation-\u89d2\u5ea6"},"Rotation \u89d2\u5ea6"),(0,i.kt)("p",null,"The rotation of the layer. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set X or Y rotations."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u65cb\u8f6c\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e X \u6216 Y \u65cb\u8f6c\u89d2\u5ea6\u3002"),(0,i.kt)("h3",{id:"pivot-\u8f74\u5fc3\u70b9"},"Pivot \u8f74\u5fc3\u70b9"),(0,i.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("p",null,"\u56fe\u5c42\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u79fb\u52a8\u65f6\u7684\u4e2d\u5fc3\u70b9\u6216\u521d\u59cb\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,i.kt)("h3",{id:"image-\u56fe\u7247"},"Image \u56fe\u7247"),(0,i.kt)("p",null,"An image to display."),(0,i.kt)("p",null,"\u8981\u663e\u793a\u7684\u56fe\u50cf\u3002"),(0,i.kt)("h3",{id:"fill-style-\u586b\u5145\u6837\u5f0f"},"Fill Style \u586b\u5145\u6837\u5f0f"),(0,i.kt)("p",null,"The image sizing behavior: fit, fill, stretch, or tile."),(0,i.kt)("p",null,"\u8c03\u6574\u56fe\u50cf\u7684\u586b\u5145\u65b9\u5f0f\uff1a\u9002\u5408\u3001\u586b\u5145\u3001\u62c9\u4f38\u6216\u5e73\u94fa\u3002"),(0,i.kt)("p",null,"\u9634\u5f71\uff1a"),(0,i.kt)("h3",{id:"shadow-color-\u9634\u5f71\u989c\u8272"},"Shadow Color \u9634\u5f71\u989c\u8272"),(0,i.kt)("p",null,"The color of the shadow."),(0,i.kt)("p",null,"\u9634\u5f71\u7684\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6"},"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the shadow. By default, the opacity is 0, which disables the shadow."),(0,i.kt)("p",null,"\u9634\u5f71\u7684\u4e0d\u900f\u660e\u5ea6\u3002 \u9ed8\u8ba4\u503c\u4e3a0\uff0c\u4e0d\u663e\u793a\u9634\u5f71\u3002"),(0,i.kt)("h3",{id:"shadow-radius-\u9634\u5f71\u534a\u5f84"},"Shadow Radius \u9634\u5f71\u534a\u5f84"),(0,i.kt)("p",null,"The blur radius of the shadow."),(0,i.kt)("p",null,"\u9634\u5f71\u7684\u6a21\u7cca\u534a\u5f84\u503c\u3002\uff08\u503c\u8d8a\u5927\u8303\u56f4\u8d8a\u5927\uff0c\u989c\u8272\u8d8a\u6de1\uff09"),(0,i.kt)("h3",{id:"shadow-offset-\u9634\u5f71\u504f\u79fb"},"Shadow Offset \u9634\u5f71\u504f\u79fb"),(0,i.kt)("p",null,"The size of the shadow relative to the size of the layer."),(0,i.kt)("p",null,"\u9634\u5f71\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u8ddd\u79bb\u548c\u89d2\u5ea6\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Image%20File"},"Image File \u56fe\u50cf\u6587\u4ef6")))}p.isMDXComponent=!0},40529:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/image-layer-84883c0889e684cfbd57a6e0b5c9ab6a.png"}}]);