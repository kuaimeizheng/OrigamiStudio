"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5331],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2300:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),i=["components"],a={sidebar_position:2},c="Scroll \u6eda\u52a8",s={unversionedId:"Interaction/Scroll",id:"Interaction/Scroll",title:"Scroll \u6eda\u52a8",description:"Scroll a layer using free or paged (carousel) scrolling. The layer will be scrolled inside of its parent layer group.",source:"@site/docs/Interaction/Scroll.md",sourceDirName:"Interaction",slug:"/Interaction/Scroll",permalink:"/OrigamiStudio/docs/Interaction/Scroll",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Interaction/Scroll.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",permalink:"/OrigamiStudio/docs/Interaction/Scroll Settings"},next:{title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",permalink:"/OrigamiStudio/docs/Interaction/Scrollaway"}},u={},p=[{value:"Content Layer \u5185\u5bb9\u56fe\u5c42",id:"content-layer-\u5185\u5bb9\u56fe\u5c42",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Scroll X X\u8f74\u6eda\u52a8",id:"scroll-x-x\u8f74\u6eda\u52a8",level:3},{value:"Scroll Y Y\u8f74\u6eda\u52a8",id:"scroll-y-y\u8f74\u6eda\u52a8",level:3},{value:"Settings \u8bbe\u7f6e",id:"settings-\u8bbe\u7f6e",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Page X X\u8f74\u9875\u9762",id:"page-x-x\u8f74\u9875\u9762",level:3},{value:"Page Y Y\u8f74\u9875\u9762",id:"page-y-y\u8f74\u9875\u9762",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scroll-\u6eda\u52a8"},"Scroll \u6eda\u52a8"),(0,o.kt)("p",null,"Scroll a layer using free or paged (carousel) scrolling. The layer will be scrolled inside of its parent layer group."),(0,o.kt)("p",null,"\u4f7f\u7528\u81ea\u7531\u6216\u5206\u9875\uff08\u8f6e\u64ad\uff09\u9009\u9879\u6765\u6eda\u52a8\u56fe\u5c42\u3002\u8be5\u56fe\u5c42\u5c06\u5728\u5176\u7236\u56fe\u5c42\u7ec4\u5185\u6eda\u52a8\u3002"),(0,o.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,o.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u89e6\u6478 \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/56f7c5ea-2b88-42cf-8ca0-5589b833195e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171211Z&X-Amz-Expires=86400&X-Amz-Signature=3f2c12d9f7c0dbf5c5b3f5f407993fb76067494364504391420205e8e02e1e92&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("h3",{id:"content-layer-\u5185\u5bb9\u56fe\u5c42"},"Content Layer \u5185\u5bb9\u56fe\u5c42"),(0,o.kt)("p",null,"The layer to scroll."),(0,o.kt)("p",null,"\u8981\u6eda\u52a8\u7684\u56fe\u5c42\u3002"),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when scrolling is enabled."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u6eda\u52a8\u542f\u7528\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"scroll-x-x\u8f74\u6eda\u52a8"},"Scroll X X\u8f74\u6eda\u52a8"),(0,o.kt)("p",null,"The horizontal scrolling style - None, Free or Paging."),(0,o.kt)("p",null,"\u6c34\u5e73\u6eda\u52a8\u6837\u5f0f\uff1a\u65e0\u3001\u81ea\u7531\u6216\u5206\u9875\u3002"),(0,o.kt)("h3",{id:"scroll-y-y\u8f74\u6eda\u52a8"},"Scroll Y Y\u8f74\u6eda\u52a8"),(0,o.kt)("p",null,"The vertical scrolling style - None, Free or Paging."),(0,o.kt)("p",null,"\u5782\u76f4\u6eda\u52a8\u6837\u5f0f\uff1a\u65e0\u3001\u81ea\u7531\u6216\u5206\u9875\u3002"),(0,o.kt)("h3",{id:"settings-\u8bbe\u7f6e"},"Settings \u8bbe\u7f6e"),(0,o.kt)("p",null,"Custom scroll settings. To be used with the output of the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll%20Settings"},"Scroll Settings")," patch."),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u6eda\u52a8\u8bbe\u7f6e\u3002\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")," \u6a21\u5757\u7684\u8f93\u51fa\u4e00\u8d77\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"x"},"X"),(0,o.kt)("p",null,"The current horizontal scroll position. Connect to the X Position of the selected layer."),(0,o.kt)("p",null,"\u5f53\u524d\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\u3002\u8fde\u63a5\u5230\u6240\u9009\u56fe\u5c42\u7684 X \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"y"},"Y"),(0,o.kt)("p",null,"The current vertical scroll position. Connect to the Y Position of the selected layer."),(0,o.kt)("p",null,"\u5f53\u524d\u5782\u76f4\u6eda\u52a8\u4f4d\u7f6e\u3002\u8fde\u63a5\u5230\u6240\u9009\u56fe\u5c42\u7684 Y \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"page-x-x\u8f74\u9875\u9762"},"Page X X\u8f74\u9875\u9762"),(0,o.kt)("p",null,"The current horizontal scroll page index."),(0,o.kt)("p",null,"\u5f53\u524d\u6c34\u5e73\u6eda\u52a8\u9875\u9762\u7684\u7d22\u5f15\u3002"),(0,o.kt)("h3",{id:"page-y-y\u8f74\u9875\u9762"},"Page Y Y\u8f74\u9875\u9762"),(0,o.kt)("p",null,"The current vertical scroll page index."),(0,o.kt)("p",null,"\u5f53\u524d\u5782\u76f4\u6eda\u52a8\u9875\u9762\u7684\u7d22\u5f15\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Pop%20Switch"},"Pop Switch \u6d41\u884c\u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scrollaway"},"Scrollaway \u6eda\u52a8\u8ddd\u79bb")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Drag"},"Drag \u62d6\u62fd")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Momentum%20Scrolling"},"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")),(0,o.kt)("p",null,"\u5386\u53f2\u7248\u672c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/27b1ebd1-6717-45da-ac00-42bf3415e593/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T171221Z&X-Amz-Expires=86400&X-Amz-Signature=dc42850e18a4247bd4e0e9286317d00fc587be848aaa076c6d740929550929fd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:null})))}m.isMDXComponent=!0}}]);