// Acesso aos dados do cadastro de cada perfil
// Começa com os dados de exemplo do JSON e, depois de salvar, usa o que está no navegador
import cadastros from '../data/cadastros.json'

export const lerCadastro = (perfil) => {
  const salvo = localStorage.getItem(`cadastro-${perfil}`)

  // Junta o exemplo com o que foi salvo: se faltar algum campo, ele vem do exemplo
  return { ...cadastros[perfil], ...JSON.parse(salvo) }
}

export const salvarCadastro = (perfil, dados) => {
  localStorage.setItem(`cadastro-${perfil}`, JSON.stringify(dados))
}
