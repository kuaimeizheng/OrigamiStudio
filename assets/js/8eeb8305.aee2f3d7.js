"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4326],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6602:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],l={sidebar_position:2},s="Loop Filter \u5faa\u73af\u7b5b\u9009",p={unversionedId:"Loops/Loop Filter",id:"Loops/Loop Filter",title:"Loop Filter \u5faa\u73af\u7b5b\u9009",description:"This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times.",source:"@site/docs/Loops/Loop Filter.md",sourceDirName:"Loops",slug:"/Loops/Loop Filter",permalink:"/OrigamiStudio/docs/Loops/Loop Filter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Loops/Loop Filter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loop Dedupe \u5faa\u73af\u91cd\u590d\u6570\u636e\u5220\u9664",permalink:"/OrigamiStudio/docs/Loops/Loop Dedupe"},next:{title:"Loop Insert at End \u5faa\u73af\u7ed3\u5c3e\u63d2\u5165",permalink:"/OrigamiStudio/docs/Loops/Loop Insert at End"}},c={},u=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Include \u5305\u542b###",id:"include-\u5305\u542b",level:3},{value:"Loop \u5faa\u73af",id:"loop-\u5faa\u73af",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"\u652f\u6301\u7684\u7c7b\u578b",id:"\u652f\u6301\u7684\u7c7b\u578b",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loop-filter-\u5faa\u73af\u7b5b\u9009"},"Loop Filter \u5faa\u73af\u7b5b\u9009"),(0,r.kt)("p",null,"This is a very powerful patch that can do a lot of things! It can filter items out of a loop, but it can also repeat items in a loop. It can even be used to create a new loop with a single value repeated X times."),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u6a21\u5757\uff0c\u6709\u5f88\u591a\u529f\u80fd\uff01\u5b83\u53ef\u4ee5\u4ece\u5faa\u73af\u4e2d\u8fc7\u6ee4\u9879\u76ee\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u91cd\u590d\u9879\u76ee\u3002\u5b83\u751a\u81f3\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u91cd\u590d X \u6b21\u503c\u7684\u65b0\u5faa\u73af\u3002"),(0,r.kt)("p",null,"The idea is that you pass in two loops. The values loop is what you want to modify \u2014 you either want to remove items or repeat items in this loop. The second loop you pass in tells us how many times each value should appear (or if it should be removed by repeating 0 times)."),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u4f7f\u7528\u4e24\u4e2a\u5faa\u73af\u3002 values\u503c \u5faa\u73af\u662f\u60a8\u8981\u4fee\u6539\u7684\u5185\u5bb9\u2014\u2014\u5728\u6b64\u5faa\u73af\u4e2d\u5220\u9664\u9879\u76ee\u6216\u8005\u91cd\u590d\u9879\u76ee\u3002\u4f20\u5165\u7684\u7b2c\u4e8c\u4e2a\u5faa\u73af\u8bbe\u7f6e\u6bcf\u4e2a\u503c\u5e94\u8be5\u51fa\u73b0\u591a\u5c11\u6b21\uff08\u6216\u8005\u662f\u5426\u901a\u8fc7\u91cd\u590d 0 \u6b21\u6765\u5220\u9664\u5b83\uff09\u3002"),(0,r.kt)("p",null,"Example A: Filter to a subset of a loop."),(0,r.kt)("p",null,"\u793a\u4f8b A\uff1a\u7b5b\u9009\u5230\u5faa\u73af\u7684\u5b50\u96c6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2b81ccc1-54b8-4605-8df1-7af1b46132f3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172916Z&X-Amz-Expires=86400&X-Amz-Signature=c12861778c4cf9c7f7b74c222b660fbccddfc4f59fa6da1d7d228366d09e9222&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,r.kt)("p",null,"Example B: Make a new loop by repeating a single value X times."),(0,r.kt)("p",null,"\u793a\u4f8b B\uff1a\u901a\u8fc7\u5c06\u5355\u4e2a\u503c\u91cd\u590d X \u6b21\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u5faa\u73af\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/01be880f-d168-42c6-8708-55d688b49d67/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172926Z&X-Amz-Expires=86400&X-Amz-Signature=5b3c0c4ecfa5ca3537058a5875a04fe05ae10b7cb8c51c6663503dcd389a6b7f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,r.kt)("p",null,"Example C: Repeat and filter values by using a loop of numbers."),(0,r.kt)("p",null,"\u793a\u4f8b C\uff1a\u4f7f\u7528\u6570\u5b57\u5faa\u73af\u91cd\u590d\u548c\u8fc7\u6ee4\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fe15e1d5-5829-48a4-83b8-cd2353b47986/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172935Z&X-Amz-Expires=86400&X-Amz-Signature=3affbc2622dbe05d7f35af33a5c94b2ea31556cbc1df7dceccca354b4dd44cc9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,r.kt)("p",null,"Right-click the patch to change the expected type of the Input loop."),(0,r.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539\u8f93\u5165\u5faa\u73af\u7684\u9884\u671f\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"Use Loop Builder to make a boolean or number loop."),(0,r.kt)("p",null,"\u4f7f\u7528 Loop Builder \u521b\u5efa\u4e00\u4e2a\u5e03\u5c14\u503c\u6216\u6570\u5b57\u5faa\u73af\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ece207c0-76ae-4478-ba9a-e2799faaa79d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172946Z&X-Amz-Expires=86400&X-Amz-Signature=b496a13206942b0534fe9b1d833d1ac20e841c10a827e063103ca0377b6a42e4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("p",null,"A loop of values."),(0,r.kt)("p",null,"\u5305\u542b\u503c\u7684\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"include-\u5305\u542b"},"Include \u5305\u542b###"),(0,r.kt)("p",null,"A loop of booleans (to include or not include), or a loop of numbers (to decide how many times a value is repeated)."),(0,r.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u5faa\u73af\uff08\u5305\u62ec\u6216\u4e0d\u5305\u62ec\uff09\uff0c\u6216\u4e00\u4e2a\u6570\u5b57\u5faa\u73af\uff08\u51b3\u5b9a\u4e00\u4e2a\u503c\u91cd\u590d\u591a\u5c11\u6b21\uff09\u3002"),(0,r.kt)("h3",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,r.kt)("p",null,"The result loop, with values either filtered or repeated"),(0,r.kt)("p",null,"\u7ed3\u679c\u5faa\u73af\uff0c\u503c\u5df2\u88ab\u8fc7\u6ee4\u6216\u91cd\u590d\u3002"),(0,r.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,r.kt)("p",null,"A loop of indices for the result loop"),(0,r.kt)("p",null,"\u7ed3\u679c\u5faa\u73af\u7684\u7d22\u5f15\u5faa\u73af"),(0,r.kt)("h3",{id:"\u652f\u6301\u7684\u7c7b\u578b"},"\u652f\u6301\u7684\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c81df63d-45fa-4b22-9d3e-49a293f5c1cb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T172956Z&X-Amz-Expires=86400&X-Amz-Signature=c7d06b8b283e7efeb0fb5461ecdaa09a042786258ce19581d9aebfa57f4075b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Image"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop"},"Loop \u5faa\u73af")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Builder"},"Loop Builder \u5faa\u73af\u751f\u6210\u5668")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Loops/Loop%20Select"},"Loop Select \u5faa\u73af\u9009\u62e9")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91ca4083-f65d-4d4f-9476-113330085dd2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T173004Z&X-Amz-Expires=86400&X-Amz-Signature=c308b0657ec182c6947bfc241745b4b5eff850e03c2415249fc79b39809f372c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);