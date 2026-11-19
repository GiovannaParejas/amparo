import { Link } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'

// Import da lógica do cadastro
import useCadastro from '../../../../hooks/useCadastro'

const MinhaFicha = () => {
  const { dados } = useCadastro('usuario')

  return (
    <section className="flex flex-col gap-4">

      <div className="flex justify-between">
        <Voltar para="/PainelUsuario/Menu" />
        <Link to="/PainelUsuario/MinhaFicha/Editar" className="bg-white border border-borda rounded-lg px-3 py-2 font-bold">Editar</Link>
      </div>

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Minha ficha</h2>

      {/* Sobre ela */}
      <div className="flex flex-col gap-2 bg-white border border-borda rounded-lg p-4 text-sm">
        <b className="text-base">Sobre ela</b>
        <p className="flex justify-between"><span className="text-cinza">Nome</span><b>{dados.nome}</b></p>
        <p className="flex justify-between"><span className="text-cinza">Idade</span><b>{dados.idade}</b></p>
        <p className="flex justify-between"><span className="text-cinza">Endereço</span><b>{dados.endereco}</b></p>
        <p className="flex justify-between"><span className="text-cinza">Complemento</span><b>{dados.complemento}</b></p>
        <p className="flex justify-between"><span className="text-cinza">Mora</span><b>{dados.mora}</b></p>
      </div>

      {/* Ficha de emergência */}
      <h3 className="text-lg font-bold">Ficha de emergência</h3>
      <div className="flex flex-col gap-2 bg-vermelho-claro rounded-lg p-4 text-sm">
        <p><b>Alergia:</b> {dados.alergia}</p>
        <p><b>Doenças:</b> {dados.doenca}</p>
        <p><b>Remédios:</b> {dados.remedio}</p>
        <p><b>Cuidado especial:</b> {dados.cuidado}</p>
      </div>

      <p className="text-xs text-cinza">Essa ficha aparece para o voluntário e para o SAMU quando você pede ajuda.</p>

    </section>
  )
}

export default MinhaFicha