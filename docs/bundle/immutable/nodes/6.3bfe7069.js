import{s as he,n as ee,f as te,h as ue}from"../chunks/scheduler.8ea2a124.js";import{S as fe,i as de,g as m,m as B,s as I,h as g,j as A,n as D,f as h,c as C,l as j,k as p,a as z,y as u,D as oe,o as re,x as ce,B as pe}from"../chunks/index.ccf53136.js";import"../chunks/paths.445ae5af.js";import{i as me,g as P}from"../chunks/index.5a07d806.js";import{g as T,i as y}from"../chunks/lang.eb3c09b4.js";function G(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function le(l,e,a){const i=l.slice();return i[3]=e[a],i}function ne(l,e,a){const i=l.slice();return i[6]=e[a],i[7]=e,i[8]=a,i}function se(l){let e,a,i="国内高速下载",c;return{c(){e=m("a"),a=m("small"),a.textContent=i,this.h()},l(d){e=g(d,"A",{href:!0});var f=A(e);a=g(f,"SMALL",{"data-svelte-h":!0}),ce(a)!=="svelte-1ny5vnd"&&(a.textContent=i),f.forEach(h),this.h()},h(){p(e,"href",c=P(l[6].alternateLink))},m(d,f){z(d,e,f),u(e,a)},p(d,f){f&1&&c!==(c=P(d[6].alternateLink))&&p(e,"href",c)},d(d){d&&h(e)}}}function ie(l){let e,a,i,c,d,f,H,b,L,_=l[6].title+"",r,n,t,s,o,S,N,E,M,K="download",q,W,X=T(y.download)+"",x,V,F,J,Y;function Q(){l[1].call(t,l[7],l[8])}let k=l[6].alternateLink&&se(l);return{c(){e=m("hr"),a=I(),i=m("div"),c=m("img"),H=I(),b=m("div"),L=m("b"),r=B(_),n=I(),t=m("caption"),s=I(),o=m("br"),S=I(),N=m("div"),E=m("a"),M=m("span"),M.textContent=K,q=I(),W=m("span"),x=B(X),F=I(),k&&k.c(),this.h()},l(v){e=g(v,"HR",{}),a=C(v),i=g(v,"DIV",{class:!0});var w=A(i);c=g(w,"IMG",{src:!0,alt:!0,height:!0}),H=C(w),b=g(w,"DIV",{class:!0});var O=A(b);L=g(O,"B",{});var U=A(L);r=D(U,_),U.forEach(h),n=C(O),t=g(O,"CAPTION",{class:!0,contenteditable:!0}),A(t).forEach(h),O.forEach(h),w.forEach(h),s=C(v),o=g(v,"BR",{}),S=C(v),N=g(v,"DIV",{class:!0});var R=A(N);E=g(R,"A",{class:!0,href:!0});var $=A(E);M=g($,"SPAN",{class:!0,"data-svelte-h":!0}),ce(M)!=="svelte-1m7ad6c"&&(M.textContent=K),q=C($),W=g($,"SPAN",{});var Z=A(W);x=D(Z,X),Z.forEach(h),$.forEach(h),F=C(R),k&&k.l(R),R.forEach(h),this.h()},h(){te(c.src,d=P(l[6].icon))||p(c,"src",d),p(c,"alt",f=l[6].title),p(c,"height","24"),p(t,"class","w"),p(t,"contenteditable","false"),l[6].subtitle===void 0&&ue(Q),p(b,"class","cs ml"),p(i,"class","row"),p(M,"class","material-icons md-18"),p(E,"class","btn btn-primary"),p(E,"href",V=P(l[6].link)),p(N,"class","row between")},m(v,w){z(v,e,w),z(v,a,w),z(v,i,w),u(i,c),u(i,H),u(i,b),u(b,L),u(L,r),u(b,n),u(b,t),l[6].subtitle!==void 0&&(t.innerHTML=l[6].subtitle),z(v,s,w),z(v,o,w),z(v,S,w),z(v,N,w),u(N,E),u(E,M),u(E,q),u(E,W),u(W,x),u(N,F),k&&k.m(N,null),J||(Y=pe(t,"input",Q),J=!0)},p(v,w){l=v,w&1&&!te(c.src,d=P(l[6].icon))&&p(c,"src",d),w&1&&f!==(f=l[6].title)&&p(c,"alt",f),w&1&&_!==(_=l[6].title+"")&&re(r,_),w&1&&l[6].subtitle!==t.innerHTML&&(t.innerHTML=l[6].subtitle),w&1&&V!==(V=P(l[6].link))&&p(E,"href",V),l[6].alternateLink?k?k.p(l,w):(k=se(l),k.c(),k.m(N,null)):k&&(k.d(1),k=null)},d(v){v&&(h(e),h(a),h(i),h(s),h(o),h(S),h(N)),k&&k.d(),J=!1,Y()}}}function ae(l){let e,a,i,c=l[3].title+"",d,f,H,b,L,_=G(l[3].items),r=[];for(let n=0;n<_.length;n+=1)r[n]=ie(ne(l,_,n));return{c(){e=m("span"),a=m("span"),i=m("h3"),d=B(c),f=I(),H=m("br"),b=I();for(let n=0;n<r.length;n+=1)r[n].c();L=I(),this.h()},l(n){e=g(n,"SPAN",{class:!0,style:!0});var t=A(e);a=g(t,"SPAN",{class:!0});var s=A(a);i=g(s,"H3",{class:!0});var o=A(i);d=D(o,c),o.forEach(h),s.forEach(h),f=C(t),H=g(t,"BR",{}),b=C(t);for(let S=0;S<r.length;S+=1)r[S].l(t);L=C(t),t.forEach(h),this.h()},h(){p(i,"class","ml"),p(a,"class","row"),p(e,"class","card m2"),j(e,"vertical-align","top"),j(e,"background-color","cornsilk"),j(e,"width","300px")},m(n,t){z(n,e,t),u(e,a),u(a,i),u(i,d),u(e,f),u(e,H),u(e,b);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);u(e,L)},p(n,t){if(t&1&&c!==(c=n[3].title+"")&&re(d,c),t&1){_=G(n[3].items);let s;for(s=0;s<_.length;s+=1){const o=ne(n,_,s);r[s]?r[s].p(o,t):(r[s]=ie(o),r[s].c(),r[s].m(e,L))}for(;s<r.length;s+=1)r[s].d(1);r.length=_.length}},d(n){n&&h(e),oe(r,n)}}}function ge(l){let e,a,i=T(y.downloadClient)+"",c,d,f,H=T(y.releaseHistory)+"",b,L,_,r=G(l[0]),n=[];for(let t=0;t<r.length;t+=1)n[t]=ae(le(l,r,t));return{c(){e=m("div"),a=m("h1"),c=B(i),d=I(),f=m("a"),b=B(H),L=I(),_=m("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var s=A(e);a=g(s,"H1",{});var o=A(a);c=D(o,i),o.forEach(h),d=C(s),f=g(s,"A",{style:!0,href:!0});var S=A(f);b=D(S,H),S.forEach(h),s.forEach(h),L=C(t),_=g(t,"DIV",{});var N=A(_);for(let E=0;E<n.length;E+=1)n[E].l(N);N.forEach(h),this.h()},h(){j(f,"align-self","flex-end"),p(f,"href","https://github.com/lan-genius/releases/releases"),p(e,"class","cs p")},m(t,s){z(t,e,s),u(e,a),u(a,c),u(e,d),u(e,f),u(f,b),z(t,L,s),z(t,_,s);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(_,null)},p(t,[s]){if(s&1){r=G(t[0]);let o;for(o=0;o<r.length;o+=1){const S=le(t,r,o);n[o]?n[o].p(S,s):(n[o]=ae(S),n[o].c(),n[o].m(_,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},i:ee,o:ee,d(t){t&&(h(e),h(L),h(_)),oe(n,t)}}}function _e(l,e,a){me();let i=[{icon:"/img/android.svg",title:"Android",items:[{icon:"/img/android.svg",title:".apk",subtitle:"v10.1.0",link:"https://github.com/lan-genius/releases/releases/download/v10/langenius_android_v10.1.0.apk",alternateLink:"https://wwwz.lanzout.com/iTW4T1a6rvlc"},{icon:"/img/playstore.png",title:"Play Store",subtitle:"Install from play store",link:"https://play.google.com/store/apps/details?id=com.xchat.stevenzack.langenius",alternateLink:""}]},{icon:"/img/windows.svg",title:"Windows",items:[{icon:"/img/windows.svg",title:"Windows 10/11",subtitle:T(y.ifNotWorkInstall)+'<a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net48-offline-installer"><small>.Net 4.8</small></a>',link:"/res/langenius_windows_dotnet4.8_v10.0.0.exe",alternateLink:""},{icon:"/img/windows7.jpeg",title:"Windows 7",subtitle:T(y.ifNotWorkInstall)+'<a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net35-sp1-web-installer"><small>.Net 3.5</small></a>',link:"/res/langenius_windows_dotnet3.5_v10.0.0.exe",alternateLink:""},{icon:"/img/windowsxp.jpg",title:"Windows XP/8/8.1",subtitle:T(y.dependency)+'<a target="_blank" href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net35-sp1-web-installer"><small>.Net 3.5</small></a>',link:"/res/langenius_windows_dotnet3.5_v10.0.0.exe",alternateLink:""}]},{icon:"/img/apple.svg",title:"Apple",items:[{icon:"/img/altstore.png",title:"iOS AltStore",subtitle:'<a target="_blank" href="https://altstore.io">AltStore Guide</a> <a target="_blank" href="https://www.bilibili.com/video/BV1N8411J7sn">中文安装教程</a>',link:"https://github.com/lan-genius/releases/releases/download/v11/LanGenius_ios_altstore_v11.0.0.ipa",alternateLink:"https://wwf.lanzout.com/icBYT1ry6uhg"},{icon:"/img/apple.svg",title:"Mac OS",subtitle:"v8.2.1",link:"https://github.com/lan-genius/releases/releases/download/v8/langenius_mac_v8.2.1.zip",alternateLink:"https://wwi.lanzoui.com/ieANFwhmc7a"},{icon:"/img/apple.svg",title:"iOS App Store",subtitle:"Install from iOS AppStore",link:"https://apps.apple.com/fi/app/langenius-transfer-tool/id6466735036",alternateLink:""}]},{icon:"/img/linux.svg",title:"Linux",items:[{icon:"/img/linux.svg",title:"Linux",subtitle:"v.8.2.1",link:"https://github.com/lan-genius/releases/releases/download/v8/langenius_linux_amd64_v8.2.1.tar.gz",alternateLink:"https://wwi.lanzoui.com/if63Kwhkisf"}]}];function c(d,f){d[f].subtitle=this.innerHTML,a(0,i)}return[i,c]}class Ae extends fe{constructor(e){super(),de(this,e,_e,ge,he,{})}}export{Ae as component};
