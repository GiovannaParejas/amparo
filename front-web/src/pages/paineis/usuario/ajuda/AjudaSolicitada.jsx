import { Link } from 'react-router'

// Confirmação depois de pedir ajuda
const AjudaSolicitada = () => {
  return (
    <section className="flex flex-col h-full gap-4">

      {/* Janela no fim da tela */}
      <div className="mt-auto flex flex-col gap-3 bg-white border border-borda rounded-2xl p-5">
        <img src="/icones/check.svg" alt="" className="w-10 h-10" />
        <h2 className="text-2xl font-bold">Ajuda solicitada!</h2>
        <p className="text-cinza">Ana e Carlos foram avisados às 14h32. Fique onde está, alguém vai até você.</p>

        <Link to="/PainelUsuario/QuemVem" className="bg-verde text-white font-bold text-center rounded-lg p-3">Ver quem está vindo</Link>
        <Link to="/PainelUsuario" className="bg-white border border-verde font-bold text-center rounded-lg p-3">Foi sem querer, cancelar</Link>
      </div>

    </section>
  )
}

export default AjudaSolicitada