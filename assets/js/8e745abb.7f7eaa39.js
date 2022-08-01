"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3505],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={sidebar_position:2},l="Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",c={unversionedId:"documentation/Logic/Greater Than or Equal",id:"documentation/Logic/Greater Than or Equal",title:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",description:"Check if a value is greater than or equal to another.",source:"@site/docs/documentation/Logic/Greater Than or Equal.md",sourceDirName:"documentation/Logic",slug:"/documentation/Logic/Greater Than or Equal",permalink:"/OrigamiStudio/docs/documentation/Logic/Greater Than or Equal",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Logic/Greater Than or Equal.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659373767,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Equals"},next:{title:"Greater Than \u5927\u4e8e",permalink:"/OrigamiStudio/docs/documentation/Logic/Greater Than"}},p={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(e){var t=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"greater-than-or-equal-\u5927\u4e8e\u7b49\u4e8e"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e"),(0,o.kt)("p",null,"Check if a value is greater than or equal to another."),(0,o.kt)("p",null,"\u68c0\u67e5\u503c\u662f\u5426\u5927\u4e8e\u6216\u7b49\u4e8e\u53e6\u4e00\u4e2a\u503c\u3002"),(0,o.kt)("p",null,"Each value is compared to the next one in order, and results are combined in one output. For example, 3 >= 2 >= 2 is true, while 4 >= 4 >= 10 is false."),(0,o.kt)("p",null,"\u6bcf\u4e2a\u503c\u6309\u987a\u5e8f\u4e0e\u4e0b\u4e00\u4e2a\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u7ed3\u679c\u5408\u5e76\u5728\u4e00\u4e2a\u8f93\u51fa\u53e3\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c3 > \u6216 = 2 > \u6216 = 2\u4e3a\u771f\uff0c\u800c 4 > \u6216 = 4 > \u6216 = 10\u4e3a\u5047\u3002"),(0,o.kt)("p",null,"You can right-click to add more values to compare (will only output 1 if every value is greater or equal to the subsequent one) or change the type."),(0,o.kt)("p",null,"\u53f3\u952e\u6dfb\u52a0\u66f4\u591a\u503c\u8fdb\u884c\u6bd4\u8f83\uff08\u5982\u679c\u6bcf\u4e2a\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u53ea\u8f93\u51fa1\u4e2a\uff09\uff0c\u4e5f\u53ef\u4ee5\u66f4\u6539\u7c7b\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(40410).Z,width:"1502",height:"228"})),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The base value."),(0,o.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The value to compare to the base."),(0,o.kt)("p",null,"\u548c\u57fa\u7840\u503c\u505a\u6bd4\u8f83\u7684\u503c\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"A boolean that is true if the base value is greater than or equal to the subsequent values."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u57fa\u7840\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/And"},"And \u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Or"},"Or \u6216")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Not"},"Not \u975e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals%20Exactly"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Greater%20Than"},"Greater Than \u5927\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than"},"Less Than \u5c0f\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Less%20Than%20or%20Equal"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Logic/Equals"},"Equals \u7b49\u4e8e")))}m.isMDXComponent=!0},40410:function(e,t,n){t.Z=n.p+"assets/images/greater-than-or-equal-ab5a1b381c4b388746b308867b9f40ad.png"}}]);