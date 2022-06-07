"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[7923],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return f}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(o),f=n,m=s["".concat(l,".").concat(f)]||s[f]||c[f]||i;return o?r.createElement(m,a(a({ref:t},d),{},{components:o})):r.createElement(m,a({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},73020:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),a=["components"],p={sidebar_position:2},l="Loop Builder \u5faa\u73af\u751f\u6210\u5668",u={unversionedId:"Loops/Loop Builder",id:"Loops/Loop Builder",title:"Loop Builder \u5faa\u73af\u751f\u6210\u5668",description:"Create a loop of any value (ex: text, color, image).",source:"@site/docs/Loops/Loop Builder.md",sourceDirName:"Loops",slug:"/Loops/Loop Builder",permalink:"/OrigamiStudio/docs/Loops/Loop Builder",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Loops/Loop Builder.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Grid Layout \u7f51\u683c\u5e03\u5c40",permalink:"/OrigamiStudio/docs/Loops/Grid Layout"},next:{title:"Loop Count \u5faa\u73af\u6570\u91cf",permalink:"/OrigamiStudio/docs/Loops/Loop Count"}},d={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-2",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Loop \u8f93\u51fa",id:"loop-\u8f93\u51fa",level:3},{value:"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b",id:"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function f(e){var t=e.components,p=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loop-builder-\u5faa\u73af\u751f\u6210\u5668"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668"),(0,i.kt)("p",null,"Create a loop of any value (ex: text, color, image)."),(0,i.kt)("p",null,"Right-click the patch to change the type, or add additional values."),(0,i.kt)("p",null,"To learn more about loops, see the ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Concepts/Loop"},"Introduction to Loops"),"."),(0,i.kt)("p",null,"\u7ed9\u5faa\u73af\u4e2d\u7684\u5185\u5bb9\u521b\u5efa\u4e0d\u540c\u7684\u503c\uff08\u4f8b\u5982\uff1a\u540c\u4e00\u6837\u5f0f\u7684\u901a\u77e5\u5217\u8868\u91cc\u4e0d\u540c\u7684\u5934\u50cf\u3001\u56fe\u6807\uff09\u3002"),(0,i.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u7c7b\u578b\u6216\u8f93\u5165\u7aef\u53e3\u6570\u91cf\u3002\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Concepts/Loop"},"\u5faa\u73af\u7b80\u4ecb")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:o(50261).Z,width:"1394",height:"338"})),(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A value at index 0. By default, the value is a number."),(0,i.kt)("p",null,"\u7d22\u5f15 0 \u7684\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a\u6570\u503c\u3002"),(0,i.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A value at index 1. By default, the value is a number."),(0,i.kt)("p",null,"\u7d22\u5f15 1 \u7684\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a\u6570\u503c\u3002"),(0,i.kt)("h3",{id:"input-\u8f93\u5165-2"},"Input \u8f93\u5165"),(0,i.kt)("p",null,"A value at index 2. By default, the value is a number."),(0,i.kt)("p",null,"\u7d22\u5f15 2 \u7684\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a\u6570\u503c\u3002"),(0,i.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,i.kt)("p",null,"A loop of the indices for the input values. ex: ","[0, 1, 2]"),(0,i.kt)("p",null,"\u8f93\u5165\u53e3\u503c\u7684\u5faa\u73af\u7d22\u5f15\u3002\u4f8b\u5982\uff1a","[0\uff0c1\uff0c2]","\u3002"),(0,i.kt)("h3",{id:"loop-\u8f93\u51fa"},"Loop \u8f93\u51fa"),(0,i.kt)("p",null,"A loop of the input values. ex: ","[\u201capple\u201d, \u201ccarrot\u201d, \u201corange\u201d]"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5faa\u73af\u7684\u8f93\u5165\u503c\u3002\u4f8b\u5982\uff1a","[\u201c\u82f9\u679c\u201d\uff0c\u201c\u80e1\u841d\u535c\u201d\uff0c\u201c\u6a59\u5b50\u201d]"),(0,i.kt)("h3",{id:"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b"},"\u5faa\u73af\u652f\u6301\u7684\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:o(71309).Z,width:"156",height:"494"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop"},"Loop \u5faa\u73af")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Filter"},"Loop Filter \u5faa\u73af\u7b5b\u9009")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Over%20Array"},"Loop Over Array \u6570\u7ec4\u904d\u5386")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20to%20Array"},"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Sum"},"Loop Sum \u5faa\u73af\u603b\u548c")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Running%20Total"},"Running Total \u7d2f\u79ef\u603b\u8ba1")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Count"},"Loop Count \u5faa\u73af\u6570\u91cf")))}f.isMDXComponent=!0},71309:function(e,t,o){t.Z=o.p+"assets/images/loop-builder-item-9eca01373f91072bffa239b4bf6335b4.png"},50261:function(e,t,o){t.Z=o.p+"assets/images/loop-builder-abcb23ffe13546e445e584cc8dac2bfd.png"}}]);