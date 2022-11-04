"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[95377],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(a),s=i,f=p["".concat(c,".").concat(s)]||p[s]||u[s]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},73816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={title:"Image Info \u56fe\u7247\u4fe1\u606f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Image Info \u56fe\u7247\u4fe1\u606f",l={unversionedId:"documentation/Utility/Image Info",id:"documentation/Utility/Image Info",title:"Image Info \u56fe\u7247\u4fe1\u606f",description:"Access information about an image.",source:"@site/docs/documentation/Utility/Image Info.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Image Info",permalink:"/OrigamiStudio/docs/documentation/Utility/Image Info",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Image Info.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{title:"Image Info \u56fe\u7247\u4fe1\u606f",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Face Detection \u4eba\u8138\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/documentation/Utility/Face Detection"},next:{title:"Image \u56fe\u7247",permalink:"/OrigamiStudio/docs/documentation/Utility/Image"}},c={},m=[{value:"Image  \u56fe\u7247",id:"image--\u56fe\u7247",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Name \u540d\u79f0",id:"name-\u540d\u79f0",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:m};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-info-\u56fe\u7247\u4fe1\u606f"},"Image Info \u56fe\u7247\u4fe1\u606f"),(0,i.kt)("p",null,"Access information about an image."),(0,i.kt)("p",null,"\u8bbf\u95ee\u56fe\u7247\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:a(89935).Z,width:"1430",height:"262"})),(0,i.kt)("h3",{id:"image--\u56fe\u7247"},"Image  \u56fe\u7247"),(0,i.kt)("p",null,"The image to display information for. Paste or drag an image into the patch editor, or use an ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Image"},"Image")," patch."),(0,i.kt)("p",null,"\u8981\u663e\u793a\u4fe1\u606f\u7684\u56fe\u7247\u3002\u5c06\u56fe\u7247\u7c98\u8d34\u6216\u62d6\u52a8\u5230\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\uff0c\u6216\u53cc\u51fb\u7f29\u7565\u56fe\u6dfb\u52a0\u56fe\u7247\u3002"),(0,i.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,i.kt)("p",null,"The size of the image. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Size Unpack")," to get the individual width and height."),(0,i.kt)("p",null,"\u56fe\u50cf\u7684\u5c3a\u5bf8\u3002\u4f7f\u7528 Size Unpack \u53ef\u83b7\u53d6\u5355\u4e2a\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002"),(0,i.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,i.kt)("p",null,"The scale of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u6bd4\u4f8b\u3002"),(0,i.kt)("h3",{id:"name-\u540d\u79f0"},"Name \u540d\u79f0"),(0,i.kt)("p",null,"The name of the image as text."),(0,i.kt)("p",null,"\u56fe\u7247\u7684\u540d\u79f0\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Image"},"Image \u56fe\u7247")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Image%20File"},"Image File \u56fe\u50cf\u6587\u4ef6")))}u.isMDXComponent=!0},89935:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-info-9a0863bd6eb1015d0dc720c4804352d4.png"}}]);