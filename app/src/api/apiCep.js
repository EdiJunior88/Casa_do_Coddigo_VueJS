import axios from 'axios'

// Define uma função assíncrona que recebe um parâmetro chamado "value"
// e retorna uma promise que é resolvida com um objeto JSON
// contendo as informações do CEP informado,
// caso o CEP não seja encontrado, a promise será rejeitada.
// Essa função utiliza a biblioteca "axios" para fazer uma requisição GET
// para o site "https://api.postmon.com.br/v1/cep"
const apiCep = async (value) => {
  try {
    const response = await axios.get(`https://api.postmon.com.br/v1/cep/${value}`)
    return response.data
  } catch (error) {
    return null
    // console.log(error)
  }
}

export default apiCep
