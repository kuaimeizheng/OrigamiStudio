"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[99762],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(i),f=n,h=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return i?o.createElement(h,l(l({ref:t},d),{},{components:i})):o.createElement(h,l({ref:t},d))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var u=2;u<a;u++)l[u]=i[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},43116:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=i(87462),n=(i(67294),i(3905));const a={sidebar_position:5},l="Face Detection \u4eba\u8138\u68c0\u6d4b",r={unversionedId:"documentation/Utility/Face Detection",id:"documentation/Utility/Face Detection",title:"Face Detection \u4eba\u8138\u68c0\u6d4b",description:"Detect faces in a still image, video, or from a camera stream.",source:"@site/docs/documentation/Utility/Face Detection.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Face Detection",permalink:"/OrigamiStudio/docs/documentation/Utility/Face Detection",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Face Detection.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666672704,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Delay \u5ef6\u8fdf",permalink:"/OrigamiStudio/docs/documentation/Utility/Delay"},next:{title:"Image Info \u56fe\u7247\u4fe1\u606f",permalink:"/OrigamiStudio/docs/documentation/Utility/Image Info"}},c={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Max Faces \u6700\u5927\u4eba\u8138\u6570",id:"max-faces-\u6700\u5927\u4eba\u8138\u6570",level:3},{value:"Quality \u8d28\u91cf",id:"quality-\u8d28\u91cf",level:3},{value:"Positioning \u5b9a\u4f4d",id:"positioning-\u5b9a\u4f4d",level:3},{value:"Face Detected \u68c0\u6d4b\u5230\u4eba\u8138",id:"face-detected-\u68c0\u6d4b\u5230\u4eba\u8138",level:3},{value:"Face Position \u4eba\u8138\u4f4d\u7f6e",id:"face-position-\u4eba\u8138\u4f4d\u7f6e",level:3},{value:"Face Size \u4eba\u8138\u5927\u5c0f",id:"face-size-\u4eba\u8138\u5927\u5c0f",level:3},{value:"Face Angle \u4eba\u8138\u89d2\u5ea6",id:"face-angle-\u4eba\u8138\u89d2\u5ea6",level:3},{value:"Left Eye Detected \u68c0\u6d4b\u5230\u5de6\u773c",id:"left-eye-detected-\u68c0\u6d4b\u5230\u5de6\u773c",level:3},{value:"Left Eye Position \u5de6\u773c\u4f4d\u7f6e",id:"left-eye-position-\u5de6\u773c\u4f4d\u7f6e",level:3},{value:"Right Eye Detected \u68c0\u6d4b\u5230\u53f3\u773c",id:"right-eye-detected-\u68c0\u6d4b\u5230\u53f3\u773c",level:3},{value:"Right Eye Position \u53f3\u773c\u4f4d\u7f6e",id:"right-eye-position-\u53f3\u773c\u4f4d\u7f6e",level:3},{value:"Mouth Detected \u68c0\u6d4b\u5230\u5634\u5df4",id:"mouth-detected-\u68c0\u6d4b\u5230\u5634\u5df4",level:3},{value:"Mouth Position \u5634\u5df4\u4f4d\u7f6e",id:"mouth-position-\u5634\u5df4\u4f4d\u7f6e",level:3},{value:"Tracking ID \u8ddf\u8e2a ID",id:"tracking-id-\u8ddf\u8e2a-id",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"face-detection-\u4eba\u8138\u68c0\u6d4b"},"Face Detection \u4eba\u8138\u68c0\u6d4b"),(0,n.kt)("p",null,"Detect faces in a still image, video, or from a camera stream."),(0,n.kt)("p",null,"\u68c0\u6d4b\u9759\u6b62\u56fe\u50cf\u3001\u89c6\u9891\u6216\u6444\u50cf\u673a\u6d41\u4e2d\u7684\u4eba\u8138\u3002"),(0,n.kt)("p",null,"All the outputs are loops of the same size; and the indices of each loop matches with every other output. For example, Left Eye Position ","[3]"," and Face Size ","[3]"," both correspond to the same Face at index 4."),(0,n.kt)("p",null,"\u6240\u6709\u8f93\u51fa\u90fd\u662f\u76f8\u540c\u5927\u5c0f\u7684\u5faa\u73af\uff1b\u6bcf\u4e2a\u5faa\u73af\u7684\u7d22\u5f15\u90fd\u4e0e\u5176\u4ed6\u8f93\u51fa\u76f8\u5339\u914d\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u5de6\u773c\u4f4d\u7f6e","[3]","\u548c\u8138\u5927\u5c0f","[3]","\u90fd\u5bf9\u5e94\u4e8e\u7d22\u5f154\u5904\u7684\u540c\u4e00\u4e2a\u8138\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:i(12283).Z,width:"1978",height:"522"})),(0,n.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,n.kt)("p",null,"A Boolean value that is true when detection is enabled."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u542f\u7528\u68c0\u6d4b\u65f6\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,n.kt)("p",null,"An Image or Video layer to search for faces."),(0,n.kt)("p",null,"\u7528\u4e8e\u641c\u7d22\u4eba\u8138\u7684\u56fe\u50cf\u6216\u89c6\u9891\u56fe\u5c42\u3002"),(0,n.kt)("h3",{id:"max-faces-\u6700\u5927\u4eba\u8138\u6570"},"Max Faces \u6700\u5927\u4eba\u8138\u6570"),(0,n.kt)("p",null,"Limit the number of faces."),(0,n.kt)("p",null,"\u9650\u5236\u6700\u5927\u4eba\u8138\u6570\u91cf\u3002"),(0,n.kt)("h3",{id:"quality-\u8d28\u91cf"},"Quality \u8d28\u91cf"),(0,n.kt)("p",null,"Specify the accuracy of the detection. Higher quality detection requires more processing time."),(0,n.kt)("p",null,"\u8bbe\u7f6e\u68c0\u6d4b\u7684\u51c6\u786e\u6027\u3002\u66f4\u9ad8\u8d28\u91cf\u7684\u68c0\u6d4b\u9700\u8981\u66f4\u591a\u7684\u5904\u7406\u65f6\u95f4\u3002"),(0,n.kt)("h3",{id:"positioning-\u5b9a\u4f4d"},"Positioning \u5b9a\u4f4d"),(0,n.kt)("p",null,"Determine if the output values are converted to the relative position on the layer or it\u2019s using the absolute values of the content of the layer. ex. A video layer can be 300x300 but its content 1920x1080."),(0,n.kt)("p",null,"\u786e\u5b9a\u8f93\u51fa\u503c\u662f\u8f6c\u6362\u4e3a\u56fe\u5c42\u4e0a\u7684\u76f8\u5bf9\u4f4d\u7f6e\uff0c\u8fd8\u662f\u4f7f\u7528\u56fe\u5c42\u5185\u5185\u5bb9\u7684\u7edd\u5bf9\u503c\u3002\u4f8b\u5982\uff0c\u89c6\u9891\u56fe\u5c42\u53ef\u4ee5\u662f 300x300\uff0c\u4f46\u5176\u5185\u5bb9\u662f 1920x1080\u3002"),(0,n.kt)("h3",{id:"face-detected-\u68c0\u6d4b\u5230\u4eba\u8138"},"Face Detected \u68c0\u6d4b\u5230\u4eba\u8138"),(0,n.kt)("p",null,"A Boolean value that is true when at least one face has been detected."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u81f3\u5c11\u68c0\u6d4b\u5230\u4e00\u5f20\u4eba\u8138\u65f6\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"face-position-\u4eba\u8138\u4f4d\u7f6e"},"Face Position \u4eba\u8138\u4f4d\u7f6e"),(0,n.kt)("p",null,"A Loop of origin positions for each detected face."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u68c0\u6d4b\u5230\u7684\u4eba\u8138\u7684\u539f\u70b9\u4f4d\u7f6e\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"face-size-\u4eba\u8138\u5927\u5c0f"},"Face Size \u4eba\u8138\u5927\u5c0f"),(0,n.kt)("p",null,"A Loop of sizes for the region for each detected face."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u68c0\u6d4b\u5230\u7684\u4eba\u8138\u7684\u533a\u57df\u5927\u5c0f\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"face-angle-\u4eba\u8138\u89d2\u5ea6"},"Face Angle \u4eba\u8138\u89d2\u5ea6"),(0,n.kt)("p",null,"A Loop with the rotation of each detected face."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u68c0\u6d4b\u5230\u7684\u4eba\u8138\u7684\u533a\u57df\u5927\u5c0f\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"left-eye-detected-\u68c0\u6d4b\u5230\u5de6\u773c"},"Left Eye Detected \u68c0\u6d4b\u5230\u5de6\u773c"),(0,n.kt)("p",null,"A Loop of Boolean values that is true for each face where the detector found the left eye."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\u5faa\u73af\uff0c\u8868\u793a\u68c0\u6d4b\u5668\u53d1\u73b0\u4e86\u6bcf\u5f20\u4eba\u8138\u7684\u5de6\u773c\u3002"),(0,n.kt)("h3",{id:"left-eye-position-\u5de6\u773c\u4f4d\u7f6e"},"Left Eye Position \u5de6\u773c\u4f4d\u7f6e"),(0,n.kt)("p",null,"A Loop of positions for the left eye of each face if available, otherwise the position is 0,0 so you might need to check if Left Eye Detected is true."),(0,n.kt)("p",null,"\u6bcf\u5f20\u8138\u7684\u5de6\u773c\u4f4d\u7f6e\u5faa\u73af\uff08\u5982\u679c\u53ef\u7528\uff09\uff0c\u5426\u5219\u4f4d\u7f6e\u4e3a 0,0\uff0c\u56e0\u6b64\u60a8\u53ef\u80fd\u9700\u8981\u68c0\u67e5\u68c0\u6d4b\u5230\u7684\u5de6\u773c\u662f\u5426\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"right-eye-detected-\u68c0\u6d4b\u5230\u53f3\u773c"},"Right Eye Detected \u68c0\u6d4b\u5230\u53f3\u773c"),(0,n.kt)("p",null,"A Loop of Boolean values that is true for each face where the detector found the right eye."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\u5faa\u73af\uff0c\u8868\u793a\u68c0\u6d4b\u5668\u53d1\u73b0\u4e86\u6bcf\u5f20\u4eba\u8138\u7684\u53f3\u773c\u3002"),(0,n.kt)("h3",{id:"right-eye-position-\u53f3\u773c\u4f4d\u7f6e"},"Right Eye Position \u53f3\u773c\u4f4d\u7f6e"),(0,n.kt)("p",null,"A Loop of positions for the right eye of each face if available, otherwise the position is 0,0 so you might need to check if Right Eye Detected is true."),(0,n.kt)("p",null,"\u6bcf\u5f20\u8138\u7684\u53f3\u773c\u4f4d\u7f6e\u5faa\u73af\uff08\u5982\u679c\u53ef\u7528\uff09\uff0c\u5426\u5219\u4f4d\u7f6e\u4e3a 0,0\uff0c\u56e0\u6b64\u60a8\u53ef\u80fd\u9700\u8981\u68c0\u67e5\u68c0\u6d4b\u5230\u7684\u53f3\u773c\u662f\u5426\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"mouth-detected-\u68c0\u6d4b\u5230\u5634\u5df4"},"Mouth Detected \u68c0\u6d4b\u5230\u5634\u5df4"),(0,n.kt)("p",null,"A Loop of Boolean values that is true for each face where the detector found the mouth."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\u5faa\u73af\uff0c\u8868\u793a\u68c0\u6d4b\u5668\u627e\u5230\u4e86\u6bcf\u5f20\u4eba\u8138\u4e0a\u7684\u5634\u5df4\u3002"),(0,n.kt)("h3",{id:"mouth-position-\u5634\u5df4\u4f4d\u7f6e"},"Mouth Position \u5634\u5df4\u4f4d\u7f6e"),(0,n.kt)("p",null,"A Loop of positions for mouth of each face if available, otherwise the position is 0,0 so you might need to check if Right Eye Detected is true."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u8138\u7684\u5634\u7684\u4f4d\u7f6e\u5faa\u73af\uff08\u5982\u679c\u53ef\u7528\uff09\uff0c\u5426\u5219\u4f4d\u7f6e\u4e3a 0,0\uff0c\u56e0\u6b64\u60a8\u53ef\u80fd\u9700\u8981\u68c0\u67e5\u68c0\u6d4b\u5230\u7684\u53f3\u773c\u662f\u5426\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"tracking-id-\u8ddf\u8e2a-id"},"Tracking ID \u8ddf\u8e2a ID"),(0,n.kt)("p",null,"A Loop of Integer values that tries to identify the same face from a previous frame. This ID persists as long as the face is in the frame. Only available when High quality is selected."),(0,n.kt)("p",null,"\u4e00\u4e2a\u6574\u6570\u503c\u5faa\u73af\uff0c\u8bd5\u56fe\u4ece\u524d\u4e00\u5e27\u4e2d\u8bc6\u522b\u51fa\u540c\u4e00\u5f20\u8138\u3002\u53ea\u8981\u9762\u90e8\u5728\u6846\u67b6\u4e2d\uff0c\u6b64 ID \u5c31\u4f1a\u4e00\u76f4\u5b58\u5728\u3002\u4ec5\u5728\u9009\u62e9\u9ad8\u8d28\u91cf\u65f6\u53ef\u7528\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/QR%20Code%20Detection"},"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Object%20Detection"},"Object Detection \u76ee\u6807\u68c0\u6d4b")))}s.isMDXComponent=!0},12283:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/face-detection-02574ba15973aa21a6982070f3d91cd0.png"}}]);