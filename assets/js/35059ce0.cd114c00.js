"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9658],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(o),m=n,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},16761:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=o(87462),n=o(63366),l=(o(67294),o(3905)),a=["components"],i={sidebar_position:2},u="Color to RGB \u8f6c\u6362\u4e3a RGB \u989c\u8272",c={unversionedId:"documentation/Color/Color to RGB",id:"documentation/Color/Color to RGB",title:"Color to RGB \u8f6c\u6362\u4e3a RGB \u989c\u8272",description:"Converts a color to RGBA values from 0 to 1.",source:"@site/docs/documentation/Color/Color to RGB.md",sourceDirName:"documentation/Color",slug:"/documentation/Color/Color to RGB",permalink:"/OrigamiStudio/docs/documentation/Color/Color to RGB",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Color/Color to RGB.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659373767,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Color to Hex \u8f6c\u6362\u4e3a Hex \u989c\u8272",permalink:"/OrigamiStudio/docs/documentation/Color/Color to Hex"},next:{title:"HSL Color HSL\u989c\u8272",permalink:"/OrigamiStudio/docs/documentation/Color/HSL Color"}},p={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Red \u7ea2\u8272",id:"red-\u7ea2\u8272",level:3},{value:"Green \u7eff\u8272",id:"green-\u7eff\u8272",level:3},{value:"Blue \u84dd\u8272",id:"blue-\u84dd\u8272",level:3},{value:"Alpha \u900f\u660e\u5ea6",id:"alpha-\u900f\u660e\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function m(e){var t=e.components,i=(0,n.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"color-to-rgb-\u8f6c\u6362\u4e3a-rgb-\u989c\u8272"},"Color to RGB \u8f6c\u6362\u4e3a RGB \u989c\u8272"),(0,l.kt)("p",null,"Converts a color to RGBA values from 0 to 1."),(0,l.kt)("p",null,"\u5c06\u989c\u8272\u7684\u503c\u4ece 0\uff5e1 \u8f6c\u6362\u4e3aRGBA\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:o(22768).Z,width:"1502",height:"288"})),(0,l.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,l.kt)("p",null,"A color to convert."),(0,l.kt)("p",null,"\u9700\u8981\u8f6c\u6362\u7684\u989c\u8272"),(0,l.kt)("h3",{id:"red-\u7ea2\u8272"},"Red \u7ea2\u8272"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the red value of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u7ea2\u8272\u7684\u8272\u503c\u3002"),(0,l.kt)("h3",{id:"green-\u7eff\u8272"},"Green \u7eff\u8272"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the green value of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u7eff\u8272\u7684\u8272\u503c\u3002"),(0,l.kt)("h3",{id:"blue-\u84dd\u8272"},"Blue \u84dd\u8272"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the blue value of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u84dd\u8272\u7684\u8272\u503c\u3002"),(0,l.kt)("h3",{id:"alpha-\u900f\u660e\u5ea6"},"Alpha \u900f\u660e\u5ea6"),(0,l.kt)("p",null,"A number from 0 to 1 that represents the opacity of the color."),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u989c\u8272\u7684\u900f\u660e\u5ea6\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20Hex"},"Color to Hex \u8f6c\u6362\u4e3a Hex \u989c\u8272")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Color%20to%20HSL"},"Color to HSL \u8f6c\u6362\u4e3a HSL \u989c\u8272")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/HSL%20Color"},"HSL Color HSL\u989c\u8272")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/Hex%20Color"},"Hex Color Hex\u989c\u8272")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Color/RGB%20Color"},"RGB Color RGB\u989c\u8272")))}m.isMDXComponent=!0},22768:function(e,t,o){t.Z=o.p+"assets/images/color-to-rgb-14b1952edc04ff1b6f91f9a9d9f24ef0.png"}}]);