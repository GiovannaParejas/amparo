// Import de componentes
import Voltar from '../../../../components/Voltar'

// Import do acesso aos dados
import { listarAtendimentos } from '../../../../services/atendimentos'

const MeusAtendimentos = () => {
  const atendimentos = listarAtendimentos()

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelVoluntario/Menu" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Meus atendimentos</h2>

      {/* Números */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-lg p-4 text-center">
          <b className="block text-3xl text-verde">4</b>
          Pessoas ajudadas
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <b className="block text-3xl text-verde">7 min</b>
          para chegar, em média
        </div>
      </div>

      {/* Lista */}
      <div className="flex flex-col gap-2">
        {atendimentos.map((atendimento) => (
          <div key={atendimento.quando} className="bg-white border border-borda rounded-lg p-3">
            <small className="text-cinza">{atendimento.quando}</small>
            <p className="font-bold">{atendimento.quem}</p>
            <p className="text-sm text-cinza">{atendimento.oQueFez}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default MeusAtendimentos