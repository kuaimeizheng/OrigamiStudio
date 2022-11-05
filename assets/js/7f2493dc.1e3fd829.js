"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[83525],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(n),u=r,c=d["".concat(p,".").concat(u)]||d[u]||k[u]||i;return n?a.createElement(c,l(l({ref:e},s),{},{components:n})):a.createElement(c,l({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74823:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"Spring Animation",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},l="Spring Animation",o={unversionedId:"motion/react-native/spring-animation",id:"motion/react-native/spring-animation",title:"Spring Animation",description:"\u53ef\u4ee5\u8bbe\u7f6e\u52a8\u753b\u5143\u7d20\u7684 \u8d28\u91cf Mass\u3001\u5f20\u529b Tension\u3001\u6469\u64e6\u529b Friction\u7b49\u53c2\u6570\uff0c\u6a21\u62df\u81ea\u7136\u3001\u7269\u7406\u7684\u6548\u679c\u3002",source:"@site/docs/motion/react-native/spring-animation.md",sourceDirName:"motion/react-native",slug:"/motion/react-native/spring-animation",permalink:"/OrigamiStudio/docs/motion/react-native/spring-animation",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/motion/react-native/spring-animation.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667670372,formattedLastUpdatedAt:"2022\u5e7411\u67085\u65e5",sidebarPosition:20,frontMatter:{title:"Spring Animation",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"motionSidebar",previous:{title:"Easing Animation",permalink:"/OrigamiStudio/docs/motion/react-native/easing-animation"},next:{title:"Spring Bounciness Animation",permalink:"/OrigamiStudio/docs/motion/react-native/spring-bounciness-animation"}},p={},m=[{value:"Spring Animation",id:"spring-animation-1",level:2},{value:"\u8bbe\u8ba1\u53c2\u6570",id:"\u8bbe\u8ba1\u53c2\u6570",level:3},{value:"\u53c2\u6570\u9884\u8bbe",id:"\u53c2\u6570\u9884\u8bbe",level:3},{value:"Spring Bounciness Animation",id:"spring-bounciness-animation",level:2},{value:"\u8bbe\u8ba1\u53c2\u6570",id:"\u8bbe\u8ba1\u53c2\u6570-1",level:3},{value:"Spring Damping Animation",id:"spring-damping-animation",level:2},{value:"\u8bbe\u8ba1\u53c2\u6570",id:"\u8bbe\u8ba1\u53c2\u6570-2",level:3}],s={toc:m};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spring-animation"},"Spring Animation"),(0,r.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u52a8\u753b\u5143\u7d20\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8d28\u91cf Mass"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u5f20\u529b Tension"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u6469\u64e6\u529b Friction"),"\u7b49\u53c2\u6570\uff0c\u6a21\u62df\u81ea\u7136\u3001\u7269\u7406\u7684\u6548\u679c\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"spring-animation-1"},"Spring Animation"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Spring Animation"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Number",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Preset",(0,r.kt)("span",null,"Default")),(0,r.kt)("li",null,"Tension",(0,r.kt)("span",null,"170")),(0,r.kt)("li",null,"Friction",(0,r.kt)("span",null,"26")),(0,r.kt)("li",null,"Mass",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Gesture Active ",(0,r.kt)("span",{className:"checkbox-off"})),(0,r.kt)("li",null,"Gesture Velocity",(0,r.kt)("span",null,"0"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,(0,r.kt)("span",null,"0"))))),(0,r.kt)("h3",{id:"\u8bbe\u8ba1\u53c2\u6570"},"\u8bbe\u8ba1\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u5f00\u59cb\u548c\u7ed3\u675f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Preset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9884\u8bbe\u7684\u52a8\u753b\u53c2\u6570\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Tension"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f39\u7c27\u6709\u591a\u5927\u7684\u5f20\u529b\uff0c\u9ed8\u8ba4\u4e3a 130")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Friction"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u5f39\u7c27\u65bd\u52a0\u591a\u5c11\u6469\u64e6\u529b\uff0c\u9ed8\u8ba4\u4e3a 18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mass"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a8\u753b\u5bf9\u8c61\u7684\u8d28\u91cf\uff0c\u9ed8\u8ba4\u4e3a 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gesture Active"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u624b\u52bf\u6fc0\u6d3b\uff0c\u9ed8\u8ba4\u4e3a\u5047")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gesture Velocity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u624b\u52bf\u901f\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 0")))),(0,r.kt)("h3",{id:"\u53c2\u6570\u9884\u8bbe"},"\u53c2\u6570\u9884\u8bbe"),(0,r.kt)("p",null,"\u5feb\u6377\u7684\u8c03\u7528\u548c\u8bbe\u7f6e\u52a8\u753b\u53c2\u6570\uff0c\u63d0\u5347\u8bbe\u8ba1\u6548\u7387\u548c\u6807\u51c6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9884\u8bbe",(0,r.kt)("div",{style:{width:"120px"}})),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49",(0,r.kt)("div",{style:{width:"120px"}})),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.default"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mass: 1, tension: 170, friction: 26 }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.gentle"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67d4\u548c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mass: 1, tension: 120, friction: 14 }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.wobbly"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6446\u52a8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mass: 1, tension: 180, friction: 12 }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.stiff"),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u786c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mass: 1, tension: 210, friction: 20 }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.slow"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u6162"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mass: 1, tension: 280, friction: 60 }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.molasses"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c98\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ mass: 1, tension: 280, friction: 120 }"))))),(0,r.kt)("h2",{id:"spring-bounciness-animation"},"Spring Bounciness Animation"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Spring Bounciness Animation"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Number",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Bounciness",(0,r.kt)("span",null,"5")),(0,r.kt)("li",null,"Speed",(0,r.kt)("span",null,"10"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Progress",(0,r.kt)("span",null,"0"))))),(0,r.kt)("h3",{id:"\u8bbe\u8ba1\u53c2\u6570-1"},"\u8bbe\u8ba1\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u5f00\u59cb\u548c\u7ed3\u675f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Bounciness"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f39\u529b\uff0c\u9ed8\u8ba4\u4e3a 5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Speed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u901f\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 10")))),(0,r.kt)("h2",{id:"spring-damping-animation"},"Spring Damping Animation"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Spring Damping Animation"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Number",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Duration",(0,r.kt)("span",null,"0.4s")),(0,r.kt)("li",null,"Damping",(0,r.kt)("span",null,"10")),(0,r.kt)("li",null,"Stiffness",(0,r.kt)("span",null,"100")),(0,r.kt)("li",null,"Mass",(0,r.kt)("span",null,"1")),(0,r.kt)("li",null,"Velocity",(0,r.kt)("span",null,"0"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Value",(0,r.kt)("span",null,"0")," ")))),(0,r.kt)("h3",{id:"\u8bbe\u8ba1\u53c2\u6570-2"},"\u8bbe\u8ba1\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u4e2a\u6570\u503c\uff0c\u8868\u793a\u52a8\u753b\u5f00\u59cb\u548c\u7ed3\u675f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a8\u753b\u7684\u6301\u7eed\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Damping"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u65bd\u52a0\u4e8e\u5f39\u7c27\u8fd0\u52a8\u7684\u963b\u5c3c\u529b\u3002\u8be5\u503c\u7528\u4e8e\u8ba1\u7b97\u963b\u5c3c\u6bd4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Stiffness"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f39\u7c27\u521a\u5ea6\u7cfb\u6570\u3002\u8f83\u9ad8\u7684\u503c\u5bf9\u5e94\u4e8e\u8f83\u786c\u7684\u5f39\u7c27\uff0c\u53ef\u4e3a\u79fb\u52a8\u7684\u7269\u4f53\u4ea7\u751f\u8f83\u5927\u7684\u529b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mass"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a8\u753b\u5bf9\u8c61\u7684\u8d28\u91cf\uff0c\u9ed8\u8ba4\u4e3a 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Velocity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u52a8\u753b\u7684\u901f\u5ea6")))))}k.isMDXComponent=!0}}]);