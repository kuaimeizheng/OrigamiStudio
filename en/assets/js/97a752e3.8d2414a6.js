"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[70697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=u(n),h=l,k=s["".concat(d,".").concat(h)]||s[h]||c[h]||o;return n?i.createElement(k,a(a({ref:t},p),{},{components:n})):i.createElement(k,a({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=s;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var i=n(87462),l=(n(67294),n(3905));const o={sidebar_position:5},a="Text Field \u6587\u672c\u8f93\u5165\u6846",r={unversionedId:"documentation/iOS/Text Field",id:"documentation/iOS/Text Field",title:"Text Field \u6587\u672c\u8f93\u5165\u6846",description:"An iOS text field that uses the iPhone or iPad native keyboard when running on device.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/iOS/Text Field.md",sourceDirName:"documentation/iOS",slug:"/documentation/iOS/Text Field",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Text Field",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/iOS/Text Field.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Tab Bar \u6807\u7b7e\u680f",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Tab Bar"},next:{title:"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c",permalink:"/OrigamiStudio/en/docs/documentation/iOS/Visual Effect"}},d={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Width \u5bbd\u5ea6",id:"width-\u5bbd\u5ea6",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Text \u6587\u672c",id:"text-\u6587\u672c",level:3},{value:"Font Name \u5b57\u4f53\u540d\u79f0",id:"font-name-\u5b57\u4f53\u540d\u79f0",level:3},{value:"Font Size \u5b57\u4f53\u5927\u5c0f",id:"font-size-\u5b57\u4f53\u5927\u5c0f",level:3},{value:"Text Alignment \u6587\u672c\u5bf9\u9f50",id:"text-alignment-\u6587\u672c\u5bf9\u9f50",level:3},{value:"Color \u989c\u8272",id:"color-\u989c\u8272",level:3},{value:"Tint Color \u8272\u8c03\u989c\u8272",id:"tint-color-\u8272\u8c03\u989c\u8272",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Editing - Begin \u7f16\u8f91 - \u5f00\u59cb",id:"editing---begin-\u7f16\u8f91---\u5f00\u59cb",level:3},{value:"Editing - End \u7f16\u8f91 - \u7ed3\u675f",id:"editing---end-\u7f16\u8f91---\u7ed3\u675f",level:3},{value:"Editing - Set Text \u7f16\u8f91 - \u8bbe\u7f6e\u6587\u672c",id:"editing---set-text-\u7f16\u8f91---\u8bbe\u7f6e\u6587\u672c",level:3},{value:"Placeholder - Text \u5360\u4f4d\u7b26 - \u6587\u672c",id:"placeholder---text-\u5360\u4f4d\u7b26---\u6587\u672c",level:3},{value:"Placeholder - Color \u5360\u4f4d\u7b26 - \u989c\u8272",id:"placeholder---color-\u5360\u4f4d\u7b26---\u989c\u8272",level:3},{value:"Settings - Keyboard Type \u8bbe\u7f6e - \u952e\u76d8\u7c7b\u578b",id:"settings---keyboard-type-\u8bbe\u7f6e---\u952e\u76d8\u7c7b\u578b",level:3},{value:"Settings - Show Clear \u8bbe\u7f6e - \u663e\u793a\u6e05\u9664",id:"settings---show-clear-\u8bbe\u7f6e---\u663e\u793a\u6e05\u9664",level:3},{value:"Settings - Secure Text \u8bbe\u7f6e - \u5b89\u5168\u6587\u672c",id:"settings---secure-text-\u8bbe\u7f6e---\u5b89\u5168\u6587\u672c",level:3},{value:"Editing \u7f16\u8f91",id:"editing-\u7f16\u8f91",level:3},{value:"Text \u6587\u672c",id:"text-\u6587\u672c-1",level:3},{value:"Enter Pressed \u6309\u4e0b\u8f93\u5165",id:"enter-pressed-\u6309\u4e0b\u8f93\u5165",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"text-field-\u6587\u672c\u8f93\u5165\u6846"},"Text Field \u6587\u672c\u8f93\u5165\u6846"),(0,l.kt)("p",null,"An iOS text field that uses the iPhone or iPad native keyboard when running on device."),(0,l.kt)("p",null,"\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c\u65f6\u4f7f\u7528iPhone\u6216iPad\u672c\u673a\u952e\u76d8\u7684IOS\u6587\u672c\u5b57\u6bb5\u3002"),(0,l.kt)("p",null,"When no device is connected, use the ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard"),"."),(0,l.kt)("p",null,"\u6ca1\u6709\u8fde\u63a5\u8bbe\u5907\u65f6\uff0c\u8bf7\u4f7f\u7528\u6a21\u62df\u952e\u76d8\u3002"),(0,l.kt)("p",null,"Use the Touch button on the component to get information about the text and editing status."),(0,l.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u6709\u5173\u6587\u672c\u548c\u7f16\u8f91\u72b6\u6001\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image",src:n(58141).Z,width:"1552",height:"894"})),(0,l.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,l.kt)("p",null,"A boolean that is true when the text field is displayed."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u6587\u672c\u5b57\u6bb5\u65f6\u4e3atrue\u3002"),(0,l.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,l.kt)("p",null,"The position to display the text field."),(0,l.kt)("p",null,"\u663e\u793a\u6587\u672c\u5b57\u6bb5\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("h3",{id:"width-\u5bbd\u5ea6"},"Width \u5bbd\u5ea6"),(0,l.kt)("p",null,"The width of the text field."),(0,l.kt)("p",null,"\u6587\u672c\u5b57\u6bb5\u7684\u5bbd\u5ea6\u3002"),(0,l.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,l.kt)("p",null,"The anchor point to position the text field relative to. See ",(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Concepts/Coordinates"},"Coordinates")," for more information."),(0,l.kt)("p",null,"\u7528\u4e8e\u5b9a\u4f4d\u6587\u672c\u5b57\u6bb5\u7684\u76f8\u5bf9\u4f4d\u7f6e\u7684\u951a\u70b9\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,l.kt)("h3",{id:"text-\u6587\u672c"},"Text \u6587\u672c"),(0,l.kt)("p",null,"A text string to change the text field to. Use Set Text to change the text."),(0,l.kt)("p",null,"\u8981\u5c06\u6587\u672c\u5b57\u6bb5\u66f4\u6539\u4e3a\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002\u4f7f\u7528\u6587\u672c\u8bbe\u7f6e\u66f4\u6539\u6587\u672c\u3002"),(0,l.kt)("h3",{id:"font-name-\u5b57\u4f53\u540d\u79f0"},"Font Name \u5b57\u4f53\u540d\u79f0"),(0,l.kt)("p",null,"The font name of the text."),(0,l.kt)("p",null,"\u6587\u672c\u7684\u5b57\u4f53\u540d\u79f0\u3002"),(0,l.kt)("h3",{id:"font-size-\u5b57\u4f53\u5927\u5c0f"},"Font Size \u5b57\u4f53\u5927\u5c0f"),(0,l.kt)("p",null,"The font size of the text."),(0,l.kt)("p",null,"\u6587\u672c\u7684\u5b57\u4f53\u5927\u5c0f\u3002"),(0,l.kt)("h3",{id:"text-alignment-\u6587\u672c\u5bf9\u9f50"},"Text Alignment \u6587\u672c\u5bf9\u9f50"),(0,l.kt)("p",null,"The alignment of typed text in the text field: left, center, right."),(0,l.kt)("p",null,"\u952e\u5165\u6587\u672c\u5728\u6587\u672c\u5b57\u6bb5\u4e2d\u7684\u5bf9\u9f50\u65b9\u5f0f\uff1a\u5de6\uff0c\u5c45\u4e2d\uff0c\u53f3\u3002"),(0,l.kt)("h3",{id:"color-\u989c\u8272"},"Color \u989c\u8272"),(0,l.kt)("p",null,"The color of the text."),(0,l.kt)("p",null,"\u6587\u672c\u7684\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"tint-color-\u8272\u8c03\u989c\u8272"},"Tint Color \u8272\u8c03\u989c\u8272"),(0,l.kt)("p",null,"The color of the cursor."),(0,l.kt)("p",null,"\u5149\u6807\u7684\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,l.kt)("p",null,"The opacity of the text field."),(0,l.kt)("p",null,"\u6587\u672c\u8f93\u5165\u6846\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,l.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,l.kt)("p",null,"The scale of the text field."),(0,l.kt)("p",null,"\u6587\u672c\u8f93\u5165\u6846\u7684\u6bd4\u4f8b\u3002"),(0,l.kt)("h3",{id:"editing---begin-\u7f16\u8f91---\u5f00\u59cb"},"Editing - Begin \u7f16\u8f91 - \u5f00\u59cb"),(0,l.kt)("p",null,"A pulse that focuses the text field and shows the keyboard if on an iPhone or iPad."),(0,l.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5982\u679c\u5728 iPhone \u6216 iPad \u4e0a\uff0c\u805a\u7126\u6587\u672c\u5b57\u6bb5\u5e76\u663e\u793a\u952e\u76d8\u3002"),(0,l.kt)("h3",{id:"editing---end-\u7f16\u8f91---\u7ed3\u675f"},"Editing - End \u7f16\u8f91 - \u7ed3\u675f"),(0,l.kt)("p",null,"A pulse that unfocuses the text field and hides the keyboard if on an iPhone or iPad."),(0,l.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5982\u679c\u5728 iPhone \u6216 iPad \u4e0a\uff0c\u4f7f\u6587\u672c\u5b57\u6bb5\u5931\u7126\u5e76\u9690\u85cf\u952e\u76d8\u3002"),(0,l.kt)("h3",{id:"editing---set-text-\u7f16\u8f91---\u8bbe\u7f6e\u6587\u672c"},"Editing - Set Text \u7f16\u8f91 - \u8bbe\u7f6e\u6587\u672c"),(0,l.kt)("p",null,"A pulse that changes the text to the value of the Text input."),(0,l.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5c06\u6587\u672c\u66f4\u6539\u4e3a\u8f93\u5165\u7684\u6587\u672c\u3002"),(0,l.kt)("h3",{id:"placeholder---text-\u5360\u4f4d\u7b26---\u6587\u672c"},"Placeholder - Text \u5360\u4f4d\u7b26 - \u6587\u672c"),(0,l.kt)("p",null,"The placeholder text when no text is entered in the field."),(0,l.kt)("p",null,"\u5360\u4f4d\u6587\u672c\u3002"),(0,l.kt)("h3",{id:"placeholder---color-\u5360\u4f4d\u7b26---\u989c\u8272"},"Placeholder - Color \u5360\u4f4d\u7b26 - \u989c\u8272"),(0,l.kt)("p",null,"The color of the placeholder text."),(0,l.kt)("p",null,"\u5360\u4f4d\u6587\u672c\u7684\u989c\u8272\u3002"),(0,l.kt)("h3",{id:"settings---keyboard-type-\u8bbe\u7f6e---\u952e\u76d8\u7c7b\u578b"},"Settings - Keyboard Type \u8bbe\u7f6e - \u952e\u76d8\u7c7b\u578b"),(0,l.kt)("p",null,"The type of keyboard to use on an iPhone or iPad."),(0,l.kt)("p",null,"\u5728 iPhone \u6216 iPad \u4e0a\u4f7f\u7528\u7684\u952e\u76d8\u7c7b\u578b\u3002"),(0,l.kt)("h3",{id:"settings---show-clear-\u8bbe\u7f6e---\u663e\u793a\u6e05\u9664"},"Settings - Show Clear \u8bbe\u7f6e - \u663e\u793a\u6e05\u9664"),(0,l.kt)("p",null,"The behavior of displaying the clear button: always, unless editing, while editing, none"),(0,l.kt)("p",null,"\u663e\u793a\u6e05\u9664\u6309\u94ae\u7684\u884c\u4e3a\uff1a\u603b\u662f\uff0c\u9664\u975e\u7f16\u8f91\uff0c\u7f16\u8f91\u65f6\uff0c\u65e0"),(0,l.kt)("h3",{id:"settings---secure-text-\u8bbe\u7f6e---\u5b89\u5168\u6587\u672c"},"Settings - Secure Text \u8bbe\u7f6e - \u5b89\u5168\u6587\u672c"),(0,l.kt)("p",null,"A boolean that represents whether the text should be obfuscated - useful for password fields."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6587\u672c\u662f\u5426\u5e94\u8be5\u6a21\u7cca\u5904\u7406 - \u4e00\u822c\u7528\u4e8e\u5bc6\u7801\u5b57\u6bb5\u3002"),(0,l.kt)("h3",{id:"editing-\u7f16\u8f91"},"Editing \u7f16\u8f91"),(0,l.kt)("p",null,"A boolean that is true when the text field is focused."),(0,l.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u7f16\u8f91\u6587\u672c\u5b57\u6bb5\u65f6\u4e3a\u771f\u3002"),(0,l.kt)("h3",{id:"text-\u6587\u672c-1"},"Text \u6587\u672c"),(0,l.kt)("p",null,"The current text string in the text field."),(0,l.kt)("p",null,"\u6587\u672c\u5b57\u6bb5\u4e2d\u7684\u5f53\u524d\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h3",{id:"enter-pressed-\u6309\u4e0b\u8f93\u5165"},"Enter Pressed \u6309\u4e0b\u8f93\u5165"),(0,l.kt)("p",null,"A pulse that represents when the return key is pressed."),(0,l.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8fd4\u56de\u952e\u88ab\u6309\u4e0b\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Text/Text%20Input%20Info"},"Text Input Info \u6587\u672c\u8f93\u5165\u4fe1\u606f")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Action%20Sheet"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Activity%20Indicator"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Navigation%20Bar"},"Navigation Bar \u5bfc\u822a\u680f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Notification"},"Notification \u901a\u77e5")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Screen"},"Screen \u5c4f\u5e55")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Segmented%20Control"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Slider"},"Slider \u6ed1\u5757")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Switch"},"Switch \u5f00\u5173")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Tab%20Bar"},"Tab Bar \u6807\u7b7e\u680f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/iOS/Visual%20Effect"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}c.isMDXComponent=!0},58141:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/text-field-113163644d6897ac058d2085c937a2fd.png"}}]);