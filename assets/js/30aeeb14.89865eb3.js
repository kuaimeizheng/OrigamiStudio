"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[4051],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return o.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},h=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||n;return t?o.createElement(m,i(i({ref:a},c),{},{components:t})):o.createElement(m,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},19958:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const n={sidebar_position:1},i="Variables \u53d8\u91cf",l={unversionedId:"documentation/Concepts/Variables",id:"documentation/Concepts/Variables",title:"Variables \u53d8\u91cf",description:"Variables are a way to organize and simplify the patch graph of your prototype. At the simplest level, a Variable Broadcasterand Variable Receiverscan replace the cables that normally connect one patch\u2019s output to other patches\u2019 inputs. (In previous versions of Origami these patches were named Wireless Broadcasters and Receivers, because they removed the \u201cwires\u201d between patches!)",source:"@site/docs/documentation/Concepts/Variables.md",sourceDirName:"documentation/Concepts",slug:"/documentation/Concepts/Variables",permalink:"/OrigamiStudio/docs/documentation/Concepts/Variables",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Concepts/Variables.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1660145226,formattedLastUpdatedAt:"2022\u5e748\u670810\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentionSidebar",previous:{title:"States & Pulses \u72b6\u6001 & \u8109\u51b2",permalink:"/OrigamiStudio/docs/documentation/Concepts/States & Pulses"},next:{title:"Animation \u52a8\u753b",permalink:"/OrigamiStudio/docs/category/animation-\u52a8\u753b"}},s={},p=[],c={toc:p};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"variables-\u53d8\u91cf"},"Variables \u53d8\u91cf"),(0,r.kt)("p",null,"Variables are a way to organize and simplify the patch graph of your prototype. At the simplest level, a Variable Broadcasterand Variable Receiverscan replace the cables that normally connect one patch\u2019s output to other patches\u2019 inputs. (In previous versions of Origami these patches were named Wireless Broadcasters and Receivers, because they removed the \u201cwires\u201d between patches!)"),(0,r.kt)("p",null,"\u53d8\u91cf\u662f\u6574\u7406\u548c\u7b80\u5316\u539f\u578b\u56fe\u7684\u4e00\u79cd\u65b9\u6cd5\u3002\u5728\u6700\u7b80\u5355\u7684\u5c42\u9762\u4e0a\uff0c\u53d8\u91cf\u53d1\u9001\u5668\u548c\u53d8\u91cf\u63a5\u6536\u5668\u53ef\u4ee5\u66ff\u6362\u901a\u5e38\u8fde\u63a5\u4e00\u4e2a\u6a21\u5757\u7684\u8f93\u51fa\u5230\u5176\u4ed6\u6a21\u5757\u7684\u8f93\u5165\u7684\u8fde\u7ebf\u3002(\u5728Origami\u7684\u65e9\u671f\u7248\u672c\u4e2d\uff0c\u8fd9\u4e9b\u6a21\u5757\u88ab\u547d\u540d\u4e3a\u65e0\u7ebf\u53d1\u9001\u548c\u63a5\u6536\u5668\uff0c\u56e0\u4e3a\u5b83\u4eec\u5220\u9664\u4e86\u6a21\u5757\u4e4b\u95f4\u7684\u201c\u8fde\u7ebf\u201d!)"),(0,r.kt)("p",null,"Variables can be especially useful as your prototype becomes more complex and the patch graph grows in size. Instead of dragging a cable and scrolling around a large graph, you can attach a Variable Broadcaster to the source value, and then insert a Variable Receiver patch anywhere you need to use it."),(0,r.kt)("p",null,"\u5f53\u4f60\u7684\u539f\u578b\u53d8\u5f97\u66f4\u52a0\u590d\u6742\uff0c\u5e76\u4e14\u6a21\u5757\u56fe\u7684\u5927\u5c0f\u4e5f\u5728\u589e\u5927\u65f6\uff0c\u53d8\u91cf\u4fbf\u4f1a\u53d8\u5f97\u975e\u5e38\u6709\u7528\u3002\u60a8\u53ef\u4ee5\u5c06\u53d8\u91cf\u53d1\u9001\u5668\u9644\u52a0\u5230\u6e90\u503c\uff0c\u7136\u540e\u5c06\u53d8\u91cf\u63a5\u6536\u5668\u6a21\u5757\u63d2\u5165\u5230\u9700\u8981\u4f7f\u7528\u5b83\u7684\u4efb\u4f55\u5730\u65b9\uff0c\u800c\u4e0d\u662f\u62d6\u62fd\u8fde\u7ebf\u548c\u5728\u5927\u578b\u56fe\u5f62\u4e2d\u6eda\u52a8\u3002"),(0,r.kt)("p",null,"Here\u2019s a basic example where a variable has been used to clean up the patch graph:"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528\u53d8\u91cf\u6765\u6574\u7406\u6a21\u5757\u56fe\u7684\u57fa\u7840\u4f8b\u5b50:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/variables-before-broadcast.png",alt:null})),(0,r.kt)("p",null,"Before:The Scroll Y position is connected to 3 different inputs, with cables overlapping parts of the patch graph."),(0,r.kt)("p",null,"\u5f00\u59cb:Scroll Y \u4f4d\u7f6e\u8fde\u63a53\u4e2a\u4e0d\u540c\u7684\u8f93\u5165\uff0c\u8fde\u7ebf\u4e0e\u6a21\u5757\u56fe\u7684\u90e8\u5206\u91cd\u53e0\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/variables-radio-wave.mp4"},"https://origami.design/public/images/videos/variables-radio-wave.mp4")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/variables-after-broadcast.png",alt:null})),(0,r.kt)("p",null,"After:A variable broadcaster for Scroll Y position has been connected to the scroll patch, and 3 variable receivers have replaced the cables from the scroll patch"),(0,r.kt)("p",null,"\u7ed3\u675f:Scroll Y \u4f4d\u7f6e\u7684\u4e00\u4e2a\u53d8\u91cf\u53d1\u9001\u5668\u5df2\u8fde\u63a5\u5230\u6eda\u52a8\u6a21\u5757\uff0c3\u4e2a\u53d8\u91cf\u63a5\u6536\u5668\u5df2\u66ff\u6362\u6eda\u52a8\u6a21\u5757\u7684\u8fde\u7ebf"),(0,r.kt)("p",null,"Variables can also help you navigate around a large patch graph. If you click on the \u2018radio wave\u2019 icon of a wireless receiver, Origami will pan the patch graph to reveal the source broadcaster. As your prototype grows in size, this can be a helpful way to understand what values are affecting your prototype, and where they\u2019re being modified."),(0,r.kt)("p",null,"\u53d8\u91cf\u8fd8\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5728\u4e00\u4e2a\u5927\u7684\u6a21\u5757\u56fe\u4e2d\u5bfc\u822a\u3002\u5982\u679c\u4f60\u70b9\u51fb\u65e0\u7ebf\u63a5\u6536\u5668\u7684\u201c\u65e0\u7ebf\u7535\u6ce2\u201d\u56fe\u6807\uff0cOrigami\u5c06\u5e73\u79fb\u6a21\u5757\u56fe\u6765\u663e\u793a\u6e90\u53d1\u9001\u5668\u3002\u968f\u7740\u539f\u578b\u89c4\u6a21\u7684\u589e\u5927\uff0c\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7406\u89e3\u4ec0\u4e48\u503c\u5f71\u54cd\u4f60\u7684\u539f\u578b\uff0c\u4ee5\u53ca\u5b83\u4eec\u5728\u54ea\u91cc\u88ab\u4fee\u6539\u3002"),(0,r.kt)("p",null,"Variables can also be used to centralize values that you use throughout your prototype so that you can change a value in one place and have it update everywhere."),(0,r.kt)("p",null,"\u53d8\u91cf\u4e5f\u53ef\u4ee5\u7528\u6765\u96c6\u4e2d\u4f60\u5728\u6574\u4e2a\u539f\u578b\u4e2d\u4f7f\u7528\u7684\u503c\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u5730\u65b9\u66f4\u6539\u4e00\u4e2a\u503c\uff0c\u5c31\u53ef\u4ee5\u5728\u5404\u5904\u66f4\u65b0\u5b83\u3002"),(0,r.kt)("p",null,"For instance, in the example above, there is a toolbar that fades out as the content scrolls beneath it, and the content also fades out as it scrolls offscreen. By setting a variable for the toolbar height, it can be used to transition the opacity of the toolbar as well as the scroll content."),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6709\u4e00\u4e2a\u5de5\u5177\u680f\uff0c\u5f53\u5185\u5bb9\u5728\u5b83\u4e0b\u9762\u6eda\u52a8\u65f6\uff0c\u5b83\u4f1a\u6de1\u51fa\uff0c\u5f53\u5b83\u6eda\u52a8\u51fa\u5c4f\u5e55\u65f6\uff0c\u5185\u5bb9\u4e5f\u4f1a\u6de1\u51fa\u3002\u901a\u8fc7\u4e3a\u5de5\u5177\u680f\u9ad8\u5ea6\u8bbe\u7f6e\u4e00\u4e2a\u53d8\u91cf\uff0c\u5b83\u53ef\u4ee5\u7528\u6765\u8fc7\u6e21\u5de5\u5177\u680f\u7684\u4e0d\u900f\u660e\u5ea6\u4ee5\u53ca\u6eda\u52a8\u5185\u5bb9\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/variables-example.png",alt:null})),(0,r.kt)("p",null,"Example:Using variables to centralize & reuse values"),(0,r.kt)("p",null,"\u793a\u4f8b:\u4f7f\u7528\u53d8\u91cf\u6765\u96c6\u4e2d\u548c\u590d\u7528\u503c"),(0,r.kt)("p",null,"Using variables to define and reuse important values not only keeps the patch graph tidy, but also makes it easier to update your prototype."),(0,r.kt)("p",null,"\u4f7f\u7528\u53d8\u91cf\u6765\u5b9a\u4e49\u548c\u590d\u7528\u91cd\u8981\u7684\u503c\u4e0d\u4ec5\u53ef\u4ee5\u4fdd\u6301\u6a21\u5757\u56fe\u7684\u6574\u6d01\uff0c\u8fd8\u53ef\u4ee5\u8ba9\u4f60\u66f4\u5bb9\u6613\u5730\u66f4\u65b0\u539f\u578b\u3002"),(0,r.kt)("p",null,"For instance, if the design of the header changes to be taller, you only have to change the value once. (If you\u2019re coming from a programming background, this is similar to defining a constant that you use throughout your code.)"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6807\u9898\u7684\u8bbe\u8ba1\u66f4\u6539\u4e3a\u66f4\u9ad8\uff0c\u60a8\u53ea\u9700\u8981\u66f4\u6539\u4e00\u6b21\u503c\u3002(\u5982\u679c\u4f60\u6709\u7f16\u7a0b\u80cc\u666f\uff0c\u8fd9\u7c7b\u4f3c\u4e8e\u5728\u4ee3\u7801\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u5e38\u91cf\u3002)"),(0,r.kt)("p",null,"This also can help other people who you might share your prototype with quickly understand the important values you\u2019re using throughout a prototype."),(0,r.kt)("p",null,"\u8fd9\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u90a3\u4e9b\u4e0e\u4f60\u5206\u4eab\u539f\u578b\u7684\u4eba\u5feb\u901f\u7406\u89e3\u4f60\u5728\u6574\u4e2a\u539f\u578b\u4e2d\u6240\u4f7f\u7528\u7684\u91cd\u8981\u6570\u503c\u3002"),(0,r.kt)("p",null,"For instance, you might set up several variables for the UI text in your design, and then share it with a writer on your team to edit and try out different labels, without having to navigate all the logic of the prototype."),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5728\u8bbe\u8ba1\u4e2d\u4e3aUI\u6587\u672c\u8bbe\u7f6e\u591a\u4e2a\u53d8\u91cf\uff0c\u7136\u540e\u5c06\u5176\u4e0e\u56e2\u961f\u4e2d\u7684\u4f5c\u8005\u5171\u4eab\uff0c\u4ee5\u4fbf\u7f16\u8f91\u548c\u5c1d\u8bd5\u4e0d\u540c\u7684\u6807\u7b7e\uff0c\u800c\u65e0\u9700\u6d4f\u89c8\u539f\u578b\u7684\u6240\u6709\u903b\u8f91\u3002"),(0,r.kt)("p",null,"As your prototype becomes more complex, you\u2019ll probably want to encapsulate functionality using ### ",(0,r.kt)("a",{parentName:"p",href:"../Workflow/Components"},"Components."),"The components you create can also take advantage of these centralized values with ### Global Variables### ."),(0,r.kt)("p",null,"\u968f\u7740\u539f\u578b\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u60a8\u53ef\u80fd\u60f3\u8981\u4f7f\u7528\u7ec4\u4ef6\u5c01\u88c5\u529f\u80fd\u3002\u60a8\u521b\u5efa\u7684\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u5229\u7528\u8fd9\u4e9b\u96c6\u4e2d\u7684\u503c\u548c\u5168\u5c40\u53d8\u91cf\u3002"),(0,r.kt)("h1",{id:"what-are-global-variables-\u4ec0\u4e48\u662f\u5168\u5c40\u53d8\u91cf"},"What Are Global Variables? \u4ec0\u4e48\u662f\u5168\u5c40\u53d8\u91cf?"),(0,r.kt)("p",null,"Global variables in Origami are used to define values at a high level and propagate those values to wherever they are needed in the prototype. They can be used to change the appearance or functionality of an entire prototype. Global variable values cascade downward throughout components."),(0,r.kt)("p",null,"\u5728Origami\u4e2d\uff0c\u5168\u5c40\u53d8\u91cf\u7528\u4e8e\u5728\u8f83\u9ad8\u7ea7\u522b\u5b9a\u4e49\u503c\uff0c\u5e76\u5c06\u8fd9\u4e9b\u503c\u4f20\u64ad\u5230\u539f\u578b\u4e2d\u9700\u8981\u5b83\u4eec\u7684\u4efb\u4f55\u4f4d\u7f6e\u3002\u5b83\u4eec\u53ef\u4ee5\u7528\u6765\u6539\u53d8\u6574\u4e2a\u539f\u578b\u7684\u5916\u89c2\u6216\u529f\u80fd\u3002\u5168\u5c40\u53d8\u91cf\u503c\u5728\u6574\u4e2a\u7ec4\u4ef6\u4e2d\u5411\u4e0b\u7ea7\u8054\u3002"),(0,r.kt)("p",null,"So, from any location in the prototype, a user is able to read from a global variable that is either in the same component, its parent component, or any ancestor component."),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u539f\u578b\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u7528\u6237\u90fd\u80fd\u591f\u4ece\u540c\u4e00\u4e2a\u7ec4\u4ef6\u3001\u5176\u7236\u7ec4\u4ef6\u6216\u4efb\u4f55\u7956\u5148\u7ec4\u4ef6\u4e2d\u7684\u5168\u5c40\u53d8\u91cf\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,r.kt)("h1",{id:"how-to-use-global-variables-\u600e\u4e48\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"},"How to Use Global Variables \u600e\u4e48\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("p",null,"Perform the following steps to use global variables in Origami:"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u5728Origami\u4e2d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert a variable broadcaster with your desired name, type, and value into your Origami prototype. This will be where the global variable\u2019s value is defined."),(0,r.kt)("li",{parentName:"ul"},"Click the pop-up menu on upper right corner of the variable broadcaster and choose the option for Global from the scope menu. You can also right click on the variable broadcaster and choose the Scope menu item."),(0,r.kt)("li",{parentName:"ul"},"Insert a variable receiver into any child component of the component in which the variable broadcaster is located. This will be where the global variable value is read."),(0,r.kt)("li",{parentName:"ul"},"Click the name on the variable receiver to see a pop-up menu of all local variables defined in the current component as well as all of the global variables available to the current component."),(0,r.kt)("li",{parentName:"ul"},"To access the value of a global variable broadcaster, choose that global variable name from the menu. The variable receiver will change its scope, name, type, and value to match that of the selected global variable broadcaster."),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u5165\u4e00\u4e2a\u53d8\u91cf\u53d1\u9001\u5668\u4e0e\u60a8\u60f3\u8981\u7684\u540d\u79f0\uff0c\u7c7b\u578b\uff0c\u548c\u503c\u5230\u60a8\u7684Origami\u539f\u578b\u3002\u8fd9\u5c06\u662f\u5b9a\u4e49\u5168\u5c40\u53d8\u91cf\u7684\u5730\u65b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u53d8\u91cf\u53d1\u9001\u5668\u53f3\u4e0a\u89d2\u7684\u5f39\u51fa\u83dc\u5355\uff0c\u5e76\u4ece\u8303\u56f4\u83dc\u5355\u4e2d\u9009\u62e9\u5168\u5c40\u9009\u9879\u3002\u60a8\u4e5f\u53ef\u4ee5\u53f3\u952e\u5355\u51fb\u53d8\u91cf\u53d1\u9001\u5668\uff0c\u5e76\u9009\u62e9Scope\u83dc\u5355\u9879\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u53d8\u91cf\u63a5\u6536\u5668\u63d2\u5165\u53d8\u91cf\u53d1\u9001\u5668\u6240\u5728\u7ec4\u4ef6\u7684\u4efb\u4f55\u5b50\u7ec4\u4ef6\u4e2d\u3002\u8fd9\u5c06\u662f\u8bfb\u53d6\u5168\u5c40\u53d8\u91cf\u503c\u7684\u5730\u65b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u51fb\u53d8\u91cf\u63a5\u6536\u5668\u4e0a\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u672c\u5730\u53d8\u91cf\u4ee5\u53ca\u5f53\u524d\u7ec4\u4ef6\u53ef\u7528\u7684\u6240\u6709\u5168\u5c40\u53d8\u91cf\u7684\u5f39\u51fa\u83dc\u5355\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8981\u8bbf\u95ee\u5168\u5c40\u53d8\u91cf\u53d1\u9001\u5668\u7684\u503c\uff0c\u8bf7\u4ece\u83dc\u5355\u4e2d\u9009\u62e9\u8be5\u5168\u5c40\u53d8\u91cf\u540d\u3002\u53d8\u91cf\u63a5\u6536\u5668\u5c06\u6539\u53d8\u5176\u8303\u56f4\u3001\u540d\u79f0\u3001\u7c7b\u578b\u548c\u503c\uff0c\u4ee5\u5339\u914d\u6240\u9009\u7684\u5168\u5c40\u53d8\u91cf\u53d1\u9001\u5668\u3002")),(0,r.kt)("p",null,"In the example from above, imagine we\u2019ve made each item in our scrolling view into a self-contained Item View component. If we first change the scope of our Header Height variable at the root of our document to Global, we can now add a variable receiver inside the Item View component that\u2019s connected to the Header Height variable. Now each item view can automatically fade out when its position overlaps the header height."),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u5c06\u6eda\u52a8\u89c6\u56fe\u4e2d\u7684\u6bcf\u4e2a\u9879\u76ee\u90fd\u53d8\u6210\u4e86\u4e00\u4e2a\u72ec\u7acb\u7684\u9879\u76ee\u89c6\u56fe\u7ec4\u4ef6\u3002\u5982\u679c\u6211\u4eec\u9996\u5148\u5c06\u6587\u6863\u6839\u76ee\u5f55\u4e0b\u7684Header Height\u53d8\u91cf\u7684\u4f5c\u7528\u8303\u56f4\u66f4\u6539\u4e3a Global\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5728 Item View \u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u53d8\u91cf\u63a5\u6536\u5668\uff0c\u8be5\u63a5\u6536\u5668\u8fde\u63a5\u5230 Header Height \u53d8\u91cf\u3002\u73b0\u5728\u6bcf\u4e2a\u9879\u76ee\u89c6\u56fe\u53ef\u4ee5\u5728\u5176\u4f4d\u7f6e\u4e0e\u6807\u9898\u9ad8\u5ea6\u91cd\u53e0\u65f6\u81ea\u52a8\u6de1\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/variables-header-height.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://origami.design/public/images/videos/variables-global.mp4"},"https://origami.design/public/images/videos/variables-global.mp4")),(0,r.kt)("h1",{id:"global-variables-are-cascading-\u5168\u5c40\u53d8\u91cf\u662f\u7ea7\u8054\u7684"},"Global Variables are Cascading \u5168\u5c40\u53d8\u91cf\u662f\u7ea7\u8054\u7684"),(0,r.kt)("p",null,"It\u2019s important to note that when you define a global variable, it is accessible from the component it was created in, as well as any components contained within that component. The value cascades from the top level down to each child component that access it, including their children, and their children\u2019s children, and so on. However, components can override an ancestor\u2019s global variable by defining a new global variable with the same name and type of value."),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u60a8\u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u65f6\uff0c\u5b83\u53ef\u4ee5\u4ece\u521b\u5efa\u5b83\u7684\u7ec4\u4ef6\u4ee5\u53ca\u8be5\u7ec4\u4ef6\u4e2d\u5305\u542b\u7684\u4efb\u4f55\u7ec4\u4ef6\u8bbf\u95ee\u3002\u8be5\u503c\u4ece\u9876\u5c42\u5411\u4e0b\u7ea7\u8054\u5230\u8bbf\u95ee\u5b83\u7684\u6bcf\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u5305\u62ec\u5b83\u4eec\u7684\u5b50\u7ec4\u4ef6\u548c\u5b83\u4eec\u7684\u5b50\u7ec4\u4ef6\u7684\u5b50\u7ec4\u4ef6\uff0c\u7b49\u7b49\u3002\u4f46\u662f\uff0c\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u5177\u6709\u76f8\u540c\u540d\u79f0\u548c\u503c\u7c7b\u578b\u7684\u65b0\u5168\u5c40\u53d8\u91cf\u6765\u8986\u76d6\u7956\u5148\u7684\u5168\u5c40\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"This is possible because global variable receivers get their values from the matching global variable broadcaster that\u2019s nearest in the component hierarchy. So, if you want a certain value to apply to specific components in your prototype and then change the value to be different for other child components, you simply add another global variable broadcaster in one of the child components."),(0,r.kt)("p",null,"\u8fd9\u662f\u53ef\u80fd\u7684\uff0c\u56e0\u4e3a\u5168\u5c40\u53d8\u91cf\u63a5\u6536\u5668\u4ece\u7ec4\u4ef6\u5c42\u6b21\u7ed3\u6784\u4e2d\u6700\u63a5\u8fd1\u7684\u5339\u914d\u5168\u5c40\u53d8\u91cf\u53d1\u9001\u5668\u83b7\u53d6\u5b83\u4eec\u7684\u503c\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u60f3\u8981\u4e00\u4e2a\u7279\u5b9a\u7684\u503c\u5e94\u7528\u5230\u539f\u578b\u4e2d\u7684\u7279\u5b9a\u7ec4\u4ef6\uff0c\u7136\u540e\u6539\u53d8\u8fd9\u4e2a\u503c\uff0c\u4f7f\u5176\u4e0e\u5176\u4ed6\u5b50\u7ec4\u4ef6\u4e0d\u540c\uff0c\u4f60\u53ea\u9700\u5728\u5176\u4e2d\u4e00\u4e2a\u5b50\u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u53e6\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u53d1\u9001\u5668\u3002"),(0,r.kt)("p",null,"Let\u2019s take an example of applying a Dark Mode global variable to a prototype. Imagine you have an Editor component, which you\u2019d like to match the system setting for Dark Mode. The background should be white when it\u2019s in light mode, and black when it\u2019s in dark mode. You might also have an inspector panel component in your Editor that should also match the rest of the UI. By setting a global variable for Dark Mode, at the top of your document, the Editor can receive the default value (based on the current system appearance, for example). The Inspector panel will also inherit the Dark Mode value from the root of the document."),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u4e3e\u4e00\u4e2a\u5c06 Dark Mode \u5168\u5c40\u53d8\u91cf\u5e94\u7528\u5230\u539f\u578b\u7684\u4f8b\u5b50\u3002\u5047\u8bbe\u60a8\u6709\u4e00\u4e2aEditor\u7ec4\u4ef6\uff0c\u60a8\u5e0c\u671b\u5b83\u4e0eDark Mode \u7684\u7cfb\u7edf\u8bbe\u7f6e\u76f8\u5339\u914d\u3002\u80cc\u666f\u5e94\u8be5\u662f\u767d\u8272\u65f6\uff0c\u5b83\u5728\u4eae\u8272\u6a21\u5f0f\uff0c\u9ed1\u8272\u65f6\uff0c\u5b83\u5728\u9ed1\u6697\u6a21\u5f0f\u3002\u5728\u7f16\u8f91\u5668\u4e2d\uff0c\u60a8\u53ef\u80fd\u8fd8\u6709\u4e00\u4e2a\u68c0\u67e5\u9762\u677f\u7ec4\u4ef6\uff0c\u5b83\u4e5f\u5e94\u8be5\u4e0eUI\u7684\u5176\u4f59\u90e8\u5206\u76f8\u5339\u914d\u3002\u901a\u8fc7\u4e3a Dark Mode \u8bbe\u7f6e\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u5728\u4f60\u7684\u6587\u6863\u7684\u9876\u90e8\uff0cEditor\u53ef\u4ee5\u63a5\u6536\u5230\u9ed8\u8ba4\u503c(\u4f8b\u5982\uff0c\u57fa\u4e8e\u5f53\u524d\u7684\u7cfb\u7edf\u5916\u89c2)\u3002\u68c0\u67e5\u9762\u677f\u4e5f\u5c06\u4ece\u6587\u6863\u7684\u6839\u76ee\u5f55\u7ee7\u627f\u6697\u6a21\u5f0f\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/variables-receivers1-diagram.png",alt:null})),(0,r.kt)("p",null,"Now imagine your Editor component also has an embedded Photo View component. Instead of matching the system appearance, any UI you display over the Photo View should always have a dark appearance."),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5047\u8bbe\u4f60\u7684\u7f16\u8f91\u5668\u7ec4\u4ef6\u4e5f\u6709\u4e00\u4e2a\u5d4c\u5165\u5f0f\u7167\u7247\u89c6\u56fe\u7ec4\u4ef6\u3002\u4e0e\u5176\u5339\u914d\u7cfb\u7edf\u5916\u89c2\uff0c\u4f60\u5728\u7167\u7247\u89c6\u56fe\u4e0a\u663e\u793a\u7684\u4efb\u4f55UI\u90fd\u5e94\u8be5\u603b\u662f\u6709\u4e00\u4e2a\u9ed1\u8272\u7684\u5916\u89c2\u3002"),(0,r.kt)("p",null,"By creating a new Dark Mode global broadcaster in the Photo View component, we can override the root level Dark Mode broadcaster\u2019s value and ensure that any components placed within the Photo View always honor the dark appearance. Now, the exact same Inspector component we used before will automatically switch to dark mode, since it\u2019s now receiving the Photo View component\u2019s dark mode value."),(0,r.kt)("p",null,"\u901a\u8fc7\u5728\u7167\u7247\u89c6\u56fe\u7ec4\u4ef6\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6697\u6a21\u5f0f\u5168\u5c40\u53d1\u9001\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u8986\u76d6\u6839\u7ea7\u6697\u6a21\u5f0f\u53d1\u9001\u5668\u7684\u503c\uff0c\u5e76\u786e\u4fdd\u5728\u7167\u7247\u89c6\u56fe\u4e2d\u653e\u7f6e\u7684\u4efb\u4f55\u7ec4\u4ef6\u603b\u662f\u9075\u5faa\u9ed1\u6697\u5916\u89c2\u3002\u73b0\u5728\uff0c\u6211\u4eec\u4e4b\u524d\u4f7f\u7528\u7684\u68c0\u67e5\u5668\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u5207\u6362\u5230\u6697\u6a21\u5f0f\uff0c\u56e0\u4e3a\u5b83\u73b0\u5728\u63a5\u6536photoview\u7ec4\u4ef6\u7684\u6697\u6a21\u5f0f\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://origami.design/public/images/documentation/variables-receivers2-diagram.png",alt:null})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"conclusion-\u7ed3\u8bba"},"Conclusion \u7ed3\u8bba"),(0,r.kt)("p",null,"Variables are a key tool to organize and simplify your Origami prototypes, allowing you to make your patch graph easier to understand, to consolidate logic, and even enable powerful new capabilities for components."),(0,r.kt)("p",null,"You can start small, by just using local variable broadcasters & receivers to make your patch graph more organized. As you advance to building custom components for yourself or others, consider ways global variables can make your components more powerful and easier to use."),(0,r.kt)("p",null,"\u53d8\u91cf\u662f\u7ec4\u7ec7\u548c\u7b80\u5316Origami\u539f\u578b\u7684\u5173\u952e\u5de5\u5177\uff0c\u5141\u8bb8\u60a8\u4f7f\u6a21\u5757\u56fe\u66f4\u5bb9\u6613\u7406\u89e3\uff0c\u6574\u5408\u903b\u8f91\uff0c\u751a\u81f3\u4e3a\u7ec4\u4ef6\u63d0\u4f9b\u5f3a\u5927\u7684\u65b0\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u5c0f\u5904\u5f00\u59cb\uff0c\u901a\u8fc7\u4f7f\u7528\u5c40\u90e8\u53ef\u53d8\u53d1\u9001\u5668\u548c\u63a5\u6536\u5668\u6765\u8ba9\u4f60\u7684\u6a21\u5757\u56fe\u66f4\u6709\u7ec4\u7ec7\u3002\u5728\u4e3a\u81ea\u5df1\u6216\u4ed6\u4eba\u6784\u5efa\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u8003\u8651\u5168\u5c40\u53d8\u91cf\u53ef\u4ee5\u4f7f\u7ec4\u4ef6\u66f4\u5f3a\u5927\u3001\u66f4\u5bb9\u6613\u4f7f\u7528\u7684\u65b9\u6cd5\u3002"))}u.isMDXComponent=!0}}]);