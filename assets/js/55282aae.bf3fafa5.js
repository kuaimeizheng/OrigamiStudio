"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9642],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=u(n),f=r,h=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(h,l(l({ref:e},s),{},{components:n})):a.createElement(h,l({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},106:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},p="Text Field \u6587\u672c\u8f93\u5165\u6846",u={unversionedId:"iOS/Text Field",id:"iOS/Text Field",title:"Text Field \u6587\u672c\u8f93\u5165\u6846",description:"An iOS text field that uses the iPhone or iPad native keyboard when running on device.",source:"@site/docs/iOS/Text Field.md",sourceDirName:"iOS",slug:"/iOS/Text Field",permalink:"/OrigamiStudio/docs/iOS/Text Field",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/iOS/Text Field.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tab Bar \u6807\u7b7e\u680f",permalink:"/OrigamiStudio/docs/iOS/Tab Bar"},next:{title:"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c",permalink:"/OrigamiStudio/docs/iOS/Visual Effect"}},s={},d=[{value:"<strong>**Related Patches \u76f8\u5173\u6a21\u5757**</strong>",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:d};function f(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-field-\u6587\u672c\u8f93\u5165\u6846"},"Text Field \u6587\u672c\u8f93\u5165\u6846"),(0,o.kt)("p",null,"An iOS text field that uses the iPhone or iPad native keyboard when running on device."),(0,o.kt)("p",null,"\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c\u65f6\u4f7f\u7528iPhone\u6216iPad\u672c\u673a\u952e\u76d8\u7684IOS\u6587\u672c\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,"When no device is connected, use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Fake-Keyboard-bf839e8038924161b2ca5b401ebc6faf"},"Fake Keyboard"),"."),(0,o.kt)("p",null,"\u6ca1\u6709\u8fde\u63a5\u8bbe\u5907\u65f6\uff0c\u8bf7\u4f7f\u7528\u6a21\u62df\u952e\u76d8\u3002"),(0,o.kt)("p",null,"Use the Touch button on the component to get information about the text and editing status."),(0,o.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684\u89e6\u6478\u6309\u94ae\u83b7\u53d6\u6709\u5173\u6587\u672c\u548c\u7f16\u8f91\u72b6\u6001\u7684\u4fe1\u606f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2bd175c5-66eb-4414-996c-22b5f2af318c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190952Z&X-Amz-Expires=86400&X-Amz-Signature=0f5b3a7c9d84f512f35ad165328d40ee35e51e4be321fd2d448b4f4806bb6720&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enable \u542f\u7528")),(0,o.kt)("p",null,"A boolean that is true when the text field is displayed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u6587\u672c\u5b57\u6bb5\u65f6\u4e3atrue\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Position \u4f4d\u7f6e")),(0,o.kt)("p",null,"The position to display the text field."),(0,o.kt)("p",null,"\u663e\u793a\u6587\u672c\u5b57\u6bb5\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Width \u5bbd\u5ea6")),(0,o.kt)("p",null,"The width of the text field."),(0,o.kt)("p",null,"\u6587\u672c\u5b57\u6bb5\u7684\u5bbd\u5ea6\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Anchor \u951a\u70b9")),(0,o.kt)("p",null,"The anchor point to position the text field relative to. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Coordinates-bd835085db7c48e49e00a66e5e44caf2"},"Coordinates")," for more information."),(0,o.kt)("p",null,"\u7528\u4e8e\u5b9a\u4f4d\u6587\u672c\u5b57\u6bb5\u7684\u76f8\u5bf9\u4f4d\u7f6e\u7684\u951a\u70b9\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Text \u6587\u672c")),(0,o.kt)("p",null,"A text string to change the text field to. Use Set Text to change the text."),(0,o.kt)("p",null,"\u8981\u5c06\u6587\u672c\u5b57\u6bb5\u66f4\u6539\u4e3a\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002\u4f7f\u7528\u6587\u672c\u8bbe\u7f6e\u66f4\u6539\u6587\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Font Name \u5b57\u4f53\u540d\u79f0")),(0,o.kt)("p",null,"The font name of the text."),(0,o.kt)("p",null,"\u6587\u672c\u7684\u5b57\u4f53\u540d\u79f0\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Font Size \u5b57\u4f53\u5927\u5c0f")),(0,o.kt)("p",null,"The font size of the text."),(0,o.kt)("p",null,"\u6587\u672c\u7684\u5b57\u4f53\u5927\u5c0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Text Alignment \u6587\u672c\u5bf9\u9f50")),(0,o.kt)("p",null,"The alignment of typed text in the text field: left, center, right."),(0,o.kt)("p",null,"\u952e\u5165\u6587\u672c\u5728\u6587\u672c\u5b57\u6bb5\u4e2d\u7684\u5bf9\u9f50\u65b9\u5f0f\uff1a\u5de6\uff0c\u5c45\u4e2d\uff0c\u53f3\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Color \u989c\u8272")),(0,o.kt)("p",null,"The color of the text."),(0,o.kt)("p",null,"\u6587\u672c\u7684\u989c\u8272\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tint Color \u8272\u8c03\u989c\u8272")),(0,o.kt)("p",null,"The color of the cursor."),(0,o.kt)("p",null,"\u5149\u6807\u7684\u989c\u8272\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Opacity \u4e0d\u900f\u660e\u5ea6\u3002")),(0,o.kt)("p",null,"The opacity of the text field."),(0,o.kt)("p",null,"\u6587\u672c\u8f93\u5165\u6846\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scale \u6bd4\u4f8b")),(0,o.kt)("p",null,"The scale of the text field."),(0,o.kt)("p",null,"\u6587\u672c\u8f93\u5165\u6846\u7684\u6bd4\u4f8b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editing - Begin \u7f16\u8f91 - \u5f00\u59cb")),(0,o.kt)("p",null,"A pulse that focuses the text field and shows the keyboard if on an iPhone or iPad."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5982\u679c\u5728 iPhone \u6216 iPad \u4e0a\uff0c\u805a\u7126\u6587\u672c\u5b57\u6bb5\u5e76\u663e\u793a\u952e\u76d8\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editing - End \u7f16\u8f91 - \u7ed3\u675f")),(0,o.kt)("p",null,"A pulse that unfocuses the text field and hides the keyboard if on an iPhone or iPad."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5982\u679c\u5728 iPhone \u6216 iPad \u4e0a\uff0c\u4f7f\u6587\u672c\u5b57\u6bb5\u5931\u7126\u5e76\u9690\u85cf\u952e\u76d8\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editing - Set Text \u7f16\u8f91 - \u8bbe\u7f6e\u6587\u672c")),(0,o.kt)("p",null,"A pulse that changes the text to the value of the Text input."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5c06\u6587\u672c\u66f4\u6539\u4e3a\u8f93\u5165\u7684\u6587\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Placeholder - Text \u5360\u4f4d\u7b26 - \u6587\u672c")),(0,o.kt)("p",null,"The placeholder text when no text is entered in the field."),(0,o.kt)("p",null,"\u5360\u4f4d\u6587\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Placeholder - Color \u5360\u4f4d\u7b26 - \u989c\u8272")),(0,o.kt)("p",null,"The color of the placeholder text."),(0,o.kt)("p",null,"\u5360\u4f4d\u6587\u672c\u7684\u989c\u8272\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Settings - Keyboard Type \u8bbe\u7f6e - \u952e\u76d8\u7c7b\u578b")),(0,o.kt)("p",null,"The type of keyboard to use on an iPhone or iPad."),(0,o.kt)("p",null,"\u5728 iPhone \u6216 iPad \u4e0a\u4f7f\u7528\u7684\u952e\u76d8\u7c7b\u578b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Settings - Show Clear \u8bbe\u7f6e - \u663e\u793a\u6e05\u9664")),(0,o.kt)("p",null,"The behavior of displaying the clear button: always, unless editing, while editing, none"),(0,o.kt)("p",null,"\u663e\u793a\u6e05\u9664\u6309\u94ae\u7684\u884c\u4e3a\uff1a\u603b\u662f\uff0c\u9664\u975e\u7f16\u8f91\uff0c\u7f16\u8f91\u65f6\uff0c\u65e0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Settings - Secure Text \u8bbe\u7f6e - \u5b89\u5168\u6587\u672c")),(0,o.kt)("p",null,"A boolean that represents whether the text should be obfuscated - useful for password fields."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6587\u672c\u662f\u5426\u5e94\u8be5\u6a21\u7cca\u5904\u7406 - \u4e00\u822c\u7528\u4e8e\u5bc6\u7801\u5b57\u6bb5\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Editing \u7f16\u8f91")),(0,o.kt)("p",null,"A boolean that is true when the text field is focused."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u7f16\u8f91\u6587\u672c\u5b57\u6bb5\u65f6\u4e3a\u771f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Text \u6587\u672c")),(0,o.kt)("p",null,"The current text string in the text field."),(0,o.kt)("p",null,"\u6587\u672c\u5b57\u6bb5\u4e2d\u7684\u5f53\u524d\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enter Pressed \u6309\u4e0b\u8f93\u5165")),(0,o.kt)("p",null,"A pulse that represents when the return key is pressed."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u8fd4\u56de\u952e\u88ab\u6309\u4e0b\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},(0,o.kt)("strong",{parentName:"h3"},"*","*","Related Patches \u76f8\u5173\u6a21\u5757","*","*")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Text-Input-Info-dfa5b72d8f5e4bd8b1f679117406f268"},"Text Input Info \u6587\u672c\u8f93\u5165\u4fe1\u606f")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Action-Sheet-925afa64e9fa42a5b2a9374fb41f8dbc"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Activity-Indicator-98b85e24705347b1bc147511e19aca54"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Alert-View-a05a8e1476e543919ccf453585ce8850"},"Alert View \u8b66\u793a\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Fake-Keyboard-bf839e8038924161b2ca5b401ebc6faf"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Navigation-Bar-2465c6dafddd4a6baeef32d390b015d3"},"Navigation Bar \u5bfc\u822a\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Notification-093ed757b8764a1c936d4c12d632fde7"},"Notification \u901a\u77e5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Page-Control-b89791a9a0334256b622a5afacfe80ca"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Screen-4c35850047fb4f6db41a03ffa66007a4"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Segmented-Control-b1867e80759140748500b210f18f90e5"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Slider-db6e484091084d90a58cba409bb59e9a"},"Slider \u6ed1\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Status-Bar-5aec10025d1b402f83d61811505d89c0"},"Status Bar \u72b6\u6001\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Switch-8e35180bcd1747a282e0b12af1095015"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Tab-Bar-12b5f2f77b1a42688677f942a9f1a2e7"},"Tab Bar \u6807\u7b7e\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Visual-Effect-4df6115644d141dab240ae1a8f882c66"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}f.isMDXComponent=!0}}]);