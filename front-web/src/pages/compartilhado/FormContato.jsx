import { useParams, useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../components/Voltar'
import Campo from '../../components/Campo'
import CampoCelular from '../../components/CampoCelular'

// Import da lógica do contato (API MockAPI)
import useContato from '../../hooks/useContato'

// Formulário de contato: cria um novo ou edita um que já existe
// Usado pelo usuário e pelo cuidador, só muda para onde volta
const FormContato = ({ voltar }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { nome, setNome, celular, setCelular, quem, setQuem, salvar } = useContato(id)

  // Salva na API e volta para a lista
  const salvarEVoltar = async () => {
    if (await salvar()) {
      navigate(voltar)
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para={voltar} />

      {/* Titulo: muda se for edição */}
      <h2 className="text-2xl font-bold mt-2">{id ? 'Editar contato' : 'Novo contato'}</h2>

      {/* Nome */}
      <Campo rotulo="Nome" placeholder="Ex.: Juliana" value={nome} onChange={(e) => setNome(e.target.value)} />

      {/* Celular */}
      <CampoCelular valor={celular} mudar={setCelular} />

      {/* Quem é */}
      <p>Quem é?</p>
      <div className="grid grid-cols-3 gap-2 -mt-2">
        <button onClick={() => setQuem('Família')} className={`border border-borda rounded-lg p-2 text-sm font-bold ${quem === 'Família' ? 'bg-verde text-white' : 'bg-white'}`}>Família</button>
        <button onClick={() => setQuem('Vizinho')} className={`border border-borda rounded-lg p-2 text-sm font-bold ${quem === 'Vizinho' ? 'bg-verde text-white' : 'bg-white'}`}>Vizinho</button>
        <button onClick={() => setQuem('Cuidador')} className={`border border-borda rounded-lg p-2 text-sm font-bold ${quem === 'Cuidador' ? 'bg-verde text-white' : 'bg-white'}`}>Cuidador</button>
      </div>

      <p className="text-xs text-cinza">Essa pessoa vai receber uma mensagem perguntando se aceita ser avisada quando você precisar.</p>

      <button onClick={salvarEVoltar} className="bg-verde text-white font-bold rounded-lg p-3">Salvar contato</button>

    </section>
  )
}

export default FormContato
