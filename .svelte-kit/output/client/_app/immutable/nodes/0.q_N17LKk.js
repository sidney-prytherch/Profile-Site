import{s as q,n as V,b as Y,q as Z,c as $,o as i1,u as c1,v as H1,w as o1,x as u1}from"../chunks/scheduler.BJ7TQcqY.js";import{S as O,i as U,e as m,A as T,s as b,c as p,a as d,B as I,d as f,f as E,o as i,g as S,h as u,C as s1,t as z1,b as n1,j as a1,D as x,u as B,z as F,v as R,E as h1,w as G,F as f1,n as j,l as D,x as J}from"../chunks/index.B9XU1y6w.js";import{p as g1}from"../chunks/stores.DUqfL8TE.js";import{c as d1}from"../chunks/sectionStore.DpCDUfLZ.js";import{b as A}from"../chunks/entry.C7hZ7kjv.js";function N(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const m1="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='crispEdges'%3e%3cpath%20d='M5%200h1v1H5zM6%200h1v1H6zM7%200h1v1H7zM8%200h1v1H8zM9%200h1v1H9zM10%200h1v1h-1zM11%200h1v1h-1zM12%200h1v1h-1zM3%201h1v1H3zM4%201h1v1H4zM5%201h1v1H5zM6%201h1v1H6zM7%201h1v1H7zM8%201h1v1H8zM9%201h1v1H9zM10%201h1v1h-1zM11%201h1v1h-1zM12%201h1v1h-1zM13%201h1v1h-1zM14%201h1v1h-1zM2%202h1v1H2zM3%202h1v1H3zM4%202h1v1H4zM5%202h1v1H5zM12%202h1v1h-1zM13%202h1v1h-1zM14%202h1v1h-1zM15%202h1v1h-1zM1%203h1v1H1zM2%203h1v1H2zM3%203h1v1H3zM14%203h1v1h-1zM15%203h1v1h-1zM16%203h1v1h-1zM1%204h1v1H1zM2%204h1v1H2zM15%204h1v1h-1zM16%204h1v1h-1zM0%205h1v1H0zM1%205h1v1H1zM2%205h1v1H2zM5%205h1v1H5zM6%205h1v1H6zM8%205h1v1H8zM9%205h1v1H9zM11%205h1v1h-1zM12%205h1v1h-1zM15%205h1v1h-1zM16%205h1v1h-1zM17%205h1v1h-1zM0%206h1v1H0zM1%206h1v1H1zM6%206h1v1H6zM7%206h1v1H7zM8%206h1v1H8zM9%206h1v1H9zM10%206h1v1h-1zM11%206h1v1h-1zM16%206h1v1h-1zM17%206h1v1h-1zM0%207h1v1H0zM1%207h1v1H1zM5%207h1v1H5zM6%207h1v1H6zM7%207h1v1H7zM8%207h1v1H8zM9%207h1v1H9zM10%207h1v1h-1zM11%207h1v1h-1zM12%207h1v1h-1zM16%207h1v1h-1zM17%207h1v1h-1zM0%208h1v1H0zM1%208h1v1H1zM5%208h1v1H5zM6%208h1v1H6zM7%208h1v1H7zM8%208h1v1H8zM9%208h1v1H9zM10%208h1v1h-1zM11%208h1v1h-1zM12%208h1v1h-1zM16%208h1v1h-1zM17%208h1v1h-1zM0%209h1v1H0zM1%209h1v1H1zM5%209h1v1H5zM6%209h1v1H6zM7%209h1v1H7zM8%209h1v1H8zM9%209h1v1H9zM10%209h1v1h-1zM11%209h1v1h-1zM12%209h1v1h-1zM16%209h1v1h-1zM17%209h1v1h-1zM0%2010h1v1H0zM1%2010h1v1H1zM6%2010h1v1H6zM7%2010h1v1H7zM8%2010h1v1H8zM9%2010h1v1H9zM10%2010h1v1h-1zM11%2010h1v1h-1zM16%2010h1v1h-1zM17%2010h1v1h-1zM0%2011h1v1H0zM1%2011h1v1H1zM3%2011h1v1H3zM4%2011h1v1H4zM7%2011h1v1H7zM8%2011h1v1H8zM9%2011h1v1H9zM10%2011h1v1h-1zM16%2011h1v1h-1zM17%2011h1v1h-1zM0%2012h1v1H0zM1%2012h1v1H1zM2%2012h1v1H2zM4%2012h1v1H4zM5%2012h1v1H5zM6%2012h1v1H6zM7%2012h1v1H7zM8%2012h1v1H8zM9%2012h1v1H9zM10%2012h1v1h-1zM11%2012h1v1h-1zM15%2012h1v1h-1zM16%2012h1v1h-1zM17%2012h1v1h-1zM1%2013h1v1H1zM2%2013h1v1H2zM5%2013h1v1H5zM6%2013h1v1H6zM7%2013h1v1H7zM8%2013h1v1H8zM9%2013h1v1H9zM10%2013h1v1h-1zM11%2013h1v1h-1zM15%2013h1v1h-1zM16%2013h1v1h-1zM1%2014h1v1H1zM2%2014h1v1H2zM3%2014h1v1H3zM6%2014h1v1H6zM7%2014h1v1H7zM8%2014h1v1H8zM9%2014h1v1H9zM10%2014h1v1h-1zM11%2014h1v1h-1zM14%2014h1v1h-1zM15%2014h1v1h-1zM16%2014h1v1h-1zM2%2015h1v1H2zM3%2015h1v1H3zM4%2015h1v1H4zM5%2015h1v1H5zM6%2015h1v1H6zM7%2015h1v1H7zM8%2015h1v1H8zM9%2015h1v1H9zM10%2015h1v1h-1zM11%2015h1v1h-1zM12%2015h1v1h-1zM13%2015h1v1h-1zM14%2015h1v1h-1zM15%2015h1v1h-1zM3%2016h1v1H3zM4%2016h1v1H4zM5%2016h1v1H5zM6%2016h1v1H6zM7%2016h1v1H7zM8%2016h1v1H8zM9%2016h1v1H9zM10%2016h1v1h-1zM11%2016h1v1h-1zM12%2016h1v1h-1zM13%2016h1v1h-1zM14%2016h1v1h-1zM5%2017h1v1H5zM6%2017h1v1H6zM7%2017h1v1H7zM8%2017h1v1H8zM9%2017h1v1H9zM10%2017h1v1h-1zM11%2017h1v1h-1zM12%2017h1v1h-1z'/%3e%3c/svg%3e",p1="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='crispEdges'%3e%3cpath%20d='M3%203h1v1H3zM4%203h1v1H4zM5%203h1v1H5zM6%203h1v1H6zM7%203h1v1H7zM8%203h1v1H8zM9%203h1v1H9zM10%203h1v1h-1zM11%203h1v1h-1zM4%204h1v1H4zM5%204h1v1H5zM6%204h1v1H6zM7%204h1v1H7zM8%204h1v1H8zM9%204h1v1H9zM10%204h1v1h-1zM11%204h1v1h-1zM12%204h1v1h-1zM3%207h1v1H3zM4%207h1v1H4zM5%207h1v1H5zM6%207h1v1H6zM7%207h1v1H7zM8%207h1v1H8zM9%207h1v1H9zM10%207h1v1h-1zM11%207h1v1h-1zM4%208h1v1H4zM5%208h1v1H5zM6%208h1v1H6zM7%208h1v1H7zM8%208h1v1H8zM9%208h1v1H9zM10%208h1v1h-1zM11%208h1v1h-1zM12%208h1v1h-1zM3%2011h1v1H3zM4%2011h1v1H4zM5%2011h1v1H5zM6%2011h1v1H6zM7%2011h1v1H7zM8%2011h1v1H8zM9%2011h1v1H9zM10%2011h1v1h-1zM11%2011h1v1h-1zM4%2012h1v1H4zM5%2012h1v1H5zM6%2012h1v1H6zM7%2012h1v1H7zM8%2012h1v1H8zM9%2012h1v1H9zM10%2012h1v1h-1zM11%2012h1v1h-1zM12%2012h1v1h-1z'/%3e%3c/svg%3e";function e1(t,h,e){const v=t.slice();return v[3]=h[e],v[5]=e,v}function v1(t){let h,e,v=t[3]+"",s,M,a,z;return{c(){h=m("li"),e=m("a"),s=z1(v),a=b(),this.h()},l(n){h=p(n,"LI",{"aria-current":!0,class:!0});var c=d(h);e=p(c,"A",{href:!0,class:!0});var l=d(e);s=n1(l,v),l.forEach(f),a=E(c),c.forEach(f),this.h()},h(){i(e,"href",M=t[1][t[5]]),i(e,"class","svelte-19920hg"),i(h,"aria-current",z=t[2]===t[3]?"page":void 0),i(h,"class","svelte-19920hg")},m(n,c){S(n,h,c),u(h,e),u(e,s),u(h,a)},p(n,c){c&1&&v!==(v=n[3]+"")&&a1(s,v),c&2&&M!==(M=n[1][n[5]])&&i(e,"href",M),c&5&&z!==(z=n[2]===n[3]?"page":void 0)&&i(h,"aria-current",z)},d(n){n&&f(h)}}}function _1(t){let h,e,v,s,M,a,z,n,c=N(t[0]),l=[];for(let r=0;r<c.length;r+=1)l[r]=v1(e1(t,c,r));return{c(){h=m("nav"),e=T("svg"),v=T("path"),s=b(),M=m("ul");for(let r=0;r<l.length;r+=1)l[r].c();a=b(),z=T("svg"),n=T("path"),this.h()},l(r){h=p(r,"NAV",{class:!0});var H=d(h);e=I(H,"svg",{width:!0,height:!0,xmlns:!0,"shape-rendering":!0,class:!0});var o=d(e);v=I(o,"path",{d:!0,class:!0}),d(v).forEach(f),o.forEach(f),s=E(H),M=p(H,"UL",{class:!0});var _=d(M);for(let L=0;L<l.length;L+=1)l[L].l(_);_.forEach(f),a=E(H),z=I(H,"svg",{width:!0,height:!0,xmlns:!0,"shape-rendering":!0,class:!0});var k=d(z);n=I(k,"path",{d:!0,class:!0}),d(n).forEach(f),k.forEach(f),H.forEach(f),this.h()},h(){i(v,"d","M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM28 12h4v4h-4zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM28 16h4v4h-4zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM28 20h4v4h-4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM24 24h4v4h-4zM28 24h4v4h-4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM24 28h4v4h-4zM28 28h4v4h-4zM12 32h4v4h-4zM16 32h4v4h-4zM20 32h4v4h-4zM24 32h4v4h-4zM28 32h4v4h-4zM12 36h4v4h-4zM16 36h4v4h-4zM20 36h4v4h-4zM24 36h4v4h-4zM28 36h4v4h-4zM20 40h4v4h-4zM24 40h4v4h-4zM28 40h4v4h-4zM28 44h4v4h-4z"),i(v,"class","svelte-19920hg"),i(e,"width","32"),i(e,"height","48"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"shape-rendering","crispEdges"),i(e,"class","svelte-19920hg"),i(M,"class","svelte-19920hg"),i(n,"d","M0 0h4v4H0zM4 0h4v4H4zM8 0h4v4H8zM12 0h4v4h-4zM16 0h4v4h-4zM20 0h4v4h-4zM24 0h4v4h-4zM28 0h4v4h-4zM0 4h4v4H0zM4 4h4v4H4zM8 4h4v4H8zM12 4h4v4h-4zM16 4h4v4h-4zM20 4h4v4h-4zM24 4h4v4h-4zM28 4h4v4h-4zM0 8h4v4H0zM4 8h4v4H4zM8 8h4v4H8zM12 8h4v4h-4zM16 8h4v4h-4zM20 8h4v4h-4zM24 8h4v4h-4zM28 8h4v4h-4zM0 12h4v4H0zM4 12h4v4H4zM8 12h4v4H8zM12 12h4v4h-4zM16 12h4v4h-4zM20 12h4v4h-4zM24 12h4v4h-4zM0 16h4v4H0zM4 16h4v4H4zM8 16h4v4H8zM12 16h4v4h-4zM16 16h4v4h-4zM20 16h4v4h-4zM24 16h4v4h-4zM0 20h4v4H0zM4 20h4v4H4zM8 20h4v4H8zM12 20h4v4h-4zM16 20h4v4h-4zM20 20h4v4h-4zM24 20h4v4h-4zM0 24h4v4H0zM4 24h4v4H4zM8 24h4v4H8zM12 24h4v4h-4zM16 24h4v4h-4zM20 24h4v4h-4zM0 28h4v4H0zM4 28h4v4H4zM8 28h4v4H8zM12 28h4v4h-4zM16 28h4v4h-4zM20 28h4v4h-4zM0 32h4v4H0zM4 32h4v4H4zM8 32h4v4H8zM12 32h4v4h-4zM16 32h4v4h-4zM0 36h4v4H0zM4 36h4v4H4zM8 36h4v4H8zM12 36h4v4h-4zM16 36h4v4h-4zM0 40h4v4H0zM4 40h4v4H4zM8 40h4v4H8zM0 44h4v4H0z"),i(n,"class","svelte-19920hg"),i(z,"width","32"),i(z,"height","48"),i(z,"xmlns","http://www.w3.org/2000/svg"),i(z,"shape-rendering","crispEdges"),i(z,"class","svelte-19920hg"),i(h,"class","svelte-19920hg")},m(r,H){S(r,h,H),u(h,e),u(e,v),u(h,s),u(h,M);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(M,null);u(h,a),u(h,z),u(z,n)},p(r,[H]){if(H&7){c=N(r[0]);let o;for(o=0;o<c.length;o+=1){const _=e1(r,c,o);l[o]?l[o].p(_,H):(l[o]=v1(_),l[o].c(),l[o].m(M,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=c.length}},i:V,o:V,d(r){r&&f(h),s1(l,r)}}}function w1(t,h,e){let{pageList:v=["Home","Contact","About","Skills","Projects"]}=h,{hrefList:s}=h,{currentPage:M}=h;return t.$$set=a=>{"pageList"in a&&e(0,v=a.pageList),"hrefList"in a&&e(1,s=a.hrefList),"currentPage"in a&&e(2,M=a.currentPage)},[v,s,M]}class L1 extends O{constructor(h){super(),U(this,h,w1,_1,q,{pageList:0,hrefList:1,currentPage:2})}}function t1(t,h,e){const v=t.slice();return v[3]=h[e],v[5]=e,v}function M1(t){let h,e,v=t[3]+"",s,M,a,z;return{c(){h=m("li"),e=m("a"),s=z1(v),a=b(),this.h()},l(n){h=p(n,"LI",{"aria-current":!0,class:!0});var c=d(h);e=p(c,"A",{href:!0,class:!0});var l=d(e);s=n1(l,v),l.forEach(f),a=E(c),c.forEach(f),this.h()},h(){i(e,"href",M=t[1][t[5]]),i(e,"class","svelte-1r6gomy"),i(h,"aria-current",z=t[2]===t[3]?"page":void 0),i(h,"class","svelte-1r6gomy")},m(n,c){S(n,h,c),u(h,e),u(e,s),u(h,a)},p(n,c){c&1&&v!==(v=n[3]+"")&&a1(s,v),c&2&&M!==(M=n[1][n[5]])&&i(e,"href",M),c&5&&z!==(z=n[2]===n[3]?"page":void 0)&&i(h,"aria-current",z)},d(n){n&&f(h)}}}function b1(t){let h,e,v=N(t[0]),s=[];for(let M=0;M<v.length;M+=1)s[M]=M1(t1(t,v,M));return{c(){h=m("nav"),e=m("ul");for(let M=0;M<s.length;M+=1)s[M].c();this.h()},l(M){h=p(M,"NAV",{class:!0});var a=d(h);e=p(a,"UL",{class:!0});var z=d(e);for(let n=0;n<s.length;n+=1)s[n].l(z);z.forEach(f),a.forEach(f),this.h()},h(){i(e,"class","svelte-1r6gomy"),i(h,"class","svelte-1r6gomy")},m(M,a){S(M,h,a),u(h,e);for(let z=0;z<s.length;z+=1)s[z]&&s[z].m(e,null)},p(M,[a]){if(a&7){v=N(M[0]);let z;for(z=0;z<v.length;z+=1){const n=t1(M,v,z);s[z]?s[z].p(n,a):(s[z]=M1(n),s[z].c(),s[z].m(e,null))}for(;z<s.length;z+=1)s[z].d(1);s.length=v.length}},i:V,o:V,d(M){M&&f(h),s1(s,M)}}}function E1(t,h,e){let{pageList:v=["Home","Contact","About","Skills","Projects"]}=h,{hrefList:s}=h,{currentPage:M}=h;return t.$$set=a=>{"pageList"in a&&e(0,v=a.pageList),"hrefList"in a&&e(1,s=a.hrefList),"currentPage"in a&&e(2,M=a.currentPage)},[v,s,M]}class P1 extends O{constructor(h){super(),U(this,h,E1,b1,q,{pageList:0,hrefList:1,currentPage:2})}}function A1(t){let h,e,v,s=`<img src="${p1}" alt="menu" class="svelte-1xgseh1"/>`,M,a,z,n,c,l,r,H,o,_,k=`<a href="https://github.com/sidney-prytherch/Profile-Site" class="svelte-1xgseh1"><img src="${m1}" alt="GitHub" class="svelte-1xgseh1"/></a>`,L,y,K;function r1(g){t[7](g)}let Q={pageList:t[2],hrefList:t[3]};t[1]!==void 0&&(Q.currentPage=t[1]),z=new P1({props:Q}),Y.push(()=>x(z,"currentPage",r1));function l1(g){t[8](g)}let W={pageList:t[2],hrefList:t[3]};return t[1]!==void 0&&(W.currentPage=t[1]),r=new L1({props:W}),Y.push(()=>x(r,"currentPage",l1)),{c(){h=m("header"),e=m("div"),v=m("button"),v.innerHTML=s,M=b(),a=m("div"),B(z.$$.fragment),c=b(),l=m("div"),B(r.$$.fragment),o=b(),_=m("div"),_.innerHTML=k,this.h()},l(g){h=p(g,"HEADER",{class:!0});var w=d(h);e=p(w,"DIV",{class:!0});var P=d(e);v=p(P,"BUTTON",{class:!0,"data-svelte-h":!0}),F(v)!=="svelte-10n7ycd"&&(v.innerHTML=s),M=E(P),a=p(P,"DIV",{class:!0});var C=d(a);R(z.$$.fragment,C),C.forEach(f),P.forEach(f),c=E(w),l=p(w,"DIV",{class:!0});var X=d(l);R(r.$$.fragment,X),X.forEach(f),o=E(w),_=p(w,"DIV",{class:!0,"data-svelte-h":!0}),F(_)!=="svelte-dqabwk"&&(_.innerHTML=k),w.forEach(f),this.h()},h(){i(v,"class","small-screen-visibility svelte-1xgseh1"),i(a,"class","side-nav svelte-1xgseh1"),h1(a,"hidden",!t[0]),i(e,"class","corner left svelte-1xgseh1"),i(l,"class","top-nav svelte-1xgseh1"),i(_,"class","corner svelte-1xgseh1"),i(h,"class","svelte-1xgseh1")},m(g,w){S(g,h,w),u(h,e),u(e,v),u(e,M),u(e,a),G(z,a,null),u(h,c),u(h,l),G(r,l,null),u(h,o),u(h,_),L=!0,y||(K=f1(v,"click",t[6]),y=!0)},p(g,[w]){const P={};!n&&w&2&&(n=!0,P.currentPage=g[1],Z(()=>n=!1)),z.$set(P),(!L||w&1)&&h1(a,"hidden",!g[0]);const C={};!H&&w&2&&(H=!0,C.currentPage=g[1],Z(()=>H=!1)),r.$set(C)},i(g){L||(j(z.$$.fragment,g),j(r.$$.fragment,g),L=!0)},o(g){D(z.$$.fragment,g),D(r.$$.fragment,g),L=!1},d(g){g&&f(h),J(z),J(r),y=!1,K()}}}function S1(t,h,e){let v,s,M;$(t,d1,H=>e(4,s=H)),$(t,g1,H=>e(5,M=H));const a=["Home","Contact","About","Skills","Projects"],z=[`${A}/`,`${A}/contact`,`${A}/#about`,`${A}/#skills`,`${A}/#projects`];let n=!1;i1(()=>{window.addEventListener("resize",()=>{window.matchMedia("(min-width: 721px)").matches&&e(0,n=!1)})});const c=()=>{e(0,n=!n)};function l(H){v=H,e(1,v),e(5,M),e(4,s)}function r(H){v=H,e(1,v),e(5,M),e(4,s)}return t.$$.update=()=>{t.$$.dirty&48&&e(1,v=M.url.pathname===`${A}/contact`?"Contact":s==="About"?"About":s==="Skills"?"Skills":s==="Projects"?"Projects":"Home")},[n,v,a,z,s,M,c,l,r]}class k1 extends O{constructor(h){super(),U(this,h,S1,A1,q,{})}}function C1(t){let h,e,v,s,M,a,z="<p>This is the footer - for now</p>",n;e=new k1({});const c=t[1].default,l=c1(c,t,t[0],null);return{c(){h=m("div"),B(e.$$.fragment),v=b(),s=m("main"),l&&l.c(),M=b(),a=m("footer"),a.innerHTML=z,this.h()},l(r){h=p(r,"DIV",{class:!0});var H=d(h);R(e.$$.fragment,H),v=E(H),s=p(H,"MAIN",{class:!0});var o=d(s);l&&l.l(o),o.forEach(f),M=E(H),a=p(H,"FOOTER",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-1k5rm1u"&&(a.innerHTML=z),H.forEach(f),this.h()},h(){i(s,"class","svelte-tsf3oq"),i(a,"class","svelte-tsf3oq"),i(h,"class","app svelte-tsf3oq")},m(r,H){S(r,h,H),G(e,h,null),u(h,v),u(h,s),l&&l.m(s,null),u(h,M),u(h,a),n=!0},p(r,[H]){l&&l.p&&(!n||H&1)&&H1(l,c,r,r[0],n?u1(c,r[0],H,null):o1(r[0]),null)},i(r){n||(j(e.$$.fragment,r),j(l,r),n=!0)},o(r){D(e.$$.fragment,r),D(l,r),n=!1},d(r){r&&f(h),J(e),l&&l.d(r)}}}function T1(t,h,e){let{$$slots:v={},$$scope:s}=h;return t.$$set=M=>{"$$scope"in M&&e(0,s=M.$$scope)},[s,v]}class q1 extends O{constructor(h){super(),U(this,h,T1,C1,q,{})}}export{q1 as component};
