import { useState } from 'react'

// Import de componentes
import ListaNumerada from '../../../../components/ListaNumerada'
import Voltar from '../../../../components/Voltar'

// Import do acesso aos dados
import { buscarTextos } from '../../../../services/textos'

const ComoAjudar = () => {
  const textos = buscarTextos()
  const [aba, setAba] = useState('calor')
  const passos = textos.voluntario

  return (
    <section className="flex flex-col h-full gap-4">

      <Voltar para="/PainelVoluntario" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Como ajudar</h2>

      {/* Abas */}
      <div className="grid grid-cols-3 gap-2">
        <button onClick={() => setAba('calor')} className={`border border-borda rounded-md p-2 font-bold ${aba === 'calor' ? 'bg-verde text-white' : 'bg-white'}`}>Calor</button>
        <button onClick={() => setAba('chuva')} className={`border border-borda rounded-md p-2 font-bold ${aba === 'chuva' ? 'bg-verde text-white' : 'bg-white'}`}>Chuva</button>
        <button onClick={() => setAba('samu')} className={`border border-borda rounded-md p-2 font-bold ${aba === 'samu' ? 'bg-verde text-white' : 'bg-white'}`}>SAMU</button>
      </div>

      {/* Lista da aba escolhida */}
      <ListaNumerada itens={passos[aba]} />

      {/* Botão no fim da tela */}
      <a href="tel:192" className="mt-auto bg-vermelho text-white font-bold rounded-lg p-3 text-center">Ligar para o SAMU</a>

    </section>
  )
}

export default ComoAjudar