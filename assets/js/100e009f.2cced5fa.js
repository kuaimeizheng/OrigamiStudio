"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[72077],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12005:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Javascript",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},o="Javascript",c={unversionedId:"tutorial/senior/javascript",id:"tutorial/senior/javascript",title:"Javascript",description:"\u5185\u5bb9\u5f85\u5b8c\u5584\u3002",source:"@site/docs/tutorial/senior/javascript.md",sourceDirName:"tutorial/senior",slug:"/tutorial/senior/javascript",permalink:"/OrigamiStudio/docs/tutorial/senior/javascript",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/tutorial/senior/javascript.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{title:"Javascript",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6\u7cfb\u7edf\u7684\u642d\u5efa",permalink:"/OrigamiStudio/docs/tutorial/senior/intro"},next:{title:"\u4e13\u5bb6",permalink:"/OrigamiStudio/docs/category/\u4e13\u5bb6"}},s={},p=[{value:"\u6587\u4ef6\u793a\u4f8b",id:"\u6587\u4ef6\u793a\u4f8b",level:2}],u={toc:p};function l(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript"},"Javascript"),(0,a.kt)("p",null,"\u5185\u5bb9\u5f85\u5b8c\u5584\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6587\u4ef6\u793a\u4f8b"},"\u6587\u4ef6\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'//==============================================================================\n// Welcome to scripting in Origami! Helpful links:\n//\n// Scripting Basics - https://origami.design/documentation/concepts/scriptingbasics\n// Scripting API - https://origami.design/documentation/concepts/scriptingapi\n//\n// Script ID: F4CCF1AC-6840-43C1-9C65-08B64040ABE0\n//==============================================================================\n\n\n// Define your patch\n\nvar patch = new Patch();\n\n// Patches are always being evaluated when inputs change of values. If you need your patch to run every frame set this to true\n// Setting this to true makes scripts very inefficient and should be avoided at all cost.\npatch.alwaysNeedsToEvaluate = false;\n\n// Set Inputs and Outputs.\npatch.inputs = [\n  new PatchInput("Input", types.NUMBER, 0),\n];\n\npatch.outputs = [\n  new PatchOutput("Output", types.NUMBER),\n];\n\n// Add your logic in this function.\npatch.evaluate = function() {\n  patch.outputs[0].value = patch.inputs[0].value;\n}\n\nreturn patch;\n\n')))}l.isMDXComponent=!0}}]);