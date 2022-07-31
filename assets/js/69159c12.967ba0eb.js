"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4087],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return m}});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var u=r.createContext({}),c=function(t){var e=r.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(o),m=n,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return o?r.createElement(f,l(l({ref:e},p),{},{components:o})):r.createElement(f,l({ref:e},p))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},91460:function(t,e,o){o.r(e),o.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),l=["components"],i={sidebar_position:2},u="HSL Color HSL\u989c\u8272",c={unversionedId:"documentation/Color/HSL Color",id:"documentation/Color/HSL Color",title:"HSL Color HSL\u989c\u8272",description:"Create a color from HSL, and alpha values from 0 to 1.",source:"@site/docs/documentation/Color/HSL Color.md",sourceDirName:"documentation/Color",slug:"/documentation/Color/HSL Color",permalink:"/OrigamiStudio/docs/documentation/Color/HSL Color",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Color/HSL Color.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Color to RGB \u8f6c\u6362\u4e3a RGB \u989c\u8272",permalink:"/OrigamiStudio/docs/documentation/Color/Color to RGB"},next:{title:"Hex Color Hex \u989c\u8272",permalink:"/OrigamiStudio/docs/documentation/Color/Hex Color"}},p={},s=[{value:"Hue \u8272\u76f8",id:"hue-\u8272\u76f8",level:3},{value:"Saturation \u9971\u548c\u5ea6",id:"saturation-\u9971\u548c\u5ea6",level:3},{value:"Lightness \u660e\u5ea6",id:"lightness-\u660e\u5ea6",level:3},{value:"Alpha \u900f\u660e\u5ea6",id:"alpha-\u900f\u660e\u5ea6",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(t){var e=t.components,i=(0,n.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hsl-color-hsl\u989c\u8272"},"HSL Color HSL\u989c\u8272"),(0,a.kt)("p",null,"Create a color from HSL, and alpha values from 0 to 1."),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aHSL\u989c\u8272\uff0c\u7528 0\uff5e1 \u4e4b\u95f4\u7684\u6570\u5b57\u8868\u793a\u900f\u660e\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:o(75066).Z,width:"1500",height:"298"})),(0,a.kt)("h3",{id:"hue-\u8272\u76f8"},"Hue \u8272\u76f8"),(0,a.kt)("p",null,"A number from 0 to 1 that represents the hue of the color."),(0,a.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u8272\u76f8\u3002"),(0,a.kt)("h3",{id:"saturation-\u9971\u548c\u5ea6"},"Saturation \u9971\u548c\u5ea6"),(0,a.kt)("p",null,"A number from 0 to 1 that represents the saturation of the color."),(0,a.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u9971\u548c\u5ea6\u3002"),(0,a.kt)("h3",{id:"lightness-\u660e\u5ea6"},"Lightness \u660e\u5ea6"),(0,a.kt)("p",null,"A number from 0 to 1 that represents the lightness of the color."),(0,a.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u660e\u5ea6\u3002"),(0,a.kt)("h3",{id:"alpha-\u900f\u660e\u5ea6"},"Alpha \u900f\u660e\u5ea6"),(0,a.kt)("p",null,"A number from 0 to 1 that represents the opacity of the color."),(0,a.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u900f\u660e\u5ea6\u3002"),(0,a.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,a.kt)("p",null,"The color."),(0,a.kt)("p",null,"\u8f93\u51fa\u540e\u7684\u989c\u8272\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20Hex"},"Color to Hex \u8f6c\u6362\u4e3a Hex \u989c\u8272")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20RGB"},"Color to RGB \u8f6c\u6362\u4e3a RGB \u989c\u8272")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20HSL"},"Color to HSL \u8f6c\u6362\u4e3a HSL \u989c\u8272")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Hex%20Color"},"Hex Color Hex\u989c\u8272")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/RGB%20Color"},"RGB Color RGB\u989c\u8272")))}m.isMDXComponent=!0},75066:function(t,e,o){e.Z=o.p+"assets/images/hsl-color-eb66c22907d6513f3ec80e4aa56b69f8.png"}}]);