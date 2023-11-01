<script setup>
import { reactive } from 'vue'
import { Task } from '../models/Task'

defineProps({
  newTask: Function
})

const emits = defineEmits(['newTask'])

let task = reactive(new Task())

function addTask(event) {
  let value = event.target.value
  task.completed = false
  task.title = value
  emits('newTask', task)
  event.target.value = ''
}
</script>

<template>
  <div>
    <input
      @keyup.enter="addTask"
      class="w-full relative m-0 text-2xl leading-snug italic font-light text-slate-700 py-4 pl-14 border border-solid border-gray-200 shadow-lg rounded-md focus:outline-gray-100 focus:ring focus:ring-gray-100"
      placeholder="O que precisa ser feito?"
    />
  </div>
</template>

<style lang="css" scoped></style>
