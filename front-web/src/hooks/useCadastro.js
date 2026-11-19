import { useState } from 'react'

// Import do acesso aos dados
import { lerCadastro, salvarCadastro } from '../services/cadastro'

// Dados do cadastro de um perfil: lê, muda campo por campo e salva
const useCadastro = (perfil) => {
  const [dados, setDados] = useState(lerCadastro(perfil))

  // Muda um campo só e mantém os outros
  // Usa a versão mais nova dos dados ("atual"), porque o CEP muda dois campos seguidos
  const mudar = (campo, valor) => {
    setDados((atual) => ({ ...atual, [campo]: valor }))
  }

  // Liga ou desliga um item de uma lista (ex.: os horários do voluntário)
  const alternar = (campo, item) => {
    setDados((atual) => {
      const lista = atual[campo]
      const novaLista = lista.includes(item) ? lista.filter((valor) => valor !== item) : [...lista, item]
      return { ...atual, [campo]: novaLista }
    })
  }

  // Muda um campo e já salva (para escolhas rápidas, como o "Disponível agora")
  const mudarESalvar = (campo, valor) => {
    const novosDados = { ...dados, [campo]: valor }
    setDados(novosDados)
    salvarCadastro(perfil, novosDados)
  }

  // Confere o que é obrigatório e salva
  const salvar = () => {
    if (!dados.nome || !dados.celular) {
      alert('Preencha o nome e o celular.')
      return false
    }

    salvarCadastro(perfil, dados)
    return true
  }

  return { dados, mudar, alternar, mudarESalvar, salvar }
}

export default useCadastro
