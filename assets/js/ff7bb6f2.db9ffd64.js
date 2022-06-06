"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3968],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},l=Object.keys(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)r=l[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=o.createContext({}),c=function(t){var e=o.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return r?o.createElement(m,a(a({ref:e},p),{},{components:r})):o.createElement(m,a({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7526:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var o=r(7462),n=r(3366),l=(r(7294),r(3905)),a=["components"],i={sidebar_position:2},u="Color to HSL \u8f6c\u6362\u4e3a HSL \u989c\u8272",c={unversionedId:"Color/Color to HSL",id:"Color/Color to HSL",title:"Color to HSL \u8f6c\u6362\u4e3a HSL \u989c\u8272",description:"Convert a color to HSL and alpha values from 0 to 1.",source:"@site/docs/Color/Color to HSL.md",sourceDirName:"Color",slug:"/Color/Color to HSL",permalink:"/OrigamiStudio/docs/Color/Color to HSL",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Color/Color to HSL.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654509971,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Color \u989c\u8272",permalink:"/OrigamiStudio/docs/category/color-\u989c\u8272"},next:{title:"Color to Hex \u8f6c\u6362\u4e3a Hex \u989c\u8272",permalink:"/OrigamiStudio/docs/Color/Color to Hex"}},p={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Hue \u8272\u76f8",id:"hue-\u8272\u76f8",level:3},{value:"Saturation \u9971\u548c\u5ea6",id:"saturation-\u9971\u548c\u5ea6",level:3},{value:"Lightness \u660e\u5ea6",id:"lightness-\u660e\u5ea6",level:3},{value:"Alpha \u900f\u660e\u5ea6",id:"alpha-\u900f\u660e\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function f(t){var e=t.components,i=(0,n.Z)(t,a);return(0,l.kt)("wrapper",(0,o.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"color-to-hsl-\u8f6c\u6362\u4e3a-hsl-\u989c\u8272"},"Color to HSL \u8f6c\u6362\u4e3a HSL \u989c\u8272"),(0,l.kt)("p",null,"Convert a color to HSL and alpha values from 0 to 1."),(0,l.kt)("p",null,"\u5c06\u989c\u8272\u8f6c\u6362\u4e3aHSL\u989c\u8272\uff0c\u5e76\u5c06\u900f\u660e\u5ea6\u4ece 0 \u8f6c\u6362\u5230 1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:r(2356).Z,width:"1496",height:"294"})),(0,l.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"The color to convert."),(0,l.kt)("p",null,"\u9700\u8981\u8f6c\u6362\u7684\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"hue-\u8272\u76f8"},"Hue \u8272\u76f8"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the hue of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u8272\u76f8\u3002"),(0,l.kt)("h3",{id:"saturation-\u9971\u548c\u5ea6"},"Saturation \u9971\u548c\u5ea6"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the saturation of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u9971\u548c\u5ea6\u3002"),(0,l.kt)("h3",{id:"lightness-\u660e\u5ea6"},"Lightness \u660e\u5ea6"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the lightness of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u660e\u5ea6\u3002"),(0,l.kt)("h3",{id:"alpha-\u900f\u660e\u5ea6"},"Alpha \u900f\u660e\u5ea6"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the opacity of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u900f\u660e\u5ea6\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Color/Color%20to%20Hex"},"Color to Hex \u8f6c\u6362\u4e3a Hex \u989c\u8272")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Color/Color%20to%20RGB"},"Color to RGB \u8f6c\u6362\u4e3a RGB \u989c\u8272")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Color/HSL%20Color"},"HSL Color HSL\u8272\u5f69")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Color/Hex%20Color"},"Hex Color Hex\u8272\u5f69")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Color/RGB%20Color"},"RGB Color RGB\u8272\u5f69")))}f.isMDXComponent=!0},2356:function(t,e,r){e.Z=r.p+"assets/images/color-to-hsl-cbc67c3a9ade0020660435d163297fd5.png"}}]);