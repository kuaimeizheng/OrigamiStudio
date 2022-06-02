"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[271],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},l="Not \u975e",s={unversionedId:"Logic/Not",id:"Logic/Not",title:"Not \u975e",description:"Flip a boolean from true to false, or from false to true.",source:"@site/docs/Logic/Not.md",sourceDirName:"Logic",slug:"/Logic/Not",permalink:"/OrigamiStudio/docs/Logic/Not",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Logic/Not.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Less Than \u5c0f\u4e8e",permalink:"/OrigamiStudio/docs/Logic/Less Than"},next:{title:"Or \u6216",permalink:"/OrigamiStudio/docs/Logic/Or"}},p={},u=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"not-\u975e"},"Not \u975e"),(0,a.kt)("p",null,"Flip a boolean from true to false, or from false to true."),(0,a.kt)("p",null,"\u7ffb\u8f6c\u5e03\u5c14\u503c\uff0c\u4ece\u771f\u5230\u5047\uff0c\u6216\u4ece\u5047\u5230\u771f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eeababbc-49c2-485c-8378-068303b55b26/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172208Z&X-Amz-Expires=86400&X-Amz-Signature=f291fede680f21277c22915a4fbb5e109c7cf5962b0f17f38e51cb145247b4fa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Boolean \u5e03\u5c14\u503c")),(0,a.kt)("p",null,"A boolean (true/false, on/off, or 0/1)."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff08\u771f\uff0f\u5047\u3001\u5f00\uff0f\u5173\u30010\uff0f1\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output \u8f93\u51fa")),(0,a.kt)("p",null,"A boolean that is the opposite of the input (if input is true, then the output is false)."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u4e0e\u8f93\u5165\u7684\u503c\u76f8\u53cd\uff08\u5982\u679c\u8f93\u5165\u4e3a \u771f\uff0c\u5219\u8f93\u51fa\u4e3a \u5047\uff09\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,a.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/And-fe3dd6120a59454ebcd90cbf19fa03af"},"And \u548c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Or-56678c7752aa4df99e3945a1ee68da69"},"Or \u6216")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Equals-Exactly-c31ca42d3bec4c55a053fcffa3a05d6e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Greater-Than-1dd58751afa94e7c9805855439af4133"},"Greater Than \u5927\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Greater-Than-or-Equal-a97a6966c3fc464581a31a0ff464f5ba"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-e312107d39104d79912a39339e56a2ef"},"Less Than \u5c0f\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-or-Equal-9eb2808ade6c4ecb9d31c4c7d43e96d0"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Equals-b52f17a2688049cca34e1bc4da763bd7"},"Equals \u7b49\u4e8e")))}d.isMDXComponent=!0}}]);