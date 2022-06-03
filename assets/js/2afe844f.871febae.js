"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2875],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},235:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:2},l="Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6",c={unversionedId:"Utility/Reverse Progress",id:"Utility/Reverse Progress",title:"Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6",description:"Reverse a progress value, ex: 0 to 1 becomes 1 to 0, .3 becomes .7.",source:"@site/docs/Utility/Reverse Progress.md",sourceDirName:"Utility",slug:"/Utility/Reverse Progress",permalink:"/OrigamiStudio/docs/Utility/Reverse Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Utility/Reverse Progress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Restart Prototype \u91cd\u542f\u539f\u578b",permalink:"/OrigamiStudio/docs/Utility/Restart Prototype"},next:{title:"Sample and Hold \u91c7\u6837\u4fdd\u6301",permalink:"/OrigamiStudio/docs/Utility/Sample and Hold"}},u={},p=[{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6-1",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reverse-progress-\u53cd\u8f6c\u8fdb\u5ea6"},"Reverse Progress \u53cd\u8f6c\u8fdb\u5ea6"),(0,i.kt)("p",null,"Reverse a progress value, ex: 0 to 1 becomes 1 to 0, .3 becomes .7."),(0,i.kt)("p",null,"\u53cd\u8f6c\u4e00\u4e2a\u8fdb\u5ea6\u503c\uff0c\u4f8b\u5982\uff1a0 \u5230 1 \u53d8\u4e3a 1 \u5230 0\uff0c0.3 \u53d8\u4e3a 0.7\u3002"),(0,i.kt)("p",null,"Useful to sync an animation that is reversed (ex: a photo that fades in as another fades out)."),(0,i.kt)("p",null,"\u7528\u4e8e\u540c\u6b65\u53cd\u8f6c\u7684\u52a8\u753b\uff08\u4f8b\u5982\uff1a\u4e00\u5f20\u7167\u7247\u6de1\u5165\uff0c\u53e6\u4e00\u5f20\u6de1\u51fa\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed853abc-433b-44e3-bd4b-7bc93f57e81f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T182006Z&X-Amz-Expires=86400&X-Amz-Signature=5df5a8bcb18a72ca13862171960396f6b9de3582a99535d7ad9088d718fd281a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,i.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"A progress value. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Patch%20Editor/Animations"},"Animation Basics")," for more information."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8fdb\u5ea6\u503c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u52a8\u753b\u57fa\u7840\u77e5\u8bc6\u3002"),(0,i.kt)("h3",{id:"progress-\u8fdb\u5ea6-1"},"Progress \u8fdb\u5ea6"),(0,i.kt)("p",null,"The reversed progress value. See ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Patch%20Editor/Animations"},"Animation Basics")," for more information."),(0,i.kt)("p",null,"\u53cd\u8f6c\u8fdb\u5ea6\u503c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u52a8\u753b\u57fa\u7840\u77e5\u8bc6\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Progress"},"Progress \u8fdb\u5ea6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Transition"},"Transition \u8fc7\u6e21")))}m.isMDXComponent=!0}}]);