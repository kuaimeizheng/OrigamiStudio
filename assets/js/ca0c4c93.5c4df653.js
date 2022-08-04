"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2035],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79414:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],u={sidebar_position:2},l="Smooth Value \u5e73\u6ed1\u503c",s={unversionedId:"documentation/Animation/Smooth Value",id:"documentation/Animation/Smooth Value",title:"Smooth Value \u5e73\u6ed1\u503c",description:"For advanced use only \u2014 use the Pop Animation or Classic Animation patch instead.",source:"@site/docs/documentation/Animation/Smooth Value.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Smooth Value",permalink:"/OrigamiStudio/docs/documentation/Animation/Smooth Value",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Smooth Value.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1659583634,formattedLastUpdatedAt:"2022\u5e748\u67084\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Repeating Animation \u91cd\u590d\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Repeating Animation"},next:{title:"Spring Animation \u5f39\u6027\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Spring Animation"}},c={},m=[{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Hysterisis \u6ede\u540e",id:"hysterisis-\u6ede\u540e",level:3},{value:"Reset \u590d\u4f4d",id:"reset-\u590d\u4f4d",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],p={toc:m};function d(e){var t=e.components,u=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smooth-value-\u5e73\u6ed1\u503c"},"Smooth Value \u5e73\u6ed1\u503c"),(0,o.kt)("p",null,"For advanced use only \u2014 use the Pop Animation or Classic Animation patch instead."),(0,o.kt)("p",null,"Smooth a value as it changes."),(0,o.kt)("p",null,"\u9ad8\u7ea7\u6a21\u5757\uff0c\u53ef\u7528Pop Animation### \u6216\xa0### Classic Animation### \u66ff\u4ee3\u3002"),(0,o.kt)("p",null,"\u5e73\u6ed1\u6539\u53d8\u4e2d\u7684\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(56146).Z,width:"1416",height:"254"})),(0,o.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,o.kt)("p",null,"A number to smooth."),(0,o.kt)("p",null,"\u5e73\u6ed1\u503c\u3002"),(0,o.kt)("h3",{id:"hysterisis-\u6ede\u540e"},"Hysterisis \u6ede\u540e"),(0,o.kt)("p",null,"A number from 0-1 that represents the rate at which to smooth the value, where the value in the next frame = (previous frame ",(0,o.kt)("em",{parentName:"p"}," hysterisis) + (current frame ")," (1 - hysterisis)."),(0,o.kt)("p",null,"\u4e00\u4e2a 0-1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u5e73\u6ed1\u503c\u7684\u901f\u7387\uff0c\u5176\u4e2d\u4e0b\u4e00\u5e27\u4e2d\u7684\u503c = (\u524d\u4e00\u5e27 ",(0,o.kt)("em",{parentName:"p"}," \u6ede\u540e) + (\u5f53\u524d\u5e27 ")," (1 - \u6ede\u540e)\u3002"),(0,o.kt)("h3",{id:"reset-\u590d\u4f4d"},"Reset \u590d\u4f4d"),(0,o.kt)("p",null,"A pulse that resets the value to the input value."),(0,o.kt)("p",null,"\u8ba9\u52a8\u753b\u8df3\u56de\u5f00\u59cb\u65f6\u3002"),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"Animated value"),(0,o.kt)("p",null,"\u8fdb\u5ea6\u503c"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")))}d.isMDXComponent=!0},56146:function(e,t,n){t.Z=n.p+"assets/images/smooth-value-47c566c206df8da3034615ca70ca2041.png"}}]);