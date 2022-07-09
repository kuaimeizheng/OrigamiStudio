"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4936],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={sidebar_position:2},l="Equals Exactly \u5b8c\u5168\u7b49\u4e8e",c={unversionedId:"documention/Logic/Equals Exactly",id:"documention/Logic/Equals Exactly",title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",description:"Check if two or more values are exactly the same as each other.",source:"@site/docs/documention/Logic/Equals Exactly.md",sourceDirName:"documention/Logic",slug:"/documention/Logic/Equals Exactly",permalink:"/OrigamiStudio/docs/documention/Logic/Equals Exactly",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documention/Logic/Equals Exactly.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657386466,formattedLastUpdatedAt:"2022\u5e747\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"And \u548c",permalink:"/OrigamiStudio/docs/documention/Logic/And"},next:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/docs/documention/Logic/Equals"}},p={},s=[{value:"Input",id:"input",level:3},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(e){var t=e.components,u=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"equals-exactly-\u5b8c\u5168\u7b49\u4e8e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e"),(0,a.kt)("p",null,"Check if two or more values are exactly the same as each other."),(0,a.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u540c\u3002"),(0,a.kt)("p",null,"This is a convenience equivalent of using the (Equals)","[builtin.compare.equal Approx]"," patch with tolerance set to 0."),(0,a.kt)("p",null,"\u8fd9\u76f8\u5f53\u4e8e\u4f7f\u7528(Equals)","[builtin.compare.equal Approx]","(python \u8fd1\u4f3c\u6bd4\u8f83)\u6a21\u5757\uff0c\u7136\u540e\u516c\u5dee\u8bbe\u7f6e\u4e3a 0\u3002"),(0,a.kt)("p",null,"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."),(0,a.kt)("p",null,"\u53f3\u952e\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u63a5\u53e3\u53bb\u6bd4\u8f83\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u5982\uff1a\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(47297).Z,width:"1504",height:"226"})),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("p",null,"The base value."),(0,a.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,a.kt)("h3",{id:"input-1"},"Input"),(0,a.kt)("p",null,"The value to compare to the base."),(0,a.kt)("p",null,"\u548c\u57fa\u7840\u503c\u6bd4\u8f83\u7684\u503c"),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("p",null,"A boolean that is true if the values are exactly equal to each other."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u8f93\u5165\u7684\u503c\u5f7c\u6b64\u5b8c\u5168\u76f8\u7b49\uff0c\u5219\u4e3a \u771f\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/And"},"And \u548c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/Or"},"Or \u6216")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/Not"},"Not \u975e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/Greater%20Than%20or%20Equal"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Logic/Equals"},"Equals \u7b49\u4e8e")))}m.isMDXComponent=!0},47297:function(e,t,n){t.Z=n.p+"assets/images/equals-exactly-78394816234ac21ef51257a167c47d31.png"}}]);