"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3573],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:2},u="Double Tap \u53cc\u51fb",p={unversionedId:"Interaction/Double Tap",id:"Interaction/Double Tap",title:"Double Tap \u53cc\u51fb",description:"Capture double taps or single taps within a specified time frame. To be used with the Tap port in the Interaction patch.",source:"@site/docs/Interaction/Double Tap.md",sourceDirName:"Interaction",slug:"/Interaction/Double Tap",permalink:"/OrigamiStudio/docs/Interaction/Double Tap",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/Interaction/Double Tap.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1654587917,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interaction \u4ea4\u4e92",permalink:"/OrigamiStudio/docs/category/interaction-\u4ea4\u4e92"},next:{title:"Drag Settings \u62d6\u62fd\u8bbe\u7f6e",permalink:"/OrigamiStudio/docs/Interaction/Drag Settings"}},c={},s=[{value:"Tap \u8f7b\u70b9",id:"tap-\u8f7b\u70b9",level:3},{value:"Delay \u5ef6\u8fdf",id:"delay-\u5ef6\u8fdf",level:3},{value:"Double Tap \u53cc\u51fb",id:"double-tap-\u53cc\u51fb-1",level:3},{value:"Single Tap \u5355\u51fb",id:"single-tap-\u5355\u51fb",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:s};function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"double-tap-\u53cc\u51fb"},"Double Tap \u53cc\u51fb"),(0,i.kt)("p",null,"Capture double taps or single taps within a specified time frame. To be used with the Tap port in the ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction")," patch."),(0,i.kt)("p",null,"Use the Touch button on a layer to quickly add interactions."),(0,i.kt)("p",null,"\u6355\u6349\u6307\u5b9a\u65f6\u95f4\u5185\u7684\u53cc\u51fb\u6216\u5355\u51fb\u3002\u4e0e Interaction \u6a21\u5757\u7684Tap \u8f93\u51fa\u63a5\u53e3\u8fde\u63a5\u5728\u4e00\u8d77\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u56fe\u5c42\u4e0a\u7684 Touch \u6309\u94ae\u5feb\u901f\u6dfb\u52a0\u4ea4\u4e92\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image",src:n(19946).Z,width:"1232",height:"276"})),(0,i.kt)("h3",{id:"tap-\u8f7b\u70b9"},"Tap \u8f7b\u70b9"),(0,i.kt)("p",null,"A pulse that comes from the Interaction patch\u2019s Tap output."),(0,i.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u4ea4\u4e92\u6a21\u5757\u7684 Tap \u8f93\u51fa\u7aef\u53e3\u8fde\u63a5\u5230\u8fd9\u91cc\u3002"),(0,i.kt)("h3",{id:"delay-\u5ef6\u8fdf"},"Delay \u5ef6\u8fdf"),(0,i.kt)("p",null,"The maximum time duration between two taps to activate a double tap. By default, the delay is 0.3s."),(0,i.kt)("p",null,"\u5728\u6700\u5927\u6301\u7eed\u65f6\u95f4\u5185\u70b9\u51fb\u4e24\u6b21\u80fd\u6fc0\u6d3b\u53cc\u51fb\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5ef6\u8fdf\u4e3a0.3\u79d2\u3002"),(0,i.kt)("h3",{id:"double-tap-\u53cc\u51fb-1"},"Double Tap \u53cc\u51fb"),(0,i.kt)("p",null,"Pulses when two taps occur in the specified delay"),(0,i.kt)("p",null,"\u5f53\u53cc\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"),(0,i.kt)("h3",{id:"single-tap-\u5355\u51fb"},"Single Tap \u5355\u51fb"),(0,i.kt)("p",null,"Pulses when one tap occurs in the specified delay"),(0,i.kt)("p",null,"\u5f53\u70b9\u51fb\u53d1\u751f\u540e\uff0c\u5728\u6307\u5b9a\u7684\u5ef6\u8fdf\u540e\u4ea7\u751f\u8109\u51b2\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/"},"Interaction \u4ea4\u4e92")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Mouse"},"Mouse \u9f20\u6807")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Interaction/Long%20Press"},"Long Press \u957f\u6309")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Device/Touches"},"Touches \u89e6\u6478")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")))}f.isMDXComponent=!0},19946:function(e,t,n){t.Z=n.p+"assets/images/double-tap-e52e2e9f9b562a2195a7b23b204b0ed4.png"}}]);