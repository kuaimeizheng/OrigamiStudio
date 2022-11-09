"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[55749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,v=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?i.createElement(v,a(a({ref:t},s),{},{components:n})):i.createElement(v,a({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var m=2;m<o;m++)a[m]=n[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var i=n(87462),r=(n(67294),n(3905));const o={title:"Device Time \u8bbe\u5907\u65f6\u95f4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Device Time \u8bbe\u5907\u65f6\u95f4",c={unversionedId:"documentation/Device/Device Time",id:"documentation/Device/Device Time",title:"Device Time \u8bbe\u5907\u65f6\u95f4",description:"Access the time on the connected phone, tablet, or the computer Origami is running on.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Device/Device Time.md",sourceDirName:"documentation/Device",slug:"/documentation/Device/Device Time",permalink:"/OrigamiStudio/en/docs/documentation/Device/Device Time",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Device/Device Time.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667995784,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{title:"Device Time \u8bbe\u5907\u65f6\u95f4",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Device Motion \u8bbe\u5907\u8fd0\u52a8",permalink:"/OrigamiStudio/en/docs/documentation/Device/Device Motion"},next:{title:"Game Controller \u6e38\u620f\u63a7\u5236\u5668",permalink:"/OrigamiStudio/en/docs/documentation/Device/Game Controller"}},l={},m=[{value:"Seconds \u79d2",id:"seconds-\u79d2",level:3},{value:"Milliseconds \u6beb\u79d2",id:"milliseconds-\u6beb\u79d2",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"device-time-\u8bbe\u5907\u65f6\u95f4"},"Device Time \u8bbe\u5907\u65f6\u95f4"),(0,r.kt)("p",null,"Access the time on the connected phone, tablet, or the computer Origami is running on."),(0,r.kt)("p",null,"\u8bbf\u95ee\u8fde\u63a5\u7684\u624b\u673a\u3001\u5e73\u677f\u7535\u8111\u3001\u6216\u8005\u5f53\u524d\u8ba1\u7b97\u673a\u7684\u65f6\u95f4\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(95356).Z,width:"1642",height:"334"})),(0,r.kt)("h3",{id:"seconds-\u79d2"},"Seconds \u79d2"),(0,r.kt)("p",null,"The number of seconds since January 1st, 1970. Use ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Date%20&%20Time%20Formatter"},"Date & Time Formatter")," to make it readable by humans."),(0,r.kt)("p",null,"\u81ea1970\u5e741\u67081\u65e5\u4ee5\u6765\u7684\u79d2\u6570\u3002\u4f7f\u7528 ### Date & Time Formatter\u628a\u4ece\u8bbe\u5907\u8bfb\u53d6\u7684\u79d2\u6570\u8f6c\u6362\u4e3a\u6211\u4eec\u719f\u6089\u7684\u65f6\u95f4\u683c\u5f0f\u3002"),(0,r.kt)("h3",{id:"milliseconds-\u6beb\u79d2"},"Milliseconds \u6beb\u79d2"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Date%20&%20Time%20Formatter"},"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Utility/Time"},"Time \u65f6\u95f4")))}u.isMDXComponent=!0},95356:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/device-time-dd579cf02a926e1a86b288a70ef4d6e9.png"}}]);