"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2954],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},s="Device Time \u8bbe\u5907\u65f6\u95f4",l={unversionedId:"Device/Device Time",id:"Device/Device Time",title:"Device Time \u8bbe\u5907\u65f6\u95f4",description:"Access the time on the connected phone, tablet, or the computer Origami is running on.",source:"@site/docs/Device/Device Time.md",sourceDirName:"Device",slug:"/Device/Device Time",permalink:"/OrigamiStudio/docs/Device/Device Time",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Device/Device Time.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Device Motion \u8bbe\u5907\u8fd0\u52a8",permalink:"/OrigamiStudio/docs/Device/Device Motion"},next:{title:"Game Controller \u6e38\u620f\u63a7\u5236\u5668",permalink:"/OrigamiStudio/docs/Device/Game Controller"}},m={},u=[{value:"Seconds \u79d2###",id:"seconds-\u79d2",level:3},{value:"Milliseconds \u6beb\u79d2###",id:"milliseconds-\u6beb\u79d2",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Seconds \u79d2###",id:"seconds-\u79d2-1",level:3}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"device-time-\u8bbe\u5907\u65f6\u95f4"},"Device Time \u8bbe\u5907\u65f6\u95f4"),(0,o.kt)("p",null,"Access the time on the connected phone, tablet, or the computer Origami is running on."),(0,o.kt)("p",null,"\u8bbf\u95ee\u8fde\u63a5\u7684\u624b\u673a\u3001\u5e73\u677f\u7535\u8111\u3001\u6216\u8005\u5f53\u524d\u8ba1\u7b97\u673a\u7684\u65f6\u95f4\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d78886af-6a2a-493d-ba20-4af9dae87f73/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165623Z&X-Amz-Expires=86400&X-Amz-Signature=1d7e49baba566bc81f4e93338a428d838301c56eadc2dc0a6fabfdc56af141a2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("h3",{id:"seconds-\u79d2"},"Seconds \u79d2###"),(0,o.kt)("p",null,"The number of seconds since January 1st, 1970. Use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Date%20&%20Time%20Formatter"},"Date & Time Formatter")," to make it readable by humans."),(0,o.kt)("p",null,"\u81ea1970\u5e741\u67081\u65e5\u4ee5\u6765\u7684\u79d2\u6570\u3002\u4f7f\u7528 ### Date & Time Formatter\u628a\u4ece\u8bbe\u5907\u8bfb\u53d6\u7684\u79d2\u6570\u8f6c\u6362\u4e3a\u6211\u4eec\u719f\u6089\u7684\u65f6\u95f4\u683c\u5f0f\u3002"),(0,o.kt)("h3",{id:"milliseconds-\u6beb\u79d2"},"Milliseconds \u6beb\u79d2###"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Date%20&%20Time%20Formatter"},"Date & Time Formatter \u65e5\u671f&\u65f6\u95f4\u683c\u5f0f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Time"},"Time \u65f6\u95f4")),(0,o.kt)("p",null,"\u5386\u53f2\u7248\u672c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81f5c286-ed86-4f32-8db8-21d46f0ec661/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T165630Z&X-Amz-Expires=86400&X-Amz-Signature=5751274c5ae5374cb4c25a13596d015b64d6b15d724b49f3fef0442ec5461f9b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("h3",{id:"seconds-\u79d2-1"},"Seconds \u79d2###"),(0,o.kt)("p",null,"The number of seconds since January 1st, 1970. Use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Date%20&%20Time%20Formatter"},"Date & Time Formatter")," to make it readable by humans."),(0,o.kt)("p",null,"\u81ea1970\u5e741\u67081\u65e5\u4ee5\u6765\u7684\u79d2\u6570\u3002\u4f7f\u7528 ### Date & Time Formatter\u628a\u4ece\u8bbe\u5907\u8bfb\u53d6\u7684\u79d2\u6570\u8f6c\u6362\u4e3a\u6211\u4eec\u719f\u6089\u7684\u65f6\u95f4\u683c\u5f0f\u3002"))}p.isMDXComponent=!0}}]);