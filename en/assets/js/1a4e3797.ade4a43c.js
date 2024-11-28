"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[97920],{23777:(e,t,r)=>{r.d(t,{c:()=>u});var s=r(67294),a=r(39962);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},97604:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var s=r(67294),a=r(39962),n=r(98363),c=r(31514),l=r(83699),o=r(97325),u=r(23777),h=r(1728),i=r(16550),m=r(51048);const d=function(){const e=(0,m.Z)(),t=(0,i.k6)(),r=(0,i.TH)(),{siteConfig:{baseUrl:s}}=(0,a.Z)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l,searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var p=r(5202),g=r(76654),x=r(21523),f=r(77976),y=r(79395),S=r(64056),C=r(70318),j=r(5901);const I={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var v=r(85893);function w(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:r,searchContext:n,searchVersion:l,updateSearchPath:i,updateSearchContext:m}=d(),[x,f]=(0,s.useState)(r),[y,C]=(0,s.useState)(),[w,P]=(0,s.useState)(),_=`${e}${l}`,b=(0,s.useMemo)((()=>x?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:x}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[x]);(0,s.useEffect)((()=>{i(x),y&&(x?y(x,(e=>{P(e)})):P(void 0))}),[x,y]);const F=(0,s.useCallback)((e=>{f(e.target.value)}),[]);return(0,s.useEffect)((()=>{r&&r!==x&&f(r)}),[r]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(_,n);C((()=>(0,g.v)(e,t,100)))}()}),[n,_]),(0,v.jsxs)(s.Fragment,{children:[(0,v.jsxs)(c.Z,{children:[(0,v.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,v.jsx)("title",{children:b})]}),(0,v.jsxs)("div",{className:"container margin-vert--lg",children:[(0,v.jsx)("h1",{children:b}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:(0,h.Z)("col",{[I.searchQueryColumn]:Array.isArray(j.Kc),"col--9":Array.isArray(j.Kc),"col--12":!Array.isArray(j.Kc)}),children:(0,v.jsx)("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:F,value:x,autoComplete:"off",autoFocus:!0})}),Array.isArray(j.Kc)?(0,v.jsx)("div",{className:(0,h.Z)("col","col--3","padding-left--none",I.searchContextColumn),children:(0,v.jsxs)("select",{name:"search-context",className:I.searchContextInput,id:"context-selector",value:n,onChange:e=>m(e.target.value),children:[(0,v.jsx)("option",{value:"",children:j.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),j.Kc.map((e=>(0,v.jsx)("option",{value:e,children:e},e)))]})}):null]}),!y&&x&&(0,v.jsx)("div",{children:(0,v.jsx)(S.Z,{})}),w&&(w.length>0?(0,v.jsx)("p",{children:t(w.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))}):(0,v.jsx)("p",{children:(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,v.jsx)("section",{children:w&&w.map((e=>(0,v.jsx)(R,{searchResult:e},e.document.i)))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(j.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,v.jsxs)("article",{className:I.searchResultItem,children:[(0,v.jsx)("h2",{children:(0,v.jsx)(l.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,x.C)(h,a):(0,f.o)(h,(0,y.m)(n,"t"),a,100)}})}),u.length>0&&(0,v.jsx)("p",{className:I.searchResultItemPath,children:(0,C.e)(u)}),o&&(0,v.jsx)("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,y.m)(n,"t"),a,100)}})]})}const P=function(){return(0,v.jsx)(n.Z,{children:(0,v.jsx)(w,{})})}}}]);