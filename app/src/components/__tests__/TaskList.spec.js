import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import TaskList from '../TaskList.vue'
import { Task } from '../../models/Task'

// registra um componente chamado TaskList e
// monta a aplicação em um elemento com o id #app.
const app = createApp({})
app.component('TaskList', TaskList)
app.mount('#app')

// Testa se o componente TaskList renderiza corretamente
// com o array de tarefas passado como propriedade
// e se o mesmo renderiza corretamente
describe('TaskList', () => {
  let vm = {}

  // beforeEach é uma função de configuração que é executada
  // antes de cada caso de teste dentro do bloco describe
  // Ele cria uma lista de tarefas taskList
  // e a preenche com três objetos Task
  // Em seguida, monta o componente TaskList
  // passando taskList como um prop chamado todoList
  beforeEach(() => {
    const taskList = []

    const task = new Task()
    task.title = 'Comprar Frango'

    const task2 = new Task()
    task2.title = 'Comprar Batata Doce'

    const task3 = new Task()
    task3.title = 'Ficar Monstro'

    taskList.push(task)
    taskList.push(task2)
    taskList.push(task3)

    // A função mount para renderizar um componente chamado TaskList
    // e passar para ele uma propriedade chamada todoList com o valor de taskList
    // O componente renderizado é então atribuído à variável vm
    vm = mount(TaskList, {
      propsData: { todoList: taskList }
    })
  })

  // O teste verifica se o componente renderizado contém
  // contém exatamente 3 itens
  it('should render correct contents', () => {
    expect(vm.props().todoList.length).toBe(3)
  })
})
