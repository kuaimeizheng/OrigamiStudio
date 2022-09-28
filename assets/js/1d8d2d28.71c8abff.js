"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[24966],{3905:(t,e,i)=>{i.d(e,{Zo:()=>s,kt:()=>m});var r=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var c=r.createContext({}),p=function(t){var e=r.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var i=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(i),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return i?r.createElement(h,o(o({ref:e},s),{},{components:i})):r.createElement(h,o({ref:e},s))}));function m(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},90216:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const a={sidebar_position:2},o="Stopwatch \u79d2\u8868",l={unversionedId:"documentation/Utility/Stopwatch",id:"documentation/Utility/Stopwatch",title:"Stopwatch \u79d2\u8868",description:"Measure elapsed time. Use Wait to create a countdown/timer.",source:"@site/docs/documentation/Utility/Stopwatch.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Stopwatch",permalink:"/OrigamiStudio/docs/documentation/Utility/Stopwatch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Stopwatch.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1664356247,formattedLastUpdatedAt:"2022\u5e749\u670828\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Splitter \u5206\u79bb\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Splitter"},next:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/docs/documentation/Utility/Switch"}},c={},p=[{value:"Start \u5f00\u59cb",id:"start-\u5f00\u59cb",level:3},{value:"Stop \u7ed3\u675f",id:"stop-\u7ed3\u675f",level:3},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:3},{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:p};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stopwatch-\u79d2\u8868"},"Stopwatch \u79d2\u8868"),(0,n.kt)("p",null,"Measure elapsed time. Use ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Wait"},"Wait")," to create a countdown/timer."),(0,n.kt)("p",null,"\u6d4b\u91cf\u7ecf\u8fc7\u7684\u65f6\u95f4\u3002\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Wait"},"Wait \u7b49\u5f85")," \u6a21\u5757\u521b\u5efa\u5012\u8ba1\u65f6/\u8ba1\u65f6\u5668\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:i(16836).Z,width:"1286",height:"228"})),(0,n.kt)("h3",{id:"start-\u5f00\u59cb"},"Start \u5f00\u59cb"),(0,n.kt)("p",null,"A pulse that starts the stopwatch."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u542f\u7528\u79d2\u8868\u3002"),(0,n.kt)("h3",{id:"stop-\u7ed3\u675f"},"Stop \u7ed3\u675f"),(0,n.kt)("p",null,"A pulse that pauses the stopwatch."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u6682\u505c\u79d2\u8868\u3002"),(0,n.kt)("h3",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e"),(0,n.kt)("p",null,"A pulse that resets the stopwatch to 0."),(0,n.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5c06\u79d2\u8868\u91cd\u7f6e\u4e3a 0 \u3002"),(0,n.kt)("h3",{id:"time-\u65f6\u95f4"},"Time \u65f6\u95f4"),(0,n.kt)("p",null,"The time elapsed since the stopwatch started, in seconds."),(0,n.kt)("p",null,"\u81ea\u79d2\u8868\u542f\u52a8\u4ee5\u6765\u7ecf\u8fc7\u7684\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Wait"},"Wait \u7b49\u5f85")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Time"},"Time \u65f6\u95f4")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Time"},"Device Time \u8bbe\u5907\u65f6\u95f4")))}u.isMDXComponent=!0},16836:(t,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/stopwatch-cdd5a13d0fdbdafb0f9fd59921d9fed6.png"}}]);