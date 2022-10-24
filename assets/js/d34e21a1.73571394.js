"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[84368],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=i.createContext({}),u=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,h=c["".concat(d,".").concat(m)]||c[m]||s[m]||r;return o?i.createElement(h,a(a({ref:t},p),{},{components:o})):i.createElement(h,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<r;u++)a[u]=o[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}c.displayName="MDXCreateElement"},62759:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=o(87462),n=(o(67294),o(3905));const r={sidebar_position:5},a="Grid Layout \u7f51\u683c\u5e03\u5c40",l={unversionedId:"documentation/Loops/Grid Layout",id:"documentation/Loops/Grid Layout",title:"Grid Layout \u7f51\u683c\u5e03\u5c40",description:"Repeat a layer or group in a list or grid. Evenly divides the total grid width by the number of columns to quickly size and position the items.",source:"@site/docs/documentation/Loops/Grid Layout.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Grid Layout",permalink:"/OrigamiStudio/docs/documentation/Loops/Grid Layout",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Grid Layout.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666622342,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Any \u4efb\u610f",permalink:"/OrigamiStudio/docs/documentation/Loops/Any"},next:{title:"Loop Builder \u5faa\u73af\u751f\u6210\u5668",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Builder"}},d={},u=[{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Columns \u5217\u6570",id:"columns-\u5217\u6570",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Width \u5bbd\u5ea6",id:"width-\u5bbd\u5ea6",level:3},{value:"Item Height \u9009\u9879\u9ad8\u5ea6",id:"item-height-\u9009\u9879\u9ad8\u5ea6",level:3},{value:"Padding \u95f4\u8ddd",id:"padding-\u95f4\u8ddd",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e-1",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"grid-layout-\u7f51\u683c\u5e03\u5c40"},"Grid Layout \u7f51\u683c\u5e03\u5c40"),(0,n.kt)("p",null,"Repeat a layer or group in a list or grid. Evenly divides the total grid width by the number of columns to quickly size and position the items."),(0,n.kt)("p",null,"\u5728\u5217\u8868\u6216\u7f51\u683c\u4e2d\u91cd\u590d\u56fe\u5c42\u6216\u7ec4\u3002\u5c06\u603b\u7f51\u683c\u5bbd\u5ea6\u5e73\u5747\u9664\u4ee5\u5217\u6570\uff0c\u4ee5\u5feb\u901f\u8c03\u6574\u9879\u76ee\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(90931).Z,width:"1748",height:"426"})),(0,n.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,n.kt)("p",null,"A loop of indices that represent the number of items in the grid. Use a ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop")," patch."),(0,n.kt)("p",null,"\u8868\u793a\u7f51\u683c\u4e2d\u9879\u76ee\u6570\u7684\u7d22\u5f15\u5faa\u73af\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 Loop\u5faa\u73af \u6a21\u5757\u3002"),(0,n.kt)("h3",{id:"columns-\u5217\u6570"},"Columns \u5217\u6570"),(0,n.kt)("p",null,"The number of the columns in the grid."),(0,n.kt)("p",null,"\u7f51\u683c\u4e2d\u7684\u5217\u6570\u3002"),(0,n.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,n.kt)("p",null,"The starting position of the first item in the top-left of the grid."),(0,n.kt)("p",null,"\u7f51\u683c\u5de6\u4e0a\u89d2\u7b2c\u4e00\u9879\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"),(0,n.kt)("h3",{id:"width-\u5bbd\u5ea6"},"Width \u5bbd\u5ea6"),(0,n.kt)("p",null,"The total width of the grid."),(0,n.kt)("p",null,"\u7f51\u683c\u7684\u603b\u5bbd\u5ea6\u3002"),(0,n.kt)("h3",{id:"item-height-\u9009\u9879\u9ad8\u5ea6"},"Item Height \u9009\u9879\u9ad8\u5ea6"),(0,n.kt)("p",null,"The height of each item."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u7684\u9ad8\u5ea6\u3002"),(0,n.kt)("h3",{id:"padding-\u95f4\u8ddd"},"Padding \u95f4\u8ddd"),(0,n.kt)("p",null,"The horizontal and vertical padding between each item."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u4e4b\u95f4\u7684\u6c34\u5e73\u548c\u5782\u76f4\u95f4\u8ddd\u3002"),(0,n.kt)("h3",{id:"position-\u4f4d\u7f6e-1"},"Position \u4f4d\u7f6e"),(0,n.kt)("p",null,"A loop of positions for each item. Connect to a layer or group."),(0,n.kt)("h3",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,n.kt)("p",null,"A loop of sizes for each item. Connect to a layer or group."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u5927\u5c0f\u7684\u5faa\u73af\u3002\u8fde\u63a5\u5230\u56fe\u5c42\u6216\u7ec4\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")))}s.isMDXComponent=!0},90931:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/grid-layout-57db7aafc75a5b2e40c78d0d392e8f06.png"}}]);