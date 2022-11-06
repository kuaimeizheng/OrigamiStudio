"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[65968],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13185:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={title:"CASpringAnimation",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},o="CASpringAnimation",l={unversionedId:"motion/ios/CASpringAnimation",id:"motion/ios/CASpringAnimation",title:"CASpringAnimation",description:"\u5c06\u7c7b\u4f3c\u5f39\u7c27\u7684\u529b\u5e94\u7528\u4e8e\u56fe\u5c42\u5c5e\u6027\u7684\u52a8\u753b\u3002",source:"@site/docs/motion/ios/CASpringAnimation.md",sourceDirName:"motion/ios",slug:"/motion/ios/CASpringAnimation",permalink:"/OrigamiStudio/docs/motion/ios/CASpringAnimation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/motion/ios/CASpringAnimation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667730725,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:10,frontMatter:{title:"CASpringAnimation",sidebar_position:10,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"motionSidebar",previous:{title:"iOS Animation",permalink:"/OrigamiStudio/docs/category/ios-animation"},next:{title:"CAKeyframeAnimation",permalink:"/OrigamiStudio/docs/motion/ios/CAKeyframeAnimation"}},p={},m=[{value:"CASpringAnimation",id:"caspringanimation-1",level:2},{value:"\u8bbe\u8ba1\u53c2\u6570",id:"\u8bbe\u8ba1\u53c2\u6570",level:2},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:2}],s={toc:m};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"caspringanimation"},"CASpringAnimation"),(0,a.kt)("p",null,"\u5c06\u7c7b\u4f3c\u5f39\u7c27\u7684\u529b\u5e94\u7528\u4e8e\u56fe\u5c42\u5c5e\u6027\u7684\u52a8\u753b\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/quartzcore/caspringanimation"},"\u76f8\u5173\u94fe\u63a5")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"caspringanimation-1"},"CASpringAnimation"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"CASpringAnimation"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Number",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"damping",(0,a.kt)("span",null,"10")),(0,a.kt)("li",null,"initialVelocty",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"mass",(0,a.kt)("span",null,"1")),(0,a.kt)("li",null,"settingDuration",(0,a.kt)("span",null,"0.4s")),(0,a.kt)("li",null,"stiffness",(0,a.kt)("span",null,"100"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Value",(0,a.kt)("span",null,"0")," ")))),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u53c2\u6570"},"\u8bbe\u8ba1\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u5f00\u59cb\u548c\u7ed3\u675f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"damping"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49\u5f39\u7c27\u7684\u8fd0\u52a8\u5e94\u5982\u4f55\u56e0\u6469\u64e6\u529b\u800c\u53d7\u5230\u963b\u5c3c\u3002\u9ed8\u8ba4\u4e3a 10\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"initialVelocty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9644\u7740\u5728\u5f39\u7c27\u4e0a\u7684\u7269\u4f53\u7684\u521d\u59cb\u901f\u5ea6\u3002\u9ed8\u8ba4\u4e3a 0\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mass"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9644\u7740\u5728\u5f39\u7c27\u672b\u7aef\u7684\u7269\u4f53\u7684\u8d28\u91cf\u3002\u9ed8\u8ba4\u4e3a 1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"settingDuration"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8003\u8651\u9759\u6b62\u72b6\u6001\u7684\u5f39\u7c27\u7cfb\u7edf\u6240\u9700\u7684\u4f30\u8ba1\u6301\u7eed\u65f6\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"stiffness"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5f39\u7c27\u521a\u5ea6\u7cfb\u6570\u3002\u8f83\u9ad8\u7684\u503c\u5bf9\u5e94\u4e8e\u8f83\u786c\u7684\u5f39\u7c27\uff0c\u53ef\u4e3a\u79fb\u52a8\u7684\u7269\u4f53\u4ea7\u751f\u8f83\u5927\u7684\u529b\u3002\u9ed8\u8ba4\u4e3a 100\u3002")))),(0,a.kt)("h2",{id:"\u76f8\u5173\u53c2\u8003"},"\u76f8\u5173\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/quartzcore/caspringanimation"},"Apple Core Animation")))}u.isMDXComponent=!0}}]);