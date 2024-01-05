<script setup>
import { RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <TransitionGroup name="fade">
    <HomeView key="home" />
    <RouterView key="router" />
  </TransitionGroup>
</template>
