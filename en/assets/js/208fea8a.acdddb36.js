"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[80231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?i.createElement(v,a(a({ref:n},u),{},{components:t})):i.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const o={title:"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},a="Spring Converter \u5f39\u6027\u8f6c\u6362\u5668",l={unversionedId:"documentation/Animation/Spring Converter",id:"documentation/Animation/Spring Converter",title:"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668",description:"Allows for conversion from Apple\u2019s Fluid Spring dynamics values (see SwiftUI) to either Tension / Friction (for use with\xa0[Spring Animation]) or Bounciness / Speed ([Pop Animation])",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Animation/Spring Converter.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Spring Converter",permalink:"/OrigamiStudio/en/docs/documentation/Animation/Spring Converter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Spring Converter.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667733554,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:5,frontMatter:{title:"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Spring Animation \u5f39\u6027\u52a8\u753b",permalink:"/OrigamiStudio/en/docs/documentation/Animation/Spring Animation"},next:{title:"Color \u989c\u8272",permalink:"/OrigamiStudio/en/docs/category/color-\u989c\u8272"}},p={},s=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Response \u56de\u590d",id:"response-\u56de\u590d",level:4},{value:"Damping Fraction \u963b\u5c3c\u5206\u6570",id:"damping-fraction-\u963b\u5c3c\u5206\u6570",level:4},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Tension \u5f20\u529b",id:"tension-\u5f20\u529b",level:4},{value:"Friction \u6469\u64e6",id:"friction-\u6469\u64e6",level:4},{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:4},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:4},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3},{value:"\u76f8\u5173\u53c2\u8003",id:"\u76f8\u5173\u53c2\u8003",level:3}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spring-converter-\u5f39\u6027\u8f6c\u6362\u5668"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668"),(0,r.kt)("p",null,"Allows for conversion from Apple\u2019s Fluid Spring dynamics values (see SwiftUI) to either Tension / Friction (for use with\xa0","[Spring Animation]",") or Bounciness / Speed (","[Pop Animation]",")"),(0,r.kt)("p",null,"\u5141\u8bb8\u5c06 Apple \u7684\u6d41\u4f53\u5f39\u7c27\u52a8\u529b\u5b66\u503c\uff08\u8bf7\u53c2\u9605 SwiftUI\uff09\u8f6c\u6362\u4e3a\u5f20\u529b/\u6469\u64e6\u529b\uff08\u7528\u4e8e\u5f39\u6027\u52a8\u753b\uff09\u6216\u5f39\u529b/\u901f\u5ea6\uff08\u6d41\u884c\u52a8\u753b\uff09"),(0,r.kt)("div",{className:"patch-container"},(0,r.kt)("div",{className:"patch processor"},(0,r.kt)("h3",null,"Spring Converter"),(0,r.kt)("ul",{className:"inputs"},(0,r.kt)("li",null,"Response",(0,r.kt)("span",null,"0.55")),(0,r.kt)("li",null,"Damping Fraction",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Mass",(0,r.kt)("span",null,"1"))),(0,r.kt)("ul",{className:"outputs"},(0,r.kt)("li",null,"Tension",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Friction",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Bouciness",(0,r.kt)("span",null,"0")),(0,r.kt)("li",null,"Speed",(0,r.kt)("span",null,"0"))))),(0,r.kt)("div",{className:"port-descriptions"},(0,r.kt)("div",{className:"inputs"},(0,r.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,r.kt)("h4",{id:"response-\u56de\u590d"},"Response \u56de\u590d"),(0,r.kt)("p",null,"Approximately how long for the spring animation to reach its destination."),(0,r.kt)("p",null,"\u5f39\u6027\u52a8\u753b\u9700\u8981\u591a\u957f\u65f6\u95f4\u624d\u80fd\u8fbe\u5230\u76ee\u6807\u3002"),(0,r.kt)("h4",{id:"damping-fraction-\u963b\u5c3c\u5206\u6570"},"Damping Fraction \u963b\u5c3c\u5206\u6570"),(0,r.kt)("p",null,"A value from 0 to 1 describing how much the spring should be damped around its end destination. 0 means don\u2019t apply any damping and oscillate endlessly, 1 means don\u2019t bounce at all around the destination."),(0,r.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u503c\uff0c\u63cf\u8ff0\u5f39\u7c27\u5e94\u5728\u5176\u6700\u7ec8\u76ee\u6807\u9644\u8fd1\u963b\u5c3c\u591a\u5c11\u3002"),(0,r.kt)("p",null,"0 \u8868\u793a\u4e0d\u65bd\u52a0\u4efb\u4f55\u963b\u5c3c\u5e76\u65e0\u4f11\u6b62\u5730\u632f\u8361\uff0c1 \u8868\u793a\u5728\u76ee\u6807\u5468\u56f4\u5b8c\u5168\u4e0d\u53cd\u5f39\u3002")),(0,r.kt)("div",{className:"outputs"},(0,r.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,r.kt)("h4",{id:"tension-\u5f20\u529b"},"Tension \u5f20\u529b"),(0,r.kt)("p",null,"A number that represents spring tension. (Spring Animation)"),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u5f20\u529b\u3002 \uff08\u5f39\u6027\u52a8\u753b\uff09"),(0,r.kt)("h4",{id:"friction-\u6469\u64e6"},"Friction \u6469\u64e6"),(0,r.kt)("p",null,"A number that represents spring tension. (Spring Animation)"),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u6469\u64e6\u529b\u3002 \uff08\u5f39\u6027\u52a8\u753b\uff09"),(0,r.kt)("h4",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,r.kt)("p",null,"A number that represents spring bouciness (Pop Animation)"),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u5f39\u529b\u3002\uff08\u6d41\u884c\u52a8\u753b\uff09"),(0,r.kt)("h4",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,r.kt)("p",null,"A number that represents spring speed (Pop Animation)"),(0,r.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u901f\u5ea6\u3002\uff08\u6d41\u884c\u52a8\u753b\uff09"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Animation/Bouncy%20Converter"},"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668")),(0,r.kt)("h3",{id:"\u76f8\u5173\u53c2\u8003"},"\u76f8\u5173\u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/animation"},"https://developer.apple.com/documentation/swiftui/animation")))}c.isMDXComponent=!0}}]);