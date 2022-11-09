"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[69510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:5},a="Viewfinder \u53d6\u666f\u5668",l={unversionedId:"documentation/Layer/Viewfinder",id:"documentation/Layer/Viewfinder",title:"Viewfinder \u53d6\u666f\u5668",description:"Say cheese! A live stream of the current computer, phone, or tablet\u2019s camera. \u2018Freeze\u2019 the viewfinder to prototype taking a photo.",source:"@site/docs/documentation/Layer/Viewfinder.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Viewfinder",permalink:"/OrigamiStudio/docs/documentation/Layer/Viewfinder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Viewfinder.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Video Stream \u89c6\u9891\u6d41",permalink:"/OrigamiStudio/docs/documentation/Layer/Video Stream"},next:{title:"Effect \u6548\u679c",permalink:"/OrigamiStudio/docs/category/effect-\u6548\u679c"}},c={},p=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Camera Type \u76f8\u673a\u7c7b\u578b",id:"camera-type-\u76f8\u673a\u7c7b\u578b",level:3},{value:"Freeze \u51bb\u7ed3",id:"freeze-\u51bb\u7ed3",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Rotation \u89d2\u5ea6",id:"rotation-\u89d2\u5ea6",level:3},{value:"Pivot \u8f74\u5fc3\u70b9",id:"pivot-\u8f74\u5fc3\u70b9",level:3},{value:"Content Mode \u5185\u5bb9\u6a21\u5f0f",id:"content-mode-\u5185\u5bb9\u6a21\u5f0f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"viewfinder-\u53d6\u666f\u5668"},"Viewfinder \u53d6\u666f\u5668"),(0,i.kt)("p",null,"Say cheese! A live stream of the current computer, phone, or tablet\u2019s camera. \u2018Freeze\u2019 the viewfinder to prototype taking a photo."),(0,i.kt)("p",null,"\u8c03\u7528\u8bbe\u5907\u7684\u76f8\u673a\uff0c\u5b9e\u65f6\u56fe\u50cf\u3002 \u201cFreeze\u201d\u53d6\u666f\u5668\u5230\u539f\u578b\u62cd\u7167\u3002"),(0,i.kt)("div",{class:"patch-container"},(0,i.kt)("div",{class:"patch layer"},(0,i.kt)("h3",null,"Viewfinder"),(0,i.kt)("ul",{class:"inputs"},(0,i.kt)("li",null,"Enable"),(0,i.kt)("li",null,"Camera Type"),(0,i.kt)("li",null,"Freeze"),(0,i.kt)("li",null,"Position"),(0,i.kt)("li",null,"Anchor"),(0,i.kt)("li",null,"Size"),(0,i.kt)("li",null,"Opacity"),(0,i.kt)("li",null,"Scale"),(0,i.kt)("li",null,"Rotation"),(0,i.kt)("li",null,"Pivot"),(0,i.kt)("li",null,"Content Mode")))),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u542f\u7528\u56fe\u5c42\u3002"),(0,i.kt)("h3",{id:"camera-type-\u76f8\u673a\u7c7b\u578b"},"Camera Type \u76f8\u673a\u7c7b\u578b"),(0,i.kt)("p",null,"The camera to use: front-facing or back-facing."),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u7684\u76f8\u673a\uff1a\u524d\u7f6e\u6216\u540e\u7f6e\u3002"),(0,i.kt)("h3",{id:"freeze-\u51bb\u7ed3"},"Freeze \u51bb\u7ed3"),(0,i.kt)("p",null,"A boolean that is true when the camera is frozen on a shot. Useful when prototyping taking a photo."),(0,i.kt)("p",null,"\u52fe\u9009\u51bb\u7ed3\u65f6\u505c\u65f6\u5b9e\u65f6\u56fe\u50cf\u3002\u539f\u578b\u9700\u8981\u62cd\u6444\u7167\u7247\u65f6\u5f88\u6709\u7528\u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position to display the layer. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,i.kt)("p",null,"\u4f4d\u7f6e\u3002\u70b9\u51fb\u5c5e\u6027\u540d\u79f0 ### Position\u53ef\u4ee5\u663e\u793a3\u4e2a\u8f74\u5411\u5e76\u8bbe\u7f6e\u503c\u3002"),(0,i.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,i.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("p",null,"\u7ec4\u4f4d\u4e8e\u5c4f\u5e55\u4e2d\u7684\u951a\u70b9\uff0c\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,i.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,i.kt)("p",null,"The size of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u5927\u5c0f\u3002"),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,i.kt)("p",null,"The scale of the layer."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u6bd4\u4f8b\u3002"),(0,i.kt)("h3",{id:"rotation-\u89d2\u5ea6"},"Rotation \u89d2\u5ea6"),(0,i.kt)("p",null,"The rotation of the layer. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set X or Y rotations."),(0,i.kt)("p",null,"\u56fe\u5c42\u7684\u89d2\u5ea6\u3002\u70b9\u51fb\u5c5e\u6027\u540d\u79f0 ### Rotation\u53ef\u4ee5\u663e\u793a3\u4e2a\u89d2\u5ea6\u5e76\u8bbe\u7f6e\u503c\u3002"),(0,i.kt)("h3",{id:"pivot-\u8f74\u5fc3\u70b9"},"Pivot \u8f74\u5fc3\u70b9"),(0,i.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("p",null,"\u56fe\u5c42\u7f29\u653e\u3001\u65cb\u8f6c\u3001\u79fb\u52a8\u65f6\u7684\u4e2d\u5fc3\u70b9\u6216\u521d\u59cb\u70b9\u3002\u8be6\u7ec6\u4fe1\u606f\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807"),"\u3002"),(0,i.kt)("h3",{id:"content-mode-\u5185\u5bb9\u6a21\u5f0f"},"Content Mode \u5185\u5bb9\u6a21\u5f0f"),(0,i.kt)("p",null,"The image sizing behavior: fit, fill, stretch."),(0,i.kt)("p",null,"\u56fe\u50cf\u5c3a\u5bf8\uff1a\u8d34\u5408\uff0c\u586b\u5145\uff0c\u62c9\u4f38\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Camera"},"Camera \u6444\u50cf\u5934")))}d.isMDXComponent=!0}}]);