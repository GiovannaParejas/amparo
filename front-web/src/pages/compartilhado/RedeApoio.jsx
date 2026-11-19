import { Link } from 'react-router'

// Import de componentes
import Voltar from '../../components/Voltar'
import CartaoContato from '../../components/CartaoContato'
import NumerosEmergencia from '../../components/NumerosEmergencia'

// Import da lógica dos contatos (API MockAPI)
import useContatos from '../../hooks/useContatos'

// Lista de contatos na ordem em que são avisados
// Usada pelo usuário e pelo cuidador, o que muda vem por props
const RedeApoio = ({ voltar, titulo, descricao, caminho }) => {
  const { contatos, carregando, erro, remover } = useContatos()

  // Separa a família dos vizinhos (voluntários)
  const familia = contatos.filter((contato) => contato.quem !== 'Vizinho')
  const vizinhos = contatos.filter((contato) => contato.quem === 'Vizinho')

  return (
    <section className="flex flex-col gap-4">

      <Voltar para={voltar} />

      {/* Titulo */}
      <div className="mt-2">
        <h2 className="text-2xl font-bold">{titulo}</h2>
        <p className="text-sm text-cinza">{descricao}</p>
      </div>

      {/* Avisos enquanto carrega ou se a API falhar */}
      {carregando && <p className="text-cinza">Carregando contatos...</p>}
      {erro && <p className="bg-vermelho-claro rounded-lg p-3 text-sm">Não foi possível buscar os contatos. Confira a URL da API em services/contatos.js</p>}

      {/* 1. Família */}
      <h3 className="text-lg font-bold">1. Família</h3>
      {familia.map((contato) => (
        <CartaoContato key={contato.id} contato={contato} editar={`${caminho}/${contato.id}`} remover={() => remover(contato)} />
      ))}

      {/* 2. Voluntários */}
      <h3 className="text-lg font-bold">2. Voluntários do bairro</h3>
      {vizinhos.map((contato) => (
        <CartaoContato key={contato.id} contato={contato} editar={`${caminho}/${contato.id}`} remover={() => remover(contato)} />
      ))}

      <Link to={`${caminho}/Novo`} className="bg-white border border-verde font-bold text-center rounded-lg p-3">+ Adicionar contato</Link>

      {/* 3. Emergência */}
      <h3 className="text-lg font-bold">3. Emergência</h3>
      <NumerosEmergencia />

    </section>
  )
}

export default RedeApoio