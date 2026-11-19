// Acesso à lista de pessoas que o cuidador acompanha
// Começa com os dados de exemplo do JSON e, depois de mudar, usa o que está no navegador
import pessoas from '../data/pessoas.json'

export const listarPessoas = () => {
  const salvo = localStorage.getItem('pessoas')
  return salvo ? JSON.parse(salvo) : pessoas
}

export const salvarPessoas = (lista) => {
  localStorage.setItem('pessoas', JSON.stringify(lista))
}
