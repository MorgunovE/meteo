(self["webpackChunkmeteo"]=self["webpackChunkmeteo"]||[]).push([[616],{1616:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>I});l(71);var a=l(3673),o=l(2323),s=l(2986),n=l.n(s),c=l(9183),i=l.n(c);const r={class:"q-pa-md"},d={class:"row justify-between q-gutter-md"},u={class:"col-xs-10 col-sm"},m=(0,a.Uk)(" Выберите город "),w={class:"text-center col-xs-10 col-sm"},p={class:"text-h6 text-center"},f=(0,a.Wm)("div",{class:"text-h6 text-center"},"Погода на неделю",-1),W={class:"row"},g={key:0,src:n()},k={key:1,src:i()};function h(e,t,l,s,c,i){const h=(0,a.up)("q-icon"),b=(0,a.up)("q-input"),_=(0,a.up)("q-btn"),C=(0,a.up)("q-card-section"),y=(0,a.up)("q-img"),q=(0,a.up)("q-card-actions"),v=(0,a.up)("q-card"),x=(0,a.up)("q-separator"),z=(0,a.up)("q-list"),U=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",r,[(0,a.Wm)("div",d,[(0,a.Wm)("div",u,[(0,a.Wm)(b,{color:"orange",standout:"","bottom-slots":"",modelValue:e.options.params.location,"onUpdate:modelValue":t[1]||(t[1]=t=>e.options.params.location=t),label:"Город"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(h,{name:"place"})])),hint:(0,a.w5)((()=>[m])),_:1},8,["modelValue"])]),(0,a.Wm)("div",w,[(0,a.Wm)(_,{size:"lg",onClick:e.getMeteo,color:"secondary",label:"Получить прогноз"},null,8,["onClick"])])]),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.meteo,(l=>((0,a.wg)(),(0,a.j4)(v,{key:l,flat:"",bordered:"",class:"my-card q-mt-md text-white",style:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},{default:(0,a.w5)((()=>[(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",p,(0,o.zw)(l.address),1)])),_:2},1024),(0,a.Wm)(C,{class:"q-pt-none "},{default:(0,a.w5)((()=>[(0,a.Wm)("a",{onClick:t[2]||(t[2]=t=>e.$router.push("/item/0"))},[(0,a.Wm)(v,{class:"my-card ",flat:"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"q-pa-none row"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:"col-12 col-sm-4",src:n()}),(0,a.Wm)(q,{vertical:"",class:"justify-around col-12 col-sm-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Погода сейчас на: "+(0,o.zw)(new Date(l.currentConditions.datetime).toLocaleString()),1)])),_:2},1024),(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Температура: "+(0,o.zw)(l.currentConditions.temp)+" °C ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Ощущаемая: "+(0,o.zw)(l.currentConditions.heatindex)+" °C ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Влажность: "+(0,o.zw)(l.currentConditions.humidity)+" % ",1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(q,{vertical:"",class:"justify-around col-12 col-sm-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Скорость ветра: "+(0,o.zw)(l.currentConditions.wspd)+" m/s ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Видимость: "+(0,o.zw)(l.currentConditions.visibility)+" km ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Рассвет: "+(0,o.zw)(new Date(l.currentConditions.sunrise).toLocaleTimeString()),1)])),_:2},1024),(0,a.Wm)(_,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Закат: "+(0,o.zw)(new Date(l.currentConditions.sunset).toLocaleTimeString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])])),_:2},1024),(0,a.Wm)(x,{inset:""}),(0,a.Wm)(C,{class:"q-pb-none"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(C,{class:"no-padding"},{default:(0,a.w5)((()=>[(0,a.Wm)("div",null,[(0,a.Wm)("div",W,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(l.values.slice(1,7),((t,l)=>((0,a.wg)(),(0,a.j4)("div",{key:t,class:"col-12 col-sm-4 q-pa-md"},[(0,a.Wm)("a",{onClick:t=>e.$router.push(`/item/${l+1}`)},[(0,a.Wm)(v,{class:"my-card text-center"},{default:(0,a.w5)((()=>[""==t.preciptype?((0,a.wg)(),(0,a.j4)("img",g)):(0,a.kq)("",!0),"rain"==t.preciptype?((0,a.wg)(),(0,a.j4)("img",k)):(0,a.kq)("",!0),(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,{class:"full-width",color:"blue"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Погода на "+(0,o.zw)(new Date(t.datetimeStr).toLocaleDateString()),1)])),_:2},1024),(0,a.Wm)(_,{color:"blue",class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Температура: "+(0,o.zw)(t.temp)+" °C ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue",class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Максимальная: "+(0,o.zw)(t.maxt)+" °C ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue",class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Ощущаемая: "+(0,o.zw)(t.heatindex)+" °C ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue",class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Влажность: "+(0,o.zw)(t.humidity)+" % ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue",class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Скорость ветра: "+(0,o.zw)(t.wspd)+" m/s ",1)])),_:2},1024),(0,a.Wm)(_,{color:"blue",class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Видимость: "+(0,o.zw)(t.visibility)+" km ",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],8,["onClick"])])))),128))])])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})}var b=l(52),_=l.n(b);const C=(0,a.aZ)({name:"Главная",data(){return{meteo:"",options:{method:"GET",url:"https://visual-crossing-weather.p.rapidapi.com/forecast",params:{location:"Тюмень",aggregateHours:"24",shortColumnNames:"0",unitGroup:"metric",contentType:"json"},headers:{"x-rapidapi-key":"7defef0c4dmsh8dfca6d2eb8b4edp1277b1jsn1891049e62f4","x-rapidapi-host":"visual-crossing-weather.p.rapidapi.com","x-rapidapi-ua":"RapidAPI-Playground"}}}},methods:{getMeteo(){_().request(this.options).then((e=>{this.meteo=e.data.locations}))}}});var y=l(4379),q=l(6805),v=l(4554),x=l(8240),z=l(151),U=l(5589),j=l(4027),Z=l(9367),Q=l(5869),S=l(7011),D=l(7518),L=l.n(D);C.render=h;const I=C;L()(C,"components",{QPage:y.Z,QInput:q.Z,QIcon:v.Z,QBtn:x.Z,QCard:z.Z,QCardSection:U.Z,QImg:j.Z,QCardActions:Z.Z,QSeparator:Q.Z,QList:S.Z})},9183:(e,t,l)=>{e.exports=l.p+"img/rain.3ce2ddd7.png"},2986:(e,t,l)=>{e.exports=l.p+"img/sun.5aa72e46.png"}}]);