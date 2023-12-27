<script setup lang="js">
import { reactive } from 'vue'
import InputTask from './components/InputTask.vue'
import TaskList from './components/TaskList.vue'

// A variável tasks é inicializada como um array reativo vazio.
// Isso significa que qualquer modificação neste array irá
// disparar atualizações reativas no Vue.js.
let tasks = reactive([])

// A função addTask é usada para adicionar novas tarefas ao array tasks.
// Como tasks é um array reativo, qualquer chamada a addTask irá desencadear
// uma atualização reativa.
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
