"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4905],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14212:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:2},c="Snapshot \u5feb\u7167",u={unversionedId:"documention/Utility/Snapshot",id:"documention/Utility/Snapshot",title:"Snapshot \u5feb\u7167",description:"Captures a freeze frame image of a particular layer or the entire screen in the current state.",source:"@site/docs/documention/Utility/Snapshot.md",sourceDirName:"documention/Utility",slug:"/documention/Utility/Snapshot",permalink:"/OrigamiStudio/docs/documention/Utility/Snapshot",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documention/Utility/Snapshot.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657382430,formattedLastUpdatedAt:"2022\u5e747\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Sample and Hold \u91c7\u6837\u4fdd\u6301",permalink:"/OrigamiStudio/docs/documention/Utility/Sample and Hold"},next:{title:"Spacing Unpack \u95f4\u8ddd\u89e3\u7ec4",permalink:"/OrigamiStudio/docs/documention/Utility/Spacing Unpack"}},p={},s=[{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:3},{value:"Sample \u91c7\u6837",id:"sample-\u91c7\u6837",level:3},{value:"Image \u56fe\u7247",id:"image-\u56fe\u7247",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snapshot-\u5feb\u7167"},"Snapshot \u5feb\u7167"),(0,i.kt)("p",null,"Captures a freeze frame image of a particular layer or the entire screen in the current state."),(0,i.kt)("p",null,"\u5728\u5f53\u524d\u72b6\u6001\u4e0b\u6355\u83b7\u7279\u5b9a\u56fe\u5c42\u6216\u6574\u4e2a\u5c4f\u5e55\u7684\u5b9a\u683c\u56fe\u50cf\u3002"),(0,i.kt)("p",null,"There are some limitations of layers that can be captured, including particle systems and certain layer transformations."),(0,i.kt)("p",null,"\u53ef\u4ee5\u6355\u83b7\u7684\u56fe\u5c42\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u5305\u62ec\u7c92\u5b50\u7cfb\u7edf\u548c\u67d0\u4e9b\u56fe\u5c42\u53d8\u6362\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(72226).Z,width:"1348",height:"212"})),(0,i.kt)("h3",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,i.kt)("p",null,"The layer to take the snapshot from. \u2018None\u2019 will snapshot the entire screen."),(0,i.kt)("p",null,"\u8981\u4ece\u4e2d\u83b7\u53d6\u5feb\u7167\u7684\u56fe\u5c42\u3002 \u201c\u65e0\u201d\u5c06\u5feb\u7167\u6574\u4e2a\u5c4f\u5e55\u3002"),(0,i.kt)("h3",{id:"sample-\u91c7\u6837"},"Sample \u91c7\u6837"),(0,i.kt)("p",null,"A pulse to take the snapshot of the current state."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u7528\u4e8e\u62cd\u6444\u5f53\u524d\u72b6\u6001\u5feb\u7167\u3002"),(0,i.kt)("h3",{id:"image-\u56fe\u7247"},"Image \u56fe\u7247"),(0,i.kt)("p",null,"The image of the snapshot."),(0,i.kt)("p",null,"\u5feb\u7167\u7684\u56fe\u50cf\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documention/Utility/Image"},"Image \u56fe\u7247")))}m.isMDXComponent=!0},72226:function(e,t,n){t.Z=n.p+"assets/images/snapshot-85070be6df1ddf7e96fe177d9794f72b.png"}}]);