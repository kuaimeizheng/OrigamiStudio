"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1592],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88887:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={sidebar_position:2},c="Text Replace \u6587\u672c\u66ff\u6362",u={unversionedId:"Text/Text Replace",id:"Text/Text Replace",title:"Text Replace \u6587\u672c\u66ff\u6362",description:"Find and replace all occurrences of text within a text string.",source:"@site/docs/Text/Text Replace.md",sourceDirName:"Text",slug:"/Text/Text Replace",permalink:"/OrigamiStudio/docs/Text/Text Replace",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Text/Text Replace.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Text Length \u6587\u672c\u957f\u77ed",permalink:"/OrigamiStudio/docs/Text/Text Length"},next:{title:"Text Size \u6587\u672c\u5927\u5c0f",permalink:"/OrigamiStudio/docs/Text/Text Size"}},p={},s=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Find \u67e5\u627e",id:"find-\u67e5\u627e",level:3},{value:"Replace \u66ff\u6362",id:"replace-\u66ff\u6362",level:3},{value:"Case Sensitive \u533a\u5206\u5927\u5c0f\u5199",id:"case-sensitive-\u533a\u5206\u5927\u5c0f\u5199",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:s};function f(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text-replace-\u6587\u672c\u66ff\u6362"},"Text Replace \u6587\u672c\u66ff\u6362"),(0,i.kt)("p",null,"Find and replace all occurrences of text within a text string."),(0,i.kt)("p",null,"\u67e5\u627e\u5e76\u66ff\u6362\u6587\u672c\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0\u7684\u6587\u672c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:r(88152).Z,width:"1154",height:"221"})),(0,i.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,i.kt)("p",null,"A text string to evaluate."),(0,i.kt)("p",null,"\u5f85\u5904\u7406\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"find-\u67e5\u627e"},"Find \u67e5\u627e"),(0,i.kt)("p",null,"A text string that may appear within the text."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u67e5\u627e\u662f\u5426\u51fa\u73b0\u5728\u6587\u672c\u4e2d\u3002"),(0,i.kt)("h3",{id:"replace-\u66ff\u6362"},"Replace \u66ff\u6362"),(0,i.kt)("p",null,"A text string that will replace all occurrences found within the text."),(0,i.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u66ff\u6362\u5728\u6587\u672c\u4e2d\u627e\u5230\u7684\u6240\u6709\u5339\u914d\u9879\u3002"),(0,i.kt)("h3",{id:"case-sensitive-\u533a\u5206\u5927\u5c0f\u5199"},"Case Sensitive \u533a\u5206\u5927\u5c0f\u5199"),(0,i.kt)("p",null,"A boolean that is true if the search is case sensitive."),(0,i.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5982\u679c\u641c\u7d22\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5219\u4e3a \u771f \u3002"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"The replaced text string."),(0,i.kt)("p",null,"\u66ff\u6362\u540e\u7684\u6587\u672c\u5b57\u7b26\u4e32"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Text/Text%20Starts%20With"},"Text Starts With \u6587\u672c\u5f00\u59cb")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Text/Text%20Ends%20With"},"Text Ends With \u6587\u672c\u7ed3\u5c3e")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}f.isMDXComponent=!0},88152:function(e,t,r){t.Z=r.p+"assets/images/text-replace-935062e3910e098555817a2111a7e42a.png"}}]);