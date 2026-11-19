import { useState } from 'react'

// Import do acesso aos dados
import { buscarEndereco } from '../services/cep'

// Busca o endereço de um CEP (API ViaCEP)
// "preencher" é a função da tela que recebe a resposta e coloca nos campos certos
const useCep = (preencher) => {
  const [buscando, setBuscando] = useState(false)

  const buscarCep = async (cep) => {
    cep = cep.replace('-', '')

    // Só busca quando o CEP está completo
    if (cep.length === 8) {
      setBuscando(true)

      // Se o CEP não existir, o ViaCEP responde com "erro"
      // Se a internet cair, o "catch" só para de buscar (a pessoa pode digitar à mão)
      try {
        const dados = await buscarEndereco(cep)

        if (!dados.erro) {
          preencher(dados)
        }
      } catch {
        console.log('Não foi possível buscar o CEP')
      }

      setBuscando(false)
    }
  }

  return { buscando, buscarCep }
}

export default useCep
