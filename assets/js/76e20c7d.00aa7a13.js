"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[13355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},o="Text Size \u6587\u672c\u5927\u5c0f",l={unversionedId:"documentation/Text/Text Size",id:"documentation/Text/Text Size",title:"Text Size \u6587\u672c\u5927\u5c0f",description:"Measure the size of some text. This is done on the same device as the comp is running, so you should make sure the selected font is available there.",source:"@site/docs/documentation/Text/Text Size.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Size",permalink:"/OrigamiStudio/docs/documentation/Text/Text Size",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Size.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1663054532,formattedLastUpdatedAt:"2022\u5e749\u670813\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Text Replace \u6587\u672c\u66ff\u6362",permalink:"/OrigamiStudio/docs/documentation/Text/Text Replace"},next:{title:"Text Starts With \u6587\u672c\u5f00\u59cb",permalink:"/OrigamiStudio/docs/documentation/Text/Text Starts With"}},s={},u=[{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Box Size \u76d2\u5b50\u5c3a\u5bf8",id:"box-size-\u76d2\u5b50\u5c3a\u5bf8",level:3},{value:"Font Name \u5b57\u4f53\u540d\u79f0",id:"font-name-\u5b57\u4f53\u540d\u79f0",level:3},{value:"Font Size \u5b57\u4f53\u5927\u5c0f",id:"font-size-\u5b57\u4f53\u5927\u5c0f",level:3},{value:"Character Spacing \u5b57\u7b26\u95f4\u8ddd",id:"character-spacing-\u5b57\u7b26\u95f4\u8ddd",level:3},{value:"Line Height \u884c\u9ad8",id:"line-height-\u884c\u9ad8",level:3},{value:"Paragraph Spacing \u6bb5\u843d\u95f4\u8ddd",id:"paragraph-spacing-\u6bb5\u843d\u95f4\u8ddd",level:3},{value:"Size \u5927\u5c0f",id:"size-\u5927\u5c0f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-size-\u6587\u672c\u5927\u5c0f"},"Text Size \u6587\u672c\u5927\u5c0f"),(0,r.kt)("p",null,"Measure the size of some text. This is done on the same device as the comp is running, so you should make sure the selected font is available there."),(0,r.kt)("p",null,"\u6d4b\u91cf\u4e00\u4e9b\u6587\u672c\u7684\u5927\u5c0f\u3002\u4f7f\u7528\u7684\u5b57\u4f53\u8981\u786e\u4fdd\u548c\u539f\u578b\u5728\u540c\u4e00\u53f0\u7535\u8111\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(56992).Z,width:"1325",height:"301"})),(0,r.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,r.kt)("p",null,"A text string to measure."),(0,r.kt)("p",null,"\u8981\u6d4b\u91cf\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"box-size-\u76d2\u5b50\u5c3a\u5bf8"},"Box Size \u76d2\u5b50\u5c3a\u5bf8"),(0,r.kt)("p",null,"The width and height of the box that the text should fit within."),(0,r.kt)("p",null,"\u6587\u672c\u6846\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002"),(0,r.kt)("h3",{id:"font-name-\u5b57\u4f53\u540d\u79f0"},"Font Name \u5b57\u4f53\u540d\u79f0"),(0,r.kt)("p",null,"The font your text is displayed in."),(0,r.kt)("p",null,"\u663e\u793a\u6587\u672c\u7684\u5b57\u4f53\u3002"),(0,r.kt)("h3",{id:"font-size-\u5b57\u4f53\u5927\u5c0f"},"Font Size \u5b57\u4f53\u5927\u5c0f"),(0,r.kt)("p",null,"Size in points of the text."),(0,r.kt)("p",null,"\u6587\u672c\u7684\u5927\u5c0f\uff08\u4ee5\u78c5\u4e3a\u5355\u4f4d\uff09\u3002"),(0,r.kt)("h3",{id:"character-spacing-\u5b57\u7b26\u95f4\u8ddd"},"Character Spacing \u5b57\u7b26\u95f4\u8ddd"),(0,r.kt)("p",null,"A number that represents the horizontal space between characters, in points."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u5b57\u7b26\u4e4b\u95f4\u7684\u6c34\u5e73\u95f4\u8ddd\uff0c\u4ee5\u78c5\u4e3a\u5355\u4f4d\u3002"),(0,r.kt)("h3",{id:"line-height-\u884c\u9ad8"},"Line Height \u884c\u9ad8"),(0,r.kt)("p",null,"A number that represents the distance between baselines, in points."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u57fa\u7ebf\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u4ee5\u70b9\u4e3a\u5355\u4f4d\u3002"),(0,r.kt)("h3",{id:"paragraph-spacing-\u6bb5\u843d\u95f4\u8ddd"},"Paragraph Spacing \u6bb5\u843d\u95f4\u8ddd"),(0,r.kt)("p",null,"A number that represents the vertical space between paragraphs, in points."),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u6bb5\u843d\u4e4b\u95f4\u7684\u5782\u76f4\u95f4\u8ddd\uff0c\u4ee5\u78c5\u4e3a\u5355\u4f4d\u3002"),(0,r.kt)("h3",{id:"size-\u5927\u5c0f"},"Size \u5927\u5c0f"),(0,r.kt)("p",null,"The measured size of the text."),(0,r.kt)("p",null,"\u6587\u672c\u7684\u6d4b\u91cf\u5927\u5c0f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Length"},"Text Length \u6587\u672c\u957f\u77ed")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}p.isMDXComponent=!0},56992:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/text-size-4d6ad4afa50ebffa72fef64ccbe0d20d.png"}}]);