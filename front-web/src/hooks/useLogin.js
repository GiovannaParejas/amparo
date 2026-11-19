import { useState } from 'react'
import { useNavigate } from 'react-router'

// Import do acesso aos dados e do narrador
import { buscarAtorPorCelular, salvarAtorCadastrado, lerCelular, salvarCelular, lerCodigo, salvarCodigo, salvarAtorLogado, apagarAtorLogado } from '../services/atores'
import { lerCadastro } from '../services/cadastro'
import narrar from '../utils/narrar'

// Painel de cada perfil
const paineis = {
  usuario: '/PainelUsuario',
  cuidador: '/PainelCuidador',
  voluntario: '/PainelVoluntario',
}

// Lógica do login: confere o celular, "manda" o código, confere o código, cadastra e sai
const useLogin = () => {
  const navigate = useNavigate()

  // O celular fica guardado no navegador para a tela do código saber quem está entrando
  const [celular, setCelular] = useState(lerCelular())

  // Passo 1: procura o ator, gera um código novo de 4 números e mostra num alert (simula o SMS)
  const enviarCodigo = () => {
    const ator = buscarAtorPorCelular(celular)

    if (!ator) {
      alert('Celular não cadastrado. Confira o número ou crie uma conta.')
      return
    }

    // Math.random() dá um número entre 0 e 1: vezes 9000, mais 1000, fica sempre entre 1000 e 9999
    const codigo = String(Math.floor(1000 + Math.random() * 9000))

    salvarCelular(celular)
    salvarCodigo(codigo)
    alert(`Amparo: seu código é ${codigo}`)
    navigate('/codigo')
  }

  // Passo 2: confere o código, salva quem entrou e abre o painel daquele ator
  const confirmarCodigo = (codigo) => {
    const ator = buscarAtorPorCelular(celular)

    if (ator && codigo === lerCodigo()) {
      salvarAtorLogado(ator)
      navigate(ator.painel)
    } else {
      alert('Código errado. Tente de novo.')
    }
  }

  // Lê o código em voz alta, número por número
  const ouvirCodigo = () => {
    const codigo = lerCodigo()

    if (codigo) {
      narrar(`Seu código é ${codigo.split('').join(', ')}`)
    }
  }

  // Fim do cadastro: salva a conta nova (com o celular do cadastro) e já entra no app
  // "destino" é opcional: sem ele, abre o painel do perfil
  const entrarComo = (perfil, destino) => {
    const dados = lerCadastro(perfil)

    const ator = {
      nome: dados.nome,
      perfil,
      celular: dados.celular.replace(/\D/g, ''),
      painel: paineis[perfil],
    }

    salvarAtorCadastrado(ator)
    salvarAtorLogado(ator)
    navigate(destino || ator.painel)
  }

  // Sair: esquece quem estava logado e volta para o começo
  const sair = () => {
    apagarAtorLogado()
    navigate('/')
  }

  return { celular, setCelular, enviarCodigo, confirmarCodigo, ouvirCodigo, entrarComo, sair }
}

export default useLogin
