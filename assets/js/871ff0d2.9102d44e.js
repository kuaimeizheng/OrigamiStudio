"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[40368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:5},i="Oval \u692d\u5706\u5f62",l={unversionedId:"documentation/Shapes/Oval",id:"documentation/Shapes/Oval",title:"Oval \u692d\u5706\u5f62",description:"Create an oval to be used with a Shape Layer.",source:"@site/docs/documentation/Shapes/Oval.md",sourceDirName:"documentation/Shapes",slug:"/documentation/Shapes/Oval",permalink:"/OrigamiStudio/docs/documentation/Shapes/Oval",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Shapes/Oval.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"2022\u5e7411\u67084\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Circle \u5706\u5f62",permalink:"/OrigamiStudio/docs/documentation/Shapes/Circle"},next:{title:"Rounded Rectangle \u5706\u89d2\u77e9\u5f62",permalink:"/OrigamiStudio/docs/documentation/Shapes/Rounded Rectangle"}},p={},c=[{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Shape",id:"shape",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oval-\u692d\u5706\u5f62"},"Oval \u692d\u5706\u5f62"),(0,r.kt)("p",null,"Create an oval to be used with a Shape Layer."),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u692d\u5706\u5f62\u7684\u5f62\u72b6\u56fe\u5c42\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:a(76254).Z,width:"1500",height:"228"})),(0,r.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,r.kt)("p",null,"The position of the oval."),(0,r.kt)("p",null,"\u692d\u5706\u5f62\u7684\u4f4d\u7f6e\uff0c"),(0,r.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,r.kt)("p",null,"The size of the oval."),(0,r.kt)("p",null,"\u692d\u5706\u5f62\u7684\u5c3a\u5bf8\u3002"),(0,r.kt)("h3",{id:"shape"},"Shape"),(0,r.kt)("p",null,"The oval shape. Connect to a ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Shape-6381402c7a90468d97365c58ab562ea1"},"Shape Layer"),"."),(0,r.kt)("p",null,"\u692d\u5706\u5f62\u5f62\u72b6\u3002\u8fde\u63a5\u5230 \u5f62\u72b6\u56fe\u5c42 \u7684 ### Shape\u5c5e\u6027\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Union-25b8641484f545799ac0f5e2fd48620d"},"Union \u5408\u5e76")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Circle-aa0ece9d86a14149a015fd0fc12db088"},"Circle \u5706\u5f62")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Rounded-Rectangle-682f601349ac4e8985eb9b70c98792ca"},"Rounded Rectangle \u5706\u89d2\u77e9\u5f62")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Triangle-de2307b4545640358caaee069a8ca536"},"Triangle \u4e09\u89d2\u5f62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Shape-6381402c7a90468d97365c58ab562ea1"},"Shape \u5f62\u72b6")))}d.isMDXComponent=!0},76254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oval-c3e90cb4c024a8949e9d90a298a55237.png"}}]);