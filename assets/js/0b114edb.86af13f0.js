"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1334],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4755:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={sidebar_position:2},l="Curve \u66f2\u7ebf",c={unversionedId:"Animation/Curve",id:"Animation/Curve",title:"Curve \u66f2\u7ebf",description:"Change the rate of a linear animation progress to a new animation curve.",source:"@site/docs/Animation/Curve.md",sourceDirName:"Animation",slug:"/Animation/Curve",permalink:"/OrigamiStudio/docs/Animation/Curve",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Animation/Curve.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf",permalink:"/OrigamiStudio/docs/Animation/Cubic Bezier Curve"},next:{title:"Pop Animation \u6d41\u884c\u52a8\u753b",permalink:"/OrigamiStudio/docs/Animation/Pop Animation"}},s={},p=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf-1",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:p};function d(e){var t=e.components,u=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,o.kt)("p",null,"Change the rate of a linear animation progress to a new animation curve."),(0,o.kt)("p",null,"\u5c06\u7ebf\u6027\u52a8\u753b\u7684\u8fdb\u5ea6\u66f4\u6539\u4e3a\u65b0\u7684\u52a8\u753b\u66f2\u7ebf\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(9249).Z,width:"1350",height:"228"})),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A number from 0-1 that represents the progress of the animation."),(0,o.kt)("h3",{id:"curve-\u66f2\u7ebf-1"},"Curve \u66f2\u7ebf"),(0,o.kt)("p",null,"The easing curve to animate with."),(0,o.kt)("p",null,"\u52a8\u753b\u7684\u7f13\u52a8\u66f2\u7ebf"),(0,o.kt)("p",null,"The options are:"),(0,o.kt)("p",null,"\u9009\u9879\u5305\u62ec\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Linear \u7ebf\u6027\uff0c\u5300\u901f"),(0,o.kt)("li",{parentName:"ol"},"Quadratic In, Out, In & Out \u4e8c\u6b21\u65b9\u7f13\u5165\uff0c\u7f13\u51fa\uff0c\u7f13\u5165\u7f13\u51fa"),(0,o.kt)("li",{parentName:"ol"},"Cubic In, Out, In & Out \u4e09\u6b21\u65b9\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa"),(0,o.kt)("li",{parentName:"ol"},"Exponential In, Out, In & Out \u6307\u6570\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa"),(0,o.kt)("li",{parentName:"ol"},"Sinusoidal In, Out, In & Out \u6b63\u5f26\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa")),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"The progress value derived from the new animation curve."),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\u8f93\u51fa\u65b0\u7684\u66f2\u7ebf\u52a8\u753b\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Transition"},"Transition \u8fc7\u6e21")))}d.isMDXComponent=!0},9249:function(e,t,r){t.Z=r.p+"assets/images/curve-bc8d0b5a2fd05281b22efde9223b330d.png"}}]);