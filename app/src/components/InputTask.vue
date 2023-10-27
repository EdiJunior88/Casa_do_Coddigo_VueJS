<script setup>
import { ref } from 'vue'
import { Task } from '../models/Task'

let task = ref(new Task())

function addTask(event) {
  task.value.completed = false
  task.value.title = event.target.value
  console.log(task)
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
