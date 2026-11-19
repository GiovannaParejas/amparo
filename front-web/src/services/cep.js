// Acesso à API ViaCEP: busca o endereço de um CEP
export const buscarEndereco = async (cep) => {
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  if (!resposta.ok) throw new Error('Erro ao buscar o CEP')
  return resposta.json()
}
