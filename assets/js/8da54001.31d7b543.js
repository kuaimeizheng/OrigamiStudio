"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2977],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),v=a,f=p["".concat(c,".").concat(v)]||p[v]||s[v]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18443:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={sidebar_position:24,tags:["loop"]},c="Drag Scale",u={unversionedId:"patches/Interaction/Drag Scale",id:"patches/Interaction/Drag Scale",title:"Drag Scale",description:"Input \u8f93\u5165",source:"@site/docs/patches/Interaction/Drag Scale.md",sourceDirName:"patches/Interaction",slug:"/patches/Interaction/Drag Scale",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Scale",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/patches/Interaction/Drag Scale.md",tags:[{label:"loop",permalink:"/OrigamiStudio/docs/tags/loop"}],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1659287509,formattedLastUpdatedAt:"2022\u5e747\u670831\u65e5",sidebarPosition:24,frontMatter:{sidebar_position:24,tags:["loop"]},sidebar:"patchesSidebar",previous:{title:"Drag Recorder",permalink:"/OrigamiStudio/docs/patches/Interaction/Drag Recorder"},next:{title:"Interaction Recorder",permalink:"/OrigamiStudio/docs/patches/Interaction/Interaction Recorder"}},d={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:4},{value:"Layer \u56fe\u5c42",id:"layer-\u56fe\u5c42",level:4},{value:"Start \u5f00\u59cb\u4f4d\u7f6e",id:"start-\u5f00\u59cb\u4f4d\u7f6e",level:4},{value:"Reset \u91cd\u7f6e",id:"reset-\u91cd\u7f6e",level:4},{value:"Settings \u8bbe\u7f6e\u53c2\u6570",id:"settings-\u8bbe\u7f6e\u53c2\u6570",level:4},{value:"Record",id:"record",level:4},{value:"Playback",id:"playback",level:4},{value:"Recording",id:"recording",level:4},{value:"Load",id:"load",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Status",id:"status",level:4},{value:"Position",id:"position",level:4},{value:"Velocity",id:"velocity",level:4},{value:"Translation",id:"translation",level:4},{value:"Recording",id:"recording-1",level:4}],p={toc:s};function v(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drag-scale"},"Drag Scale"),(0,i.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,i.kt)("h4",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,i.kt)("h4",{id:"layer-\u56fe\u5c42"},"Layer \u56fe\u5c42"),(0,i.kt)("h4",{id:"start-\u5f00\u59cb\u4f4d\u7f6e"},"Start \u5f00\u59cb\u4f4d\u7f6e"),(0,i.kt)("h4",{id:"reset-\u91cd\u7f6e"},"Reset \u91cd\u7f6e"),(0,i.kt)("h4",{id:"settings-\u8bbe\u7f6e\u53c2\u6570"},"Settings \u8bbe\u7f6e\u53c2\u6570"),(0,i.kt)("h4",{id:"record"},"Record"),(0,i.kt)("h4",{id:"playback"},"Playback"),(0,i.kt)("h4",{id:"recording"},"Recording"),(0,i.kt)("h4",{id:"load"},"Load"),(0,i.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,i.kt)("h4",{id:"status"},"Status"),(0,i.kt)("h4",{id:"position"},"Position"),(0,i.kt)("h4",{id:"velocity"},"Velocity"),(0,i.kt)("h4",{id:"translation"},"Translation"),(0,i.kt)("h4",{id:"recording-1"},"Recording"),(0,i.kt)("hr",null))}v.isMDXComponent=!0}}]);