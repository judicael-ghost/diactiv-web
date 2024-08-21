<template>
  <q-drawer v-model="drawer" side="left" bordered class="bg-grey-1">
    <q-list>
      <q-item to="/partenaire" clickable>
        <q-item-section> Partenaire </q-item-section>
      </q-item>
      <q-item to="/utilisateur" clickable>
        <q-item-section> Utilisateur </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const drawer = ref(true); // Toggle state for sidebar visibility

    return {
      drawer,
    };
  },
});
</script>

<style scoped>
.q-drawer {
  width: 200px;
}
</style>
