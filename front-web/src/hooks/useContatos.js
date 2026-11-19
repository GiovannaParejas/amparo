import { useState, useEffect } from 'react'

// Import do acesso aos dados
import { listarContatos, excluirContato } from '../services/contatos'

// Lista de contatos: busca na API quando a tela abre e permite apagar
const useContatos = () => {
  const [contatos, setContatos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    const carregar = async () => {
      try {
        setContatos(await listarContatos())
      } catch {
        setErro(true)
      }
      setCarregando(false)
    }

    carregar()
  }, [])

  // Apaga na API e tira da lista da tela
  const remover = async (contato) => {
    if (confirm(`Excluir ${contato.nome} da rede de apoio?`)) {
      try {
        await excluirContato(contato.id)
        setContatos(contatos.filter((item) => item.id !== contato.id))
      } catch {
        alert('Não foi possível excluir o contato. Tente de novo.')
      }
    }
  }

  return { contatos, carregando, erro, remover }
}

export default useContatos
