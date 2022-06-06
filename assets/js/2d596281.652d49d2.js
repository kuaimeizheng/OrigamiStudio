"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3487],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={sidebar_position:2},l="Union \u5408\u5e76",u={unversionedId:"Shapes/Union",id:"Shapes/Union",title:"Union \u5408\u5e76",description:"Combines two or more shapes into one shape to be used with a Shape Layer.",source:"@site/docs/Shapes/Union.md",sourceDirName:"Shapes",slug:"/Shapes/Union",permalink:"/OrigamiStudio/docs/Shapes/Union",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Shapes/Union.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Triangle \u4e09\u89d2\u5f62",permalink:"/OrigamiStudio/docs/Shapes/Triangle"},next:{title:"Text \u6587\u672c",permalink:"/OrigamiStudio/docs/category/text-\u6587\u672c"}},s={},c=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165-1",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"union-\u5408\u5e76"},"Union \u5408\u5e76"),(0,o.kt)("p",null,"Combines two or more shapes into one shape to be used with a Shape Layer."),(0,o.kt)("p",null,"\u5c06\u4e24\u4e2a\u6216\u591a\u4e2a\u5f62\u72b6\u7ec4\u5408\u6210\u4e00\u4e2a\u5f62\u72b6\u4ee5\u4e0e\u5f62\u72b6\u56fe\u5c42\u4e00\u8d77\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"Right-click the patch to add additional inputs for shapes."),(0,o.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u8865\u4e01\u4ee5\u6dfb\u52a0\u5f62\u72b6\u7684\u5176\u4ed6\u8f93\u5165\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/796b6969-67b4-48a6-a741-24da004fef59/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T175950Z&X-Amz-Expires=86400&X-Amz-Signature=a84399f98aeedac99ed580a37d7b615c0f27a73d42b9d2818b0abdc1e78cb736&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,o.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A shape to union with other shapes."),(0,o.kt)("p",null,"\u5c06\u8981\u5408\u5e76\u5f62\u72b6\u6a21\u5757\u7684 ### Shape\u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,o.kt)("h3",{id:"input-\u8f93\u5165-1"},"Input \u8f93\u5165"),(0,o.kt)("p",null,"A shape to union with other shapes."),(0,o.kt)("p",null,"\u5c06\u8981\u5408\u5e76\u5f62\u72b6\u6a21\u5757\u7684 ### Shape\u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The union of the input shapes."),(0,o.kt)("p",null,"\u8f93\u51fa\u7ec4\u5408\u540e\u7684\u5f62\u72b6\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Circle-aa0ece9d86a14149a015fd0fc12db088"},"Circle \u5706\u5f62")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Oval-a93bcffdb9d94ba1a4dbd968ba185a87"},"Oval \u692d\u5706\u5f62")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Rounded-Rectangle-682f601349ac4e8985eb9b70c98792ca"},"Rounded Rectangle \u5706\u89d2\u77e9\u5f62")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Triangle-de2307b4545640358caaee069a8ca536"},"Triangle \u4e09\u89d2\u5f62")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Shape-6381402c7a90468d97365c58ab562ea1"},"Shape \u5f62\u72b6")))}h.isMDXComponent=!0}}]);