import { useState, useEffect } from 'react'

// Import do acesso aos dados
import { lerConfig, salvarConfig } from '../services/config'

// Tamanho da letra de cada opção (o Tailwind usa "rem", então o app todo acompanha)
const tamanhos = {
  'Normal': '14px',
  'Grande': '16px',
  'Muito Grande': '19px',
}

// Preferências do "Do seu jeito": tamanho da letra, alto contraste e alertas
const useConfig = () => {
  const [config, setConfig] = useState(lerConfig())

  // Sempre que mudar alguma preferência: salva e aplica no app
  useEffect(() => {
    salvarConfig(config)
    document.documentElement.style.fontSize = tamanhos[config.tamanho]
    document.documentElement.classList.toggle('contraste', config.contraste)
  }, [config])

  // Muda uma preferência só e mantém as outras
  const mudar = (campo, valor) => {
    setConfig((atual) => ({ ...atual, [campo]: valor }))
  }

  return { config, mudar }
}

export default useConfig
