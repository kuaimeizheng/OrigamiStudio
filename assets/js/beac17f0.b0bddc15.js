"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[42313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:5},i="Momentum Scrolling \u52a8\u91cf\u6eda\u52a8",l={unversionedId:"documentation/Interaction/Momentum Scrolling",id:"documentation/Interaction/Momentum Scrolling",title:"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8",description:"For advanced use only \u2014 use the Scroll patch instead.",source:"@site/docs/documentation/Interaction/Momentum Scrolling.md",sourceDirName:"documentation/Interaction",slug:"/documentation/Interaction/Momentum Scrolling",permalink:"/OrigamiStudio/docs/documentation/Interaction/Momentum Scrolling",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Interaction/Momentum Scrolling.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667316201,formattedLastUpdatedAt:"2022\u5e7411\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Long Press \u957f\u6309",permalink:"/OrigamiStudio/docs/documentation/Interaction/Long Press"},next:{title:"Mouse \u9f20\u6807",permalink:"/OrigamiStudio/docs/documentation/Interaction/Mouse"}},c={},u=[{value:"Sample Value \u91c7\u6837\u503c",id:"sample-value-\u91c7\u6837\u503c",level:3},{value:"Value \u503c",id:"value-\u503c",level:3},{value:"Scrolling Friction \u6eda\u52a8\u6469\u64e6\u529b",id:"scrolling-friction-\u6eda\u52a8\u6469\u64e6\u529b",level:3},{value:"Rubber Band Tension \u6a61\u76ae\u7b4b\u5f20\u529b",id:"rubber-band-tension-\u6a61\u76ae\u7b4b\u5f20\u529b",level:3},{value:"Rubber Band Friction \u6a61\u76ae\u7b4b\u6469\u64e6\u529b",id:"rubber-band-friction-\u6a61\u76ae\u7b4b\u6469\u64e6\u529b",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],s={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momentum-scrolling-\u52a8\u91cf\u6eda\u52a8"},"Momentum Scrolling \u52a8\u91cf\u6eda\u52a8"),(0,o.kt)("p",null,"For advanced use only \u2014 use the Scroll patch instead."),(0,o.kt)("p",null,"\u4ec5\u4f9b\u9ad8\u7ea7\u7528\u6237\u4f7f\u7528-\u53ef\u4ee5\u4f7f\u7528Scroll\u6a21\u5757\u4ee3\u66ff\u3002"),(0,o.kt)("p",null,"Simulate the momentum physics that powers the Scroll patch. Use in a feedback loop that integrates the velocity of an interaction."),(0,o.kt)("p",null,"\u6a21\u62dfScroll\u6a21\u5757\u7684\u52a8\u91cf\u7269\u7406\u7684\u529f\u80fd\u3002\u5728\u96c6\u6210\u4ea4\u4e92\u901f\u5ea6\u7684\u53cd\u9988\u5faa\u73af\u4e2d\u4f7f\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image",src:n(52688).Z,width:"1502",height:"328"})),(0,o.kt)("h3",{id:"sample-value-\u91c7\u6837\u503c"},"Sample Value \u91c7\u6837\u503c"),(0,o.kt)("p",null,"A boolean that is true when the patch is sampling the input value. Usually connected to an Interaction patch\u2019s down output."),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5f53\u6a21\u5757\u5bf9\u8f93\u5165\u503c\u8fdb\u884c\u91c7\u6837\u65f6\u4e3a true\u3002\u901a\u5e38\u8fde\u63a5\u5230\u4ea4\u4e92\u6a21\u5757\u7684 down \u8f93\u51fa\u7aef\u53e3\u3002"),(0,o.kt)("h3",{id:"value-\u503c"},"Value \u503c"),(0,o.kt)("p",null,"A number that represents the value to add momentum physics to. Usually connected to an Interaction patch\u2019s position X or Y."),(0,o.kt)("p",null,"\u4e00\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u8981\u5411\u5176\u6dfb\u52a0\u52a8\u91cf\u7269\u7406\u7684\u503c\u3002\u901a\u5e38\u8fde\u63a5\u5230\u4ea4\u4e92\u6a21\u5757\u7684\u4f4d\u7f6e X \u6216 Y\u3002"),(0,o.kt)("h3",{id:"scrolling-friction-\u6eda\u52a8\u6469\u64e6\u529b"},"Scrolling Friction \u6eda\u52a8\u6469\u64e6\u529b"),(0,o.kt)("p",null,"A number between 1-100 that represents the friction that slows down the value when its velocity increases sharply and sampling stops (ex: a scroll flick)."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ecb\u4e8e 1-100 \u4e4b\u95f4\u7684\u6570\u5b57\uff0c\u8868\u793a\u5f53\u5176\u901f\u5ea6\u6025\u5267\u589e\u52a0\u4e14\u91c7\u6837\u505c\u6b62\uff08\u4f8b\u5982\uff1a\u6eda\u52a8\u8f7b\u79fb\uff09\u65f6\u51cf\u6162\u8be5\u503c\u7684\u6469\u64e6\u529b\u3002"),(0,o.kt)("h3",{id:"rubber-band-tension-\u6a61\u76ae\u7b4b\u5f20\u529b"},"Rubber Band Tension \u6a61\u76ae\u7b4b\u5f20\u529b"),(0,o.kt)("p",null,"A number between 10-1000 that represents the speed the value returns to the boundaries after sampling stops if it exceeds the boundaries."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ecb\u4e8e 10-1000 \u4e4b\u95f4\u7684\u6570\u5b57\uff0c\u8868\u793a\u5982\u679c\u503c\u8d85\u8fc7\u8fb9\u754c\uff0c\u5219\u91c7\u6837\u505c\u6b62\u540e\u8fd4\u56de\u8fb9\u754c\u7684\u901f\u5ea6\u3002"),(0,o.kt)("h3",{id:"rubber-band-friction-\u6a61\u76ae\u7b4b\u6469\u64e6\u529b"},"Rubber Band Friction \u6a61\u76ae\u7b4b\u6469\u64e6\u529b"),(0,o.kt)("p",null,"A number between 10-1000 that represents the friction that slows down the value returning to the boundaries after sampling stops if it exceeds the boundaries."),(0,o.kt)("p",null,"\u4e00\u4e2a\u4ecb\u4e8e 10-1000 \u4e4b\u95f4\u7684\u6570\u5b57\uff0c\u8868\u793a\u5728\u91c7\u6837\u540e\u51cf\u6162\u8fd4\u56de\u8fb9\u754c\u7684\u503c\u7684\u6469\u64e6\uff0c\u5982\u679c\u8d85\u51fa\u8fb9\u754c\uff0c\u5219\u505c\u6b62\u3002"),(0,o.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,o.kt)("p",null,"The value with momentum added. Feed back into the Value input and add velocity with a + patch."),(0,o.kt)("p",null,"\u589e\u52a0\u52a8\u91cf\u7684\u503c\u3002\u53cd\u9988\u5230\u503c\u8f93\u5165\u4e2d\uff0c\u5e76\u4f7f\u7528 + \u6a21\u5757\u6dfb\u52a0\u901f\u5ea6\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Scroll"},"Scroll \u6eda\u52a8")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Drag"},"Drag \u62d6\u62fd")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/Pop%20Switch"},"Pop Switch \u6d41\u884c\u5f00\u5173")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Interaction/"},"Interaction \u4ea4\u4e92")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Touches"},"Touches \u89e6\u6478")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Device/Trackpad"},"Trackpad \u89e6\u63a7\u677f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/+"},"+ \u52a0")))}p.isMDXComponent=!0},52688:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/momentum-scrolling-62fccbfb4ffc6363026f08a77aa23404.png"}}]);