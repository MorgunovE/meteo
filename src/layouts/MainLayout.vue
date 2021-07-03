<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          round
          @click="toggleLeftDrawer"
          class="large-screen-only"
          aria-label="Menu"
          color="secondary"
          icon="menu"
        />

        <q-toolbar-title> Meteo </q-toolbar-title>
        <q-btn
          v-for="role in roleJSON"
          :key="role.id"
          :label="role.name"
           @click="open('right',role.name)"
          flat
          stretch />
      </q-toolbar>
    </q-header>
    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 250px">
        <q-card-section class="row items-center no-wrap">
          Теперь вы {{roleName}}
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-footer class="bg-white small-screen-only" bordered>
      <q-tabs
        class="text-grey-10"
        active-color="primary"
        indicator-color="transparent"
      >
        <q-route-tab to="/" name="Index" icon="thermostat" />
        <q-route-tab to="/graf" name="Graf" icon="insert_chart" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>

        <Menu
          v-for="link in menuJSON"
          :key="link.title"
          v-bind="link"
          :to="link.to"
          clickable
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from 'components/Menu.vue';
import menuJSON from 'assets/json/menu.json';
import roleJSON from 'assets/json/role.json';

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const dialog = ref(false);
    const position = ref('top');
    return {
      menuJSON,
      roleJSON,
      dialog,
      position,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      open(pos, role) {
        this.roleName = role;
        position.value = pos;
        dialog.value = true;
      },
    };
  },
});
</script>
