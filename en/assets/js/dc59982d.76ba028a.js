"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[49855],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),u=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(i),m=o,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return i?n.createElement(h,a(a({ref:t},s),{},{components:i})):n.createElement(h,a({ref:t},s))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},63804:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));const r={sidebar_position:5},a="Slider \u6ed1\u5757",l={unversionedId:"documentation/iOS/Slider",id:"documentation/iOS/Slider",title:"Slider \u6ed1\u5757",description:"An iOS slider with customizable size and colors.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/iOS/Slider.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Slider",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Slider",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Slider.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Segmented Control"},next:{title:"Status Bar \u72b6\u6001\u680f",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Status bar"}},d={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Width \u5bbd\u5ea6",id:"width-\u5bbd\u5ea6",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Disabled \u7981\u7528",id:"disabled-\u7981\u7528",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Unfilled Tint Color \u672a\u586b\u5145\u7684\u8272\u8c03\u989c\u8272",id:"unfilled-tint-color-\u672a\u586b\u5145\u7684\u8272\u8c03\u989c\u8272",level:3},{value:"Thumb Tint \u62c7\u6307\u8272\u8c03\u989c\u8272",id:"thumb-tint-\u62c7\u6307\u8272\u8c03\u989c\u8272",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Scrubbing \u62d6\u52a8",id:"scrubbing-\u62d6\u52a8",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slider-\u6ed1\u5757"},"Slider \u6ed1\u5757"),(0,o.kt)("p",null,"An iOS slider with customizable size and colors."),(0,o.kt)("p",null,"\u4e00\u4e2a\u53ef\u5b9a\u5236\u5927\u5c0f\u548c\u989c\u8272\u7684iOS\u6ed1\u5757\u3002"),(0,o.kt)("p",null,"Use the Touch button on the component to get information about the slider."),(0,o.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u6709\u5173\u6ed1\u5757\u7684\u4fe1\u606f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:i(96354).Z,width:"1550",height:"496"})),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when the slider is displayed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6ed1\u5757\u663e\u793a\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"The position to display the slider."),(0,o.kt)("p",null,"\u663e\u793a\u6ed1\u5757\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"width-\u5bbd\u5ea6"},"Width \u5bbd\u5ea6"),(0,o.kt)("p",null,"The width of the slider."),(0,o.kt)("p",null,"\u6ed1\u5757\u7684\u5bbd\u5ea6\u3002"),(0,o.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,o.kt)("p",null,"The anchor point to position the slider relative to. See ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,o.kt)("p",null,"\u76f8\u5bf9\u4e8e\u6ed1\u5757\u7684\u5b9a\u4f4d\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,o.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,o.kt)("p",null,"The opacity of the slider."),(0,o.kt)("p",null,"\u6ed1\u5757\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A progress value from 0 to 1 that represents where to jump the slider to."),(0,o.kt)("p",null,"\u4ece 0 \u5230 1 \u7684\u8fdb\u5ea6\u503c\uff0c\u8868\u793a\u5c06\u6ed1\u5757\u8df3\u8f6c\u5230\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"disabled-\u7981\u7528"},"Disabled \u7981\u7528"),(0,o.kt)("p",null,"A boolean that is true when the slider is displayed but disabled. Fades the slider."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u6ed1\u5757\u663e\u793a\u4f46\u7981\u7528\u65f6\u4e3a\u771f\u3002\u6de1\u5316\u6ed1\u5757\u3002"),(0,o.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,o.kt)("p",null,"The color of the active portion of the slider to the left of the knob."),(0,o.kt)("p",null,"\u65cb\u94ae\u5de6\u4fa7\u6ed1\u5757\u6d3b\u52a8\u90e8\u5206\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"unfilled-tint-color-\u672a\u586b\u5145\u7684\u8272\u8c03\u989c\u8272"},"Unfilled Tint Color \u672a\u586b\u5145\u7684\u8272\u8c03\u989c\u8272"),(0,o.kt)("p",null,"The color of the inactive portion of the slider to the right of the knob."),(0,o.kt)("p",null,"\u65cb\u94ae\u53f3\u4fa7\u6ed1\u5757\u7684\u975e\u6d3b\u52a8\u90e8\u5206\u7684\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"thumb-tint-\u62c7\u6307\u8272\u8c03\u989c\u8272"},"Thumb Tint \u62c7\u6307\u8272\u8c03\u989c\u8272"),(0,o.kt)("p",null,"The color of the knob to adjust the slider."),(0,o.kt)("p",null,"\u7528\u4e8e\u8c03\u6574\u6ed1\u5757\u7684\u65cb\u94ae\u989c\u8272\u3002"),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A progress value that represents the current position of the slider from 0 to 1."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\uff0c\u8868\u793a\u6ed1\u5757\u4ece 0 \u5230 1 \u7684\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"scrubbing-\u62d6\u52a8"},"Scrubbing \u62d6\u52a8"),(0,o.kt)("p",null,"A boolean that is true when the knob is being dragged."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u62d6\u52a8\u65cb\u94ae\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}c.isMDXComponent=!0},96354:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/slider-5c7f347914e597282d6bd91cb00af0d0.png"}}]);