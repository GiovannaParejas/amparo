import { Link } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'

const Notificacoes = () => {
  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelUsuario/Menu" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Notificações</h2>

      {/* Pedido de acompanhamento */}
      <div className="flex flex-col gap-3 bg-white border border-borda rounded-lg p-4">
        <b>Ana quer te acompanhar</b>
        <p className="text-sm text-cinza">Ela vai ser avisada quando você pedir ajuda ou não responder a um alerta.</p>

        <div className="grid grid-cols-2 gap-2">
          <Link to="/PainelUsuario/Menu" className="bg-verde text-white font-bold text-center rounded-lg p-2">Aceitar</Link>
          <Link to="/PainelUsuario/Menu" className="bg-white border border-vermelho text-vermelho font-bold text-center rounded-lg p-2">Recusar</Link>
        </div>
      </div>

    </section>
  )
}

export default Notificacoes