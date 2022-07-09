"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[2529],{39058:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(63366),n=a(67294),l=a(86010),i=a(82164),o=a(87524),s=a(39960),m=a(95999),c="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",v="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function p(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:v,activeClassName:f},e.title))})))))}var h=a(13102);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(h.Zo,{component:E,props:e})}function _(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(p,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,N),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},30390:function(e,t,a){a.d(t,{Z:function(){return A}});var r=a(67294),n=a(86010),l=a(9460),i=a(44996);function o(e){var t,a=e.children,n=e.className,o=(0,l.C)(),s=o.frontMatter,m=o.assets,c=(0,i.C)().withBaseUrl,u=null!=(t=m.image)?t:s.image;return r.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:c(u,{absolute:!0})}),a)}var s=a(39960),m="title_f1Hy";function c(e){var t=e.className,a=(0,l.C)(),i=a.metadata,o=a.isBlogPostPage,c=i.permalink,u=i.title,d=o?"h1":"h2";return r.createElement(d,{className:(0,n.Z)(m,t),itemProp:"headline"},o?u:r.createElement(s.Z,{itemProp:"url",to:c},u))}var u=a(95999),d=a(88824),g="container_mt6G";function v(e){var t,a=e.readingTime,n=(t=(0,d.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,n(a))}function f(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return r.createElement(r.Fragment,null," \xb7 ")}function h(e){var t=e.className,a=(0,l.C)().metadata,i=a.date,o=a.formattedDate,s=a.readingTime;return r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md",t)},r.createElement(f,{date:i,formattedDate:o}),void 0!==s&&r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(v,{readingTime:s})))}function E(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function b(e){var t=e.author,a=e.className,l=t.name,i=t.title,o=t.url,s=t.imageURL,m=t.email,c=o||m&&"mailto:"+m||void 0;return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},s&&r.createElement(E,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:l})),l&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},l))),i&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}var _="authorCol_Hf19",N="imageOnlyAuthorRow_pa_O",Z="imageOnlyAuthorCol_G86a";function P(e){var t=e.className,a=(0,l.C)(),i=a.metadata.authors,o=a.assets;if(0===i.length)return null;var s=i.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?N:"row",t)},i.map((function(e,t){var a;return r.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?Z:_),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL})}))})))}function k(){return r.createElement("header",null,r.createElement(c,null),r.createElement(h,null),r.createElement(P,null))}var T=a(18780),w=a(80210);function C(e){var t=e.children,a=e.className,i=(0,l.C)().isBlogPostPage;return r.createElement("div",{id:i?T.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},r.createElement(w.Z,null,t))}var y=a(84881),B=a(71526),F=a(87462),I=a(63366),x=["blogPostTitle"];function L(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function M(e){var t=e.blogPostTitle,a=(0,I.Z)(e,x);return r.createElement(s.Z,(0,F.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(L,null))}var R="blogPostFooterDetailsFull_mRVl";function U(){var e=(0,l.C)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,o=t.title,s=t.editUrl,m=t.hasTruncateMarker,c=!a&&m,u=i.length>0;return u||c||s?r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",a&&R)},u&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},r.createElement(B.Z,{tags:i})),a&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(y.Z,{editUrl:s})),c&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":u})},r.createElement(M,{blogPostTitle:o,to:t.permalink}))):null}function A(e){var t=e.children,a=e.className,i=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(o,{className:(0,n.Z)(i,a)},r.createElement(k,null),r.createElement(C,null,t),r.createElement(U,null))}},84881:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(67294),n=a(95999),l=a(35281),i=a(87462),o=a(63366),s=a(86010),m="iconEdit_Z9Sw",c=["className"];function u(e){var t=e.className,a=(0,o.Z)(e,c);return r.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},r.createElement(u,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a(86010),l=a(39960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return r.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},13008:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(39960),i="tag_zVej",o="tagRegular_sFm0",s="tagWithCount_h2kH";function m(e){var t=e.permalink,a=e.label,m=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,m?s:o)},a,m&&r.createElement("span",null,m))}},71526:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(95999),i=a(13008),o="tags_jXut",s="tag_QGVx";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{label:t,permalink:a}))}))))}},9460:function(e,t,a){a.d(t,{C:function(){return o},n:function(){return i}});var r=a(67294),n=a(69688),l=r.createContext(null);function i(e){var t=e.children,a=e.content,n=e.isBlogPostPage,i=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==n&&n});return r.createElement(l.Provider,{value:i},t)}function o(){var e=(0,r.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},88824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(67294),n=a(52263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}}}]);