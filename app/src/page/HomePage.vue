<script setup lang="js">
import { reactive } from 'vue'
import InputTask from '@/components/Input/InputTask.vue'
import TaskList from '@/components/Task/TaskList.vue'
import Footer from '@/components/Footer/FooterComponent.vue'

// A variável tasks é inicializada como um array reativo vazio.
// Isso significa que qualquer modificação neste array irá
// disparar atualizações reativas no Vue.js.
const tasks = reactive([])

// A função addTask é usada para adicionar novas tarefas ao array tasks.
// Como tasks é um array reativo, qualquer chamada a addTask irá desencadear
// uma atualização reativa.
function addTask(task) {
  tasks.push(task)
}
</script>

<template>
  <section
    class="container mx-auto min-w-64 max-w-xl flex justify-center items-center font-['Helvetica Neue'] font-light text-sm text-slate-500 leading-snug mb-10 relative focus:outline-none"
  >
    <header class="w-full">
      <InputTask @newTask="addTask"></InputTask>
      <TaskList :todo-list="tasks"></TaskList>
      <Footer />
    </header>
  </section>
</template>
