import { useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Campo from '../../../../components/Campo'
import CampoCelular from '../../../../components/CampoCelular'
import Progresso from '../../../../components/Progresso'

// Import da máscara do CEP
import formatarCep from '../../../../utils/formatarCep'

// Import da lógica do cadastro e do CEP (API ViaCEP)
import useCadastro from '../../../../hooks/useCadastro'
import useCep from '../../../../hooks/useCep'

const SobreVoce = () => {
  const navigate = useNavigate()
  const { dados, mudar, salvar } = useCadastro('usuario')

  // Quando o ViaCEP responde, preenche o endereço
  const { buscando, buscarCep } = useCep((endereco) => mudar('endereco', `${endereco.logradouro}, ${endereco.bairro}`))

  // Salva e vai para o próximo passo
  const continuar = () => {
    if (salvar()) {
      navigate('/CriarConta/SobreVoce/QuemAvisar')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/CriarConta" />

      {/* Progresso */}
      <Progresso passo="Passo 2 de 3" largura="w-1/3" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold">Sobre você</h2>

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

      {/* Celular */}
      <CampoCelular valor={dados.celular} mudar={(valor) => mudar('celular', valor)} />

      {/* CEP: guarda o que foi digitado e tenta buscar o endereço */}
      <Campo rotulo="CEP de onde você mora" inputMode="numeric" maxLength={9} placeholder="00000-000" value={dados.cep} onChange={(e) => { mudar('cep', formatarCep(e.target.value)); buscarCep(formatarCep(e.target.value)) }} />
      {buscando && <small className="text-cinza -mt-2">Buscando endereço...</small>}

      {/* Endereço: preenchido pelo ViaCEP, mas a pessoa ainda pode mudar */}
      <Campo rotulo="Endereço" placeholder="Rua da Alegria" value={dados.endereco} onChange={(e) => mudar('endereco', e.target.value)} />

      {/* Complemento */}
      <Campo rotulo="Complemento" placeholder="123, bl 01 apt 02" value={dados.complemento} onChange={(e) => mudar('complemento', e.target.value)} />

      <small className="text-cinza">Usamos somente para achar abrigos e mandar alertas</small>

      <button onClick={continuar} className="bg-verde text-white font-bold rounded-lg p-3">Continuar</button>

    </section>
  )
}

export default SobreVoce