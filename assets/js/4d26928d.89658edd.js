"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5331],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),g=l,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88119:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),l=r(63366),o=(r(67294),r(3905)),i=["components"],a={sidebar_position:2},c="Scroll \u6eda\u52a8",u={unversionedId:"Interaction/Scroll",id:"Interaction/Scroll",title:"Scroll \u6eda\u52a8",description:"Scroll a layer using free or paged (carousel) scrolling. The layer will be scrolled inside of its parent layer group.",source:"@site/docs/Interaction/Scroll.md",sourceDirName:"Interaction",slug:"/Interaction/Scroll",permalink:"/OrigamiStudio/docs/Interaction/Scroll",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Interaction/Scroll.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654513919,formattedLastUpdatedAt:"6/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",permalink:"/OrigamiStudio/docs/Interaction/Scroll Settings"},next:{title:"Scrollaway \u6eda\u52a8\u8ddd\u79bb",permalink:"/OrigamiStudio/docs/Interaction/Scrollaway"}},s={},p=[{value:"Content Layer \u5185\u5bb9\u56fe\u5c42",id:"content-layer-\u5185\u5bb9\u56fe\u5c42",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Scroll X X\u8f74\u6eda\u52a8",id:"scroll-x-x\u8f74\u6eda\u52a8",level:3},{value:"Scroll Y Y\u8f74\u6eda\u52a8",id:"scroll-y-y\u8f74\u6eda\u52a8",level:3},{value:"Settings \u8bbe\u7f6e",id:"settings-\u8bbe\u7f6e",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Page X X\u8f74\u9875\u9762",id:"page-x-x\u8f74\u9875\u9762",level:3},{value:"Page Y Y\u8f74\u9875\u9762",id:"page-y-y\u8f74\u9875\u9762",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:p};function g(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scroll-\u6eda\u52a8"},"Scroll \u6eda\u52a8"),(0,o.kt)("p",null,"Scroll a layer using free or paged (carousel) scrolling. The layer will be scrolled inside of its parent layer group."),(0,o.kt)("p",null,"\u4f7f\u7528\u81ea\u7531\u6216\u5206\u9875\uff08\u8f6e\u64ad\uff09\u9009\u9879\u6765\u6eda\u52a8\u56fe\u5c42\u3002\u8be5\u56fe\u5c42\u5c06\u5728\u5176\u7236\u56fe\u5c42\u7ec4\u5185\u6eda\u52a8\u3002"),(0,o.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,o.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u89e6\u6478 \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(75517).Z,width:"1816",height:"424"})),(0,o.kt)("h3",{id:"content-layer-\u5185\u5bb9\u56fe\u5c42"},"Content Layer \u5185\u5bb9\u56fe\u5c42"),(0,o.kt)("p",null,"The layer to scroll."),(0,o.kt)("p",null,"\u8981\u6eda\u52a8\u7684\u56fe\u5c42\u3002"),(0,o.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,o.kt)("p",null,"A boolean that is true when scrolling is enabled."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u6eda\u52a8\u542f\u7528\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("h3",{id:"scroll-x-x\u8f74\u6eda\u52a8"},"Scroll X X\u8f74\u6eda\u52a8"),(0,o.kt)("p",null,"The horizontal scrolling style - None, Free or Paging."),(0,o.kt)("p",null,"\u6c34\u5e73\u6eda\u52a8\u6837\u5f0f\uff1a\u65e0\u3001\u81ea\u7531\u6216\u5206\u9875\u3002"),(0,o.kt)("h3",{id:"scroll-y-y\u8f74\u6eda\u52a8"},"Scroll Y Y\u8f74\u6eda\u52a8"),(0,o.kt)("p",null,"The vertical scrolling style - None, Free or Paging."),(0,o.kt)("p",null,"\u5782\u76f4\u6eda\u52a8\u6837\u5f0f\uff1a\u65e0\u3001\u81ea\u7531\u6216\u5206\u9875\u3002"),(0,o.kt)("h3",{id:"settings-\u8bbe\u7f6e"},"Settings \u8bbe\u7f6e"),(0,o.kt)("p",null,"Custom scroll settings. To be used with the output of the ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll%20Settings"},"Scroll Settings")," patch."),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u6eda\u52a8\u8bbe\u7f6e\u3002\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")," \u6a21\u5757\u7684\u8f93\u51fa\u4e00\u8d77\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"x"},"X"),(0,o.kt)("p",null,"The current horizontal scroll position. Connect to the X Position of the selected layer."),(0,o.kt)("p",null,"\u5f53\u524d\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\u3002\u8fde\u63a5\u5230\u6240\u9009\u56fe\u5c42\u7684 X \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"y"},"Y"),(0,o.kt)("p",null,"The current vertical scroll position. Connect to the Y Position of the selected layer."),(0,o.kt)("p",null,"\u5f53\u524d\u5782\u76f4\u6eda\u52a8\u4f4d\u7f6e\u3002\u8fde\u63a5\u5230\u6240\u9009\u56fe\u5c42\u7684 Y \u4f4d\u7f6e\u3002"),(0,o.kt)("h3",{id:"page-x-x\u8f74\u9875\u9762"},"Page X X\u8f74\u9875\u9762"),(0,o.kt)("p",null,"The current horizontal scroll page index."),(0,o.kt)("p",null,"\u5f53\u524d\u6c34\u5e73\u6eda\u52a8\u9875\u9762\u7684\u7d22\u5f15\u3002"),(0,o.kt)("h3",{id:"page-y-y\u8f74\u9875\u9762"},"Page Y Y\u8f74\u9875\u9762"),(0,o.kt)("p",null,"The current vertical scroll page index."),(0,o.kt)("p",null,"\u5f53\u524d\u5782\u76f4\u6eda\u52a8\u9875\u9762\u7684\u7d22\u5f15\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Pop%20Switch"},"Pop Switch \u6d41\u884c\u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scrollaway"},"Scrollaway \u6eda\u52a8\u8ddd\u79bb")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Drag"},"Drag \u62d6\u62fd")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Momentum%20Scrolling"},"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")))}g.isMDXComponent=!0},75517:function(e,t,r){t.Z=r.p+"assets/images/scroll-3c9100bf951c19a8bca98db771655a1d.png"}}]);