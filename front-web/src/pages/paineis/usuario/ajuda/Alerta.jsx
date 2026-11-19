import { Link } from 'react-router'

// Import de componentes
import BotaoAjuda from '../../../../components/BotaoAjuda'

// Import da lógica do aviso (voz e vibração)
import useAviso from '../../../../hooks/useAviso'

// Alerta de calor
// Sem "Voltar" de propósito: a pessoa precisa responder se está bem ou se precisa de ajuda
const Alerta = () => {
  useAviso('Atenção! Está 36 graus agora. Beba um copo de água, vá para o cômodo mais fresco e molhe os pulsos e a nuca.')

  return (
    <section className="flex flex-col gap-4">

      {/* Aviso */}
      <div className="flex flex-col items-center gap-3">
        <img src="/icones/alerta-vermelho.svg" alt="" className="w-28" />
        <h1 className="text-3xl font-bold text-center text-vermelho">Está 36°C agora! Sensação: 41°C</h1>
      </div>

      {/* O que fazer */}
      <div className="flex flex-col gap-3 bg-white border border-borda rounded-lg p-4">
        <p className="flex items-center gap-3">
          <img src="/icones/gota.svg" alt="" className="w-5 h-5" />
          Beba um copo de água
        </p>
        <p className="flex items-center gap-3">
          <img src="/icones/casa.svg" alt="" className="w-5 h-5" />
          Vá para o cômodo mais fresco
        </p>
        <p className="flex items-center gap-3">
          <img src="/icones/ondas.svg" alt="" className="w-5 h-5" />
          Molhe os pulsos e a nuca
        </p>
      </div>

      <h3 className="text-lg font-bold text-center">Como você está?</h3>

      <Link to="/PainelUsuario" className="flex items-center justify-center gap-2 bg-white border-2 border-verde text-verde font-bold rounded-lg p-3">
        <img src="/icones/check.svg" alt="" className="w-5 h-5" />
        Estou bem
      </Link>

      <BotaoAjuda />

      <p className="text-center text-xs text-cinza">Segure por 2 segundos. Sem resposta em 10 minutos, avisaremos Ana.</p>

    </section>
  )
}

export default Alerta