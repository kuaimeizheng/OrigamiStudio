"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,y=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:5},o="Layer Info \u56fe\u5c42\u4fe1\u606f",l={unversionedId:"documentation/Utility/Layer Info",id:"documentation/Utility/Layer Info",title:"Layer Info \u56fe\u5c42\u4fe1\u606f",description:"Access information about a layer.",source:"@site/docs/documentation/Utility/Layer Info.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Layer Info",permalink:"/OrigamiStudio/docs/documentation/Utility/Layer Info",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Layer Info.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667316201,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"JSON to Shape JSON \u8f6c\u6362\u56fe\u5f62",permalink:"/OrigamiStudio/docs/documentation/Utility/JSON to Shape"},next:{title:"Object Detection \u76ee\u6807\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/documentation/Utility/Object Detection"}},c={},u=[{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Enabled \u542f\u7528",id:"enabled-\u542f\u7528",level:3},{value:"Size \u5c3a\u5bf8",id:"size-\u5c3a\u5bf8",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Parent \u7236\u7ea7",id:"parent-\u7236\u7ea7",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"layer-info-\u56fe\u5c42\u4fe1\u606f"},"Layer Info \u56fe\u5c42\u4fe1\u606f"),(0,a.kt)("p",null,"Access information about a layer."),(0,a.kt)("p",null,"\u8bbf\u95ee\u56fe\u5c42\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(33517).Z,width:"1584",height:"376"})),(0,a.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,a.kt)("p",null,"The layer to display information for."),(0,a.kt)("p",null,"\u8981\u663e\u793a\u4fe1\u606f\u7684\u56fe\u5c42\u3002"),(0,a.kt)("h3",{id:"enabled-\u542f\u7528"},"Enabled \u542f\u7528"),(0,a.kt)("p",null,"A boolean that is true when the layer is enabled."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u56fe\u5c42\u542f\u7528\u65f6\u4e3a\u771f\u3002"),(0,a.kt)("h3",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,a.kt)("p",null,"The size of the layer. Use ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Size Unpack")," to get the individual width and height."),(0,a.kt)("p",null,"\u56fe\u5c42\u7684\u5927\u5c0f\u3002\u4f7f\u7528 Size Unpack \u6a21\u5757\u83b7\u53d6\u5355\u72ec\u7684\u5bbd\u548c\u9ad8\u3002"),(0,a.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,a.kt)("p",null,"The scale of the layer."),(0,a.kt)("p",null,"\u56fe\u5c42\u7684\u6bd4\u4f8b\u3002"),(0,a.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,a.kt)("p",null,"The anchor point of the layer. The value of each coordinate is a number between 0 and 1, where .5 is the center. Use ",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%20Unpack"},"Point Unpack")," to get the individual coordinates."),(0,a.kt)("p",null,"\u56fe\u5c42\u7684\u951a\u70b9\u3002\u6bcf\u4e2a\u5750\u6807\u7684\u503c\u662f 0~1 \u4e4b\u95f4\u7684\u6570\u5b57\uff0c\u5176\u4e2d 0.5 \u662f\u4e2d\u5fc3\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 Point Unpack \u83b7\u5f97\u5404\u4e2a\u5750\u6807\u3002"),(0,a.kt)("h3",{id:"parent-\u7236\u7ea7"},"Parent \u7236\u7ea7"),(0,a.kt)("p",null,"The group the layer is in, or \u2018none\u2019 if the layer is not in a group. Connect this to another Layer Info to get information about the parent."),(0,a.kt)("p",null,"\u56fe\u5c42\u6240\u5728\u7684\u7ec4\uff0c\u5982\u679c\u56fe\u5c42\u4e0d\u5728\u7ec4\u4e2d\uff0c\u5219\u4e3a \u201cnone\u201d\u3002"),(0,a.kt)("p",null,"\u5c06\u6b64\u63a5\u53e3\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a Layer Info \u6a21\u5757\u4ee5\u83b7\u53d6\u4fe1\u606f\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Group"},"Group \u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Rectangle"},"Rectangle \u77e9\u5f62")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Image%20File"},"Image File \u56fe\u50cf\u6587\u4ef6")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Video%20File"},"Video File \u89c6\u9891\u6587\u4ef6")))}p.isMDXComponent=!0},33517:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/layer-info-1990f600d5de22064c9e8c45202bf37c.png"}}]);