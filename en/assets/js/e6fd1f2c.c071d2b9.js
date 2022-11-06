"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[40248],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(o),m=r,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},12143:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},i="Loop \u5faa\u73af",p={unversionedId:"documentation/Loops/Loop",id:"documentation/Loops/Loop",title:"Loop \u5faa\u73af",description:"Create a loop of indices, ex: a count of 3 outputs a loop of [0, 1, 2]. Similar to a for loop in programming.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Loops/Loop.md",sourceDirName:"documentation/Loops",slug:"/documentation/Loops/Loop",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Loop",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Loops/Loop.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loops \u5faa\u73af",permalink:"/OrigamiStudio/en/docs/category/loops-\u5faa\u73af"},next:{title:"Any \u4efb\u610f",permalink:"/OrigamiStudio/en/docs/documentation/Loops/Any"}},u={},l=[{value:"Count \u6570\u91cf",id:"count-\u6570\u91cf",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,r.kt)("p",null,"Create a loop of indices, ex: a count of 3 outputs a loop of ","[0, 1, 2]",". Similar to a for loop in programming."),(0,r.kt)("p",null,"To learn more about loops, see the ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Loop"},"Introduction to Loops"),"."),(0,r.kt)("p",null,"\u5b9a\u4e49\u5faa\u73af\u6570\u91cf\uff0c\u4f8b\u5982\uff1aCount \u8f93\u5165 3 \u65f6\u8f93\u51fa\u4e00\u4e2a ","[ 0\uff0c1\uff0c2 ]"," \u5faa\u73af\u3002\u7c7b\u4f3c\u4e8e\u7f16\u7a0b\u4e2d\u5faa\u73af\u3002"),(0,r.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Loop"},"\u5faa\u73af\u7b80\u4ecb")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:o(46172).Z,width:"1070",height:"190"})),(0,r.kt)("h3",{id:"count-\u6570\u91cf"},"Count \u6570\u91cf"),(0,r.kt)("p",null,"A number that represents the number of indices in the loop."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u8ff0\u5faa\u73af\u4e2d\u76ee\u5f55\u7684\u6570\u91cf\u3002"),(0,r.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,r.kt)("p",null,"A loop of indices."),(0,r.kt)("p",null,"\u5faa\u73af\u540e\u7684\u76ee\u5f55\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Over%20Array"},"Loop Over Array \u6570\u7ec4\u904d\u5386")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20to%20Array"},"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Sum"},"Loop Sum \u5faa\u73af\u603b\u548c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Running%20Total"},"Running Total \u7d2f\u79ef\u603b\u8ba1")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")))}d.isMDXComponent=!0},46172:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/loop-6b4c1800a0a242697546b249b4bee590.png"}}]);