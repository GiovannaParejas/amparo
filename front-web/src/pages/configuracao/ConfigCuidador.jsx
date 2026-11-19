import { Link } from 'react-router'

// Import de componentes
import Voltar from '../../components/Voltar'
import Config from '../../components/Config'

const ConfigCuidador = () => {
  return (
    <section className="flex flex-col gap-4">
        <Voltar para="/PainelCuidador" />
        <Config/>
        <Link to="/PainelCuidador" className="bg-verde text-white font-bold text-center rounded-lg p-3">Pronto</Link>
    </section>
  )
}

export default ConfigCuidador