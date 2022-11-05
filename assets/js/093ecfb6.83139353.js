"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[40331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Snapshot \u5feb\u7167",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Snapshot \u5feb\u7167",l={unversionedId:"documentation/Utility/Snapshot",id:"documentation/Utility/Snapshot",title:"Snapshot \u5feb\u7167",description:"Captures a freeze frame image of a particular layer or the entire screen in the current state.",source:"@site/docs/documentation/Utility/Snapshot.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Snapshot",permalink:"/OrigamiStudio/docs/documentation/Utility/Snapshot",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Snapshot.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"Snapshot \u5feb\u7167",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Sample and Hold \u91c7\u6837\u4fdd\u6301",permalink:"/OrigamiStudio/docs/documentation/Utility/Sample and Hold"},next:{title:"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Utility/Spacing Unpack"}},p={},s=[{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Sample \u91c7\u6837",id:"sample-\u91c7\u6837",level:3},{value:"Image \u56fe\u7247",id:"image-\u56fe\u7247",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snapshot-\u5feb\u7167"},"Snapshot \u5feb\u7167"),(0,a.kt)("p",null,"Captures a freeze frame image of a particular layer or the entire screen in the current state."),(0,a.kt)("p",null,"\u5728\u5f53\u524d\u72b6\u6001\u4e0b\u6355\u83b7\u7279\u5b9a\u56fe\u5c42\u6216\u6574\u4e2a\u5c4f\u5e55\u7684\u5b9a\u683c\u56fe\u50cf\u3002"),(0,a.kt)("p",null,"There are some limitations of layers that can be captured, including particle systems and certain layer transformations."),(0,a.kt)("p",null,"\u53ef\u4ee5\u6355\u83b7\u7684\u56fe\u5c42\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u5305\u62ec\u7c92\u5b50\u7cfb\u7edf\u548c\u67d0\u4e9b\u56fe\u5c42\u53d8\u6362\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(72226).Z,width:"1348",height:"212"})),(0,a.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,a.kt)("p",null,"The layer to take the snapshot from. \u2018None\u2019 will snapshot the entire screen."),(0,a.kt)("p",null,"\u8981\u4ece\u4e2d\u83b7\u53d6\u5feb\u7167\u7684\u56fe\u5c42\u3002 \u201c\u65e0\u201d\u5c06\u5feb\u7167\u6574\u4e2a\u5c4f\u5e55\u3002"),(0,a.kt)("h3",{id:"sample-\u91c7\u6837"},"Sample \u91c7\u6837"),(0,a.kt)("p",null,"A pulse to take the snapshot of the current state."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u7528\u4e8e\u62cd\u6444\u5f53\u524d\u72b6\u6001\u5feb\u7167\u3002"),(0,a.kt)("h3",{id:"image-\u56fe\u7247"},"Image \u56fe\u7247"),(0,a.kt)("p",null,"The image of the snapshot."),(0,a.kt)("p",null,"\u5feb\u7167\u7684\u56fe\u50cf\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Image"},"Image \u56fe\u7247")))}u.isMDXComponent=!0},72226:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/snapshot-85070be6df1ddf7e96fe177d9794f72b.png"}}]);