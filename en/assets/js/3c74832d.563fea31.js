"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[64990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:5},a="Pop Switch \u6d41\u884c\u5f00\u5173",l={unversionedId:"documentation/Interaction/Pop Switch",id:"documentation/Interaction/Pop Switch",title:"Pop Switch \u6d41\u884c\u5f00\u5173",description:"Swipe, rotate or pinch a layer between any two positions, rotations or scales, with added bouncy animations from Pop Animation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Interaction/Pop Switch.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Pop Switch",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Pop Switch",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Pop Switch.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1667531735,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Peek Pop \u8f7b\u538b\u91cd\u538b",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Peek Pop"},next:{title:"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",permalink:"/OrigamiStudio/en/docs/documentation/Interaction/Scroll Settings"}},u={},s=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Gesture \u624b\u52bf",id:"gesture-\u624b\u52bf",level:3},{value:"Start Value \u5f00\u59cb\u503c",id:"start-value-\u5f00\u59cb\u503c",level:3},{value:"End Value \u7ed3\u675f\u503c",id:"end-value-\u7ed3\u675f\u503c",level:3},{value:"Flip \u7ffb\u8f6c",id:"flip-\u7ffb\u8f6c",level:3},{value:"Turn On \u6253\u5f00",id:"turn-on-\u6253\u5f00",level:3},{value:"Turn Off \u5173\u95ed",id:"turn-off-\u5173\u95ed",level:3},{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:3},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"On/Off \u5f00/\u5173",id:"onoff-\u5f00\u5173",level:3}],p={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pop-switch-\u6d41\u884c\u5f00\u5173"},"Pop Switch \u6d41\u884c\u5f00\u5173"),(0,r.kt)("p",null,"Swipe, rotate or pinch a layer between any two positions, rotations or scales, with added bouncy animations from ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Animation/Pop%20Animation"},"Pop Animation"),"."),(0,r.kt)("p",null,"\u5728\u4efb\u610f\u4e24\u4e2a\u4f4d\u7f6e\u3001\u65cb\u8f6c\u6216\u7f29\u653e\u4e4b\u95f4\u6ed1\u52a8\u3001\u65cb\u8f6c\u6216\u634f\u5408\u56fe\u5c42\uff0c\u5e76\u6dfb\u52a0\u6765\u81ea Pop Animation\u7684\u5f39\u6027\u52a8\u753b\u3002"),(0,r.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,r.kt)("p",null,"\u4f7f\u7528\u89e6\u6478\u6309\u94ae\u5728\u56fe\u5c42\u4e0a\u9762\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(47596).Z,width:"1662",height:"462"})),(0,r.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,r.kt)("p",null,"A boolean that is true when the gesture is enabled."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u542f\u7528\u624b\u52bf\u65f6\u4e3a\u771f\u3002"),(0,r.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,r.kt)("p",null,"The layer to capture gestures from."),(0,r.kt)("p",null,"\u6355\u6349\u624b\u52bf\u7684\u56fe\u5c42"),(0,r.kt)("h3",{id:"gesture-\u624b\u52bf"},"Gesture \u624b\u52bf"),(0,r.kt)("p",null,"The gesture to detect. The options:"),(0,r.kt)("p",null,"\u8981\u68c0\u6d4b\u7684\u624b\u52bf\uff0c\u5305\u62ec\u9009\u9879\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Swipe X \u6ed1\u52a8X\u8f74"),(0,r.kt)("li",{parentName:"ol"},"Swipe Y \u6ed1\u52a8Y\u8f74"),(0,r.kt)("li",{parentName:"ol"},"Pinch Scale \u634f\u5408\u7f29\u653e"),(0,r.kt)("li",{parentName:"ol"},"Pinch Rotate \u634f\u5408\u65cb\u8f6c"),(0,r.kt)("li",{parentName:"ol"},"Pinch X \u634f\u5408X\u8f74"),(0,r.kt)("li",{parentName:"ol"},"Pinch Y \u634f\u5408Y\u8f74")),(0,r.kt)("h3",{id:"start-value-\u5f00\u59cb\u503c"},"Start Value \u5f00\u59cb\u503c"),(0,r.kt)("p",null,"A number that represents the default position, scale or rotation of the layer."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u56fe\u5c42\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u3001\u7f29\u653e\u6216\u65cb\u8f6c\u3002"),(0,r.kt)("h3",{id:"end-value-\u7ed3\u675f\u503c"},"End Value \u7ed3\u675f\u503c"),(0,r.kt)("p",null,"A number that represents the second position, scale or rotation of the layer that the gesture should animate towards."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u624b\u52bf\u5e94\u8be5\u671d\u5411\u7684\u7b2c\u4e8c\u4e2a\u4f4d\u7f6e\u3001\u6bd4\u4f8b\u6216\u65cb\u8f6c\u3002"),(0,r.kt)("h3",{id:"flip-\u7ffb\u8f6c"},"Flip \u7ffb\u8f6c"),(0,r.kt)("p",null,"A pulse that flips the state of the switch (from on to off, or vice versa), which will also animate the value to the corresponding number."),(0,r.kt)("p",null,"\u4e00\u4e2a\u7ffb\u8f6c\u5f00\u5173\u72b6\u6001\u7684\u8109\u51b2\uff08\u4ece\u5f00\u5230\u5173\uff0c\u53cd\u4e4b\u4ea6\u7136\uff09\uff0c\u8fd9\u4e5f\u4f1a\u5c06\u751f\u6210\u76f8\u5e94\u7684\u6570\u503c\u3002"),(0,r.kt)("h3",{id:"turn-on-\u6253\u5f00"},"Turn On \u6253\u5f00"),(0,r.kt)("p",null,"A pulse that turns the switch on, which will also animate the value to the end value. If the switch is already on, the pulse has no effect."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6253\u5f00\u5f00\u5173\u7684\u8109\u51b2\uff0c\u4f1a\u5c06\u503c\u8bbe\u7f6e\u4e3a\u6700\u7ec8\u503c\u3002\u5982\u679c\u5f00\u5173\u5df2\u6253\u5f00\uff0c\u5219\u8109\u51b2\u65e0\u6548\u3002"),(0,r.kt)("h3",{id:"turn-off-\u5173\u95ed"},"Turn Off \u5173\u95ed"),(0,r.kt)("p",null,"A pulse that turns the switch off, which will also animate the value to the start value. If the switch is already off, the pulse has no effect."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5173\u95ed\u5f00\u5173\u7684\u8109\u51b2\uff0c\u4f1a\u5c06\u503c\u8bbe\u7f6e\u4e3a\u5f00\u59cb\u503c\u3002\u5982\u679c\u5f00\u5173\u5df2\u5173\u95ed\uff0c\u5219\u8109\u51b2\u65e0\u6548\u3002"),(0,r.kt)("h3",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,r.kt)("p",null,"A number that represents the bounciness of the animation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u7684\u5f39\u6027\u3002"),(0,r.kt)("h3",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,r.kt)("p",null,"A number that represents the speed of the animation."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u7684\u901f\u5ea6\u3002"),(0,r.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,r.kt)("p",null,"A number that represents the current position, rotation or scale. Connect to the position X, position Y, rotation Z, or scale of the layer."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5f53\u524d\u7684\u4f4d\u7f6e\u3001\u65cb\u8f6c\u6216\u6bd4\u4f8b\u3002\u53ef\u4ee5\u8fde\u63a5\u5230\u56fe\u5c42\u7684 X\u8f74\u4f4d\u7f6e\uff0cY\u8f74\u4f4d\u7f6e\uff0cZ\u8f74\u65cb\u8f6c\u4f4d\u7f6e\u6216\u7f29\u653e\u3002"),(0,r.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,r.kt)("p",null,"A progress value that represents the animation progress between the start and end values. See ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/PatchEditor/Animations"},"Animation Basics")," for more information."),(0,r.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\uff0c\u8868\u793a\u5f00\u59cb\u503c\u548c\u7ed3\u675f\u503c\u4e4b\u95f4\u7684\u52a8\u753b\u8fdb\u5ea6\u3002"),(0,r.kt)("p",null,"\u67e5\u770b\u66f4\u591a\u8bf7\u53c2\u8003 Animation Basics\u3002"),(0,r.kt)("h3",{id:"onoff-\u5f00\u5173"},"On/Off \u5f00/\u5173"),(0,r.kt)("p",null,"A boolean that is true either: When the current position, rotation or scale of the gesture is closer to the end value than the start value. When the switch is flipped, turned on, or turned off with a pulse."),(0,r.kt)("p",null,"\u4e00\u4e2a\u4e3a\u771f\u7684\u5e03\u5c14\u503c:"),(0,r.kt)("p",null,"\u5f53\u624b\u52bf\u7684\u5f53\u524d\u4f4d\u7f6e\u3001\u65cb\u8f6c\u6216\u7f29\u653e\u66f4\u63a5\u8fd1\u7ed3\u675f\u503c\u800c\u4e0d\u662f\u5f00\u59cb\u503c\u65f6\u3002\u5f53\u5f00\u5173\u88ab\u70b9\u51fb\u3001\u6253\u5f00\u6216\u5173\u95ed\u65f6\uff0c\u4f1a\u6709\u4e00\u4e2a\u8109\u51b2\u3002"))}c.isMDXComponent=!0},47596:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pop-switch-63ad2c3a431d15bd606c094f59eda403.png"}}]);