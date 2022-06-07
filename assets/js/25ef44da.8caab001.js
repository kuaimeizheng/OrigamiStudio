"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3824],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=i.createContext({}),p=function(t){var e=i.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(a.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(n),f=r,h=s["".concat(a,".").concat(f)]||s[f]||d[f]||o;return n?i.createElement(h,l(l({ref:e},c),{},{components:n})):i.createElement(h,l({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:r,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56637:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],u={sidebar_position:2},a="Option Sender \u9009\u9879\u53d1\u9001\u5668",p={unversionedId:"Utility/Option Sender",id:"Utility/Option Sender",title:"Option Sender \u9009\u9879\u53d1\u9001\u5668",description:"Pick one of the outputs to send the value to. Often used with Option Switch to control which output to send the value to. Formerly known as Demultiplexer.",source:"@site/docs/Utility/Option Sender.md",sourceDirName:"Utility",slug:"/Utility/Option Sender",permalink:"/OrigamiStudio/docs/Utility/Option Sender",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Utility/Option Sender.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Option Picker \u9009\u9879\u9009\u62e9\u5668",permalink:"/OrigamiStudio/docs/Utility/Option Picker"},next:{title:"Option Switch \u9009\u9879\u5f00\u5173",permalink:"/OrigamiStudio/docs/Utility/Option Switch"}},c={},d=[{value:"Option \u9009\u9879",id:"option-\u9009\u9879",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Default \u9ed8\u8ba4",id:"default-\u9ed8\u8ba4",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function f(t){var e=t.components,u=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,i.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"option-sender-\u9009\u9879\u53d1\u9001\u5668"},"Option Sender \u9009\u9879\u53d1\u9001\u5668"),(0,o.kt)("p",null,"Pick one of the outputs to send the value to. Often used with Option Switch to control which output to send the value to. Formerly known as Demultiplexer."),(0,o.kt)("p",null,"\u628a\u503c\u53d1\u9001\u5230\u9009\u4e2d\u7684\u4e00\u4e2a\u8f93\u51fa\u53e3\u3002 \u901a\u5e38\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Switch"},"Option Switch")," \u4e00\u8d77\u4f7f\u7528\u6765\u63a7\u5236\u628a\u503c\u53d1\u9001\u54ea\u4e2a\u8f93\u51fa\u53e3\u3002"),(0,o.kt)("p",null,"Right-click to change the type (ex: color, boolean), or to add additional options."),(0,o.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u7c7b\u578b (\u5982\uff1a\u989c\u8272\u3001\u5e03\u5c14\u503c)\uff0c\u6216\u6dfb\u52a0\u5176\u5b83\u9009\u9879\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(72728).Z,width:"1418",height:"258"})),(0,o.kt)("h3",{id:"option-\u9009\u9879"},"Option \u9009\u9879"),(0,o.kt)("p",null,"An index (starting at 0) that represents the output to send the value to."),(0,o.kt)("p",null,"\u4e00\u4e2a\u7d22\u5f15\uff08\u4ece 0 \u5f00\u59cb\uff09\uff0c\u8868\u793a\u8981\u5c06\u503c\u53d1\u9001\u5230\u8f93\u51fa\u7aef\u53e3\u3002"),(0,o.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,o.kt)("p",null,"A value to be passed to the selected output."),(0,o.kt)("p",null,"\u4f20\u9012\u5230\u6240\u9009\u8f93\u51fa\u7aef\u53e3\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"default-\u9ed8\u8ba4"},"Default \u9ed8\u8ba4"),(0,o.kt)("p",null,"A value to be passed to the unselected outputs."),(0,o.kt)("p",null,"\u8981\u4f20\u9012\u5230\u672a\u9009\u62e9\u8f93\u51fa\u7aef\u53e3\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"If selected (option is 0), the value. Otherwise, the default."),(0,o.kt)("p",null,"\u5982\u679c\u9009\u62e9\uff08\u9009\u9879\u4e3a 0\uff09\uff0c\u5219\u8be5\u503c\u3002\u5426\u5219\u4e3a\u9ed8\u8ba4\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa-1"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"If selected (option is 1), the value. Otherwise, the default."),(0,o.kt)("p",null,"\u5982\u679c\u9009\u62e9\uff08\u9009\u9879\u4e3a 0\uff09\uff0c\u5219\u8be5\u503c\u3002\u5426\u5219\u4e3a\u9ed8\u8ba4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Picker"},"Option Picker \u9009\u9879\u9009\u62e9\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Option%20Equals"},"Option Equals \u9009\u9879\u76f8\u7b49")))}f.isMDXComponent=!0},72728:function(t,e,n){e.Z=n.p+"assets/images/option-sender-02ffbae26d1d5d022fc90d2665335128.png"}}]);