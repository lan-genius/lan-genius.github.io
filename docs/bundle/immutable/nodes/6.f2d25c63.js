import{s as dt,n as it,r as ut}from"../chunks/scheduler.8ea2a124.js";import{S as ct,i as pt,g as a,m as y,s as L,h as s,j as r,n as D,f as l,c as N,k as p,l as ht,a as ft,y as t,A as C,B as X}from"../chunks/index.ccf53136.js";import{g as O,i as R}from"../chunks/lang.181c0a48.js";const mt="https://at5wqmn2h4iktvvvl7nomvcrj40tbzzr.lambda-url.us-east-1.on.aws/api";function _t(f){let d,n,o,_=O(R.login)+"",v,S,q=O(R.register)+"",I,g,e,E,j,Y=O(R.usernameOrEmail)+"",F,H,k,u,G,T,P,Z=O(R.password)+"",J,K,U,h,M,B,b,c,$=O(R.login)+"",Q,W,tt;return{c(){d=a("div"),n=a("div"),o=a("h1"),v=y(_),S=y(" / "),I=y(q),g=L(),e=a("table"),E=a("tr"),j=a("td"),F=y(Y),H=L(),k=a("td"),u=a("input"),G=L(),T=a("tr"),P=a("td"),J=y(Z),K=L(),U=a("td"),h=a("input"),M=L(),B=a("tr"),b=a("td"),c=a("button"),Q=y($),this.h()},l(i){d=s(i,"DIV",{class:!0});var m=r(d);n=s(m,"DIV",{class:!0});var z=r(n);o=s(z,"H1",{});var A=r(o);v=D(A,_),S=D(A," / "),I=D(A,q),A.forEach(l),g=N(z),e=s(z,"TABLE",{});var w=r(e);E=s(w,"TR",{});var V=r(E);j=s(V,"TD",{});var et=r(j);F=D(et,Y),et.forEach(l),H=N(V),k=s(V,"TD",{});var at=r(k);u=s(at,"INPUT",{type:!0,name:!0,max:!0}),at.forEach(l),V.forEach(l),G=N(w),T=s(w,"TR",{});var x=r(T);P=s(x,"TD",{});var st=r(P);J=D(st,Z),st.forEach(l),K=N(x),U=s(x,"TD",{});var lt=r(U);h=s(lt,"INPUT",{type:!0,name:!0}),lt.forEach(l),x.forEach(l),M=N(w),B=s(w,"TR",{});var nt=r(B);b=s(nt,"TD",{colspan:!0,align:!0});var rt=r(b);c=s(rt,"BUTTON",{class:!0,style:!0});var ot=r(c);Q=D(ot,$),ot.forEach(l),rt.forEach(l),nt.forEach(l),w.forEach(l),z.forEach(l),m.forEach(l),this.h()},h(){p(u,"type","text"),p(u,"name","account"),p(u,"max","36"),p(h,"type","password"),p(h,"name","password"),c.disabled=f[2],p(c,"class","btn btn-primary"),ht(c,"width","180px"),p(b,"colspan","2"),p(b,"align","center"),p(n,"class","col maxw3xl w"),p(d,"class","col")},m(i,m){ft(i,d,m),t(d,n),t(n,o),t(o,v),t(o,S),t(o,I),t(n,g),t(n,e),t(e,E),t(E,j),t(j,F),t(E,H),t(E,k),t(k,u),C(u,f[0]),t(e,G),t(e,T),t(T,P),t(P,J),t(T,K),t(T,U),t(U,h),C(h,f[1]),t(e,M),t(e,B),t(B,b),t(b,c),t(c,Q),W||(tt=[X(u,"input",f[4]),X(h,"input",f[5]),X(c,"click",f[3])],W=!0)},p(i,[m]){m&1&&u.value!==i[0]&&C(u,i[0]),m&2&&h.value!==i[1]&&C(h,i[1]),m&4&&(c.disabled=i[2])},i:it,o:it,d(i){i&&l(d),W=!1,ut(tt)}}}function vt(f,d,n){let o="",_="",v=!1;function S(){let g=new FormData;g.append("account",o),g.append("password",_),n(2,v=!0),fetch(mt+"/tokens",{method:"POST",body:g}).then(e=>e.json()).then(e=>{localStorage.setItem("uid",e.uid),localStorage.setItem("jti",e.jti),localStorage.setItem("at",e.accessToken)}).catch(e=>alert(e)).finally(()=>n(2,v=!1))}function q(){o=this.value,n(0,o)}function I(){_=this.value,n(1,_)}return[o,_,v,S,q,I]}class bt extends ct{constructor(d){super(),pt(this,d,vt,_t,dt,{})}}export{bt as component};
