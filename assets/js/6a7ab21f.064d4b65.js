"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[63395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_position:5},a="Object Detection \u76ee\u6807\u68c0\u6d4b",l={unversionedId:"documentation/Utility/Object Detection",id:"documentation/Utility/Object Detection",title:"Object Detection \u76ee\u6807\u68c0\u6d4b",description:"Detect regions in a still image, video, or from a camera stream.",source:"@site/docs/documentation/Utility/Object Detection.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Object Detection",permalink:"/OrigamiStudio/docs/documentation/Utility/Object Detection",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Object Detection.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666622342,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Layer Info \u56fe\u5c42\u4fe1\u606f",permalink:"/OrigamiStudio/docs/documentation/Utility/Layer Info"},next:{title:"Option Equals",permalink:"/OrigamiStudio/docs/documentation/Utility/Option Equals"}},c={},d=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Type \u7c7b\u578b",id:"type-\u7c7b\u578b",level:3},{value:"Region Detected \u68c0\u6d4b\u5230\u7684\u533a\u57df",id:"region-detected-\u68c0\u6d4b\u5230\u7684\u533a\u57df",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:3},{value:"Error \u9519\u8bef",id:"error-\u9519\u8bef",level:3},{value:"Error Description \u9519\u8bef\u63cf\u8ff0",id:"error-description-\u9519\u8bef\u63cf\u8ff0",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"object-detection-\u76ee\u6807\u68c0\u6d4b"},"Object Detection \u76ee\u6807\u68c0\u6d4b"),(0,o.kt)("p",null,"Detect regions in a still image, video, or from a camera stream."),(0,o.kt)("p",null,"\u68c0\u6d4b\u9759\u6b62\u56fe\u50cf\u3001\u89c6\u9891\u6216\u6444\u50cf\u673a\u6d41\u4e2d\u7684\u533a\u57df\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(34705).Z,width:"1468",height:"310"})),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A Boolean value that is true when detection is enabled."),(0,o.kt)("p",null,"\u5e03\u5c14\u503c\uff0c\u542f\u7528\u68c0\u6d4b\u65f6\u4e3atrue\u3002"),(0,o.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,o.kt)("p",null,"An Image or Video layer to search for objects."),(0,o.kt)("p",null,"\u7528\u4e8e\u641c\u7d22\u5bf9\u8c61\u7684\u56fe\u50cf\u6216\u89c6\u9891\u5c42\u3002"),(0,o.kt)("h3",{id:"type-\u7c7b\u578b"},"Type \u7c7b\u578b"),(0,o.kt)("p",null,"Specify the type of detection needed. There are two possible types and both have different use cases:"),(0,o.kt)("p",null,"\u6307\u5b9a\u9700\u8981\u7684\u68c0\u6d4b\u7c7b\u578b\u3002\u6709\u4e24\u79cd\u53ef\u80fd\u7684\u7c7b\u578b\uff0c\u5b83\u4eec\u90fd\u6709\u4e0d\u540c\u7684\u7528\u4f8b:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Object Based. Highlights foreground objects and provides a coarse segmentation of the main subjects in an image. This type can return up to three sets of position and size for the corresponding regions."),(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u5bf9\u8c61\u7684\u3002\u7a81\u51fa\u663e\u793a\u524d\u666f\u5bf9\u8c61\uff0c\u5e76\u63d0\u4f9b\u56fe\u50cf\u4e2d\u4e3b\u8981\u4e3b\u9898\u7684\u7c97\u5206\u5272\u3002\u8be5\u7c7b\u578b\u6700\u591a\u53ef\u4ee5\u8fd4\u56de\u4e09\u7ec4\u5bf9\u5e94\u533a\u57df\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u3002"),(0,o.kt)("li",{parentName:"ol"},"Attention Based. If you\u2019re deciding what to keep in an image based on what\u2019s most interesting, use Attention Based type. This type always return only one set of position and size for the region."),(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6ce8\u610f\u529b\u7684\u3002\u5982\u679c\u4f60\u6839\u636e\u6700\u6709\u8da3\u7684\u5185\u5bb9\u6765\u51b3\u5b9a\u5728\u56fe\u50cf\u4e2d\u4fdd\u7559\u4ec0\u4e48\uff0c\u90a3\u4e48\u4f7f\u7528\u57fa\u4e8e\u6ce8\u610f\u529b\u7684\u7c7b\u578b\u3002\u8be5\u7c7b\u578b\u603b\u662f\u53ea\u8fd4\u56de\u533a\u57df\u7684\u4e00\u7ec4\u4f4d\u7f6e\u548c\u5927\u5c0f\u3002")),(0,o.kt)("h3",{id:"region-detected-\u68c0\u6d4b\u5230\u7684\u533a\u57df"},"Region Detected \u68c0\u6d4b\u5230\u7684\u533a\u57df"),(0,o.kt)("p",null,"A Boolean value that is true when at least one region has been detected."),(0,o.kt)("p",null,"\u5e03\u5c14\u503c\uff0c\u5f53\u81f3\u5c11\u68c0\u6d4b\u5230\u4e00\u4e2a\u533a\u57df\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,o.kt)("p",null,"A Loop of origin positions for each of the detected regions."),(0,o.kt)("p",null,"\u6bcf\u4e2a\u88ab\u68c0\u6d4b\u533a\u57df\u7684\u539f\u70b9\u4f4d\u7f6e\u7684\u5faa\u73af\u3002"),(0,o.kt)("h3",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,o.kt)("p",null,"A Loop of sizes for each detected regions."),(0,o.kt)("p",null,"\u6bcf\u4e2a\u68c0\u6d4b\u533a\u57df\u7684\u5927\u5c0f\u5faa\u73af\u3002"),(0,o.kt)("h3",{id:"error-\u9519\u8bef"},"Error \u9519\u8bef"),(0,o.kt)("p",null,"A Boolean value that is true when the detection cannot be performed, one cause could be the OS, as this is only available on macOS 15+ and iOS 13+."),(0,o.kt)("p",null,"\u5f53\u68c0\u6d4b\u4e0d\u80fd\u6267\u884c\u65f6\uff0c\u5e03\u5c14\u503c\u4e3atrue\uff0c\u4e00\u4e2a\u539f\u56e0\u53ef\u80fd\u662f\u64cd\u4f5c\u7cfb\u7edf\uff0c\u56e0\u4e3a\u8fd9\u53ea\u5728macOS 15+\u548ciOS 13+\u4e0a\u53ef\u7528\u3002"),(0,o.kt)("h3",{id:"error-description-\u9519\u8bef\u63cf\u8ff0"},"Error Description \u9519\u8bef\u63cf\u8ff0"),(0,o.kt)("p",null,"Text providing a more detailed explanation for why the detection cannot be performed."),(0,o.kt)("p",null,"\u4e3a\u65e0\u6cd5\u6267\u884c\u68c0\u6d4b\u63d0\u4f9b\u66f4\u8be6\u7ec6\u89e3\u91ca\u7684\u6587\u672c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/QR%20Code%20Detection"},"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Face%20Detection"},"Face Detection \u4eba\u8138\u68c0\u6d4b")))}p.isMDXComponent=!0},34705:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/object-detection-ece7535274911739b2dbde644559d3ad.png"}}]);