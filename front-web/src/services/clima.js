// Acesso às APIs de clima

// API Nominatim: transforma um endereço em latitude e longitude
export const buscarCoordenadas = async (endereco) => {
  // encodeURIComponent: transforma espaços e acentos num formato que pode ir na URL
  // countrycodes=br: procura só no Brasil
  const resposta = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json&limit=1&countrycodes=br`)
  if (!resposta.ok) throw new Error('Erro ao buscar o endereço')
  const lugares = await resposta.json()
  return { lat: lugares[0].lat, lon: lugares[0].lon }
}

// API Open-Meteo: busca a previsão para essas coordenadas
export const buscarPrevisao = async (lat, lon) => {
  const resposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability&daily=temperature_2m_max,precipitation_sum&timezone=America/Sao_Paulo&forecast_days=4`)
  if (!resposta.ok) throw new Error('Erro ao buscar a previsão')
  return resposta.json()
}
