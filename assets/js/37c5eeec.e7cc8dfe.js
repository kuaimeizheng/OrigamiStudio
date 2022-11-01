"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[78701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},36097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:5},o="Screen \u5c4f\u5e55",l={unversionedId:"documentation/Material/Screen",id:"documentation/Material/Screen",title:"Screen \u5c4f\u5e55",description:"A group component with realistic material-style transitions. Add any layer inside the screen.",source:"@site/docs/documentation/Material/Screen.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Screen",permalink:"/OrigamiStudio/docs/documentation/Material/Screen",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Screen.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667268661,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Page Control \u5206\u9875\u63a7\u5236\u5668",permalink:"/OrigamiStudio/docs/documentation/Material/Page Control"},next:{title:"Status Bar \u72b6\u6001\u680f",permalink:"/OrigamiStudio/docs/documentation/Material/Status bar"}},s={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Present \u51fa\u73b0",id:"present-\u51fa\u73b0",level:3},{value:"Dismiss \u6d88\u5931",id:"dismiss-\u6d88\u5931",level:3},{value:"Transition \u8fc7\u6e21",id:"transition-\u8fc7\u6e21",level:3},{value:"Start State \u5f00\u59cb\u72b6\u6001",id:"start-state-\u5f00\u59cb\u72b6\u6001",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Presented \u5df2\u51fa\u73b0",id:"presented-\u5df2\u51fa\u73b0",level:3},{value:"Previous Screen Scale \u4e0a\u4e00\u4e2a\u5c4f\u5e55\u6bd4\u4f8b",id:"previous-screen-scale-\u4e0a\u4e00\u4e2a\u5c4f\u5e55\u6bd4\u4f8b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"screen-\u5c4f\u5e55"},"Screen \u5c4f\u5e55"),(0,a.kt)("p",null,"A group component with realistic material-style transitions. Add any layer inside the screen."),(0,a.kt)("p",null,"\u5f88\u771f\u5b9e\u7684Material\u6837\u5f0f\u8fc7\u6e21\u7684\u7ec4\u4ef6\u3002\u53ef\u4ee5\u5728\u5c4f\u5e55\u5185\u6dfb\u52a0\u4efb\u4f55\u56fe\u5c42\u3002"),(0,a.kt)("p",null,"Use the Touch button on the component to get information about the screen\u2019s presentation status."),(0,a.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684 Touch \u6309\u94ae\u83b7\u53d6\u6709\u5173\u5c4f\u5e55\u663e\u793a\u72b6\u6001\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:r(9613).Z,width:"1550",height:"346"})),(0,a.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A boolean that is true when the screen is displayed."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5728\u663e\u793a\u5c4f\u5e55\u65f6\uff0c\u5e03\u5c14\u503c\u662f\u771f\u3002"),(0,a.kt)("h3",{id:"present-\u51fa\u73b0"},"Present \u51fa\u73b0"),(0,a.kt)("p",null,"A pulse that presents the screen by animating it in."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u89e6\u53d1\u5c4f\u5e55\u5165\u573a\u52a8\u753b\u3002"),(0,a.kt)("h3",{id:"dismiss-\u6d88\u5931"},"Dismiss \u6d88\u5931"),(0,a.kt)("p",null,"A pulse that dismisses the screen by animating it out."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u89e6\u53d1\u5c4f\u5e55\u6d88\u5931\u52a8\u753b\u3002"),(0,a.kt)("h3",{id:"transition-\u8fc7\u6e21"},"Transition \u8fc7\u6e21"),(0,a.kt)("p",null,"The animation style: Push or Modal."),(0,a.kt)("p",null,"\u52a8\u753b\u98ce\u683c\uff1a\u63a8\u8fdb\u6216\u6a21\u6001\u3002"),(0,a.kt)("h3",{id:"start-state-\u5f00\u59cb\u72b6\u6001"},"Start State \u5f00\u59cb\u72b6\u6001"),(0,a.kt)("p",null,"The starting position: Dismissed or Presented."),(0,a.kt)("p",null,"\u5f00\u59cb\u4f4d\u7f6e:\u6d88\u5931\u6216\u51fa\u73b0\u3002"),(0,a.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,a.kt)("p",null,"A number that represents the scale of the screen."),(0,a.kt)("p",null,"\u4ee3\u8868\u5c4f\u5e55\u6bd4\u4f8b\u7684\u6570\u5b57\u3002"),(0,a.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,a.kt)("p",null,"A progress value that represents presentation (0 for dismissed, 1 for presented). Used to synchronize other animations."),(0,a.kt)("p",null,"\u8868\u793a\u5c55\u793a\u7684\u8fdb\u5ea6\u503c(0\u8868\u793a\u62d2\u7edd\uff0c1\u8868\u793a\u8868\u793a)\u3002\u7528\u4e8e\u540c\u6b65\u5176\u4ed6\u52a8\u753b\u3002"),(0,a.kt)("h3",{id:"presented-\u5df2\u51fa\u73b0"},"Presented \u5df2\u51fa\u73b0"),(0,a.kt)("p",null,"A boolean that is true when the screen is presented."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u5c4f\u5e55\u51fa\u73b0\u65f6\u4e3a\u771f\u3002"),(0,a.kt)("h3",{id:"previous-screen-scale-\u4e0a\u4e00\u4e2a\u5c4f\u5e55\u6bd4\u4f8b"},"Previous Screen Scale \u4e0a\u4e00\u4e2a\u5c4f\u5e55\u6bd4\u4f8b"),(0,a.kt)("p",null,"The scale value for scaling the previous screen down in a Push transition. Connect to the Scale of the previous screen."),(0,a.kt)("p",null,"\u5728 Push \u8fc7\u6e21\u4e2d\u7f29\u5c0f\u524d\u4e00\u4e2a\u5c4f\u5e55\u7684\u6bd4\u4f8b\u503c\u3002\u8fde\u63a5\u5230\u4e0a\u4e00\u4e2a\u5c4f\u5e55\u7684\u6bd4\u4f8b\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Pop%20Switch"},"Pop Switch \u6d41\u884c\u5f00\u5173")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),"\n",(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}d.isMDXComponent=!0},9613:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screen-70659d8d8abe5cb0456633e7e6c10963.png"}}]);