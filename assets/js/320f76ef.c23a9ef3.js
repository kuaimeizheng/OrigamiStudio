"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1654],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),h=o,k=s["".concat(c,".").concat(h)]||s[h]||p[h]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:2},c="Checkbox \u590d\u9009\u6846",u={unversionedId:"documentation/Material/Checkbox",id:"documentation/Material/Checkbox",title:"Checkbox \u590d\u9009\u6846",description:"A Material checkbox with customizable colors.",source:"@site/docs/documentation/Material/Checkbox.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Checkbox",permalink:"/OrigamiStudio/docs/documentation/Material/Checkbox",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Checkbox.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659700546,formattedLastUpdatedAt:"2022\u5e748\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Alert View \u8b66\u793a\u6846",permalink:"/OrigamiStudio/docs/documentation/Material/Alert View"},next:{title:"Circular Progress \u73af\u5f62\u8fdb\u5ea6",permalink:"/OrigamiStudio/docs/documentation/Material/Circular Progress"}},d={},p=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Theme \u4e3b\u9898",id:"theme-\u4e3b\u9898",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Turn On \u6253\u5f00",id:"turn-on-\u6253\u5f00",level:3},{value:"Turn Off \u5173\u95ed",id:"turn-off-\u5173\u95ed",level:3},{value:"Disabled \u7981\u7528",id:"disabled-\u7981\u7528",level:3},{value:"On / Off \u5f00/\u5173",id:"on--off-\u5f00\u5173",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],s={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checkbox-\u590d\u9009\u6846"},"Checkbox \u590d\u9009\u6846"),(0,a.kt)("p",null,"A Material checkbox with customizable colors."),(0,a.kt)("p",null,"\u53ef\u81ea\u5b9a\u4e49\u989c\u8272\u7684Material\u590d\u9009\u6846\u3002"),(0,a.kt)("p",null,"Use the Touch button on the component to get the state of the checkbox."),(0,a.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684 Touch \u6309\u94ae\u6765\u83b7\u53d6\u590d\u9009\u6846\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(91922).Z,width:"1548",height:"460"})),(0,a.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A boolean that is true when the checkbox is displayed."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u590d\u9009\u6846\u65f6\u4e3a\u771f\u3002"),(0,a.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,a.kt)("p",null,"The position to display the checkbox."),(0,a.kt)("p",null,"\u663e\u793a\u590d\u9009\u6846\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,a.kt)("p",null,"The anchor point to position the checkbox relative to. See ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,a.kt)("p",null,"\u76f8\u5bf9\u4e8e\u653e\u7f6e\u590d\u9009\u6846\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,a.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,a.kt)("p",null,"The color of the checkbox when checked."),(0,a.kt)("p",null,"\u9009\u4e2d\u65f6\u590d\u9009\u6846\u7684\u989c\u8272\u3002"),(0,a.kt)("h3",{id:"theme-\u4e3b\u9898"},"Theme \u4e3b\u9898"),(0,a.kt)("p",null,"The theme of the checkbox when unchecked: light or dark."),(0,a.kt)("p",null,"\u672a\u9009\u4e2d\u65f6\u590d\u9009\u6846\u7684\u4e3b\u9898\uff1a\u4eae\u6216\u6697\u3002"),(0,a.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,a.kt)("p",null,"The opacity of the checkbox."),(0,a.kt)("p",null,"\u590d\u9009\u6846\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,a.kt)("h3",{id:"turn-on-\u6253\u5f00"},"Turn On \u6253\u5f00"),(0,a.kt)("p",null,"A pulse that checks the checkbox."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u52fe\u9009\u590d\u9009\u6846\u3002"),(0,a.kt)("h3",{id:"turn-off-\u5173\u95ed"},"Turn Off \u5173\u95ed"),(0,a.kt)("p",null,"A pulse that unchecks the checkbox."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u53d6\u6d88\u52fe\u9009\u590d\u9009\u6846\u3002"),(0,a.kt)("h3",{id:"disabled-\u7981\u7528"},"Disabled \u7981\u7528"),(0,a.kt)("p",null,"A boolean that is true when the checkbox is disabled."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u7981\u7528\u590d\u9009\u6846\u65f6\u4e3a true \u3002"),(0,a.kt)("h3",{id:"on--off-\u5f00\u5173"},"On / Off \u5f00/\u5173"),(0,a.kt)("p",null,"A boolean that is true when the checkbox is checked."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u9009\u4e2d\u590d\u9009\u6846\u65f6\u4e3a true \u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),"\n",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}h.isMDXComponent=!0},91922:function(e,t,n){t.Z=n.p+"assets/images/checkbox-b7309fe75069c4fe314ca4c4dcea2e41.png"}}]);