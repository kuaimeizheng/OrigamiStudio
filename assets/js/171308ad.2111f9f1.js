"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1010],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=s(n),f=a,d=h["".concat(p,".").concat(f)]||h[f]||u[f]||o;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3321:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},p="Switch \u5f00\u5173",s={unversionedId:"Material/Switch",id:"Material/Switch",title:"Switch \u5f00\u5173",description:"A Material switch with customizable colors.",source:"@site/docs/Material/Switch.md",sourceDirName:"Material",slug:"/Material/Switch",permalink:"/OrigamiStudio/docs/Material/Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Material/Switch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Status Bar \u72b6\u6001\u680f",permalink:"/OrigamiStudio/docs/Material/Status bar"},next:{title:"Text Field \u6587\u672c\u8f93\u5165\u6846",permalink:"/OrigamiStudio/docs/Material/Text Field"}},c={},u=[{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],h={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"switch-\u5f00\u5173"},"Switch \u5f00\u5173"),(0,o.kt)("p",null,"A Material switch with customizable colors."),(0,o.kt)("p",null,"\u53ef\u5b9a\u5236\u989c\u8272\u7684Material\u5f00\u5173\u3002"),(0,o.kt)("p",null,"Use the Touch button on the component to get the state of the switch."),(0,o.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u4ea4\u6362\u673a\u7684\u72b6\u6001\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/276d1b03-8e10-4998-823c-f895bf12b0c2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190357Z&X-Amz-Expires=86400&X-Amz-Signature=1ebb14cf937ff4dc007634a5e77337aa4c1ac91806418f186eb0c901de6616a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enable \u542f\u7528")),(0,o.kt)("p",null,"A boolean that is true when the switch is displayed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u5f00\u5173\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Position \u4f4d\u7f6e")),(0,o.kt)("p",null,"The position to display the switch."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Anchor \u951a\u70b9")),(0,o.kt)("p",null,"The anchor point to position the switch relative to. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2"},"Coordinates")," for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tint Color \u8272\u8c03\u989c\u8272")),(0,o.kt)("p",null,"The color of the switch when turned on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Theme \u4e3b\u9898")),(0,o.kt)("p",null,"The theme of the switch when turned off: light or dark."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Opacity \u4e0d\u900f\u660e\u5ea6")),(0,o.kt)("p",null,"The opacity of the switch."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Turn On \u6253\u5f00")),(0,o.kt)("p",null,"A pulse that turns the switch on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Turn Off \u5173\u95ed")),(0,o.kt)("p",null,"A pulse that turns the switch off."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Disabled \u7981\u7528")),(0,o.kt)("p",null,"A boolean that is true when the switch is disabled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On / Off \u5f00/\u5173")),(0,o.kt)("p",null,"A boolean that is true when the switch is on."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Alert-View-82a7c414b0c04e489c7efe4bea7a239d"},"Alert View \u8b66\u793a\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Checkbox-3b26d11b40fe4fd6b4331fa09afc1b47"},"Checkbox \u590d\u9009\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Fake-Keyboard-3feb346590de4ff3822b6079c7dc17b9"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Page-Control-73fd8adb143a4b34a3267ece18dfd876"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Circular-Progress-df848ba8986b4983aaa59dbf7c05faae"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Screen-a0d1e5fd463540a6b93c635a9706cab2"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Status-Bar-c2583cf542a241949665528cff2c5031"},"Status Bar \u72b6\u6001\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Text-Field-4a2ab8b08c3a49d19b19e4f715dedf41"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}f.isMDXComponent=!0}}]);