"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2558],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={sidebar_position:2},l="Location \u4f4d\u7f6e",u={unversionedId:"Device/Location",id:"Device/Location",title:"Location \u4f4d\u7f6e",description:"Gets the current location of the device (using its GPS) and returns coordinates in the form of latitude and longitude. Connect to a Map Layer to visualize the location.",source:"@site/docs/Device/Location.md",sourceDirName:"Device",slug:"/Device/Location",permalink:"/OrigamiStudio/docs/Device/Location",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Device/Location.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interface Orientation \u754c\u9762\u65b9\u5411",permalink:"/OrigamiStudio/docs/Device/Interface Orientation"},next:{title:"Microphone \u8bdd\u7b52",permalink:"/OrigamiStudio/docs/Device/Microphone"}},d={},p=[{value:"Override \u8986\u76d6",id:"override-\u8986\u76d6",level:3},{value:"Latitude \u7eac\u5ea6",id:"latitude-\u7eac\u5ea6",level:3},{value:"Longitude \u7ecf\u5ea6",id:"longitude-\u7ecf\u5ea6",level:3},{value:"Name \u540d\u79f0",id:"name-\u540d\u79f0",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:p};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"location-\u4f4d\u7f6e"},"Location \u4f4d\u7f6e"),(0,o.kt)("p",null,"Gets the current location of the device (using its GPS) and returns coordinates in the form of latitude and longitude. Connect to a ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Layer/Map"},"Map Layer")," to visualize the location."),(0,o.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907\u7684\u5f53\u524d\u4f4d\u7f6e\uff08\u4f7f\u7528\u5176 GPS\uff09\u5e76\u4ee5\u7eac\u5ea6\u548c\u7ecf\u5ea6\u7684\u5f62\u5f0f\u8fd4\u56de\u5750\u6807\u3002\u8fde\u63a5\u5230 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Layer/Map"},"Map Layer")," \u4ee5\u53ef\u89c6\u5316\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(13144).Z,width:"1562",height:"362"})),(0,o.kt)("h3",{id:"override-\u8986\u76d6"},"Override \u8986\u76d6"),(0,o.kt)("p",null,"Override the current location with one from a list of places from around the world."),(0,o.kt)("p",null,"\u4f7f\u7528\u6765\u81ea\u4e16\u754c\u5404\u5730\u7684\u5730\u70b9\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u8986\u76d6\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(83925).Z,width:"380",height:"402"})),(0,o.kt)("h3",{id:"latitude-\u7eac\u5ea6"},"Latitude \u7eac\u5ea6"),(0,o.kt)("p",null,"The latitude of the current location."),(0,o.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u7eac\u5ea6\u3002"),(0,o.kt)("h3",{id:"longitude-\u7ecf\u5ea6"},"Longitude \u7ecf\u5ea6"),(0,o.kt)("p",null,"The longitude of the current location."),(0,o.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u7ecf\u5ea6\u3002"),(0,o.kt)("h3",{id:"name-\u540d\u79f0"},"Name \u540d\u79f0"),(0,o.kt)("p",null,"The name of the current location."),(0,o.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u540d\u79f0"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Layer/Map"},"Map \u5730\u56fe")))}f.isMDXComponent=!0},83925:function(e,t,n){t.Z=n.p+"assets/images/location-item-9f27726ec52fe7f163375226a863c351.png"},13144:function(e,t,n){t.Z=n.p+"assets/images/location-812be7993f33e51661ab0e9174bf34e6.png"}}]);