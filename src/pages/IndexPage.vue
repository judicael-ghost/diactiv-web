<template>
  <q-page class="row justify-center items-center">
    <q-card>
      <q-card-section class="row q-py-xl">
        <div class="col-12 text-h6 text-center">Connection</div>
        <q-input filled v-model="phone" label="N°Téléphone" class="col-12 q-my-md" />
        <q-input filled v-model="password" label="Password" type="password" class="col-12 q-my-md" />
        <q-btn label="Login" @click="login" class="col-12 q-mt-md" color="primary" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  console.log('Username:', username.value)
  console.log('Password:', password.value)
}
</script>

<style scoped>
.q-card {
  width: 300px;
}
</style>
