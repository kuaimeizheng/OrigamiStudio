"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[51574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(r),h=o,m=s["".concat(c,".").concat(h)]||s[h]||p[h]||l;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},60928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:5},a="Text Style \u6587\u672c\u6837\u5f0f",i={unversionedId:"documentation/Text/Text Style",id:"documentation/Text/Text Style",title:"Text Style \u6587\u672c\u6837\u5f0f",description:"Set the style of a specific range of characters on a text layer.",source:"@site/docs/documentation/Text/Text Style.md",sourceDirName:"documentation/Text",slug:"/documentation/Text/Text Style",permalink:"/OrigamiStudio/docs/documentation/Text/Text Style",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Text/Text Style.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667659545,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Text Style Builder \u6587\u672c\u6837\u5f0f\u751f\u6210\u5668",permalink:"/OrigamiStudio/docs/documentation/Text/Text Style Builder"},next:{title:"Text Transform \u6587\u672c\u53d8\u6362",permalink:"/OrigamiStudio/docs/documentation/Text/Text Transform"}},c={},u=[{value:"Range Start \u8303\u56f4\u5f00\u59cb",id:"range-start-\u8303\u56f4\u5f00\u59cb",level:3},{value:"Range Length \u8303\u56f4\u957f\u5ea6",id:"range-length-\u8303\u56f4\u957f\u5ea6",level:3},{value:"Font Name \u5b57\u4f53\u540d\u79f0",id:"font-name-\u5b57\u4f53\u540d\u79f0",level:3},{value:"Font Size \u5b57\u4f53\u5927\u5c0f",id:"font-size-\u5b57\u4f53\u5927\u5c0f",level:3},{value:"Text Color \u5b57\u4f53\u989c\u8272",id:"text-color-\u5b57\u4f53\u989c\u8272",level:3},{value:"Background Color \u80cc\u666f\u989c\u8272",id:"background-color-\u80cc\u666f\u989c\u8272",level:3},{value:"Stroke Color \u8fb9\u6846\u989c\u8272",id:"stroke-color-\u8fb9\u6846\u989c\u8272",level:3},{value:"Stroke Width \u8fb9\u6846\u5bbd\u5ea6",id:"stroke-width-\u8fb9\u6846\u5bbd\u5ea6",level:3},{value:"Character Spacing \u5b57\u7b26\u95f4\u8ddd",id:"character-spacing-\u5b57\u7b26\u95f4\u8ddd",level:3},{value:"Decoration \u88c5\u9970",id:"decoration-\u88c5\u9970",level:3},{value:"Transform \u8f6c\u6362",id:"transform-\u8f6c\u6362",level:3},{value:"Style \u6837\u5f0f",id:"style-\u6837\u5f0f",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:u};function p(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-style-\u6587\u672c\u6837\u5f0f"},"Text Style \u6587\u672c\u6837\u5f0f"),(0,o.kt)("p",null,"Set the style of a specific range of characters on a text layer."),(0,o.kt)("p",null,"\u8bbe\u7f6e\u6587\u672c\u56fe\u5c42\u4e0a\u7279\u5b9a\u8303\u56f4\u5b57\u7b26\u7684\u6837\u5f0f\u3002"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Style%20Builder"},"Text Style Builder")," to combine with multiple Text Style patches."),(0,o.kt)("p",null,"\u4f7f\u7528\u6587\u672c\u6837\u5f0f\u751f\u6210\u5668\u4e0e\u591a\u4e2a\u6587\u672c\u6837\u5f0f\u6a21\u5757\u7ec4\u5408\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:r(61078).Z,width:"1166",height:"412"})),(0,o.kt)("h3",{id:"range-start-\u8303\u56f4\u5f00\u59cb"},"Range Start \u8303\u56f4\u5f00\u59cb"),(0,o.kt)("p",null,"The index of the character position where the text style will start."),(0,o.kt)("p",null,"\u6587\u672c\u6837\u5f0f\u5c06\u5f00\u59cb\u7684\u5b57\u7b26\u4f4d\u7f6e\u7684\u7d22\u5f15\u3002"),(0,o.kt)("h3",{id:"range-length-\u8303\u56f4\u957f\u5ea6"},"Range Length \u8303\u56f4\u957f\u5ea6"),(0,o.kt)("p",null,"The number of characters where the text style will be applied to."),(0,o.kt)("p",null,"\u5c06\u5e94\u7528\u6587\u672c\u6837\u5f0f\u7684\u5b57\u7b26\u6570\u3002"),(0,o.kt)("h3",{id:"font-name-\u5b57\u4f53\u540d\u79f0"},"Font Name \u5b57\u4f53\u540d\u79f0"),(0,o.kt)("p",null,"The font your text will be displayed in."),(0,o.kt)("p",null,"\u6587\u672c\u5c06\u663e\u793a\u7684\u5b57\u4f53\u3002"),(0,o.kt)("h3",{id:"font-size-\u5b57\u4f53\u5927\u5c0f"},"Font Size \u5b57\u4f53\u5927\u5c0f"),(0,o.kt)("p",null,"The size in points of the text."),(0,o.kt)("p",null,"\u5b57\u4f53\u7684\u5927\u5c0f\uff08\u4ee5\u78c5\u4e3a\u5355\u4f4d\uff09\u3002"),(0,o.kt)("h3",{id:"text-color-\u5b57\u4f53\u989c\u8272"},"Text Color \u5b57\u4f53\u989c\u8272"),(0,o.kt)("p",null,"The color of the text."),(0,o.kt)("p",null,"\u6587\u672c\u7684\u989c\u8272"),(0,o.kt)("h3",{id:"background-color-\u80cc\u666f\u989c\u8272"},"Background Color \u80cc\u666f\u989c\u8272"),(0,o.kt)("p",null,"The background color of the text."),(0,o.kt)("p",null,"\u6587\u5b57\u80cc\u666f\u7684\u989c\u8272"),(0,o.kt)("h3",{id:"stroke-color-\u8fb9\u6846\u989c\u8272"},"Stroke Color \u8fb9\u6846\u989c\u8272"),(0,o.kt)("p",null,"The color of the stroke."),(0,o.kt)("p",null,"\u8fb9\u6846\u7684\u989c\u8272"),(0,o.kt)("h3",{id:"stroke-width-\u8fb9\u6846\u5bbd\u5ea6"},"Stroke Width \u8fb9\u6846\u5bbd\u5ea6"),(0,o.kt)("p",null,"The width of the stroke."),(0,o.kt)("p",null,"\u8fb9\u6846\u7684\u5bbd\u5ea6\u3002"),(0,o.kt)("h3",{id:"character-spacing-\u5b57\u7b26\u95f4\u8ddd"},"Character Spacing \u5b57\u7b26\u95f4\u8ddd"),(0,o.kt)("p",null,"A number that represents the horizontal space between characters, in points."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u5b57\u7b26\u4e4b\u95f4\u7684\u6c34\u5e73\u95f4\u8ddd\uff0c\u4ee5\u78c5\u4e3a\u5355\u4f4d\u3002"),(0,o.kt)("h3",{id:"decoration-\u88c5\u9970"},"Decoration \u88c5\u9970"),(0,o.kt)("p",null,"The type of decorative lines, underline or strikethrough, used on the text."),(0,o.kt)("p",null,"\u6587\u672c\u4e0a\u4f7f\u7528\u7684\u88c5\u9970\u7ebf\u7c7b\u578b\uff0c\u4e0b\u5212\u7ebf\u6216\u5220\u9664\u7ebf\u3002"),(0,o.kt)("h3",{id:"transform-\u8f6c\u6362"},"Transform \u8f6c\u6362"),(0,o.kt)("p",null,"The type of transform to control the capitalization of the text."),(0,o.kt)("p",null,"\u63a7\u5236\u6587\u672c\u5927\u5c0f\u5199\u7684\u8f6c\u6362\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"style-\u6837\u5f0f"},"Style \u6837\u5f0f"),(0,o.kt)("p",null,"The formatted text range to pass to the Style Override input on a ",(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer"),"."),(0,o.kt)("p",null,"\u683c\u5f0f\u5316\u7684\u6587\u672c\u6837\u5f0f\u4f20\u9012\u5230\u6587\u672c\u56fe\u5c42\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Style%20Builder"},"Text Style Builder \u6587\u672c\u6837\u5f0f\u751f\u6210\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Text/Text%20Length"},"Text Length \u6587\u672c\u957f\u77ed")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Text%20Layer"},"Text Layer \u6587\u672c\u56fe\u5c42")))}p.isMDXComponent=!0},61078:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/text-style-de93e4dc1c3413415265649aa89d5307.png"}}]);