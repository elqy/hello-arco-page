import{a as K,_ as w}from"./index.adb081dd.js";/* empty css               */import{d as L,aJ as N,A as o,B as I,aG as e,aF as t,E as m,u as s,aL as i,aM as u,bk as M,bu as O,bl as E,b8 as G,aC as a,c7 as S,c8 as C,bs as X,bR as q,aI as T,aH as z,b7 as R,ca as Y,bM as V,bW as j,e as Z,cb as D,bn as H,bo as F,bp as U,bP as tt,bQ as et}from"./arco.603f0d7f.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import{u as J}from"./loading.7dd90c01.js";/* empty css               */import{q as ot,a as at,b as nt}from"./user-center.48d37ee9.js";import{u as Q}from"./request.dcc53b78.js";/* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                */import"./chart.9d80d461.js";import"./vue.41c8e70f.js";const _t={class:"header"},st=["src"],ct={class:"user-msg"},lt=L({__name:"user-info-header",setup($){const n=K();return(d,l)=>{const c=N("icon-camera"),_=M,g=O,f=N("icon-user"),p=E,y=N("icon-home"),b=N("icon-location"),v=G;return o(),I("div",_t,[e(v,{size:12,direction:"vertical",align:"center"},{default:t(()=>[e(_,{size:64},{"trigger-icon":t(()=>[e(c)]),default:t(()=>[m("img",{src:s(n).avatar},null,8,st)]),_:1}),e(g,{heading:6,style:{margin:"0"}},{default:t(()=>[i(u(s(n).name),1)]),_:1}),m("div",ct,[e(v,{size:18},{default:t(()=>[m("div",null,[e(f),e(p,null,{default:t(()=>[i(u(s(n).jobName),1)]),_:1})]),m("div",null,[e(y),e(p,null,{default:t(()=>[i(u(s(n).organizationName),1)]),_:1})]),m("div",null,[e(b),e(p,null,{default:t(()=>[i(u(s(n).locationName),1)]),_:1})])]),_:1})])]),_:1})])}}});const rt=w(lt,[["__scopeId","data-v-c1f680b3"]]),it=L({__name:"latest-notification",setup($){const{loading:n,setLoading:d}=J(!0);return setTimeout(()=>{d(!1)},500),(l,c)=>{const _=S,g=C,f=X,p=q;return o(),a(p,{class:"general-card",title:l.$t("userInfo.title.latestNotification")},{default:t(()=>[s(n)?(o(),a(g,{key:0,animation:!0},{default:t(()=>[e(_,{rows:3})]),_:1})):(o(),a(f,{key:1,status:"404"},{subtitle:t(()=>[i(u(l.$t("userInfo.nodata")),1)]),_:1}))]),_:1},8,["title"])}}});const ut=w(it,[["__scopeId","data-v-b8426cb1"]]),dt=["src"],pt=L({__name:"my-project",setup($){const n=Array(6).fill({}),{loading:d,response:l}=Q(ot,n);return(c,_)=>{const g=R,f=S,p=C,y=E,b=M,v=Y,h=G,k=q,A=V,B=j;return o(),a(k,{class:"general-card",title:c.$t("userInfo.title.myProject")},{extra:t(()=>[e(g,null,{default:t(()=>[i(u(c.$t("userInfo.showMore")),1)]),_:1})]),default:t(()=>[e(B,{gutter:16},{default:t(()=>[(o(!0),I(T,null,z(s(l),(r,P)=>(o(),a(A,{key:P,xs:12,sm:12,md:12,lg:12,xl:8,xxl:8,class:"my-project-item"},{default:t(()=>[e(k,null,{default:t(()=>[s(d)?(o(),a(p,{key:0,loading:s(d),animation:!0},{default:t(()=>[e(f,{rows:3})]),_:1},8,["loading"])):(o(),a(h,{key:1,direction:"vertical"},{default:t(()=>[e(y,{bold:""},{default:t(()=>[i(u(r.name),1)]),_:2},1024),e(y,{type:"secondary"},{default:t(()=>[i(u(r.description),1)]),_:2},1024),e(h,null,{default:t(()=>[e(v,{size:24},{default:t(()=>[i(u(r.contributors)+" ",1),(o(!0),I(T,null,z(r.contributors,(x,W)=>(o(),a(b,{key:W,size:32},{default:t(()=>[m("img",{alt:"avatar",src:x.avatar},null,8,dt)]),_:2},1024))),128))]),_:2},1024),e(y,{type:"secondary"},{default:t(()=>[i(" \u7B49"+u(r.peopleNumber)+"\u4EBA ",1)]),_:2},1024)]),_:2},1024)]),_:2},1024))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});const mt=w(pt,[["__scopeId","data-v-346ab0b7"]]),ft=["src"],yt=L({__name:"latest-activity",setup($){const{loading:n,setLoading:d}=J(!0),l=Z(new Array(7).fill({}));return(async()=>{try{const{data:_}=await at();l.value=_}catch{}finally{d(!1)}})(),(_,g)=>{const f=R,p=D,y=V,b=S,v=j,h=C,k=M,A=H,B=F,r=U,P=q;return o(),a(P,{class:"general-card",title:_.$t("userInfo.title.latestActivity")},{extra:t(()=>[e(f,null,{default:t(()=>[i(u(_.$t("userInfo.viewAll")),1)]),_:1})]),default:t(()=>[e(r,{bordered:!1},{default:t(()=>[(o(!0),I(T,null,z(l.value,x=>(o(),a(B,{key:x.id,"action-layout":"horizontal"},{default:t(()=>[s(n)?(o(),a(h,{key:0,loading:s(n),animation:!0,class:"skeleton-item"},{default:t(()=>[e(v,{gutter:6},{default:t(()=>[e(y,{span:2},{default:t(()=>[e(p,{shape:"circle"})]),_:1}),e(y,{span:22},{default:t(()=>[e(b,{widths:["40%","100%"],rows:2})]),_:1})]),_:1})]),_:1},8,["loading"])):(o(),a(A,{key:1,title:x.title,description:x.description},{avatar:t(()=>[e(k,null,{default:t(()=>[m("img",{src:x.avatar},null,8,ft)]),_:2},1024)]),_:2},1032,["title","description"]))]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});const gt=w(yt,[["__scopeId","data-v-0181370b"]]),vt=["src"],bt=L({__name:"my-team",setup($){const n=new Array(4).fill({}),{loading:d,response:l}=Q(nt,n);return(c,_)=>{const g=D,f=V,p=S,y=j,b=C,v=M,h=H,k=F,A=U,B=q;return o(),a(B,{class:"general-card",title:c.$t("userInfo.tab.title.team"),"header-style":{paddingBottom:"18px"},"body-style":{paddingBottom:"12px"}},{default:t(()=>[e(A,{bordered:!1},{default:t(()=>[(o(!0),I(T,null,z(s(l),r=>(o(),a(k,{key:r.id,"action-layout":"horizontal"},{default:t(()=>[s(d)?(o(),a(b,{key:0,loading:s(d),animation:!0},{default:t(()=>[e(y,{gutter:6},{default:t(()=>[e(f,{span:6},{default:t(()=>[e(g,{shape:"circle"})]),_:1}),e(f,{span:16},{default:t(()=>[e(p,{widths:["100%","40%"],rows:2})]),_:1})]),_:1})]),_:1},8,["loading"])):(o(),a(h,{key:1,title:r.name},{avatar:t(()=>[e(v,null,{default:t(()=>[m("img",{src:r.avatar},null,8,vt)]),_:2},1024)]),description:t(()=>[i(" \u5171"+u(r.peopleNumber)+"\u4EBA ",1)]),_:2},1032,["title"]))]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});const ht=w(bt,[["__scopeId","data-v-654c7604"]]),kt={class:"container"},xt={class:"content"},It={class:"content-left"},wt={class:"content-right"},Lt={name:"Info"},$t=L({...Lt,setup($){return(n,d)=>{const l=N("Breadcrumb"),c=tt,_=et;return o(),I("div",kt,[e(l,{items:["menu.user","menu.user.info"]},null,8,["items"]),e(rt),m("div",xt,[m("div",It,[e(_,{cols:24,"col-gap":16,"row-gap":16},{default:t(()=>[e(c,{span:24},{default:t(()=>[e(mt)]),_:1}),e(c,{span:24},{default:t(()=>[e(gt)]),_:1})]),_:1})]),m("div",wt,[e(_,{cols:24,"row-gap":16},{default:t(()=>[e(c,{span:24},{default:t(()=>[e(ht)]),_:1}),e(c,{class:"panel",span:24},{default:t(()=>[e(ut)]),_:1})]),_:1})])])])}}});const Wt=w($t,[["__scopeId","data-v-5ed09bd4"]]);export{Wt as default};