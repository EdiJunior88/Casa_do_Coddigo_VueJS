import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import InputTask from '../InputTask.vue'

// registra um componente chamado InputTask e
// monta a aplicação em um elemento com o id #app.
const app = createApp({})
app.component('InputTask', InputTask)
app.mount('#app')

// Função que monta o componente
const componentMount = () => {
  const vm = mount(InputTask)
  return vm
}

// O teste verifica se o componente renderizado contém
// um elemento com o nome de classe "new-todo".
describe('InputTask', () => {
  it('should render correct contents', () => {
    const vm = componentMount()
    expect(vm.findAll('.new-todo').length).to.equal(1)
  })

  // O teste verifica se quando o método createTask
  // é chamado com o argumento 'Comprar leite'
  it('should create the task correctly', () => {
    const wrapper = componentMount()
    const vm = wrapper.vm
    const task = vm.createTask('Comprar leite')
    expect(task.title).to.equal('Comprar leite')
  })

  // O teste verifica se quando o método createTask
  // é chamado com o argumento 'Comprar leite'
  // definindo "task.completed" como não concluída (false)
  it('should create the task not completed', () => {
    const wrapper = componentMount()
    const vm = wrapper.vm
    const task = vm.createTask('Comprar leite')
    expect(task.completed).to.be.false
  })

  // O teste verifica se o campo de entrada de tarefas é limpo
  // quando o método clearField é chamado
  // definindo o campo de entrada de tarefas como vazio
  // e verificando se o campo de entrada de tarefas é limpo
  // com o valor vazio
  it('should clean the input', () => {
    const wrapper = componentMount()
    const vm = wrapper.vm
    vm.event = { target: { value: 'Comprar leite' } }
    vm.clearField()
    const inputElement = wrapper.find('.new-todo')
    expect(inputElement.element.value).to.equal('')
  })

  // O teste verifica se é chamado o evento broadcast
  // e verifica se o  valor está vazio
  // spyOn retorna uma função simulada (mock function)
  it('should call the event', () => {
    const wrapper = componentMount()
    const vm = wrapper.vm
    vi.spyOn(vm, 'broadcast')
    vm.broadcast()
    expect(vm.broadcast).toHaveBeenCalled()
  })
})
