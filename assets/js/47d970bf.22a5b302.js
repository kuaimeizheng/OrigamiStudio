"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7836],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),f=p(n),d=r,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?a.createElement(b,i(i({ref:e},c),{},{components:n})):a.createElement(b,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7578:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Status Bar \u72b6\u6001\u680f",p={unversionedId:"iOS/Status bar",id:"iOS/Status bar",title:"Status Bar \u72b6\u6001\u680f",description:"An iOS status bar that is responsive and customizable.",source:"@site/docs/iOS/Status bar.md",sourceDirName:"iOS",slug:"/iOS/Status bar",permalink:"/OrigamiStudio/docs/iOS/Status bar",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/iOS/Status bar.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Slider \u6ed1\u5757",permalink:"/OrigamiStudio/docs/iOS/Slider"},next:{title:"Switch \u5f00\u5173",permalink:"/OrigamiStudio/docs/iOS/Switch"}},c={},u=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],f={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"status-bar-\u72b6\u6001\u680f"},"Status Bar \u72b6\u6001\u680f"),(0,o.kt)("p",null,"An iOS status bar that is responsive and customizable."),(0,o.kt)("p",null,"\u4e00\u4e2a\u54cd\u5e94\u548c\u53ef\u81ea\u5b9a\u4e49\u7684iOS\u72b6\u6001\u680f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5a769c1c-c8a5-40ab-a571-ff29f0f53ff3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190850Z&X-Amz-Expires=86400&X-Amz-Signature=a409728885e3884efcec42ee0d4f734fe395a7cb7ce828741bac7ba44bd9cb9b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enable \u542f\u7528")),(0,o.kt)("p",null,"A boolean that is true when the status bar is displayed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u72b6\u6001\u680f\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Color \u989c\u8272")),(0,o.kt)("p",null,"The color of the status bar contents: black or white."),(0,o.kt)("p",null,"\u72b6\u6001\u680f\u5185\u5bb9\u7684\u989c\u8272\uff1a\u9ed1\u8272\u6216\u767d\u8272\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Carrier \u8fd0\u8425\u5546")),(0,o.kt)("p",null,"A text string that is shown as the network carrier in the top left."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5728\u5de6\u4e0a\u89d2\u663e\u793a\u7684\u7f51\u7edc\u8fd0\u8425\u5546\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Time \u65f6\u95f4")),(0,o.kt)("p",null,"A text string that is shown as the time on the device. By default, this is blank and uses the current phone, tablet or computer time."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5728\u8bbe\u5907\u4e0a\u663e\u793a\u65f6\u95f4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u9879\u4e3a\u7a7a\u767d\u5e76\u4f7f\u7528\u5f53\u524d\u624b\u673a\u3001\u5e73\u677f\u7535\u8111\u6216\u8ba1\u7b97\u673a\u65f6\u95f4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Battery \u7535\u91cf")),(0,o.kt)("p",null,"A number from 0 to 100 that represents the battery level in the top right."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 100 \u7684\u6570\u5b57\uff0c\u8868\u793a\u53f3\u4e0a\u89d2\u7684\u7535\u6c60\u7535\u91cf\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,o.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Time-1ff0676f9141430d815d2b0cbde18457"},"Time \u65f6\u95f4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Device-Time-a7710a1e2a824f8ead4c61f72a22aa7a"},"Device Time \u8bbe\u5907\u65f6\u95f4")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Action-Sheet-925afa64e9fa42a5b2a9374fb41f8dbc"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Activity-Indicator-98b85e24705347b1bc147511e19aca54"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Alert-View-a05a8e1476e543919ccf453585ce8850"},"Alert View \u8b66\u793a\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Fake-Keyboard-bf839e8038924161b2ca5b401ebc6faf"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Navigation-Bar-2465c6dafddd4a6baeef32d390b015d3"},"Navigation Bar \u5bfc\u822a\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Notification-093ed757b8764a1c936d4c12d632fde7"},"Notification \u901a\u77e5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Page-Control-b89791a9a0334256b622a5afacfe80ca"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Screen-4c35850047fb4f6db41a03ffa66007a4"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Segmented-Control-b1867e80759140748500b210f18f90e5"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Slider-db6e484091084d90a58cba409bb59e9a"},"Slider \u6ed1\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Switch-8e35180bcd1747a282e0b12af1095015"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Tab-Bar-12b5f2f77b1a42688677f942a9f1a2e7"},"Tab Bar \u6807\u7b7e\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Text-Field-35f7f23e5f714582ab1c7d7af511281b"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Visual-Effect-4df6115644d141dab240ae1a8f882c66"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}d.isMDXComponent=!0}}]);