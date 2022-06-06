"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3698],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16099:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={sidebar_position:2},u="Equals Exactly \u5b8c\u5168\u7b49\u4e8e",c={unversionedId:"Logic/Equals Exactly",id:"Logic/Equals Exactly",title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",description:"Check if two or more values are exactly the same as each other.",source:"@site/docs/Logic/Equals Exactly.md",sourceDirName:"Logic",slug:"/Logic/Equals Exactly",permalink:"/OrigamiStudio/docs/Logic/Equals Exactly",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Logic/Equals Exactly.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"And \u548c",permalink:"/OrigamiStudio/docs/Logic/And"},next:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/docs/Logic/Equals"}},p={},s=[{value:"Input",id:"input",level:3},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"equals-exactly-\u5b8c\u5168\u7b49\u4e8e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e"),(0,o.kt)("p",null,"Check if two or more values are exactly the same as each other."),(0,o.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u540c\u3002"),(0,o.kt)("p",null,"This is a convenience equivalent of using the (Equals)","[builtin.compare.equal Approx]"," patch with tolerance set to 0."),(0,o.kt)("p",null,"\u8fd9\u76f8\u5f53\u4e8e\u4f7f\u7528(Equals)","[builtin.compare.equal Approx]","(python \u8fd1\u4f3c\u6bd4\u8f83)\u6a21\u5757\uff0c\u7136\u540e\u516c\u5dee\u8bbe\u7f6e\u4e3a 0\u3002"),(0,o.kt)("p",null,"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."),(0,o.kt)("p",null,"\u53f3\u952e\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u63a5\u53e3\u53bb\u6bd4\u8f83\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u5982\uff1a\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(47297).Z,width:"1504",height:"226"})),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("p",null,"The base value."),(0,o.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,o.kt)("h3",{id:"input-1"},"Input"),(0,o.kt)("p",null,"The value to compare to the base."),(0,o.kt)("p",null,"\u548c\u57fa\u7840\u503c\u6bd4\u8f83\u7684\u503c"),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("p",null,"A boolean that is true if the values are exactly equal to each other."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u8f93\u5165\u7684\u503c\u5f7c\u6b64\u5b8c\u5168\u76f8\u7b49\uff0c\u5219\u4e3a \u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/And"},"And \u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Or"},"Or \u6216")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Not"},"Not \u975e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Logic/Equals"},"Equals \u7b49\u4e8e")))}m.isMDXComponent=!0},47297:function(e,t,r){t.Z=r.p+"assets/images/equals-exactly-78394816234ac21ef51257a167c47d31.png"}}]);