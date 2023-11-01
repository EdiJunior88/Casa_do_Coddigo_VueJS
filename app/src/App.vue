<script setup>
import { reactive } from 'vue'
import InputTask from './components/InputTask.vue'
import TaskList from './components/TaskList.vue'

let tasks = reactive([])

function addTask(task) {
  tasks.push(task)
}
</script>

<template>
  <section
    class="container mx-auto min-w-64 max-w-xl flex justify-center items-center font-['Helvetica Neue'] font-light text-sm text-slate-500 leading-snug mt-52 mb-10 relative focus:outline-none"
  >
    <header class="w-full">
      <h1 class="absolute top-[-155px] w-full text-center text-8xl text-red-300 font-thin">
        Tarefas
      </h1>
      <InputTask @newTask="addTask"></InputTask>
      <TaskList :todo-list="tasks"></TaskList>
    </header>
  </section>
</template>

<style lang="css">
html {
  background: #f5f5f5;
}
</style>
