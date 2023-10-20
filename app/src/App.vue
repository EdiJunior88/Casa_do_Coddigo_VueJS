<script setup>
import { ref } from 'vue'

const msg = ref('Bem vindo a sua primeira app com Vue.js')
</script>

<template>
  <div class="hello">
    <h1 :title="msg">{{ msg }}</h1>
  </div>
</template>

<style lang="css" scoped></style>
