import { useState } from 'react'

// Import do narrador
import narrar from '../../../../utils/narrar'

// Import de componentes
import Voltar from '../../../../components/Voltar'

// Import do acesso aos dados
import { buscarTextos } from '../../../../services/textos'

const Dicas = () => {
  const textos = buscarTextos()
  const [aba, setAba] = useState('calor')
  const dicas = textos.usuario

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelUsuario" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Dicas para se proteger</h2>

      {/* Abas */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => setAba('calor')} className={`flex items-center justify-center gap-2 border border-borda rounded-md p-3 font-bold ${aba === 'calor' ? 'bg-verde text-white' : 'bg-white'}`}>
          <img src={aba === 'calor' ? '/icones/sol-branco.svg' : '/icones/sol.svg'} alt="" className="w-6 h-6" />
          Calor
        </button>
        <button onClick={() => setAba('chuva')} className={`flex items-center justify-center gap-2 border border-borda rounded-md p-3 font-bold ${aba === 'chuva' ? 'bg-verde text-white' : 'bg-white'}`}>
          <img src={aba === 'chuva' ? '/icones/chuva-branco.svg' : '/icones/chuva.svg'} alt="" className="w-6 h-6" />
          Chuva
        </button>
      </div>

      {/* Lista da aba escolhida */}
      <div className="flex flex-col gap-2">
        {dicas[aba].map((dica, i) => (
          <div key={dica} className="flex items-center gap-3 bg-white border border-borda rounded-md p-2 font-bold">
            <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-verde-claro text-verde">{i + 1}</span>
            {dica}
          </div>
        ))}
      </div>

      {/* Lê as dicas da aba aberta, uma depois da outra */}
      <button onClick={() => narrar(dicas[aba].join('. '))} className="flex items-center justify-center gap-2 bg-verde text-white font-bold rounded-lg p-3">
        <img src="/icones/som-branco.svg" alt="" className="w-6 h-6" />
        Ouvir as dicas
      </button>

    </section>
  )
}

export default Dicas