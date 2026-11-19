// Import de componentes
import ListaNumerada from '../../components/ListaNumerada'
import Voltar from '../../components/Voltar'
import Mapa from '../../components/Mapa'

// Import do narrador
import narrar from '../../utils/narrar'

// Import do acesso aos dados
import { buscarTextos } from '../../services/textos'

// Caminho até o Centro Comunitário
// Usada pelo usuário e pelo voluntário, só muda para onde volta
const ComoChegar = ({ voltar }) => {
  const textos = buscarTextos()

  return (
    <section className="flex flex-col gap-4">

      <Voltar para={voltar} />

      {/* Titulo */}
      <div className="mt-2">
        <h2 className="text-2xl font-bold">Centro Comunitário</h2>
        <p className="text-sm text-cinza">400 m | 5 minutos a pé | Caminho com sombra</p>
      </div>

      {/* Mapa com o caminho */}
      <Mapa>
        <path d="M150 82 H209 V46" stroke="var(--color-verde)" strokeWidth="3" strokeDasharray="4 4" fill="none" />
        <circle cx="150" cy="82" r="8" fill="var(--color-azul)" stroke="white" strokeWidth="2" />
        <circle cx="209" cy="38" r="10" fill="var(--color-verde)" />
        <text x="209" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">1</text>
      </Mapa>

      {/* Passos */}
      <ListaNumerada itens={textos.comoChegar} />

      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => narrar(textos.comoChegar.join('. '))} className="flex items-center justify-center gap-2 bg-verde text-white font-bold rounded-lg p-3">
          <img src="/icones/som-branco.svg" alt="" className="w-5 h-5" />
          Guia por voz
        </button>
        <button onClick={() => alert('Pedido de carona enviado aos voluntários perto de você.')} className="bg-white border border-verde font-bold rounded-lg p-3">Pedir carona</button>
      </div>

    </section>
  )
}

export default ComoChegar