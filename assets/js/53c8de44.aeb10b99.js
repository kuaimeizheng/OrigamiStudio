"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1330],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9715:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={sidebar_position:2},c="Scrollaway \u6eda\u52a8\u8ddd\u79bb",s={unversionedId:"Interaction/Scrollaway",id:"Interaction/Scrollaway",title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",description:"Calculate the progress off a scrollaway navigation element.",source:"@site/docs/Interaction/Scrollaway.md",sourceDirName:"Interaction",slug:"/Interaction/Scrollaway",permalink:"/OrigamiStudio/docs/Interaction/Scrollaway",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Interaction/Scrollaway.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654509971,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scroll \u6eda\u52a8",permalink:"/OrigamiStudio/docs/Interaction/Scroll"},next:{title:"Logic \u903b\u8f91",permalink:"/OrigamiStudio/docs/category/logic-\u903b\u8f91"}},u={},p=[{value:"Scroll Position \u6eda\u52a8\u4f4d\u7f6e",id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e",level:3},{value:"Scrollaway Offset \u6eda\u52a8\u504f\u79fb",id:"scrollaway-offset-\u6eda\u52a8\u504f\u79fb",level:3},{value:"Bottom Bound \u4e0b\u8fb9\u754c",id:"bottom-bound-\u4e0b\u8fb9\u754c",level:3},{value:"Top Bound \u4e0a\u8fb9\u754c",id:"top-bound-\u4e0a\u8fb9\u754c",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scrollaway-\u6eda\u52a8\u8ddd\u79bb"},"Scrollaway \u6eda\u52a8\u8ddd\u79bb"),(0,a.kt)("p",null,"Calculate the progress off a scrollaway navigation element."),(0,a.kt)("p",null,"\u8ba1\u7b97\u6eda\u52a8\u5bfc\u822a\u5143\u7d20\u7684\u8fdb\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b47c217-5437-4614-be9c-f1142973dc88/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171249Z&X-Amz-Expires=86400&X-Amz-Signature=ee6b82b410e1327a73382988003abb715586c406a0b148dafe9dc1b18c99e480&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,a.kt)("h3",{id:"scroll-position-\u6eda\u52a8\u4f4d\u7f6e"},"Scroll Position \u6eda\u52a8\u4f4d\u7f6e"),(0,a.kt)("p",null,"The current scroll position from a Scroll patch."),(0,a.kt)("p",null,"Scroll \u6eda\u52a8 \u6a21\u5757\u7684\u5f53\u524d\u6eda\u52a8\u4f4d\u7f6e\u3002"),(0,a.kt)("h3",{id:"scrollaway-offset-\u6eda\u52a8\u504f\u79fb"},"Scrollaway Offset \u6eda\u52a8\u504f\u79fb"),(0,a.kt)("p",null,"The offset the element should be scrolled away by."),(0,a.kt)("p",null,"\u5143\u7d20\u6eda\u52a8\u4f4d\u79fb\u7684\u504f\u79fb\u91cf\u3002"),(0,a.kt)("h3",{id:"bottom-bound-\u4e0b\u8fb9\u754c"},"Bottom Bound \u4e0b\u8fb9\u754c"),(0,a.kt)("p",null,"A number that represents the lowest bound of the Scroll (ex: -1500). Get this by scrolling the layer to the top and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u7684\u6700\u4f4e\u8fb9\u754c\uff08\u4f8b\u5982\uff1a-1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u9876\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,a.kt)("h3",{id:"top-bound-\u4e0a\u8fb9\u754c"},"Top Bound \u4e0a\u8fb9\u754c"),(0,a.kt)("p",null,"A number that represents the highest bound of the Scroll (ex: 1500). Get this by scrolling the layer to the bottom and looking at the Scroll position. Used to limit the scrollaway effect within a certain range."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u6700\u9ad8\u8fb9\u754c\uff08\u4f8b\u5982\uff1a1500\uff09\u3002\u901a\u8fc7\u6eda\u52a8\u56fe\u5c42\u5230\u5e95\u90e8\u67e5\u770b\u6eda\u52a8\u4f4d\u7f6e\u6765\u83b7\u53d6\u3002\u7528\u4e8e\u5c06\u6eda\u52a8\u6548\u679c\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\u3002"),(0,a.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,a.kt)("p",null,"A number from 0-1 that represents the progress of the scrollaway. Connect to Transition patches to convert it to the position, scale, opacity or any other property."),(0,a.kt)("p",null,"\u4e00\u4e2a 0-1 \u7684\u6570\u503c\uff0c\u8868\u793a\u6eda\u52a8\u7684\u8fdb\u5ea6\uff0c\u8fde\u63a5\u5230 Transition \u6a21\u5757\u4ee5\u5c06\u5176\u8f6c\u6362\u4e3a\u4f4d\u7f6e\u3001\u6bd4\u4f8b\u3001\u4e0d\u900f\u660e\u5ea6\u6216\u5176\u4ed6\u5c5e\u6027\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Utility/Transition"},"Transition \u8fc7\u6e21")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5addc78b-baae-4f23-b686-526df6b04d33/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171257Z&X-Amz-Expires=86400&X-Amz-Signature=c8c2a73c45a3cc72e496140375fbe5f27a9fd2251e88b98ee8f96d0bfbb24f30&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);