"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1186],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},l="Device Motion \u8bbe\u5907\u8fd0\u52a8",s={unversionedId:"Device/Device Motion",id:"Device/Device Motion",title:"Device Motion \u8bbe\u5907\u8fd0\u52a8",description:"Access accelerometer and gyroscope information from the phone, tablet, or computer.",source:"@site/docs/Device/Device Motion.md",sourceDirName:"Device",slug:"/Device/Device Motion",permalink:"/OrigamiStudio/docs/Device/Device Motion",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Device/Device Motion.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654509971,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Device Info \u8bbe\u5907\u4fe1\u606f",permalink:"/OrigamiStudio/docs/Device/Device Info"},next:{title:"Device Time \u8bbe\u5907\u65f6\u95f4",permalink:"/OrigamiStudio/docs/Device/Device Time"}},p={},u=[{value:"Has Acceleration \u6709\u52a0\u901f",id:"has-acceleration-\u6709\u52a0\u901f",level:3},{value:"Acceleration \u52a0\u901f",id:"acceleration-\u52a0\u901f",level:3},{value:"Has Rotation Rate  \u6709\u65cb\u8f6c\u901f\u5ea6",id:"has-rotation-rate--\u6709\u65cb\u8f6c\u901f\u5ea6",level:3},{value:"Rotation Rate \u65cb\u8f6c\u901f\u7387",id:"rotation-rate-\u65cb\u8f6c\u901f\u7387",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"device-motion-\u8bbe\u5907\u8fd0\u52a8"},"Device Motion \u8bbe\u5907\u8fd0\u52a8"),(0,o.kt)("p",null,"Access accelerometer and gyroscope information from the phone, tablet, or computer."),(0,o.kt)("p",null,"\u4ece\u624b\u673a\uff0c\u5e73\u677f\u7535\u8111\u6216\u8ba1\u7b97\u673a\u8bbf\u95ee\u52a0\u901f\u5ea6\u548c\u9640\u87ba\u4fe1\u606f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/613637c1-fb71-4ab3-9ee4-1f9939ddc9fb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165555Z&X-Amz-Expires=86400&X-Amz-Signature=4a39d62b41ec64c4205f78048ddb05c1f69edf4881f64fbe77770e078e4bec36&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,o.kt)("h3",{id:"has-acceleration-\u6709\u52a0\u901f"},"Has Acceleration \u6709\u52a0\u901f"),(0,o.kt)("p",null,"A boolean that is true when the phone, tablet, or computer has acceleration information."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u6709\u52a0\u901f\u4fe1\u606f\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"acceleration-\u52a0\u901f"},"Acceleration \u52a0\u901f"),(0,o.kt)("p",null,"A point 3d that represents the acceleration in X, Y and Z directions. Use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point%203D%20Unpack"},"Point 3D Unpack")," to get the individual acceleration values."),(0,o.kt)("p",null,"\u4e00\u4e2a3D\u70b9\uff0c\u8868\u793ax\u3001y\u548cz\u65b9\u5411\u7684\u52a0\u901f\u5ea6\u3002\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point%203D%20Unpack"},"Point 3D Unpack"),"\u6a21\u5757\u83b7\u53d6\u52a0\u901f\u5ea6\u503c\u3002"),(0,o.kt)("h3",{id:"has-rotation-rate--\u6709\u65cb\u8f6c\u901f\u5ea6"},"Has Rotation Rate  \u6709\u65cb\u8f6c\u901f\u5ea6"),(0,o.kt)("p",null,"A boolean that is true when the phone, tablet, or computer has rotation information."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u6709\u65cb\u8f6c\u4fe1\u606f\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"rotation-rate-\u65cb\u8f6c\u901f\u7387"},"Rotation Rate \u65cb\u8f6c\u901f\u7387"),(0,o.kt)("p",null,"A point 3d that represents the rotation rate around the X, Y and Z axes. Use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Velocity"},"Velocity")," to calculate total rotation over time."),(0,o.kt)("p",null,"\u4e00\u4e2a3D\u70b9\uff0c\u8868\u793ax\u3001y\u548cz\u8f74\u7684\u65cb\u8f6c\u901f\u7387\u3002\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Velocity"},"Velocity")," \u6a21\u5757\u8ba1\u7b97\u603b\u65cb\u8f6c\u65f6\u95f4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Velocity"},"Velocity \u901f\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")),(0,o.kt)("p",null,"\u5386\u53f2\u7248\u672c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1b2830a-3a89-41cf-9e2b-7e62fccf2d83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165605Z&X-Amz-Expires=86400&X-Amz-Signature=736899ec7f0af04e2e70262d7b37d7d5036dbfbb89acbbc6e79b31554494f1fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);