import { useState, useEffect } from 'react'

// Import do acesso aos dados
import { buscarContato, criarContato, atualizarContato } from '../services/contatos'

// Formulário de um contato: serve para criar (sem id) e para editar (com id)
const useContato = (id) => {
  const [nome, setNome] = useState('')
  const [celular, setCelular] = useState('')
  const [quem, setQuem] = useState('Família')

  // Se tiver id, é edição: busca o contato e preenche o formulário
  useEffect(() => {
    const carregar = async () => {
      try {
        const contato = await buscarContato(id)
        setNome(contato.nome)
        setCelular(contato.celular)
        setQuem(contato.quem)
      } catch {
        alert('Não foi possível carregar o contato.')
      }
    }

    if (id) {
      carregar()
    }
  }, [id])

  // Salva na API: atualiza se tiver id, cria se não tiver
  const salvar = async () => {
    if (!nome || !celular) {
      alert('Preencha o nome e o celular.')
      return false
    }

    const contato = { nome, celular, quem }

    // Se a API falhar (sem internet ou URL errada), avisa e não sai da tela
    try {
      if (id) {
        await atualizarContato(id, contato)
      } else {
        await criarContato(contato)
      }
      return true
    } catch {
      alert('Não foi possível salvar o contato. Tente de novo.')
      return false
    }
  }

  return { nome, setNome, celular, setCelular, quem, setQuem, salvar }
}

export default useContato
