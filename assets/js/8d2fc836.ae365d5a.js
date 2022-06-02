"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3489],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5210:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Greater Than \u5927\u4e8e",u={unversionedId:"Logic/Greater Than",id:"Logic/Greater Than",title:"Greater Than \u5927\u4e8e",description:"Check if a value is greater than another.",source:"@site/docs/Logic/Greater Than.md",sourceDirName:"Logic",slug:"/Logic/Greater Than",permalink:"/OrigamiStudio/docs/Logic/Greater Than",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Logic/Greater Than.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",permalink:"/OrigamiStudio/docs/Logic/Greater Than or Equal"},next:{title:"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e",permalink:"/OrigamiStudio/docs/Logic/Less Than or Equal"}},s={},p=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"greater-than-\u5927\u4e8e"},"Greater Than \u5927\u4e8e"),(0,o.kt)("p",null,"Check if a value is greater than another."),(0,o.kt)("p",null,"\u68c0\u67e5\u4e00\u4e2a\u503c\u662f\u5426\u5927\u4e8e\u53e6\u4e00\u4e2a\u503c\u3002"),(0,o.kt)("p",null,"Each value is compared to the next one in order, and results are combined in one output. For example, 3 > 2 > 1 is true, while 4 > 3 > 10 is false."),(0,o.kt)("p",null,"\u6bcf\u4e2a\u503c\u6309\u987a\u5e8f\u4e0e\u4e0b\u4e00\u4e2a\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u7ed3\u679c\u5408\u5e76\u5728\u4e00\u4e2a\u8f93\u51fa\u53e3\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c3 > 2 > 1\u4e3a\u771f\uff0c\u800c4 > 3 > 10\u4e3a\u5047\u3002"),(0,o.kt)("p",null,"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."),(0,o.kt)("p",null,"\u53f3\u952e\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u63a5\u53e3\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u5982\uff1a\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eaf1acd5-2740-4409-8220-d9ca6207fd6f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172055Z&X-Amz-Expires=86400&X-Amz-Signature=23877f51fde66b06745242d7afda7146be058202a0696dfa1a9b436c7503db01&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,o.kt)("p",null,"The base value."),(0,o.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,o.kt)("p",null,"The value to compare to the base."),(0,o.kt)("p",null,"\u7528\u6765\u548c\u57fa\u6570\u6bd4\u8f83\u7684\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output \u8f93\u51fa")),(0,o.kt)("p",null,"A boolean that is true if the base value is greater than the subsequent values."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u57fa\u6570\u503c\u5927\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u4e3a \u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,o.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/And-fe3dd6120a59454ebcd90cbf19fa03af"},"And \u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Or-56678c7752aa4df99e3945a1ee68da69"},"Or \u6216")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Not-12e7821fbf1048dcb9fc65cc80ccdd5a"},"Not \u975e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Equals-Exactly-c31ca42d3bec4c55a053fcffa3a05d6e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Greater-Than-or-Equal-a97a6966c3fc464581a31a0ff464f5ba"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-e312107d39104d79912a39339e56a2ef"},"Less Than \u5c0f\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-or-Equal-9eb2808ade6c4ecb9d31c4c7d43e96d0"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Equals-b52f17a2688049cca34e1bc4da763bd7"},"Equals \u7b49\u4e8e")))}f.isMDXComponent=!0}}]);