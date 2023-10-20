<script setup>
import InputTask from './components/InputTask.vue'
</script>

<template>
  <section
    class="container mx-auto min-w-64 max-w-xl flex justify-center items-center font-['Helvetica Neue'] font-light text-sm text-slate-500 leading-snug mt-52 mb-10 relative focus:outline-none"
  >
    <header class="w-full">
      <h1 class="absolute top-[-155px] w-full text-center text-8xl text-red-300 font-thin">
        Tarefas
      </h1>
      <InputTask></InputTask>
    </header> 
  </section>
</template>

<style lang="css">
html {
  background: #f5f5f5;
}
</style>
