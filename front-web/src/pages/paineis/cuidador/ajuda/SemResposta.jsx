import { Link } from 'react-router'

// Import da lógica do aviso (som, voz e vibração)
import useAviso from '../../../../hooks/useAviso'

// Alerta para o cuidador: a Marcela não respondeu em 10 minutos
// Sem "Voltar" de propósito: a Ana precisa escolher o que fazer
const SemResposta = () => {
  useAviso('Atenção! Marcela não respondeu ao alerta de calor faz 10 minutos.')

  return (
    <section className="flex flex-col gap-4">

      {/* Aviso */}
      <div className="flex flex-col items-center gap-3">
        <img src="/icones/alerta-vermelho.svg" alt="" className="w-28" />
        <h1 className="text-3xl font-bold text-center text-vermelho">Marcela não respondeu ao alerta!</h1>
      </div>

      {/* Situação */}
      <div className="flex flex-col gap-3 bg-white border border-borda rounded-lg p-4">
        <p>Faz 10 minutos. Na casa dela está 36°C com sensação de 41°C</p>
        <p>Última confirmação: 14h02<br />Dispositivo: ligado</p>
      </div>

      <a href="tel:11911111111" className="flex items-center justify-center gap-2 bg-verde text-white font-bold rounded-lg p-3">
        <img src="/icones/telefone-branco.svg" alt="" className="w-5 h-5" />
        Ligar para ela
      </a>

      <div className="grid grid-cols-2 gap-2">
        <Link to="/PainelCuidador/EstouIndo" className="flex items-center justify-center bg-white border border-cinza font-bold text-center rounded-lg p-3">Estou indo</Link>
        <Link to="/PainelCuidador/Acompanhamento" className="flex items-center justify-center bg-white border border-cinza font-bold text-center rounded-lg p-3">Chamar voluntário</Link>
      </div>

      <a href="tel:192" className="bg-white border-2 border-vermelho text-vermelho font-bold rounded-lg p-3 text-center">Ligar 192 | SAMU</a>

      <p className="text-center text-xs text-cinza">Sem resposta sua em 5 minutos, chamaremos um voluntário</p>

    </section>
  )
}

export default SemResposta