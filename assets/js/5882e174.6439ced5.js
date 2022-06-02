"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1273],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},u="Sound Player \u58f0\u97f3\u64ad\u653e\u5668",s={unversionedId:"Device/Sound Player",id:"Device/Sound Player",title:"Sound Player \u58f0\u97f3\u64ad\u653e\u5668",description:"Play any sound or music file.",source:"@site/docs/Device/Sound Player.md",sourceDirName:"Device",slug:"/Device/Sound Player",permalink:"/OrigamiStudio/docs/Device/Sound Player",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Device/Sound Player.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sound Player Setting \u58f0\u97f3\u64ad\u653e\u5668\u8bbe\u7f6e",permalink:"/OrigamiStudio/docs/Device/Sound Player Setting"},next:{title:"Touches \u89e6\u6478",permalink:"/OrigamiStudio/docs/Device/Touches"}},p={},c=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sound-player-\u58f0\u97f3\u64ad\u653e\u5668"},"Sound Player \u58f0\u97f3\u64ad\u653e\u5668"),(0,a.kt)("p",null,"Play any sound or music file."),(0,a.kt)("p",null,"\u64ad\u653e\u4efb\u610f\u58f0\u97f3\u6216\u97f3\u4e50\u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/21d916a1-e434-4f9e-9209-b2066d74e2a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170310Z&X-Amz-Expires=86400&X-Amz-Signature=46fa0bd325141a193759d7cf217cef3ea1f06040bf52a5db616197d719d6eb71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sound \u58f0\u97f3")),(0,a.kt)("p",null,"The sound to play. Drag a sound file into the patch editor and connect it to the Sound Player."),(0,a.kt)("p",null,"\u64ad\u653e\u7684\u58f0\u97f3\u3002\u5c06\u58f0\u97f3\u6587\u4ef6\u62d6\u52a8\u5230\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\uff0c\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u8fd9\u7aef\u53e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Play \u64ad\u653e")),(0,a.kt)("p",null,"A boolean that is true when the sound is playing."),(0,a.kt)("p",null,"\u58f0\u97f3\u64ad\u653e\u65f6\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reset \u91cd\u7f6e")),(0,a.kt)("p",null,"A pulse that resets the sound being played."),(0,a.kt)("p",null,"\u91cd\u7f6e\u58f0\u97f3\u64ad\u653e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Loop \u5faa\u73af")),(0,a.kt)("p",null,"A boolean that is true when the sound is looped continuously."),(0,a.kt)("p",null,"\u5f53\u58f0\u97f3\u4e3a\u5faa\u73af\u6a21\u5f0f\u65f6\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Settings \u8bbe\u7f6e")),(0,a.kt)("p",null,"The settings from ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Sound-Player-Settings-41bc9186bec94359a9b476f5192cd4a8"},"Sound Player Settings"),"."),(0,a.kt)("p",null,"\u4ece Sound Player Setting \u8fde\u63a5\u8fc7\u6765\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Current Time \u5f53\u524d\u65f6\u95f4")),(0,a.kt)("p",null,"This shows how far into the sound the player is at."),(0,a.kt)("p",null,"\u663e\u793a\u64ad\u653e\u5668\u6240\u5904\u7684\u8fdb\u5ea6\u79bb\u7ed3\u675f\u8fd8\u6709\u591a\u4e45\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Duration \u6301\u7eed\u65f6\u95f4")),(0,a.kt)("p",null,"This is the total time of the sound file."),(0,a.kt)("p",null,"\u58f0\u97f3\u6587\u4ef6\u7684\u603b\u65f6\u95f4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Metering \u8ba1\u91cf")),(0,a.kt)("p",null,"Connect this to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Audio-Metering-fbcb624f9eda474d9466cbae227613eb"},"Audio Metering")," patch to make visualizations based on the playing sound."),(0,a.kt)("p",null,"\u5c06\u5176\u8fde\u63a5\u5230 Audio Metering \u6a21\u5757\uff0c\u4ee5\u6839\u636e\u64ad\u653e\u7684\u58f0\u97f3\u8fdb\u884c\u53ef\u89c6\u5316\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,a.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Microphone-914ed4dc27d647cf99e18bf98cf3e874"},"Microphone \u8bdd\u7b52")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Sound-Kit-78bb96d92a8f4291b3dd65c6e2465939"},"Sound Kit \u97f3\u6548\u5305")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2d0710cb-2421-4870-8a88-c2e39e4a9cf7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T170318Z&X-Amz-Expires=86400&X-Amz-Signature=3358ec04cba12c016a8a38ddfb6bcc7addd91f4f7e1109fc709f9ea070acef8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);