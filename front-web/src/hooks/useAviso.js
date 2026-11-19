import { useEffect } from 'react'

// Import do acesso aos dados e das funções de apoio
import { lerConfig } from '../services/config'
import narrar from '../utils/narrar'
import tocarAlarme from '../utils/tocarAlarme'

// Quando um alerta aparece: toca o alarme, lê em voz alta e vibra,
// conforme o que a pessoa escolheu no "Do seu jeito"
const useAviso = (texto) => {
  useEffect(() => {
    const config = lerConfig()

    if (config.somAlto) {
      tocarAlarme()
    }

    if (config.lerAlertas) {
      narrar(texto)
    }

    // A vibração só funciona em celulares que permitem (o "if" evita erro no computador)
    if (config.vibracao && navigator.vibrate) {
      navigator.vibrate([300, 200, 300])
    }
  }, [texto])
}

export default useAviso
