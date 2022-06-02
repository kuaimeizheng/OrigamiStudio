"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9958],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},u="Loop Sum \u5faa\u73af\u603b\u548c",s={unversionedId:"Loops/Loop Sum",id:"Loops/Loop Sum",title:"Loop Sum \u5faa\u73af\u603b\u548c",description:"Calculate the sum of every value in a loop.",source:"@site/docs/Loops/Loop Sum.md",sourceDirName:"Loops",slug:"/Loops/Loop Sum",permalink:"/OrigamiStudio/docs/Loops/Loop Sum",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Loops/Loop Sum.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loop Shuffle \u73af\u968f\u673a\u6392\u5e8f",permalink:"/OrigamiStudio/docs/Loops/Loop Shuffle"},next:{title:"Loop to Array \u5faa\u73af\u8f6c\u6362\u6570\u7ec4",permalink:"/OrigamiStudio/docs/Loops/Loop to Array"}},c={},l=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loop-sum-\u5faa\u73af\u603b\u548c"},"Loop Sum \u5faa\u73af\u603b\u548c"),(0,a.kt)("p",null,"Calculate the sum of every value in a loop."),(0,a.kt)("p",null,"\u8ba1\u7b97\u5faa\u73af\u4e2d\u6bcf\u4e2a\u503c\u7684\u603b\u548c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b6481b24-7171-4ad8-a31c-d358fd7b8bc3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173704Z&X-Amz-Expires=86400&X-Amz-Signature=3914c92b35ae2941da93929f905f75e5ee1fe6f5932c7ac913cb3a3086be4820&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Input \u8f93\u5165")),(0,a.kt)("p",null,"A loop of numbers, indices, or booleans."),(0,a.kt)("p",null,"\u6570\u5b57\u3001\u7d22\u5f15\u6216\u5e03\u5c14\u503c\u7684\u5faa\u73af\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sum \u603b\u548c")),(0,a.kt)("p",null,"A number that represents the sum of every value."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u6bcf\u4e2a\u503c\u7684\u603b\u548c\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,a.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-6cc974bf77e84e7aaf7836927011540b"},"Loop \u5faa\u73af")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-Builder-64d346e189494fa9b48050aac8eb8eff"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Running-Total-801d97d5f4eb4c00979d390bc2b08e06"},"Running Total \u7d2f\u79ef\u603b\u8ba1")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/Loop-Count-31b77cd94794494697ed150022ce99df"},"Loop Count \u5faa\u73af\u6570\u91cf")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2cf27912-d839-4df4-856b-03c66626be57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173710Z&X-Amz-Expires=86400&X-Amz-Signature=53ff51791a641c4ac05a791d1e8151f0909bec08b49cbef46991fbd0c1bc9e96&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}f.isMDXComponent=!0}}]);