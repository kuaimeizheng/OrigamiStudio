"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[9957],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:e},s),{},{components:n})):r.createElement(g,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32609:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2},o="Settings JSON \u8bbe\u7f6eJSON",p={unversionedId:"documentation/Data/Settings JSON",id:"documentation/Data/Settings JSON",title:"Settings JSON \u8bbe\u7f6eJSON",description:"Create a JSON object from input ports to create a Settings patch like Scroll Settings or Drag Settings. Unlink the patch with the the \u2018.\u2019 key and use the Patch Info popover to edit the input ports. Learn more about unlinking from library and editing patch ports.",source:"@site/docs/documentation/Data/Settings JSON.md",sourceDirName:"documentation/Data",slug:"/documentation/Data/Settings JSON",permalink:"/OrigamiStudio/docs/documentation/Data/Settings JSON",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Data/Settings JSON.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659715910,formattedLastUpdatedAt:"2022\u5e748\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Set Value for Key \u8bbe\u7f6e\u952e\u503c",permalink:"/OrigamiStudio/docs/documentation/Data/Set Value for Key"},next:{title:"Subarray \u5b50\u6570\u7ec4",permalink:"/OrigamiStudio/docs/documentation/Data/Subarray"}},l={},c=[{value:"Foo",id:"foo",level:3},{value:"Bar",id:"bar",level:3},{value:"Output \u5bf9\u8c61",id:"output-\u5bf9\u8c61",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:c};function u(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"settings-json-\u8bbe\u7f6ejson"},"Settings JSON \u8bbe\u7f6eJSON"),(0,a.kt)("p",null,"Create a JSON object from input ports to create a Settings patch like ",(0,a.kt)("a",{parentName:"p",href:"../Interaction/Scroll%20Settings"},"Scroll Settings")," or ",(0,a.kt)("a",{parentName:"p",href:"../Interaction/Drag%20Settings"},"Drag Settings"),". Unlink the patch with the the \u2018.\u2019 key and use the Patch Info popover to edit the input ports. ",(0,a.kt)("a",{parentName:"p",href:"../Workflow/Patch%20Organization"},"Learn more")," about unlinking from library and editing patch ports."),(0,a.kt)("p",null,"\u4ece\u8f93\u5165\u7aef\u53e3\u521b\u5efa JSON \u5bf9\u8c61\u4ee5\u521b\u5efa\u8bbe\u7f6e\u6a21\u5757\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"../Interaction/Scroll%20Settings"},"Scroll Settings \u6eda\u52a8\u8bbe\u7f6e")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"../Interaction/Drag%20Settings"},"Drag Settings \u62d6\u52a8\u8bbe\u7f6e"),"\u3002\u4f7f\u7528 \u201c.\u201d \u952e\u53d6\u6d88\u94fe\u63a5\u6a21\u5757\uff0c\u5e76\u4f7f\u7528\u6a21\u5757\u4fe1\u606f\u5f39\u7a97\u7f16\u8f91\u8f93\u5165\u7aef\u53e3\u3002\u4e86\u89e3\u6709\u5173\u4ece\u5e93\u53d6\u6d88\u94fe\u63a5\u548c\u7f16\u8f91\u6a21\u5757\u7aef\u53e3\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(33040).Z,width:"1500",height:"232"})),(0,a.kt)("h3",{id:"foo"},"Foo"),(0,a.kt)("p",null,"Example input - edit patch settings to replace this with your desired input name."),(0,a.kt)("p",null,"\u793a\u4f8b\u8f93\u5165 - \u7f16\u8f91\u6a21\u5757\u8bbe\u7f6e\u4ee5\u5c06\u5176\u66ff\u6362\u4e3a\u60a8\u60f3\u8981\u7684\u8f93\u5165\u540d\u79f0\u3002"),(0,a.kt)("h3",{id:"bar"},"Bar"),(0,a.kt)("p",null,"Example input - edit patch settings to replace this with your desired input name."),(0,a.kt)("p",null,"\u793a\u4f8b\u8f93\u5165 - \u7f16\u8f91\u6a21\u5757\u8bbe\u7f6e\u4ee5\u5c06\u5176\u66ff\u6362\u4e3a\u60a8\u60f3\u8981\u7684\u8f93\u5165\u540d\u79f0\u3002"),(0,a.kt)("h3",{id:"output-\u5bf9\u8c61"},"Output \u5bf9\u8c61"),(0,a.kt)("p",null,"The JSON Object containing the input ports as keys and values."),(0,a.kt)("p",null,"\u5305\u542b\u8f93\u5165\u7aef\u53e3\u4f5c\u4e3a\u952e\u548c\u503c\u7684 JSON \u5bf9\u8c61\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./JSON%20Array"},"JSON Array JSON \u6570\u7ec4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./JSON%20Object"},"JSON Object JSON \u5bf9\u8c61")))}u.isMDXComponent=!0},33040:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/settings-json-177c775c761c35f512b344bde6bf36fa.png"}}]);