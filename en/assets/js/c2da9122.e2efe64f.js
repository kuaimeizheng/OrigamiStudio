"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[51161],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=a.createContext({}),d=function(e){var t=a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(o),h=n,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||i;return o?a.createElement(m,r(r({ref:t},s),{},{components:o})):a.createElement(m,r({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},69981:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=o(87462),n=(o(67294),o(3905));const i={sidebar_position:5},r="Group \u7ec4",l={unversionedId:"documentation/Layer/Group",id:"documentation/Layer/Group",title:"Group \u7ec4",description:"Organize related layers that move, scale, rotate, and fade together. Groups have a size that clips the layers within.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Layer/Group.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Group",permalink:"/OrigamiStudio/en/docs/documentation/Layer/Group",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Group.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Gradient Fill \u6e10\u53d8\u586b\u5145",permalink:"/OrigamiStudio/en/docs/documentation/Layer/Grdient Fill"},next:{title:"Hit Area \u70b9\u51fb\u70ed\u533a",permalink:"/OrigamiStudio/en/docs/documentation/Layer/Hit Area"}},u={},d=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Rotation \u89d2\u5ea6",id:"rotation-\u89d2\u5ea6",level:3},{value:"Pivot \u8f74\u5fc3\u70b9",id:"pivot-\u8f74\u5fc3\u70b9",level:3},{value:"Shadow Color \u9634\u5f71\u989c\u8272",id:"shadow-color-\u9634\u5f71\u989c\u8272",level:3},{value:"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6",id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Shadow Radius \u9634\u5f71\u534a\u5f84",id:"shadow-radius-\u9634\u5f71\u534a\u5f84",level:3},{value:"Shadow Offset \u9634\u5f71\u504f\u79fb",id:"shadow-offset-\u9634\u5f71\u504f\u79fb",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"group-\u7ec4"},"Group \u7ec4"),(0,n.kt)("p",null,"Organize related layers that move, scale, rotate, and fade together. Groups have a size that clips the layers within."),(0,n.kt)("p",null,"\u5c06\u56fe\u5c42\u6574\u7406\u5728\u4e00\u8d77\u53ef\u4ee5\u79fb\u52a8\u3001\u7f29\u653e\u3001\u65cb\u8f6c\u548c\u6de1\u5165\u3002\u7ec4\u7684\u5927\u5c0f\u53ef\u4ee5\u88c1\u526a\u5176\u4e2d\u7684\u56fe\u5c42\u3002"),(0,n.kt)("div",{class:"patch-container"},(0,n.kt)("div",{class:"patch layer"},(0,n.kt)("h3",null,"Group"),(0,n.kt)("ul",{class:"inputs"},(0,n.kt)("li",null,"Enable"),(0,n.kt)("li",null,"Position"),(0,n.kt)("li",null,"Anchor"),(0,n.kt)("li",null,"Size"),(0,n.kt)("li",null,"Opacity"),(0,n.kt)("li",null,"Scale"),(0,n.kt)("li",null,"Rotation"),(0,n.kt)("li",null,"Pivot"),(0,n.kt)("li",null,"Shadow Color"),(0,n.kt)("li",null,"Shadow Opacity"),(0,n.kt)("li",null,"Shadow Radius"),(0,n.kt)("li",null,"Shadow Offset")))),(0,n.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,n.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,n.kt)("p",null,"\u52fe\u9009\u542f\u7528\u56fe\u5c42\u3002"),(0,n.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,n.kt)("p",null,"The position to display the layer. Use ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,n.kt)("p",null,"\u663e\u793a\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"),(0,n.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,n.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,n.kt)("p",null,"\u76f8\u5bf9\u4e8e\u56fe\u5c42\u5b9a\u4f4d\u7684\u951a\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,n.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,n.kt)("p",null,"The size of the layer."),(0,n.kt)("p",null,"\u56fe\u5c42\u7684\u5927\u5c0f "),(0,n.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"The opacity of the layer."),(0,n.kt)("p",null,"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,n.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,n.kt)("p",null,"The scale of the layer."),(0,n.kt)("p",null,"\u56fe\u5c42\u663e\u793a\u7684\u6bd4\u4f8b\u3002"),(0,n.kt)("h3",{id:"rotation-\u89d2\u5ea6"},"Rotation \u89d2\u5ea6"),(0,n.kt)("p",null,"The rotation of the layer. Use ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point%203D"},"Point 3D")," to set X or Y rotations."),(0,n.kt)("p",null,"\u56fe\u5c42\u7684\u65cb\u8f6c\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e X \u6216 Y \u65cb\u8f6c\u89d2\u5ea6\u3002"),(0,n.kt)("h3",{id:"pivot-\u8f74\u5fc3\u70b9"},"Pivot \u8f74\u5fc3\u70b9"),(0,n.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,n.kt)("p",null,"\u56fe\u5c42\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u79fb\u52a8\u65f6\u7684\u4e2d\u5fc3\u70b9\u6216\u521d\u59cb\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,n.kt)("p",null,"\u9634\u5f71\uff1a"),(0,n.kt)("h3",{id:"shadow-color-\u9634\u5f71\u989c\u8272"},"Shadow Color \u9634\u5f71\u989c\u8272"),(0,n.kt)("p",null,"The color of the shadow."),(0,n.kt)("p",null,"\u9634\u5f71\u7684\u989c\u8272\u3002"),(0,n.kt)("h3",{id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6"},"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"The opacity of the shadow. By default, the opacity is 0, which disables the shadow."),(0,n.kt)("p",null,"\u9634\u5f71\u7684\u4e0d\u900f\u660e\u5ea6\u3002 \u9ed8\u8ba4\u503c\u4e3a0\uff0c\u4e0d\u663e\u793a\u9634\u5f71\u3002"),(0,n.kt)("h3",{id:"shadow-radius-\u9634\u5f71\u534a\u5f84"},"Shadow Radius \u9634\u5f71\u534a\u5f84"),(0,n.kt)("p",null,"The blur radius of the shadow."),(0,n.kt)("p",null,"\u9634\u5f71\u7684\u6a21\u7cca\u534a\u5f84\u503c\u3002\uff08\u503c\u8d8a\u5927\u8303\u56f4\u8d8a\u5927\uff0c\u989c\u8272\u8d8a\u6de1\uff09"),(0,n.kt)("h3",{id:"shadow-offset-\u9634\u5f71\u504f\u79fb"},"Shadow Offset \u9634\u5f71\u504f\u79fb"),(0,n.kt)("p",null,"The size of the shadow relative to the size of the layer."),(0,n.kt)("p",null,"\u9634\u5f71\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u8ddd\u79bb\u548c\u89d2\u5ea6\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")))}p.isMDXComponent=!0}}]);