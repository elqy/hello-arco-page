import{_ as h,a as V,u as q}from"./index.aa45b352.js";/* empty css               */import{d as y,aJ as f,A as u,B as b,aG as t,aF as e,aL as l,aM as i,E as _,C as N,bl as w,b8 as I,aI as E,aH as G,aC as v,aD as z,bs as j,e as Q,u as g,bX as H,bY as J,bZ as F,aV as C,br as K,b3 as B,bR as S,bk as U,ba as X,bb as Y,c as x,h as L,bf as M,bV as Z,bt as W,bq as tt,bS as et,bT as ot,bj as at,b_ as nt,bu as st,b4 as it,b$ as ct,b9 as lt}from"./arco.603f0d7f.js";/* empty css                *//* empty css                *//* empty css              *//* empty css                *//* empty css               */import{a as _t}from"./message.41b71c36.js";import{u as rt}from"./loading.7dd90c01.js";/* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import"./chart.9d80d461.js";import"./vue.41c8e70f.js";const dt={class:"chat-item-footer"},ut={class:"chat-item-time"},pt={class:"chat-item-actions"},mt={class:"chat-item-actions-item"},ft={class:"chat-item-actions-item chat-item-actions-collect"},ht=y({__name:"chat-item",props:{itemData:{type:Object,default(){return{}}}},setup(n){return(o,r)=>{const s=w,c=f("icon-command"),a=f("icon-star"),d=I;return u(),b("div",{class:N(["chat-item",n.itemData.isCollect?"chat-item-collected":""])},[t(d,{size:4,direction:"vertical",fill:""},{default:e(()=>[t(s,{type:"warning"},{default:e(()=>[l(i(n.itemData.username),1)]),_:1}),t(s,null,{default:e(()=>[l(i(n.itemData.content),1)]),_:1}),_("div",dt,[_("div",ut,[t(s,{type:"secondary"},{default:e(()=>[l(i(n.itemData.time),1)]),_:1})]),_("div",pt,[_("div",mt,[t(c)]),_("div",ft,[t(a)])])])]),_:1})],2)}}});const bt=h(ht,[["__scopeId","data-v-29116fbe"]]),vt={class:"chat-list"},yt=y({__name:"chat-list",props:{renderList:{type:Array,default(){return[]}}},setup(n){return(o,r)=>{const s=j;return u(),b("div",vt,[(u(!0),b(E,null,G(n.renderList,c=>(u(),v(bt,{key:c.id,"item-data":c},null,8,["item-data"]))),128)),n.renderList.length?z("",!0):(u(),v(s,{key:0,status:"404"}))])}}});const gt=h(yt,[["__scopeId","data-v-9cd22eeb"]]),$t={class:"chat-panel-content"},St={class:"chat-panel-footer"},It=y({__name:"chat-panel",setup(n){const{loading:o,setLoading:r}=rt(!0),s=Q([]);return(async()=>{try{const{data:a}=await _t();s.value=a}catch{}finally{r(!1)}})(),(a,d)=>{const p=H,m=J,k=F,T=f("icon-download"),$=C,D=I,P=K,R=f("icon-face-smile-fill"),O=B,A=S;return u(),v(A,{class:"general-card chat-panel",title:a.$t("monitor.title.chatPanel"),bordered:!1,"header-style":{paddingBottom:"0"},"body-style":{height:"100%",paddingTop:"16px",display:"flex",flexFlow:"column"}},{default:e(()=>[t(D,{size:8},{default:e(()=>[t(m,{style:{width:"86px"},"default-value":"all"},{default:e(()=>[t(p,{value:"all"},{default:e(()=>[l(i(a.$t("monitor.chat.options.all")),1)]),_:1})]),_:1}),t(k,{placeholder:a.$t("monitor.chat.placeholder.searchCategory")},null,8,["placeholder"]),t($,{type:"text"},{default:e(()=>[t(T)]),_:1})]),_:1}),_("div",$t,[t(P,{loading:g(o),style:{width:"100%"}},{default:e(()=>[t(gt,{"render-list":s.value},null,8,["render-list"])]),_:1},8,["loading"])]),_("div",St,[t(D,{size:8},{default:e(()=>[t(O,null,{suffix:e(()=>[t(R)]),_:1}),t($,{type:"primary"},{default:e(()=>[l(i(a.$t("monitor.chat.update")),1)]),_:1})]),_:1})])]),_:1},8,["title"])}}});const wt=h(It,[["__scopeId","data-v-5f0d9791"]]),Ct=n=>(X("data-v-7c559bf9"),n=n(),Y(),n),kt={class:"studio-wrapper"},Tt=Ct(()=>_("img",{src:"http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",class:"studio-preview"},null,-1)),xt={class:"studio-bar"},Dt={key:0},Lt=["src"],Mt=y({__name:"studio",setup(n){const o=V();return(r,s)=>{const c=f("icon-more"),a=U,d=w,p=I,m=S;return u(),v(m,{class:"general-card",title:r.$t("monitor.title.studioPreview")},{extra:e(()=>[t(c)]),default:e(()=>[_("div",kt,[Tt,_("div",xt,[g(o)?(u(),b("div",Dt,[t(p,{size:12},{default:e(()=>[t(a,{size:24},{default:e(()=>[_("img",{src:g(o).avatar},null,8,Lt)]),_:1}),t(d,null,{default:e(()=>[l(i(g(o).name)+" "+i(r.$t("monitor.studioPreview.studio")),1)]),_:1})]),_:1})])):z("",!0),t(d,{type:"secondary"},{default:e(()=>[l(" 36,000 "+i(r.$t("monitor.studioPreview.watching")),1)]),_:1})])])]),_:1},8,["title"])}}});const qt=h(Mt,[["__scopeId","data-v-7c559bf9"]]),zt=y({__name:"data-statistic-list",setup(n){const{t:o}=q(),r=[{cover:"http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",name:"\u89C6\u9891\u76F4\u64AD",duration:"00:05:19",id:"54e23ade",status:-1}],s=a=>a===-1?`<a-tag  color="red" class='data-statistic-list-cover-tag'>
            ${o("monitor.list.tag.auditFailed")}
        </a-tag>`:"",c=x(()=>[{title:o("monitor.list.title.order"),render({rowIndex:a}){const d=`<span>${a+1}</span>`;return L(M(d))}},{title:o("monitor.list.title.cover"),render({record:a}){const d=`<div class='data-statistic-list-cover-wrapper'>
              <img src=${a.cover} />
              ${s(a.status)}
            </div>`;return L(M(d))}},{title:o("monitor.list.title.name"),dataIndex:"name"},{dataIndex:"duration",title:o("monitor.list.title.duration")},{dataIndex:"id",title:o("monitor.list.title.id")}]);return(a,d)=>{const p=Z,m=w;return u(),b("div",null,[t(p,{columns:g(c),data:r,"row-key":"id","row-selection":{type:"checkbox",showCheckedAll:!0},border:!1,pagination:!1},null,8,["columns"]),t(m,{type:"secondary",class:"data-statistic-list-tip"},{default:e(()=>[l(i(a.$t("monitor.list.tip.rotations"))+" "+i(r.length)+" "+i(a.$t("monitor.list.tip.rest")),1)]),_:1})])}}});const Ft={class:"data-statistic-content"},Bt={class:"data-statistic-list-wrapper"},Pt={class:"data-statistic-list-header"},Rt={class:"data-statistic-list-content"},Ot=y({__name:"data-statistic",setup(n){return(o,r)=>{const s=W,c=tt,a=et,d=ot,p=C,m=S;return u(),v(m,{bordered:!1,"body-style":{padding:"20px"}},{default:e(()=>[t(c,{"default-active-tab":"liveMethod"},{default:e(()=>[t(s,{key:"liveMethod",title:o.$t("monitor.tab.title.liveMethod")},null,8,["title"]),t(s,{key:"onlinePopulation",title:o.$t("monitor.tab.title.onlinePopulation")},null,8,["title"])]),_:1}),_("div",Ft,[t(d,{"default-value":3,type:"button"},{default:e(()=>[t(a,{value:1},{default:e(()=>[l(i(o.$t("monitor.liveMethod.normal")),1)]),_:1}),t(a,{value:2},{default:e(()=>[l(i(o.$t("monitor.liveMethod.flowControl")),1)]),_:1}),t(a,{value:3},{default:e(()=>[l(i(o.$t("monitor.liveMethod.video")),1)]),_:1}),t(a,{value:4},{default:e(()=>[l(i(o.$t("monitor.liveMethod.web")),1)]),_:1})]),_:1}),_("div",Bt,[_("div",Pt,[t(p,{type:"text"},{default:e(()=>[l(i(o.$t("monitor.editCarousel")),1)]),_:1}),t(p,{disabled:""},{default:e(()=>[l(i(o.$t("monitor.startCarousel")),1)]),_:1})]),_("div",Rt,[t(zt)])])])]),_:1})}}});const At=h(Ot,[["__scopeId","data-v-514de4da"]]),Vt={key:0},Nt={key:1},Et=y({__name:"studio-status",setup(n){const{t:o}=q(),r=x(()=>[{label:"mainstream",value:"6 Mbps"},{label:o("monitor.studioStatus.frameRate"),value:"60"},{label:"hotStandby",value:"6 Mbps"},{label:o("monitor.studioStatus.frameRate"),value:"60"},{label:"coldStandby",value:"6 Mbps"},{label:o("monitor.studioStatus.frameRate"),value:"60"}]),s=x(()=>[{label:o("monitor.studioStatus.line"),value:"\u70ED\u5907"},{label:"CDN",value:"KS"},{label:o("monitor.studioStatus.play"),value:"FLV"},{label:o("monitor.studioStatus.pictureQuality"),value:"\u539F\u753B"}]);return(c,a)=>{const d=at,p=w,m=nt,k=st,T=S;return u(),v(T,{class:"general-card",title:c.$t("monitor.studioStatus.title.studioStatus")},{extra:e(()=>[t(d,{color:"green"},{default:e(()=>[l(i(c.$t("monitor.studioStatus.smooth")),1)]),_:1})]),default:e(()=>[t(m,{layout:"horizontal",data:g(r),column:2},{label:e(({label:$})=>[["mainstream","hotStandby","coldStandby"].includes($)?(u(),b("span",Vt,[t(p,{style:{"padding-right":"8px"}},{default:e(()=>[l(i(c.$t(`monitor.studioStatus.${$}`)),1)]),_:2},1024),l(" "+i(c.$t("monitor.studioStatus.bitRate")),1)])):(u(),b("span",Nt,i($),1))]),_:1},8,["data"]),t(k,{style:{"margin-bottom":"16px"},heading:6},{default:e(()=>[l(i(c.$t("monitor.studioStatus.title.pictureInfo")),1)]),_:1}),t(m,{layout:"horizontal",data:g(s),column:2},null,8,["data"])]),_:1},8,["title"])}}});const Gt=h(Et,[["__scopeId","data-v-5fd27840"]]),jt={};function Qt(n,o){const r=f("IconTags"),s=C,c=f("IconSwap"),a=f("IconStop"),d=f("IconArrowRight"),p=I,m=S;return u(),v(m,{class:"general-card",title:n.$t("monitor.title.quickOperation")},{default:e(()=>[t(p,{direction:"vertical",fill:"",size:10},{default:e(()=>[t(s,{long:""},{icon:e(()=>[t(r)]),default:e(()=>[l(i(n.$t("monitor.quickOperation.changeClarity"))+" ",1)]),_:1}),t(s,{long:""},{icon:e(()=>[t(c)]),default:e(()=>[l(i(n.$t("monitor.quickOperation.switchStream"))+" ",1)]),_:1}),t(s,{long:""},{icon:e(()=>[t(a)]),default:e(()=>[l(i(n.$t("monitor.quickOperation.removeClarity"))+" ",1)]),_:1}),t(s,{long:""},{icon:e(()=>[t(d)]),default:e(()=>[l(i(n.$t("monitor.quickOperation.pushFlowGasket"))+" ",1)]),_:1})]),_:1})]),_:1},8,["title"])}const Ht=h(jt,[["render",Qt]]),Jt={};function Kt(n,o){const r=B,s=it,c=ct,a=F,d=lt,p=C,m=S;return u(),v(m,{class:"general-card",title:n.$t("monitor.title.studioInfo")},{default:e(()=>[t(d,{model:{},layout:"vertical"},{default:e(()=>[t(s,{label:n.$t("monitor.studioInfo.label.studioTitle"),required:""},{default:e(()=>[t(r,{placeholder:`\u738B\u7ACB\u7FA4${n.$t("monitor.studioInfo.placeholder.studioTitle")}`},null,8,["placeholder"])]),_:1},8,["label"]),t(s,{label:n.$t("monitor.studioInfo.label.onlineNotification"),required:""},{default:e(()=>[t(c)]),_:1},8,["label"]),t(s,{label:n.$t("monitor.studioInfo.label.studioCategory"),required:""},{default:e(()=>[t(a)]),_:1},8,["label"]),t(s,{label:n.$t("monitor.studioInfo.label.studioCategory"),required:""},{default:e(()=>[t(a)]),_:1},8,["label"])]),_:1}),t(p,{type:"primary"},{default:e(()=>[l(i(n.$t("monitor.studioInfo.btn.fresh")),1)]),_:1})]),_:1},8,["title"])}const Ut=h(Jt,[["render",Kt]]),Xt={class:"container"},Yt={class:"layout"},Zt={class:"layout-left-side"},Wt={class:"layout-content"},te={class:"layout-right-side"},ee={name:"Monitor"},oe=y({...ee,setup(n){return(o,r)=>{const s=f("Breadcrumb"),c=I;return u(),b("div",Xt,[t(s,{items:["menu.dashboard","menu.dashboard.monitor"]},null,8,["items"]),_("div",Yt,[_("div",Zt,[t(wt)]),_("div",Wt,[t(c,{size:16,direction:"vertical",fill:""},{default:e(()=>[t(qt),t(At)]),_:1})]),_("div",te,[t(c,{size:16,direction:"vertical",fill:""},{default:e(()=>[t(Gt),t(Ht),t(Ut)]),_:1})])])])}}});const ke=h(oe,[["__scopeId","data-v-12acd164"]]);export{ke as default};