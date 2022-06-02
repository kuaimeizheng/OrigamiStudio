"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9093],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),f=u(n),d=a,k=f["".concat(p,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(k,l(l({ref:e},s),{},{components:n})):r.createElement(k,l({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7965:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},p="Alert View \u8b66\u793a\u6846",u={unversionedId:"iOS/Alert View",id:"iOS/Alert View",title:"Alert View \u8b66\u793a\u6846",description:"An iOS alert view dialog with customizable actions.",source:"@site/docs/iOS/Alert View.md",sourceDirName:"iOS",slug:"/iOS/Alert View",permalink:"/OrigamiStudio/docs/iOS/Alert View",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/iOS/Alert View.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Activity Indicator \u72b6\u6001\u6307\u793a\u5668",permalink:"/OrigamiStudio/docs/iOS/Activity Indicator"},next:{title:"Fake Keyboard \u6a21\u62df\u952e\u76d8",permalink:"/OrigamiStudio/docs/iOS/Fake Keyboard"}},s={},c=[{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],f={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alert-view-\u8b66\u793a\u6846"},"Alert View \u8b66\u793a\u6846"),(0,o.kt)("p",null,"An iOS alert view dialog with customizable actions."),(0,o.kt)("p",null,"\u53ef\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7684iOS\u8b66\u62a5\u89c6\u56fe\u5bf9\u8bdd\u6846\u3002"),(0,o.kt)("p",null,"Use the Touch button on the component to get the tap events on the buttons."),(0,o.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u4e0a\u7684Touch\u6309\u94ae\u53ef\u5728\u6309\u94ae\u4e0a\u83b7\u53d6\u70b9\u51fb\u4e8b\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2beff53c-ca06-43f4-9150-a30cb78ae638/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190545Z&X-Amz-Expires=86400&X-Amz-Signature=ee84a85101f2634abdfdb24712c4ff918f80d921182ddb2e9ffa1a29b8c26479&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Present \u51fa\u73b0")),(0,o.kt)("p",null,"A pulse to animate and display the alert view."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u663e\u793a\u51fa\u73b0\u8b66\u62a5\u89c6\u56fe\u7684\u52a8\u753b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Title \u6807\u9898")),(0,o.kt)("p",null,"The title text of the alert view."),(0,o.kt)("p",null,"\u8b66\u793a\u6846\u7684\u6807\u9898"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Message \u6d88\u606f")),(0,o.kt)("p",null,"The message text of the alert view."),(0,o.kt)("p",null,"\u8b66\u793a\u6846\u7684\u6d88\u606f\u6587\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tint \u8272\u8c03")),(0,o.kt)("p",null,"The tint color of action text."),(0,o.kt)("p",null,"\u64cd\u4f5c\u6587\u672c\u7684\u989c\u8272\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 1 Action \u6309\u94ae 1 \u64cd\u4f5c")),(0,o.kt)("p",null,"The text string for the first button."),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6309\u94ae\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 1 Style \u6309\u94ae 1 \u6837\u5f0f")),(0,o.kt)("p",null,"The button style: Default, Cancel, or Destructive."),(0,o.kt)("p",null,"\u6309\u94ae\u6837\u5f0f\uff1a\u9ed8\u8ba4\uff0c\u53d6\u6d88\u6216\u7834\u574f\u6027\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 2 Action")),(0,o.kt)("p",null,"The text string for the second button."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 2 Style")),(0,o.kt)("p",null,"The button style: Default, Cancel, or Destructive."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 3 Action")),(0,o.kt)("p",null,"The text string for the third button."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 3 Style")),(0,o.kt)("p",null,"The button style: Default, Cancel, or Destructive."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 4 Action")),(0,o.kt)("p",null,"The text string for the fourth button."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 4 Style")),(0,o.kt)("p",null,"The button style: Default, Cancel, or Destructive."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 1 Tapped \u6309\u94ae 1 \u6309\u4e0b")),(0,o.kt)("p",null,"A pulse that represents when Button 1 is tapped."),(0,o.kt)("p",null,"\u4e00\u4e2a\u8109\u51b2\uff0c\u8868\u793a\u5f53\u6309\u94ae 1 \u88ab\u6309\u4e0b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 2 Tapped")),(0,o.kt)("p",null,"A pulse that represents when Button 2 is tapped."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 3 Tapped")),(0,o.kt)("p",null,"A pulse that represents when Button 3 is tapped."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Button 4 Tapped")),(0,o.kt)("p",null,"A pulse that represents when Button 4 is tapped."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Action-Sheet-925afa64e9fa42a5b2a9374fb41f8dbc"},"Action Sheet \u64cd\u4f5c\u5217\u8868")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Activity-Indicator-98b85e24705347b1bc147511e19aca54"},"Activity Indicator \u72b6\u6001\u6307\u793a\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Fake-Keyboard-bf839e8038924161b2ca5b401ebc6faf"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Navigation-Bar-2465c6dafddd4a6baeef32d390b015d3"},"Navigation Bar \u5bfc\u822a\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Notification-093ed757b8764a1c936d4c12d632fde7"},"Notification \u901a\u77e5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Page-Control-b89791a9a0334256b622a5afacfe80ca"},"Page Control \u5206\u9875\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Screen-4c35850047fb4f6db41a03ffa66007a4"},"Screen \u5c4f\u5e55")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Segmented-Control-b1867e80759140748500b210f18f90e5"},"Segmented Control \u5206\u6bb5\u63a7\u5236\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Slider-db6e484091084d90a58cba409bb59e9a"},"Slider \u6ed1\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Status-Bar-5aec10025d1b402f83d61811505d89c0"},"Status Bar \u72b6\u6001\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Switch-8e35180bcd1747a282e0b12af1095015"},"Switch \u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Tab-Bar-12b5f2f77b1a42688677f942a9f1a2e7"},"Tab Bar \u6807\u7b7e\u680f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Text-Field-35f7f23e5f714582ab1c7d7af511281b"},"Text Field \u6587\u672c\u8f93\u5165\u6846")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Visual-Effect-4df6115644d141dab240ae1a8f882c66"},"Visual Effect \u6bdb\u73bb\u7483\u6548\u679c")))}d.isMDXComponent=!0}}]);