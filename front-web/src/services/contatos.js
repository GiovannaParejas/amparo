// Acesso aos dados da rede de apoio na API externa (MockAPI)
// Endereço do recurso "contatos" no projeto do MockAPI
const API_URL = 'https://6af743fbe844c7ff741c4d7d.mockapi.io/contatos'

// Consulta: busca todos os contatos
export const listarContatos = async () => {
  const resposta = await fetch(API_URL)
  if (!resposta.ok) throw new Error('Erro ao buscar os contatos')
  return resposta.json()
}

// Consulta: busca um contato só, pelo id
export const buscarContato = async (id) => {
  const resposta = await fetch(`${API_URL}/${id}`)
  if (!resposta.ok) throw new Error('Erro ao buscar o contato')
  return resposta.json()
}

// Criação: salva um contato novo
export const criarContato = async (contato) => {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contato),
  })
  if (!resposta.ok) throw new Error('Erro ao criar o contato')
  return resposta.json()
}

// Atualização: muda um contato que já existe
export const atualizarContato = async (id, contato) => {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contato),
  })
  if (!resposta.ok) throw new Error('Erro ao atualizar o contato')
  return resposta.json()
}

// Exclusão: apaga um contato
export const excluirContato = async (id) => {
  const resposta = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  if (!resposta.ok) throw new Error('Erro ao excluir o contato')
}
