"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3723],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(n),d=i,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,r(r({ref:e},c),{},{components:n})):a.createElement(h,r({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38745:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={sidebar_position:4},u="Animations \u52a8\u753b",s={unversionedId:"documentation/Patch Editor/Animations",id:"documentation/Patch Editor/Animations",title:"Animations \u52a8\u753b",description:"Animation patches in Origami are designed to be fluid and reversible: they take any changing number and tween it to be smooth.",source:"@site/docs/documentation/Patch Editor/Animations.md",sourceDirName:"documentation/Patch Editor",slug:"/documentation/Patch Editor/Animations",permalink:"/OrigamiStudio/docs/documentation/Patch Editor/Animations",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Patch Editor/Animations.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659373767,formattedLastUpdatedAt:"2022\u5e748\u67081\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"documentionSidebar",previous:{title:"States \u72b6\u6001",permalink:"/OrigamiStudio/docs/documentation/Patch Editor/States"},next:{title:"Workflow \u5de5\u4f5c\u6d41",permalink:"/OrigamiStudio/docs/category/workflow-\u5de5\u4f5c\u6d41"}},c={},m=[],p={toc:m};function d(t){var e=t.components,l=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"animations-\u52a8\u753b"},"Animations \u52a8\u753b"),(0,o.kt)("p",null,"Animation patches in Origami are designed to be fluid and reversible: they take any changing number and tween it to be smooth."),(0,o.kt)("p",null,"Origami \u4e2d\u7684\u52a8\u753b\u6a21\u5757\u7684\u8bbe\u8ba1\u6d41\u7545\u4e14\u53ef\u53cd\u8f6c\u3002\u4e3a\u4e86\u52a8\u753b\u5e73\u6ed1\u91c7\u7528\u4e00\u76f4\u53d8\u5316\u7684\u6570\u5b57\u548c\u8865\u95f4\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"animation-patches-\u52a8\u753b\u6a21\u5757"},"Animation patches \u52a8\u753b\u6a21\u5757"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[Pop Animation]","  A Natural bouncy animations commonly found in Facebook apps, and easily pass values to your developers with the the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/pop"},"Pop")," framework for iOS, ",(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/rebound/"},"Rebound")," for Android, and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/rebound-js"},"Rebound JS")," for the web."),(0,o.kt)("li",{parentName:"ul"},"[Classic Animation]","  C Traditional easing curves, like linear, ease-in, and ease-out."),(0,o.kt)("li",{parentName:"ul"},"[Repeating Motion]","  Repeating, back-and-forth animations with easing curves."),(0,o.kt)("li",{parentName:"ul"},"[\u6d41\u884c\u52a8\u753b]"," \u8138\u4e66\u5e94\u7528\u4e2d\u5e38\u89c1\u7684\u81ea\u7136\u5f39\u6027\u52a8\u753b\uff0c\u56e0\u4e3a\u662f\u901a\u8fc7 iOS \u7684 POP \u6846\u67b6\u3001Android \u7684 Rebound \u548c Web \u7684 Rebound JS \u6846\u67b6\uff0c\u6240\u4ee5\u53ef\u4ee5\u8f7b\u677e\u5c06\u53c2\u6570\u4f20\u9012\u7ed9\u5f00\u53d1\u4eba\u5458\u3002"),(0,o.kt)("li",{parentName:"ul"},"[\u7ecf\u5178\u52a8\u753b]","  \u4f20\u7edf\u7684\u7f13\u52a8\u66f2\u7ebf\uff0c\u5982\u7ebf\u6027\u3001\u7f13\u5165\u3001\u7f13\u51fa\u3002"),(0,o.kt)("li",{parentName:"ul"},"[\u91cd\u590d\u52a8\u753b]"," \u5e26\u6709\u7f13\u52a8\u66f2\u7ebf\u7684\u91cd\u590d\u3001\u6765\u56de\u52a8\u753b\u3002")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"animating-values-\u52a8\u753b\u503c"},"Animating values \u52a8\u753b\u503c"),(0,o.kt)("p",null,"In combination with an ","[Interaction]"," or a ","[Switch]"," patch, which output 0 or 1, an Animation patch can tween that value so it smoothly animates from 0 to 1, and vice versa. Origami refers to this 0 to 1 value generally as ### progress### ."),(0,o.kt)("p",null,"\u4e0e\u8f93\u51fa 0 \u6216 1 \u7684j\u4ea4\u4e92\u6216Switch\u5f00\u5173\u6a21\u5757\u7ed3\u5408\u4f7f\u7528\u65f6\uff0c\u52a8\u753b\u6a21\u5757\u53ef\u4ee5\u5bf9\u8be5\u503c\u8fdb\u884c\u8865\u95f4\uff0c\u4f7f\u5176\u5e73\u6ed1\u5730\u4ece0\u8fc7\u6e21\u52301\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002Origami \u901a\u5e38\u5c06\u8fd9\u4e2a 0 \u5230 1 \u7684\u503c\u79f0\u4e3a \u8fdb\u5ea6\u3002"),(0,o.kt)("p",null,"This example below will scale a Layer from 0 to 1 (or 0% to 100%) when you touch down, with a reversible and bouncy animation:"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5c06\u5728\u60a8\u6309\u4e0b\u65f6\u5c06\u56fe\u5c42\u4ece 0 \u7f29\u653e\u5230 1\uff08\u6216 0% \u5230 100%\uff09\uff0c\u5e76\u5e26\u6709\u53cd\u8f6c\u4e14\u6709\u5f39\u6027\u7684\u52a8\u753b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(47567).Z,width:"1506",height:"300"})),(0,o.kt)("h1",{id:"transitions-\u8fc7\u6e21"},"Transitions \u8fc7\u6e21"),(0,o.kt)("p",null,"Animating from 0 to 1 is simple, but what about animating between other values?"),(0,o.kt)("p",null,"\u4ece0\u52301\u8bbe\u7f6e\u52a8\u753b\u5f88\u7b80\u5355\uff0c\u4f46\u662f\u5728\u5176\u4ed6\u503c\u4e4b\u95f4\u8bbe\u7f6e\u52a8\u753b\u5462\uff1f"),(0,o.kt)("p",null,"[Transition]","  T patches let you transform that 0/1 into any start/end value:"),(0,o.kt)("p",null,"\u8f6c\u6362\u6a21\u5757\u53ef\u4ee5\u8ba9\u4f60\u5c06 0/1 \u8f6c\u6362\u4e3a\u4efb\u4f55 \u5f00\u59cb/\u7ed3\u675f\u503c:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(34572).Z,width:"1508",height:"268"})),(0,o.kt)("p",null,"For example, if you want to animate a Layer\u2019s width from 100px to 200px. You would specify a Start Value of 100, and an End Value of 200. In combination with the animated 0 to 1 value from above, you can easily animate a Layer\u2019s width."),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u60f3\u5c06\u56fe\u5c42\u7684\u5bbd\u5ea6\u4ece 100 \u50cf\u7d20\u8bbe\u7f6e\u4e3a 200 \u50cf\u7d20\u3002 \u60a8\u5c06\u8bbe\u7f6e\u8d77\u59cb\u503c 100\uff0c\u7ed3\u675f\u503c 200\u3002\u7ed3\u5408\u4e0a\u9762\u7684 0 \u5230 1 \u52a8\u753b\u503c\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u4e3a\u56fe\u5c42\u5bbd\u5ea6\u8bbe\u7f6e\u52a8\u753b\u3002"),(0,o.kt)("p",null,"With a Progress of 0:"),(0,o.kt)("p",null,"\u8fdb\u5ea6\u4e3a 0 \u65f6:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(81705).Z,width:"1494",height:"260"})),(0,o.kt)("p",null,"With a Progress of .5:"),(0,o.kt)("p",null,"\u8fdb\u5ea6\u4e3a 0.5 \u65f6:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(55023).Z,width:"1494",height:"266"})),(0,o.kt)("p",null,"With a Progress of 1:"),(0,o.kt)("p",null,"\u8fdb\u5ea6\u4e3a 1 \u65f6:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(79936).Z,width:"1500",height:"260"})),(0,o.kt)("p",null,"In combination with an animation patch, you can now animate between any two values easily:"),(0,o.kt)("p",null,"\u7ed3\u5408\u52a8\u753b\u6a21\u5757\uff0c\u60a8\u73b0\u5728\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5236\u4f5c\u52a8\u753b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(89016).Z,width:"1500",height:"296"})),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pop Animation and Classic Animation automatically tween any number."),(0,o.kt)("li",{parentName:"ul"},"Interaction, Switch, Animation, Transition (ISAT) are your bread and butter for animating layers."),(0,o.kt)("li",{parentName:"ul"},"Sync multiple animations together by using one animation patch connected to multiple Transitions, which map progress of 0-1 to any start/end values."),(0,o.kt)("li",{parentName:"ul"},"\u6d41\u884c\u52a8\u753b\u548c\u7ecf\u5178\u52a8\u753b\u81ea\u52a8\u8865\u95f4\u4efb\u610f\u6570\u5b57\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u3001\u5f00\u5173\u3001\u52a8\u753b\u3001\u8fc7\u6e21 (ISAT) \u662f\u60a8\u5236\u4f5c\u56fe\u5c42\u52a8\u753b\u7684\u57fa\u7840\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u540c\u6b65\u591a\u4e2a\u52a8\u753b\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06\u4e00\u4e2a\u52a8\u753b\u6a21\u5757\u8fde\u63a5\u5230\u591a\u4e2a\u8fc7\u6e21\u6a21\u5757\u6765\u5b9e\u73b0\uff0c\u5c06 0-1 \u7684\u8fdb\u5ea6\u6620\u5c04\u5230\u4efb\u4f55 \u5f00\u59cb/\u7ed3\u675f\u503c\u3002")))}d.isMDXComponent=!0},47567:function(t,e,n){e.Z=n.p+"assets/images/animations-1-90a868bdbfad21b153e965ca027910d8.png"},34572:function(t,e,n){e.Z=n.p+"assets/images/animations-2-a56131f5d3e4200f2ddc9cf70af43221.png"},81705:function(t,e,n){e.Z=n.p+"assets/images/animations-3-f061c7d3268ed28919523335d52c110a.png"},55023:function(t,e,n){e.Z=n.p+"assets/images/animations-4-05b3d80f2df2a9639d4ec6b61517ba29.png"},79936:function(t,e,n){e.Z=n.p+"assets/images/animations-5-6e65c9d7a839a9ed9283235290b1e14e.png"},89016:function(t,e,n){e.Z=n.p+"assets/images/animations-6-efb3090a8991e792a3491021b1cf457b.png"}}]);