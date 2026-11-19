// Import de componentes
import Campo from './Campo'
import CampoCelular from './CampoCelular'

// Import da máscara do CEP
import formatarCep from '../utils/formatarCep'

// Import da lógica do CEP (API ViaCEP)
import useCep from '../hooks/useCep'

// Campos que o cuidador e o voluntário preenchem: nome, sexo, celular e CEP
// Usado no cadastro e na edição dos dois perfis
const CamposCadastro = ({ dados, mudar }) => {
  // Quando o ViaCEP responde, guarda o bairro
  const { buscando, buscarCep } = useCep((endereco) => mudar('bairro', endereco.bairro))

  return (
    <>
      {/* Nome */}
      <Campo rotulo="Como podemos te chamar?" placeholder="Ex.: Juliana" value={dados.nome} onChange={(e) => mudar('nome', e.target.value)} />

      {/* Sexo */}
      <label className="flex flex-col gap-2">
        Sexo
        <select value={dados.sexo} onChange={(e) => mudar('sexo', e.target.value)} className="bg-white border border-borda rounded-lg p-3">
          <option>Feminino</option>
          <option>Masculino</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>

      {/* Celular */}
      <CampoCelular valor={dados.celular} mudar={(valor) => mudar('celular', valor)} />

      {/* CEP: guarda o que foi digitado e busca o bairro */}
      <Campo rotulo="CEP de onde você mora" inputMode="numeric" maxLength={9} placeholder="00000-000" value={dados.cep} onChange={(e) => { mudar('cep', formatarCep(e.target.value)); buscarCep(formatarCep(e.target.value)) }} />
      <small className="text-cinza -mt-2">{buscando ? 'Buscando bairro...' : `Bairro: ${dados.bairro}`}</small>
      <small className="text-cinza">Usamos somente para achar abrigos e mandar alertas</small>
    </>
  )
}

export default CamposCadastro
