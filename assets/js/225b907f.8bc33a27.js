"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3698],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},c="Equals Exactly \u5b8c\u5168\u7b49\u4e8e",u={unversionedId:"Logic/Equals Exactly",id:"Logic/Equals Exactly",title:"Equals Exactly \u5b8c\u5168\u7b49\u4e8e",description:"Check if two or more values are exactly the same as each other.",source:"@site/docs/Logic/Equals Exactly.md",sourceDirName:"Logic",slug:"/Logic/Equals Exactly",permalink:"/OrigamiStudio/docs/Logic/Equals Exactly",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Logic/Equals Exactly.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"And \u548c",permalink:"/OrigamiStudio/docs/Logic/And"},next:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/docs/Logic/Equals"}},s={},p=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"equals-exactly-\u5b8c\u5168\u7b49\u4e8e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e"),(0,o.kt)("p",null,"Check if two or more values are exactly the same as each other."),(0,o.kt)("p",null,"\u68c0\u67e5\u4e24\u4e2a\u6216\u591a\u4e2a\u503c\u662f\u5426\u5b8c\u5168\u76f8\u540c\u3002"),(0,o.kt)("p",null,"This is a convenience equivalent of using the (Equals)","[builtin.compare.equal Approx]"," patch with tolerance set to 0."),(0,o.kt)("p",null,"\u8fd9\u76f8\u5f53\u4e8e\u4f7f\u7528(Equals)","[builtin.compare.equal Approx]","(python \u8fd1\u4f3c\u6bd4\u8f83)\u6a21\u5757\uff0c\u7136\u540e\u516c\u5dee\u8bbe\u7f6e\u4e3a 0\u3002"),(0,o.kt)("p",null,"Right-click to add more values to compare, or change the type (ex: number, index, boolean)."),(0,o.kt)("p",null,"\u53f3\u952e\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u63a5\u53e3\u53bb\u6bd4\u8f83\uff0c\u6216\u66f4\u6539\u7c7b\u578b\uff08\u5982\uff1a\u6570\u5b57\u3001\u7d22\u5f15\u3001\u5e03\u5c14\u503c\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d84f08a2-8f42-45cf-9dd6-0c7610b23a6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171959Z&X-Amz-Expires=86400&X-Amz-Signature=1d770abbbfa1c3bb4b56958868395588c32a0aae8e53ee9fcc85755869117e90&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input")),(0,o.kt)("p",null,"The base value."),(0,o.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input")),(0,o.kt)("p",null,"The value to compare to the base."),(0,o.kt)("p",null,"\u548c\u57fa\u7840\u503c\u6bd4\u8f83\u7684\u503c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("p",null,"A boolean that is true if the values are exactly equal to each other."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u8f93\u5165\u7684\u503c\u5f7c\u6b64\u5b8c\u5168\u76f8\u7b49\uff0c\u5219\u4e3a \u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,o.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/And-fe3dd6120a59454ebcd90cbf19fa03af"},"And \u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Or-56678c7752aa4df99e3945a1ee68da69"},"Or \u6216")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Not-12e7821fbf1048dcb9fc65cc80ccdd5a"},"Not \u975e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Greater-Than-1dd58751afa94e7c9805855439af4133"},"Greater Than \u5927\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Greater-Than-or-Equal-a97a6966c3fc464581a31a0ff464f5ba"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-e312107d39104d79912a39339e56a2ef"},"Less Than \u5c0f\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-or-Equal-9eb2808ade6c4ecb9d31c4c7d43e96d0"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Equals-b52f17a2688049cca34e1bc4da763bd7"},"Equals \u7b49\u4e8e")))}d.isMDXComponent=!0}}]);