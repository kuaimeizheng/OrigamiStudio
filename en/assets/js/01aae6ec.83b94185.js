"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[35867],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=i.createContext({}),c=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return i.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=c(n),h=a,g=s["".concat(u,".").concat(h)]||s[h]||p[h]||r;return n?i.createElement(g,o(o({ref:e},d),{},{components:n})):i.createElement(g,o({ref:e},d))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31120:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:5},o="Navigation Bar \u5bfc\u822a\u680f",l={unversionedId:"documentation/iOS/Navigation Bar",id:"documentation/iOS/Navigation Bar",title:"Navigation Bar \u5bfc\u822a\u680f",description:"An iOS navigation bar with customizable left and right actions. It offers large and standard title styles. Add sub-layers to customize the contents of the search bar.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/iOS/Navigation Bar.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Navigation Bar",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Navigation Bar",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Navigation Bar.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Fake Keyboard \u6a21\u62df\u952e\u76d8",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Fake Keyboard"},next:{title:"Notification \u901a\u77e5",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Notification"}},u={},c=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Large Title \u5927\u6807\u9898",id:"large-title-\u5927\u6807\u9898",level:3},{value:"Show Search \u663e\u793a\u641c\u7d22",id:"show-search-\u663e\u793a\u641c\u7d22",level:3},{value:"Background \u80cc\u666f",id:"background-\u80cc\u666f",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Left Action Text \u5de6\u4fa7\u52a8\u4f5c\u6587\u672c",id:"left-action-text-\u5de6\u4fa7\u52a8\u4f5c\u6587\u672c",level:3},{value:"Left Action Back Arrow \u5de6\u4fa7\u8fd4\u56de\u7bad\u5934",id:"left-action-back-arrow-\u5de6\u4fa7\u8fd4\u56de\u7bad\u5934",level:3},{value:"Right Action Text \u53f3\u4fa7\u52a8\u4f5c\u6587\u672c",id:"right-action-text-\u53f3\u4fa7\u52a8\u4f5c\u6587\u672c",level:3},{value:"Right Action Style \u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f",id:"right-action-style-\u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f",level:3},{value:"Left Tap \u70b9\u51fb\u5de6\u4fa7",id:"left-tap-\u70b9\u51fb\u5de6\u4fa7",level:3},{value:"Right Tap \u70b9\u51fb\u53f3\u4fa7",id:"right-tap-\u70b9\u51fb\u53f3\u4fa7",level:3},{value:"Search Tap \u70b9\u51fb\u641c\u7d22",id:"search-tap-\u70b9\u51fb\u641c\u7d22",level:3},{value:"Height \u9ad8\u5ea6",id:"height-\u9ad8\u5ea6",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"navigation-bar-\u5bfc\u822a\u680f"},"Navigation Bar \u5bfc\u822a\u680f"),(0,a.kt)("p",null,"An iOS navigation bar with customizable left and right actions. It offers large and standard title styles. Add sub-layers to customize the contents of the search bar."),(0,a.kt)("p",null,"iOS\u5bfc\u822a\u680f\u53ef\u81ea\u5b9a\u4e49\u5de6\u53f3\u52a8\u4f5c\u6309\u94ae\u3002\u63d0\u4f9b\u5927\u7684\u548c\u6807\u51c6\u6807\u9898\u6837\u5f0f\u3002\u6dfb\u52a0\u5b50\u56fe\u5c42\u4ee5\u81ea\u5b9a\u4e49\u641c\u7d22\u680f\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"Use the Touch button on the component to capture taps on individual buttons in the navigation bar."),(0,a.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684Touch\u6309\u94ae\u6765\u6355\u83b7\u5bfc\u822a\u680f\u4e2d\u5355\u4e2a\u6309\u94ae\u4e0a\u7684\u70b9\u51fb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(99221).Z,width:"1554",height:"504"})),(0,a.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,a.kt)("p",null,"A boolean that is true when the status bar is displayed."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u72b6\u6001\u680f\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002"),(0,a.kt)("h3",{id:"title-\u6807\u9898"},"Title \u6807\u9898"),(0,a.kt)("p",null,"A text string that represents the title of the page."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u9875\u9762\u7684\u6807\u9898\u3002"),(0,a.kt)("h3",{id:"large-title-\u5927\u6807\u9898"},"Large Title \u5927\u6807\u9898"),(0,a.kt)("p",null,"A boolean that is true when the title is using a large title treatment. Turn off when scrolling past the initial state."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u6807\u9898\u4f7f\u7528\u5927\u578b\u6807\u9898\u65f6\uff0c\u5e03\u5c14\u503c\u4e3a\u771f\u3002\u6eda\u52a8\u8d85\u8fc7\u521d\u59cb\u72b6\u6001\u65f6\u5173\u95ed\u3002"),(0,a.kt)("h3",{id:"show-search-\u663e\u793a\u641c\u7d22"},"Show Search \u663e\u793a\u641c\u7d22"),(0,a.kt)("p",null,"A boolean that shows a search field in the navigation bar."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u663e\u793a\u5bfc\u822a\u680f\u4e2d\u7684\u641c\u7d22\u6846\u3002"),(0,a.kt)("h3",{id:"background-\u80cc\u666f"},"Background \u80cc\u666f"),(0,a.kt)("p",null,"The color of the navigation bar."),(0,a.kt)("p",null,"\u5bfc\u822a\u680f\u7684\u80cc\u666f\u989c\u8272\u3002"),(0,a.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,a.kt)("p",null,"The color of the left and right text buttons."),(0,a.kt)("p",null,"\u5de6\u4fa7\u548c\u53f3\u4fa7\u6587\u672c\u6309\u94ae\u7684\u989c\u8272\u3002"),(0,a.kt)("h3",{id:"left-action-text-\u5de6\u4fa7\u52a8\u4f5c\u6587\u672c"},"Left Action Text \u5de6\u4fa7\u52a8\u4f5c\u6587\u672c"),(0,a.kt)("p",null,"A text string that represents the title of the left button."),(0,a.kt)("p",null,"\u4e00\u4e2a\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5de6\u6309\u94ae\u7684\u6807\u9898\u3002"),(0,a.kt)("h3",{id:"left-action-back-arrow-\u5de6\u4fa7\u8fd4\u56de\u7bad\u5934"},"Left Action Back Arrow \u5de6\u4fa7\u8fd4\u56de\u7bad\u5934"),(0,a.kt)("p",null,"A boolean that displays a back arrow in the left."),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5728\u5de6\u4fa7\u663e\u793a\u8fd4\u56de\u7bad\u5934\u3002"),(0,a.kt)("h3",{id:"right-action-text-\u53f3\u4fa7\u52a8\u4f5c\u6587\u672c"},"Right Action Text \u53f3\u4fa7\u52a8\u4f5c\u6587\u672c"),(0,a.kt)("p",null,"A text string that represents the title of the right button."),(0,a.kt)("p",null,"\u8868\u793a\u53f3\u4fa7\u6807\u9898\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("h3",{id:"right-action-style-\u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f"},"Right Action Style \u53f3\u4fa7\u52a8\u4f5c\u6837\u5f0f"),(0,a.kt)("p",null,"Text style for Right Text: plain (blue), done (semi-bold and blue), inactive (grey)."),(0,a.kt)("p",null,"\u53f3\u4fa7\u6587\u672c\u7684\u6837\u5f0f\uff1a\u666e\u901a\uff08\u84dd\u8272\uff09\uff0c\u5b8c\u6210\uff08\u4e2d\u7c97\u4f53\u548c\u84dd\u8272\uff09\uff0c\u65e0\u6548\uff08\u7070\u8272\uff09\u3002"),(0,a.kt)("h3",{id:"left-tap-\u70b9\u51fb\u5de6\u4fa7"},"Left Tap \u70b9\u51fb\u5de6\u4fa7"),(0,a.kt)("p",null,"A pulse that represents when the left button is tapped."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u70b9\u51fb\u5de6\u4fa7\u6309\u94ae\u65f6\u3002"),(0,a.kt)("h3",{id:"right-tap-\u70b9\u51fb\u53f3\u4fa7"},"Right Tap \u70b9\u51fb\u53f3\u4fa7"),(0,a.kt)("p",null,"A pulse that represents when the right button is tapped."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u70b9\u51fb\u53f3\u4fa7\u6309\u94ae\u65f6\u3002"),(0,a.kt)("h3",{id:"search-tap-\u70b9\u51fb\u641c\u7d22"},"Search Tap \u70b9\u51fb\u641c\u7d22"),(0,a.kt)("p",null,"A pulse that represents when the search bar is tapped."),(0,a.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u70b9\u51fb\u641c\u7d22\u680f\u65f6\u3002"),(0,a.kt)("h3",{id:"height-\u9ad8\u5ea6"},"Height \u9ad8\u5ea6"),(0,a.kt)("p",null,"A number representing the height of the navigation bar, in points."),(0,a.kt)("p",null,"\u8868\u793a\u5bfc\u822a\u680f\u9ad8\u5ea6\u7684\u6570\u5b57\uff0c\u4ee5\u70b9\u4e3a\u5355\u4f4d\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}p.isMDXComponent=!0},99221:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/navigation-bar-05f96c81f110f7a557ff28b5f659c0c7.png"}}]);