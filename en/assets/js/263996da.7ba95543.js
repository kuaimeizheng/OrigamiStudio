"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[85295],{40729:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(85893),a=t(11151);const s={sidebar_position:5},r="Particle System \u7c92\u5b50\u7cfb\u7edf",l={id:"documentation/Layer/Particle System",title:"Particle System \u7c92\u5b50\u7cfb\u7edf",description:"A particle emitter. Configure the specific birthrate, velocity, angle and color change over their lifetime. Add an image to replace the standard circular particle.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Layer/Particle System.md",sourceDirName:"documentation/Layer",slug:"/documentation/Layer/Particle System",permalink:"/en/docs/documentation/Layer/Particle System",draft:!1,unlisted:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Layer/Particle System.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1732785681,formattedLastUpdatedAt:"Nov 28, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Oval \u692d\u5706\u5f62",permalink:"/en/docs/documentation/Layer/Oval"},next:{title:"Progress Ring \u8fdb\u5ea6\u5708",permalink:"/en/docs/documentation/Layer/Progress Ring"}},c={},d=[{value:"Enable \u542f\u7528",id:"enable-\u542f\u7528",level:3},{value:"Opacity \u4e0d\u900f\u660e\u5ea6",id:"opacity-\u4e0d\u900f\u660e\u5ea6",level:3},{value:"Position \u4f4d\u7f6e",id:"position-\u4f4d\u7f6e",level:3},{value:"Scale \u6bd4\u4f8b",id:"scale-\u6bd4\u4f8b",level:3},{value:"Color \u989c\u8272",id:"color-\u989c\u8272",level:3},{value:"Lifetime \u5bff\u547d",id:"lifetime-\u5bff\u547d",level:3},{value:"Birthrate \u51fa\u751f\u7387",id:"birthrate-\u51fa\u751f\u7387",level:3},{value:"Color Change \u989c\u8272\u53d8\u5316",id:"color-change-\u989c\u8272\u53d8\u5316",level:3},{value:"Velocity \u901f\u5ea6",id:"velocity-\u901f\u5ea6",level:3},{value:"Velocity Variance \u968f\u673a\u901f\u5ea6\u8303\u56f4",id:"velocity-variance-\u968f\u673a\u901f\u5ea6\u8303\u56f4",level:3},{value:"Angle \u89d2\u5ea6",id:"angle-\u89d2\u5ea6",level:3},{value:"Angle Range \u968f\u673a\u89d2\u5ea6\u8303\u56f4",id:"angle-range-\u968f\u673a\u89d2\u5ea6\u8303\u56f4",level:3},{value:"Acceleration \u52a0\u901f\u5ea6",id:"acceleration-\u52a0\u901f\u5ea6",level:3},{value:"Delta \u5927\u5c0f\u589e\u91cf",id:"delta-\u5927\u5c0f\u589e\u91cf",level:3},{value:"Image \u56fe\u50cf",id:"image-\u56fe\u50cf",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}];function o(e){const i={a:"a",h1:"h1",h3:"h3",hr:"hr",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"particle-system-\u7c92\u5b50\u7cfb\u7edf",children:"Particle System \u7c92\u5b50\u7cfb\u7edf"}),"\n",(0,n.jsx)(i.p,{children:"A particle emitter. Configure the specific birthrate, velocity, angle and color change over their lifetime. Add an image to replace the standard circular particle."}),"\n",(0,n.jsx)(i.p,{children:"\u7c92\u5b50\u53d1\u5c04\u5668\u3002\u8bbe\u7f6e\u5176\u751f\u547d\u5468\u671f\u5185\u7684\u7279\u5b9a\u51fa\u751f\u7387\u3001\u901f\u5ea6\u3001\u89d2\u5ea6\u548c\u989c\u8272\u53d8\u5316\u3002\u6dfb\u52a0\u56fe\u50cf\u4ee5\u66ff\u6362\u9ed8\u8ba4\u7684\u5706\u5f62\u7c92\u5b50\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Image",src:t(42951).Z+"",width:"1540",height:"686"})}),"\n",(0,n.jsx)(i.h3,{id:"enable-\u542f\u7528",children:"Enable \u542f\u7528"}),"\n",(0,n.jsx)(i.p,{children:"A boolean that is true when the layer is displayed."}),"\n",(0,n.jsx)(i.p,{children:"\u52fe\u9009\u542f\u7528\u56fe\u5c42\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"opacity-\u4e0d\u900f\u660e\u5ea6",children:"Opacity \u4e0d\u900f\u660e\u5ea6"}),"\n",(0,n.jsx)(i.p,{children:"The opacity of the layer."}),"\n",(0,n.jsx)(i.p,{children:"\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u5ea6\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"position-\u4f4d\u7f6e",children:"Position \u4f4d\u7f6e"}),"\n",(0,n.jsxs)(i.p,{children:["The position to display the layer. Use ",(0,n.jsx)(i.a,{href:"/en/docs/documentation/Utility/Point%203D",children:"Point 3D"})," to set Z position."]}),"\n",(0,n.jsx)(i.p,{children:"\u663e\u793a\u56fe\u5c42\u7684\u4f4d\u7f6e\u3002\u4f7f\u7528 Point 3D \u8bbe\u7f6e Z \u4f4d\u7f6e\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"scale-\u6bd4\u4f8b",children:"Scale \u6bd4\u4f8b"}),"\n",(0,n.jsx)(i.p,{children:"The scale of a particle."}),"\n",(0,n.jsx)(i.p,{children:"\u7c92\u5b50\u7684\u6bd4\u4f8b"}),"\n",(0,n.jsx)(i.h3,{id:"color-\u989c\u8272",children:"Color \u989c\u8272"}),"\n",(0,n.jsx)(i.p,{children:"The color of a particle when it is generated."}),"\n",(0,n.jsx)(i.p,{children:"\u7c92\u5b50\u751f\u6210\u540e\u7684\u989c\u8272\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"lifetime-\u5bff\u547d",children:"Lifetime \u5bff\u547d"}),"\n",(0,n.jsx)(i.p,{children:"The duration a particle lasts, in seconds."}),"\n",(0,n.jsx)(i.p,{children:"\u5355\u4e2a\u7c92\u5b50\u751f\u5b58\u7684\u65f6\u95f4\uff0c\u6b63\u6570\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u5bff\u547d\uff1a\u503c\u8d8a\u5927\u751f\u5b58\u65f6\u95f4\u8d8a\u957f"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-1.gif",src:t(42367).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.h3,{id:"birthrate-\u51fa\u751f\u7387",children:"Birthrate \u51fa\u751f\u7387"}),"\n",(0,n.jsx)(i.p,{children:"The number of particles generated."}),"\n",(0,n.jsx)(i.p,{children:"\u51fa\u751f\u7387\uff1a\u503c\u8d8a\u5927\u6570\u91cf\u8d8a\u591a"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-2.gif",src:t(90242).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.p,{children:"\u751f\u6210\u7684\u7c92\u5b50\u6570\u91cf\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"color-change-\u989c\u8272\u53d8\u5316",children:"Color Change \u989c\u8272\u53d8\u5316"}),"\n",(0,n.jsx)(i.p,{children:"The color of a particle when it disappears."}),"\n",(0,n.jsx)(i.p,{children:"\u7c92\u5b50\u6d88\u5931\u65f6\u7684\u989c\u8272\u3002\uff08\u793a\u4f8b\u56fe\u4e2d\u989c\u8272\u6d45\u7684\u90a3\u8fb9\uff09"}),"\n",(0,n.jsx)(i.h3,{id:"velocity-\u901f\u5ea6",children:"Velocity \u901f\u5ea6"}),"\n",(0,n.jsx)(i.p,{children:"The base speed of a particle as it flies out."}),"\n",(0,n.jsx)(i.p,{children:"\u7c92\u5b50\u51fa\u751f\u65f6\u7684\u901f\u5ea6\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u901f\u5ea6\uff1a\u503c\u8d8a\u5927\u901f\u5ea6\u8d8a\u5feb\uff0c\u5bf9\u89d2\u5ea6\u7684\u6267\u884c\u8d8a\u660e\u663e"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-3.gif",src:t(71766).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.h3,{id:"velocity-variance-\u968f\u673a\u901f\u5ea6\u8303\u56f4",children:"Velocity Variance \u968f\u673a\u901f\u5ea6\u8303\u56f4"}),"\n",(0,n.jsx)(i.p,{children:"A number that represents the range of randomized speeds of a particle."}),"\n",(0,n.jsx)(i.p,{children:"\u8868\u793a\u7c92\u5b50\u7684\u968f\u673a\u901f\u5ea6\u8303\u56f4\u7684\u503c\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"angle-\u89d2\u5ea6",children:"Angle \u89d2\u5ea6"}),"\n",(0,n.jsx)(i.p,{children:"The base angle of a particle as it flies out."}),"\n",(0,n.jsx)(i.p,{children:"\u7c92\u5b50\u51fa\u751f\u65f6\u7684\u65b9\u5411\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u89d2\u5ea6\uff1a\u5bf9\u5e94\u65cb\u8f6c\u5c5e\u6027\u7684Z\u8f74\u65b9\u5411\uff0c0\uff5e360\u5ea6\u4e3a\u4ece\u4e09\u70b9\u949f\u65b9\u5411\u5f00\u59cb\u987a\u65f6\u9488\u65cb\u8f6c\u4e00\u5468"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-4.gif",src:t(10959).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.h3,{id:"angle-range-\u968f\u673a\u89d2\u5ea6\u8303\u56f4",children:"Angle Range \u968f\u673a\u89d2\u5ea6\u8303\u56f4"}),"\n",(0,n.jsx)(i.p,{children:"A number that represents the range of randomized angles of a particle."}),"\n",(0,n.jsx)(i.p,{children:"\u8868\u793a\u7c92\u5b50\u7684\u968f\u673a\u5316\u89d2\u5ea6\u8303\u56f4\u7684\u6570\u5b57\u3002\uff08\u4ee5\u89d2\u5ea6\u4e2d\u8bbe\u7f6e\u7684\u503c\u4e3a\u4e2d\u8f74\uff0c\u5de6\u53f3\u4e24\u4fa7\u5bf9\u79f0\u5206\u5e03\uff09"}),"\n",(0,n.jsx)(i.p,{children:"\u968f\u673a\u89d2\u5ea6\u8303\u56f4\uff1a0\uff5e360\u4e4b\u95f4\u7684\u6570\uff0c\u6570\u5b57\u63a7\u5236\u8303\u56f4\uff0c\u4e0d\u533a\u5206\u6b63\u8d1f\u503c"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-5.gif",src:t(75577).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.h3,{id:"acceleration-\u52a0\u901f\u5ea6",children:"Acceleration \u52a0\u901f\u5ea6"}),"\n",(0,n.jsx)(i.p,{children:"A vector that represents the acceleration of particles in each axis."}),"\n",(0,n.jsx)(i.p,{children:"\u63a7\u5236\u7c92\u5b50\u6d88\u4ea1\u7684\u89d2\u5ea6\u548c\u901f\u5ea6\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u52a0\u901f\u5ea6\uff1aXYZ\u8f74\u7684\u6b63\u8d1f\u503c\u63a7\u5236\u65b9\u5411\uff0c\u6570\u5b57\u7684\u5927\u5c0f\u63a7\u5236\u901f\u5ea6\u5feb\u6162"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-6.gif",src:t(37471).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.p,{children:"\u8865\u5145\uff1a"}),"\n",(0,n.jsx)(i.p,{children:"\u201c\u901f\u5ea6+\u89d2\u5ea6\u201d\u63a7\u5236\u51fa\u751f\u7684\u901f\u5ea6\u548c\u89d2\u5ea6\uff0c\u201c\u52a0\u901f\u5ea6\u201d\u63a7\u5236\u6d88\u4ea1\u7684\u901f\u5ea6\u548c\u89d2\u5ea6\uff0c\u4e09\u4e2a\u5c5e\u6027\u76f8\u4e92\u5f71\u54cd\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-7.gif",src:t(18919).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.h3,{id:"delta-\u5927\u5c0f\u589e\u91cf",children:"Delta \u5927\u5c0f\u589e\u91cf"}),"\n",(0,n.jsx)(i.p,{children:"A number that represents the range of randomized sizes of a particle."}),"\n",(0,n.jsx)(i.p,{children:"\u8868\u793a\u7c92\u5b50\u968f\u673a\u5927\u5c0f\u8303\u56f4\u7684\u6570\u5b57\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u5927\u5c0f\u589e\u91cf\uff1a0\u4e3a\u4e0d\u653e\u5927\u4e0d\u7f29\u5c0f\uff0c\u8d1f\u6570\u4e3a\u7f29\u5c0f\uff0c\u6b63\u6570\u4e3a\u653e\u5927"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"particle-system-8.gif",src:t(35810).Z+"",width:"800",height:"400"})}),"\n",(0,n.jsx)(i.h3,{id:"image-\u56fe\u50cf",children:"Image \u56fe\u50cf"}),"\n",(0,n.jsx)(i.p,{children:"An image that replaces the default circle as the particle."}),"\n",(0,n.jsx)(i.p,{children:"\u5c06\u9ed8\u8ba4\u5706\u7c92\u5b50\u66ff\u6362\u4e3a\u56fe\u50cf\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u56fe\u7247\u7684 Color \u65e0\u6cd5\u6539\u53d8\uff0cColor Change \u53ea\u80fd\u8c03\u6574\u900f\u660e\u5ea6\uff1b\u53cc\u51fbImage \u7684\u503c\u6dfb\u52a0\u56fe\u7247\uff1b\u9009\u4e2d Image \u7684\u503c\u6309 Del \u5220\u9664\u56fe\u7247\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Image",src:t(28769).Z+"",width:"1200",height:"1067"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"related-patches-\u76f8\u5173\u6a21\u5757",children:"Related Patches \u76f8\u5173\u6a21\u5757"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/en/docs/documentation/Layer/Image%20Layer",children:"Image \u56fe\u7247"})})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},42367:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-1-be6a6a77cfcaa1a6c10e9f774dc6f656.gif"},90242:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-2-dd8eab5da90afbed51aa1f2177e75313.gif"},71766:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-3-f18098a49d729654365d413f1909884d.gif"},10959:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-4-32c650ecd8cefd375d95edf61d4c153b.gif"},75577:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-5-7d729e768a523f6742e527de5c3021c2.gif"},37471:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-6-fc63cf487dc941e7c63402d9f7e87659.gif"},18919:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-7-39987a6e55fb17f71d0071ccd203dcf6.gif"},35810:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-8-638ff28bd17d4d97043c8a70c6f861fd.gif"},28769:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-example-f1bd08dcda3f01279a29f39df183c453.jpg"},42951:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/particle-system-43efc1948f7f991159d401a7ada11c05.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>r});var n=t(67294);const a={},s=n.createContext(a);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);