import{s as he,n as ee,f as te,h as ue}from"../chunks/scheduler.8ea2a124.js";import{S as fe,i as de,g as p,m as D,s as N,h as v,j as A,n as V,f as h,c as C,l as j,k as m,a as H,y as u,D as oe,o as re,x as ce,B as me}from"../chunks/index.ccf53136.js";import"../chunks/paths.429c1601.js";import{i as pe,g as z}from"../chunks/index.33f41817.js";import{g as T,i as W}from"../chunks/lang.5f502550.js";function q(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function le(l,e,a){const i=l.slice();return i[3]=e[a],i}function ne(l,e,a){const i=l.slice();return i[6]=e[a],i[7]=e,i[8]=a,i}function se(l){let e,a,i="国内高速下载",c;return{c(){e=p("a"),a=p("small"),a.textContent=i,this.h()},l(d){e=v(d,"A",{href:!0});var f=A(e);a=v(f,"SMALL",{"data-svelte-h":!0}),ce(a)!=="svelte-1ny5vnd"&&(a.textContent=i),f.forEach(h),this.h()},h(){m(e,"href",c=z(l[6].alternateLink))},m(d,f){H(d,e,f),u(e,a)},p(d,f){f&1&&c!==(c=z(d[6].alternateLink))&&m(e,"href",c)},d(d){d&&h(e)}}}function ie(l){let e,a,i,c,d,f,M,b,L,_=l[6].title+"",r,n,t,s,o,E,I,S,P,X="download",x,y,J=T(W.download)+"",F,B,G,K,Q;function U(){l[1].call(t,l[7],l[8])}let k=l[6].alternateLink&&se(l);return{c(){e=p("hr"),a=N(),i=p("div"),c=p("img"),M=N(),b=p("div"),L=p("b"),r=D(_),n=N(),t=p("caption"),s=N(),o=p("br"),E=N(),I=p("div"),S=p("a"),P=p("span"),P.textContent=X,x=N(),y=p("span"),F=D(J),G=N(),k&&k.c(),this.h()},l(g){e=v(g,"HR",{}),a=C(g),i=v(g,"DIV",{class:!0});var w=A(i);c=v(w,"IMG",{src:!0,alt:!0,height:!0}),M=C(w),b=v(w,"DIV",{class:!0});var O=A(b);L=v(O,"B",{});var Y=A(L);r=V(Y,_),Y.forEach(h),n=C(O),t=v(O,"CAPTION",{class:!0,contenteditable:!0}),A(t).forEach(h),O.forEach(h),w.forEach(h),s=C(g),o=v(g,"BR",{}),E=C(g),I=v(g,"DIV",{class:!0});var R=A(I);S=v(R,"A",{class:!0,href:!0});var $=A(S);P=v($,"SPAN",{class:!0,"data-svelte-h":!0}),ce(P)!=="svelte-1m7ad6c"&&(P.textContent=X),x=C($),y=v($,"SPAN",{});var Z=A(y);F=V(Z,J),Z.forEach(h),$.forEach(h),G=C(R),k&&k.l(R),R.forEach(h),this.h()},h(){te(c.src,d=z(l[6].icon))||m(c,"src",d),m(c,"alt",f=l[6].title),m(c,"height","24"),m(t,"class","w"),m(t,"contenteditable","false"),l[6].subtitle===void 0&&ue(U),m(b,"class","cs ml"),m(i,"class","row"),m(P,"class","material-icons md-18"),m(S,"class","btn btn-primary"),m(S,"href",B=z(l[6].link)),m(I,"class","row between")},m(g,w){H(g,e,w),H(g,a,w),H(g,i,w),u(i,c),u(i,M),u(i,b),u(b,L),u(L,r),u(b,n),u(b,t),l[6].subtitle!==void 0&&(t.innerHTML=l[6].subtitle),H(g,s,w),H(g,o,w),H(g,E,w),H(g,I,w),u(I,S),u(S,P),u(S,x),u(S,y),u(y,F),u(I,G),k&&k.m(I,null),K||(Q=me(t,"input",U),K=!0)},p(g,w){l=g,w&1&&!te(c.src,d=z(l[6].icon))&&m(c,"src",d),w&1&&f!==(f=l[6].title)&&m(c,"alt",f),w&1&&_!==(_=l[6].title+"")&&re(r,_),w&1&&l[6].subtitle!==t.innerHTML&&(t.innerHTML=l[6].subtitle),w&1&&B!==(B=z(l[6].link))&&m(S,"href",B),l[6].alternateLink?k?k.p(l,w):(k=se(l),k.c(),k.m(I,null)):k&&(k.d(1),k=null)},d(g){g&&(h(e),h(a),h(i),h(s),h(o),h(E),h(I)),k&&k.d(),K=!1,Q()}}}function ae(l){let e,a,i,c=l[3].title+"",d,f,M,b,L,_=q(l[3].items),r=[];for(let n=0;n<_.length;n+=1)r[n]=ie(ne(l,_,n));return{c(){e=p("span"),a=p("span"),i=p("h3"),d=D(c),f=N(),M=p("br"),b=N();for(let n=0;n<r.length;n+=1)r[n].c();L=N(),this.h()},l(n){e=v(n,"SPAN",{class:!0,style:!0});var t=A(e);a=v(t,"SPAN",{class:!0});var s=A(a);i=v(s,"H3",{class:!0});var o=A(i);d=V(o,c),o.forEach(h),s.forEach(h),f=C(t),M=v(t,"BR",{}),b=C(t);for(let E=0;E<r.length;E+=1)r[E].l(t);L=C(t),t.forEach(h),this.h()},h(){m(i,"class","ml"),m(a,"class","row"),m(e,"class","card m2"),j(e,"vertical-align","top"),j(e,"background-color","cornsilk"),j(e,"width","300px")},m(n,t){H(n,e,t),u(e,a),u(a,i),u(i,d),u(e,f),u(e,M),u(e,b);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);u(e,L)},p(n,t){if(t&1&&c!==(c=n[3].title+"")&&re(d,c),t&1){_=q(n[3].items);let s;for(s=0;s<_.length;s+=1){const o=ne(n,_,s);r[s]?r[s].p(o,t):(r[s]=ie(o),r[s].c(),r[s].m(e,L))}for(;s<r.length;s+=1)r[s].d(1);r.length=_.length}},d(n){n&&h(e),oe(r,n)}}}function ve(l){let e,a,i=T(W.downloadClient)+"",c,d,f,M=T(W.releaseHistory)+"",b,L,_,r=q(l[0]),n=[];for(let t=0;t<r.length;t+=1)n[t]=ae(le(l,r,t));return{c(){e=p("div"),a=p("h1"),c=D(i),d=N(),f=p("a"),b=D(M),L=N(),_=p("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var s=A(e);a=v(s,"H1",{});var o=A(a);c=V(o,i),o.forEach(h),d=C(s),f=v(s,"A",{style:!0,href:!0});var E=A(f);b=V(E,M),E.forEach(h),s.forEach(h),L=C(t),_=v(t,"DIV",{});var I=A(_);for(let S=0;S<n.length;S+=1)n[S].l(I);I.forEach(h),this.h()},h(){j(f,"align-self","flex-end"),m(f,"href","https://github.com/lan-genius/releases/releases"),m(e,"class","cs p")},m(t,s){H(t,e,s),u(e,a),u(a,c),u(e,d),u(e,f),u(f,b),H(t,L,s),H(t,_,s);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(_,null)},p(t,[s]){if(s&1){r=q(t[0]);let o;for(o=0;o<r.length;o+=1){const E=le(t,r,o);n[o]?n[o].p(E,s):(n[o]=ae(E),n[o].c(),n[o].m(_,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},i:ee,o:ee,d(t){t&&(h(e),h(L),h(_)),oe(n,t)}}}function _e(l,e,a){pe();let i=[{icon:"/img/android.svg",title:"Android",items:[{icon:"/img/android.svg",title:".apk",subtitle:"v10.1.0",link:"https://github.com/lan-genius/releases/releases/download/v10/langenius_android_v10.1.0.apk",alternateLink:"https://wwwz.lanzout.com/iTW4T1a6rvlc"},{icon:"/img/playstore.png",title:"Play Store",subtitle:"Install from play store",link:"https://play.google.com/store/apps/details?id=com.xchat.stevenzack.langenius",alternateLink:""}]},{icon:"/img/windows.svg",title:"Windows",items:[{icon:"/img/windows.svg",title:"Windows 10/11",subtitle:T(W.ifNotWorkInstall)+'<a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net48-offline-installer"><small>.Net 4.8</small></a>',link:"/res/langenius_windows_dotnet4.8_v10.0.0.exe",alternateLink:""},{icon:"/img/windows7.jpeg",title:"Windows 7",subtitle:T(W.ifNotWorkInstall)+'<a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net35-sp1-web-installer"><small>.Net 3.5</small></a>',link:"/res/langenius_windows_dotnet3.5_v10.0.0.exe",alternateLink:""},{icon:"/img/windowsxp.jpg",title:"Windows XP/8/8.1",subtitle:T(W.dependency)+'<a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net35-sp1-web-installer"><small>.Net 3.5</small></a>',link:"/res/langenius_windows_dotnet3.5_v10.0.0.exe",alternateLink:""}]},{icon:"/img/apple.svg",title:"Apple",items:[{icon:"/img/apple.svg",title:"Mac OS",subtitle:"v8.2.1",link:"https://github.com/lan-genius/releases/releases/download/v8/langenius_mac_v8.2.1.zip",alternateLink:"https://wwi.lanzoui.com/ieANFwhmc7a"},{icon:"/img/apple.svg",title:"iOS App Store",subtitle:"Install from iOS AppStore",link:"https://apps.apple.com/fi/app/langenius-transfer-tool/id6466735036",alternateLink:""}]},{icon:"/img/linux.svg",title:"Linux",items:[{icon:"/img/linux.svg",title:"Linux",subtitle:"v.8.2.1",link:"https://github.com/lan-genius/releases/releases/download/v8/langenius_linux_amd64_v8.2.1.tar.gz",alternateLink:"https://wwi.lanzoui.com/if63Kwhkisf"}]}];function c(d,f){d[f].subtitle=this.innerHTML,a(0,i)}return[i,c]}class Ae extends fe{constructor(e){super(),de(this,e,_e,ve,he,{})}}export{Ae as component};
