import{s as de,n as oe,r as fe,b as me}from"../chunks/scheduler.8ea2a124.js";import{S as _e,i as ve,g as o,m as M,s as m,h as p,j as y,n as B,f as v,c as _,x as U,k as E,a as ue,y as t,A as pe,B as he,o as ge}from"../chunks/index.ccf53136.js";import{g as q,a as be}from"../chunks/index.a7340f4e.js";import{g as k,i as w}from"../chunks/lang.8852e68d.js";function ce(h){let e,s,c,l,d,u,f;return{c(){e=o("div"),s=o("input"),c=m(),l=o("button"),d=M(h[3]),this.h()},l(r){e=p(r,"DIV",{id:!0});var n=y(e);s=p(n,"INPUT",{type:!0}),c=_(n),l=p(n,"BUTTON",{id:!0});var g=y(l);d=B(g,h[3]),g.forEach(v),n.forEach(v),this.h()},h(){E(s,"type","text"),s.disabled=!0,l.disabled=h[2],E(l,"id","copy-btn"),E(e,"id","username-box")},m(r,n){ue(r,e,n),t(e,s),h[5](s),pe(s,h[1]),t(e,c),t(e,l),t(l,d),u||(f=[he(s,"input",h[6]),he(l,"click",h[4])],u=!0)},p(r,n){n&2&&s.value!==r[1]&&pe(s,r[1]),n&8&&ge(d,r[3]),n&4&&(l.disabled=r[2])},d(r){r&&v(e),h[5](null),u=!1,fe(f)}}}function ye(h){let e,s,c=k(w.payNow)+"",l,d,u,f,r=k(w.pleaseRemarkYourUsernameWhenPaying)+"",n,g,S,A,D,Z=k(w.topUpWillBeDoneWithinTwoDays)+"",I,W,x,G="售后QQ群: <b>929418739</b>",j,L,J=k(w.contact)+"",F,O,T,X=`<img src="${q("/img/alipay.jpg")}" alt="alipay" width="320" height="480"/>`,Q,P,$="微信支付无法退款，有问题请加售后Q群:691017244",V,H,ee=`<img width="320" height="480" src="${q("/img/wechat.jpg")}" alt="wechat"/>`,z,N,te=k(w.orYouCanPurchaseOnMobile)+"",R,Y,C,ae=`<a class="m" href="https://play.google.com/store/apps/details?id=com.xchat.stevenzack.langenius"><img src="${q("/img/playstore.svg")}" alt="playstore" height="100"/></a> <a class="m" href="https://apps.apple.com/cn/app/%E5%B1%80%E5%9F%9F%E7%BD%91%E7%B2%BE%E7%81%B5pro/id1511699208?l=zh"><img src="${q("/img/appstore.svg")}" alt="appstore" height="40" style="margin-top: 10px;"/></a>`,i=h[1]&&ce(h);return{c(){e=o("div"),s=o("h1"),l=M(c),d=m(),u=o("h3"),f=o("b"),n=M(r),g=M("!!!"),S=m(),i&&i.c(),A=m(),D=o("p"),I=M(Z),W=m(),x=o("span"),x.innerHTML=G,j=m(),L=o("a"),F=M(J),O=m(),T=o("a"),T.innerHTML=X,Q=m(),P=o("span"),P.textContent=$,V=m(),H=o("a"),H.innerHTML=ee,z=m(),N=o("h2"),R=M(te),Y=m(),C=o("div"),C.innerHTML=ae,this.h()},l(b){e=p(b,"DIV",{class:!0});var a=y(e);s=p(a,"H1",{});var se=y(s);l=B(se,c),se.forEach(v),d=_(a),u=p(a,"H3",{});var le=y(u);f=p(le,"B",{class:!0});var K=y(f);n=B(K,r),g=B(K,"!!!"),K.forEach(v),le.forEach(v),S=_(a),i&&i.l(a),A=_(a),D=p(a,"P",{});var ne=y(D);I=B(ne,Z),ne.forEach(v),W=_(a),x=p(a,"SPAN",{"data-svelte-h":!0}),U(x)!=="svelte-1dxykb5"&&(x.innerHTML=G),j=_(a),L=p(a,"A",{href:!0});var ie=y(L);F=B(ie,J),ie.forEach(v),O=_(a),T=p(a,"A",{href:!0,"data-svelte-h":!0}),U(T)!=="svelte-g4o1h7"&&(T.innerHTML=X),Q=_(a),P=p(a,"SPAN",{"data-svelte-h":!0}),U(P)!=="svelte-15nc99a"&&(P.textContent=$),V=_(a),H=p(a,"A",{href:!0,"data-svelte-h":!0}),U(H)!=="svelte-11qb0d7"&&(H.innerHTML=ee),z=_(a),N=p(a,"H2",{});var re=y(N);R=B(re,te),re.forEach(v),Y=_(a),C=p(a,"DIV",{class:!0,"data-svelte-h":!0}),U(C)!=="svelte-1tvdfg9"&&(C.innerHTML=ae),a.forEach(v),this.h()},h(){E(f,"class","red"),E(L,"href",q("/contact")),E(T,"href","https://qr.alipay.com/tsx02907mtbanqhpid1vq87"),E(H,"href","wxp://f2f0p_qNyNEd6TdLm6DBIb9PWiHFsP7ZkmN8"),E(C,"class","row spacearound"),E(e,"class","col")},m(b,a){ue(b,e,a),t(e,s),t(s,l),t(e,d),t(e,u),t(u,f),t(f,n),t(f,g),t(e,S),i&&i.m(e,null),t(e,A),t(e,D),t(D,I),t(e,W),t(e,x),t(e,j),t(e,L),t(L,F),t(e,O),t(e,T),t(e,Q),t(e,P),t(e,V),t(e,H),t(e,z),t(e,N),t(N,R),t(e,Y),t(e,C)},p(b,[a]){b[1]?i?i.p(b,a):(i=ce(b),i.c(),i.m(e,A)):i&&(i.d(1),i=null)},i:oe,o:oe,d(b){b&&v(e),i&&i.d()}}}function Ee(h,e,s){let c=null,l=be(),d=!1,u=k(w.copyMyUsername),f=function(){s(2,d=!0),c==null||c.select(),document.execCommand("copy"),navigator.clipboard&&navigator.clipboard.writeText(l),s(3,u="OK"),setTimeout(()=>{s(2,d=!1),s(3,u=k(w.copyMyUsername))},1e3)};function r(g){me[g?"unshift":"push"](()=>{c=g,s(0,c)})}function n(){l=this.value,s(1,l)}return[c,l,d,u,f,r,n]}class Be extends _e{constructor(e){super(),ve(this,e,Ee,ye,de,{})}}export{Be as component};
