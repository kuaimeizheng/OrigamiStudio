(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[91874],{61192:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/agilets.75df542.640.png 640w",images:[{path:a.p+"assets/ideal-img/agilets.75df542.640.png",width:640,height:320}],src:a.p+"assets/ideal-img/agilets.75df542.640.png",toString:function(){return a.p+"assets/ideal-img/agilets.75df542.640.png"},placeholder:void 0,width:640,height:320},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVQImSXIQQ6CMBAAwL4AE+kWtltiNAIRD4DSrFCgGv0FB59iOBn/wc1PenCOIxo7du7B7Jm9tUNVXZi96+/1qWe+CQkASkkF6zCUABKAiIJV8H9BxnTODaNv255MkufF/HpP01OCQk0CNRXH+lCUaZbHqLe7/Tx/luULUazJCNSmLK9pVplkg5pCgCjGc8NICZL5AfjXGdvHLaACAAAAAElFTkSuQmCC"}},81049:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/algolia.1026fe5.640.png 640w",images:[{path:a.p+"assets/ideal-img/algolia.1026fe5.640.png",width:640,height:320}],src:a.p+"assets/ideal-img/algolia.1026fe5.640.png",toString:function(){return a.p+"assets/ideal-img/algolia.1026fe5.640.png"},placeholder:void 0,width:640,height:320},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeklEQVQImR3JOw7CMAwA0Nz/cjAwMVZI0Fa1m1ax42+grO+VeQaAquq9K1FnJhUlEoC9HlREkrsza600Tcv98ZrXJpd4717M3czN0yw66+3pry1GhF7oJTNGppkgbojADc8D3HWMzIx/j0CUuvO6np9326AtC48Rv/4CcwqP2N5uFZ8AAAAASUVORK5CYII="}},43159:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>z,prepareUserState:()=>H});var s=a(67294),c=a(86010),r=a(36136),o=a(97325),l=a(76775),n=a(23777),i=a(82401);function m(e,t){const a=[...e];return a.sort(((e,a)=>t(e)>t(a)?1:t(a)>t(e)?-1:0)),a}const d=[{title:"AgileTs",description:"Global State and Logic Framework for reactive Applications",preview:a(61192),website:"https://agile-ts.org/",source:"https://github.com/agile-ts/documentation",tags:["opensource","Logic"]},{title:"Algolia Docsearch",description:"The best search experience for docs, integrates in minutes, for free",preview:a(81049),website:"https://docsearch.algolia.com/",source:"https://github.com/algolia/docsearch-website",tags:["opensource","Scroll"]}],u={"\u63a8\u8350":{label:(0,o.I)({message:"\u63a8\u8350"}),description:(0,o.I)({message:"\u63a8\u8350",id:"showcase.tag.\u63a8\u8350.description"}),color:"#e9669e"},opensource:{label:(0,o.I)({message:"Loop"}),description:(0,o.I)({message:"\u5faa\u73af",id:"showcase.tag.opensource.description"}),color:"#39ca30"},Scroll:{label:(0,o.I)({message:"Scroll"}),description:(0,o.I)({message:"\u6eda\u52a8",id:"showcase.tag.Scroll.description"}),color:"#dfd545"},Logic:{label:(0,o.I)({message:"Logic"}),description:(0,o.I)({message:"\u903b\u8f91",id:"showcase.tag.Logic.description"}),color:"#a44fb7"},Interaction:{label:(0,o.I)({message:"Interaction"}),description:(0,o.I)({message:"\u4ea4\u4e92",id:"showcase.tag.Interaction.description"}),color:"#127f82"},Layers:{label:(0,o.I)({message:"Layers"}),description:(0,o.I)({message:"\u56fe\u5c42",id:"showcase.tag.Layers.description"}),color:"#fe6829"},Utilities:{label:(0,o.I)({message:"Utilities"}),description:(0,o.I)({message:"\u5de5\u5177",id:"showcase.tag.Utilities.description"}),color:"#8c2f00"},Apple:{label:(0,o.I)({message:"Apple"}),description:(0,o.I)({message:"\u82f9\u679c",id:"showcase.tag.Apple.description"}),color:"#4267b2"},Data:{label:(0,o.I)({message:"Data"}),description:(0,o.I)({message:"\u6570\u636e",id:"showcase.tag.Data.description"}),color:"#14cfc3"},rtl:{label:(0,o.I)({message:"Text"}),description:(0,o.I)({message:"\u6587\u672c",id:"showcase.tag.rtl.description"}),color:"#ffcfc3"}},g=Object.keys(u);const h=function(){let e=d;return e=m(e,(e=>e.title.toLowerCase())),e=m(e,(e=>!e.tags.includes("\u63a8\u8350"))),e}();var p=a(87462);const E="checkboxLabel_vxMa",f="tags";function w(e){return new URLSearchParams(e).getAll(f)}function A(e,t){let{id:a,icon:c,label:r,tag:o,...n}=e;const i=(0,l.TH)(),m=(0,l.k6)(),[d,u]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const e=w(i.search);u(e.includes(o))}),[o,i]);const g=(0,s.useCallback)((()=>{const e=function(e,t){const a=e.indexOf(t);if(-1===a)return e.concat(t);const s=[...e];return s.splice(a,1),s}(w(i.search),o),t=function(e,t){const a=new URLSearchParams(e);return a.delete(f),t.forEach((e=>a.append(f,e))),a.toString()}(i.search,e);m.push({...i,search:t,state:H()})}),[o,i,m]);return s.createElement(s.Fragment,null,s.createElement("input",(0,p.Z)({type:"checkbox",id:a,className:"screen-reader-only",onKeyDown:e=>{"Enter"===e.key&&g()},onFocus:e=>{var t;e.relatedTarget&&(null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("focus")))},onBlur:e=>{var t;null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("blur"))},onChange:g,checked:d},n)),s.createElement("label",{ref:t,htmlFor:a,className:E},r,c))}const b=s.forwardRef(A),v={checkboxLabel:"checkboxLabel_WGTY"},I="operator";function C(e){return new URLSearchParams(e).get(I)??"OR"}function L(){const e="showcase_filter_toggle",t=(0,l.TH)(),a=(0,l.k6)(),[r,o]=(0,s.useState)(!1);(0,s.useEffect)((()=>{o("AND"===C(t.search))}),[t]);const n=(0,s.useCallback)((()=>{o((e=>!e));const e=new URLSearchParams(t.search);e.delete(I),r||e.append(I,"AND"),a.push({...t,search:e.toString(),state:H()})}),[r,t,a]);return s.createElement("div",null,s.createElement("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:n,onKeyDown:e=>{"Enter"===e.key&&n()},checked:r}),s.createElement("label",{htmlFor:e,className:(0,c.Z)(v.checkboxLabel,"shadow--md")},s.createElement("span",{className:v.checkboxLabelOr},"\u6216"),s.createElement("span",{className:v.checkboxLabelAnd},"\u548c")))}var N=a(83699),k=a(15944),S=a(73935),_=a(66441);const x="tooltip_j_Qe",y="tooltipArrow_NLUH";function F(e){let{children:t,id:a,anchorEl:c,text:r}=e;const[o,l]=(0,s.useState)(!1),[n,i]=(0,s.useState)(null),[m,d]=(0,s.useState)(null),[u,g]=(0,s.useState)(null),[h,E]=(0,s.useState)(null),{styles:f,attributes:w}=(0,_.D)(n,m,{modifiers:[{name:"arrow",options:{element:u}},{name:"offset",options:{offset:[0,8]}}]}),A=(0,s.useRef)(null),b=`${a}_tooltip`;return(0,s.useEffect)((()=>{E(c?"string"==typeof c?document.querySelector(c):c:document.body)}),[h,c]),(0,s.useEffect)((()=>{const e=["mouseenter","focus"],t=["mouseleave","blur"],a=()=>{""!==r&&(null==n||n.removeAttribute("title"),A.current=window.setTimeout((()=>{l(!0)}),400))},s=()=>{clearInterval(A.current),l(!1)};return n&&(e.forEach((e=>{n.addEventListener(e,a)})),t.forEach((e=>{n.addEventListener(e,s)}))),()=>{n&&(e.forEach((e=>{n.removeEventListener(e,a)})),t.forEach((e=>{n.removeEventListener(e,s)})))}}),[n,r]),s.createElement(s.Fragment,null,s.cloneElement(t,{ref:i,"aria-describedby":o?b:void 0}),h?S.createPortal(o&&s.createElement("div",(0,p.Z)({id:b,role:"tooltip",ref:d,className:x,style:f.popper},w.popper),r,s.createElement("span",{ref:g,className:y,style:f.arrow})),h):h)}const Z={showcaseCardImage:"showcaseCardImage_wjKy",showcaseCardHeader:"showcaseCardHeader_H8b9",showcaseCardTitle:"showcaseCardTitle_ZxTI",svgIconFavorite:"svgIconFavorite_XQCb",showcaseCardSrcBtn:"showcaseCardSrcBtn_F6t0",showcaseCardBody:"showcaseCardBody_bvOP",cardFooter:"cardFooter_Xq1d",tag:"tag_jo6t",textLabel:"textLabel_lQex",colorLabel:"colorLabel_D_Fl"},T=s.forwardRef(((e,t)=>{let{label:a,color:c,description:r}=e;return s.createElement("li",{ref:t,className:Z.tag,title:r},s.createElement("span",{className:Z.textLabel},a.toLowerCase()),s.createElement("span",{className:Z.colorLabel,style:{backgroundColor:c}}))}));function U(e){let{tags:t}=e;const a=m(t.map((e=>({tag:e,...u[e]}))),(e=>g.indexOf(e.tag)));return s.createElement(s.Fragment,null,a.map(((e,t)=>{const a=`showcase_card_tag_${e.tag}`;return s.createElement(F,{key:t,text:e.description,anchorEl:"#__docusaurus",id:a},s.createElement(T,(0,p.Z)({key:t},e)))})))}function B(e){let{user:t}=e;return s.createElement("li",{key:t.title,className:"card shadow--md"},s.createElement("div",{className:(0,c.Z)("card__image",Z.showcaseCardImage)},s.createElement(k.Z,{img:t.preview,alt:t.title})),s.createElement("div",{className:"card__body"},s.createElement("div",{className:(0,c.Z)(Z.showcaseCardHeader)},s.createElement("h4",{className:Z.showcaseCardTitle},s.createElement(N.Z,{href:t.website,className:Z.showcaseCardLink},t.title)),t.tags.includes("favorite")&&s.createElement(FavoriteIcon,{svgClass:Z.svgIconFavorite,size:"small"}),t.source&&s.createElement(N.Z,{href:t.source,className:(0,c.Z)("button button--secondary button--sm",Z.showcaseCardSrcBtn)},s.createElement(o.Z,{id:"showcase.card.sourceLink"},"source"))),s.createElement("p",{className:Z.showcaseCardBody},t.description)),s.createElement("ul",{className:(0,c.Z)("card__footer",Z.cardFooter)},s.createElement(U,{tags:t.tags})))}const R=s.memo(B),D={filterCheckbox:"filterCheckbox_IByC",checkboxList:"checkboxList_TMoE",checkboxListItem:"checkboxListItem_bvhq",searchContainer:"searchContainer_AU74",showcaseList:"showcaseList_IWjR",showcaseFavorite:"showcaseFavorite_dfS5",showcaseFavoriteHeader:"showcaseFavoriteHeader_INmp",svgIconFavoriteXs:"svgIconFavoriteXs_REdU",svgIconFavorite:"svgIconFavorite_glga"};(0,o.I)({message:"Docusaurus Site Showcase"}),(0,o.I)({message:"List of websites people are building with Docusaurus"});function H(){var e;if(r.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}const O="name";function P(e){return new URLSearchParams(e).get(O)}function M(){const e=(0,l.TH)(),[t,a]=(0,s.useState)("OR"),[c,r]=(0,s.useState)([]),[o,n]=(0,s.useState)(null);return(0,s.useEffect)((()=>{r(w(e.search)),a(C(e.search)),n(P(e.search)),function(e){var t;const{scrollTopPosition:a,focusedElementId:s}=e??{scrollTopPosition:0,focusedElementId:void 0};null==(t=document.getElementById(s))||t.focus(),window.scrollTo({top:a})}(e.state)}),[e]),(0,s.useMemo)((()=>function(e,t,a,s){return s&&(e=e.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&("AND"===a?t.every((t=>e.tags.includes(t))):t.some((t=>e.tags.includes(t))))))}(h,c,t,o)),[c,t,o])}function Q(){const e=M();!function(){const{selectMessage:e}=(0,n.c)()}();return s.createElement("section",{className:"container margin-top--l margin-bottom--lg"},s.createElement("div",{className:(0,c.Z)("margin-bottom--sm",D.filterCheckbox)},s.createElement("div",null,s.createElement("h2",null,s.createElement(o.Z,{id:"showcase.filters.title"},"\u7b5b\u9009")),s.createElement("span",null,e.length)),s.createElement(L,null)),s.createElement("ul",{className:(0,c.Z)("clean-list",D.checkboxList)},g.map(((e,t)=>{const{label:a,description:c,color:r}=u[e],o=`showcase_checkbox_id_${e}`;return s.createElement("li",{key:t,className:D.checkboxListItem},s.createElement(F,{id:o,text:c,anchorEl:"#__docusaurus"},s.createElement(b,{tag:e,id:o,label:a})))}))))}const X=h.filter((e=>e.tags.includes("favorite"))),K=h.filter((e=>!e.tags.includes("favorite")));function j(){const e=(0,l.k6)(),t=(0,l.TH)(),[a,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{c(P(t.search))}),[t]),s.createElement("div",{className:D.searchContainer},s.createElement("input",{id:"searchbar",placeholder:(0,o.I)({message:"\u8f93\u5165\u641c\u7d22",id:"showcase.searchBar.placeholder"}),value:a??void 0,onInput:a=>{c(a.currentTarget.value);const s=new URLSearchParams(t.search);s.delete(O),a.currentTarget.value&&s.set(O,a.currentTarget.value),e.push({...t,search:s.toString(),state:H()}),setTimeout((()=>{var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}}))}function V(){const e=M();return 0===e.length?s.createElement("section",{className:"margin-top--lg margin-bottom--xl"},s.createElement("div",{className:"container padding-vert--md text--center"},s.createElement("h2",null,s.createElement(o.Z,{id:"showcase.usersList.noResult"},"No result")),s.createElement(j,null))):s.createElement("section",{className:"margin-top--lg margin-bottom--xl"},e.length===h.length?s.createElement(s.Fragment,null,s.createElement("div",{className:D.showcaseFavorite},s.createElement("div",{className:"container"},s.createElement("div",{className:(0,c.Z)("margin-bottom--md",D.showcaseFavoriteHeader)},s.createElement("h2",null,s.createElement(o.Z,{id:"showcase.favoritesList.title"},"\u63a8\u8350")),s.createElement(j,null)),s.createElement("ul",{className:(0,c.Z)("container","clean-list",D.showcaseList)},X.map((e=>s.createElement(R,{key:e.title,user:e})))))),s.createElement("div",{className:"container margin-top--lg"},s.createElement("h2",{className:D.showcaseHeader},s.createElement(o.Z,{id:"showcase.usersList.allUsers"},"\u5168\u90e8")),s.createElement("ul",{className:(0,c.Z)("clean-list",D.showcaseList)},K.map((e=>s.createElement(R,{key:e.title,user:e})))))):s.createElement("div",{className:"container"},s.createElement("div",{className:(0,c.Z)("margin-bottom--md",D.showcaseFavoriteHeader)},s.createElement(j,null)),s.createElement("ul",{className:(0,c.Z)("clean-list",D.showcaseList)},e.map((e=>s.createElement(R,{key:e.title,user:e}))))))}function z(){return s.createElement(i.Z,null,s.createElement("main",{className:"margin-vert--lg"},s.createElement(Q,null),s.createElement(V,null)))}}}]);