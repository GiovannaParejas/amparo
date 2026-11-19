import { Link } from 'react-router'

// Import de componentes
import Mapa from '../../../../components/Mapa'

// Passo 1: o voluntário vai até a Marcela
const Caminho = () => {
  return (
    <section className="flex flex-col gap-4">

      <a href="tel:11911111111" className="self-center flex items-center gap-2 bg-white border border-borda rounded-lg px-3 py-2 font-bold">
        <img src="/icones/telefone.svg" alt="" className="w-5 h-5" />
        Ligar para Marcela
      </a>

      {/* Titulo */}
      <div>
        <p className="text-sm font-bold">Passo 1 de 2 | A caminho</p>
        <h2 className="text-2xl font-bold">Vá até Marcela</h2>
      </div>

      {/* Endereço */}
      <div className="flex flex-col gap-2 bg-white border border-borda rounded-lg p-4">
        <b className="text-sm">Endereço</b>
        <b className="text-xl">Rua das Flores, 120 | Casa 2</b>
        <p className="text-cinza">Portão verde. Ela deixa a porta destrancada em alerta.</p>
      </div>

      {/* Mapa com o caminho: azul é você, vermelho é a Marcela */}
      <Mapa>
        <path d="M100 82 H235 V58" stroke="var(--color-texto)" strokeWidth="2" strokeDasharray="2 3" fill="none" />
        <circle cx="100" cy="82" r="9" fill="var(--color-azul)" />
        <circle cx="235" cy="44" r="12" fill="var(--color-vermelho)" />
        <text x="235" y="48.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">M</text>
      </Mapa>

      <p className="bg-verde-claro rounded-lg p-3 text-sm"><b>Ao chegar:</b> ofereça água e leve Marcela para o cômodo mais fresco.</p>

      <Link to="/PainelVoluntario/NoLocal" className="bg-verde text-white font-bold text-center rounded-lg p-3">Cheguei</Link>

    </section>
  )
}

export default Caminho