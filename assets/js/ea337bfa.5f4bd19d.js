"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2628],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=i.createContext({}),s=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||n;return a?i.createElement(f,r(r({ref:t},p),{},{components:a})):i.createElement(f,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var s=2;s<n;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38203:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=a(87462),l=a(63366),n=(a(67294),a(3905)),r=["components"],c={sidebar_position:2},o="Particle System \u7c92\u5b50\u7cfb\u7edf",s={unversionedId:"documentation/Layer/Particle System",id:"documentation/Layer/Particle System",title:"Particle System \u7c92\u5b50\u7cfb\u7edf",description:"A particle emitter. Configure the specific birthrate, velocity, angle and color change over their lifetime. Add an image to replace the standard circular particle.",source:"@site/docs/documentation/Layer/Particle System.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Particle System",permalink:"/OrigamiStudio/docs/documentation/Layer/Particle System",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Particle System.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1659583634,formattedLastUpdatedAt:"2022\u5e748\u67084\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Oval \u692d\u5706\u5f62",permalink:"/OrigamiStudio/docs/documentation/Layer/Oval"},next:{title:"Progress Ring \u8fdb\u5ea6\u5708",permalink:"/OrigamiStudio/docs/documentation/Layer/Progress Ring"}},p={},u=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Color \u989c\u8272",id:"color-\u989c\u8272",level:3},{value:"Lifetime \u5bff\u547d",id:"lifetime-\u5bff\u547d",level:3},{value:"Birthrate \u51fa\u751f\u7387",id:"birthrate-\u51fa\u751f\u7387",level:3},{value:"Color Change \u989c\u8272\u53d8\u5316",id:"color-change-\u989c\u8272\u53d8\u5316",level:3},{value:"Velocity \u901f\u5ea6",id:"velocity-\u901f\u5ea6",level:3},{value:"Velocity Variance \u968f\u673a\u901f\u5ea6\u8303\u56f4",id:"velocity-variance-\u968f\u673a\u901f\u5ea6\u8303\u56f4",level:3},{value:"Angle \u89d2\u5ea6",id:"angle-\u89d2\u5ea6",level:3},{value:"Angle Range \u968f\u673a\u89d2\u5ea6\u8303\u56f4",id:"angle-range-\u968f\u673a\u89d2\u5ea6\u8303\u56f4",level:3},{value:"Acceleration \u52a0\u901f\u5ea6",id:"acceleration-\u52a0\u901f\u5ea6",level:3},{value:"Delta \u5927\u5c0f\u589e\u91cf",id:"delta-\u5927\u5c0f\u589e\u91cf",level:3},{value:"Image \u56fe\u50cf",id:"image-\u56fe\u50cf",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],d={toc:u};function m(e){var t=e.components,c=(0,l.Z)(e,r);return(0,n.kt)("wrapper",(0,i.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"particle-system-\u7c92\u5b50\u7cfb\u7edf"},"Particle System \u7c92\u5b50\u7cfb\u7edf"),(0,n.kt)("p",null,"A particle emitter. Configure the specific birthrate, velocity, angle and color change over their lifetime. Add an image to replace the standard circular particle."),(0,n.kt)("p",null,"\u7c92\u5b50\u53d1\u5c04\u5668\u3002\u8bbe\u7f6e\u5176\u751f\u547d\u5468\u671f\u5185\u7684\u7279\u5b9a\u51fa\u751f\u7387\u3001\u901f\u5ea6\u3001\u89d2\u5ea6\u548c\u989c\u8272\u53d8\u5316\u3002\u6dfb\u52a0\u56fe\u50cf\u4ee5\u66ff\u6362\u9ed8\u8ba4\u7684\u5706\u5f62\u7c92\u5b50\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:a(42951).Z,width:"1540",height:"686"})),(0,n.kt)("h3",{id:"enable-\u542f\u7528"},"Enable \u542f\u7528"),(0,n.kt)("p",null,"A boolean that is true when the layer is displayed."),(0,n.kt)("p",null,"\u52fe\u9009\u542f\u7528\u56fe\u5c42\u3002"),(0,n.kt)("h3",{id:"opacity-\u4e0d\u900f\u660e\u5ea6"},"Opacity \u4e0d\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"The opacity of the layer."),(0,n.kt)("p",null,"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"),(0,n.kt)("h3",{id:"position-\u4f4d\u7f6e"},"Position \u4f4d\u7f6e"),(0,n.kt)("p",null,"The position to display the layer. Use ",(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D")," to set Z position."),(0,n.kt)("p",null,"\u663e\u793a\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"),(0,n.kt)("h3",{id:"scale-\u6bd4\u4f8b"},"Scale \u6bd4\u4f8b"),(0,n.kt)("p",null,"The scale of a particle."),(0,n.kt)("p",null,"\u7c92\u5b50\u7684\u6bd4\u4f8b"),(0,n.kt)("h3",{id:"color-\u989c\u8272"},"Color \u989c\u8272"),(0,n.kt)("p",null,"The color of a particle when it is generated."),(0,n.kt)("p",null,"\u7c92\u5b50\u751f\u6210\u540e\u7684\u989c\u8272\u3002"),(0,n.kt)("h3",{id:"lifetime-\u5bff\u547d"},"Lifetime \u5bff\u547d"),(0,n.kt)("p",null,"The duration a particle lasts, in seconds."),(0,n.kt)("p",null,"\u5355\u4e2a\u7c92\u5b50\u751f\u5b58\u7684\u65f6\u95f4\uff0c\u6b63\u6570\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"),(0,n.kt)("p",null,"\u5bff\u547d\uff1a\u503c\u8d8a\u5927\u751f\u5b58\u65f6\u95f4\u8d8a\u957f"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-1.gif",src:a(42367).Z,width:"800",height:"400"})),(0,n.kt)("h3",{id:"birthrate-\u51fa\u751f\u7387"},"Birthrate \u51fa\u751f\u7387"),(0,n.kt)("p",null,"The number of particles generated."),(0,n.kt)("p",null,"\u51fa\u751f\u7387\uff1a\u503c\u8d8a\u5927\u6570\u91cf\u8d8a\u591a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-2.gif",src:a(90242).Z,width:"800",height:"400"})),(0,n.kt)("p",null,"\u751f\u6210\u7684\u7c92\u5b50\u6570\u91cf\u3002"),(0,n.kt)("h3",{id:"color-change-\u989c\u8272\u53d8\u5316"},"Color Change \u989c\u8272\u53d8\u5316"),(0,n.kt)("p",null,"The color of a particle when it disappears."),(0,n.kt)("p",null,"\u7c92\u5b50\u6d88\u5931\u65f6\u7684\u989c\u8272\u3002\uff08\u793a\u4f8b\u56fe\u4e2d\u989c\u8272\u6d45\u7684\u90a3\u8fb9\uff09"),(0,n.kt)("h3",{id:"velocity-\u901f\u5ea6"},"Velocity \u901f\u5ea6"),(0,n.kt)("p",null,"The base speed of a particle as it flies out."),(0,n.kt)("p",null,"\u7c92\u5b50\u51fa\u751f\u65f6\u7684\u901f\u5ea6\u3002"),(0,n.kt)("p",null,"\u901f\u5ea6\uff1a\u503c\u8d8a\u5927\u901f\u5ea6\u8d8a\u5feb\uff0c\u5bf9\u89d2\u5ea6\u7684\u6267\u884c\u8d8a\u660e\u663e"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-3.gif",src:a(71766).Z,width:"800",height:"400"})),(0,n.kt)("h3",{id:"velocity-variance-\u968f\u673a\u901f\u5ea6\u8303\u56f4"},"Velocity Variance \u968f\u673a\u901f\u5ea6\u8303\u56f4"),(0,n.kt)("p",null,"A number that represents the range of randomized speeds of a particle."),(0,n.kt)("p",null,"\u8868\u793a\u7c92\u5b50\u7684\u968f\u673a\u901f\u5ea6\u8303\u56f4\u7684\u503c\u3002"),(0,n.kt)("h3",{id:"angle-\u89d2\u5ea6"},"Angle \u89d2\u5ea6"),(0,n.kt)("p",null,"The base angle of a particle as it flies out."),(0,n.kt)("p",null,"\u7c92\u5b50\u51fa\u751f\u65f6\u7684\u65b9\u5411\u3002"),(0,n.kt)("p",null,"\u89d2\u5ea6\uff1a\u5bf9\u5e94\u65cb\u8f6c\u5c5e\u6027\u7684Z\u8f74\u65b9\u5411\uff0c0\uff5e360\u5ea6\u4e3a\u4ece\u4e09\u70b9\u949f\u65b9\u5411\u5f00\u59cb\u987a\u65f6\u9488\u65cb\u8f6c\u4e00\u5468"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-4.gif",src:a(10959).Z,width:"800",height:"400"})),(0,n.kt)("h3",{id:"angle-range-\u968f\u673a\u89d2\u5ea6\u8303\u56f4"},"Angle Range \u968f\u673a\u89d2\u5ea6\u8303\u56f4"),(0,n.kt)("p",null,"A number that represents the range of randomized angles of a particle."),(0,n.kt)("p",null,"\u8868\u793a\u7c92\u5b50\u7684\u968f\u673a\u5316\u89d2\u5ea6\u8303\u56f4\u7684\u6570\u5b57\u3002\uff08\u4ee5\u89d2\u5ea6\u4e2d\u8bbe\u7f6e\u7684\u503c\u4e3a\u4e2d\u8f74\uff0c\u5de6\u53f3\u4e24\u4fa7\u5bf9\u79f0\u5206\u5e03\uff09"),(0,n.kt)("p",null,"\u968f\u673a\u89d2\u5ea6\u8303\u56f4\uff1a0\uff5e360\u4e4b\u95f4\u7684\u6570\uff0c\u6570\u5b57\u63a7\u5236\u8303\u56f4\uff0c\u4e0d\u533a\u5206\u6b63\u8d1f\u503c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-5.gif",src:a(75577).Z,width:"800",height:"400"})),(0,n.kt)("h3",{id:"acceleration-\u52a0\u901f\u5ea6"},"Acceleration \u52a0\u901f\u5ea6"),(0,n.kt)("p",null,"A vector that represents the acceleration of particles in each axis."),(0,n.kt)("p",null,"\u63a7\u5236\u7c92\u5b50\u6d88\u4ea1\u7684\u89d2\u5ea6\u548c\u901f\u5ea6\u3002"),(0,n.kt)("p",null,"\u52a0\u901f\u5ea6\uff1aXYZ\u8f74\u7684\u6b63\u8d1f\u503c\u63a7\u5236\u65b9\u5411\uff0c\u6570\u5b57\u7684\u5927\u5c0f\u63a7\u5236\u901f\u5ea6\u5feb\u6162"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-6.gif",src:a(37471).Z,width:"800",height:"400"})),(0,n.kt)("p",null,"\u8865\u5145\uff1a"),(0,n.kt)("p",null,"\u201c\u901f\u5ea6+\u89d2\u5ea6\u201d\u63a7\u5236\u51fa\u751f\u7684\u901f\u5ea6\u548c\u89d2\u5ea6\uff0c\u201c\u52a0\u901f\u5ea6\u201d\u63a7\u5236\u6d88\u4ea1\u7684\u901f\u5ea6\u548c\u89d2\u5ea6\uff0c\u4e09\u4e2a\u5c5e\u6027\u76f8\u4e92\u5f71\u54cd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-7.gif",src:a(18919).Z,width:"800",height:"400"})),(0,n.kt)("h3",{id:"delta-\u5927\u5c0f\u589e\u91cf"},"Delta \u5927\u5c0f\u589e\u91cf"),(0,n.kt)("p",null,"A number that represents the range of randomized sizes of a particle."),(0,n.kt)("p",null,"\u8868\u793a\u7c92\u5b50\u968f\u673a\u5927\u5c0f\u8303\u56f4\u7684\u6570\u5b57\u3002"),(0,n.kt)("p",null,"\u5927\u5c0f\u589e\u91cf\uff1a0\u4e3a\u4e0d\u653e\u5927\u4e0d\u7f29\u5c0f\uff0c\u8d1f\u6570\u4e3a\u7f29\u5c0f\uff0c\u6b63\u6570\u4e3a\u653e\u5927"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"particle-system-8.gif",src:a(35810).Z,width:"800",height:"400"})),(0,n.kt)("h3",{id:"image-\u56fe\u50cf"},"Image \u56fe\u50cf"),(0,n.kt)("p",null,"An image that replaces the default circle as the particle."),(0,n.kt)("p",null,"\u5c06\u9ed8\u8ba4\u5706\u7c92\u5b50\u66ff\u6362\u4e3a\u56fe\u50cf\u3002"),(0,n.kt)("p",null,"\u56fe\u7247\u7684 Color \u65e0\u6cd5\u6539\u53d8\uff0cColor Change \u53ea\u80fd\u8c03\u6574\u900f\u660e\u5ea6\uff1b\u53cc\u51fbImage \u7684\u503c\u6dfb\u52a0\u56fe\u7247\uff1b\u9009\u4e2d Image \u7684\u503c\u6309 Del \u5220\u9664\u56fe\u7247\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image",src:a(28769).Z,width:"1200",height:"1067"})),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Image%20Layer"},"Image \u56fe\u7247")))}m.isMDXComponent=!0},42367:function(e,t,a){t.Z=a.p+"assets/images/particle-system-1-be6a6a77cfcaa1a6c10e9f774dc6f656.gif"},90242:function(e,t,a){t.Z=a.p+"assets/images/particle-system-2-dd8eab5da90afbed51aa1f2177e75313.gif"},71766:function(e,t,a){t.Z=a.p+"assets/images/particle-system-3-f18098a49d729654365d413f1909884d.gif"},10959:function(e,t,a){t.Z=a.p+"assets/images/particle-system-4-32c650ecd8cefd375d95edf61d4c153b.gif"},75577:function(e,t,a){t.Z=a.p+"assets/images/particle-system-5-7d729e768a523f6742e527de5c3021c2.gif"},37471:function(e,t,a){t.Z=a.p+"assets/images/particle-system-6-fc63cf487dc941e7c63402d9f7e87659.gif"},18919:function(e,t,a){t.Z=a.p+"assets/images/particle-system-7-39987a6e55fb17f71d0071ccd203dcf6.gif"},35810:function(e,t,a){t.Z=a.p+"assets/images/particle-system-8-638ff28bd17d4d97043c8a70c6f861fd.gif"},28769:function(e,t,a){t.Z=a.p+"assets/images/particle-system-example-f1bd08dcda3f01279a29f39df183c453.jpg"},42951:function(e,t,a){t.Z=a.p+"assets/images/particle-system-43efc1948f7f991159d401a7ada11c05.png"}}]);