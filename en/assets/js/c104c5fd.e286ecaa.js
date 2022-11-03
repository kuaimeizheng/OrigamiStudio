"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[56965],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>p});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(o),p=n,f=m["".concat(u,".").concat(p)]||m[p]||c[p]||i;return o?r.createElement(f,a(a({ref:t},s),{},{components:o})):r.createElement(f,a({ref:t},s))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},48328:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const i={sidebar_position:5},a="Photo Albums \u76f8\u518c",l={unversionedId:"documentation/Media/Photo Albums",id:"documentation/Media/Photo Albums",title:"Photo Albums \u76f8\u518c",description:"Retrieve album information from Camera Roll on iOS or Photo Library on macOS",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Media/Photo Albums.md",sourceDirName:"documentation/Media",slug:"/documentation/Media/Photo Albums",permalink:"/OrigamiStudio/en/docs/documentation/Media/Photo Albums",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Media/Photo Albums.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667493511,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Audio Metering \u97f3\u9891\u6d4b\u91cf",permalink:"/OrigamiStudio/en/docs/documentation/Media/Audio Metering"},next:{title:"Photo Library Media \u7167\u7247\u5e93\u5a92\u4f53",permalink:"/OrigamiStudio/en/docs/documentation/Media/Photo Library Media"}},u={},d=[{value:"Sort By \u6392\u5e8f\u65b9\u5f0f",id:"sort-by-\u6392\u5e8f\u65b9\u5f0f",level:3},{value:"Order \u987a\u5e8f",id:"order-\u987a\u5e8f",level:3},{value:"Index \u7d22\u5f15",id:"index-\u7d22\u5f15",level:3},{value:"Title \u6807\u9898",id:"title-\u6807\u9898",level:3},{value:"Cover Image \u5c01\u9762\u56fe\u7247",id:"cover-image-\u5c01\u9762\u56fe\u7247",level:3},{value:"Count \u6570\u91cf",id:"count-\u6570\u91cf",level:3},{value:"Error \u9519\u8bef",id:"error-\u9519\u8bef",level:3}],s={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"photo-albums-\u76f8\u518c"},"Photo Albums \u76f8\u518c"),(0,n.kt)("p",null,"Retrieve album information from Camera Roll on iOS or Photo Library on macOS"),(0,n.kt)("p",null,"\u4eceiOS\u4e0a\u7684Camera Roll\u6216macOS\u4e0a\u7684Photo Library\u4e2d\u68c0\u7d22\u76f8\u518c\u4fe1\u606f"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:o(80761).Z,width:"1498",height:"326"})),(0,n.kt)("h3",{id:"sort-by-\u6392\u5e8f\u65b9\u5f0f"},"Sort By \u6392\u5e8f\u65b9\u5f0f"),(0,n.kt)("p",null,"The criteria by which the Albums output is going to be sorted. The options are:"),(0,n.kt)("p",null,"\u5bf9Albums\u8f93\u51fa\u8fdb\u884c\u6392\u5e8f\u7684\u6807\u51c6\u3002\u6709\u4ee5\u4e0b\u9009\u9879\u662f=:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Name. \u540d\u79f0"),(0,n.kt)("li",{parentName:"ol"},"Count.  \u6570\u91cf"),(0,n.kt)("li",{parentName:"ol"},"Start Date. (This is based on the starting date of its contents, it is not the creation date of the Album) \u5f00\u59cb\u65e5\u671f\u3002(\u8fd9\u662f\u57fa\u4e8e\u5176\u5185\u5bb9\u7684\u5f00\u59cb\u65e5\u671f\uff0c\u800c\u4e0d\u662f\u76f8\u518c\u7684\u521b\u5efa\u65e5\u671f)"),(0,n.kt)("li",{parentName:"ol"},"End Date. \u7ed3\u675f\u65e5\u671f")),(0,n.kt)("h3",{id:"order-\u987a\u5e8f"},"Order \u987a\u5e8f"),(0,n.kt)("p",null,"Works together with Sort By to determine if the list should be in Ascending or Descending order."),(0,n.kt)("p",null,"\u4e0e Sort By \u4e00\u8d77\u4f7f\u7528\u4ee5\u786e\u5b9a\u5217\u8868\u5e94\u8be5\u6309\u5347\u5e8f\u8fd8\u662f\u964d\u5e8f\u6392\u5217\u3002"),(0,n.kt)("h3",{id:"index-\u7d22\u5f15"},"Index \u7d22\u5f15"),(0,n.kt)("p",null,"A loop of photo media indices."),(0,n.kt)("p",null,"\u7167\u7247\u5a92\u4f53\u7d22\u5f15\u7684\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"title-\u6807\u9898"},"Title \u6807\u9898"),(0,n.kt)("p",null,"A loop of Texts with the titles of each album."),(0,n.kt)("p",null,"\u6bcf\u4e2a\u4e13\u8f91\u6807\u9898\u7684\u6587\u672c\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"cover-image-\u5c01\u9762\u56fe\u7247"},"Cover Image \u5c01\u9762\u56fe\u7247"),(0,n.kt)("p",null,"A loop of Images with the first photo of each album."),(0,n.kt)("p",null,"\u5e26\u6709\u6bcf\u4e2a\u4e13\u8f91\u7684\u7b2c\u4e00\u5f20\u7167\u7247\u7684\u56fe\u50cf\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"count-\u6570\u91cf"},"Count \u6570\u91cf"),(0,n.kt)("p",null,"A loop of Numbers with the estimated count of assets of each Album."),(0,n.kt)("p",null,"\u5e26\u6709\u6bcf\u4e2a\u4e13\u8f91\u8d44\u4ea7\u4f30\u8ba1\u6570\u7684\u6570\u5b57\u5faa\u73af\u3002"),(0,n.kt)("h3",{id:"error-\u9519\u8bef"},"Error \u9519\u8bef"),(0,n.kt)("p",null,"A boolean if there is an error retrieving photo albums. Usually due to permission issues."),(0,n.kt)("p",null,"\u5982\u679c\u68c0\u7d22\u76f8\u518c\u51fa\u9519\uff0c\u5219\u4e3a\u5e03\u5c14\u503c\u3002\u901a\u5e38\u662f\u7531\u4e8e\u6743\u9650\u95ee\u9898\u3002"))}c.isMDXComponent=!0},80761:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/photo-albums-ddfbfcf02eff79f7d017ef7a25912d0f.png"}}]);