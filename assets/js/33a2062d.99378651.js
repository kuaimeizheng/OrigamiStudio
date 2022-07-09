"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6208],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=i.createContext({}),p=function(t){var e=i.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(a.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||o;return n?i.createElement(f,l(l({ref:e},c),{},{components:n})):i.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:r,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83102:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],u={sidebar_position:2},a="Clip \u88c1\u526a",p={unversionedId:"documention/Utility/Clip",id:"documention/Utility/Clip",title:"Clip \u88c1\u526a",description:"Clip a number so that it does not exceed the specified bounds.",source:"@site/docs/documention/Utility/Clip.md",sourceDirName:"documention/Utility",slug:"/documention/Utility/Clip",permalink:"/OrigamiStudio/docs/documention/Utility/Clip",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documention/Utility/Clip.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657386466,formattedLastUpdatedAt:"2022\u5e747\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Arc Transition \u5f27\u5f62\u8fc7\u6e21",permalink:"/OrigamiStudio/docs/documention/Utility/Arc Transition"},next:{title:"Comment \u6ce8\u91ca",permalink:"/OrigamiStudio/docs/documention/Utility/Comment"}},c={},s=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Min \u6700\u5c0f\u503c",id:"min-\u6700\u5c0f\u503c",level:3},{value:"Max \u6700\u5927\u503c",id:"max-\u6700\u5927\u503c",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(t){var e=t.components,u=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,i.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clip-\u88c1\u526a"},"Clip \u88c1\u526a"),(0,o.kt)("p",null,"Clip a number so that it does not exceed the specified bounds."),(0,o.kt)("p",null,"\u88c1\u526a\u4e00\u4e2a\u6570\u503c\uff0c\u4f7f\u5176\u4e0d\u8d85\u8fc7\u6307\u5b9a\u7684\u8303\u56f4\u3002"),(0,o.kt)("p",null,"For example, if an input value is 1.5, but the Max bound is set to 1, the output value will be clipped to 1."),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8f93\u5165\u503c\u4e3a 1.5\u3002\u4f46\u6700\u5927\u8303\u56f4\u8bbe\u7f6e\u4e3a 1\uff0c\u5219\u8f93\u51fa\u503c\u5c06\u88ab\u88c1\u526a\u4e3a 1."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(82448).Z,width:"1374",height:"254"})),(0,o.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,o.kt)("p",null,"A number to clip."),(0,o.kt)("p",null,"\u8981\u88c1\u526a\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"min-\u6700\u5c0f\u503c"},"Min \u6700\u5c0f\u503c"),(0,o.kt)("p",null,"The lowest number to allow. The output value must be greater than or equal to this number."),(0,o.kt)("p",null,"\u5141\u8bb8\u7684\u6700\u5c0f\u6570\u503c\u3002"),(0,o.kt)("p",null,"\u8f93\u51fa\u503c\u5fc5\u987b\u5927\u4e8e\u6216\u7b49\u4e8e\u6b64\u6570\u503c\u3002"),(0,o.kt)("h3",{id:"max-\u6700\u5927\u503c"},"Max \u6700\u5927\u503c"),(0,o.kt)("p",null,"The highest number to allow. The output value must be lower than or equal to this number."),(0,o.kt)("p",null,"\u5141\u8bb8\u7684\u6700\u5927\u6570\u503c\u3002"),(0,o.kt)("p",null,"\u8f93\u51fa\u503c\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6b64\u6570\u503c\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The clipped value."),(0,o.kt)("p",null,"\u88c1\u526a\u8fc7\u7684\u503c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Utility/Transition"},"Transition \u8fc7\u6e21")))}m.isMDXComponent=!0},82448:function(t,e,n){e.Z=n.p+"assets/images/clip-68043e45afb3630499270d579cbd7286.png"}}]);