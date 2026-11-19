import { Link } from 'react-router'

// Import de componentes
import Topo from '../../../components/Topo'
import BotaoAjuda from '../../../components/BotaoAjuda'

// Import da lógica do cadastro e do clima
import useCadastro from '../../../hooks/useCadastro'
import useClima from '../../../hooks/useClima'

const PainelUsuario = () => {
  const { dados } = useCadastro('usuario')
  const { clima } = useClima('Rua Afonso Braz, São Paulo')

  return (
    <section className="flex flex-col gap-4">

      {/* Topo */}
      <Topo
        menu="/PainelUsuario/Menu"
        demo="/PainelUsuario/Alerta"
        textoDemo="Demo: Alerta"
        config="/ConfigUsuario"
        links={[
          { texto: 'Abrigos', para: '/PainelUsuario/Abrigos' },
          { texto: 'Contatos', para: '/PainelUsuario/Contatos' },
          { texto: 'Clima', para: '/PainelUsuario/Clima' },
          { texto: 'Dicas', para: '/PainelUsuario/Dicas' },
          { texto: 'Menu', para: '/PainelUsuario/Menu' },
        ]}
      />

      <h1 className="text-2xl font-bold text-center lg:text-left mt-2">Bom dia, {dados.nome.split(' ')[0]}!</h1>

      {/* Aviso do dia: vem do clima de verdade (amarelo e com "Atenção" quando tem alerta) */}
      <Link to="/PainelUsuario/Clima" className={`flex flex-col items-start gap-2 rounded-lg p-4 ${clima && clima.alerta ? 'bg-amarelo-claro' : 'bg-verde-claro'}`}>
        {clima && clima.alerta && (
          <span className="flex items-center gap-1 bg-amarelo rounded-md px-2 py-1 text-sm font-bold">
            <img src="/icones/alerta.svg" alt="" className="w-4 h-4" />
            Atenção
          </span>
        )}
        <b className="text-lg">{clima ? clima.aviso : 'Carregando o clima de hoje...'}</b>
        <small className="text-cinza">{clima ? `Agora: ${clima.agora} °C · ` : ''}Toque para ver mais</small>
      </Link>

      {/* Atalhos */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Link to="/PainelUsuario/Abrigos" className="flex flex-col items-center gap-2 bg-white border border-borda rounded-lg py-5 font-bold text-lg">
          <img src="/icones/local.svg" alt="" className="w-9 h-9" />
          Abrigos
        </Link>
        <Link to="/PainelUsuario/Contatos" className="flex flex-col items-center gap-2 bg-white border border-borda rounded-lg py-5 font-bold text-lg">
          <img src="/icones/pessoas.svg" alt="" className="w-9 h-9" />
          Contatos
        </Link>
        <Link to="/PainelUsuario/Clima" className="flex flex-col items-center gap-2 bg-white border border-borda rounded-lg py-5 font-bold text-lg">
          <img src="/icones/termometro.svg" alt="" className="w-9 h-9" />
          Clima
        </Link>
        <Link to="/PainelUsuario/Dicas" className="flex flex-col items-center gap-2 bg-white border border-borda rounded-lg py-5 font-bold text-lg">
          <img src="/icones/lampada.svg" alt="" className="w-9 h-9" />
          Dicas
        </Link>
      </div>

      {/* Pedir ajuda */}
      <BotaoAjuda />
      <p className="text-center text-sm text-cinza -mt-2">Segure por 2 segundos</p>

    </section>
  )
}

export default PainelUsuario