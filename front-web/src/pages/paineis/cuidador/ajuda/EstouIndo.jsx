import { Link } from 'react-router'

// Confirmação de que a Ana está indo até a Marcela
const EstouIndo = () => {
  return (
    <section className="flex flex-col h-full gap-4">

      {/* Janela no fim da tela */}
      <div className="mt-auto flex flex-col gap-3 bg-white border border-borda rounded-2xl p-5">
        <h2 className="text-2xl font-bold">Avisamos que você está indo!</h2>
        <p className="text-cinza">Se em 15 minutos você não chegar, chamaremos o voluntário mais perto.</p>

        <Link to="/PainelCuidador/Acompanhamento" className="bg-verde text-white font-bold text-center rounded-lg p-3">Acompanhar atendimento</Link>
      </div>

    </section>
  )
}

export default EstouIndo