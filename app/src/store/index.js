import { defineStore } from 'pinia'

// Esse código define um armazenamento usando a biblioteca Pinia
// Possui 2 ações: addTask e completeTask
// addTask e completeTask são as ações do armazenamento
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    completeTask(task) {
      task.completed = !task.completed
    }
  }
})
