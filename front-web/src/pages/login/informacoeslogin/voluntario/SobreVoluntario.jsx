import { useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Progresso from '../../../../components/Progresso'
import CamposCadastro from '../../../../components/CamposCadastro'

// Import da lógica do cadastro
import useCadastro from '../../../../hooks/useCadastro'

const SobreVoluntario = () => {
  const navigate = useNavigate()
  const { dados, mudar, salvar } = useCadastro('voluntario')

  // Salva e vai para o próximo passo
  const continuar = () => {
    if (salvar()) {
      navigate('/CriarConta/SobreVoluntario/QualDistancia')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/CriarConta" />

      {/* Progresso */}
      <Progresso passo="Passo 2 de 3" largura="w-1/3" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold">Sobre você</h2>

      {/* Nome, sexo, celular e CEP */}
      <CamposCadastro dados={dados} mudar={mudar} />

      <button onClick={continuar} className="bg-verde text-white font-bold rounded-lg p-3 mt-2">Continuar</button>

    </section>
  )
}

export default SobreVoluntario