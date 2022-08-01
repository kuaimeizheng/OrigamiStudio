"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6774],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],u={sidebar_position:2},l="Curve \u66f2\u7ebf",c={unversionedId:"documentation/Animation/Curve",id:"documentation/Animation/Curve",title:"Curve \u66f2\u7ebf",description:"Change the rate of a linear animation progress to a new animation curve.",source:"@site/docs/documentation/Animation/Curve.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Curve",permalink:"/OrigamiStudio/docs/documentation/Animation/Curve",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Curve.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659373767,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf",permalink:"/OrigamiStudio/docs/documentation/Animation/Cubic Bezier Curve"},next:{title:"Pop Animation \u6d41\u884c\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Pop Animation"}},s={},p=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Curve \u66f2\u7ebf",id:"curve-\u66f2\u7ebf-1",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:p};function d(e){var t=e.components,u=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"curve-\u66f2\u7ebf"},"Curve \u66f2\u7ebf"),(0,o.kt)("p",null,"Change the rate of a linear animation progress to a new animation curve."),(0,o.kt)("p",null,"\u5c06\u7ebf\u6027\u52a8\u753b\u7684\u8fdb\u5ea6\u66f4\u6539\u4e3a\u65b0\u7684\u52a8\u753b\u66f2\u7ebf\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(19249).Z,width:"1350",height:"228"})),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A number from 0-1 that represents the progress of the animation."),(0,o.kt)("h3",{id:"curve-\u66f2\u7ebf-1"},"Curve \u66f2\u7ebf"),(0,o.kt)("p",null,"The easing curve to animate with."),(0,o.kt)("p",null,"\u52a8\u753b\u7684\u7f13\u52a8\u66f2\u7ebf"),(0,o.kt)("p",null,"The options are:"),(0,o.kt)("p",null,"\u9009\u9879\u5305\u62ec\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Linear \u7ebf\u6027\uff0c\u5300\u901f"),(0,o.kt)("li",{parentName:"ol"},"Quadratic In, Out, In & Out \u4e8c\u6b21\u65b9\u7f13\u5165\uff0c\u7f13\u51fa\uff0c\u7f13\u5165\u7f13\u51fa"),(0,o.kt)("li",{parentName:"ol"},"Cubic In, Out, In & Out \u4e09\u6b21\u65b9\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa"),(0,o.kt)("li",{parentName:"ol"},"Exponential In, Out, In & Out \u6307\u6570\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa"),(0,o.kt)("li",{parentName:"ol"},"Sinusoidal In, Out, In & Out \u6b63\u5f26\u7f13\u5165\uff0c\u7f13\u5904\uff0c\u7f13\u5165\u7f13\u51fa")),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"The progress value derived from the new animation curve."),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\u8f93\u51fa\u65b0\u7684\u66f2\u7ebf\u52a8\u753b\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Transition"},"Transition \u8fc7\u6e21")))}d.isMDXComponent=!0},19249:function(e,t,n){t.Z=n.p+"assets/images/curve-bc8d0b5a2fd05281b22efde9223b330d.png"}}]);