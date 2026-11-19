import { useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Campo from '../../../../components/Campo'
import CampoCelular from '../../../../components/CampoCelular'

// Import da lógica do cadastro
import useCadastro from '../../../../hooks/useCadastro'

// Edição da ficha: os mesmos campos do cadastro, com "Salvar"
const EditarFicha = () => {
  const navigate = useNavigate()
  const { dados, mudar, salvar } = useCadastro('usuario')

  // Salva e volta para a ficha
  const salvarEVoltar = () => {
    if (salvar()) {
      navigate('/PainelUsuario/MinhaFicha')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelUsuario/MinhaFicha" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Sobre você</h2>

      {/* Nome */}
      <Campo rotulo="Como podemos te chamar?" placeholder="Ex.: Juliana" value={dados.nome} onChange={(e) => mudar('nome', e.target.value)} />

      {/* Celular */}
      <CampoCelular valor={dados.celular} mudar={(valor) => mudar('celular', valor)} />

      {/* Cuidado especial */}
      <Campo rotulo="Precisa de algum cuidado especial?" placeholder="Ex.: uso fraldas, não consigo levantar sozinha" value={dados.cuidado} onChange={(e) => mudar('cuidado', e.target.value)} />

      {/* Alergia */}
      <Campo rotulo="Tem alguma alergia?" placeholder="Ex.: dipirona" value={dados.alergia} onChange={(e) => mudar('alergia', e.target.value)} />

      {/* Doença */}
      <Campo rotulo="Tem alguma doença?" placeholder="Ex.: pressão alta" value={dados.doenca} onChange={(e) => mudar('doenca', e.target.value)} />

      {/* Remédio */}
      <Campo rotulo="Usa algum remédio?" placeholder="Ex.: pressão (08h e 20h)" value={dados.remedio} onChange={(e) => mudar('remedio', e.target.value)} />

      {/* Mora */}
      <label className="flex flex-col gap-2">
        Mora
        <select value={dados.mora} onChange={(e) => mudar('mora', e.target.value)} className="bg-white border border-borda rounded-lg p-3">
          <option>Sozinha</option>
          <option>Sozinho</option>
          <option>Com a família</option>
          <option>Com cuidador</option>
        </select>
      </label>

      {/* Endereço */}
      <Campo rotulo="Endereço" placeholder="Rua da Alegria" value={dados.endereco} onChange={(e) => mudar('endereco', e.target.value)} />

      {/* Complemento */}
      <Campo rotulo="Complemento" placeholder="123, bl 01 apt 02" value={dados.complemento} onChange={(e) => mudar('complemento', e.target.value)} />

      <button onClick={salvarEVoltar} className="bg-verde text-white font-bold rounded-lg p-3 mt-2">Salvar</button>

    </section>
  )
}

export default EditarFicha