<script setup>
import { computed, ref } from 'vue'

// A função defineProps é usada para definir as
// propriedades esperadas no componente. Neste caso,
// espera-se uma propriedade chamada todoList do tipo Array
const props = defineProps({
  todoList: Array
})

// Aqui, ref é usada para criar uma referência 
// reativa ao array todoList.
const todoList = ref(props.todoList)

// Aqui, computed é usada para criar uma propriedade computada 
// chamada sortedTasks. Esta propriedade retorna o array todoList 
// ordenado alfabeticamente por título.
const sortedTasks = computed(() => {
  let sorted = todoList
  return sorted.value.sort(function (a, b) {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    return 0
  })
})
</script>

<template>
  <ul class="list-none -mt-1.5 p-0">
    <li
      v-for="todo in sortedTasks"
      :key="todo.id"
      class="w-full relative m-0 -mt-1 text-2xl font-normal bg-white text-slate-700 py-4 pl-14 border border-solid border-gray-200 first:border-t-0 last:border-b-0 shadow-lg rounded-b-md focus:outline-gray-100 focus:ring focus:ring-gray-100"
    >
      <div>
        <label>{{ todo.title }}</label>
      </div>
    </li>
  </ul>
</template>

<style lang="css" scoped></style>
