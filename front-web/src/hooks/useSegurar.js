import { useState, useEffect } from 'react'

// Botão que só funciona se ficar segurado (evita pedir ajuda sem querer)
const useSegurar = (acao, tempo = 2000) => {
  const [segurando, setSegurando] = useState(false)

  // Quando começa a segurar, conta o tempo
  // Se soltar antes, o "return" cancela a contagem
  useEffect(() => {
    if (!segurando) {
      return
    }

    const contagem = setTimeout(acao, tempo)
    return () => clearTimeout(contagem)
  }, [segurando, acao, tempo])

  return {
    segurando,
    comecar: () => setSegurando(true),
    parar: () => setSegurando(false),
  }
}

export default useSegurar
