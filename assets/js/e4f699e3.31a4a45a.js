"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[221],{3905:function(t,o,e){e.d(o,{Zo:function(){return l},kt:function(){return m}});var n=e(67294);function r(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function i(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?i(Object(e),!0).forEach((function(o){r(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function p(t,o){if(null==t)return{};var e,n,r=function(t,o){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],o.indexOf(e)>=0||(r[e]=t[e]);return r}(t,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=n.createContext({}),c=function(t){var o=n.useContext(u),e=o;return t&&(e="function"==typeof t?t(o):a(a({},o),t)),e},l=function(t){var o=c(t.components);return n.createElement(u.Provider,{value:o},t.children)},d={inlineCode:"code",wrapper:function(t){var o=t.children;return n.createElement(n.Fragment,{},o)}},s=n.forwardRef((function(t,o){var e=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),s=c(e),m=r,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return e?n.createElement(f,a(a({ref:o},l),{},{components:e})):n.createElement(f,a({ref:o},l))}));function m(t,o){var e=arguments,r=o&&o.mdxType;if("string"==typeof t||r){var i=e.length,a=new Array(i);a[0]=s;var p={};for(var u in o)hasOwnProperty.call(o,u)&&(p[u]=o[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,a[1]=p;for(var c=2;c<i;c++)a[c]=e[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},92108:function(t,o,e){e.r(o),e.d(o,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=e(87462),r=e(63366),i=(e(67294),e(3905)),a=["components"],p={sidebar_position:1},u="Loop \u5faa\u73af",c={unversionedId:"documentation/Loops/Loop",id:"documentation/Loops/Loop",title:"Loop \u5faa\u73af",description:"Create a loop of indices, ex: a count of 3 outputs a loop of [0, 1, 2]. Similar to a for loop in programming.",source:"@site/docs/documentation/Loops/Loop.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1659583634,formattedLastUpdatedAt:"2022\u5e748\u67084\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentionSidebar",previous:{title:"Loops \u5faa\u73af",permalink:"/OrigamiStudio/docs/category/loops-\u5faa\u73af"},next:{title:"Any \u4efb\u610f",permalink:"/OrigamiStudio/docs/documentation/Loops/Any"}},l={},d=[{value:"Count \u6570\u91cf",id:"count-\u6570\u91cf",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function m(t){var o=t.components,p=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,p,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,i.kt)("p",null,"Create a loop of indices, ex: a count of 3 outputs a loop of ","[0, 1, 2]",". Similar to a for loop in programming."),(0,i.kt)("p",null,"To learn more about loops, see the ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Loop"},"Introduction to Loops"),"."),(0,i.kt)("p",null,"\u5b9a\u4e49\u5faa\u73af\u6570\u91cf\uff0c\u4f8b\u5982\uff1aCount \u8f93\u5165 3 \u65f6\u8f93\u51fa\u4e00\u4e2a ","[ 0\uff0c1\uff0c2 ]"," \u5faa\u73af\u3002\u7c7b\u4f3c\u4e8e\u7f16\u7a0b\u4e2d\u5faa\u73af\u3002"),(0,i.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Loop"},"\u5faa\u73af\u7b80\u4ecb")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:e(46172).Z,width:"1070",height:"190"})),(0,i.kt)("h3",{id:"count-\u6570\u91cf"},"Count \u6570\u91cf"),(0,i.kt)("p",null,"A number that represents the number of indices in the loop."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u8ff0\u5faa\u73af\u4e2d\u76ee\u5f55\u7684\u6570\u91cf\u3002"),(0,i.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,i.kt)("p",null,"A loop of indices."),(0,i.kt)("p",null,"\u5faa\u73af\u540e\u7684\u76ee\u5f55\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Over%20Array"},"Loop Over Array \u6570\u7ec4\u904d\u5386")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20to%20Array"},"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Sum"},"Loop Sum \u5faa\u73af\u603b\u548c")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Running%20Total"},"Running Total \u7d2f\u79ef\u603b\u8ba1")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")))}m.isMDXComponent=!0},46172:function(t,o,e){o.Z=e.p+"assets/images/loop-6b4c1800a0a242697546b249b4bee590.png"}}]);