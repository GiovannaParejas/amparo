import { useState } from 'react'
import { useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Campo from '../../../../components/Campo'
import CampoCelular from '../../../../components/CampoCelular'

// Import da lógica das pessoas acompanhadas
import usePessoas from '../../../../hooks/usePessoas'

const NovaPessoa = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [celular, setCelular] = useState('')
  const { convidar } = usePessoas()

  // Convida e volta para a lista, onde a pessoa aparece esperando aceitar
  const enviarConvite = () => {
    if (convidar(nome, celular)) {
      navigate('/PainelCuidador/Pessoas')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelCuidador/Pessoas" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Acompanhar outra pessoa</h2>

      {/* Nome */}
      <Campo rotulo="Nome da pessoa" placeholder="Ex.: Juliana" value={nome} onChange={(e) => setNome(e.target.value)} />

      {/* Celular */}
      <CampoCelular rotulo="Celular da pessoa" valor={celular} mudar={setCelular} />

      <button onClick={enviarConvite} className="bg-verde text-white font-bold rounded-lg p-3 mt-2">Enviar convite</button>

      <p className="text-xs text-cinza text-center lg:text-left">A pessoa precisa aceitar pelo celular dela.</p>

    </section>
  )
}

export default NovaPessoa