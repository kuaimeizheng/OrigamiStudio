"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[5407],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=i.createContext({}),s=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return i.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(f,a(a({ref:e},c),{},{components:n})):i.createElement(f,a({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98671:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},u="Spring Animation \u5f39\u6027\u52a8\u753b",s={unversionedId:"documentation/Animation/Spring Animation",id:"documentation/Animation/Spring Animation",title:"Spring Animation \u5f39\u6027\u52a8\u753b",description:"Creates a animation based on a physically modeled spring. This also allows for interruptible animations by controlling the velocity of the spring.",source:"@site/docs/documentation/Animation/Spring Animation.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Spring Animation",permalink:"/OrigamiStudio/docs/documentation/Animation/Spring Animation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Spring Animation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659700546,formattedLastUpdatedAt:"2022\u5e748\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Smooth Value \u5e73\u6ed1\u503c",permalink:"/OrigamiStudio/docs/documentation/Animation/Smooth Value"},next:{title:"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668",permalink:"/OrigamiStudio/docs/documentation/Animation/Spring Converter"}},c={},p=[{value:"Number \u6570\u503c",id:"number-\u6570\u503c",level:3},{value:"Mass \u8d28\u91cf",id:"mass-\u8d28\u91cf",level:3},{value:"Tension \u5f20\u529b",id:"tension-\u5f20\u529b",level:3},{value:"Friction \u6469\u64e6\u529b",id:"friction-\u6469\u64e6\u529b",level:3},{value:"Gesture Active \u624b\u52bf\u6fc0\u6d3b",id:"gesture-active-\u624b\u52bf\u6fc0\u6d3b",level:3},{value:"Gesture Velocity \u624b\u52bf\u901f\u5ea6",id:"gesture-velocity-\u624b\u52bf\u901f\u5ea6",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],m={toc:p};function d(t){var e=t.components,l=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spring-animation-\u5f39\u6027\u52a8\u753b"},"Spring Animation \u5f39\u6027\u52a8\u753b"),(0,o.kt)("p",null,"Creates a animation based on a physically modeled spring. This also allows for interruptible animations by controlling the velocity of the spring."),(0,o.kt)("p",null,"\u57fa\u4e8e\u7269\u7406\u5efa\u6a21\u7684\u5f39\u7c27\u521b\u5efa\u52a8\u753b\u3002\u8fd9\u4e5f\u5141\u8bb8\u901a\u8fc7\u63a7\u5236\u5f39\u7c27\u7684\u901f\u5ea6\u6765\u8fdb\u884c\u53ef\u4e2d\u65ad\u7684\u52a8\u753b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(95123).Z,width:"2000",height:"442"})),(0,o.kt)("h3",{id:"number-\u6570\u503c"},"Number \u6570\u503c"),(0,o.kt)("p",null,"The number to animate to."),(0,o.kt)("p",null,"\u8868\u793a\u52a8\u753b\u5f00\u59cb\u7684\u6570\u503c\u3002"),(0,o.kt)("h3",{id:"mass-\u8d28\u91cf"},"Mass \u8d28\u91cf"),(0,o.kt)("p",null,"The mass of the object being animated."),(0,o.kt)("p",null,"\u52a8\u753b\u5bf9\u8c61\u7684\u8d28\u91cf\u3002"),(0,o.kt)("h3",{id:"tension-\u5f20\u529b"},"Tension \u5f20\u529b"),(0,o.kt)("p",null,"How much tension the spring has."),(0,o.kt)("p",null,"\u5f39\u7c27\u6709\u591a\u5927\u7684\u5f20\u529b\u3002"),(0,o.kt)("h3",{id:"friction-\u6469\u64e6\u529b"},"Friction \u6469\u64e6\u529b"),(0,o.kt)("p",null,"How much friction should be applied to the spring."),(0,o.kt)("p",null,"\u5e94\u8be5\u5bf9\u5f39\u7c27\u65bd\u52a0\u591a\u5c11\u6469\u64e6\u529b"),(0,o.kt)("h3",{id:"gesture-active-\u624b\u52bf\u6fc0\u6d3b"},"Gesture Active \u624b\u52bf\u6fc0\u6d3b"),(0,o.kt)("p",null,"If a gesture is active, the spring will animate immediately to its destination value. When this switches from On to Off, the spring will sample the Gesture Velocity and use it for the animation. This allows for throwing an object and allowing for the spring to continue naturally from the throw point. Typically this is the value from the Down port on an\xa0","[Interaction]","\xa0or\xa0","[Gesture]","patch."),(0,o.kt)("p",null,"\u5982\u679c\u624b\u52bf\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\uff0c\u5219\u5f39\u7c27\u5c06\u7acb\u5373\u5f00\u59cb\u52a8\u753b\u5230\u5230\u5176\u76ee\u6807\u503c\u3002 \u5f53\u5b83\u4ece On \u5207\u6362\u5230 Off \u65f6\uff0c\u5f39\u7c27\u5c06\u5bf9\u624b\u52bf\u901f\u5ea6\u8fdb\u884c\u91c7\u6837\u5e76\u5c06\u5176\u7528\u4e8e\u52a8\u753b\u3002 \u8fd9\u5141\u8bb8\u629b\u51fa\u4e00\u4e2a\u7269\u4f53\uff0c\u5e76\u5141\u8bb8\u5f39\u7c27\u4ece\u629b\u51fa\u70b9\u81ea\u7136\u5730\u7ee7\u7eed\u3002 \u901a\u5e38\uff0c\u662f\u4ea4\u4e92\u6216\u624b\u52bf\u6a21\u5757\u7684 Down \u7aef\u53e3\u7684\u503c\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,o.kt)("h3",{id:"gesture-velocity-\u624b\u52bf\u901f\u5ea6"},"Gesture Velocity \u624b\u52bf\u901f\u5ea6"),(0,o.kt)("p",null,"The current velocity of the gesture being applied to the spring. When Gesture Active goes from On to Off, this value is sampled for the spring animation. See Gesture Active for more information."),(0,o.kt)("p",null,"\u5e94\u7528\u4e8e\u5f39\u7c27\u7684\u624b\u52bf\u7684\u5f53\u524d\u901f\u5ea6\u3002\u5f53\u201c\u624b\u52bf\u6fc0\u6d3b\u201d\u4ece\u201c\u5f00\u201d\u53d8\u4e3a\u201c\u5173\u201d\u65f6\uff0c\u5c06\u5bf9\u5f39\u7c27\u52a8\u753b\u7684\u8be5\u503c\u8fdb\u884c\u91c7\u6837\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u624b\u52bf\u6fc0\u6d3b\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The current value of the animation."),(0,o.kt)("p",null,"\u52a8\u753b\u7684\u5f53\u524d\u503c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Spring%20Converter"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Gesture"},"Gesture \u624b\u52bf")))}d.isMDXComponent=!0},95123:function(t,e,n){e.Z=n.p+"assets/images/spring-animation-2446cd9a7266d18a9bb3fed41d0adf22.png"}}]);