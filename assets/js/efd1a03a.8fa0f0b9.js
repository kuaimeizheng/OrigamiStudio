"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5126],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(o),m=i,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return o?n.createElement(f,r(r({ref:t},u),{},{components:o})):n.createElement(f,r({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},74942:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=o(87462),i=(o(67294),o(3905));const a={sidebar_position:2},r="Device Motion \u8bbe\u5907\u8fd0\u52a8",c={unversionedId:"documentation/Device/Device Motion",id:"documentation/Device/Device Motion",title:"Device Motion \u8bbe\u5907\u8fd0\u52a8",description:"Access accelerometer and gyroscope information from the phone, tablet, or computer.",source:"@site/docs/documentation/Device/Device Motion.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Device Motion",permalink:"/OrigamiStudio/docs/documentation/Device/Device Motion",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Device Motion.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660145226,formattedLastUpdatedAt:"2022\u5e748\u670810\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Device Info \u8bbe\u5907\u4fe1\u606f",permalink:"/OrigamiStudio/docs/documentation/Device/Device Info"},next:{title:"Device Time \u8bbe\u5907\u65f6\u95f4",permalink:"/OrigamiStudio/docs/documentation/Device/Device Time"}},l={},p=[{value:"Has Acceleration \u6709\u52a0\u901f",id:"has-acceleration-\u6709\u52a0\u901f",level:3},{value:"Acceleration \u52a0\u901f",id:"acceleration-\u52a0\u901f",level:3},{value:"Has Rotation Rate  \u6709\u65cb\u8f6c\u901f\u5ea6",id:"has-rotation-rate--\u6709\u65cb\u8f6c\u901f\u5ea6",level:3},{value:"Rotation Rate \u65cb\u8f6c\u901f\u7387",id:"rotation-rate-\u65cb\u8f6c\u901f\u7387",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"device-motion-\u8bbe\u5907\u8fd0\u52a8"},"Device Motion \u8bbe\u5907\u8fd0\u52a8"),(0,i.kt)("p",null,"Access accelerometer and gyroscope information from the phone, tablet, or computer."),(0,i.kt)("p",null,"\u4ece\u624b\u673a\uff0c\u5e73\u677f\u7535\u8111\u6216\u8ba1\u7b97\u673a\u8bbf\u95ee\u52a0\u901f\u5ea6\u548c\u9640\u87ba\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:o(48107).Z,width:"1634",height:"294"})),(0,i.kt)("h3",{id:"has-acceleration-\u6709\u52a0\u901f"},"Has Acceleration \u6709\u52a0\u901f"),(0,i.kt)("p",null,"A boolean that is true when the phone, tablet, or computer has acceleration information."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u6709\u52a0\u901f\u4fe1\u606f\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"acceleration-\u52a0\u901f"},"Acceleration \u52a0\u901f"),(0,i.kt)("p",null,"A point 3d that represents the acceleration in X, Y and Z directions. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack")," to get the individual acceleration values."),(0,i.kt)("p",null,"\u4e00\u4e2a3D\u70b9\uff0c\u8868\u793ax\u3001y\u548cz\u65b9\u5411\u7684\u52a0\u901f\u5ea6\u3002\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack"),"\u6a21\u5757\u83b7\u53d6\u52a0\u901f\u5ea6\u503c\u3002"),(0,i.kt)("h3",{id:"has-rotation-rate--\u6709\u65cb\u8f6c\u901f\u5ea6"},"Has Rotation Rate  \u6709\u65cb\u8f6c\u901f\u5ea6"),(0,i.kt)("p",null,"A boolean that is true when the phone, tablet, or computer has rotation information."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u624b\u673a\u3001\u5e73\u677f\u3001\u7535\u8111\u6709\u65cb\u8f6c\u4fe1\u606f\u65f6\u4e3a\u771f\u3002"),(0,i.kt)("h3",{id:"rotation-rate-\u65cb\u8f6c\u901f\u7387"},"Rotation Rate \u65cb\u8f6c\u901f\u7387"),(0,i.kt)("p",null,"A point 3d that represents the rotation rate around the X, Y and Z axes. Use ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Velocity"},"Velocity")," to calculate total rotation over time."),(0,i.kt)("p",null,"\u4e00\u4e2a3D\u70b9\uff0c\u8868\u793ax\u3001y\u548cz\u8f74\u7684\u65cb\u8f6c\u901f\u7387\u3002\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Velocity"},"Velocity")," \u6a21\u5757\u8ba1\u7b97\u603b\u65cb\u8f6c\u65f6\u95f4\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Velocity"},"Velocity \u901f\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")))}d.isMDXComponent=!0},48107:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/device-motion-cb81a5bb2e4dddaf9f3fe3334f7ca5f3.png"}}]);