"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[95258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},36884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));const n={sidebar_position:2},l="Status Bar \u72b6\u6001\u680f",o={unversionedId:"documentation/Material/Status bar",id:"documentation/Material/Status bar",title:"Status Bar \u72b6\u6001\u680f",description:"A Material status bar that is responsive and customizable.",source:"@site/docs/documentation/Material/Status bar.md",sourceDirName:"documentation/Material",slug:"/documentation/Material/Status bar",permalink:"/OrigamiStudio/docs/documentation/Material/Status bar",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Material/Status bar.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1662015759,formattedLastUpdatedAt:"2022\u5e749\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Screen \u5c4f\u5e55",permalink:"/OrigamiStudio/docs/documentation/Material/Screen"},next:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/docs/documentation/Material/Switch"}},u={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Theme \u4e3b\u9898",id:"theme-\u4e3b\u9898",level:3},{value:"Background \u80cc\u666f",id:"background-\u80cc\u666f",level:3},{value:"Time \u65f6\u95f4",id:"time-\u65f6\u95f4",level:3},{value:"Battery \u7535\u91cf",id:"battery-\u7535\u91cf",level:3},{value:"Signal \u4fe1\u53f7",id:"signal-\u4fe1\u53f7",level:3},{value:"Wifi Level Wifi \u5f3a\u5ea6",id:"wifi-level-wifi-\u5f3a\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"status-bar-\u72b6\u6001\u680f"},"Status Bar \u72b6\u6001\u680f"),(0,i.kt)("p",null,"A Material status bar that is responsive and customizable."),(0,i.kt)("p",null,"\u4e00\u79cd\u54cd\u5e94\u6027\u548c\u53ef\u5b9a\u5236\u7684Material\u72b6\u6001\u680f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:a(60020).Z,width:"1558",height:"388"})),(0,i.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("p",null,"A boolean that is true when the status bar is displayed."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u72b6\u6001\u680f\u65f6\uff0c\u5e03\u5c14\u503c\u662f\u5426\u3002"),(0,i.kt)("h3",{id:"theme-\u4e3b\u9898"},"Theme \u4e3b\u9898"),(0,i.kt)("p",null,"The theme of the status bar contents: light or dark."),(0,i.kt)("p",null,"\u72b6\u6001\u680f\u5185\u5bb9\u7684\u4e3b\u9898\uff1a\u6d45\u8272\u6216\u6df1\u8272\u3002"),(0,i.kt)("h3",{id:"background-\u80cc\u666f"},"Background \u80cc\u666f"),(0,i.kt)("p",null,"The color of the status bar background."),(0,i.kt)("p",null,"\u72b6\u6001\u680f\u80cc\u666f\u7684\u989c\u8272\u3002"),(0,i.kt)("h3",{id:"time-\u65f6\u95f4"},"Time \u65f6\u95f4"),(0,i.kt)("p",null,"A text string that is shown as the time on the device. By default, this is blank and uses the current phone, tablet or computer time."),(0,i.kt)("p",null,"\u4f5c\u4e3a\u8bbe\u5907\u4e0a\u7684\u65f6\u95f4\u663e\u793a\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u7a7a\u767d\u7684\uff0c\u5e76\u4f7f\u7528\u5f53\u524d\u7684\u7535\u8bdd\uff0c\u5e73\u677f\u7535\u8111\u6216\u8ba1\u7b97\u673a\u65f6\u95f4\u3002"),(0,i.kt)("h3",{id:"battery-\u7535\u91cf"},"Battery \u7535\u91cf"),(0,i.kt)("p",null,"A number from 0 to 1 that represents the battery level in the top right."),(0,i.kt)("p",null,"\u4ece0\u52301\u7684\u6570\u5b57\u8868\u793a\u53f3\u4e0a\u89d2\u7684\u7535\u6c60\u7535\u91cf\u3002"),(0,i.kt)("h3",{id:"signal-\u4fe1\u53f7"},"Signal \u4fe1\u53f7"),(0,i.kt)("p",null,"A number from 0 to 1 that represents the cell signal strength."),(0,i.kt)("p",null,"\u4ece0\u52301\u7684\u6570\u5b57\u8868\u793a\u5355\u5143\u4fe1\u53f7\u5f3a\u5ea6\u3002"),(0,i.kt)("h3",{id:"wifi-level-wifi-\u5f3a\u5ea6"},"Wifi Level Wifi \u5f3a\u5ea6"),(0,i.kt)("p",null,"A number from 0 to 1 that represents the wifi signal strength."),(0,i.kt)("p",null,"\u4ece0\u52301\u7684\u6570\u5b57\u8868\u793aWiFi\u4fe1\u53f7\u5f3a\u5ea6\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Time"},"Time \u65f6\u95f4")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Device%20Time"},"Device Time \u8bbe\u5907\u65f6\u95f4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),"\n",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Circular%20Progress"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Screen"},"Screen \u5c4f\u5e55")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Switch"},"Switch \u5f00\u5173")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}d.isMDXComponent=!0},60020:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/status-bar-1eb1e053e7cb66b8504142ce764d1411.png"}}]);