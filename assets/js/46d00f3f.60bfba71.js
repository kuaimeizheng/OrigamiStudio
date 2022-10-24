"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[83898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={title:"Layout \u5e03\u5c40",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},r="Layout \u5e03\u5c40",l={unversionedId:"documentation/Canvas/Layout",id:"documentation/Canvas/Layout",title:"Layout \u5e03\u5c40",description:"Layout is a dynamic system of constraints that controls the way your design elements are placed to create adaptive layouts. Designs automatically respond to any changes, making it faster to create & iterate on your work. Those coming from the web can think of it similarly to Flexbox.",source:"@site/docs/documentation/Canvas/Layout.md",sourceDirName:"documentation/Canvas",slug:"/documentation/Canvas/Layout",permalink:"/OrigamiStudio/docs/documentation/Canvas/Layout",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Canvas/Layout.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1666623706,formattedLastUpdatedAt:"2022\u5e7410\u670824\u65e5",sidebarPosition:5,frontMatter:{title:"Layout \u5e03\u5c40",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Canvas \u753b\u5e03",permalink:"/OrigamiStudio/docs/documentation/Canvas/"},next:{title:"Quick Interactions \u5feb\u6377\u4ea4\u4e92",permalink:"/OrigamiStudio/docs/documentation/Canvas/Quick Interactions"}},s={},p=[],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"layout-\u5e03\u5c40"},"Layout \u5e03\u5c40"),(0,i.kt)("p",null,"Layout is a dynamic system of constraints that controls the way your design elements are placed to create adaptive layouts. Designs automatically respond to any changes, making it faster to create & iterate on your work. Those coming from the web can think of it similarly to Flexbox."),(0,i.kt)("p",null,"\u5e03\u5c40\u662f\u4e00\u4e2a\u52a8\u6001\u7684\u7ea6\u675f\u7cfb\u7edf\uff0c\u5b83\u63a7\u5236\u8bbe\u8ba1\u5143\u7d20\u7684\u653e\u7f6e\u65b9\u5f0f\uff0c\u4ee5\u521b\u5efa\u81ea\u9002\u5e94\u7684\u5e03\u5c40\u3002"),(0,i.kt)("p",null,"\u8bbe\u8ba1\u81ea\u52a8\u54cd\u5e94\u4efb\u4f55\u53d8\u5316\uff0c\u4f7f\u5b83\u66f4\u5feb\u5730\u521b\u5efa\u548c\u8fed\u4ee3\u60a8\u7684\u5de5\u4f5c\u3002\u7c7b\u4f3c\u4e8e\u7f51\u9875\u5f00\u53d1\u4e2d\u7684Flexbox\u3002"),(0,i.kt)("p",null,"In order to use Layout, you have to enable it on Artboards and Group layers. Any objects within that group will get new Layout-related properties."),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u5e03\u5c40\uff0c\u4f60\u5fc5\u987b\u5728\u753b\u677f\u548c\u56fe\u5c42\u7ec4\u4e0a\u542f\u7528\u5b83\u3002\u8be5\u7ec4\u4e2d\u7684\u4efb\u4f55\u5bf9\u8c61\u90fd\u5c06\u83b7\u5f97\u4e0e\u5e03\u5c40\u76f8\u5173\u7684\u65b0\u5c5e\u6027\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,i.kt)("p",null,"Position determines where an object is in relation to other objects in the group. Position applies to any layer that has a parent group with Layout enabled. When setting Position, there are two parameters to choose from:  Relative and  Absolute."),(0,i.kt)("p",null,"\u4f4d\u7f6e\u51b3\u5b9a\u4e86\u4e00\u4e2a\u5bf9\u8c61\u4e0e\u7ec4\u4e2d\u5176\u4ed6\u5bf9\u8c61\u7684\u5173\u7cfb\u3002\u4f4d\u7f6e\u5e94\u7528\u4e8e\u4efb\u4f55\u542f\u7528\u5e03\u5c40\u7684\u7236\u7ec4\u4e2d\u7684\u56fe\u5c42\u3002\u5728\u8bbe\u7f6e\u4f4d\u7f6e\u65f6\uff0c\u6709\u4e24\u4e2a\u53c2\u6570\u53ef\u4f9b\u9009\u62e9:\u76f8\u5bf9\u4f4d\u7f6e\u548c\u7edd\u5bf9\u4f4d\u7f6e\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Relativemeans the object will position itself relative to the other objects in its group."),(0,i.kt)("li",{parentName:"ul"},"Absolutemeans the object will ignore the other objects in the group and position itself at some X and Y value within the group."),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u4f4d\u7f6e\u5c31\u662f\u8fd9\u4e2a\u5bf9\u8c61\u4f1a\u76f8\u5bf9\u4e8e\u5b83\u7ec4\u4e2d\u7684\u5176\u4ed6\u5bf9\u8c61\u6765\u5b9a\u4f4d\u81ea\u5df1\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7edd\u5bf9\u4f4d\u7f6e\u5c31\u662f\u5bf9\u8c61\u5c06\u5ffd\u7565\u7ec4\u4e2d\u7684\u5176\u4ed6\u5bf9\u8c61\uff0c\u5e76\u5c06\u81ea\u5df1\u5b9a\u4f4d\u4e8e\u7ec4\u4e2d\u7684\u67d0\u4e2a X \u548c Y \u503c\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/layout_position.mp4"},"https://origami.design/public/images/videos/layout_position.mp4")),(0,i.kt)("h1",{id:"size-\u5c3a\u5bf8"},"Size \u5c3a\u5bf8"),(0,i.kt)("p",null,"Size determines the width and height of an object or group. It applies to any layer that has a parent group with Layout enabled AND any parent group with Layout enabled. When setting  Size, there are three parameters to choose from:  Auto, Grow , and  Fixed ."),(0,i.kt)("p",null,"\u5927\u5c0f\u51b3\u5b9a\u4e86\u5bf9\u8c61\u6216\u7ec4\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002\u5b83\u9002\u7528\u4e8e\u542f\u7528\u5e03\u5c40\u7684\u7236\u7ec4\u548c\u542f\u7528\u5e03\u5c40\u7684\u7236\u7ec4\u56fe\u5c42\u3002\u8bbe\u7f6e\u5927\u5c0f\u65f6\uff0c\u6709\u4e09\u4e2a\u53c2\u6570\u53ef\u4f9b\u9009\u62e9:\u81ea\u52a8\u3001\u589e\u957f\u548c\u56fa\u5b9a\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automeans the parent group will snap to the height/width of the objects inside of it."),(0,i.kt)("li",{parentName:"ul"},"Growmeans the object or group will grow to the height/width of its parent group."),(0,i.kt)("li",{parentName:"ul"},"Fixedmeans the height/width of the object or group is set to a specific value. In Sketch, Fixed is an option in the dropdown. In Origami, you enter a specific number in the Size input field to make a layer Fixed."),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u8868\u793a\u7236\u7ec4\u5c06\u6355\u6349\u5230\u5176\u5185\u90e8\u5bf9\u8c61\u7684\u9ad8\u5ea6/\u5bbd\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u589e\u957f\u8868\u793a\u5bf9\u8c61\u6216\u7ec4\u5c06\u589e\u957f\u5230\u5176\u7236\u7ec4\u7684\u9ad8\u5ea6/\u5bbd\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u56fa\u5b9a\u8868\u793a\u5bf9\u8c61\u6216\u7ec4\u7684\u9ad8\u5ea6/\u5bbd\u5ea6\u88ab\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u503c\u3002\u5728 Sketch \u4e2d\uff0c\u56fa\u5b9a \u662f\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684\u4e00\u4e2a\u9009\u9879\u3002\u5728 Origami \u4e2d\uff0c\u5728 \u5927\u5c0f \u8f93\u5165\u6846\u4e2d\u8f93\u5165\u7279\u5b9a\u7684\u6570\u5b57\uff0c\u4ee5\u56fa\u5b9a\u56fe\u5c42\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/layout_size.mp4"},"https://origami.design/public/images/videos/layout_size.mp4")),(0,i.kt)("h1",{id:"direction-\u65b9\u5411"},"Direction \u65b9\u5411"),(0,i.kt)("p",null,"The direction determines how they layers in an AutoLayout group are arranged. When setting Direction , there are three parameters to choose from:  Horizontal ,  Vertical , and Grid ."),(0,i.kt)("p",null,"\u65b9\u5411\u51b3\u5b9a\u4e86\u5728\u542f\u7528\u4e86\u81ea\u52a8\u5e03\u5c40\u7684\u7ec4\u4e2d\u56fe\u5c42\u7684\u6392\u5217\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e \u65b9\u5411 \u65f6\uff0c\u6709\u4e09\u4e2a\u53c2\u6570\u53ef\u4f9b\u9009\u62e9\uff1a\u6c34\u5e73 \u3001 \u5782\u76f4 \u548c \u6805\u683c \u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Horizontalmeans the group\u2019s objects will arrange side-to-side."),(0,i.kt)("li",{parentName:"ul"},"Verticalmeans the group\u2019s objects will arrange top-to-bottom."),(0,i.kt)("li",{parentName:"ul"},"Gridmeans the group\u2019s objects will arrange horizontally until they reach the maximum width, at which point they will stack in a new row. To set a group\u2019s Direction to Grid, its width must be set to Fixed."),(0,i.kt)("li",{parentName:"ul"},"\u6c34\u5e73\u8868\u793a\u7fa4\u7ec4\u4e2d\u7684\u5bf9\u8c61\u5c06\u4ece\u4e00\u8fb9\u5230\u53e6\u4e00\u8fb9\u6392\u5217\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5782\u76f4\u8868\u793a\u7fa4\u7ec4\u5bf9\u8c61\u5c06\u4ece\u4e0a\u5230\u4e0b\u6392\u5217\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u683c\u8868\u793a\u7fa4\u7ec4\u4e2d\u7684\u5bf9\u8c61\u5c06\u6c34\u5e73\u6392\u5217\uff0c\u76f4\u5230\u8fbe\u5230\u6700\u5927\u5bbd\u5ea6\uff0c\u4ed6\u4eec\u5c06\u53e6\u8d77\u4e00\u884c\u8fdb\u884c\u5806\u53e0\u3002\u8981\u5c06\u7fa4\u7ec4\u7684\u65b9\u5411\u8bbe\u7f6e\u4e3a\u738b\u54e5\uff0c\u7ec4\u7684\u5bbd\u5ea6\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u56fa\u5b9a\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/layout_direction.mp4"},"https://origami.design/public/images/videos/layout_direction.mp4")),(0,i.kt)("h1",{id:"alignment-\u5bf9\u9f50"},"Alignment \u5bf9\u9f50"),(0,i.kt)("p",null,"Alignment determines the anchor point that layers align to. It applies to any parent group that has Layout enabled. Alignment does not change the order the objects are stacked \u2013 it only changes their starting point. To change the order they stack, rearrange the layers in your layers list or rearrange the objects on Canvas."),(0,i.kt)("p",null,"\u5bf9\u9f50\u51b3\u5b9a\u4e86\u56fe\u5c42\u5bf9\u9f50\u7684\u951a\u70b9\u3002\u5b83\u9002\u7528\u4e8e\u4efb\u4f55\u542f\u7528\u4e86\u5e03\u5c40\u7684\u7236\u7ec4\u3002\u5bf9\u9f50\u5e76\u4e0d\u4f1a\u6539\u53d8\u7269\u4f53\u7684\u5806\u53e0\u987a\u5e8f\u2014\u2014\u5b83\u53ea\u4f1a\u6539\u53d8\u5b83\u4eec\u7684\u8d77\u59cb\u70b9\u3002"),(0,i.kt)("p",null,"\u8981\u6539\u53d8\u5b83\u4eec\u5806\u53e0\u7684\u987a\u5e8f\uff0c\u8bf7\u5728\u56fe\u5c42\u5217\u8868\u4e2d\u91cd\u65b0\u6392\u5217\u56fe\u5c42\u6216\u5728\u753b\u5e03\u4e0a\u91cd\u65b0\u6392\u5217\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/layout_alignment.mp4"},"https://origami.design/public/images/videos/layout_alignment.mp4")),(0,i.kt)("h1",{id:"spacing-padding--margins-\u95f4\u8ddd\u5185\u8fb9\u8ddd\u5916\u8fb9\u8ddd"},"Spacing, Padding & Margins \u95f4\u8ddd\uff0c\u5185\u8fb9\u8ddd&\u5916\u8fb9\u8ddd"),(0,i.kt)("p",null,"These 3 properties determine the separation between, around and outside of layers in a Layout enabled group."),(0,i.kt)("p",null,"\u8fd93\u4e2a\u5c5e\u6027\u51b3\u5b9a\u4e86\u5728\u542f\u7528\u5e03\u5c40\u7684\u7ec4\u4e2d\uff0c\u56fe\u5c42\u4e4b\u95f4\u3001\u56fe\u5c42\u5468\u56f4\u548c\u56fe\u5c42\u5916\u90e8\u7684\u95f4\u8ddd\u3002"),(0,i.kt)("p",null,"Spacingapplies to any parent group that has Layout enabled. When setting Spacing, there are 3 parameters to choose from:  Between ,  Evenly, and Fixed ."),(0,i.kt)("p",null,"\u95f4\u8ddd\u9002\u7528\u4e8e\u4efb\u4f55\u542f\u7528\u4e86\u5e03\u5c40\u7684\u7236\u7ec4\u3002\u8bbe\u7f6e\u95f4\u8ddd\u65f6\uff0c\u67093\u4e2a\u53c2\u6570\u53ef\u4f9b\u9009\u62e9:\u5e73\u5747 \uff0c\u5747\u5300 \uff0c\u56fa\u5b9a\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Betweenmeans there will be even space between objects in the group."),(0,i.kt)("li",{parentName:"ul"},"Evenlymeans there will be even space between objects in the group AND between objects and the group\u2019s edge."),(0,i.kt)("li",{parentName:"ul"},"Fixed (any number value)means the space between objects is set to a specific number. To set a group\u2019s Spacing to Fixed, you enter a number in the Spacing input field."),(0,i.kt)("li",{parentName:"ul"},"\u5e73\u5747\u8868\u793a\u5728\u7ec4\u4e2d\u5bf9\u8c61\u4e4b\u95f4\u7684\u95f4\u8ddd\u4f1a\u662f\u5076\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5747\u5300\u8868\u793a\u7ec4\u4e2d\u7684\u5bf9\u8c61\u4e4b\u95f4\u4ee5\u53ca\u5bf9\u8c61\u4e0e\u7ec4\u7684\u8fb9\u7f18\u4e4b\u95f4\u7684\u95f4\u8ddd\u662f\u5747\u5300\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u56fa\u5b9a\uff08\u4efb\u610f\u6570\u503c\uff09\u8868\u793a\u5bf9\u8c61\u4e4b\u95f4\u7684\u95f4\u8ddd\u662f\u4e00\u4e2a\u7279\u5b9a\u7684\u6570\u5b57\u3002\u8981\u5c06\u7ec4\u7684\u95f4\u8ddd\u8bbe\u7f6e\u4e3a\u56fa\u5b9a\uff0c\u60a8\u9700\u8981\u5728 Spacing\u95f4\u8ddd \u8f93\u5165\u5b57\u6bb5\u4e2d\u8f93\u5165\u4e00\u4e2a\u6570\u5b57\u3002")),(0,i.kt)("p",null,"Paddingapplies to any parent group that has Layout enabled. Padding affects the space between the group\u2019s edge and the objects inside of it."),(0,i.kt)("p",null,"\u5185\u8fb9\u8ddd\u9002\u7528\u4e8e\u4efb\u4f55\u542f\u7528\u4e86\u5e03\u5c40\u7684\u7236\u7ec4\u3002\u5185\u8fb9\u8ddd\u5f71\u54cd\u7ec4\u8fb9\u7f18\u548c\u7ec4\u5185\u5bf9\u8c61\u4e4b\u95f4\u7684\u7a7a\u95f4\u3002"),(0,i.kt)("p",null,"\u5916\u8fb9\u8ddd\u9002\u7528\u4e8e\u4efb\u4f55\u542f\u7528\u5e03\u5c40\u7684\u7236\u7ec4\u548c\u542f\u7528\u5e03\u5c40\u7684\u7236\u7ec4\u4e2d\u7684\u56fe\u5c42\u3002\u5916\u8fb9\u8ddd\u5f71\u54cd\u56fe\u5c42\u8fb9\u7f18\u4e0e\u5176\u7236\u7ec4\u4e4b\u95f4\u7684\u7a7a\u95f4\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/layout_spacing.mp4"},"https://origami.design/public/images/videos/layout_spacing.mp4")),(0,i.kt)("h1",{id:"cap--baseline-\u4e0a\u9650\u57fa\u7ebf"},"Cap & Baseline \u4e0a\u9650&\u57fa\u7ebf"),(0,i.kt)("p",null,"Determines how Origami will vertically measure text bounds."),(0,i.kt)("p",null,"\u4e86\u89e3Origami\u5982\u4f55\u6d4b\u91cf\u6587\u672c\u7684\u5782\u76f4\u8fb9\u754c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EnabledCap & Baseline snaps the text bounds to the cap & base height of the text."),(0,i.kt)("li",{parentName:"ul"},"DisabledCap & Baseline snaps the text bounds to the bounding box."),(0,i.kt)("li",{parentName:"ul"},"\u542f\u7528\u5c06\u6355\u6349\u6587\u672c\u6846\u4e2d\u6587\u672c\u7684\u4e0a\u9650\u548c\u57fa\u7ebf\u7684\u9ad8\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7981\u7528\u5c06\u6355\u6349\u6587\u672c\u6846\u7684\u8fb9\u754c\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/cap_and_baseline@2x.png",alt:null})),(0,i.kt)("p",null,"Cap & Baseline examples"),(0,i.kt)("p",null,"\u4e0a\u9650&\u57fa\u7ebf \u793a\u4f8b"),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"summary-\u603b\u7ed3"},"Summary \u603b\u7ed3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Layout makes it easy to create complex interfaces that respond to their content."),(0,i.kt)("li",{parentName:"ul"},"Enable Layout on Artboards and Group layers from the Layout section in the Inspector panel."),(0,i.kt)("li",{parentName:"ul"},"\u5e03\u5c40\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u521b\u5efa\u590d\u6742\u5185\u5bb9\u7684\u54cd\u5e94\u754c\u9762\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u201c\u68c0\u67e5\u5668\u201d\u9762\u677f\u7684\u201c\u5e03\u5c40\u201d\u533a\u57df\u542f\u7528\u753b\u677f\u548c\u7ec4\u56fe\u5c42\u7684\u5e03\u5c40\u529f\u80fd\u3002")))}c.isMDXComponent=!0}}]);