"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[54201],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>h});var a=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function r(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var o=a.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):p(p({},o),e)),t},u=function(e){var o=s(e.components);return a.createElement(l.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=s(t),h=n,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return t?a.createElement(d,p(p({ref:o},u),{},{components:t})):a.createElement(d,p({ref:o},u))}));function h(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=m;var r={};for(var l in o)hasOwnProperty.call(o,l)&&(r[l]=o[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,p[1]=r;for(var s=2;s<i;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76362:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const i={title:"Loop \u5faa\u73af",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},p="Loop \u5faa\u73af",r={unversionedId:"documentation/Concepts/Loop",id:"documentation/Concepts/Loop",title:"Loop \u5faa\u73af",description:"Loops are a powerful feature for easily building dynamic repeating UI and interactions in Origami, such as a list or a grid of photos. So instead of manually copying and pasting a Layer five times, we would connect our Layer to a Loop patch by any of it\u2019s properties in the Patch Editor with a Count Input of five. If you\u2019re coming from a programming background Loops behave similarly to Arrays or a for statement. Loops are a great way to reduce complexity and repetition in your prototype.",source:"@site/docs/documentation/Concepts/Loop.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/Loop",permalink:"/OrigamiStudio/docs/documentation/Concepts/Loop",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/Loop.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666104246,formattedLastUpdatedAt:"2022\u5e7410\u670818\u65e5",sidebarPosition:5,frontMatter:{title:"Loop \u5faa\u73af",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"JavaScript Patch API",permalink:"/OrigamiStudio/docs/documentation/Concepts/JavaScript Patch API"},next:{title:"Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Concepts/Math Expressions"}},l={},s=[{value:"Loop Patch \u5faa\u73af\u6a21\u5757",id:"loop-patch-\u5faa\u73af\u6a21\u5757",level:3},{value:"Loop Builder Patch \u5faa\u73af\u751f\u6210\u5668\u6a21\u5757",id:"loop-builder-patch-\u5faa\u73af\u751f\u6210\u5668\u6a21\u5757",level:3},{value:"Loops and Layout \u5faa\u73af\u548c\u5e03\u5c40",id:"loops-and-layout-\u5faa\u73af\u548c\u5e03\u5c40",level:3},{value:"Looping Components \u5faa\u73af\u7ec4\u4ef6",id:"looping-components-\u5faa\u73af\u7ec4\u4ef6",level:3},{value:"Loop Behavior \u5faa\u73af\u7279\u6027",id:"loop-behavior-\u5faa\u73af\u7279\u6027",level:3},{value:"Nested arrays to Loops of Loops \u5d4c\u5957\u6570\u7ec4\u5230\u5faa\u73af\u7684\u5faa\u73af",id:"nested-arrays-to-loops-of-loops-\u5d4c\u5957\u6570\u7ec4\u5230\u5faa\u73af\u7684\u5faa\u73af",level:3},{value:"Looped Component Outputs \u5faa\u73af\u7ec4\u4ef6\u8f93\u51fa",id:"looped-component-outputs-\u5faa\u73af\u7ec4\u4ef6\u8f93\u51fa",level:3},{value:"Manipulating Loops \u64cd\u4f5c\u5faa\u73af",id:"manipulating-loops-\u64cd\u4f5c\u5faa\u73af",level:3},{value:"Loops &amp; Interactions \u5faa\u73af&amp;\u4ea4\u4e92",id:"loops--interactions-\u5faa\u73af\u4ea4\u4e92",level:3}],u={toc:s};function c(e){let{components:o,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loop-\u5faa\u73af"},"Loop \u5faa\u73af"),(0,n.kt)("p",null,"Loops are a powerful feature for easily building dynamic repeating UI and interactions in Origami, such as a list or a grid of photos. So instead of manually copying and pasting a Layer five times, we would connect our Layer to a Loop patch by any of it\u2019s properties in the Patch Editor with a Count Input of five. If you\u2019re coming from a programming background Loops behave similarly to Arrays or a for statement. Loops are a great way to reduce complexity and repetition in your prototype."),(0,n.kt)("p",null,"\u5faa\u73af\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u5728 Origami \u4e2d\u8f7b\u677e\u521b\u5efa\u52a8\u6001\u4ee5\u53ca\u91cd\u590d\u8bbe\u8ba1\u548c\u4ea4\u4e92\uff0c\u4f8b\u5982\u5217\u8868\u6216\u7167\u7247\u7f51\u683c\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u65e0\u9700\u624b\u52a8\u590d\u5236\u548c\u7c98\u8d34\u56fe\u5c42\u4e94\u6b21\uff0c\u800c\u662f\u901a\u8fc7\u6a21\u5757\u7f16\u8f91\u5668\u4e2d\u7684\u76f8\u5e94\u5c5e\u6027\u5c06\u56fe\u5c42\u8fde\u63a5\u5230\u5faa\u73af\u6a21\u5757\uff0c\u8ba1\u6570\u7aef\u53e3\u8f93\u5165\u4e3a 5\u3002\u5982\u679c\u4f60\u6709\u7f16\u7a0b\u77e5\u8bc6\uff0c\u5faa\u73af\u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e\u6570\u7ec4 for \u8bed\u53e5\u3002\u5faa\u73af\u4e3b\u8981\u662f\u4e3a\u4e86\u51cf\u5c11\u539f\u578b\u7684\u590d\u6742\u6027\u548c\u91cd\u590d\u6027\u3002"),(0,n.kt)("p",null,"Loops are especially powerful when combined with ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Canvas/Layout"},"Layout")," in the Canvas. By default looped layers will stack on top of each other on the Canvas, but when added to a ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Group"},"Layout-enabled Group")," the looped layers will automatically be arranged based on the Layout settings on the Group, such as a vertical list or a grid."),(0,n.kt)("p",null,"\u5faa\u73af\u4e0e\u753b\u5e03\u4e2d\u7684\u5e03\u5c40\u7ed3\u5408\u4f7f\u7528\u65f6\uff0c\u5faa\u73af\u5c24\u5176\u5f3a\u5927\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5faa\u73af\u56fe\u5c42\u4f1a\u5728\u753b\u5e03\u4e0a\u76f8\u4e92\u5806\u53e0\uff0c\u4f46\u5f53\u6dfb\u52a0\u5230\u542f\u7528\u5e03\u5c40\u7684\u7ec4\u65f6\uff0c\u5faa\u73af\u56fe\u5c42\u5c06\u6839\u636e\u7ec4\u7684\u5e03\u5c40\u8bbe\u7f6e\u8fdb\u884c\u6392\u5217\uff0c\u4f8b\u5982\u5782\u76f4\u5217\u8868\u6216\u7f51\u683c\u3002"),(0,n.kt)("p",null,"We can also use Loops to generate repeating Layers or Components from real dynamic data sources, for example we could create a list of daily ",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/examples/weather-forecast.html"},"weather forecasts")," from a weather API using the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Network%20Request"},"Network Request")," patch. Check out the Prototyping with ",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/tutorials/smarter-interactions/Prototyping-with-Data.html"},"Data tutorial")," for an example of how to do this. Thinking in Loops can be helpful when handing-off a prototype to an engineer to get built since they translate more closely to how the design will be implemented in code."),(0,n.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5faa\u73af\u4ece\u771f\u5b9e\u7684\u52a8\u6001\u6570\u636e\u6e90\u751f\u6210\u91cd\u590d\u7684\u56fe\u5c42\u6216\u7ec4\u4ef6\uff0c\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7f51\u7edc\u8bf7\u6c42\u6a21\u5757\u4ece\u5929\u6c14 API \u521b\u5efa\u6bcf\u65e5\u5929\u6c14\u9884\u62a5\u5217\u8868\u3002\u5173\u4e8e\u5982\u4f55\u505a\u8fd9\u4e2a\uff0c\u8bf7\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"https://origami.design/tutorials/smarter-interactions/Prototyping-with-Data.html"},"Data tutorial \u4f7f\u7528\u6570\u636e\u5236\u4f5c\u539f\u578b\u6559\u7a0b"),"\u3002\u5728\u5c06\u539f\u578b\u4ea4\u7ed9\u5de5\u7a0b\u5e08\u8fdb\u884c\u5f00\u53d1\u65f6\uff0c\u5faa\u73af\u601d\u7ef4\u5f88\u6709\u5e2e\u52a9\uff0c\u56e0\u4e3a\u66f4\u63a5\u8fd1\u4e8e\u5982\u4f55\u7528\u4ee3\u7801\u5b9e\u73b0\u8bbe\u8ba1\u3002"),(0,n.kt)("h1",{id:"creating-loops-\u521b\u5efa\u5faa\u73af"},"Creating Loops \u521b\u5efa\u5faa\u73af"),(0,n.kt)("p",null,"Loop patches in Origami are all colored green and any patches that get connected to a Loop patch will have a green tinted connection cable. Any time you see patches connected with a green connection cable, that connected patch graph is being evaluated for each item in the loop. Loops can be created using the Loop, Loop Builder and Loop Over Array patches."),(0,n.kt)("p",null,"Origami \u4e2d\u7684\u5faa\u73af\u6a21\u5757\u90fd\u662f\u7eff\u8272\u7684\uff0c\u4efb\u4f55\u8fde\u63a5\u5230\u5faa\u73af\u7684\u6a21\u5757\u90fd\u5c06\u6709\u4e00\u6761\u7eff\u8272\u7684\u8fde\u63a5\u7ebf\u3002\u6bcf\u5f53\u60a8\u770b\u5230\u901a\u8fc7\u7eff\u8272\u8fde\u63a5\u7ebf\u8fde\u63a5\u7684\u6a21\u5757\u65f6\uff0c\u90fd\u4f1a\u4e3a\u5faa\u73af\u4e2d\u7684\u6bcf\u4e2a\u9879\u76ee\u8bc4\u4f30\u8fde\u63a5\u7684\u6a21\u5757\u56fe\u3002\u53ef\u4ee5\u4f7f\u7528 Loop\u5faa\u73af\u3001Loop Builder \u5faa\u73af\u751f\u6210\u5668 \u548c Loop Over Array \u5faa\u73af\u6570\u7ec4 \u6a21\u5757\u521b\u5efa\u5faa\u73af\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/loop_connections.mp4"},"https://origami.design/public/images/videos/loop_connections.mp4")),(0,n.kt)("h3",{id:"loop-patch-\u5faa\u73af\u6a21\u5757"},"Loop Patch \u5faa\u73af\u6a21\u5757"),(0,n.kt)("p",null,"The simplest loop in Origami is created using the Loop patch, this will output a loop counting up to the number of items in the Count input. Loops in Origami are Zero-Indexed, which means they start counting from 0, so a Loop with a Count of 5 will be \u201c0, 1, 2, 3, 4\u201c."),(0,n.kt)("p",null,"Origami \u4e2d\u6700\u7b80\u5355\u7684\u5faa\u73af\u662f\u4f7f\u7528\u5faa\u73af\u6a21\u5757\u521b\u5efa\u7684\uff0c\u8fd9\u5c06\u5728Count\u8ba1\u6570\u7aef\u53e3\u8f93\u51fa\u4e00\u4e2a\u5faa\u73af\u7684\u9879\u76ee\u6570\u91cf\u3002 Origami \u4e2d\u7684\u5faa\u73af\u662f\u4ece\u96f6\u5f00\u59cb\u7d22\u5f15\u7684\uff0c\u8fd9\u8868\u793a\u5b83\u4eec\u4ece 0 \u5f00\u59cb\u8ba1\u6570\uff0c\u56e0\u6b64\u8ba1\u6570\u4e3a 5 \u7684\u8bdd\uff0c\u5faa\u73af\u5c06\u662f\u201c0\u30011\u30012\u30013\u30014\u201d\u3002"),(0,n.kt)("p",null,"We can easily see the value of each item in our loop by clicking on the output of the Loop patch. Hovering over each item in the loop popover will show how the connected patch graph is evaluated for each item in the loop."),(0,n.kt)("p",null,"You\u2019ll see below when we hover through each item in the loop popover the number in the property patch changes to reflect the patch graph at each instance of the loop."),(0,n.kt)("p",null,"\u901a\u8fc7\u5355\u51fb\u5faa\u73af\u6a21\u5757\u7684\u8f93\u51fa\u7aef\u53e3\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u5faa\u73af\u4e2d\u6bcf\u4e2a\u9879\u76ee\u7684\u503c\u3002"),(0,n.kt)("p",null,"\u5c06\u9f20\u6807\u60ac\u505c\u5728\u5faa\u73af\u5f39\u7a97\u4e2d\u7684\u6bcf\u4e2a\u9879\u76ee\u4e0a\uff0c\u5c06\u663e\u793a\u5faa\u73af\u4e2d\u7684\u6bcf\u4e2a\u9009\u9879\u662f\u600e\u4e48\u4e3a\u8fde\u63a5\u7684\u6a21\u5757\u8ba1\u7b97\u7684\u3002"),(0,n.kt)("p",null,"\u5f53\u6211\u4eec\u5c06\u9f20\u6807\u60ac\u505c\u5728\u5faa\u73af\u4e2d\u7684\u6bcf\u4e2a\u9879\u76ee\u4e0a\u65f6\uff0c\u60a8\u5c06\u770b\u5230\u4e0b\u9762\u5c5e\u6027\u6a21\u5757\u4e2d\u7684\u6570\u5b57\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u4f1a\u5f71\u54cd\u5230\u5faa\u73af\u4e2d\u6bcf\u4e2a\u5b9e\u4f8b\u6a21\u5757\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/loop_patch.mp4"},"https://origami.design/public/images/videos/loop_patch.mp4")),(0,n.kt)("h3",{id:"loop-builder-patch-\u5faa\u73af\u751f\u6210\u5668\u6a21\u5757"},"Loop Builder Patch \u5faa\u73af\u751f\u6210\u5668\u6a21\u5757"),(0,n.kt)("p",null,"Another way to create a loop is with the Loop Builder patch. This patch allows more control over what value you\u2019d like each item in your loop to be. By default this will a loop of numbers but we can change the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Patch%20Editor/States"},"type")," by clicking on the patch header and selecting a different type. For example we could create a loop of colors as seen below or a loop of On/Off boolean values."),(0,n.kt)("p",null,"\u521b\u5efa\u5faa\u73af\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528 Loop Builder \u5faa\u73af\u751f\u6210\u5668 \u6a21\u5757\u3002\u6b64\u6a21\u5757\u5141\u8bb8\u60a8\u66f4\u65b9\u4fbf\u5730\u63a7\u5236\u73af\u4e2d\u6bcf\u4e2a\u9879\u76ee\u7684\u503c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u4e00\u4e2a\u6570\u5b57\u5faa\u73af\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u6a21\u5757\u6807\u9898\uff0c\u5e76\u9009\u62e9\u5176\u4ed6\u7c7b\u578b\u6765\u66f4\u6539\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u5982\u4e0b\u6240\u793a\u7684\u989c\u8272\u5faa\u73af\u6216 On/Off \u5e03\u5c14\u503c\u5faa\u73af\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/loop_builder.mp4"},"https://origami.design/public/images/videos/loop_builder.mp4")),(0,n.kt)("p",null,"Note: If you\u2019re only seeing one layer show up on the Canvas and in the Viewer, make sure your Layer is a child of a ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Canvas/Layout"},"Layout-enabled")," group."),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u5728\u753b\u5e03\u548c\u67e5\u770b\u5668\u4e2d\u53ea\u770b\u5230\u4e00\u4e2a\u56fe\u5c42\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684\u56fe\u5c42\u662f\u4e00\u4e2a\u542f\u7528\u4e86\u5e03\u5c40\u7684\u7ec4\u7684\u5b50\u56fe\u5c42\u3002"),(0,n.kt)("h3",{id:"loops-and-layout-\u5faa\u73af\u548c\u5e03\u5c40"},"Loops and Layout \u5faa\u73af\u548c\u5e03\u5c40"),(0,n.kt)("p",null,"Layout lets you control how looped layers are arranged on the canvas. Make your looped layer a child of a ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Canvas/Layout"},"Layout-enabled")," Group and change the Group Layout properties in the Inspector."),(0,n.kt)("p",null,"\u5e03\u5c40\u53ef\u4ee5\u8ba9\u4f60\u63a7\u5236\u5982\u4f55\u5728\u753b\u5e03\u4e0a\u6392\u5217\u5faa\u73af\u56fe\u5c42\u3002\u4f7f\u5faa\u73af\u56fe\u5c42\u6210\u4e3a\u542f\u7528\u5e03\u5c40\u7684\u7ec4\u7684\u5b50\u7ea7\uff0c\u5e76\u5728\u68c0\u67e5\u5668\u4e2d\u66f4\u6539\u7ec4\u5e03\u5c40\u7684\u5c5e\u6027\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/loop_builder.mp4"},"https://origami.design/public/images/videos/loop_builder.mp4")),(0,n.kt)("h3",{id:"looping-components-\u5faa\u73af\u7ec4\u4ef6"},"Looping Components \u5faa\u73af\u7ec4\u4ef6"),(0,n.kt)("p",null,"Using loops with Components allows us to specify what point in the layer hierarchy we want our loop to repeat. For example if we were creating a list of contacts from a loop of names, and we passed the names loop to the Text Layer, it would create multiple Text Layers for each name."),(0,n.kt)("p",null,"\u4f7f\u7528\u5faa\u73af\u7ec4\u4ef6\u5141\u8bb8\u6211\u4eec\u8bbe\u7f6e\u5faa\u73af\u91cd\u590d\u7684\u662f\u56fe\u5c42\u5c42\u6b21\u7ed3\u6784\u4e2d\u7684\u54ea\u4e2a\u5c5e\u6027\u70b9\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u6b63\u5728\u521b\u5efa\u6765\u81ea\u4e00\u7ec4\u540d\u79f0\u5faa\u73af\u7684\u8054\u7cfb\u4eba\u5217\u8868\uff0c\u5e76\u4e14\u6211\u4eec\u5c06\u540d\u79f0\u5faa\u73af\u4f20\u9012\u7ed9\u6587\u672c\u56fe\u5c42\uff0c\u5b83\u5c06\u4e3a\u6bcf\u4e2a\u540d\u79f0\u521b\u5efa\u591a\u4e2a\u6587\u672c\u56fe\u5c42\u3002"),(0,n.kt)("p",null,"However, if we were to group our contact list cell into a component while maintaining the connecting between the loop of names and the text layer inside the component, it would create multiple instances of the list cell while still passing the name to the text layer inside as shown in the example below."),(0,n.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u6211\u4eec\u8981\u5c06\u8054\u7cfb\u4eba\u5217\u8868\u5355\u5143\u6574\u7406\u5230\u7ec4\u4ef6\uff0c\u540c\u65f6\u4fdd\u6301\u7ec4\u4ef6\u4e2d\u7684 \u540d\u79f0\u5faa\u73af \u548c \u6587\u672c\u56fe\u5c42 \u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u5b83\u5c06\u521b\u5efa\u5217\u8868\u5355\u5143\u7684\u591a\u4e2a\u5b9e\u4f8b\uff0c\u540c\u65f6\u4ecd\u5c06\u540d\u79f0\u4f20\u9012\u7ed9\u5185\u90e8\u6587\u672c\u5c42\uff0c\u5982\u4e0b\u9762\u7684\u793a\u4f8b\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/group_into_component.mp4"},"https://origami.design/public/images/videos/group_into_component.mp4")),(0,n.kt)("h1",{id:"loops-and-data-\u5faa\u73af\u548c\u6570\u636e"},"Loops and Data \u5faa\u73af\u548c\u6570\u636e"),(0,n.kt)("p",null,"Loops can also be created from Arrays by using the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Over%20Array"},"Loop Over Array")," patch. This is useful when working with a web API data source with using the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Data/Network%20Request"},"Network Request")," patch."),(0,n.kt)("p",null,"\u5faa\u73af\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 Loop Over Array \u6570\u7ec4\u904d\u5386 \u6a21\u5757\u4ece\u6570\u7ec4\u4e2d\u521b\u5efa\u3002\u8fd9\u4e00\u822c\u7528\u4e8e\u4f7f\u7528\u7f51\u7edc\u8bf7\u6c42\u6a21\u5757\u5904\u7406web API\u6570\u636e\u6e90\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:t(91345).Z,width:"1560",height:"700"})),(0,n.kt)("p",null,"Nested arrays to Loops of Loops \u5d4c\u5957\u6570\u7ec4\u5230\u5faa\u73af\u7684\u5faa\u73af"),(0,n.kt)("h1",{id:"multiple-loops-\u591a\u4e2a\u5faa\u73af"},"Multiple Loops \u591a\u4e2a\u5faa\u73af"),(0,n.kt)("p",null,"Often when building more complex prototypes there will be cases where you\u2019ll want to use loops inside other loops. For example a newsfeed prototype could have a loop of posts and within each post there could be a carousel of images loop and a Facepile of reactions loop, creating a loop of loops."),(0,n.kt)("p",null,"\u901a\u5e38\u5728\u6784\u5efa\u66f4\u590d\u6742\u7684\u539f\u578b\u65f6\uff0c\u4f1a\u51fa\u73b0\u9700\u8981\u5728\u5176\u4ed6\u5faa\u73af\u4e2d\u4f7f\u7528\u5faa\u73af\u7684\u60c5\u51b5\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u65b0\u95fb\u6d41\u539f\u578b\u53ef\u80fd\u4f1a\u6709\u4e00\u4e2a\u5e16\u5b50\u5faa\u73af\uff0c\u5e76\u4e14\u5728\u6bcf\u4e2a\u5e16\u5b50\u4e2d\u6709\u4e00\u4e2a\u8f6e\u64ad\u56fe\u7684\u56fe\u50cf\u5faa\u73af\u548c\u54cd\u5e94Facepile(\u5934\u50cf)\u5faa\u73af\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a\u5faa\u73af\u4e2d\u7684\u5faa\u73af\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/multiple_loops.mp4"},"https://origami.design/public/images/videos/multiple_loops.mp4")),(0,n.kt)("p",null,"When we combine loops together by connecting multiple loops to multiple properties of a layer, Origami will try to interleave or \u201czipper\u201d the loops together as seen in the video above. This has some helpful use cases but often what we want is to have one loop create multiple of the other loop, the way we can do that is by using Components. When we create a Component in Origami, the Component Info popover lets us decide what behavior we want connected loops to have on the component."),(0,n.kt)("p",null,"\u5f53\u6211\u4eec\u901a\u8fc7\u5c06\u591a\u4e2a\u5faa\u73af\u8fde\u63a5\u5230\u56fe\u5c42\u7684\u591a\u4e2a\u5c5e\u6027\u6765\u7ec4\u5408\u5728\u4e00\u8d77\u65f6\uff0cOrigami \u5c06\u5c1d\u8bd5\u5728\u4e0a\u9762\u7684\u89c6\u9891\u4e2d\u770b\u5230\u7684\u5d4c\u5957\u6216\u201c\u5c01\u88c5\u201d\u5faa\u73af\u3002\u4e00\u4e9b\u5e38\u7528\u7684\u505a\u6cd5\uff0c\u5c31\u662f\u901a\u5e38\u6211\u4eec\u60f3\u8981\u7684\u662f\u6709\u4e00\u4e2a\u5faa\u73af\u521b\u5efa\u591a\u4e2a\u5176\u4ed6\u5faa\u73af\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7ec4\u4ef6\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u5f53\u6211\u4eec\u5728 Origami \u4e2d\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6\u65f6\uff0c\u7ec4\u4ef6\u4fe1\u606f\u5f39\u7a97\u5141\u8bb8\u6211\u4eec\u8bbe\u7f6e\u8fde\u63a5\u7684\u5faa\u73af\u5728\u7ec4\u4ef6\u4e0a\u6709\u4ec0\u4e48\u7279\u6027\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:t(60142).Z,width:"1384",height:"858"})),(0,n.kt)("h3",{id:"loop-behavior-\u5faa\u73af\u7279\u6027"},"Loop Behavior \u5faa\u73af\u7279\u6027"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Pass into Component")," - Makes the loop available inside the component by passing it through without looping the component. Passing in (Default in Origami Version 81 and older)"),(0,n.kt)("p",null,"\u4f20\u9012\u7ec4\u4ef6\u2014\u2014\u901a\u8fc7\u4f20\u9012\u5faa\u73af\u800c\u4e0d\u662f\u5faa\u73af\u7ec4\u4ef6\uff0c\u4f7f\u5faa\u73af\u9650\u5236\u5728\u7ec4\u4ef6\u5185\u90e8\u3002(\u9ed8\u8ba4\u503c\u4e3aOrigami\u7248\u672c81\u53ca\u4ee5\u4e0a)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Loop the Component")," - The component will be evaluated for each item in the loop passing the item into the component. (Default in Origami Version 82 and newer)"),(0,n.kt)("p",null,"\u5faa\u73af\u7ec4\u4ef6\u2014\u2014\u5c06\u8ba1\u7b97\u5faa\u73af\u4e2d\u7684\u6bcf\u4e2a\u9879\u76ee\uff0c\u5e76\u5c06\u9879\u76ee\u4f20\u9012\u5230\u7ec4\u4ef6\u3002\uff08\u9ed8\u8ba4\u503c\u4e3aOrigami Version 82\u53ca\u66f4\u65b0\u7248\u672c)"),(0,n.kt)("p",null,"To create a loop that loops another loop, one of the component inputs loop behavior needs to be set to \u201cLoop the Component\u201d and another needs to be set to \u201cPass into Component\u201d."),(0,n.kt)("p",null,"The loop passed to the \u201cLoop the Component\u201d will create multiple instances of the component and the loop passed to \u201cPass into Component\u201d can be looped independently inside each of the component instances as shown below."),(0,n.kt)("p",null,"\u8981\u521b\u5efa\u5faa\u73af\u53e6\u4e00\u4e2a\u5faa\u73af\u7684\u5faa\u73af\uff0c\u5219\u9700\u8981\u5c06\u5176\u4e2d\u4e00\u4e2a\u7ec4\u4ef6\u8f93\u5165\u5faa\u73af\u7279\u6027\u8bbe\u7f6e\u4e3a\u201cLoop the Component \u5faa\u73af\u7ec4\u4ef6\u201d\uff0c\u53e6\u4e00\u4e2a\u9700\u8981\u5c06\u5176\u8bbe\u7f6e\u4e3a\u201cPass into Component \u4f20\u5165\u7ec4\u4ef6\u201d\u3002"),(0,n.kt)("p",null,"\u4f20\u9012\u7ed9\u201cLoop the Component \u5faa\u73af\u7ec4\u4ef6\u201d\u7684\u5faa\u73af\u5c06\u521b\u5efa\u591a\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u4f20\u9012\u7ed9\u201cPass into Component  \u4f20\u9012\u7ec4\u4ef6\u201d\u7684\u5faa\u73af\u53ef\u4ee5\u5728\u6bcf\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u5185\u72ec\u7acb\u5faa\u73af\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/loop_of_loops.mp4"},"https://origami.design/public/images/videos/loop_of_loops.mp4")),(0,n.kt)("h3",{id:"nested-arrays-to-loops-of-loops-\u5d4c\u5957\u6570\u7ec4\u5230\u5faa\u73af\u7684\u5faa\u73af"},"Nested arrays to Loops of Loops \u5d4c\u5957\u6570\u7ec4\u5230\u5faa\u73af\u7684\u5faa\u73af"),(0,n.kt)("p",null,"Another way of building looped components is using the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Over%20Array"},"Loop Over Array")," patch with a nested array. This is useful for working with data from a web API that includes multidimensional arrays."),(0,n.kt)("p",null,"\u6784\u5efa\u5faa\u73af\u7ec4\u4ef6\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u5e26\u6709\u5d4c\u5957\u6570\u7ec4\u7684Loop Over Array\u6570\u7ec4\u904d\u5386\u6a21\u5757\u3002\u8fd9\u4e00\u822c\u7528\u4e8e\u5904\u7406\u5305\u542b\u591a\u7ef4\u6570\u7ec4\u7684web API\u7684\u6570\u636e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:t(4063).Z,width:"1560",height:"700"})),(0,n.kt)("p",null,"Nested arrays to Loops of Loops"),(0,n.kt)("p",null,"\u5d4c\u5957\u6570\u7ec4\u5230\u5faa\u73af\u7684\u5faa\u73af"),(0,n.kt)("h3",{id:"looped-component-outputs-\u5faa\u73af\u7ec4\u4ef6\u8f93\u51fa"},"Looped Component Outputs \u5faa\u73af\u7ec4\u4ef6\u8f93\u51fa"),(0,n.kt)("p",null,"An important caveat about Looped Components is that components cannot ",(0,n.kt)("em",{parentName:"p"},"output")," a loop of loops. Outputs from looped components are appended to one another into a flat loop."),(0,n.kt)("p",null,"An example of this is adding a tap Output to the Looped Component shown earlier this would output a flattened loop of 25 pulse outputs since 5 x 5 is 25."),(0,n.kt)("p",null,"\u5173\u4e8e\u5faa\u73af\u7ec4\u4ef6\u9700\u8981\u6ce8\u610f\u98df\u7269\u662f\uff0c\u7ec4\u4ef6\u4e0d\u80fd\u8f93\u51fa\u5faa\u73af\u7684\u5faa\u73af\u7ec4\u3002\u6765\u81ea\u5faa\u73af\u7ec4\u4ef6\u7684\u8f93\u51fa\u88ab\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5730\u8f93\u51fa\u5230\u4e00\u4e2a\u6241\u5e73\u5faa\u73af\u4e2d\u3002"),(0,n.kt)("p",null,"\u6bd4\u5982\u5728\u4e4b\u524d\u7684\u5faa\u73af\u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u70b9\u51fb\u8f93\u51fa\uff0c\u8fd9\u5c06\u8f93\u51fa\u4e00\u4e2a\u5305\u542b25\u4e2a\u8109\u51b2\u8f93\u51fa\u7684\u6241\u5e73\u5faa\u73af\uff0c\u56e0\u4e3a5 x 5\u7b49\u4e8e25\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:t(45857).Z,width:"1560",height:"700"})),(0,n.kt)("p",null,"Looped Component Outputs \u5faa\u73af\u7ec4\u4ef6\u8f93\u51fa"),(0,n.kt)("h3",{id:"manipulating-loops-\u64cd\u4f5c\u5faa\u73af"},"Manipulating Loops \u64cd\u4f5c\u5faa\u73af"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Filter"},"Loop Filter")," and ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Select"},"Loop Select")," are the two patches for selecting items from a loop, useful for working with the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Option%20Switch"},"Loop Option Switch")," for getting the selected item in a loop."),(0,n.kt)("p",null,"Loop Filter \u5faa\u73af\u7b5b\u9009 \u548c Loop Select \u5faa\u73af\u9009\u62e9 \u662f\u7528\u4e8e\u4ece\u5faa\u73af\u4e2d\u9009\u62e9\u9879\u76ee\u7684\u4e24\u4e2a\u6a21\u5757\uff0c\u4e00\u822c\u7528\u4e8e\u5728\u4f7f\u7528Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173 \u5728\u5faa\u73af\u4e2d\u83b7\u53d6\u6240\u9009\u9879\u76ee\u3002"),(0,n.kt)("h3",{id:"loops--interactions-\u5faa\u73af\u4ea4\u4e92"},"Loops & Interactions \u5faa\u73af&\u4ea4\u4e92"),(0,n.kt)("p",null,"When we add an ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction")," patch to a looper layer, the Interactions output will then be looped as well. Using the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Option%20Switch"},"Loop Option Switch")," patch with the ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Loops/Loop%20Select"},"Loop Select")," patch we can get the value of the tapped on item"),(0,n.kt)("p",null,"\u5f53\u6211\u4eec\u5411\u5faa\u73af\u56fe\u5c42\u6dfb\u52a0\u4e00\u4e2a\u4ea4\u4e92\u6a21\u5757\u65f6\uff0c\u4ea4\u4e92\u8f93\u51fa\u4e5f\u5c06\u88ab\u5faa\u73af\u3002\u901a\u8fc7\u4f7f\u7528Loop Option Switch \u5faa\u73af\u9009\u9879\u5f00\u5173 \u6a21\u5757\u548c Loop Select \u5faa\u73af\u9009\u62e9\u6a21\u5757\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u9879\u76ee\u4e0a\u88ab\u9009\u4e2d\u7684\u503c"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/loop_interactions.mp4"},"https://origami.design/public/images/videos/loop_interactions.mp4")),(0,n.kt)("h1",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Loops are a powerful feature for creating dynamic repeating UI and interactions in Origami"),(0,n.kt)("li",{parentName:"ul"},"Use Layout to control how looped Layers and Components are arranged on the Canvas"),(0,n.kt)("li",{parentName:"ul"},"Use Components to define what Group in the layer hierarchy should be repeated"),(0,n.kt)("li",{parentName:"ul"},"Use Components when you want to build loops of loops"),(0,n.kt)("li",{parentName:"ul"},"Loop behavior for Components is defined in the Component Info popover for each port. ",(0,n.kt)("em",{parentName:"li"},"Pass into Component")," passes the loop into the component without looping the component and ",(0,n.kt)("em",{parentName:"li"},"Loop the Component")," will loop the component passing in each item from the loop."),(0,n.kt)("li",{parentName:"ul"},"Interactions on a looped layer will have their outputs looped as well."),(0,n.kt)("li",{parentName:"ul"},"\u5faa\u73af\u662f\u5728Origami\u4e2d\u521b\u5efa\u52a8\u6001\u91cd\u590dUI\u548c\u4ea4\u4e92\u7684\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u529f\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e03\u5c40\u6765\u63a7\u5236\u5982\u4f55\u6392\u5217\u753b\u5e03\u4e0a\u7684\u5faa\u73af\u56fe\u5c42\u548c\u7ec4\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7ec4\u4ef6\u6765\u8bbe\u7f6e\u56fe\u5c42\u5c42\u6b21\u7ed3\u6784\u4e2d\u5e94\u91cd\u590d\u7684\u7ec4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7ec4\u4ef6\u6765\u6784\u5efa\u5d4c\u5957\u5faa\u73af\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u7684\u5faa\u73af\u7279\u6027\u5728\u6bcf\u4e2a\u7aef\u53e3\u7684\u7ec4\u4ef6\u4fe1\u606f\u5f39\u7a97\u4e2d\u5b9a\u4e49\u3002",(0,n.kt)("em",{parentName:"li"},"Pass into Component\u4f20\u5165\u7ec4\u4ef6")," \u628a\u5faa\u73af\u4f20\u9012\u7ed9\u7ec4\u4ef6\uff0c\u800c\u4e0d\u662f\u8ba9\u7ec4\u4ef6\u5faa\u73af\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5faa\u73af\u56fe\u5c42\u7684\u4ea4\u4e92\u4e5f\u5c06\u5faa\u73af\u8f93\u51fa\u3002")))}c.isMDXComponent=!0},91345:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/loop-1-203bfdbffb8da969b461d6291801eb0a.png"},60142:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/loop-2-8aea2629e9aa2891cb239c466bacd6bb.png"},4063:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/loop-3-d90ea8df1116f4a143d8b3eb46e69011.png"},45857:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/loop-4-39619021fa56c413d67634fa9ba0df9b.png"}}]);