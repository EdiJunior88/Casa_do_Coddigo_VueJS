import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import InputTask from '../InputTask.vue'

const app = createApp({})
app.component('InputTask', InputTask)
app.mount('#app')

describe('InputTask', () => {
  it('should render correct contents', () => {
    const vm = mount(InputTask)

    expect(vm.findAll('.new-todo').length).to.equal(1)
  })
})
