<script setup lang="js">
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
  const sorted = todoList
  return sorted.value.sort(function (a, b) {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    return 0
  })
})

function completeTasks(task) {
  task.completed = !task.completed
}
</script>

<template>
  <ul class="list-none -mt-1.5 p-0">
    <li
      v-for="todo in sortedTasks"
      :key="todo.id"
      class="w-full relative m-0 -mt-1 text-2xl font-normal bg-white text-slate-700 py-4 border border-solid border-gray-200 first:border-t-0 last:border-b-0 shadow-lg rounded-b-md focus:outline-gray-100 focus:ring focus:ring-gray-100"
    >
      <div class="flex items-center">
        <input
          type="checkbox"
          class="toggle ml-4 mr-3 border border-solid border-gray-500"
          @click="completeTasks(todo)"
        />
        <label :class="{ 'todo-completed': todo.completed }">{{ todo.title }}</label>
      </div>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.toggle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
}

.toggle::before {
  content: '✔️'; /* código unicode do símbolo de check */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: transparent;
  text-shadow: 0 0 0 rgb(11, 165, 19);
  visibility: hidden;
}

.toggle:checked::before {
  visibility: visible;
}

.todo-completed {
  text-decoration: line-through;
}
</style>
