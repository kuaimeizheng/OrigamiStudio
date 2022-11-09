"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[92601],{3905:(t,o,e)=>{e.d(o,{Zo:()=>s,kt:()=>u});var r=e(67294);function d(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function i(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?i(Object(e),!0).forEach((function(o){d(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function a(t,o){if(null==t)return{};var e,r,d=function(t,o){if(null==t)return{};var e,r,d={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],o.indexOf(e)>=0||(d[e]=t[e]);return d}(t,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(d[e]=t[e])}return d}var l=r.createContext({}),c=function(t){var o=r.useContext(l),e=o;return t&&(e="function"==typeof t?t(o):n(n({},o),t)),e},s=function(t){var o=c(t.components);return r.createElement(l.Provider,{value:o},t.children)},p={inlineCode:"code",wrapper:function(t){var o=t.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(t,o){var e=t.components,d=t.mdxType,i=t.originalType,l=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),m=c(e),u=d,v=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return e?r.createElement(v,n(n({ref:o},s),{},{components:e})):r.createElement(v,n({ref:o},s))}));function u(t,o){var e=arguments,d=o&&o.mdxType;if("string"==typeof t||d){var i=e.length,n=new Array(i);n[0]=m;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=t,a.mdxType="string"==typeof t?t:d,n[1]=a;for(var c=2;c<i;c++)n[c]=e[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},95885:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=e(87462),d=(e(67294),e(3905));const i={title:"Coordinates \u5750\u6807",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},n="Coordinates \u5750\u6807",a={unversionedId:"documentation/Concepts/Coordinates",id:"documentation/Concepts/Coordinates",title:"Coordinates \u5750\u6807",description:"---",source:"@site/docs/documentation/Concepts/Coordinates.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/Coordinates",permalink:"/OrigamiStudio/docs/documentation/Concepts/Coordinates",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/Coordinates.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Coordinates \u5750\u6807",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Concepts \u6982\u5ff5",permalink:"/OrigamiStudio/docs/category/concepts-\u6982\u5ff5"},next:{title:"JavaScript Patch API",permalink:"/OrigamiStudio/docs/documentation/Concepts/JavaScript Patch API"}},l={},c=[{value:"Anchor Point \u5750\u6807\u951a\u70b9",id:"anchor-point-\u5750\u6807\u951a\u70b9",level:2},{value:"Pivot \u56fe\u5c42\u4e2d\u5fc3\u70b9",id:"pivot-\u56fe\u5c42\u4e2d\u5fc3\u70b9",level:2}],s={toc:c};function p(t){let{components:o,...e}=t;return(0,d.kt)("wrapper",(0,r.Z)({},s,e,{components:o,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"coordinates-\u5750\u6807"},"Coordinates \u5750\u6807"),(0,d.kt)("hr",null),(0,d.kt)("p",null,"Origami Studio \u4f7f\u7528 pt / dp \u5355\u4f4d\u4e3a\u5750\u6807\uff0c\u4e0d\u662f\u50cf\u7d20\u3002"),(0,d.kt)("p",null,"\u7528 pt / dp \u6307\u5b9a\u4f4d\u7f6e\u548c\u5927\u5c0f (\u4f8b\u5982\uff1a\u8bbe\u8ba1\u56fe\u7684 1 \u500d\u503c\uff0cSketch \u91cc\u7684\u5185\u7f6e\u7684\u8bbe\u5907\u7684\u5c3a\u5bf8) \uff0cOrigami \u5c06\u4ee5\u5408\u9002\u7684\u5bc6\u5ea6\u663e\u793a\u56fe\u5c42\u3002"),(0,d.kt)("p",null,"\u4f8b\u5982\uff0ciPhone 7 \u7684\u70b9\u6570\u4e3a 375x667 (\u8bbe\u8ba1\u7684 1 \u500d\u56fe) \uff0c\u4f46\u50cf\u7d20\u4e3a 750x1334 (\u8bbe\u8ba1\u7684 2 \u500d\u56fe) \u3002"),(0,d.kt)("p",null,"\u56fe\u5c42\u5c5e\u6027\u7a97\u53e3\u4e2d\u6709\u4e24\u79cd\u5750\u6807\uff0c\u4e00\u79cd\u662f\u951a\u70b9 Anchor \u5750\u6807\uff0c\u7528\u4e8e\u5bf9\u8c61\u7684\u5b9a\u4f4d\u548c\u5bf9\u9f50\u65b9\u5f0f\uff1b\u53e6\u4e00\u79cd\u7684\u56fe\u5c42\u7684\u4e2d\u5fc3\u70b9 Pivot \u5750\u6807\uff0c\u50cf Ps \u4e2d\u65cb\u8f6c\u65f6\u4f1a\u6709\u4e00\u4e2a\u4e2d\u5fc3\u70b9\uff0c\u65cb\u8f6c\u65f6\u4ee5\u90a3\u4e2a\u70b9\u4e3a\u5706\u5fc3"),(0,d.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5750\u6807\u539f\u70b9\uff08x\uff1a0\uff0cy\uff1a0\uff09\u5728\u5c4f\u5e55\u7684\u4e2d\u5fc3\u3002 X \u8f74\u5750\u6807\uff0c\u539f\u70b9\u5411\u53f3\u4e3a\u6b63\u6570\uff0c\u5411\u5de6\u4e3a\u8d1f\u6570\u3002Y \u8f74\u5750\u6807\uff0c\u539f\u70b9\u5411\u4e0b\u4e3a\u6b63\u6570\uff0c\u5411\u4e0a\u4e3a\u8d1f\u6570\u3002"),(0,d.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u56fe\u5c42\u5728\u5c4f\u5e55\u4e2d\u7684\u5750\u6807\uff0c\u56fe\u5c42\u9ad8 400 \u5bbd 300\uff1a"),(0,d.kt)("div",{class:"coord-example"},(0,d.kt)("div",{class:"dot dot-center dot-center-y dot-center-x"}),(0,d.kt)("div",{class:"label dot-center dot-center-y dot-center-x"},"0, 0"),(0,d.kt)("div",{class:"dot dot-top-right dot-top dot-right"}),(0,d.kt)("div",{class:"label dot-top-right dot-top dot-right"},"150, -200"),(0,d.kt)("div",{class:"dot dot-bottom-left dot-bottom dot-left"}),(0,d.kt)("div",{class:"label dot-bottom-left dot-bottom dot-left"},"-150, 200")),(0,d.kt)("h2",{id:"anchor-point-\u5750\u6807\u951a\u70b9"},"Anchor Point \u5750\u6807\u951a\u70b9"),(0,d.kt)("p",null,"\u66f4\u6539\u951a\u70b9\u4f1a\u6539\u53d8\u6a21\u5757\u7684\u5750\u6807\u539f\u70b9\u4f4d\u7f6e\u3002 \u951a\u70b9\u53ef\u4ee5\u901a\u8fc7 Point \u6a21\u5757\u63a7\u5236\uff0cX \u548c Y \u7684\u503c\u53ef\u4ee5\u662f 0 \uff5e 1 \u4e4b\u95f4\u7684\u4efb\u4f55\u6570\u5b57\u3002"),(0,d.kt)("div",{class:"coord-example"},(0,d.kt)("div",{class:"dot dot-top-left dot-top dot-left"}),(0,d.kt)("div",{class:"label dot-top-left dot-top dot-left"},"Top Left (0, 0)"),(0,d.kt)("div",{class:"dot dot-top-center dot-top dot-center-x"}),(0,d.kt)("div",{class:"label dot-top-center dot-top dot-center-x"},"Top Center (.5, 0)"),(0,d.kt)("div",{class:"dot dot-top-right dot-top dot-right"}),(0,d.kt)("div",{class:"label dot-top-right dot-top dot-right"},"Top Right (1, 0)"),(0,d.kt)("div",{class:"dot dot-center-left dot-center-y dot-left"}),(0,d.kt)("div",{class:"label dot-center-left dot-center-y dot-left"},"Center Left (0, .5)"),(0,d.kt)("div",{class:"dot dot-center dot-center-y dot-center-x"}),(0,d.kt)("div",{class:"label dot-center dot-center-y dot-center-x"},"Center (.5, .5)"),(0,d.kt)("div",{class:"dot dot-center-right dot-center-y dot-right"}),(0,d.kt)("div",{class:"label dot-center-right dot-center-y dot-right"},"Center Right (1, .5)"),(0,d.kt)("div",{class:"dot dot-bottom-left dot-bottom dot-left"}),(0,d.kt)("div",{class:"label dot-bottom-left dot-bottom dot-left"},"Bottom Left (0, 1)"),(0,d.kt)("div",{class:"dot dot-bottom-center dot-bottom dot-center-x"}),(0,d.kt)("div",{class:"label dot-bottom-center dot-bottom dot-center-x"},"Bottom Center (.5, 1)"),(0,d.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,d.kt)("div",{class:"label dot-bottom-right dot-bottom dot-right"},"Bottom Right (1, 1)")),(0,d.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u951a\u70b9\u5728\u5de6\u4e0a\u89d2\u7684\u793a\u610f\u56fe\uff1a"),(0,d.kt)("div",{class:"coord-example"},(0,d.kt)("div",{class:"dot dot-top-left dot-top dot-left"}),(0,d.kt)("div",{class:"box dot-top-left dot-top dot-left"},"Button Text")),(0,d.kt)("p",null,"\u951a\u70b9\u5728\u53f3\u4e0b\u89d2\u7684\u6587\u5b57\u56fe\u5c42\uff1a"),(0,d.kt)("div",{class:"coord-example"},(0,d.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,d.kt)("div",{class:"box dot-bottom-right dot-bottom dot-right"},"Button Text")),(0,d.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u628a\u56fe\u5c42\u5411\u5de6\u4e0a\u65b9\u79fb\u52a8 40 \u50cf\u7d20\uff0cX \u548c Y \u7684\u503c\u90fd\u8981\u8f93\u5165-40\u3002"),(0,d.kt)("div",{class:"coord-example"},(0,d.kt)("div",{class:"dot dot-bottom-right dot-bottom dot-right"}),(0,d.kt)("div",{class:"box inset-40 dot-bottom-right dot-bottom dot-right"},"Button Text"),(0,d.kt)("div",{class:"label dot-bottom-right dot-bottom dot-right"},"-40, -40")),(0,d.kt)("h2",{id:"pivot-\u56fe\u5c42\u4e2d\u5fc3\u70b9"},"Pivot \u56fe\u5c42\u4e2d\u5fc3\u70b9"),(0,d.kt)("p",null,"Pivot \u7aef\u53e3\u662f\u56fe\u5c42\u7f29\u653e\u548c\u65cb\u8f6c\u7684\u4e2d\u5fc3\u70b9\uff0c\u8fd9\u4e2a\u4e2d\u5fc3\u70b9\u53ef\u4ee5\u548c\u951a\u70b9\u5206\u5f00\u63a7\u5236\u3002\u4e2d\u5fc3\u70b9\u53ef\u4ee5\u901a\u8fc7",(0,d.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point"},"Point"),"\u6a21\u5757\u63a7\u5236\uff0cX \u548c Y \u7684\u503c\u53ef\u4ee5\u662f 0 \uff5e 1 \u4e4b\u95f4\u7684\u4efb\u4f55\u6570\u3002"),(0,d.kt)("div",{class:"pivot-example-box",layout:"row top-justify"},(0,d.kt)("div",{class:"pivot-example pivot-center "},(0,d.kt)("div",{class:"item"},"A"),(0,d.kt)("div",{class:"label"},"Center (.5, .5)")),(0,d.kt)("div",{class:"pivot-example pivot-top-left "},(0,d.kt)("div",{class:"item"},"B"),(0,d.kt)("div",{class:"label"},"Top Left (0, 0)")),(0,d.kt)("div",{class:"pivot-example pivot-center-right "},(0,d.kt)("div",{class:"item"},"C"),(0,d.kt)("div",{class:"label"},"Center Right (1, .5)"))))}p.isMDXComponent=!0}}]);