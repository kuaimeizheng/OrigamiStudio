"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5453],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8612:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:2},u="Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",c={unversionedId:"Logic/Greater Than or Equal",id:"Logic/Greater Than or Equal",title:"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e",description:"Check if a value is greater than or equal to another.",source:"@site/docs/Logic/Greater Than or Equal.md",sourceDirName:"Logic",slug:"/Logic/Greater Than or Equal",permalink:"/OrigamiStudio/docs/Logic/Greater Than or Equal",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Logic/Greater Than or Equal.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Equals \u7b49\u4e8e",permalink:"/OrigamiStudio/docs/Logic/Equals"},next:{title:"Greater Than \u5927\u4e8e",permalink:"/OrigamiStudio/docs/Logic/Greater Than"}},s={},p=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"greater-than-or-equal-\u5927\u4e8e\u7b49\u4e8e"},"Greater Than or Equal \u5927\u4e8e\u7b49\u4e8e"),(0,o.kt)("p",null,"Check if a value is greater than or equal to another."),(0,o.kt)("p",null,"\u68c0\u67e5\u503c\u662f\u5426\u5927\u4e8e\u6216\u7b49\u4e8e\u53e6\u4e00\u4e2a\u503c\u3002"),(0,o.kt)("p",null,"Each value is compared to the next one in order, and results are combined in one output. For example, 3 >= 2 >= 2 is true, while 4 >= 4 >= 10 is false."),(0,o.kt)("p",null,"\u6bcf\u4e2a\u503c\u6309\u987a\u5e8f\u4e0e\u4e0b\u4e00\u4e2a\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u7ed3\u679c\u5408\u5e76\u5728\u4e00\u4e2a\u8f93\u51fa\u53e3\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c3 > \u6216 = 2 > \u6216 = 2\u4e3a\u771f\uff0c\u800c 4 > \u6216 = 4 > \u6216 = 10\u4e3a\u5047\u3002"),(0,o.kt)("p",null,"You can right-click to add more values to compare (will only output 1 if every value is greater or equal to the subsequent one) or change the type."),(0,o.kt)("p",null,"\u53f3\u952e\u6dfb\u52a0\u66f4\u591a\u503c\u8fdb\u884c\u6bd4\u8f83\uff08\u5982\u679c\u6bcf\u4e2a\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u53ea\u8f93\u51fa1\u4e2a\uff09\uff0c\u4e5f\u53ef\u4ee5\u66f4\u6539\u7c7b\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2717c6ac-6b65-4a9a-a783-4d829432406c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172117Z&X-Amz-Expires=86400&X-Amz-Signature=96b14d6a82b4af2d13a78d5fb9b4eed9c76d479693d176e960586adb9ce46d9f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,o.kt)("p",null,"The base value."),(0,o.kt)("p",null,"\u57fa\u7840\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,o.kt)("p",null,"The value to compare to the base."),(0,o.kt)("p",null,"\u548c\u57fa\u7840\u503c\u505a\u6bd4\u8f83\u7684\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output \u8f93\u51fa")),(0,o.kt)("p",null,"A boolean that is true if the base value is greater than or equal to the subsequent values."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5982\u679c\u57fa\u7840\u503c\u5927\u4e8e\u6216\u7b49\u4e8e\u540e\u7eed\u503c\uff0c\u5219\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,o.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/And-fe3dd6120a59454ebcd90cbf19fa03af"},"And \u548c")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Or-56678c7752aa4df99e3945a1ee68da69"},"Or \u6216")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Not-12e7821fbf1048dcb9fc65cc80ccdd5a"},"Not \u975e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Equals-Exactly-c31ca42d3bec4c55a053fcffa3a05d6e"},"Equals Exactly \u5b8c\u5168\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Greater-Than-1dd58751afa94e7c9805855439af4133"},"Greater Than \u5927\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-e312107d39104d79912a39339e56a2ef"},"Less Than \u5c0f\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Less-Than-or-Equal-9eb2808ade6c4ecb9d31c4c7d43e96d0"},"Less Than or Equal \u5c0f\u4e8e\u7b49\u4e8e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Equals-b52f17a2688049cca34e1bc4da763bd7"},"Equals \u7b49\u4e8e")))}f.isMDXComponent=!0}}]);