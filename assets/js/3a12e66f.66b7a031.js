"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2558],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:2},l="Location \u4f4d\u7f6e",u={unversionedId:"Device/Location",id:"Device/Location",title:"Location \u4f4d\u7f6e",description:"Gets the current location of the device (using its GPS) and returns coordinates in the form of latitude and longitude. Connect to a Map Layer to visualize the location.",source:"@site/docs/Device/Location.md",sourceDirName:"Device",slug:"/Device/Location",permalink:"/OrigamiStudio/docs/Device/Location",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Device/Location.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interface Orientation \u754c\u9762\u65b9\u5411",permalink:"/OrigamiStudio/docs/Device/Interface Orientation"},next:{title:"Microphone \u8bdd\u7b52",permalink:"/OrigamiStudio/docs/Device/Microphone"}},s={},d=[{value:"Override \u8986\u76d6",id:"override-\u8986\u76d6",level:3},{value:"Latitude \u7eac\u5ea6",id:"latitude-\u7eac\u5ea6",level:3},{value:"Longitude \u7ecf\u5ea6",id:"longitude-\u7ecf\u5ea6",level:3},{value:"Name \u540d\u79f0",id:"name-\u540d\u79f0",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"location-\u4f4d\u7f6e"},"Location \u4f4d\u7f6e"),(0,a.kt)("p",null,"Gets the current location of the device (using its GPS) and returns coordinates in the form of latitude and longitude. Connect to a ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Layer/Map"},"Map Layer")," to visualize the location."),(0,a.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907\u7684\u5f53\u524d\u4f4d\u7f6e\uff08\u4f7f\u7528\u5176 GPS\uff09\u5e76\u4ee5\u7eac\u5ea6\u548c\u7ecf\u5ea6\u7684\u5f62\u5f0f\u8fd4\u56de\u5750\u6807\u3002\u8fde\u63a5\u5230 ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Layer/Map"},"Map Layer")," \u4ee5\u53ef\u89c6\u5316\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/98d7b356-079c-4d2a-8435-ec2e95238029/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165909Z&X-Amz-Expires=86400&X-Amz-Signature=249fecb845337d04fd3294c9712015eab5cb8a52200abb7a8390c1a7e8b6544a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,a.kt)("h3",{id:"override-\u8986\u76d6"},"Override \u8986\u76d6"),(0,a.kt)("p",null,"Override the current location with one from a list of places from around the world."),(0,a.kt)("p",null,"\u4f7f\u7528\u6765\u81ea\u4e16\u754c\u5404\u5730\u7684\u5730\u70b9\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u8986\u76d6\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b15cf069-02ea-42e3-8c6c-e833d88a2337/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165918Z&X-Amz-Expires=86400&X-Amz-Signature=78d636b302e072c8ee3aee605887e2de5b7e3fa7e35d07e1fd08baa9de243211&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,a.kt)("h3",{id:"latitude-\u7eac\u5ea6"},"Latitude \u7eac\u5ea6"),(0,a.kt)("p",null,"The latitude of the current location."),(0,a.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u7eac\u5ea6\u3002"),(0,a.kt)("h3",{id:"longitude-\u7ecf\u5ea6"},"Longitude \u7ecf\u5ea6"),(0,a.kt)("p",null,"The longitude of the current location."),(0,a.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u7ecf\u5ea6\u3002"),(0,a.kt)("h3",{id:"name-\u540d\u79f0"},"Name \u540d\u79f0"),(0,a.kt)("p",null,"The name of the current location."),(0,a.kt)("p",null,"\u5f53\u524d\u4f4d\u7f6e\u7684\u540d\u79f0"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Layer/Map"},"Map \u5730\u56fe")),(0,a.kt)("p",null,"\u5386\u53f2\u7248\u672c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c5a9e9dd-17a0-4eab-a3f0-24511f69f21c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165929Z&X-Amz-Expires=86400&X-Amz-Signature=ba81c6104762c223327a3936e8065b979ad9c19b2bb990dcfba604c733910cb7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);