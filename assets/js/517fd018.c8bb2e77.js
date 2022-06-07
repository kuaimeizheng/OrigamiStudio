"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1488],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?i.createElement(f,o(o({ref:e},u),{},{components:n})):i.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76402:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],p={sidebar_position:2},l="Point 3D Unpack 3D\u70b9\u89e3\u7ec4",c={unversionedId:"Utility/Point 3D Unpack",id:"Utility/Point 3D Unpack",title:"Point 3D Unpack 3D\u70b9\u89e3\u7ec4",description:"Turn a point with 2 dimensions (position, rotation) into its individual X, Y, and Z values.",source:"@site/docs/Utility/Point 3D Unpack.md",sourceDirName:"Utility",slug:"/Utility/Point 3D Unpack",permalink:"/OrigamiStudio/docs/Utility/Point 3D Unpack",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Utility/Point 3D Unpack.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Option Switch \u9009\u9879\u5f00\u5173",permalink:"/OrigamiStudio/docs/Utility/Option Switch"},next:{title:"Point 3D \u4e09\u7ef4\u70b9",permalink:"/OrigamiStudio/docs/Utility/Point 3D"}},u={},s=[{value:"Input",id:"input",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(t){var e=t.components,p=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"point-3d-unpack-3d\u70b9\u89e3\u7ec4"},"Point 3D Unpack 3D\u70b9\u89e3\u7ec4"),(0,a.kt)("p",null,"Turn a point with 2 dimensions (position, rotation) into its individual X, Y, and Z values."),(0,a.kt)("p",null,"\u5c063\u7ef4\uff08\u4f4d\u7f6e\uff0c\u65cb\u8f6c\uff09\u7684\u70b9\u8f6c\u6362\u4e3a\u5355\u72ec\u7684X\u3001Y\u3001Z\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(26529).Z,width:"1302",height:"282"})),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("p",null,"A point with 3 dimensions."),(0,a.kt)("p",null,"\u4e00\u4e2a 3 \u4e2a\u7ef4\u5ea6\u7684\u70b9\u3002"),(0,a.kt)("h3",{id:"x"},"X"),(0,a.kt)("p",null,"A number that represents the X value, which can represent a horizontal position or pitch rotation."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6c34\u5e73\u4f4d\u7f6e\u6216\u4fef\u4ef0\u65cb\u8f6c\u7684X\u503c\u3002"),(0,a.kt)("h3",{id:"y"},"Y"),(0,a.kt)("p",null,"A number that represents the Y value, which can represent a vertical position or yaw rotation."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u5782\u76f4\u4f4d\u7f6e\u6216\u504f\u822a\u65cb\u8f6c\u7684Y\u503c\u3002"),(0,a.kt)("h3",{id:"z"},"Z"),(0,a.kt)("p",null,"A number that represents the Z value, which can represent a depth position or roll rotation."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6df1\u5ea6\u4f4d\u7f6e\u6216\u6eda\u52a8\u65cb\u8f6c\u7684Z\u503c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point"},"Point \u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point%20Unpack"},"Point Unpack \u70b9\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Vec4%20Unpack"},"Vec4 Unpack \u56db\u7ef4\u89e3\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Spacing"},"Spacing \u95f4\u8ddd")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Spacing%20Unpack"},"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4")))}m.isMDXComponent=!0},26529:function(t,e,n){e.Z=n.p+"assets/images/point-3d-unpack-4f93b3bcc09a8c1b420c8254b5e971a0.png"}}]);