// Import do narrador
import narrar from '../../../../utils/narrar'

// Import de componentes
import ListaNumerada from '../../../../components/ListaNumerada'
import Voltar from '../../../../components/Voltar'

// Import do acesso aos dados
import { buscarTextos } from '../../../../services/textos'

const ComoUsar = () => {
  const textos = buscarTextos()

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelUsuario/Menu" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Como usar o Amparo</h2>

      {/* Passos */}
      <ListaNumerada itens={textos.comoUsar} />

      {/* Lê os passos, um depois do outro */}
      <button onClick={() => narrar(textos.comoUsar.join('. '))} className="flex items-center justify-center gap-2 bg-verde text-white font-bold rounded-lg p-3">
        <img src="/icones/som-branco.svg" alt="" className="w-6 h-6" />
        Ouvir as dicas
      </button>

    </section>
  )
}

export default ComoUsar