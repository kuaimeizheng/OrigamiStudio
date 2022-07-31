"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[365],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(h,i(i({ref:e},c),{},{components:n})):r.createElement(h,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11654:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={sidebar_position:2},l="Max \u6700\u5927\u503c",p={unversionedId:"documentation/Math/Max",id:"documentation/Math/Max",title:"Max \u6700\u5927\u503c",description:"Compare two or more values and output the largest one. Although the patch\u2019s default type is number, it can be used to compare position, point, color and index values as well.",source:"@site/docs/documentation/Math/Max.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Max",permalink:"/OrigamiStudio/docs/documentation/Math/Max",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Max.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Math Expression \u6570\u5b66\u8868\u8fbe\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Math/Math Expression"},next:{title:"Min \u6700\u5c0f\u503c",permalink:"/OrigamiStudio/docs/documentation/Math/Min"}},c={},d=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:d};function m(t){var e=t.components,u=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"max-\u6700\u5927\u503c"},"Max \u6700\u5927\u503c"),(0,o.kt)("p",null,"Compare two or more values and output the largest one. Although the patch\u2019s default type is number, it can be used to compare position, point, color and index values as well."),(0,o.kt)("p",null,"\u6bd4\u8f83\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u5e76\u8f93\u51fa\u6700\u5927\u503c\u3002\u867d\u7136\u6a21\u5757\u7684\u9ed8\u8ba4\u7c7b\u578b\u662f\u6570\u5b57\uff0c\u4f46\u5b83\u4e5f\u53ef\u4ee5\u7528\u4e8e\u6bd4\u8f83\u4f4d\u7f6e\uff0c\u70b9\uff0c\u989c\u8272\u548c\u7d22\u5f15\u503c\u3002"),(0,o.kt)("p",null,"Right-click to add more values, or change the type (ex: number, position, rotation)."),(0,o.kt)("p",null,"\u6bd4\u8f83\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u5e76\u8f93\u51fa\u6700\u5927\u503c\u3002\u867d\u7136\u6a21\u5757\u7684\u9ed8\u8ba4\u7c7b\u578b\u662f\u6570\u5b57\uff0c\u4f46\u5b83\u4e5f\u53ef\u4ee5\u7528\u4e8e\u6bd4\u8f83\u4f4d\u7f6e\uff0c\u70b9\uff0c\u989c\u8272\u548c\u7d22\u5f15\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(81332).Z,width:"1498",height:"232"})),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A value to compare to other input values. By default, the value is a number."),(0,o.kt)("p",null,"\u4e0e\u5176\u4ed6 Input \u8f93\u5165\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A value to compare to other input values. By default, the value is a number."),(0,o.kt)("p",null,"\u4e0e\u5176\u4ed6 Input \u8f93\u5165\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u503c\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The largest of the input values."),(0,o.kt)("p",null,"\u8f93\u51fa\u6700\u5927\u7684\u503c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/+"},"+ \u52a0")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/-"},"\u2212 \u51cf")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/x"},"x \u4e58")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/%C3%B7"},"\xf7 \u9664")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Round"},"Round \u56db\u820d\u4e94\u5165")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Min"},"Min \u6700\u5c0f\u503c")))}m.isMDXComponent=!0},81332:function(t,e,n){e.Z=n.p+"assets/images/max-5edb9335b652a863d65d93b19a3063e0.png"}}]);