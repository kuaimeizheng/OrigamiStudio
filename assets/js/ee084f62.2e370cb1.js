"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Velocity \u901f\u5ea6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Velocity \u901f\u5ea6",l={unversionedId:"documentation/Utility/Velocity",id:"documentation/Utility/Velocity",title:"Velocity \u901f\u5ea6",description:"Measure the speed that a value is changing. Takes the value in the current frame and subtracts the value in the previous frame (ex 3, previous 1).",source:"@site/docs/documentation/Utility/Velocity.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Velocity",permalink:"/OrigamiStudio/docs/documentation/Utility/Velocity",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Velocity.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Velocity \u901f\u5ea6",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Vec4 \u56db\u7ef4",permalink:"/OrigamiStudio/docs/documentation/Utility/Vec4"},next:{title:"Video Info \u89c6\u9891\u4fe1\u606f",permalink:"/OrigamiStudio/docs/documentation/Utility/Video Info"}},u={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:c};function s(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"velocity-\u901f\u5ea6"},"Velocity \u901f\u5ea6"),(0,i.kt)("p",null,"Measure the speed that a value is changing. Takes the value in the current frame and subtracts the value in the previous frame (ex: current: 3, previous: 2, velocity: 1)."),(0,i.kt)("p",null,"\u6d4b\u91cf\u4e00\u4e2a\u503c\u53d8\u5316\u7684\u901f\u5ea6\u3002\u83b7\u53d6\u5f53\u524d\u5e27\u4e2d\u7684\u503c\u5e76\u51cf\u53bb\u524d\u4e00\u5e27\u4e2d\u7684\u503c(\u4f8b\u5982:current: 3, previous: 2, velocity: 1)\u3002"),(0,i.kt)("p",null,"Often used to measure the distance a touch has moved (ex: Drag, Scroll)."),(0,i.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u6d4b\u91cf\u89e6\u6478\u79fb\u52a8\u7684\u8ddd\u79bb(\u4f8b\u5982:\u62d6\u52a8\uff0c\u6eda\u52a8)\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(74887).Z,width:"1352",height:"216"})),(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"The number to measure."),(0,i.kt)("p",null,"\u8981\u6d4b\u91cf\u7684\u6570\u5b57\u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"The change in the number between the current and previous frame."),(0,i.kt)("p",null,"\u5f53\u524d\u5e27\u548c\u524d\u4e00\u5e27\u4e4b\u95f4\u7684\u6570\u5b57\u53d8\u5316\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Drag"},"Drag \u62d6\u62fd")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/+"},"+ \u52a0")))}s.isMDXComponent=!0},74887:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/velocity-9930a0cad9613554451d31f99f90cce8.png"}}]);