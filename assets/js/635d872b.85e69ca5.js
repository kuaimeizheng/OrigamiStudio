"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[3657],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?i.createElement(h,o(o({ref:t},u),{},{components:r})):i.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4451:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=r(7462),a=r(3366),n=(r(7294),r(3905)),o=["components"],l={sidebar_position:2},s="Circular Progress \u73af\u5f62\u8fdb\u5ea6",c={unversionedId:"Material/Circular Progress",id:"Material/Circular Progress",title:"Circular Progress \u73af\u5f62\u8fdb\u5ea6",description:"A Material circular progress indicator with customizable colors, size, and animation.",source:"@site/docs/Material/Circular Progress.md",sourceDirName:"Material",slug:"/Material/Circular Progress",permalink:"/OrigamiStudio/docs/Material/Circular Progress",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/docs/Material/Circular Progress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Checkbox \u590d\u9009\u6846",permalink:"/OrigamiStudio/docs/Material/Checkbox"},next:{title:"Fake Keyboard \u6a21\u62df\u952e\u76d8",permalink:"/OrigamiStudio/docs/Material/Fake Keyboard"}},u={},p=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Progress \u8fdb\u5ea6",id:"progress-\u8fdb\u5ea6",level:3},{value:"Thickness \u5bbd\u5ea6",id:"thickness-\u5bbd\u5ea6",level:3},{value:"Active Color \u7126\u70b9\u989c\u8272",id:"active-color-\u7126\u70b9\u989c\u8272",level:3},{value:"Radius \u534a\u5f84",id:"radius-\u534a\u5f84",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Anchor \u951a\u70b9",id:"anchor-\u951a\u70b9",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Rotation \u65cb\u8f6c",id:"rotation-\u65cb\u8f6c",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Pivot \u8f74\u5fc3\u70b9",id:"pivot-\u8f74\u5fc3\u70b9",level:3},{value:"Indeterminate \u4e0d\u786e\u5b9a",id:"indeterminate-\u4e0d\u786e\u5b9a",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"circular-progress-\u73af\u5f62\u8fdb\u5ea6"},"Circular Progress \u73af\u5f62\u8fdb\u5ea6"),(0,n.kt)("p",null,"A Material circular progress indicator with customizable colors, size, and animation."),(0,n.kt)("p",null,"\u5177\u6709\u53ef\u81ea\u5b9a\u4e49\u989c\u8272\u3001\u5927\u5c0f\u548c\u52a8\u753b\u7684 Material \u5706\u5f62\u8fdb\u5ea6\u6307\u793a\u5668\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45952820-579f-4f20-97c8-53e1981cfeb2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220602T190217Z&X-Amz-Expires=86400&X-Amz-Signature=5a4766d5505eb7e2900d2378e5352202e9c5bce099151168702b2b35be4d2cbd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",alt:"Untitled"})),(0,n.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,n.kt)("p",null,"A boolean that is true when the circular progress is displayed."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u663e\u793a\u5706\u5f62\u8fdb\u5ea6\u65f6\u4e3a\u771f\u3002"),(0,n.kt)("h3",{id:"progress-\u8fdb\u5ea6"},"Progress \u8fdb\u5ea6"),(0,n.kt)("p",null,"A progress value from 0 to 1 that controls how much of the circular progress ring is filled."),(0,n.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u8fdb\u5ea6\u503c\uff0c\u7528\u4e8e\u63a7\u5236\u5706\u5f62\u8fdb\u5ea6\u73af\u7684\u8fdb\u5ea6\u3002"),(0,n.kt)("h3",{id:"thickness-\u5bbd\u5ea6"},"Thickness \u5bbd\u5ea6"),(0,n.kt)("p",null,"A number that represents the thickenss of the circular progress, in dp."),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u5faa\u73af\u8fdb\u5ea6\u7684\u5bbd\u5ea6\uff0c\u4ee5 dp \u4e3a\u5355\u4f4d\u3002"),(0,n.kt)("h3",{id:"active-color-\u7126\u70b9\u989c\u8272"},"Active Color \u7126\u70b9\u989c\u8272"),(0,n.kt)("p",null,"The color of the circular progress."),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u989c\u8272\u3002"),(0,n.kt)("h3",{id:"radius-\u534a\u5f84"},"Radius \u534a\u5f84"),(0,n.kt)("p",null,"The size of the circular progress."),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u5927\u5c0f\u3002"),(0,n.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,n.kt)("p",null,"The size of the circular progress."),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u5927\u5c0f\u3002"),(0,n.kt)("h3",{id:"anchor-\u951a\u70b9"},"Anchor \u951a\u70b9"),(0,n.kt)("p",null,"The anchor point to position the layer relative to. See ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,n.kt)("p",null,"\u76f8\u5bf9\u4e8e\u5b9a\u4f4d\u56fe\u5c42\u7684\u951a\u70b9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,n.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"The opacity of the circular progress."),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,n.kt)("h3",{id:"rotation-\u65cb\u8f6c"},"Rotation \u65cb\u8f6c"),(0,n.kt)("p",null,"The rotation of the circular progress."),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u65cb\u8f6c\u3002"),(0,n.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,n.kt)("p",null,"The scale of the circular progress."),(0,n.kt)("p",null,"\u5706\u5f62\u8fdb\u5ea6\u7684\u6bd4\u4f8b\u5927\u5c0f\u3002"),(0,n.kt)("h3",{id:"pivot-\u8f74\u5fc3\u70b9"},"Pivot \u8f74\u5fc3\u70b9"),(0,n.kt)("p",null,"The pivot to rotate and scale the layer about. See ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Concepts/Coordinates"},"Coordinates \u5750\u6807")," for more information."),(0,n.kt)("p",null,"\u65cb\u8f6c\u548c\u7f29\u653e\u56fe\u5c42\u7684\u67a2\u8f74\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5750\u6807\u3002"),(0,n.kt)("h3",{id:"indeterminate-\u4e0d\u786e\u5b9a"},"Indeterminate \u4e0d\u786e\u5b9a"),(0,n.kt)("p",null,"A boolean that is true when the circular progress uses an indeterminate animation."),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u5706\u5f62\u8fdb\u5ea6\u4f7f\u7528\u4e0d\u786e\u5b9a\u52a8\u753b\u65f6\u4e3a\u771f\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Classic%20Animation"},"Classic Animation \u7ecf\u5178\u52a8\u753b")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Animation/Repeating%20Animation"},"Repeating Animation \u91cd\u590d\u52a8\u753b")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Alert%20View"},"Alert View \u8b66\u793a\u6846")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Checkbox"},"Checkbox \u590d\u9009\u6846")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Fake%20Keyboard"},"Fake Keyboard \u6a21\u62df\u952e\u76d8")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Page%20Control"},"Page Control \u5206\u9875\u63a7\u5236\u5668"),"\n",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Screen"},"Screen \u5c4f\u5e55")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Status%20bar"},"Status Bar \u72b6\u6001\u680f")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Switch"},"Switch \u5f00\u5173")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/Material/Text%20Field"},"Text Field \u6587\u672c\u8f93\u5165\u6846")))}m.isMDXComponent=!0}}]);