"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6427],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),s=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(m,l(l({ref:e},u),{},{components:n})):o.createElement(m,l({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34216:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={sidebar_position:2},c="Scrollaway \u6eda\u52a8\u8ddd\u79bb",s={unversionedId:"documention/Interaction/Scrollaway",id:"documention/Interaction/Scrollaway",title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",description:"Calculate the progress off a scrollaway navigation element.",source:"@site/docs/documention/Interaction/Scrollaway.md",sourceDirName:"documention/Interaction",slug:"/documention/Interaction/Scrollaway",permalink:"/OrigamiStudio/docs/documention/Interaction/Scrollaway",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documention/Interaction/Scrollaway.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657382430,formattedLastUpdatedAt:"2022\u5e747\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Scroll \u6eda\u52a8",permalink:"/OrigamiStudio/docs/documention/Interaction/Scroll"},next:{title:"Logic \u903b\u8f91",permalink:"/OrigamiStudio/docs/category/logic-\u903b\u8f91"}},u={},p=[{value:"Scroll Position \u6eda\u52a8\u4f4d\u7f6e",id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e",level:3},{value:"Scrollaway Offset \u6eda\u52a8\u504f\u79fb",id:"scrollaway-offset-\u6eda\u52a8\u504f\u79fb",level:3},{value:"Bottom Bound \u4e0b\u8fb9\u754c",id:"bottom-bound-\u4e0b\u8fb9\u754c",level:3},{value:"Top Bound \u4e0a\u8fb9\u754c",id:"top-bound-\u4e0a\u8fb9\u754c",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function f(t){var e=t.components,i=(0,r.Z)(t,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scrollaway-\u6eda\u52a8\u8ddd\u79bb"},"Scrollaway \u6eda\u52a8\u8ddd\u79bb"),(0,a.kt)("p",null,"Calculate the progress off a scrollaway navigation element."),(0,a.kt)("p",null,"\u8ba1\u7b97\u6eda\u52a8\u5bfc\u822a\u5143\u7d20\u7684\u8fdb\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(71149).Z,width:"1550",height:"364"})),(0,a.kt)("h3",{id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e"},"Scroll Position \u6eda\u52a8\u4f4d\u7f6e"),(0,a.kt)("p",null,"The current scroll position from a Scroll patch."),(0,a.kt)("p",null,"Scroll \u6eda\u52a8 \u6a21\u5757\u7684\u5f53\u524d\u6eda\u52a8\u4f4d\u7f6e\u3002"),(0,a.kt)("h3",{id:"scrollaway-offset-\u6eda\u52a8\u504f\u79fb"},"Scrollaway Offset \u6eda\u52a8\u504f\u79fb"),(0,a.kt)("p",null,"The offset the element should be scrolled away by."),(0,a.kt)("p",null,"\u5143\u7d20\u6eda\u52a8\u4f4d\u79fb\u7684\u504f\u79fb\u91cf\u3002"),(0,a.kt)("h3",{id:"bottom-bound-\u4e0b\u8fb9\u754c"},"Bottom Bound \u4e0b\u8fb9\u754c"),(0,a.kt)("p",null,"A number that represents the lowest bound of the Scroll (ex: -1500). Get this by scrolling the layer to the top and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u7684\u6700\u4f4e\u8fb9\u754c\uff08\u4f8b\u5982\uff1a-1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u9876\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,a.kt)("h3",{id:"top-bound-\u4e0a\u8fb9\u754c"},"Top Bound \u4e0a\u8fb9\u754c"),(0,a.kt)("p",null,"A number that represents the highest bound of the Scroll (ex: 1500). Get this by scrolling the layer to the bottom and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u6700\u9ad8\u8fb9\u754c\uff08\u4f8b\u5982\uff1a1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u5e95\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,a.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,a.kt)("p",null,"A number from 0-1 that represents the progress of the scrollaway. Connect to Transition patches to convert it to the position, scale, opacity or any other property."),(0,a.kt)("p",null,"\u4e00\u4e2a 0-1 \u7684\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u8fdb\u5ea6\uff0c\u8fde\u63a5\u5230 Transition \u6a21\u5757\u4ee5\u5c06\u5176\u8f6c\u6362\u4e3a\u4f4d\u7f6e\u3001\u6bd4\u4f8b\u3001\u4e0d\u900f\u660e\u5ea6\u6216\u5176\u4ed6\u5c5e\u6027\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Utility/Transition"},"Transition \u8fc7\u6e21")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Interaction/Scroll"},"Scroll \u6eda\u52a8")))}f.isMDXComponent=!0},71149:function(t,e,n){e.Z=n.p+"assets/images/scrollaway-fffb3538ce01d47d61a3f5d54783f913.png"}}]);