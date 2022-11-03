"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[10802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},73062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Double Tap \u53cc\u51fb",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="Double Tap \u53cc\u51fb",l={unversionedId:"documentation/Interaction/Double Tap",id:"documentation/Interaction/Double Tap",title:"Double Tap \u53cc\u51fb",description:"Capture double taps or single taps within a specified time frame. To be used with the Tap port in the Interaction patch.",source:"@site/docs/documentation/Interaction/Double Tap.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Double Tap",permalink:"/OrigamiStudio/docs/documentation/Interaction/Double Tap",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Double Tap.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667493511,formattedLastUpdatedAt:"2022\u5e7411\u67083\u65e5",sidebarPosition:5,frontMatter:{title:"Double Tap \u53cc\u51fb",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Interaction \u4ea4\u4e92",permalink:"/OrigamiStudio/docs/category/interaction-\u4ea4\u4e92"},next:{title:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e",permalink:"/OrigamiStudio/docs/documentation/Interaction/Drag Settings"}},p={},u=[{value:"Tap \u8f7b\u70b9",id:"tap-\u8f7b\u70b9",level:3},{value:"Delay \u5ef6\u8fdf",id:"delay-\u5ef6\u8fdf",level:3},{value:"Double Tap \u53cc\u51fb",id:"double-tap-\u53cc\u51fb-1",level:3},{value:"Single Tap \u5355\u51fb",id:"single-tap-\u5355\u51fb",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"double-tap-\u53cc\u51fb"},"Double Tap \u53cc\u51fb"),(0,r.kt)("p",null,"Capture double taps or single taps within a specified time frame. To be used with the Tap port in the ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction")," patch."),(0,r.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,r.kt)("p",null,"\u6355\u6349\u6307\u5b9a\u65f6\u95f4\u5185\u7684\u53cc\u51fb\u6216\u5355\u51fb\u3002\u4e0e Interaction \u6a21\u5757\u7684Tap \u8f93\u51fa\u63a5\u53e3\u8fde\u63a5\u5728\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(19946).Z,width:"1232",height:"276"})),(0,r.kt)("h3",{id:"tap-\u8f7b\u70b9"},"Tap \u8f7b\u70b9"),(0,r.kt)("p",null,"A pulse that comes from the Interaction patch\u2019s Tap output."),(0,r.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u4ea4\u4e92\u6a21\u5757\u7684 Tap \u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,r.kt)("h3",{id:"delay-\u5ef6\u8fdf"},"Delay \u5ef6\u8fdf"),(0,r.kt)("p",null,"The maximum time duration between two taps to activate a double tap. By default, the delay is 0.3s."),(0,r.kt)("p",null,"\u5728\u6700\u5927\u6301\u7eed\u65f6\u95f4\u5185\u70b9\u51fb\u4e24\u6b21\u80fd\u6fc0\u6d3b\u53cc\u51fb\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5ef6\u8fdf\u4e3a0.3\u79d2\u3002"),(0,r.kt)("h3",{id:"double-tap-\u53cc\u51fb-1"},"Double Tap \u53cc\u51fb"),(0,r.kt)("p",null,"Pulses when two taps occur in the specified delay"),(0,r.kt)("p",null,"\u5f53\u53cc\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"),(0,r.kt)("h3",{id:"single-tap-\u5355\u51fb"},"Single Tap \u5355\u51fb"),(0,r.kt)("p",null,"Pulses when one tap occurs in the specified delay"),(0,r.kt)("p",null,"\u5f53\u70b9\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Long%20Press"},"Long Press \u957f\u6309")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Touches"},"Touches \u89e6\u6478")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")))}d.isMDXComponent=!0},19946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/double-tap-e52e2e9f9b562a2195a7b23b204b0ed4.png"}}]);