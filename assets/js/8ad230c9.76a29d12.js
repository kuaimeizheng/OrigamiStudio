"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[68039],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=l.createContext({}),p=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?l.createElement(g,a(a({ref:e},c),{},{components:n})):l.createElement(g,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r.mdxType="string"==typeof t?t:i,a[1]=r;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97756:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const o={title:"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",r={unversionedId:"documentation/Interaction/Scroll Settings",id:"documentation/Interaction/Scroll Settings",title:"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",description:"Customize a Scroll patch\u2019s behavior.",source:"@site/docs/documentation/Interaction/Scroll Settings.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Scroll Settings",permalink:"/OrigamiStudio/docs/documentation/Interaction/Scroll Settings",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Scroll Settings.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667994408,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Pop Switch \u6d41\u884c\u5f00\u5173",permalink:"/OrigamiStudio/docs/documentation/Interaction/Pop Switch"},next:{title:"Scroll \u6eda\u52a8",permalink:"/OrigamiStudio/docs/documentation/Interaction/Scroll"}},u={},p=[{value:"Content Size \u5185\u5bb9\u5927\u5c0f",id:"content-size-\u5185\u5bb9\u5927\u5c0f",level:3},{value:"Direction Locking \u65b9\u5411\u9501\u5b9a",id:"direction-locking-\u65b9\u5411\u9501\u5b9a",level:3},{value:"Page Size \u9875\u9762\u5927\u5c0f",id:"page-size-\u9875\u9762\u5927\u5c0f",level:3},{value:"Page Padding \u9875\u9762\u95f4\u8ddd",id:"page-padding-\u9875\u9762\u95f4\u8ddd",level:3},{value:"Jump Style X \u8df3\u8f6c\u5230 X \u8f74\u6837\u5f0f",id:"jump-style-x-\u8df3\u8f6c\u5230-x-\u8f74\u6837\u5f0f",level:3},{value:"Jump to X \u8df3\u8f6c\u5230 X \u539f\u59cb\u503c",id:"jump-to-x-\u8df3\u8f6c\u5230-x-\u539f\u59cb\u503c",level:3},{value:"Jump Position X \u8df3\u8f6c\u5230 X \u8f74\u5750\u6807",id:"jump-position-x-\u8df3\u8f6c\u5230-x-\u8f74\u5750\u6807",level:3},{value:"Jump Style Y \u8df3\u8f6c\u5230 Y \u8f74\u6837\u5f0f",id:"jump-style-y-\u8df3\u8f6c\u5230-y-\u8f74\u6837\u5f0f",level:3},{value:"Jump to Y \u8df3\u8f6c\u5230 Y \u539f\u59cb\u503c",id:"jump-to-y-\u8df3\u8f6c\u5230-y-\u539f\u59cb\u503c",level:3},{value:"Jump Position Y \u8df3\u8f6c\u5230 Y \u8f74\u5750\u6807",id:"jump-position-y-\u8df3\u8f6c\u5230-y-\u8f74\u5750\u6807",level:3},{value:"Deceleration Rate \u51cf\u901f\u7684\u901f\u5ea6",id:"deceleration-rate-\u51cf\u901f\u7684\u901f\u5ea6",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],c={toc:p};function s(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scrolling-settings-\u6eda\u52a8\u8bbe\u7f6e"},"Scrolling Settings \u6eda\u52a8\u8bbe\u7f6e"),(0,i.kt)("p",null,"Customize a ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll")," patch\u2019s behavior."),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49 ",(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")," \u6a21\u5757\u7684\u884c\u4e3a\u3002"),(0,i.kt)("div",{className:"patch-container"},(0,i.kt)("div",{className:"patch processor"},(0,i.kt)("h3",null,"Scrolling Settings"),(0,i.kt)("ul",{className:"inputs"},(0,i.kt)("li",null,"Content Size",(0,i.kt)("small",null,"W",(0,i.kt)("span",null,"0"),"H",(0,i.kt)("span",null,"0"))),(0,i.kt)("li",null,"Direction Locking",(0,i.kt)("span",{className:"patch-pulse-preview"},(0,i.kt)("span",{className:"dot"}))),(0,i.kt)("li",null,"Page Size",(0,i.kt)("small",null,"W",(0,i.kt)("span",null,"0"),"H",(0,i.kt)("span",null,"0"))),(0,i.kt)("li",null,"Page Padding",(0,i.kt)("small",null,"W",(0,i.kt)("span",null,"0"),"H",(0,i.kt)("span",null,"0"))),(0,i.kt)("li",null,"Jump Style X",(0,i.kt)("span",null,"Instant")),(0,i.kt)("li",null,"Jump to X",(0,i.kt)("span",{className:"patch-pulse-preview"},(0,i.kt)("span",{className:"dot"}))),(0,i.kt)("li",null,"Jump Position X",(0,i.kt)("span",null,"Instant")),(0,i.kt)("li",null,"Jump Style Y",(0,i.kt)("span",null,"Instant")),(0,i.kt)("li",null,"Jump to Y",(0,i.kt)("span",{className:"patch-pulse-preview"},(0,i.kt)("span",{className:"dot"}))),(0,i.kt)("li",null,"Jump Position Y",(0,i.kt)("span",null,"0")),(0,i.kt)("li",null,"Deceleration Rate",(0,i.kt)("span",null,"Normal"))),(0,i.kt)("ul",{className:"outputs"},(0,i.kt)("li",null,(0,i.kt)("span",null))))),(0,i.kt)("h3",{id:"content-size-\u5185\u5bb9\u5927\u5c0f"},"Content Size \u5185\u5bb9\u5927\u5c0f"),(0,i.kt)("p",null,"The width and height of the layer to be scrolled. Defaults to the size of the layer selected in the accompanying Scroll patch."),(0,i.kt)("p",null,"\u6eda\u52a8\u7684\u56fe\u5c42\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002\u9ed8\u8ba4\u5927\u5c0f\u662f Scroll \u6a21\u5757\u9009\u62e9\u7684\u56fe\u5c42\u7684\u5927\u5c0f\u3002"),(0,i.kt)("h3",{id:"direction-locking-\u65b9\u5411\u9501\u5b9a"},"Direction Locking \u65b9\u5411\u9501\u5b9a"),(0,i.kt)("p",null,"A boolean that is true when scrolling is locked to the initial direction a user scrolls it per touch."),(0,i.kt)("p",null,"\u7528\u6237\u6bcf\u6b21\u6eda\u52a8\u65f6\u9501\u5b9a\u5230\u521d\u59cb\u65b9\u5411\u65f6\u3002"),(0,i.kt)("h3",{id:"page-size-\u9875\u9762\u5927\u5c0f"},"Page Size \u9875\u9762\u5927\u5c0f"),(0,i.kt)("p",null,"The width and/or height of a page when the Scroll patch is set to Paging. The page will be centered in the bounds. Only needs to be defined in the axis that the Scroll patch is paging (ex: only page width is required for a Paging X Scroll). Ensure the layer being scrolled is divisible by the page size and padding."),(0,i.kt)("p",null,"\u5f53 Scroll \u6a21\u5757\u8bbe\u7f6e\u4e3a Paging \u65f6\u9875\u9762\u7684\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u3002\u9875\u9762\u5c45\u4e2d\u3002\u53ea\u9700\u8981\u5728 Scroll \u6a21\u5757\u8bbe\u7f6e\u4e3a Paging \u65f6\u5b9a\u4e49\u8f74\uff08\u4f8b\uff1a\u53ea\u9700\u8981\u5206\u9875 x \u6eda\u52a8\u6240\u9700\u7684\u9875\u9762\u5bbd\u5ea6\uff09\u3002\u786e\u4fdd\u56fe\u5c42\u53ef\u4ee5\u6574\u9664\u9875\u9762\u5927\u5c0f\u548c\u5185\u8fb9\u8ddd\u3002"),(0,i.kt)("h3",{id:"page-padding-\u9875\u9762\u95f4\u8ddd"},"Page Padding \u9875\u9762\u95f4\u8ddd"),(0,i.kt)("p",null,"The padding between each page when the Scroll patch is set to Paging. Only needs to be defined in the axis that the Scroll patch is paging (ex: only padding width is required for a Paging X Scroll)."),(0,i.kt)("p",null,"\u5f53 Scroll \u6a21\u5757\u8bbe\u7f6e\u4e3a Paging \u65f6\uff0c\u6bcf\u9875\u4e4b\u95f4\u7684\u5185\u8fb9\u8ddd\u3002\u53ea\u9700\u8981\u5728 Scroll \u6a21\u5757\u662f Paging \u65f6\u5b9a\u4e49\u8f74\uff08\u4f8b\uff1a\u4ec5\u4e3a\u5206\u9875 x \u6eda\u52a8\u6240\u9700\u7684\u586b\u5145\u5bbd\u5ea6\uff09\u3002"),(0,i.kt)("h3",{id:"jump-style-x-\u8df3\u8f6c\u5230-x-\u8f74\u6837\u5f0f"},"Jump Style X \u8df3\u8f6c\u5230 X \u8f74\u6837\u5f0f"),(0,i.kt)("p",null,"The jump style (animated or instant) when jumping horizontally."),(0,i.kt)("h3",{id:"jump-to-x-\u8df3\u8f6c\u5230-x-\u539f\u59cb\u503c"},"Jump to X \u8df3\u8f6c\u5230 X \u539f\u59cb\u503c"),(0,i.kt)("p",null,"A pulse that jumps the Scroll X position."),(0,i.kt)("p",null,"X \u8f74\u590d\u4f4d\u3002"),(0,i.kt)("h3",{id:"jump-position-x-\u8df3\u8f6c\u5230-x-\u8f74\u5750\u6807"},"Jump Position X \u8df3\u8f6c\u5230 X \u8f74\u5750\u6807"),(0,i.kt)("p",null,"The X position to jump to."),(0,i.kt)("p",null,"\u8df3\u8f6c\u5230\u5b9a\u4e49\u7684 X \u5750\u6807\u503c\u3002"),(0,i.kt)("h3",{id:"jump-style-y-\u8df3\u8f6c\u5230-y-\u8f74\u6837\u5f0f"},"Jump Style Y \u8df3\u8f6c\u5230 Y \u8f74\u6837\u5f0f"),(0,i.kt)("p",null,"The jump style (animated or instant) when jumping vertically."),(0,i.kt)("h3",{id:"jump-to-y-\u8df3\u8f6c\u5230-y-\u539f\u59cb\u503c"},"Jump to Y \u8df3\u8f6c\u5230 Y \u539f\u59cb\u503c"),(0,i.kt)("p",null,"A pulse that jumps the Scroll Y position."),(0,i.kt)("p",null,"Y \u8f74\u590d\u4f4d\u3002"),(0,i.kt)("h3",{id:"jump-position-y-\u8df3\u8f6c\u5230-y-\u8f74\u5750\u6807"},"Jump Position Y \u8df3\u8f6c\u5230 Y \u8f74\u5750\u6807"),(0,i.kt)("p",null,"The Y position to jump to."),(0,i.kt)("p",null,"\u8df3\u8f6c\u5230\u5b9a\u4e49\u7684 Y \u5750\u6807\u503c\u3002"),(0,i.kt)("h3",{id:"deceleration-rate-\u51cf\u901f\u7684\u901f\u5ea6"},"Deceleration Rate \u51cf\u901f\u7684\u901f\u5ea6"),(0,i.kt)("p",null,"include Normal\u3001Fast"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("p",null,"The settings to pass to a Scroll patch."),(0,i.kt)("p",null,"\u8fde\u63a5\u5230 Scroll \u6a21\u5757\u7684 Setting \u63a5\u53e3\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")))}s.isMDXComponent=!0}}]);