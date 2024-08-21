<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>
        <q-img
          src="/path/to/logo.png"
          alt="Logo"
          class="q-mr-md"
          style="height: 40px"
        />
        Mon Application
      </q-toolbar-title>
      <q-btn flat label="Déconnexion" @click="logout" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  methods: {
    logout() {
      // Logic for logout
      console.log('Déconnexion');
    },
  },
});
</script>

<style scoped>
.q-header {
  background-color: #ffffff;
}
.q-toolbar-title {
  color: black;
}
</style>
