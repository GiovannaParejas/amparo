import { useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../components/Voltar'
import CamposCadastro from '../../components/CamposCadastro'

// Import da lógica do cadastro
import useCadastro from '../../hooks/useCadastro'

// Formulário para editar o cadastro
// Usado pelo cuidador e pelo voluntário: o perfil e para onde volta vêm por props
const EditarCadastro = ({ perfil, voltar }) => {
  const navigate = useNavigate()
  const { dados, mudar, salvar } = useCadastro(perfil)

  // Salva e volta para o "Meu cadastro"
  const salvarEVoltar = () => {
    if (salvar()) {
      navigate(voltar)
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para={voltar} />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Sobre você</h2>

      {/* Nome, sexo, celular e CEP */}
      <CamposCadastro dados={dados} mudar={mudar} />

      <button onClick={salvarEVoltar} className="bg-verde text-white font-bold rounded-lg p-3 mt-2">Salvar</button>

    </section>
  )
}

export default EditarCadastro