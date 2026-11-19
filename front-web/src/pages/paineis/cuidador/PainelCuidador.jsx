import { Link } from 'react-router'

// Import de componentes
import Topo from '../../../components/Topo'

// Import da lógica do cadastro
import useCadastro from '../../../hooks/useCadastro'

const PainelCuidador = () => {
  const { dados } = useCadastro('cuidador')

  return (
    <section className="flex flex-col gap-4">

      {/* Topo */}
      <Topo
        menu="/PainelCuidador/Menu"
        demo="/PainelCuidador/SemResposta"
        textoDemo="Demo: Sem resposta"
        config="/ConfigCuidador"
        links={[
          { texto: 'Rede de contatos', para: '/PainelCuidador/Contatos' },
          { texto: 'Pessoas que acompanho', para: '/PainelCuidador/Pessoas' },
          { texto: 'Aparelho', para: '/PainelCuidador/Aparelho' },
          { texto: 'Menu', para: '/PainelCuidador/Menu' },
        ]}
      />

      {/* Titulo */}
      <div className="text-center lg:text-left mt-2">
        <h1 className="text-2xl font-bold">Olá, {dados.nome}!</h1>
        <p className="text-sm text-cinza">Você acompanha 1 pessoa</p>
      </div>

      {/* Cartão da Marcela */}
      <div className="flex flex-col gap-3 bg-white rounded-lg p-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-verde-claro text-verde font-bold">M</span>
          <div>
            <b className="text-lg">Marcela</b>
            <p className="text-xs text-cinza">Mãe | Vila Nova</p>
          </div>
        </div>

        <div className="flex justify-between items-center bg-verde-claro rounded-lg p-3">
          <div>
            <b>Está bem</b>
            <p className="text-xs">Confirmou às 14h02</p>
          </div>
          <img src="/icones/check.svg" alt="" className="w-6 h-6" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-amarelo-claro border border-amarelo rounded-lg p-2">
            <small>Atenção</small>
            <b className="block">27°C em casa</b>
          </div>
          <Link to="/PainelCuidador/Aparelho" className="border border-borda rounded-lg p-2">
            <small>Dispositivo</small>
            <b className="block">Ligado</b>
          </Link>
        </div>

        <Link to="/PainelCuidador/Contatos" className="bg-white border border-verde font-bold text-center rounded-lg p-3">Rede de apoio dela</Link>
        <a href="tel:11911111111" className="flex items-center justify-center gap-2 bg-verde text-white font-bold rounded-lg p-3">
          <img src="/icones/telefone-branco.svg" alt="" className="w-5 h-5" />
          Ligar
        </a>
      </div>

      {/* Últimos avisos */}
      <h3 className="text-lg font-bold">Últimos avisos</h3>
      <div className="flex gap-4 bg-white border border-borda rounded-lg p-3">
        <b className="w-16 shrink-0">Hoje</b>
        <p className="text-sm">Alerta de calor | ela confirmou que está bem</p>
      </div>
      <div className="flex gap-4 bg-white border border-borda rounded-lg p-3">
        <b className="w-16 shrink-0">Ontem</b>
        <p className="text-sm">Pedido de ajuda | Seu Carlos atendeu</p>
      </div>

    </section>
  )
}

export default PainelCuidador