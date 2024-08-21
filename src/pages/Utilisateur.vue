<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Liste des utilisateurs</div>
      </q-card-section>

      <q-card-section>
        <q-table :rows="users" :columns="columns" row-key="id" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/user_queries';

const users = ref([]);
const columns = [
  { name: 'first_name', label: 'Prénom', field: 'first_name' },
  { name: 'last_name', label: 'Nom', field: 'last_name' },
  { name: 'user_name', label: "Nom d'utilisateur", field: 'user_name' },
  { name: 'email', label: 'Email', field: 'email' },
  { name: 'contact', label: 'Contact', field: 'contact' },
  { name: 'activated', label: 'Activé', field: 'activated' },
];

const { loading, error, data } = useQuery(GET_USERS);

onMounted(() => {
  if (data && data.user) {
    users.value = data.user;
  }
});
</script>
