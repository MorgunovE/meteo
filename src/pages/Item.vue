<template>
  <q-page>
    <div class="q-pa-md">
      <q-card
        v-for="item in meteo"
        :key="item"
        flat
        bordered
        class="my-card q-mt-md text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6 text-center">
            Прогноз погоды на {{ new Date(item.values[id].datetimeStr).toLocaleDateString()}}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none ">
          <q-card class="my-card " flat bordered>
            <q-card-section class="q-pa-none row">
              <q-img
                v-if="item.values[id].preciptype == ''"
                class="col-12 col-sm-4"
                src="~assets/img/sun.png"
              />
              <q-img
                v-if="item.values[id].preciptype == 'rain'"
                class="col-12 col-sm-4"
                src="~assets/img/rain.png"
              />
              <q-card-actions vertical class="justify-around col-12 col-sm-4">
                <q-btn  color="blue">
                  Температура: {{ item.values[id].temp }} °C
                </q-btn>
                <q-btn color="blue">
                  Максимальная: {{ item.values[id].maxt }} °C
                </q-btn>
                <q-btn color="blue">
                  Ощущаемая: {{ item.values[id].heatindex }} °C
                </q-btn>
                <q-btn color="blue">
                  Влажность: {{ item.values[id].humidity }} %
                </q-btn>
              </q-card-actions>
              <q-card-actions vertical class="justify-around col-12 col-sm-4">
                <q-btn color="blue">
                  Скорость ветра: {{ item.values[id].wspd }} m/s
                </q-btn>
                <q-btn color="blue">
                  Видимость: {{ item.values[id].visibility }} km
                </q-btn>
                <q-btn color="blue">
                  Давление: {{ item.values[id].sealevelpressure }} мбар
                </q-btn>
                <q-btn color="blue">
                  Вероятность осадков: {{ item.values[id].pop }} %
                </q-btn>
              </q-card-actions>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Погода на день',
  data() {
    return {
      meteo: '',
      id: this.$route.params.id,
      options: {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
          location: 'Тюмень',
          aggregateHours: '24',
          shortColumnNames: '0',
          unitGroup: 'metric',
          contentType: 'json',
        },
        headers: {
          'x-rapidapi-key':
            '7defef0c4dmsh8dfca6d2eb8b4edp1277b1jsn1891049e62f4',
          'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
          'x-rapidapi-ua': 'RapidAPI-Playground',
        },
      },
    };
  },
  created() {
    this.getMeteo();
  },
  methods: {
    getMeteo() {
      axios.request(this.options).then((rs) => {
        this.meteo = rs.data.locations;
      });
    },
  },
});
</script>
