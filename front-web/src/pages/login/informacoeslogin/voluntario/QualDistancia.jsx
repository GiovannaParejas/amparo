import { Link, useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Campo from '../../../../components/Campo'
import CampoCelular from '../../../../components/CampoCelular'
import Progresso from '../../../../components/Progresso'

// Import da lógica do cadastro
import useCadastro from '../../../../hooks/useCadastro'

const QualDistancia = () => {
  const navigate = useNavigate()
  const { dados, mudar, salvar } = useCadastro('voluntario')

  // Salva e vai para o "Tudo pronto"
  const continuar = () => {
    if (salvar()) {
      navigate('/CriarConta/SobreVoluntario/QualDistancia/TudoPronto')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/CriarConta/SobreVoluntario" />

      {/* Progresso */}
      <Progresso passo="Passo 3 de 3" largura="w-2/3" />

      {/* Titulo */}
      <div>
        <h2 className="text-2xl font-bold">Até onde você pode ir?</h2>
        <p className="text-sm text-cinza mt-1">Você será avisado só de pedidos perto de você.</p>
      </div>

      {/* Distância */}
      <Campo rotulo="Distância máxima" placeholder="Ex.: 1 km" value={dados.distancia} onChange={(e) => mudar('distancia', e.target.value)} />

      {/* Celular */}
      <CampoCelular rotulo="Celular para contato" valor={dados.celular} mudar={(valor) => mudar('celular', valor)} />

      <button onClick={continuar} className="bg-verde text-white font-bold rounded-lg p-3 mt-2">Continuar</button>
      <Link to="/CriarConta/SobreVoluntario/QualDistancia/TudoPronto" className="text-center font-bold text-verde underline">Fazer isso depois</Link>

    </section>
  )
}

export default QualDistancia