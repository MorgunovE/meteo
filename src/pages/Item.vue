<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row justify-between q-gutter-md">
        <div class="col-xs-10 col-sm">
          <q-input
            color="orange"
            standout
            bottom-slots
            v-model="options.params.location"
            label="Город"
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:hint> Выберите город</template>
          </q-input>
        </div>
        <div class="text-center col-xs-10 col-sm">
          <q-btn
            size="lg"
            @click="getMeteo"
            color="secondary"
            label="Получить прогноз"
          />
        </div>
      </div>
      <q-card
        v-for="item in meteo"
        :key="item"
        flat
        bordered
        class="my-card q-mt-md text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6 text-center">Погода на день</div>
        </q-card-section>

        <q-card-section class="no-padding">
          <div>
            <div class="row">
              <div
                :v-for="item in item.values.slice(1)"
                :key="item"
                class="col-12 col-sm-4 q-pa-md">
                <q-card class="my-card text-center">
                  <img v-if="item.preciptype == ''" src="~assets/img/sun.png">
                  <img v-if="item.preciptype == 'rain'" src="~assets/img/rain.png">
                  <q-list>
                    <q-btn color="blue" class="full-width">
                      Погода на
                      {{ new Date(item.datetimeStr).toLocaleDateString()}}
                    </q-btn>
                    <q-btn color="blue" class="full-width">
                      Температура: {{ item.temp }} °C
                    </q-btn>
                    <q-btn color="blue" class="full-width">
                      Максимальная: {{ item.maxt }} °C
                    </q-btn>
                    <q-btn color="blue" class="full-width">
                      Ощущаемая: {{ item.heatindex }} °C
                    </q-btn>
                    <q-btn color="blue" class="full-width">
                      Влажность: {{ item.humidity }} %
                    </q-btn>
                    <q-btn color="blue" class="full-width">
                      Скорость ветра: {{ item.wspd }} m/s
                    </q-btn>
                    <q-btn color="blue" class="full-width">
                      Видимость: {{ item.visibility }} km
                    </q-btn>
                  </q-list>
                </q-card>
              </div>
            </div>
          </div>
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
      day: this.$route.params.id,
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
  methods: {
    getMeteo() {
      axios.request(this.options).then((rs) => {
        this.meteo = rs.data.locations;
      });
    },
  },
});
</script>
