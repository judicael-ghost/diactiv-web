<template>
  <q-layout>
    <sidebar />
    <q-page-container>
      <navbar />
      <q-page>
        <!-- Main content goes here -->
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from 'components/Sidebar.vue';
import Navbar from 'components/Navbar.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
  },
});
</script>
