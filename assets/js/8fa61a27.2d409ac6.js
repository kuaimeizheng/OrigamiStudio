"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[1924],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49069:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],p={sidebar_position:2},s="Spring Converter \u5f39\u6027\u8f6c\u6362\u5668",l={unversionedId:"documentation/Animation/Spring Converter",id:"documentation/Animation/Spring Converter",title:"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668",description:"Allows for conversion from Apple\u2019s Fluid Spring dynamics values (see SwiftUI) to either Tension / Friction (for use with\xa0[Spring Animation]) or Bounciness / Speed ([Pop Animation])",source:"@site/docs/documentation/Animation/Spring Converter.md",sourceDirName:"documentation/Animation",slug:"/documentation/Animation/Spring Converter",permalink:"/OrigamiStudio/docs/documentation/Animation/Spring Converter",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Animation/Spring Converter.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1659583634,formattedLastUpdatedAt:"2022\u5e748\u67084\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Spring Animation \u5f39\u6027\u52a8\u753b",permalink:"/OrigamiStudio/docs/documentation/Animation/Spring Animation"},next:{title:"Color \u989c\u8272",permalink:"/OrigamiStudio/docs/category/color-\u989c\u8272"}},u={},c=[{value:"Response \u56de\u590d",id:"response-\u56de\u590d",level:3},{value:"Damping Fraction \u963b\u5c3c\u5206\u6570",id:"damping-fraction-\u963b\u5c3c\u5206\u6570",level:3},{value:"Tension \u5f20\u529b",id:"tension-\u5f20\u529b",level:3},{value:"Friction \u6469\u64e6",id:"friction-\u6469\u64e6",level:3},{value:"Bounciness \u5f39\u6027",id:"bounciness-\u5f39\u6027",level:3},{value:"Speed \u901f\u5ea6",id:"speed-\u901f\u5ea6",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:c};function m(e){var n=e.components,p=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spring-converter-\u5f39\u6027\u8f6c\u6362\u5668"},"Spring Converter \u5f39\u6027\u8f6c\u6362\u5668"),(0,o.kt)("p",null,"Allows for conversion from Apple\u2019s Fluid Spring dynamics values (see SwiftUI) to either Tension / Friction (for use with\xa0","[Spring Animation]",") or Bounciness / Speed (","[Pop Animation]",")"),(0,o.kt)("p",null,"\u5141\u8bb8\u5c06 Apple \u7684\u6d41\u4f53\u5f39\u7c27\u52a8\u529b\u5b66\u503c\uff08\u8bf7\u53c2\u9605 SwiftUI\uff09\u8f6c\u6362\u4e3a\u5f20\u529b/\u6469\u64e6\u529b\uff08\u7528\u4e8e\u5f39\u6027\u52a8\u753b\uff09\u6216\u5f39\u529b/\u901f\u5ea6\uff08\u6d41\u884c\u52a8\u753b\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:t(2877).Z,width:"1492",height:"304"})),(0,o.kt)("h3",{id:"response-\u56de\u590d"},"Response \u56de\u590d"),(0,o.kt)("p",null,"Approximately how long for the spring animation to reach its destination."),(0,o.kt)("p",null,"\u5f39\u6027\u52a8\u753b\u9700\u8981\u591a\u957f\u65f6\u95f4\u624d\u80fd\u8fbe\u5230\u76ee\u6807\u3002"),(0,o.kt)("h3",{id:"damping-fraction-\u963b\u5c3c\u5206\u6570"},"Damping Fraction \u963b\u5c3c\u5206\u6570"),(0,o.kt)("p",null,"A value from 0 to 1 describing how much the spring should be damped around its end destination. 0 means don\u2019t apply any damping and oscillate endlessly, 1 means don\u2019t bounce at all around the destination."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ece 0 \u5230 1 \u7684\u503c\uff0c\u63cf\u8ff0\u5f39\u7c27\u5e94\u5728\u5176\u6700\u7ec8\u76ee\u6807\u9644\u8fd1\u963b\u5c3c\u591a\u5c11\u30020 \u8868\u793a\u4e0d\u65bd\u52a0\u4efb\u4f55\u963b\u5c3c\u5e76\u65e0\u4f11\u6b62\u5730\u632f\u8361\uff0c1 \u8868\u793a\u5728\u76ee\u6807\u5468\u56f4\u5b8c\u5168\u4e0d\u53cd\u5f39\u3002"),(0,o.kt)("h3",{id:"tension-\u5f20\u529b"},"Tension \u5f20\u529b"),(0,o.kt)("p",null,"A number that represents spring tension. (Spring Animation)"),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u5f20\u529b\u3002 \uff08\u5f39\u6027\u52a8\u753b\uff09"),(0,o.kt)("h3",{id:"friction-\u6469\u64e6"},"Friction \u6469\u64e6"),(0,o.kt)("p",null,"A number that represents spring tension. (Spring Animation)"),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u6469\u64e6\u529b\u3002 \uff08\u5f39\u6027\u52a8\u753b\uff09"),(0,o.kt)("h3",{id:"bounciness-\u5f39\u6027"},"Bounciness \u5f39\u6027"),(0,o.kt)("p",null,"A number that represents spring bouciness (Pop Animation)"),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u5f39\u529b\u3002\uff08\u6d41\u884c\u52a8\u753b\uff09"),(0,o.kt)("h3",{id:"speed-\u901f\u5ea6"},"Speed \u901f\u5ea6"),(0,o.kt)("p",null,"A number that represents spring speed (Pop Animation)"),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u4ee3\u8868\u5f39\u7c27\u7684\u901f\u5ea6\u3002\uff08\u6d41\u884c\u52a8\u753b\uff09"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Pop%20Animation"},"Pop Animation \u6d41\u884c\u52a8\u753b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Animation/Bouncy%20Converter"},"Bouncy Converter \u5f39\u6027\u8f6c\u6362\u5668")))}m.isMDXComponent=!0},2877:function(e,n,t){n.Z=t.p+"assets/images/spring-converter-88876412c8afacc28e93d94929dbfca2.png"}}]);