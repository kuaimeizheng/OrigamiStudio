"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[938],{3905:function(A,M,w){w.d(M,{Zo:function(){return n},kt:function(){return h}});var D=w(67294);function G(A,M,w){return M in A?Object.defineProperty(A,M,{value:w,enumerable:!0,configurable:!0,writable:!0}):A[M]=w,A}function Y(A,M){var w=Object.keys(A);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(A);M&&(D=D.filter((function(M){return Object.getOwnPropertyDescriptor(A,M).enumerable}))),w.push.apply(w,D)}return w}function t(A){for(var M=1;M<arguments.length;M++){var w=null!=arguments[M]?arguments[M]:{};M%2?Y(Object(w),!0).forEach((function(M){G(A,M,w[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(w)):Y(Object(w)).forEach((function(M){Object.defineProperty(A,M,Object.getOwnPropertyDescriptor(w,M))}))}return A}function e(A,M){if(null==A)return{};var w,D,G=function(A,M){if(null==A)return{};var w,D,G={},Y=Object.keys(A);for(D=0;D<Y.length;D++)w=Y[D],M.indexOf(w)>=0||(G[w]=A[w]);return G}(A,M);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(A);for(D=0;D<Y.length;D++)w=Y[D],M.indexOf(w)>=0||Object.prototype.propertyIsEnumerable.call(A,w)&&(G[w]=A[w])}return G}var B=D.createContext({}),g=function(A){var M=D.useContext(B),w=M;return A&&(w="function"==typeof A?A(M):t(t({},M),A)),w},n=function(A){var M=g(A.components);return D.createElement(B.Provider,{value:M},A.children)},o={inlineCode:"code",wrapper:function(A){var M=A.children;return D.createElement(D.Fragment,{},M)}},r=D.forwardRef((function(A,M){var w=A.components,G=A.mdxType,Y=A.originalType,B=A.parentName,n=e(A,["components","mdxType","originalType","parentName"]),r=g(w),h=G,i=r["".concat(B,".").concat(h)]||r[h]||o[h]||Y;return w?D.createElement(i,t(t({ref:M},n),{},{components:w})):D.createElement(i,t({ref:M},n))}));function h(A,M){var w=arguments,G=M&&M.mdxType;if("string"==typeof A||G){var Y=w.length,t=new Array(Y);t[0]=r;var e={};for(var B in M)hasOwnProperty.call(M,B)&&(e[B]=M[B]);e.originalType=A,e.mdxType="string"==typeof A?A:G,t[1]=e;for(var g=2;g<Y;g++)t[g]=w[g];return D.createElement.apply(null,t)}return D.createElement.apply(null,w)}r.displayName="MDXCreateElement"},38173:function(A,M,w){w.r(M),w.d(M,{assets:function(){return n},contentTitle:function(){return B},default:function(){return h},frontMatter:function(){return e},metadata:function(){return g},toc:function(){return o}});var D=w(87462),G=w(63366),Y=(w(67294),w(3905)),t=["components"],e={sidebar_position:2},B="Comment \u6ce8\u91ca",g={unversionedId:"documention/Utility/Comment",id:"documention/Utility/Comment",title:"Comment \u6ce8\u91ca",description:"Add comments and notes to the patch editor around patches to organize and clarify.",source:"@site/docs/documention/Utility/Comment.md",sourceDirName:"documention/Utility",slug:"/documention/Utility/Comment",permalink:"/OrigamiStudio/docs/documention/Utility/Comment",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documention/Utility/Comment.md",tags:[],version:"current",lastUpdatedBy:"kuaimeizheng",lastUpdatedAt:1657382430,formattedLastUpdatedAt:"2022\u5e747\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentionSidebar",previous:{title:"Clip \u88c1\u526a",permalink:"/OrigamiStudio/docs/documention/Utility/Clip"},next:{title:"Convert Position \u8f6c\u6362\u70b9",permalink:"/OrigamiStudio/docs/documention/Utility/Convert Position"}},n={},o=[],r={toc:o};function h(A){var M=A.components,e=(0,G.Z)(A,t);return(0,Y.kt)("wrapper",(0,D.Z)({},r,e,{components:M,mdxType:"MDXLayout"}),(0,Y.kt)("h1",{id:"comment-\u6ce8\u91ca"},"Comment \u6ce8\u91ca"),(0,Y.kt)("p",null,"Add comments and notes to the patch editor around patches to organize and clarify."),(0,Y.kt)("p",null,"Select any number of patches and press Patch > Comment Around Patches ctrl command c to add a comment sized to surround the patches."),(0,Y.kt)("p",null,"\u5728\u6a21\u5757\u5468\u56f4\u6dfb\u52a0\u6ce8\u91ca\uff0c\u53ef\u4ee5\u6574\u7406\u6a21\u5757\uff0c\u4ee5\u53ca\u589e\u52a0\u6a21\u5757\u7684\u53ef\u8bfb\u6027\u3002"),(0,Y.kt)("p",null,"\u9009\u62e9\u4efb\u610f\u6570\u91cf\u7684\u6a21\u5757\uff0c\u7136\u540e\u9009\u62e9\u83dc\u5355 Patch > Comment \uff0c\u6216\u8005\u7528\u5feb\u6377\u952e ",(0,Y.kt)("inlineCode",{parentName:"p"},"Ctrl Cmd C")," \u6dfb\u52a0\u4e00\u4e2a\u5305\u56f4\u6240\u9009\u6a21\u5757\u5927\u5c0f\u7684\u6ce8\u91ca\u3002"),(0,Y.kt)("p",null,"Double-click the name or hit return to edit the comment. Right-click the patch to change the color. Drag the bottom right corner to resize the comment."),(0,Y.kt)("p",null,"\u53cc\u51fb\u6a21\u5757\u6216\u6309\u56de\u8f66\u952e\u7f16\u8f91\u6ce8\u91ca\u3002\u5728\u6a21\u5757\u4e0a\u53f3\u952e\u66f4\u6539\u989c\u8272\uff0c\u4ee5\u53ca\u62d6\u52a8\u53f3\u4e0b\u89d2\u8c03\u6574\u5c3a\u5bf8\u3002"),(0,Y.kt)("p",null,(0,Y.kt)("img",{alt:"Image",src:w(30563).Z,width:"1506",height:"154"})))}h.isMDXComponent=!0},30563:function(A,M){M.Z="data:image/png;base64,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gAEG0oRkoIh3cbm4GGCAAQYYYICBoor4xYsX95S7f/75Z+fPZsyYMfQ1CxcurHbv3j30NXEa+4orrhj1dWfPnt35mlmzZo35vy1e48ILLxz43PTp06tLL720879j+RcAo5XY8dy55557UK83f/78as6cOdXZZ589pp/1/PPPry6++GJFvP3F7xgGGGCAAQYYYKCSgSIeAhsBAwwwwAADDDBQ2In4OPVef8Sp60Ffd+ONN/Z83fPPPz+wTH7hhReqX375pedrd+7cWT311FM95X53Fi1aVP38889DEx8Ou2TJkuqrr76q/vnnn873f/fdd9XNN9/c+foo5t94443ObXK6bxx8+OGHnQ+Yrb9uFOn1142f66qrrqo2b95c/f33353v/fXXX6uVK1d2vj7+2x5//PHqt99+6zy3b9++zv3y402IkbK7/fbbqy1btvT8rL///nv10ksvVRdccMEB/azxgbjxGvH3db8//sVB/Q2G+Jr4+niu/oic48/ff//9cfPgw1rtcX7PMcAAAwwwwAADKYMMnIjPYBGMDBhggAEGGGCgbQYmqoiPE+fdAjgeUcqP9vWffPJJp6iO2bRp07BT4Z9++mk12mPDhg3DToxHmV1/3H333UNFef0Rf3bZZZcN/DDZeHz//ffVRRdd1FPE1x+rVq2qtm/fPvB777rrrurFF18c+Nxff/3VeROiP4t4syD+ZcBIjyjX+0/V9/+sS5cuHfizxiP+e7rfF1832uPLL79UxGdwnRoZMMAAAwwwwAADadwyUMS7oFxQDDDAAAMMMMBAMUV8nNCuP5555pkxvU6cJv/ggw96Xmvbtm3V2rVrO6fZ649XX3111HI6TrrHKe94U6B+O5x4dE+rR+n+8ccfd+5jX3889NBDIxbx8bpRqsf3/fDDDz3PxevE6fvu37tr166e599+++2e/+Y4Jb9nz56eInz16tWdk/D1fw0Qr1X/VwD9P2u8CRIn+uMNjv6fJZ7rnvK/6aabqnfffXfYmxDxLwHiz5977jlFvH3J7yYGGGCAAQYYYKAqKQNFfAaLYGTAAAMMMMAAA20zMFFF/L333ttT7MbJ67G8zm233TbqbWveeuutnufjfuojldOfffZZdc455wyd2O8vzePWN93vjdeJIrv7iA+dHamIj5I97ikfz8Wp/Hfeeafn+c8//3zo743vjTcSuo+f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"}}]);