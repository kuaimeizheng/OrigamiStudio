"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2188],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,k=d["".concat(c,".").concat(h)]||d[h]||s[h]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3450:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:2},c="Checkbox \u590d\u9009\u6846",u={unversionedId:"Material/Checkbox",id:"Material/Checkbox",title:"Checkbox \u590d\u9009\u6846",description:"A Material checkbox with customizable colors.",source:"@site/docs/Material/Checkbox.md",sourceDirName:"Material",slug:"/Material/Checkbox",permalink:"/OrigamiStudio/docs/Material/Checkbox",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Material/Checkbox.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654509971,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alert View \u8b66\u793a\u6846",permalink:"/OrigamiStudio/docs/Material/Alert View"},next:{title:"Circular Progress \u73af\u5f62\u8fdb\u5ea6",permalink:"/OrigamiStudio/docs/Material/Circular Progress"}},p={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Theme \u4e3b\u9898",id:"theme-\u4e3b\u9898",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Turn On \u6253\u5f00",id:"turn-on-\u6253\u5f00",level:3},{value:"Turn Off \u5173\u95ed",id:"turn-off-\u5173\u95ed",level:3},{value:"Disabled \u7981\u7528",id:"disabled-\u7981\u7528",level:3},{value:"On / Off \u5f00/\u5173",id:"on--off-\u5f00\u5173",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"checkbox-\u590d\u9009\u6846"},"Checkbox \u590d\u9009\u6846"),(0,i.kt)("p",null,"A Material checkbox with customizable colors."),(0,i.kt)("p",null,"\u53ef\u81ea\u5b9a\u4e49\u989c\u8272\u7684Material\u590d\u9009\u6846\u3002"),(0,i.kt)("p",null,"Use the Touch button on the component to get the state of the checkbox."),(0,i.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684 Touch \u6309\u94ae\u6765\u83b7\u53d6\u590d\u9009\u6846\u7684\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db4e5619-0fef-4e09-b948-ad5dbea48722/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190154Z&X-Amz-Expires=86400&X-Amz-Signature=fa996ac2e7e29be01b755cf95a550316f618a823ad854df8bd3fddc6d28982b8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the checkbox is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u590d\u9009\u6846\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"The position to display the checkbox."),(0,i.kt)("p",null,"\u663e\u793a\u590d\u9009\u6846\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,i.kt)("p",null,"The anchor point to position the checkbox relative to. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,i.kt)("p",null,"\u76f8\u5bf9\u4e8e\u653e\u7f6e\u590d\u9009\u6846\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,i.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,i.kt)("p",null,"The color of the checkbox when checked."),(0,i.kt)("p",null,"\u9009\u4e2d\u65f6\u590d\u9009\u6846\u7684\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"theme-\u4e3b\u9898"},"Theme \u4e3b\u9898"),(0,i.kt)("p",null,"The theme of the checkbox when unchecked: light or dark."),(0,i.kt)("p",null,"\u672a\u9009\u4e2d\u65f6\u590d\u9009\u6846\u7684\u4e3b\u9898\uff1a\u4eae\u6216\u6697\u3002"),(0,i.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"The opacity of the checkbox."),(0,i.kt)("p",null,"\u590d\u9009\u6846\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,i.kt)("h3",{id:"turn-on-\u6253\u5f00"},"Turn On \u6253\u5f00"),(0,i.kt)("p",null,"A pulse that checks the checkbox."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u52fe\u9009\u590d\u9009\u6846\u3002"),(0,i.kt)("h3",{id:"turn-off-\u5173\u95ed"},"Turn Off \u5173\u95ed"),(0,i.kt)("p",null,"A pulse that unchecks the checkbox."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u53d6\u6d88\u52fe\u9009\u590d\u9009\u6846\u3002"),(0,i.kt)("h3",{id:"disabled-\u7981\u7528"},"Disabled \u7981\u7528"),(0,i.kt)("p",null,"A boolean that is true when the checkbox is disabled."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u7981\u7528\u590d\u9009\u6846\u65f6\u4e3a true \u3002"),(0,i.kt)("h3",{id:"on--off-\u5f00\u5173"},"On / Off \u5f00/\u5173"),(0,i.kt)("p",null,"A boolean that is true when the checkbox is checked."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9009\u4e2d\u590d\u9009\u6846\u65f6\u4e3a true \u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),"\n",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}h.isMDXComponent=!0}}]);