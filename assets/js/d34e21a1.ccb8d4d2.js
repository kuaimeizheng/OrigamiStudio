"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4368],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return m}});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var u=n.createContext({}),d=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},p=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=d(o),m=i,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||r;return o?n.createElement(f,a(a({ref:e},p),{},{components:o})):n.createElement(f,a({ref:e},p))}));function m(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=o.length,a=new Array(r);a[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var d=2;d<r;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},62759:function(t,e,o){o.r(e),o.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],l={sidebar_position:2},u="Grid Layout \u7f51\u683c\u5e03\u5c40",d={unversionedId:"documentation/Loops/Grid Layout",id:"documentation/Loops/Grid Layout",title:"Grid Layout \u7f51\u683c\u5e03\u5c40",description:"Repeat a layer or group in a list or grid. Evenly divides the total grid width by the number of columns to quickly size and position the items.",source:"@site/docs/documentation/Loops/Grid Layout.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Grid Layout",permalink:"/OrigamiStudio/docs/documentation/Loops/Grid Layout",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Grid Layout.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1659583634,formattedLastUpdatedAt:"2022\u5e748\u67084\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Any \u4efb\u610f",permalink:"/OrigamiStudio/docs/documentation/Loops/Any"},next:{title:"Loop Builder \u5faa\u73af\u751f\u6210\u5668",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop Builder"}},p={},c=[{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Columns \u5217\u6570",id:"columns-\u5217\u6570",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Width \u5bbd\u5ea6",id:"width-\u5bbd\u5ea6",level:3},{value:"Item Height \u9009\u9879\u9ad8\u5ea6",id:"item-height-\u9009\u9879\u9ad8\u5ea6",level:3},{value:"Padding \u95f4\u8ddd",id:"padding-\u95f4\u8ddd",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e-1",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function m(t){var e=t.components,l=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grid-layout-\u7f51\u683c\u5e03\u5c40"},"Grid Layout \u7f51\u683c\u5e03\u5c40"),(0,r.kt)("p",null,"Repeat a layer or group in a list or grid. Evenly divides the total grid width by the number of columns to quickly size and position the items."),(0,r.kt)("p",null,"\u5728\u5217\u8868\u6216\u7f51\u683c\u4e2d\u91cd\u590d\u56fe\u5c42\u6216\u7ec4\u3002\u5c06\u603b\u7f51\u683c\u5bbd\u5ea6\u5e73\u5747\u9664\u4ee5\u5217\u6570\uff0c\u4ee5\u5feb\u901f\u8c03\u6574\u9879\u76ee\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(90931).Z,width:"1748",height:"426"})),(0,r.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,r.kt)("p",null,"A loop of indices that represent the number of items in the grid. Use a ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop")," patch."),(0,r.kt)("p",null,"\u8868\u793a\u7f51\u683c\u4e2d\u9879\u76ee\u6570\u7684\u7d22\u5f15\u5faa\u73af\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 Loop\u5faa\u73af \u6a21\u5757\u3002"),(0,r.kt)("h3",{id:"columns-\u5217\u6570"},"Columns \u5217\u6570"),(0,r.kt)("p",null,"The number of the columns in the grid."),(0,r.kt)("p",null,"\u7f51\u683c\u4e2d\u7684\u5217\u6570\u3002"),(0,r.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,r.kt)("p",null,"The starting position of the first item in the top-left of the grid."),(0,r.kt)("p",null,"\u7f51\u683c\u5de6\u4e0a\u89d2\u7b2c\u4e00\u9879\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"),(0,r.kt)("h3",{id:"width-\u5bbd\u5ea6"},"Width \u5bbd\u5ea6"),(0,r.kt)("p",null,"The total width of the grid."),(0,r.kt)("p",null,"\u7f51\u683c\u7684\u603b\u5bbd\u5ea6\u3002"),(0,r.kt)("h3",{id:"item-height-\u9009\u9879\u9ad8\u5ea6"},"Item Height \u9009\u9879\u9ad8\u5ea6"),(0,r.kt)("p",null,"The height of each item."),(0,r.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u7684\u9ad8\u5ea6\u3002"),(0,r.kt)("h3",{id:"padding-\u95f4\u8ddd"},"Padding \u95f4\u8ddd"),(0,r.kt)("p",null,"The horizontal and vertical padding between each item."),(0,r.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u4e4b\u95f4\u7684\u6c34\u5e73\u548c\u5782\u76f4\u95f4\u8ddd\u3002"),(0,r.kt)("h3",{id:"position-\u4f4d\u7f6e-1"},"Position \u4f4d\u7f6e"),(0,r.kt)("p",null,"A loop of positions for each item. Connect to a layer or group."),(0,r.kt)("h3",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,r.kt)("p",null,"A loop of sizes for each item. Connect to a layer or group."),(0,r.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u5927\u5c0f\u7684\u5faa\u73af\u3002\u8fde\u63a5\u5230\u56fe\u5c42\u6216\u7ec4\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop"},"Loop \u5faa\u73af")))}m.isMDXComponent=!0},90931:function(t,e,o){e.Z=o.p+"assets/images/grid-layout-57db7aafc75a5b2e40c78d0d392e8f06.png"}}]);