(self["webpackChunkmeteo"]=self["webpackChunkmeteo"]||[]).push([[357],{6357:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var l=a(3673),o=a(2323);const n=(0,l.Uk)(" Meteo ");function r(e,t,a,r,u,i){const c=(0,l.up)("q-btn"),d=(0,l.up)("q-toolbar-title"),m=(0,l.up)("q-toolbar"),p=(0,l.up)("q-header"),s=(0,l.up)("q-card-section"),w=(0,l.up)("q-card"),f=(0,l.up)("q-dialog"),g=(0,l.up)("q-route-tab"),b=(0,l.up)("q-tabs"),q=(0,l.up)("q-footer"),Z=(0,l.up)("q-item-label"),k=(0,l.up)("Menu"),W=(0,l.up)("q-list"),Q=(0,l.up)("q-drawer"),_=(0,l.up)("router-view"),y=(0,l.up)("q-page-container"),h=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(h,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{round:"",onClick:e.toggleLeftDrawer,class:"large-screen-only","aria-label":"Menu",color:"secondary",icon:"menu"},null,8,["onClick"]),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[n])),_:1}),((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.roleJSON,(t=>((0,l.wg)(),(0,l.j4)(c,{key:t.id,label:t.name,onClick:a=>e.open("right",t.name),flat:"",stretch:""},null,8,["label","onClick"])))),128))])),_:1})])),_:1}),(0,l.Wm)(f,{modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.dialog=t),position:e.position},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{width:"250px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"row items-center no-wrap"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Теперь вы "+(0,o.zw)(e.roleName),1)])),_:1})])),_:1})])),_:1},8,["modelValue","position"]),(0,l.Wm)(q,{class:"bg-white small-screen-only",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"text-grey-10","active-color":"primary","indicator-color":"transparent"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{to:"/",name:"Index",icon:"thermostat"}),(0,l.Wm)(g,{to:"/graf",name:"Graf",icon:"insert_chart"})])),_:1})])),_:1}),(0,l.Wm)(Q,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:"",class:"bg-grey-1"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{header:"",class:"text-grey-8"}),((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.menuJSON,(e=>((0,l.wg)(),(0,l.j4)(k,(0,l.dG)({key:e.title},e,{to:e.to,clickable:""}),null,16,["to"])))),128))])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(l.Ob,null,[(0,l.Wm)(_)],1024))])),_:1})])),_:1})}function u(e,t,a,n,r,u){const i=(0,l.up)("q-icon"),c=(0,l.up)("q-item-section"),d=(0,l.up)("q-item-label"),m=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(m,{clickable:"",tag:"a",to:e.link},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(c,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{name:e.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.title),1)])),_:1}),(0,l.Wm)(d,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])}const i=(0,l.aZ)({name:"Menu",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var c=a(3414),d=a(2035),m=a(4554),p=a(2350),s=a(7518),w=a.n(s);i.render=u;const f=i;w()(i,"components",{QItem:c.Z,QItemSection:d.Z,QIcon:m.Z,QItemLabel:p.Z});const g=JSON.parse('[{"title":"Прогноз по дням","icon":"thermostat","to":"/"},{"title":"График динамики температур посуточно","caption":"днем и ночью","icon":"insert_chart","to":"/graf"}]'),b=JSON.parse('[{"id":"1","name":"user"},{"id":"2","name":"admin"}]');var q=a(1959);const Z=(0,l.aZ)({name:"MainLayout",components:{Menu:f},setup(){const e=(0,q.iH)(!1),t=(0,q.iH)(!1),a=(0,q.iH)("top");return{menuJSON:g,roleJSON:b,dialog:t,position:a,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},open(e,l){this.roleName=l,a.value=e,t.value=!0}}}});var k=a(3066),W=a(3812),Q=a(9570),_=a(8240),y=a(3747),h=a(3258),v=a(151),S=a(5589),O=a(1762),C=a(7547),j=a(208),L=a(7317),N=a(7011),D=a(2652);Z.render=r;const H=Z;w()(Z,"components",{QLayout:k.Z,QHeader:W.Z,QToolbar:Q.Z,QBtn:_.Z,QToolbarTitle:y.Z,QDialog:h.Z,QCard:v.Z,QCardSection:S.Z,QFooter:O.Z,QTabs:C.Z,QRouteTab:j.Z,QDrawer:L.Z,QList:N.Z,QItemLabel:p.Z,QPageContainer:D.Z})}}]);