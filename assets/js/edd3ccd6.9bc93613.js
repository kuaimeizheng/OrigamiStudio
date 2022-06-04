"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2344],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,f=m["".concat(u,".").concat(p)]||m[p]||s[p]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},u="Random \u968f\u673a",d={unversionedId:"Utility/Random",id:"Utility/Random",title:"Random \u968f\u673a",description:"Generate a random number (with decimals) that falls between two numbers of your choice. The patch will generate and output a random number each time it receives a pulse on its Randomize port.",source:"@site/docs/Utility/Random.md",sourceDirName:"Utility",slug:"/Utility/Random",permalink:"/OrigamiStudio/docs/Utility/Random",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Utility/Random.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"QR Code Detection \u4e8c\u7ef4\u7801\u68c0\u6d4b",permalink:"/OrigamiStudio/docs/Utility/QR Code Detection"},next:{title:"Repeating Pulse \u91cd\u590d\u8109\u51b2",permalink:"/OrigamiStudio/docs/Utility/Repeating Pulse"}},c={},s=[{value:"Randomize \u968f\u673a\u5316",id:"randomize-\u968f\u673a\u5316",level:3},{value:"Start Value \u5f00\u59cb\u503c",id:"start-value-\u5f00\u59cb\u503c",level:3},{value:"End Value \u7ed3\u675f\u503c",id:"end-value-\u7ed3\u675f\u503c",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"random-\u968f\u673a"},"Random \u968f\u673a"),(0,i.kt)("p",null,"Generate a random number (with decimals) that falls between two numbers of your choice. The patch will generate and output a random number each time it receives a pulse on its Randomize port."),(0,i.kt)("p",null,"\u751f\u6210\u4e00\u4e2a\u4ecb\u4e8e\u60a8\u8bbe\u7f6e\u7684\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\u7684\u968f\u673a\u6570\uff08\u5e26\u5c0f\u6570\uff09\u3002\u6a21\u5757\u6bcf\u6b21\u5728\u5176 Randomize \u7aef\u53e3\u4e0a\u63a5\u6536\u5230\u8109\u51b2\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u5e76\u8f93\u51fa\u4e00\u4e2a\u968f\u673a\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/be3d20d4-c4cc-49d5-9435-d047ca507cd5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T181905Z&X-Amz-Expires=86400&X-Amz-Signature=38875cd8ad014c1f6fcdbc23e1fa396002dadcb940fdad2d1d18b47eced3c4a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,i.kt)("h3",{id:"randomize-\u968f\u673a\u5316"},"Randomize \u968f\u673a\u5316"),(0,i.kt)("p",null,"A pulse that generates a new random number."),(0,i.kt)("p",null,"\u4ea7\u751f\u65b0\u968f\u673a\u6570\u7684\u8109\u51b2\u3002"),(0,i.kt)("h3",{id:"start-value-\u5f00\u59cb\u503c"},"Start Value \u5f00\u59cb\u503c"),(0,i.kt)("p",null,"The lowest random number."),(0,i.kt)("p",null,"\u6700\u5c0f\u7684\u968f\u673a\u6570\u3002"),(0,i.kt)("h3",{id:"end-value-\u7ed3\u675f\u503c"},"End Value \u7ed3\u675f\u503c"),(0,i.kt)("p",null,"The highest random number."),(0,i.kt)("p",null,"\u6700\u5927\u7684\u968f\u673a\u6570\u3002"),(0,i.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,i.kt)("p",null,"A random number (with decimals). Use the ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Math/Round"},"Round")," patch to round the number to an integer."),(0,i.kt)("p",null,"\u968f\u673a\u6570(\u5305\u62ec\u5c0f\u6570)\u3002\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Math/Round"},"Round")," \u6a21\u5757\u5c06\u6570\u5b57\u56db\u820d\u4e94\u5165\u4e3a\u6574\u6570\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Math/Round"},"Round \u56db\u820d\u4e94\u5165")))}p.isMDXComponent=!0}}]);