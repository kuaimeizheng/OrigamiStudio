"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[6484],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96249:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],u={sidebar_position:2},c="Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",l={unversionedId:"Animation/Bouncy Converter",id:"Animation/Bouncy Converter",title:"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668",description:"Convert Pop Animation values to spring tension and friction.",source:"@site/docs/Animation/Bouncy Converter.md",sourceDirName:"Animation",slug:"/Animation/Bouncy Converter",permalink:"/OrigamiStudio/docs/Animation/Bouncy Converter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Animation/Bouncy Converter.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Animation \u52a8\u753b",permalink:"/OrigamiStudio/docs/category/animation-\u52a8\u753b"},next:{title:"Classic Animation \u7ecf\u5178\u52a8\u753b",permalink:"/OrigamiStudio/docs/Animation/Classic Animation"}},p={},s=[{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:3},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:3},{value:"Friction \u5f20\u529b",id:"friction-\u5f20\u529b",level:3},{value:"Tension \u6469\u64e6\u529b",id:"tension-\u6469\u64e6\u529b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:s};function d(e){var n=e.components,u=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bouncy-converter-\u5f39\u6027\u8f6c\u6362\u5668"},"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668"),(0,o.kt)("p",null,"Convert Pop Animation values to spring tension and friction."),(0,o.kt)("p",null,"\u628a Pop Animation \u7684\u503c\u8f6c\u6362\u4e3a\u5f39\u7c27\u5f20\u529b\u548c\u6469\u64e6\u529b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:t(73840).Z,width:"1348",height:"216"})),(0,o.kt)("h3",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,o.kt)("p",null,"A number that represents bounciness from Pop Animation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u5f39\u6027\uff0c\u503c\u8d8a\u5927\u8d8a\u6709\u5f39\u6027\u3002"),(0,o.kt)("h3",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,o.kt)("p",null,"A number that represents speed of Pop Animation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a Pop Animation \u7684\u52a8\u753b\u901f\u5ea6\uff0c\u503c\u8d8a\u5927\u901f\u5ea6\u8d8a\u5feb\u3002"),(0,o.kt)("h3",{id:"friction-\u5f20\u529b"},"Friction \u5f20\u529b"),(0,o.kt)("p",null,"A number that represents friction."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5f20\u529b\u3002"),(0,o.kt)("h3",{id:"tension-\u6469\u64e6\u529b"},"Tension \u6469\u64e6\u529b"),(0,o.kt)("p",null,"A number that represents spring tension."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6469\u64e6\u529b\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Spring%20Converter"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668")))}d.isMDXComponent=!0},73840:function(e,n,t){n.Z=t.p+"assets/images/bouncy-converter-28f1877eb4e1ce2f0005f4a7f5db7265.png"}}]);