import { Link } from 'react-router'

// Fim do atendimento
const Obrigado = () => {
  return (
    <section className="flex flex-col h-full gap-3">

      {/* Mensagem no meio da tela */}
      <img src="/icones/check.svg" alt="" className="mt-auto w-12 h-12" />
      <h2 className="text-2xl font-bold">Obrigado, Carlos!</h2>
      <p className="text-cinza">A Ana foi avisada de que a mãe dela está bem. Seu atendimento levou 14 minutos.</p>

      <Link to="/PainelVoluntario" className="mt-auto bg-verde text-white font-bold text-center rounded-lg p-3">Voltar ao início</Link>

    </section>
  )
}

export default Obrigado