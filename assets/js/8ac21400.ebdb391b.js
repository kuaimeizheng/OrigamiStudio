"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2601],{3905:function(t,o,e){e.d(o,{Zo:function(){return c},kt:function(){return m}});var n=e(67294);function i(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function r(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?r(Object(e),!0).forEach((function(o){i(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function a(t,o){if(null==t)return{};var e,n,i=function(t,o){if(null==t)return{};var e,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],o.indexOf(e)>=0||(i[e]=t[e]);return i}(t,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var s=n.createContext({}),l=function(t){var o=n.useContext(s),e=o;return t&&(e="function"==typeof t?t(o):d(d({},o),t)),e},c=function(t){var o=l(t.components);return n.createElement(s.Provider,{value:o},t.children)},p={inlineCode:"code",wrapper:function(t){var o=t.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(t,o){var e=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=l(e),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return e?n.createElement(f,d(d({ref:o},c),{},{components:e})):n.createElement(f,d({ref:o},c))}));function m(t,o){var e=arguments,i=o&&o.mdxType;if("string"==typeof t||i){var r=e.length,d=new Array(r);d[0]=u;var a={};for(var s in o)hasOwnProperty.call(o,s)&&(a[s]=o[s]);a.originalType=t,a.mdxType="string"==typeof t?t:i,d[1]=a;for(var l=2;l<r;l++)d[l]=e[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},95885:function(t,o,e){e.r(o),e.d(o,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=e(87462),i=e(63366),r=(e(67294),e(3905)),d=["components"],a={sidebar_position:1},s="Coordinates \u5750\u6807",l={unversionedId:"documentation/Concepts/Coordinates",id:"documentation/Concepts/Coordinates",title:"Coordinates \u5750\u6807",description:"Origami Studio use pt/dp coordinates instead of pixels. Specify position or size in pt/dp, and Origami will handle rendering layers at the appropriate density. For instance an iPhone 7 is 375x667 in points, but 750x1334 in pixels.",source:"@site/docs/documentation/Concepts/Coordinates.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/Coordinates",permalink:"/OrigamiStudio/docs/documentation/Concepts/Coordinates",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/Coordinates.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659700546,formattedLastUpdatedAt:"2022\u5e748\u67085\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentionSidebar",previous:{title:"Concepts \u6982\u5ff5",permalink:"/OrigamiStudio/docs/category/concepts-\u6982\u5ff5"},next:{title:"Loop \u5faa\u73af",permalink:"/OrigamiStudio/docs/documentation/Concepts/Loop"}},c={},p=[],u={toc:p};function m(t){var o=t.components,e=(0,i.Z)(t,d);return(0,r.kt)("wrapper",(0,n.Z)({},u,e,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coordinates-\u5750\u6807"},"Coordinates \u5750\u6807"),(0,r.kt)("p",null,"Origami Studio use pt/dp coordinates instead of pixels. Specify position or size in pt/dp, and Origami will handle rendering layers at the appropriate density. For instance an iPhone 7 is 375x667 in points, but 750x1334 in pixels."),(0,r.kt)("p",null,"Origami Studio \u4f7f\u7528 pt / dp \u5355\u4f4d\u4e3a\u5750\u6807\uff0c\u4e0d\u662f\u50cf\u7d20\u3002 \u7528 pt / dp \u6307\u5b9a\u4f4d\u7f6e\u548c\u5927\u5c0f (\u677f\u6817\uff1a\u8bbe\u8ba1\u56fe\u7684 1 \u500d\u503c\uff0cSketch \u91cc\u7684\u5185\u7f6e\u7684\u8bbe\u5907\u7684\u5c3a\u5bf8) \uff0cOrigami \u5c06\u4ee5\u5408\u9002\u7684\u5bc6\u5ea6\u663e\u793a\u56fe\u5c42\u3002 \u4f8b\u5982\uff0ciPhone 7 \u7684\u70b9\u6570\u4e3a 375x667 (\u4f8b\u5982\uff1a\u8bbe\u8ba1\u7684 1 \u500d\u56fe) \uff0c\u4f46\u50cf\u7d20\u4e3a 750x1334 (\u4f8b\u5982\uff1a\u8bbe\u8ba1\u7684 2 \u500d\u56fe) \u3002"),(0,r.kt)("p",null,"(\u4f8b\u5982\uff1a\u56fe\u5c42\u5c5e\u6027\u7a97\u53e3\u4e2d\u6709\u4e24\u79cd\u5750\u6807\uff0c\u4e00\u79cd\u662f\u951a\u70b9 Anchor \u5750\u6807\uff0c\u7528\u4e8e\u5bf9\u8c61\u7684\u5b9a\u4f4d\u548c\u5bf9\u9f50\u65b9\u5f0f\uff1b\u53e6\u4e00\u79cd\u7684\u56fe\u5c42\u7684\u4e2d\u5fc3\u70b9 Pivot \u5750\u6807\uff0c\u50cf Ps \u4e2d\u65cb\u8f6c\u65f6\u4f1a\u6709\u4e00\u4e2a\u4e2d\u5fc3\u70b9\uff0c\u65cb\u8f6c\u65f6\u4ee5\u90a3\u4e2a\u70b9\u4e3a\u5706\u5fc3)"),(0,r.kt)("p",null,"By default, the origin (x: 0, y: 0) is in the center of the device screen. On the X axis, coordinates increase as you move right, and decrease as you move left. On the Y axis, coordinates increase as you move down, and decrease as you move up."),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5750\u6807\u539f\u70b9\uff08x\uff1a0\uff0cy\uff1a0\uff09\u5728\u5c4f\u5e55\u7684\u4e2d\u5fc3\u3002 X \u8f74\u5750\u6807\uff0c\u539f\u70b9\u5411\u53f3\u4e3a\u6b63\u6570\uff0c\u5411\u5de6\u4e3a\u8d1f\u6570\u3002Y \u8f74\u5750\u6807\uff0c\u539f\u70b9\u5411\u4e0b\u4e3a\u6b63\u6570\uff0c\u5411\u4e0a\u4e3a\u8d1f\u6570\u3002"),(0,r.kt)("p",null,"For illustration, below is a Layer Group of height 400 pixels and width 300 pixels:"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u56fe\u5c42\u5728\u5c4f\u5e55\u4e2d\u7684\u5750\u6807\uff0c\u56fe\u5c42\u9ad8 400 \u5bbd 300\uff1a"),(0,r.kt)("div",{class:"coord-example"},(0,r.kt)("div",{class:"dot dot-center dot-center-y dot-center-x"}),(0,r.kt)("div",{class:"label dot-center dot-center-y dot-center-x"},"0, 0"),(0,r.kt)("div",{class:"dot dot-top-right dot-top dot-right"}),(0,r.kt)("div",{class:"label dot-top-right dot-top dot-right"},"150, -200"),(0,r.kt)("div",{class:"dot dot-bottom-left dot-bottom dot-left"}),(0,r.kt)("div",{class:"label dot-bottom-left dot-bottom dot-left"},"-150, 200")),(0,r.kt)("h1",{id:"anchor-point-\u5750\u6807\u951a\u70b9"},"Anchor Point \u5750\u6807\u951a\u70b9"),(0,r.kt)("p",null,"Anchor points change the origin of the coordinate system for that patch. Anchor points can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1."),(0,r.kt)("p",null,"\u66f4\u6539\u951a\u70b9\u4f1a\u6539\u53d8\u6a21\u5757\u7684\u5750\u6807\u539f\u70b9\u4f4d\u7f6e\u3002 \u951a\u70b9\u53ef\u4ee5\u901a\u8fc7### ","[Point]","### \u6a21\u5757\u63a7\u5236\uff0cX \u548c Y \u7684\u503c\u53ef\u4ee5\u662f 0 \uff5e 1 \u4e4b\u95f4\u7684\u4efb\u4f55\u6570\u3002"),(0,r.kt)("div",{class:"coord-example"},(0,r.kt)("div",{class:"dot dot-top-left dot-top dot-left"}),(0,r.kt)("div",{class:"label dot-top-left dot-top dot-left"},"Top Left (0, 0)"),(0,r.kt)("div",{class:"dot dot-top-center dot-top dot-center-x"}),(0,r.kt)("div",{class:"label dot-top-center dot-top dot-center-x"},"Top Center (.5, 0)"),(0,r.kt)("div",{class:"dot dot-top-right dot-top dot-right"}),(0,r.kt)("div",{class:"label dot-top-right dot-top dot-right"},"Top Right (1, 0)"),(0,r.kt)("div",{class:"dot dot-center-left dot-center-y dot-left"}),(0,r.kt)("div",{class:"label dot-center-left dot-center-y dot-left"},"Center Left (0, .5)"),(0,r.kt)("div",{class:"dot dot-center dot-center-y dot-center-x"}),(0,r.kt)("div",{class:"label dot-center dot-center-y dot-center-x"},"Center (.5, .5)"),(0,r.kt)("div",{class:"dot dot-center-right dot-center-y dot-right"}),(0,r.kt)("div",{class:"label dot-center-right dot-center-y dot-right"},"Center Right (1, .5)"),(0,r.kt)("div",{class:"dot dot-bottom-left dot-bottom dot-left"}),(0,r.kt)("div",{class:"label dot-bottom-left dot-bottom dot-left"},"Bottom Left (0, 1)"),(0,r.kt)("div",{class:"dot dot-bottom-center dot-bottom dot-center-x"}),(0,r.kt)("div",{class:"label dot-bottom-center dot-bottom dot-center-x"},"Bottom Center (.5, 1)"),(0,r.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,r.kt)("div",{class:"label dot-bottom-right dot-bottom dot-right"},"Bottom Right (1, 1)")),(0,r.kt)("p",null,"Here\u2019s an example of a Text Layer positioned from the \u201cTop Left\u201d Anchor Point:"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u951a\u70b9\u5728\u5de6\u4e0a\u89d2\u7684\u793a\u610f\u56fe\uff1a"),(0,r.kt)("div",{class:"coord-example"},(0,r.kt)("div",{class:"dot dot-top-left dot-top dot-left"}),(0,r.kt)("div",{class:"box dot-top-left dot-top dot-left"},"Button Text")),(0,r.kt)("p",null,"From the bottom right:"),(0,r.kt)("p",null,"\u951a\u70b9\u5728\u53f3\u4e0b\u89d2\u7684\u6587\u5b57\u56fe\u5c42\uff1a"),(0,r.kt)("div",{class:"coord-example"},(0,r.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,r.kt)("div",{class:"box dot-bottom-right dot-bottom dot-right"},"Button Text")),(0,r.kt)("p",null,"If you want to inset it by 40 pixels, give it an X Position of -40 and a Y Position of -40."),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u628a\u56fe\u5c42\u5411\u5de6\u4e0a\u65b9\u79fb\u52a8 40 \u50cf\u7d20\uff0cX \u548c Y \u7684\u503c\u90fd\u8981\u8f93\u5165-40\u3002"),(0,r.kt)("div",{class:"coord-example"},(0,r.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,r.kt)("div",{class:"box inset-40 dot-bottom-right dot-bottom dot-right"},"Button Text"),(0,r.kt)("div",{class:"label dot-bottom-right dot-bottom dot-right"},"-40, -40")),(0,r.kt)("h1",{id:"pivot-\u56fe\u5c42\u4e2d\u5fc3\u70b9"},"Pivot \u56fe\u5c42\u4e2d\u5fc3\u70b9"),(0,r.kt)("p",null,"The pivot port changes the point about which a layer scales and rotates, and can be controlled separately from anchor points. Pivots can be defined in the Patch Editor with a Point patch, where X and Y are any decimal 0-1."),(0,r.kt)("p",null,"Pivot \u7aef\u53e3\u662f\u56fe\u5c42\u7f29\u653e\u548c\u65cb\u8f6c\u7684\u4e2d\u5fc3\u70b9\uff0c\u8fd9\u4e2a\u4e2d\u5fc3\u70b9\u53ef\u4ee5\u548c\u951a\u70b9\u5206\u5f00\u63a7\u5236\u3002\u4e2d\u5fc3\u70b9\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point"},"Point"),"\u6a21\u5757\u63a7\u5236\uff0cX \u548c Y \u7684\u503c\u53ef\u4ee5\u662f 0 \uff5e 1 \u4e4b\u95f4\u7684\u4efb\u4f55\u6570\u3002"),(0,r.kt)("div",{class:"pivot-example-box",layout:"row top-justify"},(0,r.kt)("div",{class:"pivot-example pivot-center "},(0,r.kt)("div",{class:"item"},"A"),(0,r.kt)("div",{class:"label"},"Center (.5, .5)")),(0,r.kt)("div",{class:"pivot-example pivot-top-left "},(0,r.kt)("div",{class:"item"},"B"),(0,r.kt)("div",{class:"label"},"Top Left (0, 0)")),(0,r.kt)("div",{class:"pivot-example pivot-center-right "},(0,r.kt)("div",{class:"item"},"C"),(0,r.kt)("div",{class:"label"},"Center Right (1, .5)"))))}m.isMDXComponent=!0}}]);