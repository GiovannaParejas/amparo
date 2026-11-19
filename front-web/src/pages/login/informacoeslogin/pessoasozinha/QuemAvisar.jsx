import { Link, useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Campo from '../../../../components/Campo'
import CampoCelular from '../../../../components/CampoCelular'
import Progresso from '../../../../components/Progresso'

// Import da lógica do contato (API MockAPI)
import useContato from '../../../../hooks/useContato'

const QuemAvisar = () => {
  const navigate = useNavigate()

  // Sem id: o formulário cria um contato novo na rede de apoio
  const { nome, setNome, celular, setCelular, salvar } = useContato()

  // Salva o primeiro contato e vai para o "Tudo pronto"
  const continuar = async () => {
    if (await salvar()) {
      navigate('/CriarConta/SobreVoce/QuemAvisar/TudoPronto')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/CriarConta/SobreVoce" />

      {/* Progresso */}
      <Progresso passo="Passo 3 de 3" largura="w-2/3" />

      {/* Titulo */}
      <div>
        <h2 className="text-2xl font-bold">Quem avisaremos se você precisar?</h2>
        <p className="text-sm text-cinza mt-1">Pode ser alguém da família, um vizinho ou cuidador.</p>
      </div>

      {/* Nome */}
      <Campo rotulo="Nome" placeholder="Ex.: Juliana" value={nome} onChange={(e) => setNome(e.target.value)} />

      {/* Celular */}
      <CampoCelular valor={celular} mudar={setCelular} />

      <button onClick={continuar} className="bg-verde text-white font-bold rounded-lg p-3 mt-2">Continuar</button>
      <Link to="/CriarConta/SobreVoce/QuemAvisar/TudoPronto" className="text-center font-bold text-verde underline">Fazer isso depois</Link>

    </section>
  )
}

export default QuemAvisar