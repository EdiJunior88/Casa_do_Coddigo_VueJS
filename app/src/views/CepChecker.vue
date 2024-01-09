<script setup lang="js">
import { ref } from 'vue'
import apiCep from '@/api/apiCep'

// Cria uma variável reativa para armazenar o resultado da requisição
const address = ref({})

// Define uma função assíncrona para verificar o CEP
// e recebe um parâmetro "event".
// Em seguida chama a função apiCep para realizar
// a requisição da API e armazena o resultado na variável "address"
async function checkCep(event) {
  const value = event.target.value
  try {
    const data = await apiCep(value)
    address.value = data
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// Verifica se o objeto address possui pelo menos uma chave (true)
// caso o contrário (false) se estiver vazio
function hasAddress() {
  return Object.keys(address.value).length > 0
}

// Define uma diretiva Vue chamada vFocus que automaticamente coloca o foco
// no elemento ao qual é aplicada quando o elemento é montado (inserido no DOM).
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <section
    class="container mx-auto min-w-64 max-w-xl flex flex-col justify-center items-center font-['Helvetica Neue'] font-light text-sm text-slate-500 leading-snug mb-10 relative focus:outline-none"
  >
    <input
      @keyup.enter="checkCep"
      v-focus
      type="text"
      name="cep"
      id="cep"
      class="new-todo relative m-0 text-2xl leading-snug italic font-light text-slate-700 p-4 text-center border border-solid border-gray-200 shadow-lg rounded-md focus:outline-gray-100 focus:ring focus:ring-gray-100"
      placeholder="Digite seu CEP"
    />

    <TransitionGroup name="slide-fade">
      <div
        key="address"
        v-show="hasAddress()"
        class="text-xl text-center text-violet-950 my-10 leading-relaxed"
      >
        <p><span class="font-bold">Rua</span>: {{ address.logradouro }}</p>
        <p><span class="font-bold">Bairro</span>: {{ address.bairro }}</p>
        <p><span class="font-bold">Cidade</span>: {{ address.cidade }}</p>
        <p><span class="font-bold">Estado</span>: {{ address.estado }}</p>
      </div>
    </TransitionGroup>
  </section>
</template>

<style lang="css" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
