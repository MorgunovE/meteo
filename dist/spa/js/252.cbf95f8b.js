(self["webpackChunkmeteo"]=self["webpackChunkmeteo"]||[]).push([[252],{8252:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>y});t(71);var s=t(3673),l=t(2323),o=t(2986),d=t.n(o),r=t(9183),u=t.n(r);const i={class:"q-pa-md"},c={class:"text-h6 text-center"};function n(e,a,t,o,r,n){const m=(0,s.up)("q-card-section"),p=(0,s.up)("q-img"),w=(0,s.up)("q-btn"),f=(0,s.up)("q-card-actions"),g=(0,s.up)("q-card"),v=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)("div",i,[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(e.meteo,(a=>((0,s.wg)(),(0,s.j4)(g,{key:a,flat:"",bordered:"",class:"my-card q-mt-md text-white",style:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)("div",c," Прогноз погоды на "+(0,l.zw)(new Date(a.values[e.id].datetimeStr).toLocaleDateString()),1)])),_:2},1024),(0,s.Wm)(m,{class:"q-pt-none "},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{class:"my-card ",flat:"",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"q-pa-none row"},{default:(0,s.w5)((()=>[""==a.values[e.id].preciptype?((0,s.wg)(),(0,s.j4)(p,{key:0,class:"col-12 col-sm-4",src:d()})):(0,s.kq)("",!0),"rain"==a.values[e.id].preciptype?((0,s.wg)(),(0,s.j4)(p,{key:1,class:"col-12 col-sm-4",src:u()})):(0,s.kq)("",!0),(0,s.Wm)(f,{vertical:"",class:"justify-around col-12 col-sm-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Температура: "+(0,l.zw)(a.values[e.id].temp)+" °C ",1)])),_:2},1024),(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Максимальная: "+(0,l.zw)(a.values[e.id].maxt)+" °C ",1)])),_:2},1024),(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Ощущаемая: "+(0,l.zw)(a.values[e.id].heatindex)+" °C ",1)])),_:2},1024),(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Влажность: "+(0,l.zw)(a.values[e.id].humidity)+" % ",1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(f,{vertical:"",class:"justify-around col-12 col-sm-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Скорость ветра: "+(0,l.zw)(a.values[e.id].wspd)+" m/s ",1)])),_:2},1024),(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Видимость: "+(0,l.zw)(a.values[e.id].visibility)+" km ",1)])),_:2},1024),(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Давление: "+(0,l.zw)(a.values[e.id].sealevelpressure)+" мбар ",1)])),_:2},1024),(0,s.Wm)(w,{color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Вероятность осадков: "+(0,l.zw)(a.values[e.id].pop)+" % ",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])])),_:1})}var m=t(52),p=t.n(m);const w=(0,s.aZ)({name:"Погода на день",data(){return{meteo:"",id:this.$route.params.id,options:{method:"GET",url:"https://visual-crossing-weather.p.rapidapi.com/forecast",params:{location:"Тюмень",aggregateHours:"24",shortColumnNames:"0",unitGroup:"metric",contentType:"json"},headers:{"x-rapidapi-key":"7defef0c4dmsh8dfca6d2eb8b4edp1277b1jsn1891049e62f4","x-rapidapi-host":"visual-crossing-weather.p.rapidapi.com","x-rapidapi-ua":"RapidAPI-Playground"}}}},created(){this.getMeteo()},methods:{getMeteo(){p().request(this.options).then((e=>{this.meteo=e.data.locations}))}}});var f=t(4379),g=t(151),v=t(5589),h=t(4027),k=t(9367),b=t(8240),W=t(7518),_=t.n(W);w.render=n;const y=w;_()(w,"components",{QPage:f.Z,QCard:g.Z,QCardSection:v.Z,QImg:h.Z,QCardActions:k.Z,QBtn:b.Z})},9183:(e,a,t)=>{e.exports=t.p+"img/rain.3ce2ddd7.png"},2986:(e,a,t)=>{e.exports=t.p+"img/sun.5aa72e46.png"}}]);