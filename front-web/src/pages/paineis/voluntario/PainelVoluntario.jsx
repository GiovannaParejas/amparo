import { Link } from 'react-router'

// Import de componentes
import Topo from '../../../components/Topo'
import Interruptor from '../../../components/Interruptor'

// Import da lógica do cadastro
import useCadastro from '../../../hooks/useCadastro'

const PainelVoluntario = () => {
  const { dados, mudarESalvar } = useCadastro('voluntario')

  // Igual ao Figma: "Seu Carlos" (ou "Dona", se for mulher)
  const tratamento = dados.sexo === 'Feminino' ? 'Dona' : 'Seu'

  return (
    <section className="flex flex-col gap-4">

      {/* Topo */}
      <Topo
        menu="/PainelVoluntario/Menu"
        demo="/PainelVoluntario/Pedido"
        textoDemo="Demo: Novo Pedido"
        config="/ConfigVoluntario"
        links={[
          { texto: 'Onde e quando', para: '/PainelVoluntario/OndeQuando' },
          { texto: 'Como ajudar', para: '/PainelVoluntario/ComoAjudar' },
          { texto: 'Atendimentos', para: '/PainelVoluntario/Atendimentos' },
          { texto: 'Menu', para: '/PainelVoluntario/Menu' },
        ]}
      />

      {/* Titulo */}
      <h1 className="text-2xl font-bold text-center lg:text-left mt-2">Olá, {tratamento} {dados.nome}!</h1>

      {/* Disponível ou indisponível: o texto e a cor mudam junto com o interruptor (e a escolha fica salva) */}
      <div className={`flex items-center gap-3 rounded-lg p-4 ${dados.disponivel ? 'bg-verde-claro border-2 border-verde' : 'bg-white border-2 border-borda'}`}>
        <div className="flex-1">
          <b className="text-lg">{dados.disponivel ? 'Disponível agora' : 'Indisponível'}</b>
          <p className="text-xs text-cinza">{dados.disponivel ? 'Você vai receber pedidos perto de você' : 'Você não vai receber pedidos agora'}</p>
        </div>
        <Interruptor nome="Disponível" ligado={dados.disponivel} aoMudar={(valor) => mudarESalvar('disponivel', valor)} />
      </div>

      {/* Distância */}
      <div className="flex justify-between items-center bg-white border border-borda rounded-lg p-3">
        <div>
          <b>Atendendo até {dados.distancia}</b>
          <p className="text-xs text-cinza">{dados.bairro} e arredores</p>
        </div>
        <Link to="/PainelVoluntario/OndeQuando" className="font-bold text-verde underline">Mudar</Link>
      </div>

      {/* Sua ajuda */}
      <h3 className="text-lg font-bold">Sua ajuda</h3>
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

      {/* Lembrete */}
      <p className="bg-verde-claro rounded-lg p-3 text-sm"><b>Lembrete:</b> você não substitui o SAMU. Se a pessoa estiver confusa, desmaiada ou com falta de ar, ligue 192</p>

      <Link to="/PainelVoluntario/ComoAjudar" className="bg-white border border-verde font-bold text-center rounded-lg p-3">Como ajudar</Link>

    </section>
  )
}

export default PainelVoluntario