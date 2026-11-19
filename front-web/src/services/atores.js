// Acesso aos dados dos atores (usuário, cuidador e voluntário)
import atores from '../data/atores.json'

// Todos os atores: os 3 de exemplo do JSON + quem criou conta pelo app (salvos no navegador)
export const listarAtores = () => {
  const cadastrados = JSON.parse(localStorage.getItem('atores')) || []
  return [...cadastrados, ...atores]
}

// Salva quem acabou de criar conta (se o celular já existir, troca pelo novo)
export const salvarAtorCadastrado = (novoAtor) => {
  const cadastrados = JSON.parse(localStorage.getItem('atores')) || []
  const outros = cadastrados.filter((ator) => ator.celular !== novoAtor.celular)
  localStorage.setItem('atores', JSON.stringify([...outros, novoAtor]))
}

// Procura o ator pelo celular, comparando só os números
// O /\D/g quer dizer "tudo o que não é número": o replace apaga parênteses, traço e espaço
export const buscarAtorPorCelular = (celular) => {
  const numeros = celular.replace(/\D/g, '')
  return listarAtores().find((ator) => ator.celular === numeros)
}

// O celular digitado no "Entrar" e o código gerado ficam salvos para a tela do código
export const lerCelular = () => {
  return localStorage.getItem('celular') || ''
}

export const salvarCelular = (celular) => {
  localStorage.setItem('celular', celular)
}

export const lerCodigo = () => {
  return localStorage.getItem('codigo')
}

export const salvarCodigo = (codigo) => {
  localStorage.setItem('codigo', codigo)
}

// Quem está logado fica salvo no navegador (localStorage)
export const lerAtorLogado = () => {
  return JSON.parse(localStorage.getItem('ator'))
}

export const salvarAtorLogado = (ator) => {
  localStorage.setItem('ator', JSON.stringify(ator))
}

export const apagarAtorLogado = () => {
  localStorage.removeItem('ator')
}
