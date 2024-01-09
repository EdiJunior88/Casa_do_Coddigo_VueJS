import { reactive } from 'vue'

const emitter = {
  events: reactive(new Map()),

  emit(event, ...args) {
    const callbacks = this.events.get(event)
    if (callbacks) {
      callbacks.slice().forEach((callback) => callback(...args))
    }
  },

  on(event, callback) {
    let callbacks = this.events.get(event)
    if (!callbacks) {
      callbacks = []
      this.events.set(event, callbacks)
    }
    callbacks.push(callback)

    // Provide a way to remove this event listener
    return () => this.off(event, callback)
  },

  off(event, callback) {
    const callbacks = this.events.get(event)
    if (callbacks) {
      const index = callbacks.indexOf(callback)
      if (index > -1) {
        callbacks.splice(index, 1)
      }
    }
  }
}

function install(app) {
  // Provide the emitter in the app config's globalProperties
  app.config.globalProperties.$events = emitter
}

export default install
