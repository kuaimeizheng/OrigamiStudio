"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1473],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Running Total \u7d2f\u79ef\u603b\u8ba1",u={unversionedId:"Loops/Running Total",id:"Loops/Running Total",title:"Running Total \u7d2f\u79ef\u603b\u8ba1",description:"Calculate the sums of a loop of numbers, where the sum at each index is the sum of the numbers preceding the current number.",source:"@site/docs/Loops/Running Total.md",sourceDirName:"Loops",slug:"/Loops/Running Total",permalink:"/OrigamiStudio/docs/Loops/Running Total",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Loops/Running Total.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",permalink:"/OrigamiStudio/docs/Loops/Loop to Array"},next:{title:"Math \u6570\u5b66",permalink:"/OrigamiStudio/docs/category/math-\u6570\u5b66"}},p={},l=[{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-total-\u7d2f\u79ef\u603b\u8ba1"},"Running Total \u7d2f\u79ef\u603b\u8ba1"),(0,a.kt)("p",null,"Calculate the sums of a loop of numbers, where the sum at each index is the sum of the numbers preceding the current number."),(0,a.kt)("p",null,"\u8ba1\u7b97\u6570\u5b57\u5faa\u73af\u7684\u603b\u548c\uff0c\u5176\u4e2d\u6bcf\u4e2a\u7d22\u5f15\u5904\u7684\u603b\u548c\u662f\u5f53\u524d\u6570\u5b57\u4e4b\u524d\u7684\u6570\u5b57\u7684\u603b\u548c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c090872c-4907-4c70-a2a4-fb7b03f95069/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173830Z&X-Amz-Expires=86400&X-Amz-Signature=412da3afd841335850ce0583f4288bc5c47747f98291c6bad72cc31f2e2816ef&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,"To calculate the total sum of all numbers, use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-Sum-04443a38a18840d89e3985c09e1517a7"},"Sum")," patch."),(0,a.kt)("p",null,"\u8981\u8ba1\u7b97\u6240\u6709\u6570\u5b57\u7684\u603b\u548c\uff0c\u8bf7\u4f7f\u7528 Sum \u6a21\u5757\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2bc3350c-7467-4839-99ff-764d4322c229/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173823Z&X-Amz-Expires=86400&X-Amz-Signature=6acb7512688df9ff443eb7817895578df8aa468998a50067d3a67629313a092d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,a.kt)("p",null,"A loop of numbers, indices, or booleans."),(0,a.kt)("p",null,"\u6570\u5b57\u3001\u7d22\u5f15\u6216\u5e03\u5c14\u503c\u7684\u5faa\u73af\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output \u8f93\u51fa")),(0,a.kt)("p",null,"A loop of sums."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5faa\u73af\u7684\u603b\u548c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301\u7c7b\u578b")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aef1dd11-084e-4e3e-a1aa-92be28f5f7ac/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173815Z&X-Amz-Expires=86400&X-Amz-Signature=8eca7b5c2242ddac490abe0bc27cd2bdbbe2209cf562093c61c969206202ed1d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-6cc974bf77e84e7aaf7836927011540b"},"Loop \u5faa\u73af")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-Builder-64d346e189494fa9b48050aac8eb8eff"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-Count-31b77cd94794494697ed150022ce99df"},"Loop Count \u5faa\u73af\u6570\u91cf")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-Sum-04443a38a18840d89e3985c09e1517a7"},"Loop Sum \u5faa\u73af\u603b\u548c")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d5517710-2588-4484-a940-15cc7393a718/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173807Z&X-Amz-Expires=86400&X-Amz-Signature=cfeed395df4892525b14fcb1af1e54f2fc30b329b0be2c21cda81d69ee84c7e7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}d.isMDXComponent=!0}}]);