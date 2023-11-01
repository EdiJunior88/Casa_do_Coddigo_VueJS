<script setup>

//A função defineProps é usada para definir as 
//propriedades esperadas no componente. Neste caso, 
//espera-se uma propriedade chamada todoList do tipo Array
defineProps({
  todoList: Array
})
</script>

<template>
  <ul class="list-none -mt-1.5 p-0">
    <li
      v-for="todo in todoList"
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
