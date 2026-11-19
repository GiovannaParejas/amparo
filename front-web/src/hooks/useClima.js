import { useState, useEffect } from 'react'

// Import do acesso aos dados
import { buscarCoordenadas, buscarPrevisao } from '../services/clima'

// Nomes dos dias (o getDay() devolve 0 para domingo, 1 para segunda...)
const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

// Busca o clima do endereço e já devolve os números prontos para a tela
const useClima = (endereco) => {
  const [previsao, setPrevisao] = useState(null)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    const carregar = async () => {
      try {
        const { lat, lon } = await buscarCoordenadas(endereco)
        setPrevisao(await buscarPrevisao(lat, lon))
      } catch {
        setErro(true)
      }
    }

    carregar()
  }, [endereco])

  // Enquanto a resposta não chega (ou se der erro), ainda não tem clima
  if (!previsao) {
    return { clima: null, erro }
  }

  // As listas "hourly" começam na meia-noite de hoje: a posição 9 é 9h, a 15 é 15h...
  const tarde = Math.round(previsao.hourly.temperature_2m[15])
  const chuvaNoite = previsao.hourly.precipitation_probability[21]

  // Regras do alerta: calor quando a tarde passa de 30°C, chuva quando a chance à noite passa de 50%
  const quente = tarde >= 30
  const chuva = chuvaNoite >= 50

  // O aviso e as dicas mudam conforme o clima de verdade
  let aviso = 'Hoje o tempo está tranquilo. Beba água ao longo do dia.'
  if (chuva) aviso = 'Hoje pode chover forte. Evite sair e fique longe de áreas alagadas.'
  if (quente) aviso = 'Hoje vai fazer calor forte à tarde. Beba água e fique na sombra.'

  const dicas = [{ icone: '/icones/gota.svg', texto: 'Beba água a cada hora' }]
  if (quente) dicas.push({ icone: '/icones/casa.svg', texto: 'Não saia entre 11h e 16h' })
  if (chuva) dicas.push({ icone: '/icones/chuva.svg', texto: 'À noite, leve guarda-chuva' })

  const clima = {
    agora: Math.round(previsao.hourly.temperature_2m[new Date().getHours()]),
    manha: Math.round(previsao.hourly.temperature_2m[9]),
    tarde,
    sensacao: Math.round(previsao.hourly.apparent_temperature[15]),
    noite: Math.round(previsao.hourly.temperature_2m[21]),
    chuvaNoite,
    quente,
    alerta: quente || chuva,
    aviso,
    dicas,

    // Próximos dias: posições 1, 2 e 3 da lista "daily" (a 0 é hoje)
    proximosDias: [1, 2, 3].map((i) => ({
      dia: dias[new Date(previsao.daily.time[i] + 'T12:00').getDay()],
      maxima: Math.round(previsao.daily.temperature_2m_max[i]),
      chuva: previsao.daily.precipitation_sum[i] > 0,
    })),
  }

  return { clima, erro }
}

export default useClima
