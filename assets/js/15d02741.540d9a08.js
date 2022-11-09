"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[27022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"JSON to Shape JSON \u8f6c\u6362\u56fe\u5f62",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},i="JSON to Shape JSON \u8f6c\u6362\u56fe\u5f62",l={unversionedId:"documentation/Utility/JSON to Shape",id:"documentation/Utility/JSON to Shape",title:"JSON to Shape JSON \u8f6c\u6362\u56fe\u5f62",description:"Takes a JSON with the following structure and commands to create a shape object:",source:"@site/docs/documentation/Utility/JSON to Shape.md",sourceDirName:"documentation/Utility",slug:"/documentation/Utility/JSON to Shape",permalink:"/OrigamiStudio/docs/documentation/Utility/JSON to Shape",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Utility/JSON to Shape.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667988793,formattedLastUpdatedAt:"2022\u5e7411\u67089\u65e5",sidebarPosition:5,frontMatter:{title:"JSON to Shape JSON \u8f6c\u6362\u56fe\u5f62",sidebar_position:5,last_update:{author:"\u84af\u7f8e\u653f"}},sidebar:"documentionSidebar",previous:{title:"Image \u56fe\u7247",permalink:"/OrigamiStudio/docs/documentation/Utility/Image"},next:{title:"JavaScript Patch",permalink:"/OrigamiStudio/docs/documentation/Utility/JavaScript Patch"}},p={},u=[{value:"lineTo### : \u5c06\u5f53\u524d\u70b9\u7684\u76f4\u7ebf\u6bb5\u9644\u52a0\u5230(x, y)\uff0c\u5e76\u5c06\u5f53\u524d\u70b9\u79fb\u52a8\u5230(x, y)\u3002",id:"lineto--\u5c06\u5f53\u524d\u70b9\u7684\u76f4\u7ebf\u6bb5\u9644\u52a0\u5230x-y\u5e76\u5c06\u5f53\u524d\u70b9\u79fb\u52a8\u5230x-y",level:3},{value:"JSON",id:"json",level:3},{value:"Coordinate Space \u5750\u6807\u7a7a\u95f4",id:"coordinate-space-\u5750\u6807\u7a7a\u95f4",level:3},{value:"Shape \u56fe\u5f62",id:"shape-\u56fe\u5f62",level:3},{value:"Error \u9519\u8bef",id:"error-\u9519\u8bef",level:3},{value:"Related Layers \u76f8\u5173\u56fe\u5c42",id:"related-layers-\u76f8\u5173\u56fe\u5c42",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-to-shape-json-\u8f6c\u6362\u56fe\u5f62"},"JSON to Shape JSON \u8f6c\u6362\u56fe\u5f62"),(0,a.kt)("p",null,"Takes a JSON with the following structure and commands to create a shape object:"),(0,a.kt)("p",null,"\u4f7f\u7528\u5e26\u6709\u4ee5\u4e0b\u7ed3\u6784\u548c\u547d\u4ee4\u7684JSON\u6765\u521b\u5efa\u4e00\u4e2ashape\u5bf9\u8c61:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{   "path" : [     // Array of Commands to build the shape   ] }\n')),(0,a.kt)("p",null,"The commands accepted in the array are the following:"),(0,a.kt)("p",null,"\u6570\u7ec4\u4e2d\u63a5\u53d7\u7684\u547d\u4ee4\u5982\u4e0b:"),(0,a.kt)("p",null,"moveTo: Move the current point to (x, y) and begin a new subpath."),(0,a.kt)("p",null,"moveTo: \u5c06\u5f53\u524d\u70b9\u79fb\u52a8\u5230(x, y)\u5e76\u5f00\u59cb\u4e00\u4e2a\u65b0\u7684\u5b50\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{   "type" : "moveTo"   "point" : {     "x" : 0,     "y" : 0   } }\n')),(0,a.kt)("p",null,"lineTo: Append a straight line segment from the current point to (x, y) in shape and move the current point to (x, y)."),(0,a.kt)("h3",{id:"lineto--\u5c06\u5f53\u524d\u70b9\u7684\u76f4\u7ebf\u6bb5\u9644\u52a0\u5230x-y\u5e76\u5c06\u5f53\u524d\u70b9\u79fb\u52a8\u5230x-y"},"lineTo### : \u5c06\u5f53\u524d\u70b9\u7684\u76f4\u7ebf\u6bb5\u9644\u52a0\u5230(x, y)\uff0c\u5e76\u5c06\u5f53\u524d\u70b9\u79fb\u52a8\u5230(x, y)\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{   "type" : "lineTo"   "point" : {     "x" : 0,     "y" : 0   } }\n')),(0,a.kt)("p",null,"curveTo: Append a cubic b\xe9zier curve from the current point to \u201ccurveTo(x,y)\u201d with control points \u201ccurveFrom(x, y)\u201d and \u201cpoint(x, y)\u201d in \u201cshape\u201d and move the current point to \u201c(x, y)\u201d."),(0,a.kt)("p",null,"curveTo : \u9644\u52a0\u4e00\u4e2a\u4e09\u6b21\u65b9\u8d1d\u585e\u5c14\u66f2\u7ebf\u4ece\u5f53\u524d\u70b9\u5230\u201ccurveTo(x,y)\u201d\u4e0e\u63a7\u5236\u70b9\u201ccurveFrom(x, y)\u201d\u548c\u201c\u70b9(x,y)\u201d\u5728\u201c\u5f62\u72b6\u201d\uff0c\u5e76\u79fb\u52a8\u5f53\u524d\u70b9\u5230\u201c(x, y)\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{   "type" : "curveTo",   "curveFrom" : {     "x" : 0,     "y" : 0   },   "point" : {     "x" : 0,     "y" : 0   },   "curveTo" : {     "x" : 0,     "y" : 0   } }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/curveToShapeExample@2x.png",alt:null})),(0,a.kt)("div",{className:"patch-container"},(0,a.kt)("div",{className:"patch processor"},(0,a.kt)("h3",null,"JSON to Shape"),(0,a.kt)("ul",{className:"inputs"},(0,a.kt)("li",null,"JSON",(0,a.kt)("span",null,"...")),(0,a.kt)("li",null,"Coordinate Space ",(0,a.kt)("small",null,"X",(0,a.kt)("span",null,"1"),"Y",(0,a.kt)("span",null,"1")))),(0,a.kt)("ul",{className:"outputs"},(0,a.kt)("li",null,"Shape",(0,a.kt)("span",null)),(0,a.kt)("li",null,"Error",(0,a.kt)("span",null,"...mi"))))),(0,a.kt)("h3",{id:"json"},"JSON"),(0,a.kt)("p",null,"A JSON Object that follows the path structure."),(0,a.kt)("p",null,"\u9075\u5faa\u8def\u5f84\u7ed3\u6784\u7684JSON\u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"coordinate-space-\u5750\u6807\u7a7a\u95f4"},"Coordinate Space \u5750\u6807\u7a7a\u95f4"),(0,a.kt)("p",null,"A width and height value that will act as a scale multiplier for every x,y component on the shape."),(0,a.kt)("p",null,"\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u503c\uff0c\u5c06\u4f5c\u4e3a\u5f62\u72b6\u4e0a\u6bcf\u4e2ax\u3001y\u7ec4\u4ef6\u7684\u6bd4\u4f8b\u76f8\u4e58\u3002"),(0,a.kt)("h3",{id:"shape-\u56fe\u5f62"},"Shape \u56fe\u5f62"),(0,a.kt)("p",null,"A shape object."),(0,a.kt)("p",null,"\u4e00\u4e2a\u56fe\u5f62\u5bf9\u8c61"),(0,a.kt)("h3",{id:"error-\u9519\u8bef"},"Error \u9519\u8bef"),(0,a.kt)("p",null,"A string with an explanation of an error, if there was an error with the path structure."),(0,a.kt)("p",null,"\u5982\u679c\u8def\u5f84\u7ed3\u6784\u5b58\u5728\u9519\u8bef\uff0c\u5219\u4e3a\u5e26\u6709\u9519\u8bef\u89e3\u91ca\u7684\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"related-layers-\u76f8\u5173\u56fe\u5c42"},"Related Layers \u76f8\u5173\u56fe\u5c42"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Layer/Shape"},"Shape \u5f62\u72b6")))}s.isMDXComponent=!0}}]);