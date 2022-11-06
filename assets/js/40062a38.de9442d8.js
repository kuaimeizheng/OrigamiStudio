"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[98310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(h,n(n({ref:t},u),{},{components:r})):a.createElement(h,n({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const o={sidebar_position:5},n="Circular Progress \u73af\u5f62\u8fdb\u5ea6",l={unversionedId:"documentation/Material/Circular Progress",id:"documentation/Material/Circular Progress",title:"Circular Progress \u73af\u5f62\u8fdb\u5ea6",description:"A Material circular progress indicator with customizable colors, size, and animation.",source:"@site/docs/documentation/Material/Circular Progress.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Circular Progress",permalink:"/OrigamiStudio/docs/documentation/Material/Circular Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Circular Progress.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667730725,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Checkbox \u590d\u9009\u6846",permalink:"/OrigamiStudio/docs/documentation/Material/Checkbox"},next:{title:"Fake Keyboard \u6a21\u62df\u952e\u76d8",permalink:"/OrigamiStudio/docs/documentation/Material/Fake Keyboard"}},c={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Thickness \u5bbd\u5ea6",id:"thickness-\u5bbd\u5ea6",level:3},{value:"Active Color \u7126\u70b9\u989c\u8272",id:"active-color-\u7126\u70b9\u989c\u8272",level:3},{value:"Radius \u534a\u5f84",id:"radius-\u534a\u5f84",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Rotation \u65cb\u8f6c",id:"rotation-\u65cb\u8f6c",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Pivot \u8f74\u5fc3\u70b9",id:"pivot-\u8f74\u5fc3\u70b9",level:3},{value:"Indeterminate \u4e0d\u786e\u5b9a",id:"indeterminate-\u4e0d\u786e\u5b9a",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],u={toc:s};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"circular-progress-\u73af\u5f62\u8fdb\u5ea6"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6"),(0,i.kt)("p",null,"A Material circular progress indicator with customizable colors, size, and animation."),(0,i.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u989c\u8272\u3001\u5927\u5c0f\u548c\u52a8\u753b\u7684 Material \u5706\u5f62\u8fdb\u5ea6\u6307\u793a\u5668\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(17706).Z,width:"1548",height:"572"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the circular progress is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u5706\u5f62\u8fdb\u5ea6\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"A progress value from 0 to 1 that controls how much of the circular progress ring is filled."),(0,i.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u8fdb\u5ea6\u503c\uff0c\u7528\u4e8e\u63a7\u5236\u5706\u5f62\u8fdb\u5ea6\u73af\u7684\u8fdb\u5ea6\u3002"),(0,i.kt)("h3",{id:"thickness-\u5bbd\u5ea6"},"Thickness \u5bbd\u5ea6"),(0,i.kt)("p",null,"A number that represents the thickenss of the circular progress, in dp."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u5faa\u73af\u8fdb\u5ea6\u7684\u5bbd\u5ea6\uff0c\u4ee5 dp \u4e3a\u5355\u4f4d\u3002"),(0,i.kt)("h3",{id:"active-color-\u7126\u70b9\u989c\u8272"},"Active Color \u7126\u70b9\u989c\u8272"),(0,i.kt)("p",null,"The color of the circular progress."),(0,i.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"radius-\u534a\u5f84"},"Radius \u534a\u5f84"),(0,i.kt)("p",null,"The size of the circular progress."),(0,i.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u5927\u5c0f\u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The size of the circular progress."),(0,i.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u5927\u5c0f\u3002"),(0,i.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,i.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("p",null,"\u76f8\u5bf9\u4e8e\u5b9a\u4f4d\u56fe\u5c42\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the circular progress."),(0,i.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"rotation-\u65cb\u8f6c"},"Rotation \u65cb\u8f6c"),(0,i.kt)("p",null,"The rotation of the circular progress."),(0,i.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u65cb\u8f6c\u3002"),(0,i.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,i.kt)("p",null,"The scale of the circular progress."),(0,i.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u6bd4\u4f8b\u5927\u5c0f\u3002"),(0,i.kt)("h3",{id:"pivot-\u8f74\u5fc3\u70b9"},"Pivot \u8f74\u5fc3\u70b9"),(0,i.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("p",null,"\u65cb\u8f6c\u548c\u7f29\u653e\u56fe\u5c42\u7684\u67a2\u8f74\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,i.kt)("h3",{id:"indeterminate-\u4e0d\u786e\u5b9a"},"Indeterminate \u4e0d\u786e\u5b9a"),(0,i.kt)("p",null,"A boolean that is true when the circular progress uses an indeterminate animation."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u5706\u5f62\u8fdb\u5ea6\u4f7f\u7528\u4e0d\u786e\u5b9a\u52a8\u753b\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),"\n",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}d.isMDXComponent=!0},17706:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/circular-progress-6d9e179ff3a61cc4414aecdc50307ab1.png"}}]);