"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[38134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},i="Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f",s={unversionedId:"documentation/Concepts/Math Expressions",id:"documentation/Concepts/Math Expressions",title:"Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/documentation/Concepts/Math Expressions.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/Math Expressions",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Math Expressions",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/Math Expressions.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667669737,formattedLastUpdatedAt:"Nov 5, 2022",sidebarPosition:20,frontMatter:{title:"Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f",sidebar_position:20,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Loop \u5faa\u73af",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Loop"},next:{title:"Scripting Basics \u811a\u672c\u57fa\u7840",permalink:"/OrigamiStudio/en/docs/documentation/Concepts/Scripting Basics"}},p={},c=[{value:"Example Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f\u793a\u4f8b",id:"example-math-expressions-\u6570\u5b66\u8868\u8fbe\u5f0f\u793a\u4f8b",level:2}],l={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"math-expressions-\u6570\u5b66\u8868\u8fbe\u5f0f"},"Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Math Expressions are a powerful tool to create more complex logic in Origami prototypes. Instead of adding patches for each arithmetic operation and connecting them together, you can insert a single ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Math%20Expression"},"Math Expression")," patch, type the expression you want to compute, and connect its inputs and outputs. Here\u2019s a simple example:"),(0,r.kt)("p",null,"\u6570\u5b66\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u521b\u5efa\u66f4\u590d\u6742\u7684\u903b\u8f91\u539f\u578b\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u63d2\u5165\u5355\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"/OrigamiStudio/en/docs/documentation/Math/Math%20Expression"},"Math Expression")," \u6a21\u5757\uff0c\u8f93\u5165\u8981\u8ba1\u7b97\u7684\u8868\u8fbe\u5f0f\uff0c\u5e76\u8fde\u63a5\u5176\u8f93\u5165\u548c\u8f93\u51fa\uff0c\u800c\u4e0d\u662f\u4e3a\u6bcf\u4e2a\u8ba1\u7b97\u64cd\u4f5c\u6dfb\u52a0\u6a21\u5757\u5e76\u5c06\u5b83\u4eec\u8fde\u63a5\u5728\u4e00\u8d77\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(31546).Z,width:"1500",height:"276"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When you insert a Math Expression patch from the patch picker, it initially has no inputs or outputs. Once you type an expression in the window that appears, the patch updates to include the inputs and outputs from the expression that was entered."),(0,r.kt)("p",null,"\u5f53\u4ece\u6a21\u5757\u9009\u62e9\u5668\u63d2\u5165 Math Expression \u6a21\u5757\u65f6\uff0c\u5f00\u59cb\u662f\u6ca1\u6709\u8f93\u5165\u6216\u8f93\u51fa\u7684\u3002\u5728\u51fa\u73b0\u7684\u7a97\u53e3\u4e2d\u8f93\u5165\u8868\u8fbe\u5f0f\u540e\uff0c\u6a21\u5757\u5c06\u4f1a\u66f4\u65b0\u4ee5\u5305\u542b\u6240\u8f93\u5165\u8868\u8fbe\u5f0f\u7684\u8f93\u5165\u548c\u8f93\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/docs/mathExpression-editor.png",alt:null})),(0,r.kt)("p",null,"To edit the expression used in a Math Expression patch, right-click the patch and select \u201cPatch Info\u201d from the menu (or press \u2318I). Once you\u2019re done editing, press enter to save the update. Note that changing the title of the patch does not affect the expression."),(0,r.kt)("p",null,"\u8981\u7f16\u8f91 Math expression \u6a21\u5757\u4e2d\u4f7f\u7528\u7684\u8868\u8fbe\u5f0f\uff0c\u53f3\u952e\u5355\u51fb\u6a21\u5757\uff0c\u5728\u83dc\u5355\u4e2d\u9009\u62e9 \u201cpatch Info\u201d (\u6216\u6309\u4e0b \u2318I)\u3002"),(0,r.kt)("p",null,"\u7f16\u8f91\u5b8c\u6210\u540e\uff0c\u6309\u56de\u8f66\u952e\u4fdd\u5b58\u66f4\u65b0\u3002\u6ce8\u610f\uff0c\u66f4\u6539\u6a21\u5757\u7684\u6807\u9898\u4e0d\u4f1a\u5f71\u54cd\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("p",null,"Expressions can include any mathematical operations (+, -, ","*",", /, %, ### ) or functions from the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"},"JavaScript Math library"),". Any expression that is valid in JavaScript can be used, but the inputs and outputs can only be numbers. If you type an invalid expression into the editor, it will not be saved and will be highlighted in red."),(0,r.kt)("p",null,"\u8868\u8fbe\u5f0f\u53ef\u4ee5\u5305\u542b\u4efb\u4f55\u6570\u5b66\u8fd0\u7b97(+\uff0c-\uff0c","*","\uff0c/\uff0c%\uff0c### )\u6216 JavaScript Math \u5e93\u4e2d\u7684\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u4efb\u4f55\u5728 JavaScript \u4e2d\u6709\u6548\u7684\u8868\u8fbe\u5f0f\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f46\u8f93\u5165\u548c\u8f93\u51fa\u53ea\u80fd\u662f\u6570\u5b57\u3002\u5982\u679c\u60a8\u5728\u7f16\u8f91\u5668\u4e2d\u8f93\u5165\u65e0\u6548\u7684\u8868\u8fbe\u5f0f\uff0c\u5b83\u5c06\u4e0d\u4f1a\u88ab\u4fdd\u5b58\uff0c\u5e76\u4ee5\u7ea2\u8272\u9ad8\u4eae\u663e\u793a\u3002"),(0,r.kt)("h2",{id:"example-math-expressions-\u6570\u5b66\u8868\u8fbe\u5f0f\u793a\u4f8b"},"Example Math Expressions \u6570\u5b66\u8868\u8fbe\u5f0f\u793a\u4f8b"),(0,r.kt)("p",null,"Compute the distance between two points using the following expression patch. Notice how we included \u201cdistance = \u201c at the beginning of the expression to name the output of the patch."),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u8868\u8fbe\u5f0f\u6a21\u5757\u8ba1\u7b97\u4e24\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5982\u4f55\u5728\u8868\u8fbe\u5f0f\u7684\u5f00\u5934\u5305\u542b\u201cdistance =\u201d\u6765\u547d\u540d\u6a21\u5757\u7684\u8f93\u51fa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"distance = Math.sqrt((x2-x1) 2 + (y2-y1) 2)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(26884).Z,width:"1504",height:"340"})),(0,r.kt)("p",null,"Create a patch with multiple outputs by writing multiple expressions separated by semicolons:"),(0,r.kt)("p",null,"\u901a\u8fc7\u7f16\u5199\u7528\u5206\u53f7\u5206\u9694\u7684\u591a\u4e2a\u8868\u8fbe\u5f0f\uff0c\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u591a\u4e2a\u8f93\u51fa\u7684\u6a21\u5757:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"quotient = a/b; remainder = a % b\n\u5546\u6570 = a/b; \u4f59\u6570 = a % b\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image",src:n(82420).Z,width:"1502",height:"272"})))}u.isMDXComponent=!0},31546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/math-expressions-1-95edd8abdfe74ced857284dc9679a6c2.png"},26884:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/math-expressions-3-6a4e8a4f5f6132458886dbba949c410a.png"},82420:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/math-expressions-4-21aa889205b1458d7bf72e8e738a6d8e.png"}}]);