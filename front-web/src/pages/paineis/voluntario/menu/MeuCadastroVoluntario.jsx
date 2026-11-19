import { Link } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'

// Import da lógica do cadastro e da máscara do celular
import useCadastro from '../../../../hooks/useCadastro'
import mascararCelular from '../../../../utils/mascararCelular'

const MeuCadastroVoluntario = () => {
  const { dados } = useCadastro('voluntario')

  return (
    <section className="flex flex-col h-full gap-4">

      <Voltar para="/PainelVoluntario/Menu" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Meu cadastro</h2>

      {/* Quem é */}
      <div className="flex items-center gap-3">
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-amarelo text-lg font-bold">{dados.nome[0]}</span>
        <div>
          <b className="text-lg">{dados.nome}</b>
          <p className="text-sm text-cinza">Voluntário</p>
        </div>
      </div>

      {/* Dados */}
      <div className="flex flex-col gap-2 text-sm">
        <p className="flex justify-between bg-white border border-borda rounded-lg p-3"><span>Celular</span><b>{mascararCelular(dados.celular)}</b></p>
        <p className="flex justify-between bg-white border border-borda rounded-lg p-3"><span>Bairro</span><b>{dados.bairro}</b></p>
        <p className="flex justify-between bg-white border border-borda rounded-lg p-3"><span>Voluntário desde</span><b>{dados.desde}</b></p>
      </div>

      {/* Botão no fim da tela */}
      <Link to="/PainelVoluntario/MeuCadastro/Editar" className="mt-auto bg-verde text-white font-bold text-center rounded-lg p-3">Editar meus dados</Link>

    </section>
  )
}

export default MeuCadastroVoluntario