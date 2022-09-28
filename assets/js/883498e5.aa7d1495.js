"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[82637],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(i),c=r,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||n;return i?o.createElement(g,a(a({ref:t},u),{},{components:i})):o.createElement(g,a({ref:t},u))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<n;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},66955:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=i(87462),r=(i(67294),i(3905));const n={sidebar_position:2},a="Previewing & Sharing \u9884\u89c8&\u5206\u4eab",l={unversionedId:"documentation/Workflow/Previewing & Sharing",id:"documentation/Workflow/Previewing & Sharing",title:"Previewing & Sharing \u9884\u89c8&\u5206\u4eab",description:"Origami Studio supports previewing live prototypes on iOS and Android, as well as easy sharing of files to any phone or tablet with the iOS/Android Origami Live apps.",source:"@site/docs/documentation/Workflow/Previewing & Sharing.md",sourceDirName:"documentation/Workflow",slug:"/documentation/Workflow/Previewing & Sharing",permalink:"/OrigamiStudio/docs/documentation/Workflow/Previewing & Sharing",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Workflow/Previewing & Sharing.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1664356247,formattedLastUpdatedAt:"2022\u5e749\u670828\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Patch Organization \u6a21\u5757\u6574\u7406",permalink:"/OrigamiStudio/docs/documentation/Workflow/Patch Organization"},next:{title:"Concepts \u6982\u5ff5",permalink:"/OrigamiStudio/docs/category/concepts-\u6982\u5ff5"}},p={},d=[{value:"Origami Live for iOS",id:"origami-live-for-ios",level:3},{value:"Origami live for Android",id:"origami-live-for-android",level:3},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3}],u={toc:d};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"previewing--sharing-\u9884\u89c8\u5206\u4eab"},"Previewing & Sharing \u9884\u89c8&\u5206\u4eab"),(0,r.kt)("p",null,"Origami Studio supports previewing live prototypes on iOS and Android, as well as easy sharing of files to any phone or tablet with the iOS/Android Origami Live apps."),(0,r.kt)("p",null,"Origami Studio \u652f\u6301\u5728 iOS \u548c Android \u4e0a\u9884\u89c8\u5b9e\u65f6\u539f\u578b\uff0c\u4ee5\u53ca\u901a\u8fc7 iOS/Android Origami Live app \u8f7b\u677e\u5730\u5c06\u6587\u4ef6\u5206\u4eab\u5230\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"mirroring-with-usb-usb\u955c\u50cf"},"Mirroring with USB USB\u955c\u50cf"),(0,r.kt)("p",null,"Connect an iOS or Android device via USB and run Origami live. The frontmost prototype will immediately begin previewing on the phone or tablet. Any changes you make in Origami Studio are immediately reflected in the preview, without needing to restart it."),(0,r.kt)("p",null,"\u901a\u8fc7 USB \u8fde\u63a5 iOS \u6216 Android \u8bbe\u5907\u5e76\u8fd0\u884c Origami\u3002\u5f53\u524d\u7684\u539f\u578b\u5c06\u7acb\u5373\u5f00\u59cb\u5728\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u4e0a\u663e\u793a\u9884\u89c8\u3002\u60a8\u5728 Origami Studio \u4e2d\u6240\u505a\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4f1a\u7acb\u5373\u663e\u793a\u5728\u9884\u89c8\u4e2d\uff0c\u65e0\u9700\u91cd\u65b0\u542f\u52a8\u3002"),(0,r.kt)("h3",{id:"origami-live-for-ios"},"Origami Live for iOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://itunes.apple.com/us/app/origami-live-design-prototyping/id942636206"},"Download it from the App Store")),(0,r.kt)("li",{parentName:"ol"},"Connect your iPhone or iPad with a USB cable"),(0,r.kt)("li",{parentName:"ol"},"Open Origami Studio and make sure you have at least one document open")),(0,r.kt)("h3",{id:"origami-live-for-android"},"Origami live for Android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.facebook.Origami"},"Download it from Google Play")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/tools/help/adb.html#Enabling"},"Enable Developer Mode and USB Debugging"),". You may need to enable USB Data Transfer as well."),(0,r.kt)("li",{parentName:"ol"},"Connect your Android phone or tablet with a USB cable. Note: a cable that supports data transfer is required. Some cables only support charging the device."),(0,r.kt)("li",{parentName:"ol"},"Open Origami Studio and make sure you have at least one document open")),(0,r.kt)("h1",{id:"exporting-prototypes-\u5bfc\u51fa\u539f\u578b"},"Exporting Prototypes \u5bfc\u51fa\u539f\u578b"),(0,r.kt)("p",null,"Export a prototype to your phone or tablet via the export button in the toolbar:"),(0,r.kt)("p",null,"\u901a\u8fc7\u5de5\u5177\u680f\u4e2d\u7684\u5bfc\u51fa\u6309\u94ae\u5c06\u539f\u578b\u5bfc\u51fa\u5230\u60a8\u7684\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/docs/previewingSharing-ExportDevice.png",alt:"Image"})),(0,r.kt)("p",null,"Then, take your phone or tablet with you to test your ideas on the go."),(0,r.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u65b9\u4fbf\u7684\u5e26\u4e0a\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\uff0c\u968f\u65f6\u968f\u5730\u6d4b\u8bd5\u4f60\u7684\u8bbe\u8ba1\u3002"),(0,r.kt)("h1",{id:"sharing-prototypes-\u5206\u4eab\u539f\u578b"},"Sharing Prototypes \u5206\u4eab\u539f\u578b"),(0,r.kt)("p",null,"Origami Studio files can also be sent directly to a phone or tablet via email, Dropbox, AirDrop, etc. Download the corresponding iOS or Android app to open any prototype."),(0,r.kt)("p",null,"Origami Studio \u6587\u4ef6\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u3001Dropbox\u3001AirDrop \u7b49\u65b9\u5f0f\u76f4\u63a5\u53d1\u9001\u5230\u624b\u673a\u6216\u5e73\u677f\u7535\u8111\u3002\u4e0b\u8f7d\u76f8\u5e94\u7684 iOS \u6216 Android \u5e94\u7528\u7a0b\u5e8f\u5373\u53ef\u4ee5\u6253\u5f00\u539f\u578b\u3002"),(0,r.kt)("h1",{id:"using-custom-fonts-\u4f7f\u7528\u81ea\u5b9a\u4e49\u5b57\u4f53"},"Using Custom Fonts \u4f7f\u7528\u81ea\u5b9a\u4e49\u5b57\u4f53"),(0,r.kt)("p",null,"Origami Studio doesn\u2019t mirror custom fonts to your device."),(0,r.kt)("p",null,"Origami Studio \u4e0d\u4f1a\u5c06\u81ea\u5b9a\u4e49\u5b57\u4f53\u955c\u50cf\u5230\u60a8\u7684\u8bbe\u5907\u3002"),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"To get a custom font on your iOS device, use ",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/anyfont/id821560738?mt=8"},"Anyfont")," for iOS or ",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344?mt=12"},"Apple Configurator 2")," on the Mac. Using Apple Configurator:"),(0,r.kt)("p",null,"\u8981\u5728\u60a8\u7684 iOS \u8bbe\u5907\u4e0a\u83b7\u53d6\u81ea\u5b9a\u4e49\u5b57\u4f53\uff0c\u8bf7\u4f7f\u7528\u9002\u7528\u4e8e iOS \u7684 Anyfont \u6216\u5728 Mac \u4e0a\u4f7f\u7528 Apple Configurator 2\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 Apple \u914d\u7f6e\u5668\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select File > New Profile from the application menu"),(0,r.kt)("li",{parentName:"ol"},"Give your profile a name and optionally fill out items in the General Tab"),(0,r.kt)("li",{parentName:"ol"},"Add fonts to the profile using the Fonts Tab"),(0,r.kt)("li",{parentName:"ol"},"Save the profile using File > Save and transfer the .mobileconfig file to your device (using email for example)"),(0,r.kt)("li",{parentName:"ol"},"Open the file on your device. You should now see your custom font mirroring from Origami Studio")),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"The procedure of installing a custom font on Android varies ",(0,r.kt)("a",{parentName:"p",href:"https://www.google.com/#q=how+to+install+fonts+on+android"},"depending on the device"),"."),(0,r.kt)("p",null,"\u6bcf\u4e2a Android \u8bbe\u5907\u5b89\u88c5\u81ea\u5b9a\u4e49\u5b57\u4f53\u7684\u8fc7\u7a0b\u90fd\u4e0d\u540c\u3002"),(0,r.kt)("h1",{id:"troubleshooting-\u6392\u9664\u6545\u969c"},"Troubleshooting \u6392\u9664\u6545\u969c"),(0,r.kt)("p",null,"In most cases, issues can be resolved by restarting Origami Live, Origami Studio, or the phone/tablet/computer."),(0,r.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u91cd\u65b0\u542f\u52a8 Origami Live\u3001Origami Studio \u6216\u624b\u673a/\u5e73\u677f\u7535\u8111/\u8ba1\u7b97\u673a\u6765\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("p",null,"Make sure that both Origami Studio and Origami Live are on the latest version."),(0,r.kt)("p",null,"\u786e\u4fdd Origami Studio \u548c Origami Live \u90fd\u662f\u6700\u65b0\u7248\u672c\u3002"))}s.isMDXComponent=!0}}]);