import { Link } from 'react-router'

// Import da lógica do aviso (som, voz e vibração)
import useAviso from '../../../../hooks/useAviso'

// Pedido de ajuda que chega para o voluntário
// O voluntário precisa aceitar ou recusar
const Pedido = () => {
  useAviso('Marcela precisa de ajuda, a 300 metros de você.')

  return (
    <section className="flex flex-col gap-4">

      {/* Aviso */}
      <div className="flex flex-col items-center gap-3">
        <img src="/icones/alerta-vermelho.svg" alt="" className="w-28" />
        <h1 className="text-3xl font-bold text-center text-vermelho">Marcela precisa de ajuda!</h1>
      </div>

      {/* Detalhes do pedido */}
      <div className="flex flex-col gap-3 bg-white border border-borda rounded-lg p-4">
        <b className="text-center">300 m | 4 minutos a pé</b>
        <p><b>O que fazer:</b> ver se ela está bem e levar água.</p>
        <p><b>Por quê:</b> na casa está 36°C, mas ela não respondeu ao alerta.</p>
        <p><b>Bom saber:</b> ela anda com bengala. A filha Ana foi avisada, mas mora longe.</p>
      </div>

      <Link to="/PainelVoluntario/Caminho" className="bg-verde text-white font-bold text-center rounded-lg p-3">Aceitar e ir</Link>
      <Link to="/PainelVoluntario" className="bg-white border border-verde font-bold text-center rounded-lg p-3">Não posso agora</Link>

      <p className="text-center text-xs text-cinza">O endereço completo aparece quando você aceita</p>

    </section>
  )
}

export default Pedido