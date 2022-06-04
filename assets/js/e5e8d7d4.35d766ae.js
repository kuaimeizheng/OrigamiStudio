"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3596],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={sidebar_position:2},s="Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf",l={unversionedId:"Animation/Cubic Bezier Curve",id:"Animation/Cubic Bezier Curve",title:"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf",description:"Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized, meaning the start point of the curve is always (0,0) and the end is always (1,1).",source:"@site/docs/Animation/Cubic Bezier Curve.md",sourceDirName:"Animation",slug:"/Animation/Cubic Bezier Curve",permalink:"/OrigamiStudio/docs/Animation/Cubic Bezier Curve",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Animation/Cubic Bezier Curve.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cubic Bezier Animation \u4e09\u6b21\u8d1d\u585e\u5c14\u52a8\u753b",permalink:"/OrigamiStudio/docs/Animation/Cubic Bezier Animation"},next:{title:"Curve \u66f2\u7ebf",permalink:"/OrigamiStudio/docs/Animation/Curve"}},c={},p=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-2",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-3",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"2D Progress 2D\u8fdb\u5ea6",id:"2d-progress-2d\u8fdb\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cubic-bezier-curve-\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"},"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf"),(0,o.kt)("p",null,"Allows you to define custom animation curves by specifying 2 control points. The cubic bezier curve is normalized, meaning the start point of the curve is always (0,0) and the end is always (1,1)."),(0,o.kt)("p",null,"\u5141\u8bb8\u60a8\u901a\u8fc7\u6307\u5b9a 2 \u4e2a\u63a7\u5236\u70b9\u6765\u5b9a\u4e49\u81ea\u5b9a\u4e49\u52a8\u753b\u66f2\u7ebf\u3002\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u662f\u6807\u51c6\u5316\u7684\uff0c\u8fd9\u610f\u5473\u7740\u66f2\u7ebf\u7684\u8d77\u70b9\u59cb\u7ec8\u4e3a (0,0)\uff0c\u7ec8\u70b9\u59cb\u7ec8\u4e3a (1,1)\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f7aab41-05be-45c3-9676-f05d3bf6c0ce/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T152656Z&X-Amz-Expires=86400&X-Amz-Signature=a00b5af4bc2f89c70e0b092afdc228ec2bd1ad60380976df829986e6da96373d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"A number from 0-1 that represents the progress of the animation."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u6570\u5b57\uff0c\u8868\u793a\u52a8\u753b\u7684\u8fdb\u5ea6\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The X position of the first control point."),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u63a7\u5236\u70b9\u7684 X \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The Y position of the first control point."),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u63a7\u5236\u70b9\u7684 Y \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-2"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The X position of the second control point."),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u63a7\u5236\u70b9\u7684 X \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-3"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"The Y position of the second control point."),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u63a7\u5236\u70b9\u7684 Y \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,o.kt)("p",null,"The progress value derived from the new cubic bezier curve."),(0,o.kt)("p",null,"\u4ece\u65b0\u7684\u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u5bfc\u51fa\u7684\u8fdb\u5ea6\u503c\u3002"),(0,o.kt)("h3",{id:"2d-progress-2d\u8fdb\u5ea6"},"2D Progress 2D\u8fdb\u5ea6"),(0,o.kt)("p",null,"The X, Y position of the input progress on the curve. This can be used to plot the bezier curve."),(0,o.kt)("p",null,"\u8f93\u5165\u8fdb\u5ea6\u5728\u66f2\u7ebf\u4e0a\u7684 X\u3001Y \u4f4d\u7f6e\u3002\u8fd9\u53ef\u7528\u4e8e\u7ed8\u5236\u8d1d\u585e\u5c14\u66f2\u7ebf\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Cubic%20Bezier%20Curve"},"Cubic Bezier Curve \u4e09\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Transition"},"Transition \u8fc7\u6e21")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f0e9e85a-bfcf-469c-b05a-5f254265e8fe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T160002Z&X-Amz-Expires=86400&X-Amz-Signature=86a552146fd73312ae11b83be114ca5fe1c05c1eabf8e82b0237a22a75a8f68e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);