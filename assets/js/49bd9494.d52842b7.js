"use strict";(self.webpackChunkorigami_studio=self.webpackChunkorigami_studio||[]).push([[28233],{3905:(A,w,M)=>{M.d(w,{Zo:()=>t,kt:()=>n});var D=M(67294);function G(A,w,M){return w in A?Object.defineProperty(A,w,{value:M,enumerable:!0,configurable:!0,writable:!0}):A[w]=M,A}function Y(A,w){var M=Object.keys(A);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(A);w&&(D=D.filter((function(w){return Object.getOwnPropertyDescriptor(A,w).enumerable}))),M.push.apply(M,D)}return M}function g(A){for(var w=1;w<arguments.length;w++){var M=null!=arguments[w]?arguments[w]:{};w%2?Y(Object(M),!0).forEach((function(w){G(A,w,M[w])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(M)):Y(Object(M)).forEach((function(w){Object.defineProperty(A,w,Object.getOwnPropertyDescriptor(M,w))}))}return A}function B(A,w){if(null==A)return{};var M,D,G=function(A,w){if(null==A)return{};var M,D,G={},Y=Object.keys(A);for(D=0;D<Y.length;D++)M=Y[D],w.indexOf(M)>=0||(G[M]=A[M]);return G}(A,w);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(A);for(D=0;D<Y.length;D++)M=Y[D],w.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(A,M)&&(G[M]=A[M])}return G}var h=D.createContext({}),e=function(A){var w=D.useContext(h),M=w;return A&&(M="function"==typeof A?A(w):g(g({},w),A)),M},t=function(A){var w=e(A.components);return D.createElement(h.Provider,{value:w},A.children)},I={inlineCode:"code",wrapper:function(A){var w=A.children;return D.createElement(D.Fragment,{},w)}},i=D.forwardRef((function(A,w){var M=A.components,G=A.mdxType,Y=A.originalType,h=A.parentName,t=B(A,["components","mdxType","originalType","parentName"]),i=e(M),n=G,C=i["".concat(h,".").concat(n)]||i[n]||I[n]||Y;return M?D.createElement(C,g(g({ref:w},t),{},{components:M})):D.createElement(C,g({ref:w},t))}));function n(A,w){var M=arguments,G=w&&w.mdxType;if("string"==typeof A||G){var Y=M.length,g=new Array(Y);g[0]=i;var B={};for(var h in w)hasOwnProperty.call(w,h)&&(B[h]=w[h]);B.originalType=A,B.mdxType="string"==typeof A?A:G,g[1]=B;for(var e=2;e<Y;e++)g[e]=M[e];return D.createElement.apply(null,g)}return D.createElement.apply(null,M)}i.displayName="MDXCreateElement"},16466:(A,w,M)=>{M.r(w),M.d(w,{assets:()=>h,contentTitle:()=>g,default:()=>I,frontMatter:()=>Y,metadata:()=>B,toc:()=>e});var D=M(87462),G=(M(67294),M(3905));const Y={sidebar_position:5},g="Length \u957f\u5ea6",B={unversionedId:"documentation/Math/Length",id:"documentation/Math/Length",title:"Length \u957f\u5ea6",description:"Calculate the length of a number, point, point 3D, or vec4, where the length is the square root of each dimension squared (ex: calculate the hypotenuse of a triangle with a point X and Y).",source:"@site/docs/documentation/Math/Length.md",sourceDirName:"documentation/Math",slug:"/documentation/Math/Length",permalink:"/OrigamiStudio/docs/documentation/Math/Length",draft:!1,editUrl:"https://github.com/kuaimeizheng/OrigamiStudio/tree/main/docs/documentation/Math/Length.md",tags:[],version:"current",lastUpdatedBy:"\u84af\u7f8e\u653f",lastUpdatedAt:1667734867,formattedLastUpdatedAt:"2022\u5e7411\u67086\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentionSidebar",previous:{title:"Cosine \u4f59\u5f26\u51fd\u6570",permalink:"/OrigamiStudio/docs/documentation/Math/Cosine"},next:{title:"Math Expression \u6570\u5b66\u8868\u8fbe\u5f0f",permalink:"/OrigamiStudio/docs/documentation/Math/Math Expression"}},h={},e=[{value:"Input \u8f93\u5165",id:"input-\u8f93\u5165",level:3},{value:"Output \u8f93\u51fa",id:"output-\u8f93\u51fa",level:3},{value:"Related Patches \u76f8\u5173\u6a21\u5757",id:"related-patches-\u76f8\u5173\u6a21\u5757",level:3}],t={toc:e};function I(A){let{components:w,...Y}=A;return(0,G.kt)("wrapper",(0,D.Z)({},t,Y,{components:w,mdxType:"MDXLayout"}),(0,G.kt)("h1",{id:"length-\u957f\u5ea6"},"Length \u957f\u5ea6"),(0,G.kt)("p",null,"Calculate the length of a number, point, point 3D, or vec4, where the length is the square root of each dimension squared (ex: calculate the hypotenuse of a triangle with a point X and Y)."),(0,G.kt)("p",null,"\u8ba1\u7b97\u6570\u5b57\u3001\u70b9\u30013D \u70b9\u6216 Vec4 \u7684\u957f\u5ea6\uff0c\u5176\u4e2d\u957f\u5ea6\u662f\u6bcf\u4e2a\u65b9\u5f62\u5c3a\u5bf8\u7684\u5e73\u65b9\u6839\uff08\u4f8b\u5982\uff1a\u8ba1\u7b97\u5df2\u77e5X\u3001Y\u7684\u4e09\u89d2\u5f62\u7684\u659c\u8fb9\uff09\u3002"),(0,G.kt)("p",null,"Right-click to change the type (ex: number, position, rotation)."),(0,G.kt)("p",null,"\u53f3\u952e\u66f4\u6539\u8f93\u5165\u63a5\u53e3\u63a5\u5165\u503c\u7c7b\u578b\uff08\u4f8b\u5982\uff1a\u6570\u5b57\uff0c\u5750\u6807\uff0c\u89d2\u5ea6\uff09\u3002"),(0,G.kt)("p",null,(0,G.kt)("img",{alt:"Image",src:M(61055).Z,width:"1506",height:"200"})),(0,G.kt)("h3",{id:"input-\u8f93\u5165"},"Input \u8f93\u5165"),(0,G.kt)("p",null,"A value to calculate length."),(0,G.kt)("p",null,"\u7528\u4e8e\u8ba1\u7b97\u957f\u5ea6\u7684\u503c\u3002"),(0,G.kt)("h3",{id:"output-\u8f93\u51fa"},"Output \u8f93\u51fa"),(0,G.kt)("p",null,"The calculated length."),(0,G.kt)("p",null,"\u8ba1\u7b97\u957f\u5ea6\u3002"),(0,G.kt)("hr",null),(0,G.kt)("h3",{id:"related-patches-\u76f8\u5173\u6a21\u5757"},"Related Patches \u76f8\u5173\u6a21\u5757"),(0,G.kt)("p",null,(0,G.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point"},"Point \u70b9")),(0,G.kt)("p",null,(0,G.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Point%203D"},"Point 3D \u4e09\u7ef4\u70b9")),(0,G.kt)("p",null,(0,G.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Utility/Vec4"},"Vec4 \u56db\u7ef4")),(0,G.kt)("p",null,(0,G.kt)("a",{parentName:"p",href:"/OrigamiStudio/docs/documentation/Math/Absolute%20Value"},"Absolute Value \u7edd\u5bf9\u503c")))}I.isMDXComponent=!0},61055:(A,w,M)=>{M.d(w,{Z:()=>D});const D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABeIAAADICAYAAACEcJHFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO3d26uVVRcH4P6lDsOguuh0E4R0k1eRlhWB2eEiCA8dqCyosMKikqQSqcwykSI6GVEaHciCMMqU6IgRlXnIUN+PuWAv1t57bf0yd2OuuZ4FA/rc7vL7zWfMi58v7z4lIjojAwYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGYlYyOEWwlosBBhhggAEGGGCAAQYYYIABBhhggAEGGGCAgZi1DBTxFsyCMcAAAwwwwAADDDDAAAMMMMAAAwwwwAADDIQiHgIXAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwEA3ihl4Ir6CQzAyYIABBhhggAEGGGCAAQYYYIABBhhggAEGotkMFPEVHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEM1moIiv4BCMDBhggAEGGGCAAQYYYIABBhhggAEGGGCAgWg2A0V8BYdgZMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDESzGSjiKzgEIwMGGGCAAQYYYIABBhhggAEGGGCAAQYYYCCazUARX8EhGBkwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPRbAaK+AoOwciAAQYYYIABBhhggAEGGGCAAQYYYIABBhiIZjNQxFdwCEYGDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBANJuBIr6CQzAyYIABBhhggAEGGGCAAQYYYIABBhhggAEGotkMFPEVHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEM1moIiv4BCMDBhggAEGGGCAAQYYYIABBhhggAEGGGCAgWg2A0V8BYdgZMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDESzGSjiKzgEIwMGGGCAAQYYYIABBhhggAEGGGCAAQYYYCCazUARX8EhGBkwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPRbAaK+AoOwciAAQYYYIABBhhggAEGGGCAAQYYYIABBhiIZjNQxFdwCEYGDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBANJuBIr6CQzAyYIABBhhggAEGGGCAAQYYYIABBhhggAEGotkMFPEVHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEM1moIiv4BCMDBhggAEGGGCAAQYYYIABBhhggAEGGGCAgWg2A0V8BYdgZMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDESzGSjiKzgEIwMGGGCAAQYYYIABBhhggAEGGGCAAQYYYCCazUARX8EhGBkwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPRbAaK+AoOwciAAQYYYIABBhhggAEGGGCAAQYYYIABBhiIZjNQxFdwCEYGDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBANJuBIr6CQzAyYIABBhhggAEGGGCAAQYYYIABBhhggAEGotkMFPEVHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEM1moIiv4BCMDBhggAEGGGCAAQYYYIABBhhggAEGGGCAgWg2A0V8BYdgZMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDESzGSjiKzgEIwMGGGCAAQYYYIABBhhggAEGGGCAAQYYYCCazUARX8EhGBkwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPRbAaK+AoOwciAAQYYYIABBhhggAEGGGCAAQYYYIABBhiIZjNQxFdwCEYGDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBANJuBIr6CQzAyYIABBhhggAEGGGCAAQYYYIABBhhggAEGotkMFPEVHIKRAQMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEM1moIiv4BCMDBhggAEGGGCAAQYYYIABBhhggAEGGGCAgWg2A0V8BYdgZMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDESzGSjiKzgEIwMGGGCAAQYYYIABBhhggAEGGGCAAQYYYCCazUARX8EhGBkwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPRbAaK+AoOwciAAQYYYIABBhhggAEGGGCAAQYYYIABBhiIZjNQxFdwCEYGDDDAAAMMMMDAPzMwZ86c7owzzjBjmEE5e/vizmSAAQYYYIABBhiIEctAEV/BIRgZMMAAAwwwwAADxzdw1llndeeee243d+7cbt68ed1ll13WXX755WaMMihnXs6+GCgWigm74/5kgAEGGGCAAQYYiBHIQBFfwSEYGTDAAAMMMMAAAzMbOPPMM3ul6yWXXKJ8r6AMr6mULyaKjWLEDrlHGWCAAQYYYIABBqLiDBTxFRyCkQEDDDDAAAMMMDBzCX/++ed3l156aXrxa+rMoNgoRpTx7lH3KAMMMMAAAwwwEBVnoIiv4BCMDBhggAEGGGCAgekGyvvAy9POSvj8srv2KUaKlWLGLrlPGWCAAQYYYIABBqLCDBTxFRyCkQEDDDDAAAMMMDC9hC/v/y6vHskuec1oZFCsFDPKePep+5QBBhhggAEGGIgKM1DEV3AIRgYMMMAAAwwwwMDkEn7iaXg/kDW/4B6VKVYmnopXxrtT3akMMMAAAwwwwEBUloEivoJDMDJggAEGGGCAAQYml/Bl5s6dm17umtHKoJgZNGSv3K0MMMAAAwwwwAADUUkGivgKDsHIgAEGGGCAAQYYmFzEz5kzp5s3b156sWtGK4NiRhHvPnWfMsAAAwwwwAADUWEGivgKDsHIgAEGGGCAAQYYmPw0fBmvpckvtkdtipmpjuyW+5UBBhhggAEGGGAgKshAEV/BIRgZMMAAAwwwwAADk4v4008/Pb3UNaOZQbGjiHenulMZYIABBhhggIGoLANFfAWHYGTAAAMMMMAAAwwo4rML7FZGEe8+dZ8ywAADDDDAAANRYQaK+AoOwciAAQYYYIABBsbdwNTXiXgiPr/QbqWI93qa/P02MmCAAQYYYICBkIEiHgIXAQMMMMAAAwwwkG9gagmviM8vtEd1Jvwo4vP32siAAQYYYIABBhiIfgaeiLcQFoIBBhhggAEGGEg3oIjPL7BbGUV8/j4bGTDAAAMMMMAAAzEtA0W8xbAYDDDAAAMMMMBAugFFfH6B3coo4vP32ciAAQYYYIABBhgIRTwELgIGGGCAAQYYYKA+A4r4/AK7lVHE5++zkQEDDDDAAAMMMBCKeAhcBAwwwAADDDDAQH0GFPH5BXYro4jP32cjAwYYYIABBhhgIBTxELgIGGCAAQYYYICB+gwo4vML7FZGEZ+/z0YGDDDAAAMMMMBAKOIhcBEwwAADDDDAAAP1GVDE1z1fffVV98MPP/TmmWeeSf/zKOLzd9bIgAEGGGCAAQYYiH+UgR/WamksDQMMMMAAAwwwkG6gpiJ+6dKl3R9//NGfBx98ML1czp4///yzm/hs3Lgx/c+jiM/fWSMDBhhggAEGGGAgFPEQuAgYYIABBhhggIHRMlBTEX/rrbd2g59HHnkkvVyezfn++++7I0eO9GbLli2K+Ar2wciAAQYYYIABBhiI5jLwRHwFh2BkwAADDDDAAAPjbkARn1fE//jjj/2/dHjnnXcU8RXsg5EBAwwwwAADDDAQzWWgiK/gEIwMGGCAAQYYYGDcDbRYxC9cuLC7+eabu8WLF3fz588/oX9H+d5rr732H33PNddc858V8eX/14033ph2VsPGD2vN32cjAwYYYIABBhhgIKZloIi3GBaDAQYYYIABBhhIN9BSEf/AAw/0frjp4Gf//v3d66+/PrRU37BhQ/f777/3ZteuXb1fe/7553s/GHXi88svv3QPPfTQjP/NO++8s3vrrbe6PXv29H5/ebf9pk2buquuuqp78803+//+Tz/9tP89O3bs6P1aeSXNxOfQoUP937tixYoZi/jrrruu+/DDD7t9+/b1fm3v3r3dRx991C1atEgR7z5Jv0+MDBhggAEGGGAgKsxAEV/BIRgZMMAAAwwwwMC4G2iliC9l+WCxPfVTCvpSjg9+zyuvvNL/+q+//to9/fTTM37/sB8cW/68pUAf9inl+NatW/v/++uvv570bvhjfe67776hRfzmzZun/UXDxOebb77prr766tQy3hPx+ftsZMAAAwwwwAADDMS0DBTxFsNiMMAAAwwwwAAD6QZaKOLLE+R///13//t27tzZvfDCC70n4csT6hOfzz//vLviiiuGFvFHjx7tzW+//dZ7Yv3w4cOT/izlKfmpr64p5f3gp5TmX3zxRXfgwIHe/z548ODQIv61117rFfWDXy9P3pdfK7Ns2bKhRXz5M5U/4+7duyc9tT/xeeqppxTx7pT0O8XIgAEGGGCAAQaisgwU8RUcgpEBAwwwwAADDIy7gRaK+FK8D5btCxYs6H9t6dKlkwrvu+++e2gRXz7vv/9+/53y119/fa/wHvwMvgN+7dq1k772xhtv9L+3lP3btm2b9PXBIv5E3xFfivjBp+XLPw9+tmzZooivYKeMDBhggAEGGGCAgagqA0V8BYdgZMAAAwwwwAAD425g1Iv4UnoPPg1f3tk+9fd88MEH/a8/++yzMxbx5Sn3we9bv379pK8vWbKk/7V33323/+vlyfjBJ+3LlNfgTLzH/WQV8du3b5/29Z9//rn/9fIXEllnV8arafL32ciAAQYYYIABBhiIaRko4i2GxWCAAQYYYIABBtINjHoRP/V7vvvuu14hPTiDn/Lql2FFfHmFzdR/d3l6fvBz22239b/27bff9n/9448/HvpnK6+pOZlF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"}}]);