"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[74011],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:5},a="Progress Ring \u8fdb\u5ea6\u5708",l={unversionedId:"documentation/Layer/Progress Ring",id:"documentation/Layer/Progress Ring",title:"Progress Ring \u8fdb\u5ea6\u5708",description:"Create a customizable circular progress layer.",source:"@site/docs/documentation/Layer/Progress Ring.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Progress Ring",permalink:"/OrigamiStudio/docs/documentation/Layer/Progress Ring",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Progress Ring.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666887881,formattedLastUpdatedAt:"2022\u5e7410\u670827\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Particle System \u7c92\u5b50\u7cfb\u7edf",permalink:"/OrigamiStudio/docs/documentation/Layer/Particle System"},next:{title:"Rectangle \u77e9\u5f62",permalink:"/OrigamiStudio/docs/documentation/Layer/Rectangle"}},s={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Thickness \u7c97\u7ec6",id:"thickness-\u7c97\u7ec6",level:3},{value:"Active Color \u7126\u70b9\u989c\u8272",id:"active-color-\u7126\u70b9\u989c\u8272",level:3},{value:"Inactive Color  \u65e0\u6548\u7684\u989c\u8272",id:"inactive-color--\u65e0\u6548\u7684\u989c\u8272",level:3},{value:"Radius \u5706\u89d2",id:"radius-\u5706\u89d2",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Rotation \u65cb\u8f6c",id:"rotation-\u65cb\u8f6c",level:3},{value:"Scale \u7f29\u653e",id:"scale-\u7f29\u653e",level:3},{value:"Pivot \u8f74\u5fc3\u70b9",id:"pivot-\u8f74\u5fc3\u70b9",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"progress-ring-\u8fdb\u5ea6\u5708"},"Progress Ring \u8fdb\u5ea6\u5708"),(0,n.kt)("p",null,"Create a customizable circular progress layer."),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u53ef\u81ea\u5b9a\u4e49\u7684\u5706\u5f62\u8fdb\u5ea6\u56fe\u5c42\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:r(68128).Z,width:"1550",height:"582"})),(0,n.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,n.kt)("p",null,"A boolean that is true when the progress ring is displayed."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u8fdb\u5ea6\u73af\u65f6\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,n.kt)("p",null,"A progress value from 0 to 1 that controls how much of the progress ring is filled."),(0,n.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u8fdb\u5ea6\u503c\uff0c\u7528\u4e8e\u63a7\u5236\u8fdb\u5ea6\u73af\u7684\u8fdb\u5ea6\u3002"),(0,n.kt)("h3",{id:"thickness-\u7c97\u7ec6"},"Thickness \u7c97\u7ec6"),(0,n.kt)("p",null,"A number that represents the thickness of the progress ring, in points."),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8fdb\u5ea6\u73af\u7684\u7c97\u7ec6\uff0c\u4ee5\u78c5\u4e3a\u5355\u4f4d\u3002"),(0,n.kt)("h3",{id:"active-color-\u7126\u70b9\u989c\u8272"},"Active Color \u7126\u70b9\u989c\u8272"),(0,n.kt)("p",null,"The color of the in-progress part of the ring."),(0,n.kt)("p",null,"\u5706\u73af\u7684\u8fdb\u884c\u4e2d\u90e8\u5206\u7684\u989c\u8272\u3002"),(0,n.kt)("h3",{id:"inactive-color--\u65e0\u6548\u7684\u989c\u8272"},"Inactive Color  \u65e0\u6548\u7684\u989c\u8272"),(0,n.kt)("p",null,"The color of the background part of the ring."),(0,n.kt)("p",null,"\u5706\u73af\u4e2d\u80cc\u666f\u90e8\u5206\u7684\u989c\u8272\u3002"),(0,n.kt)("h3",{id:"radius-\u5706\u89d2"},"Radius \u5706\u89d2"),(0,n.kt)("p",null,"A number that represents the radius of the ring, in points."),(0,n.kt)("p",null,"\u4e00\u4e2a\u4ee3\u8868\u5706\u73af\u534a\u5f84\u7684\u6570\u5b57\uff0c\u4ee5\u78c5\u4e3a\u5355\u4f4d\u3002"),(0,n.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,n.kt)("p",null,"The position of the progress ring."),(0,n.kt)("p",null,"\u8fdb\u5ea6\u73af\u7684\u4f4d\u7f6e\u3002"),(0,n.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,n.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,n.kt)("p",null,"\u76f8\u5bf9\u4e8e\u5b9a\u4f4d\u56fe\u5c42\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,n.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"The opacity of the progress ring."),(0,n.kt)("p",null,"\u8fdb\u5ea6\u73af\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,n.kt)("h3",{id:"rotation-\u65cb\u8f6c"},"Rotation \u65cb\u8f6c"),(0,n.kt)("p",null,"The rotation of the progress ring."),(0,n.kt)("p",null,"\u8fdb\u5ea6\u73af\u7684\u65cb\u8f6c\u3002"),(0,n.kt)("h3",{id:"scale-\u7f29\u653e"},"Scale \u7f29\u653e"),(0,n.kt)("p",null,"The scale of the progress ring."),(0,n.kt)("p",null,"\u8fdb\u5ea6\u73af\u7684\u7f29\u653e\u3002"),(0,n.kt)("h3",{id:"pivot-\u8f74\u5fc3\u70b9"},"Pivot \u8f74\u5fc3\u70b9"),(0,n.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,n.kt)("p",null,"\u65cb\u8f6c\u548c\u7f29\u653e\u56fe\u5c42\u7684\u8f74\u5fc3\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"))}u.isMDXComponent=!0},68128:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/progress-ring-d3f673c9f4fe5cb1d860c4bf76d5c33f.png"}}]);