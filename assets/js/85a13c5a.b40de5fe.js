"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9050],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=i.createContext({}),c=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?i.createElement(f,o(o({ref:e},u),{},{components:n})):i.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95176:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_position:2},p="Point Unpack \u70b9\u89e3\u7ec4",c={unversionedId:"Utility/Point Unpack",id:"Utility/Point Unpack",title:"Point Unpack \u70b9\u89e3\u7ec4",description:"Turn a point with 2 dimensions (position, size, anchor, pivot) into its individual X and Y values.",source:"@site/docs/Utility/Point Unpack.md",sourceDirName:"Utility",slug:"/Utility/Point Unpack",permalink:"/OrigamiStudio/docs/Utility/Point Unpack",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Utility/Point Unpack.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Point 3D \u4e09\u7ef4\u70b9",permalink:"/OrigamiStudio/docs/Utility/Point 3D"},next:{title:"Point \u70b9",permalink:"/OrigamiStudio/docs/Utility/Point"}},u={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(t){var e=t.components,l=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"point-unpack-\u70b9\u89e3\u7ec4"},"Point Unpack \u70b9\u89e3\u7ec4"),(0,a.kt)("p",null,"Turn a point with 2 dimensions (position, size, anchor, pivot) into its individual X and Y values."),(0,a.kt)("p",null,"\u5c062\u7ef4\uff08\u4f4d\u7f6e\uff0c\u65cb\u8f6c\uff09\u7684\u70b9\u8f6c\u6362\u4e3a\u5355\u72ec\u7684X\u3001Y\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(5198).Z,width:"1344",height:"232"})),(0,a.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,a.kt)("p",null,"A point with 2 dimensions."),(0,a.kt)("p",null,"\u4e00\u4e2a 2 \u4e2a\u7ef4\u5ea6\u7684\u70b9\u3002"),(0,a.kt)("h3",{id:"x"},"X"),(0,a.kt)("p",null,"A number that represents the horizontal X value."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6c34\u5e73\u4f4d\u7f6e\u7684X\u503c\u3002"),(0,a.kt)("h3",{id:"y"},"Y"),(0,a.kt)("p",null,"A number that represents the vertical Y value."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u8ff0\u5782\u76f4\u4f4d\u7f6e\u7684Y\u503c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point"},"Point \u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point%203D%20Unpack"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}m.isMDXComponent=!0},5198:function(t,e,n){e.Z=n.p+"assets/images/point-unpack-1c33acf3bf0793427c1bc3c60e716ebf.png"}}]);