"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[82656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},21989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"Location \u4f4d\u7f6e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Location \u4f4d\u7f6e",c={unversionedId:"documentation/Device/Location",id:"documentation/Device/Location",title:"Location \u4f4d\u7f6e",description:"Gets the current location of the device (using its GPS) and returns coordinates in the form of latitude and longitude. Connect to a Map Layer to visualize the location.",source:"@site/docs/documentation/Device/Location.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Location",permalink:"/OrigamiStudio/docs/documentation/Device/Location",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Location.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Location \u4f4d\u7f6e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Interface Orientation \u754c\u9762\u65b9\u5411",permalink:"/OrigamiStudio/docs/documentation/Device/Interface Orientation"},next:{title:"Microphone \u8bdd\u7b52",permalink:"/OrigamiStudio/docs/documentation/Device/Microphone"}},l={},u=[{value:"Override \u8986\u76d6",id:"override-\u8986\u76d6",level:3},{value:"Latitude \u7eac\u5ea6",id:"latitude-\u7eac\u5ea6",level:3},{value:"Longitude \u7ecf\u5ea6",id:"longitude-\u7ecf\u5ea6",level:3},{value:"Name \u540d\u79f0",id:"name-\u540d\u79f0",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"location-\u4f4d\u7f6e"},"Location \u4f4d\u7f6e"),(0,r.kt)("p",null,"Gets the current location of the device (using its GPS) and returns coordinates in the form of latitude and longitude. Connect to a ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Map"},"Map Layer")," to visualize the location."),(0,r.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907\u7684\u5f53\u524d\u4f4d\u7f6e\uff08\u4f7f\u7528\u5176 GPS\uff09\u5e76\u4ee5\u7eac\u5ea6\u548c\u7ecf\u5ea6\u7684\u5f62\u5f0f\u8fd4\u56de\u5750\u6807\u3002\u8fde\u63a5\u5230 ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Map"},"Map Layer")," \u4ee5\u53ef\u89c6\u5316\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(13144).Z,width:"1562",height:"362"})),(0,r.kt)("h3",{id:"override-\u8986\u76d6"},"Override \u8986\u76d6"),(0,r.kt)("p",null,"Override the current location with one from a list of places from around the world."),(0,r.kt)("p",null,"\u4f7f\u7528\u6765\u81ea\u4e16\u754c\u5404\u5730\u7684\u5730\u70b9\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u8986\u76d6\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(83925).Z,width:"380",height:"402"})),(0,r.kt)("h3",{id:"latitude-\u7eac\u5ea6"},"Latitude \u7eac\u5ea6"),(0,r.kt)("p",null,"The latitude of the current location."),(0,r.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u7eac\u5ea6\u3002"),(0,r.kt)("h3",{id:"longitude-\u7ecf\u5ea6"},"Longitude \u7ecf\u5ea6"),(0,r.kt)("p",null,"The longitude of the current location."),(0,r.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u7ecf\u5ea6\u3002"),(0,r.kt)("h3",{id:"name-\u540d\u79f0"},"Name \u540d\u79f0"),(0,r.kt)("p",null,"The name of the current location."),(0,r.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u540d\u79f0"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Map"},"Map \u5730\u56fe")))}p.isMDXComponent=!0},83925:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/location-item-9f27726ec52fe7f163375226a863c351.png"},13144:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/location-812be7993f33e51661ab0e9174bf34e6.png"}}]);