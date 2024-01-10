<script setup lang="js">
import { ref } from 'vue'
import apiCep from '@/api/apiCep'
import Footer from '@/components/Footer/FooterComponent.vue'

// Cria uma variável reativa para armazenar o resultado da requisição
const address = ref({})

// Cria uma variável reativa para armazenar uma mensagem de erro (API)
const errorMessageAPI = ref('')

// Função para aplicar a mascara de CEP
function maskCep(value) {
  return (
    value
      // Remove tudo o que não é dígito
      .replace(/\D/g, '')
      // Insere o hífen
      .replace(/^(\d{5})(\d)/, '$1-$2')
  )
}

// Define uma função assíncrona para verificar o CEP
// e recebe um parâmetro "event".
// Em seguida chama a função apiCep para realizar
// a requisição da API e armazena o resultado na variável "address"
async function checkCep(event) {
  let value = event.target.value
  value = maskCep(value)
  event.target.value = value // Atualiza o valor do input com a máscara aplicada

  try {
    // Remove o hífen antes de enviar a requisição
    const data = await apiCep(value.replace('-', ''))

    // Se o CEP for inválido lança um erro
    if (!data || Object.keys(data).length === 0) {
      throw new Error('CEP inválido')
    }

    address.value = data
    errorMessageAPI.value = ''
    // console.log(data)
  } catch (error) {
    errorMessageAPI.value = 'CEP inválido'
    address.value = {}
    // console.log(error)
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
      @input="(event) => (event.target.value = maskCep(event.target.value))"
      @keyup.enter="checkCep"
      v-focus
      maxlength="9"
      type="text"
      name="cep"
      id="cep"
      class="new-todo relative mb-10 text-2xl leading-snug italic font-light text-slate-700 p-4 text-center border border-solid border-gray-200 shadow-lg rounded-md focus:outline-gray-100 focus:ring focus:ring-gray-100"
      placeholder="Digite seu CEP"
    />

    <div v-if="errorMessageAPI" class="text-xl text-center text-green-500 leading-relaxed">
      <p class="font-bold">{{ errorMessageAPI }}</p>
    </div>

    <div
      key="address"
      v-show="hasAddress()"
      class="text-xl text-center text-violet-950 leading-relaxed"
    >
      <p><span class="font-bold">Rua</span>: {{ address.logradouro }}</p>
      <p><span class="font-bold">Bairro</span>: {{ address.bairro }}</p>
      <p><span class="font-bold">Cidade</span>: {{ address.cidade }}</p>
      <p><span class="font-bold">Estado</span>: {{ address.estado }}</p>
    </div>

    <Footer>
      <p>Cep Checker © MIT License - 2024</p>
      <p>Cep Checker is part of ToDo List</p>
    </Footer>
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
