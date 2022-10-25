"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[44512],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(b,o(o({ref:t},s),{},{components:a})):r.createElement(b,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:5},o="Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",l={unversionedId:"documentation/Utility/Variable Broadcaster",id:"documentation/Utility/Variable Broadcaster",title:"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668",description:"Sends a value to any Variable Receiver patch set to receive the same name. Used to simplify and organize patches by replacing the cables between patches.",source:"@site/docs/documentation/Utility/Variable Broadcaster.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/Variable Broadcaster",permalink:"/OrigamiStudio/docs/documentation/Utility/Variable Broadcaster",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/Variable Broadcaster.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1666672704,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Transition \u8fc7\u6e21",permalink:"/OrigamiStudio/docs/documentation/Utility/Transition"},next:{title:"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668",permalink:"/OrigamiStudio/docs/documentation/Utility/Variable Receiver"}},c={},p=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"variable-broadcaster-\u53d8\u91cf\u53d1\u9001\u5668"},"Variable Broadcaster \u53d8\u91cf\u53d1\u9001\u5668"),(0,n.kt)("p",null,"Sends a value to any Variable Receiver patch set to receive the same name. Used to simplify and organize patches by replacing the cables between patches."),(0,n.kt)("p",null,"\u5c06\u503c\u53d1\u9001\u5230\u4efb\u4f55\u53d8\u91cf\u63a5\u6536\u5668\u6a21\u5757\u96c6\u4ee5\u63a5\u6536\u76f8\u540c\u7684\u540d\u79f0\u3002\u7528\u4e8e\u901a\u8fc7\u66ff\u6362\u6a21\u5757\u4e4b\u95f4\u7684\u8fde\u7ebf\u6765\u7b80\u5316\u548c\u6574\u7406\u6a21\u5757\u3002"),(0,n.kt)("p",null,"By default, the variable can be used locally, and is available only within the current patch graph. Click the popup menu (or right-click the patch) to change the scope to \u201cGlobal\u201d to make the value available within the current patch graph as well as any child components. Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Variables"},"Global Variables"),"."),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u53d8\u91cf\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\uff0c\u5e76\u4e14\u4ec5\u5728\u5f53\u524d\u6a21\u5757\u56fe\u4e2d\u53ef\u7528\u3002\u5355\u51fb\u5f39\u51fa\u83dc\u5355\uff08\u6216\u53f3\u952e\u5355\u51fb\u6a21\u5757\uff09\u4ee5\u5c06\u8303\u56f4\u66f4\u6539\u4e3a\u201c\u5168\u5c40\u201d\uff0c\u4ee5\u4f7f\u8be5\u503c\u5728\u5f53\u524d\u6a21\u5757\u56fe\u4e2d\u4ee5\u53ca\u4efb\u4f55\u5b50\u7ec4\u4ef6\u4e2d\u53ef\u7528\u3002\u8be6\u7ec6\u4e86\u89e3",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Concepts/Variables"},"\u5168\u5c40\u53d8\u91cf"),"\u3002"),(0,n.kt)("p",null,"Rename the patch to set the name of the value."),(0,n.kt)("p",null,"\u91cd\u547d\u540d\u6a21\u5757\u4ee5\u8bbe\u7f6e\u8be5\u503c\u7684\u540d\u79f0\u3002"),(0,n.kt)("p",null,"Right-click the patch to change the type of the value, or to change the scope of where the variable is available."),(0,n.kt)("p",null,"\u53f3\u952e\u5355\u51fb\u6a21\u5757\u4ee5\u66f4\u6539\u503c\u7684\u7c7b\u578b\uff0c\u6216\u66f4\u6539\u53d8\u91cf\u53ef\u7528\u7684\u8303\u56f4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:a(61176).Z,width:"1424",height:"204"})),(0,n.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,n.kt)("p",null,"A value to broadcast."),(0,n.kt)("p",null,"\u8981\u53d1\u9001\u7684\u503c\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Variable%20Receiver"},"Variable Receiver \u53d8\u91cf\u63a5\u6536\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Splitter"},"Splitter \u5206\u79bb\u5668")))}u.isMDXComponent=!0},61176:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/variable-broadcaster-0f1472e5522c9b2d1b090ebabd6243c3.png"}}]);