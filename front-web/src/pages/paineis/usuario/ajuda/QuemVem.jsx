import { Link } from 'react-router'

// Import de componentes
import Avatar from '../../../../components/Avatar'
import Voltar from '../../../../components/Voltar'
import NumerosEmergencia from '../../../../components/NumerosEmergencia'

// Quem foi avisado do pedido de ajuda
const QuemVem = () => {
  return (
    <section className="flex flex-col h-full gap-4">

      <Voltar para="/PainelUsuario" />

      {/* Situação */}
      <div className="flex items-center gap-3 bg-verde-claro rounded-lg p-4 mt-2">
        <div className="flex-1">
          <h2 className="text-lg font-bold">Ajuda solicitada</h2>
          <p className="text-sm">Fique calma, a ajuda está a caminho</p>
        </div>
        <img src="/icones/check.svg" alt="" className="w-7 h-7" />
      </div>

      {/* Quem foi avisado */}
      <h3 className="text-lg font-bold">Quem foi avisado</h3>

      <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
        <Avatar nome="Ana" />
        <div>
          <b>Ana</b> <span className="text-sm text-cinza">| Filha</span>
          <p className="text-xs text-cinza">Viu a mensagem</p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white border-2 border-verde rounded-lg p-3">
        <Avatar nome="Carlos" voluntario={true} />
        <div>
          <b>Seu Carlos</b> <span className="text-sm text-cinza">| Voluntário</span>
          <p className="text-xs text-verde font-bold">A caminho, chega em 8 minutos</p>
        </div>
      </div>

      {/* Emergência */}
      <h3 className="text-lg font-bold">Emergência</h3>
      <NumerosEmergencia />

      <Link to="/PainelUsuario" className="mt-auto bg-white border border-verde font-bold text-center rounded-lg p-3">Cancelar pedido</Link>

    </section>
  )
}

export default QuemVem