(self["webpackChunkmeteo"]=self["webpackChunkmeteo"]||[]).push([[459],{3459:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Q});a(71);var l=a(3673),s=a(2323),o=a(2986),d=a.n(o),i=a(9183),c=a.n(i);const r={class:"q-pa-md"},n={class:"row justify-between q-gutter-md"},u={class:"col-xs-10 col-sm"},m=(0,l.Uk)(" Выберите город"),p={class:"text-center col-xs-10 col-sm"},w=(0,l.Wm)("div",{class:"text-h6 text-center"},"Погода на день",-1),f={class:"row"},g={key:0,src:d()},h={key:1,src:c()};function k(e,t,a,o,d,i){const c=(0,l.up)("q-icon"),k=(0,l.up)("q-input"),W=(0,l.up)("q-btn"),b=(0,l.up)("q-card-section"),v=(0,l.up)("q-list"),y=(0,l.up)("q-card"),q=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",r,[(0,l.Wm)("div",n,[(0,l.Wm)("div",u,[(0,l.Wm)(k,{color:"orange",standout:"","bottom-slots":"",modelValue:e.options.params.location,"onUpdate:modelValue":t[1]||(t[1]=t=>e.options.params.location=t),label:"Город"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(c,{name:"place"})])),hint:(0,l.w5)((()=>[m])),_:1},8,["modelValue"])]),(0,l.Wm)("div",p,[(0,l.Wm)(W,{size:"lg",onClick:e.getMeteo,color:"secondary",label:"Получить прогноз"},null,8,["onClick"])])]),((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.meteo,(e=>((0,l.wg)(),(0,l.j4)(y,{key:e,flat:"",bordered:"",class:"my-card q-mt-md text-white",style:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[w])),_:1}),(0,l.Wm)(b,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)("div",null,[(0,l.Wm)("div",f,[((0,l.wg)(),(0,l.j4)("div",{"v-for":e in e.values.slice(1),key:e,class:"col-12 col-sm-4 q-pa-md"},[(0,l.Wm)(y,{class:"my-card text-center"},{default:(0,l.w5)((()=>[""==e.preciptype?((0,l.wg)(),(0,l.j4)("img",g)):(0,l.kq)("",!0),"rain"==e.preciptype?((0,l.wg)(),(0,l.j4)("img",h)):(0,l.kq)("",!0),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,{color:"blue",class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Погода на "+(0,s.zw)(new Date(e.datetimeStr).toLocaleDateString()),1)])),_:2},1024),(0,l.Wm)(W,{color:"blue",class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Температура: "+(0,s.zw)(e.temp)+" °C ",1)])),_:2},1024),(0,l.Wm)(W,{color:"blue",class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Максимальная: "+(0,s.zw)(e.maxt)+" °C ",1)])),_:2},1024),(0,l.Wm)(W,{color:"blue",class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Ощущаемая: "+(0,s.zw)(e.heatindex)+" °C ",1)])),_:2},1024),(0,l.Wm)(W,{color:"blue",class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Влажность: "+(0,s.zw)(e.humidity)+" % ",1)])),_:2},1024),(0,l.Wm)(W,{color:"blue",class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Скорость ветра: "+(0,s.zw)(e.wspd)+" m/s ",1)])),_:2},1024),(0,l.Wm)(W,{color:"blue",class:"full-width"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Видимость: "+(0,s.zw)(e.visibility)+" km ",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],8,["v-for"]))])])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})}var W=a(52),b=a.n(W);const v=(0,l.aZ)({name:"Погода на день",data(){return{meteo:"",day:this.$route.params.id,options:{method:"GET",url:"https://visual-crossing-weather.p.rapidapi.com/forecast",params:{location:"Тюмень",aggregateHours:"24",shortColumnNames:"0",unitGroup:"metric",contentType:"json"},headers:{"x-rapidapi-key":"7defef0c4dmsh8dfca6d2eb8b4edp1277b1jsn1891049e62f4","x-rapidapi-host":"visual-crossing-weather.p.rapidapi.com","x-rapidapi-ua":"RapidAPI-Playground"}}}},methods:{getMeteo(){b().request(this.options).then((e=>{this.meteo=e.data.locations}))}}});var y=a(4379),q=a(6805),x=a(4554),_=a(8240),C=a(151),j=a(5589),U=a(7011),z=a(7518),Z=a.n(z);v.render=k;const Q=v;Z()(v,"components",{QPage:y.Z,QInput:q.Z,QIcon:x.Z,QBtn:_.Z,QCard:C.Z,QCardSection:j.Z,QList:U.Z})},9183:(e,t,a)=>{e.exports=a.p+"img/rain.3ce2ddd7.png"},2986:(e,t,a)=>{e.exports=a.p+"img/sun.5aa72e46.png"}}]);