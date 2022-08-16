"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[90221],{3905:(o,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>m});var n=e(67294);function r(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}function a(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.push.apply(e,n)}return e}function i(o){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(o,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))}))}return o}function p(o,t){if(null==o)return{};var e,n,r=function(o,t){if(null==o)return{};var e,n,r={},a=Object.keys(o);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||(r[e]=o[e]);return r}(o,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(o,e)&&(r[e]=o[e])}return r}var u=n.createContext({}),l=function(o){var t=n.useContext(u),e=t;return o&&(e="function"==typeof o?o(t):i(i({},t),o)),e},c=function(o){var t=l(o.components);return n.createElement(u.Provider,{value:t},o.children)},d={inlineCode:"code",wrapper:function(o){var t=o.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(o,t){var e=o.components,r=o.mdxType,a=o.originalType,u=o.parentName,c=p(o,["components","mdxType","originalType","parentName"]),s=l(e),m=r,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return e?n.createElement(f,i(i({ref:t},c),{},{components:e})):n.createElement(f,i({ref:t},c))}));function m(o,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof o||r){var a=e.length,i=new Array(a);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=o,p.mdxType="string"==typeof o?o:r,i[1]=p;for(var l=2;l<a;l++)i[l]=e[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},92108:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=e(87462),r=(e(67294),e(3905));const a={sidebar_position:1},i="Loop \u5faa\u73af",p={unversionedId:"documentation/Loops/Loop",id:"documentation/Loops/Loop",title:"Loop \u5faa\u73af",description:"Create a loop of indices, ex: a count of 3 outputs a loop of [0, 1, 2]. Similar to a for loop in programming.",source:"@site/docs/documentation/Loops/Loop.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop",permalink:"/OrigamiStudio/docs/documentation/Loops/Loop",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660657655,formattedLastUpdatedAt:"2022\u5e748\u670816\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentionSidebar",previous:{title:"Loops \u5faa\u73af",permalink:"/OrigamiStudio/docs/category/loops-\u5faa\u73af"},next:{title:"Any \u4efb\u610f",permalink:"/OrigamiStudio/docs/documentation/Loops/Any"}},u={},l=[{value:"Count \u6570\u91cf",id:"count-\u6570\u91cf",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:l};function d(o){let{components:t,...a}=o;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,r.kt)("p",null,"Create a loop of indices, ex: a count of 3 outputs a loop of ","[0, 1, 2]",". Similar to a for loop in programming."),(0,r.kt)("p",null,"To learn more about loops, see the ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Loop"},"Introduction to Loops"),"."),(0,r.kt)("p",null,"\u5b9a\u4e49\u5faa\u73af\u6570\u91cf\uff0c\u4f8b\u5982\uff1aCount \u8f93\u5165 3 \u65f6\u8f93\u51fa\u4e00\u4e2a ","[ 0\uff0c1\uff0c2 ]"," \u5faa\u73af\u3002\u7c7b\u4f3c\u4e8e\u7f16\u7a0b\u4e2d\u5faa\u73af\u3002"),(0,r.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Loop"},"\u5faa\u73af\u7b80\u4ecb")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:e(46172).Z,width:"1070",height:"190"})),(0,r.kt)("h3",{id:"count-\u6570\u91cf"},"Count \u6570\u91cf"),(0,r.kt)("p",null,"A number that represents the number of indices in the loop."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u8ff0\u5faa\u73af\u4e2d\u76ee\u5f55\u7684\u6570\u91cf\u3002"),(0,r.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,r.kt)("p",null,"A loop of indices."),(0,r.kt)("p",null,"\u5faa\u73af\u540e\u7684\u76ee\u5f55\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Over%20Array"},"Loop Over Array \u6570\u7ec4\u904d\u5386")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20to%20Array"},"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Sum"},"Loop Sum \u5faa\u73af\u603b\u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Running%20Total"},"Running Total \u7d2f\u79ef\u603b\u8ba1")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")))}d.isMDXComponent=!0},46172:(o,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/loop-6b4c1800a0a242697546b249b4bee590.png"}}]);