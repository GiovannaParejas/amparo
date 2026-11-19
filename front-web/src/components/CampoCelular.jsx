// Import de componentes
import Campo from './Campo'

// Import da máscara do celular
import formatarCelular from '../utils/formatarCelular'

// Campo de celular: só aceita números e já formata enquanto a pessoa digita
// "mudar" é a função da tela que guarda o valor
const CampoCelular = ({ rotulo = 'Celular', valor, mudar }) => {
  return (
    <Campo
      rotulo={rotulo}
      type="tel"
      maxLength={15}
      placeholder="(11) 90000-0000"
      value={valor}
      onChange={(e) => mudar(formatarCelular(e.target.value))}
    />
  )
}

export default CampoCelular
