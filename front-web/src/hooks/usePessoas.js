import { useState } from 'react'

// Import do acesso aos dados
import { listarPessoas, salvarPessoas } from '../services/pessoas'

// Pessoas que o cuidador acompanha: lista e convida pessoas novas
const usePessoas = () => {
  const [pessoas, setPessoas] = useState(listarPessoas())

  // Convida uma pessoa nova: ela entra na lista esperando aceitar
  const convidar = (nome, celular) => {
    if (!nome || !celular) {
      alert('Preencha o nome e o celular.')
      return false
    }

    const novaLista = [...pessoas, { nome, relacao: celular, situacao: 'Aguardando aceite' }]
    setPessoas(novaLista)
    salvarPessoas(novaLista)
    alert(`Convite enviado para ${nome}. Quando aceitar, o acompanhamento começa.`)
    return true
  }

  return { pessoas, convidar }
}

export default usePessoas
