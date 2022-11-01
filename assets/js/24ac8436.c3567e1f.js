"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[69366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||p[d]||l;return n?i.createElement(k,o(o({ref:t},m),{},{components:n})):i.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const l={title:"CAKeyframeAnimation",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},o="CAKeyframeAnimation",r={unversionedId:"motion/ios/CAKeyframeAnimation",id:"motion/ios/CAKeyframeAnimation",title:"CAKeyframeAnimation",description:"\u63d0\u4f9b\u56fe\u5c42\u72b6\u6001\u4e4b\u95f4\u52a8\u753b\u8f6c\u6362\u7684\u5bf9\u8c61\u3002",source:"@site/docs/motion/ios/CAKeyframeAnimation.md",sourceDirName:"motion/ios",slug:"/motion/ios/CAKeyframeAnimation",permalink:"/OrigamiStudio/docs/motion/ios/CAKeyframeAnimation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/motion/ios/CAKeyframeAnimation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667310473,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:20,frontMatter:{title:"CAKeyframeAnimation",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"motionSidebar",previous:{title:"CASpringAnimation",permalink:"/OrigamiStudio/docs/motion/ios/CASpringAnimation"},next:{title:"CATransition",permalink:"/OrigamiStudio/docs/motion/ios/CATransition"}},u={},s=[{value:"CAKeyframeAnimation",id:"cakeyframeanimation-1",level:2},{value:"\u8bbe\u8ba1\u53c2\u6570",id:"\u8bbe\u8ba1\u53c2\u6570",level:2},{value:"Number",id:"number",level:4},{value:"\u63d0\u4f9b\u5173\u952e\u5e27\u503c",id:"\u63d0\u4f9b\u5173\u952e\u5e27\u503c",level:3},{value:"values",id:"values",level:4},{value:"path",id:"path",level:4},{value:"\u5173\u952e\u5e27\u8ba1\u65f6",id:"\u5173\u952e\u5e27\u8ba1\u65f6",level:3},{value:"keyTimes",id:"keytimes",level:4},{value:"timingFunctions",id:"timingfunctions",level:4},{value:"calculationMode",id:"calculationmode",level:4},{value:"\u65cb\u8f6c\u6a21\u5f0f\u5c5e\u6027",id:"\u65cb\u8f6c\u6a21\u5f0f\u5c5e\u6027",level:3},{value:"rotationMode",id:"rotationmode",level:4},{value:"\u8d1d\u585e\u5c14\u6a21\u5f0f\u5c5e\u6027",id:"\u8d1d\u585e\u5c14\u6a21\u5f0f\u5c5e\u6027",level:3},{value:"tensionValues",id:"tensionvalues",level:4},{value:"continuityValues",id:"continuityvalues",level:4},{value:"biasValues",id:"biasvalues",level:4}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cakeyframeanimation"},"CAKeyframeAnimation"),(0,a.kt)("p",null,"\u63d0\u4f9b\u56fe\u5c42\u72b6\u6001\u4e4b\u95f4\u52a8\u753b\u8f6c\u6362\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/quartzcore/cakeyframeanimation"},"\u76f8\u5173\u94fe\u63a5")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"cakeyframeanimation-1"},"CAKeyframeAnimation"),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"CAKeyframeAnimation"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"Number",(0,a.kt)("span",null,"0")),(0,a.kt)("li",null,"-",(0,a.kt)("span",null,"\u63d0\u4f9b\u5173\u952e\u5e27\u503c/Providing keyframe values")),(0,a.kt)("li",null,"values",(0,a.kt)("span",null,"[...]")),(0,a.kt)("li",null,"path",(0,a.kt)("span",null)),(0,a.kt)("li",null,"-",(0,a.kt)("span",null,"\u5173\u952e\u5e27\u8ba1\u65f6/Keyframe timing")),(0,a.kt)("li",null,"keyTimes",(0,a.kt)("span",null,"[...]")),(0,a.kt)("li",null,"timingFuntions",(0,a.kt)("span",null,"[...]")),(0,a.kt)("li",null,"calculationMode",(0,a.kt)("span",null,"linear")),(0,a.kt)("li",null,"-",(0,a.kt)("span",null,"\u65cb\u8f6c\u6a21\u5f0f\u5c5e\u6027/Rotation Mode Attribute")),(0,a.kt)("li",null,"rotationMode",(0,a.kt)("span",null,"nil")),(0,a.kt)("li",null,"-",(0,a.kt)("span",null,"\u8d1d\u585e\u5c14\u6a21\u5f0f\u5c5e\u6027/Cubic Mode Attributes")),(0,a.kt)("li",null,"tensionValues",(0,a.kt)("span",null,"[...]")),(0,a.kt)("li",null,"continuityValues",(0,a.kt)("span",null,"[...]")),(0,a.kt)("li",null,"biasValues",(0,a.kt)("span",null,"[...]"))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Value",(0,a.kt)("span",null,"0")," ")))),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u53c2\u6570"},"\u8bbe\u8ba1\u53c2\u6570"),(0,a.kt)("h4",{id:"number"},"Number"),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u5f00\u59cb\u548c\u7ed3\u675f\u3002"),(0,a.kt)("h3",{id:"\u63d0\u4f9b\u5173\u952e\u5e27\u503c"},"\u63d0\u4f9b\u5173\u952e\u5e27\u503c"),(0,a.kt)("h4",{id:"values"},"values"),(0,a.kt)("p",null,"\u6307\u5b9a\u7528\u4e8e\u52a8\u753b\u7684\u5173\u952e\u5e27\u503c\u7684\u5bf9\u8c61\u6570\u7ec4\u3002"),(0,a.kt)("h4",{id:"path"},"path"),(0,a.kt)("p",null,"\u8981\u9075\u5faa\u7684\u57fa\u4e8e\u70b9\u7684\u5c5e\u6027\u7684\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"\u5173\u952e\u5e27\u8ba1\u65f6"},"\u5173\u952e\u5e27\u8ba1\u65f6"),(0,a.kt)("h4",{id:"keytimes"},"keyTimes"),(0,a.kt)("p",null,"\u4e00\u4e2a\u53ef\u9009\u7684NSNumber\u5bf9\u8c61\u6570\u7ec4\uff0c\u7528\u4e8e\u5b9a\u4e49\u5e94\u7528\u7ed9\u5b9a\u5173\u952e\u5e27\u6bb5\u7684\u65f6\u95f4\u3002"),(0,a.kt)("h4",{id:"timingfunctions"},"timingFunctions"),(0,a.kt)("p",null,"\u4e00\u4e2a\u53ef\u9009\u7684\u5bf9\u8c61\u6570\u7ec4\uff0c\u7528\u4e8e\u5b9a\u4e49\u6bcf\u4e2a\u5173\u952e\u5e27\u6bb5\u7684\u6b65\u8c03\u3002CAMediaTimingFunction"),(0,a.kt)("h4",{id:"calculationmode"},"calculationMode"),(0,a.kt)("p",null,"\u6307\u5b9a\u63a5\u6536\u5668\u5982\u4f55\u8ba1\u7b97\u4e2d\u95f4\u5173\u952e\u5e27\u503c\uff0c\u9ed8\u8ba4\u4e3a Linear\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412500-calculationmode"},"\u76f8\u5173\u94fe\u63a5")),(0,a.kt)("h3",{id:"\u65cb\u8f6c\u6a21\u5f0f\u5c5e\u6027"},"\u65cb\u8f6c\u6a21\u5f0f\u5c5e\u6027"),(0,a.kt)("h4",{id:"rotationmode"},"rotationMode"),(0,a.kt)("p",null,"\u786e\u5b9a\u6cbf\u8def\u5f84\u8bbe\u7f6e\u52a8\u753b\u7684\u5bf9\u8c61\u662f\u5426\u65cb\u8f6c\u4ee5\u5339\u914d\u8def\u5f84\u5207\u7ebf\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412454-rotationmode"},"\u76f8\u5173\u94fe\u63a5")),(0,a.kt)("h3",{id:"\u8d1d\u585e\u5c14\u6a21\u5f0f\u5c5e\u6027"},"\u8d1d\u585e\u5c14\u6a21\u5f0f\u5c5e\u6027"),(0,a.kt)("h4",{id:"tensionvalues"},"tensionValues"),(0,a.kt)("p",null,"NSNumber\u5b9a\u4e49\u66f2\u7ebf\u7d27\u5bc6\u5ea6\u7684\u5bf9\u8c61\u6570\u7ec4\u3002"),(0,a.kt)("h4",{id:"continuityvalues"},"continuityValues"),(0,a.kt)("p",null,"NSNumber\u5b9a\u4e49\u65f6\u5e8f\u66f2\u7ebf\u62d0\u89d2\u6e05\u6670\u5ea6\u7684\u5bf9\u8c61\u6570\u7ec4\u3002"),(0,a.kt)("h4",{id:"biasvalues"},"biasValues"),(0,a.kt)("p",null,"NSNumber\u5b9a\u4e49\u66f2\u7ebf\u76f8\u5bf9\u4e8e\u63a7\u5236\u70b9\u7684\u4f4d\u7f6e\u7684\u5bf9\u8c61\u6570\u7ec4\u3002"))}p.isMDXComponent=!0}}]);