"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[53293],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>m});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function d(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var l=n.createContext({}),s=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),u=s(o),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(h,a(a({ref:e},c),{},{components:o})):n.createElement(h,a({ref:e},c))}));function m(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=o.length,a=new Array(r);a[0]=u;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:i,a[1]=d;for(var s=2;s<r;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2953:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=o(87462),i=(o(67294),o(3905));const r={title:"Coordinates \u5750\u6807",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Coordinates \u5750\u6807",d={unversionedId:"documentation/Concepts/Coordinates",id:"documentation/Concepts/Coordinates",title:"Coordinates \u5750\u6807",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Concepts/Coordinates.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/Coordinates",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/Coordinates.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{title:"Coordinates \u5750\u6807",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Concepts \u6982\u5ff5",permalink:"/OrigamiStudio/en/docs/category/concepts-\u6982\u5ff5"},next:{title:"JavaScript Patch API",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/JavaScript Patch API"}},l={},s=[{value:"Anchor Point \u5750\u6807\u951a\u70b9",id:"anchor-point-\u5750\u6807\u951a\u70b9",level:2},{value:"Pivot \u56fe\u5c42\u4e2d\u5fc3\u70b9",id:"pivot-\u56fe\u5c42\u4e2d\u5fc3\u70b9",level:2}],c={toc:s};function p(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coordinates-\u5750\u6807"},"Coordinates \u5750\u6807"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Origami Studio use pt/dp coordinates instead of pixels. Specify position or size in pt/dp, and Origami will handle rendering layers at the appropriate density. For instance an iPhone 7 is 375x667 in points, but 750x1334 in pixels."),(0,i.kt)("p",null,"Origami Studio \u4f7f\u7528 pt / dp \u5355\u4f4d\u4e3a\u5750\u6807\uff0c\u4e0d\u662f\u50cf\u7d20\u3002"),(0,i.kt)("p",null,"\u7528 pt / dp \u6307\u5b9a\u4f4d\u7f6e\u548c\u5927\u5c0f (\u4f8b\u5982\uff1a\u8bbe\u8ba1\u56fe\u7684 1 \u500d\u503c\uff0cSketch \u91cc\u7684\u5185\u7f6e\u7684\u8bbe\u5907\u7684\u5c3a\u5bf8) \uff0cOrigami \u5c06\u4ee5\u5408\u9002\u7684\u5bc6\u5ea6\u663e\u793a\u56fe\u5c42\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0ciPhone 7 \u7684\u70b9\u6570\u4e3a 375x667 (\u8bbe\u8ba1\u7684 1 \u500d\u56fe) \uff0c\u4f46\u50cf\u7d20\u4e3a 750x1334 (\u8bbe\u8ba1\u7684 2 \u500d\u56fe) \u3002"),(0,i.kt)("p",null,"\u56fe\u5c42\u5c5e\u6027\u7a97\u53e3\u4e2d\u6709\u4e24\u79cd\u5750\u6807\uff0c\u4e00\u79cd\u662f\u951a\u70b9 Anchor \u5750\u6807\uff0c\u7528\u4e8e\u5bf9\u8c61\u7684\u5b9a\u4f4d\u548c\u5bf9\u9f50\u65b9\u5f0f\uff1b\u53e6\u4e00\u79cd\u7684\u56fe\u5c42\u7684\u4e2d\u5fc3\u70b9 Pivot \u5750\u6807\uff0c\u50cf Ps \u4e2d\u65cb\u8f6c\u65f6\u4f1a\u6709\u4e00\u4e2a\u4e2d\u5fc3\u70b9\uff0c\u65cb\u8f6c\u65f6\u4ee5\u90a3\u4e2a\u70b9\u4e3a\u5706\u5fc3"),(0,i.kt)("p",null,"By default, the origin (x: 0, y: 0) is in the center of the device screen. On the X axis, coordinates increase as you move right, and decrease as you move left. On the Y axis, coordinates increase as you move down, and decrease as you move up."),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5750\u6807\u539f\u70b9\uff08x\uff1a0\uff0cy\uff1a0\uff09\u5728\u5c4f\u5e55\u7684\u4e2d\u5fc3\u3002 X \u8f74\u5750\u6807\uff0c\u539f\u70b9\u5411\u53f3\u4e3a\u6b63\u6570\uff0c\u5411\u5de6\u4e3a\u8d1f\u6570\u3002Y \u8f74\u5750\u6807\uff0c\u539f\u70b9\u5411\u4e0b\u4e3a\u6b63\u6570\uff0c\u5411\u4e0a\u4e3a\u8d1f\u6570\u3002"),(0,i.kt)("p",null,"For illustration, below is a Layer Group of height 400 pixels and width 300 pixels:"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u56fe\u5c42\u5728\u5c4f\u5e55\u4e2d\u7684\u5750\u6807\uff0c\u56fe\u5c42\u9ad8 400 \u5bbd 300\uff1a"),(0,i.kt)("div",{class:"coord-example"},(0,i.kt)("div",{class:"dot dot-center dot-center-y dot-center-x"}),(0,i.kt)("div",{class:"label dot-center dot-center-y dot-center-x"},"0, 0"),(0,i.kt)("div",{class:"dot dot-top-right dot-top dot-right"}),(0,i.kt)("div",{class:"label dot-top-right dot-top dot-right"},"150, -200"),(0,i.kt)("div",{class:"dot dot-bottom-left dot-bottom dot-left"}),(0,i.kt)("div",{class:"label dot-bottom-left dot-bottom dot-left"},"-150, 200")),(0,i.kt)("h2",{id:"anchor-point-\u5750\u6807\u951a\u70b9"},"Anchor Point \u5750\u6807\u951a\u70b9"),(0,i.kt)("p",null,"Anchor points change the origin of the coordinate system for that patch. Anchor points can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1."),(0,i.kt)("p",null,"\u66f4\u6539\u951a\u70b9\u4f1a\u6539\u53d8\u6a21\u5757\u7684\u5750\u6807\u539f\u70b9\u4f4d\u7f6e\u3002 \u951a\u70b9\u53ef\u4ee5\u901a\u8fc7 Point \u6a21\u5757\u63a7\u5236\uff0cX \u548c Y \u7684\u503c\u53ef\u4ee5\u662f 0 \uff5e 1 \u4e4b\u95f4\u7684\u4efb\u4f55\u6570\u5b57\u3002"),(0,i.kt)("div",{class:"coord-example"},(0,i.kt)("div",{class:"dot dot-top-left dot-top dot-left"}),(0,i.kt)("div",{class:"label dot-top-left dot-top dot-left"},"Top Left (0, 0)"),(0,i.kt)("div",{class:"dot dot-top-center dot-top dot-center-x"}),(0,i.kt)("div",{class:"label dot-top-center dot-top dot-center-x"},"Top Center (.5, 0)"),(0,i.kt)("div",{class:"dot dot-top-right dot-top dot-right"}),(0,i.kt)("div",{class:"label dot-top-right dot-top dot-right"},"Top Right (1, 0)"),(0,i.kt)("div",{class:"dot dot-center-left dot-center-y dot-left"}),(0,i.kt)("div",{class:"label dot-center-left dot-center-y dot-left"},"Center Left (0, .5)"),(0,i.kt)("div",{class:"dot dot-center dot-center-y dot-center-x"}),(0,i.kt)("div",{class:"label dot-center dot-center-y dot-center-x"},"Center (.5, .5)"),(0,i.kt)("div",{class:"dot dot-center-right dot-center-y dot-right"}),(0,i.kt)("div",{class:"label dot-center-right dot-center-y dot-right"},"Center Right (1, .5)"),(0,i.kt)("div",{class:"dot dot-bottom-left dot-bottom dot-left"}),(0,i.kt)("div",{class:"label dot-bottom-left dot-bottom dot-left"},"Bottom Left (0, 1)"),(0,i.kt)("div",{class:"dot dot-bottom-center dot-bottom dot-center-x"}),(0,i.kt)("div",{class:"label dot-bottom-center dot-bottom dot-center-x"},"Bottom Center (.5, 1)"),(0,i.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,i.kt)("div",{class:"label dot-bottom-right dot-bottom dot-right"},"Bottom Right (1, 1)")),(0,i.kt)("p",null,"Here\u2019s an example of a Text Layer positioned from the \u201cTop Left\u201d Anchor Point:"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u951a\u70b9\u5728\u5de6\u4e0a\u89d2\u7684\u793a\u610f\u56fe\uff1a"),(0,i.kt)("div",{class:"coord-example"},(0,i.kt)("div",{class:"dot dot-top-left dot-top dot-left"}),(0,i.kt)("div",{class:"box dot-top-left dot-top dot-left"},"Button Text")),(0,i.kt)("p",null,"From the bottom right:"),(0,i.kt)("p",null,"\u951a\u70b9\u5728\u53f3\u4e0b\u89d2\u7684\u6587\u5b57\u56fe\u5c42\uff1a"),(0,i.kt)("div",{class:"coord-example"},(0,i.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,i.kt)("div",{class:"box dot-bottom-right dot-bottom dot-right"},"Button Text")),(0,i.kt)("p",null,"If you want to inset it by 40 pixels, give it an X Position of -40 and a Y Position of -40."),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u628a\u56fe\u5c42\u5411\u5de6\u4e0a\u65b9\u79fb\u52a8 40 \u50cf\u7d20\uff0cX \u548c Y \u7684\u503c\u90fd\u8981\u8f93\u5165-40\u3002"),(0,i.kt)("div",{class:"coord-example"},(0,i.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,i.kt)("div",{class:"box inset-40 dot-bottom-right dot-bottom dot-right"},"Button Text"),(0,i.kt)("div",{class:"label dot-bottom-right dot-bottom dot-right"},"-40, -40")),(0,i.kt)("h2",{id:"pivot-\u56fe\u5c42\u4e2d\u5fc3\u70b9"},"Pivot \u56fe\u5c42\u4e2d\u5fc3\u70b9"),(0,i.kt)("p",null,"The pivot port changes the point about which a layer scales and rotates, and can be controlled separately from anchor points. Pivots can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1."),(0,i.kt)("p",null,"Pivot \u7aef\u53e3\u662f\u56fe\u5c42\u7f29\u653e\u548c\u65cb\u8f6c\u7684\u4e2d\u5fc3\u70b9\uff0c\u8fd9\u4e2a\u4e2d\u5fc3\u70b9\u53ef\u4ee5\u548c\u951a\u70b9\u5206\u5f00\u63a7\u5236\u3002\u4e2d\u5fc3\u70b9\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Point"},"Point"),"\u6a21\u5757\u63a7\u5236\uff0cX \u548c Y \u7684\u503c\u53ef\u4ee5\u662f 0 \uff5e 1 \u4e4b\u95f4\u7684\u4efb\u4f55\u6570\u3002"),(0,i.kt)("div",{class:"pivot-example-box",layout:"row top-justify"},(0,i.kt)("div",{class:"pivot-example pivot-center "},(0,i.kt)("div",{class:"item"},"A"),(0,i.kt)("div",{class:"label"},"Center (.5, .5)")),(0,i.kt)("div",{class:"pivot-example pivot-top-left "},(0,i.kt)("div",{class:"item"},"B"),(0,i.kt)("div",{class:"label"},"Top Left (0, 0)")),(0,i.kt)("div",{class:"pivot-example pivot-center-right "},(0,i.kt)("div",{class:"item"},"C"),(0,i.kt)("div",{class:"label"},"Center Right (1, .5)"))))}p.isMDXComponent=!0}}]);