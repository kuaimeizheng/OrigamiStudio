"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[15501],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(i),m=n,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||r;return i?a.createElement(f,o(o({ref:t},d),{},{components:i})):a.createElement(f,o({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=i[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}s.displayName="MDXCreateElement"},72791:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=i(87462),n=(i(67294),i(3905));const r={sidebar_position:2},o="Visual Effect \u6bdb\u73bb\u7483\u6548\u679c",l={unversionedId:"documentation/iOS/Visual Effect",id:"documentation/iOS/Visual Effect",title:"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c",description:"An iOS visual effect view that blurs all the layers below it.",source:"@site/docs/documentation/iOS/Visual Effect.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Visual Effect",permalink:"/OrigamiStudio/docs/documentation/iOS/Visual Effect",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Visual Effect.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1664356247,formattedLastUpdatedAt:"2022\u5e749\u670828\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Text Field \u6587\u672c\u8f93\u5165\u6846",permalink:"/OrigamiStudio/docs/documentation/iOS/Text Field"}},c={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Style \u6837\u5f0f",id:"style-\u6837\u5f0f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visual-effect-\u6bdb\u73bb\u7483\u6548\u679c"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c"),(0,n.kt)("p",null,"An iOS visual effect view that blurs all the layers below it."),(0,n.kt)("p",null,"iOS\u89c6\u89c9\u6548\u679c\u89c6\u56fe\uff0c\u6a21\u7cca\u4e0b\u9762\u7684\u6240\u6709\u56fe\u5c42\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:i(69283).Z,width:"1542",height:"228"})),(0,n.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,n.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,n.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"The opacity of the layer."),(0,n.kt)("h3",{id:"style-\u6837\u5f0f"},"Style \u6837\u5f0f"),(0,n.kt)("p",null,"The style of the blur: light, very light, or dark."),(0,n.kt)("p",null,"\u6a21\u7cca\u7684\u6837\u5f0f\uff1a\u6d45\u8272\u3001\u975e\u5e38\u6d45\u3001\u6df1\u8272\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/iOS/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}p.isMDXComponent=!0},69283:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/visual-effect-55ef42509ef45926ec2e92bf55beb11f.png"}}]);