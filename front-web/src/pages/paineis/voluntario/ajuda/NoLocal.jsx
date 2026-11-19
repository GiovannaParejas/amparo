import { Link } from 'react-router'

// Passo 2: o voluntário chegou e conta como a Marcela está
const NoLocal = () => {
  return (
    <section className="flex flex-col h-full gap-4">

      <a href="tel:11911111111" className="self-center flex items-center gap-2 bg-white border border-borda rounded-lg px-3 py-2 font-bold">
        <img src="/icones/telefone.svg" alt="" className="w-5 h-5" />
        Ligar para Marcela
      </a>

      {/* Titulo */}
      <div>
        <p className="text-sm font-bold">Passo 2 de 2 | No local</p>
        <h2 className="text-2xl font-bold">Como Marcela está?</h2>
        <p className="text-sm text-cinza">Vamos avisar Ana com a sua resposta</p>
      </div>

      <p className="bg-vermelho-claro rounded-lg p-3 text-sm"><b>Ligue 192 se ela:</b> estiver confusa, não acordar direito, tiver falta de ar ou a pele muito quente e seca</p>

      {/* Botões no fim da tela */}
      <Link to="/PainelVoluntario/Obrigado" className="mt-auto flex items-center justify-center gap-2 bg-verde text-white font-bold rounded-lg p-3">
        <img src="/icones/check-branco.svg" alt="" className="w-5 h-5" />
        Ela está bem
      </Link>
      <a href="tel:192" className="bg-vermelho text-white font-bold rounded-lg p-3 text-center">Precisa de socorro | 192</a>

    </section>
  )
}

export default NoLocal