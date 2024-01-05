<script setup lang="js">
import { Task } from '@/models/Task'

// A função defineProps define as propriedades
// que serão passadas ao componente.
// Neste caso, é esperado que uma função
// chamada newTask seja passada como propriedade
defineProps({
  newTask: Function
})

// A função defineEmits é usada para definir os eventos
// que o componente pode emitir. Neste caso, o componente
// pode emitir um evento chamado newTask
const emits = defineEmits(['newTask'])

// A função addTask é definida para adicionar uma nova tarefa.
function addTask(event) {
  const value = event.target.value
  const task = createTask(value)
  broadcast(task)
  clearField(event)
}

// A função createTask é usada para criar uma nova tarefa.
function createTask(value) {
  const task = new Task()
  task.completed = false
  task.title = value
  return task
}

// A função clearField é usada para limpar o campo de entrada.
function clearField(event) {
  if (event) {
    event.target.value = ''
  }
}

// A função broadcast é usada para avisar sobre uma nova tarefa.
function broadcast(task) {
  emits('newTask', task)
}
</script>

<template>
  <div>
    <input
      @keyup.enter="addTask"
      class="new-todo w-full relative m-0 text-2xl leading-snug italic font-light text-slate-700 py-4 pl-14 border border-solid border-gray-200 shadow-lg rounded-md focus:outline-gray-100 focus:ring focus:ring-gray-100"
      placeholder="O que precisa ser feito?"
    />
  </div>
</template>
