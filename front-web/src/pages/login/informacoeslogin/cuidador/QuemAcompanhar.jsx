import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Campo from '../../../../components/Campo'
import CampoCelular from '../../../../components/CampoCelular'
import Progresso from '../../../../components/Progresso'

// Import da lógica das pessoas acompanhadas
import usePessoas from '../../../../hooks/usePessoas'

const QuemAcompanhar = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [celular, setCelular] = useState('')
  const { convidar } = usePessoas()

  // Convida a pessoa e vai para o "Tudo pronto"
  const continuar = () => {
    if (convidar(nome, celular)) {
      navigate('/CriarConta/SobreCuidador/QuemAcompanhar/TudoPronto')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/CriarConta/SobreCuidador" />

      {/* Progresso */}
      <Progresso passo="Passo 3 de 3" largura="w-2/3" />

      {/* Titulo */}
      <div>
        <h2 className="text-2xl font-bold">Quem você vai acompanhar?</h2>
        <p className="text-sm text-cinza mt-1">Vamos pedir para essa pessoa aceitar o seu acompanhamento.</p>
      </div>

      {/* Nome */}
      <Campo rotulo="Nome da pessoa" placeholder="Ex.: Juliana" value={nome} onChange={(e) => setNome(e.target.value)} />

      {/* Celular */}
      <CampoCelular rotulo="Celular da pessoa" valor={celular} mudar={setCelular} />

      <button onClick={continuar} className="bg-verde text-white font-bold rounded-lg p-3 mt-2">Continuar</button>
      <Link to="/CriarConta/SobreCuidador/QuemAcompanhar/TudoPronto" className="text-center font-bold text-verde underline">Fazer isso depois</Link>

    </section>
  )
}

export default QuemAcompanhar