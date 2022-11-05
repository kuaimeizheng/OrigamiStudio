"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[66218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,f=c["".concat(d,".").concat(u)]||c[u]||h[u]||l;return a?n.createElement(f,r(r({ref:t},s),{},{components:a})):n.createElement(f,r({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const l={sidebar_position:5},r="Shape \u5f62\u72b6",i={unversionedId:"documentation/Layer/Shape",id:"documentation/Layer/Shape",title:"Shape \u5f62\u72b6",description:"A shape specified by the shape input. Add a shape patch like Rectangle, Triangle, Oval, or Union of the above. Shapes can have a color fill and a stroke.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Layer/Shape.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Shape",permalink:"/OrigamiStudio/en/docs/documentation/Layer/Shape",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Shape.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Rectangle \u77e9\u5f62",permalink:"/OrigamiStudio/en/docs/documentation/Layer/Rectangle"},next:{title:"Text Layer \u6587\u672c\u56fe\u5c42",permalink:"/OrigamiStudio/en/docs/documentation/Layer/Text Layer"}},d={},p=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Fill \u586b\u5145",id:"fill-\u586b\u5145",level:3},{value:"Shape \u5f62\u72b6",id:"shape-\u5f62\u72b6-1",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Shadow Color \u9634\u5f71\u989c\u8272",id:"shadow-color-\u9634\u5f71\u989c\u8272",level:3},{value:"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6",id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Shadow Radius \u9634\u5f71\u534a\u5f84",id:"shadow-radius-\u9634\u5f71\u534a\u5f84",level:3},{value:"Shadow Offset \u9634\u5f71\u504f\u79fb",id:"shadow-offset-\u9634\u5f71\u504f\u79fb",level:3},{value:"Stroke Color \u63cf\u8fb9\u989c\u8272",id:"stroke-color-\u63cf\u8fb9\u989c\u8272",level:3},{value:"Stroke Width \u63cf\u8fb9\u5bbd\u5ea6",id:"stroke-width-\u63cf\u8fb9\u5bbd\u5ea6",level:3},{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"End \u7ed3\u675f",id:"end-\u7ed3\u675f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:p};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shape-\u5f62\u72b6"},"Shape \u5f62\u72b6"),(0,o.kt)("p",null,"A shape specified by the shape input. Add a shape patch like Rectangle, Triangle, Oval, or Union of the above. Shapes can have a color fill and a stroke."),(0,o.kt)("p",null,"\u7531\u5f62\u72b6\u7aef\u53e3\u8f93\u5165\u6307\u5b9a\u7684\u5f62\u72b6\u3002\u6dfb\u52a0\u4e00\u4e2a\u5f62\u72b6\u6a21\u5757\uff0c\u5982\u77e9\u5f62\uff0c\u4e09\u89d2\u5f62\uff0c\u692d\u5706\u5f62\uff0c\u6216\u5f62\u72b6\u7ec4\u5408\u3002\u5f62\u72b6\u53ef\u4ee5\u6709\u989c\u8272\u586b\u5145\u548c\u63cf\u8fb9\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:a(76692).Z,width:"1540",height:"642"})),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,o.kt)("p",null,"\u52fe\u9009\u542f\u7528\u56fe\u5c42\u3002"),(0,o.kt)("h3",{id:"fill-\u586b\u5145"},"Fill \u586b\u5145"),(0,o.kt)("p",null,"The color of the layer."),(0,o.kt)("p",null,"\u56fe\u5c42\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"shape-\u5f62\u72b6-1"},"Shape \u5f62\u72b6"),(0,o.kt)("p",null,"The path to draw. Add a shape patch like Rectangle, Triangle, Oval, or Union of the above."),(0,o.kt)("p",null,"\u7ed8\u5236\u7684\u8def\u5f84\u3002\u5c06\u5706\u5f62\u3001\u77e9\u5f62\u3001\u4e09\u89d2\u5f62\u7b49\u5f62\u72b6\u6a21\u5757\u7684 ### Shape\u8f93\u51fa\u53e3\u8fde\u63a5\u5230\u8fd9\u4e2a\u5c5e\u6027\u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"The position to display the layer. Use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,o.kt)("p",null,"\u663e\u793a\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,o.kt)("p",null,"The opacity of the layer."),(0,o.kt)("p",null,"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,o.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,o.kt)("p",null,"The scale of the layer."),(0,o.kt)("p",null,"\u56fe\u5c42\u663e\u793a\u7684\u6bd4\u4f8b\u3002"),(0,o.kt)("p",null,"\u9634\u5f71\uff1a"),(0,o.kt)("h3",{id:"shadow-color-\u9634\u5f71\u989c\u8272"},"Shadow Color \u9634\u5f71\u989c\u8272"),(0,o.kt)("p",null,"The color of the shadow."),(0,o.kt)("p",null,"\u9634\u5f71\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"shadow-opacity-\u9634\u5f71\u4e0d\u900f\u660e\u5ea6"},"Shadow Opacity \u9634\u5f71\u4e0d\u900f\u660e\u5ea6"),(0,o.kt)("p",null,"The opacity of the shadow. By default, the opacity is 0, which disables the shadow."),(0,o.kt)("p",null,"\u9634\u5f71\u7684\u4e0d\u900f\u660e\u5ea6\u3002 \u9ed8\u8ba4\u503c\u4e3a0\uff0c\u4e0d\u663e\u793a\u9634\u5f71\u3002"),(0,o.kt)("h3",{id:"shadow-radius-\u9634\u5f71\u534a\u5f84"},"Shadow Radius \u9634\u5f71\u534a\u5f84"),(0,o.kt)("p",null,"The blur radius of the shadow."),(0,o.kt)("p",null,"\u9634\u5f71\u7684\u6a21\u7cca\u534a\u5f84\u503c\u3002\uff08\u503c\u8d8a\u5927\u8303\u56f4\u8d8a\u5927\uff0c\u989c\u8272\u8d8a\u6de1\uff09"),(0,o.kt)("h3",{id:"shadow-offset-\u9634\u5f71\u504f\u79fb"},"Shadow Offset \u9634\u5f71\u504f\u79fb"),(0,o.kt)("p",null,"The size of the shadow relative to the size of the layer."),(0,o.kt)("p",null,"\u9634\u5f71\u76f8\u5bf9\u4e8e\u56fe\u5c42\u7684\u8ddd\u79bb\u548c\u89d2\u5ea6\u3002"),(0,o.kt)("h3",{id:"stroke-color-\u63cf\u8fb9\u989c\u8272"},"Stroke Color \u63cf\u8fb9\u989c\u8272"),(0,o.kt)("p",null,"The color of the stroke."),(0,o.kt)("p",null,"\u63cf\u8fb9\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"stroke-width-\u63cf\u8fb9\u5bbd\u5ea6"},"Stroke Width \u63cf\u8fb9\u5bbd\u5ea6"),(0,o.kt)("p",null,"The width of the stroke. By default, the width is 0, which disables the stroke."),(0,o.kt)("p",null,"\u63cf\u8fb9\u7684\u5bbd\u5ea6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5bbd\u5ea6\u4e3a0\uff0c\u4e0d\u663e\u793a\u63cf\u8fb9\u3002"),(0,o.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,o.kt)("p",null,"A number from 0 to 1 that represents the start of the stroke."),(0,o.kt)("p",null,"\u63cf\u8fb9\u5f00\u59cb\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"end-\u7ed3\u675f"},"End \u7ed3\u675f"),(0,o.kt)("p",null,"A number from 0 to 1 that represents the end of the stroke."),(0,o.kt)("p",null,"\u63cf\u8fb9\u7ed3\u675f\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Rounded-Rectangle-682f601349ac4e8985eb9b70c98792ca"},"Rounded Rectangle \u5706\u89d2\u77e9\u5f62")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Shapes/Oval"},"Oval \u692d\u5706\u5f62")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Union-25b8641484f545799ac0f5e2fd48620d"},"Union \u5408\u5e76")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Triangle-de2307b4545640358caaee069a8ca536"},"Triangle \u4e09\u89d2\u5f62")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Shapes/Oval"},"Oval \u692d\u5706\u5f62")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Rectangle-d4f77c73db8f4c9393d1a4616cd27912"},"Rectangle \u77e9\u5f62")))}h.isMDXComponent=!0},76692:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/shape-09d380723d11f9fda8b2bbcb0e64f4a6.png"}}]);