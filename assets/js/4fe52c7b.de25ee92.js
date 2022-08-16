"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[13868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),h=r,m=s["".concat(d,".").concat(h)]||s[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2},i="Rounded Rectangle \u5706\u89d2\u77e9\u5f62",l={unversionedId:"documentation/Shapes/Rounded Rectangle",id:"documentation/Shapes/Rounded Rectangle",title:"Rounded Rectangle \u5706\u89d2\u77e9\u5f62",description:"Create a rounded rectangle to be used with the Shape Layer.",source:"@site/docs/documentation/Shapes/Rounded Rectangle.md",sourceDirName:"documentation/Shapes",slug:"/documentation/Shapes/Rounded Rectangle",permalink:"/OrigamiStudio/docs/documentation/Shapes/Rounded Rectangle",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Shapes/Rounded Rectangle.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660657655,formattedLastUpdatedAt:"2022\u5e748\u670816\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Oval \u692d\u5706\u5f62",permalink:"/OrigamiStudio/docs/documentation/Shapes/Oval"},next:{title:"Triangle \u4e09\u89d2\u5f62",permalink:"/OrigamiStudio/docs/documentation/Shapes/Triangle"}},d={},p=[{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Radius \u5706\u89d2",id:"radius-\u5706\u89d2",level:3},{value:"Shape \u5f62\u72b6###",id:"shape-\u5f62\u72b6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rounded-rectangle-\u5706\u89d2\u77e9\u5f62"},"Rounded Rectangle \u5706\u89d2\u77e9\u5f62"),(0,r.kt)("p",null,"Create a rounded rectangle to be used with the Shape Layer."),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5706\u89d2\u77e9\u5f62\u7684\u5f62\u72b6\u56fe\u5c42\u3002"),(0,r.kt)("p",null,"![Image]","(./../../../static/img/docs/Shapes/rounded-rectangle.png"),(0,r.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,r.kt)("p",null,"The position of the rounded rectangle."),(0,r.kt)("p",null,"\u5706\u89d2\u77e9\u5f62\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,r.kt)("p",null,"The size of the rounded rectangle."),(0,r.kt)("p",null,"\u5706\u89d2\u77e9\u5f62\u5c3a\u5bf8\u3002"),(0,r.kt)("h3",{id:"radius-\u5706\u89d2"},"Radius \u5706\u89d2"),(0,r.kt)("p",null,"The corner radius of the rounded rectangle."),(0,r.kt)("p",null,"\u5706\u89d2\u77e9\u5f62\u7684\u5706\u89d2\u5927\u5c0f\u3002"),(0,r.kt)("h3",{id:"shape-\u5f62\u72b6"},"Shape \u5f62\u72b6###"),(0,r.kt)("p",null,"The rounded rectangle shape. Connect to a ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Shape-6381402c7a90468d97365c58ab562ea1"},"Shape Layer"),"."),(0,r.kt)("p",null,"\u5706\u89d2\u77e9\u5f62\u5f62\u72b6\u3002\u8fde\u63a5\u5230 \u5f62\u72b6\u56fe\u5c42 \u7684 ### Shape\u5c5e\u6027\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Union-25b8641484f545799ac0f5e2fd48620d"},"Union \u5408\u5e76")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Circle-aa0ece9d86a14149a015fd0fc12db088"},"Circle \u5706\u5f62")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Oval-a93bcffdb9d94ba1a4dbd968ba185a87"},"Oval \u692d\u5706\u5f62")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Triangle-de2307b4545640358caaee069a8ca536"},"Triangle \u4e09\u89d2\u5f62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Shape-6381402c7a90468d97365c58ab562ea1"},"Shape \u5f62\u72b6")))}u.isMDXComponent=!0}}]);