import { useState } from 'react'

// Import de componentes
import Voltar from '../../../../components/Voltar'

// Import do acesso aos dados
import { buscarAcompanhamento } from '../../../../services/acompanhamento'

const Acompanhamento = () => {
  // etapas: as 3 situações do atendimento
  // eventos: linha do tempo (texto enquanto espera / texto quando acontece)
  const { etapas, eventos } = buscarAcompanhamento()
  const [etapa, setEtapa] = useState(0)
  const atual = etapas[etapa]

  return (
    <section className="flex flex-col h-full gap-4">

      <div className="flex justify-between">
        <Voltar para="/PainelCuidador" />
        {etapa < 2 && (
          <button onClick={() => setEtapa(etapa + 1)} className="border border-dashed border-cinza rounded-md px-2 text-xs text-cinza">Demo: Avançar</button>
        )}
      </div>

      {/* Situação agora */}
      <div className={`flex flex-col gap-1 rounded-lg p-4 mt-2 ${atual.cor}`}>
        <b className="text-sm">{atual.rotulo}</b>
        <h2 className="text-2xl font-bold">{atual.titulo}</h2>
        <small className="text-cinza">{atual.texto}</small>
      </div>

      {/* Linha do tempo: bolinhas ligadas por uma barra (verde até onde já aconteceu) */}
      <h3 className="text-lg font-bold">O que aconteceu</h3>
      <div className="flex flex-col">
        {eventos.map((evento, i) => (
          <div key={evento.nome} className="relative flex items-start gap-3 pb-4">
            {i < eventos.length - 1 && (
              <span className={`absolute left-[7px] top-5 -bottom-1 w-0.5 ${i + 1 < etapa + 2 ? 'bg-verde' : 'bg-borda'}`}></span>
            )}
            <span className={`w-4 h-4 mt-1 shrink-0 rounded-full border-2 ${i < etapa + 2 ? 'bg-verde border-verde' : 'bg-creme border-borda'}`}></span>
            <div>
              <p className={i < etapa + 2 ? 'font-bold' : 'text-cinza'}>{evento.nome}</p>
              <small className="text-cinza">{i < etapa + 2 ? evento.feito : evento.espera}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Ligações no fim da tela */}
      <div className="mt-auto grid grid-cols-2 gap-2">
        <a href="tel:11933333333" className="flex items-center justify-center bg-verde text-white font-bold rounded-lg p-3 text-center">Ligar para Seu Carlos</a>
        <a href="tel:11911111111" className="flex items-center justify-center bg-white border border-verde font-bold rounded-lg p-3 text-center">Ligar para Marcela</a>
      </div>

    </section>
  )
}

export default Acompanhamento