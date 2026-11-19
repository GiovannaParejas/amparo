import { Link } from 'react-router'

// Import da lógica do login
import useLogin from '../../../../hooks/useLogin'

const MenuVoluntario = () => {
  const { sair } = useLogin()

  return (
    <section className="flex flex-col gap-4">

      <Link to="/PainelVoluntario" className="self-start flex items-center gap-1 bg-white border border-borda rounded-lg px-3 py-2 font-bold">
        <img src="/icones/fechar.svg" alt="" className="w-4 h-4" />
        Fechar
      </Link>

      {/* Opções */}
      <nav className="flex flex-col lg:grid lg:grid-cols-2 gap-2 mt-4">
        <Link to="/PainelVoluntario/Atendimentos" className="bg-white border border-borda rounded-lg p-4 font-bold">Meus atendimentos</Link>
        <Link to="/PainelVoluntario/OndeQuando" className="bg-white border border-borda rounded-lg p-4 font-bold">Onde e quando ajudo</Link>
        <Link to="/PainelVoluntario/ComoAjudar" className="bg-white border border-borda rounded-lg p-4 font-bold">Como ajudar</Link>
        <Link to="/PainelVoluntario/Abrigos" className="bg-white border border-borda rounded-lg p-4 font-bold">Abrigos da região</Link>
        <Link to="/PainelVoluntario/MeuCadastro" className="bg-white border border-borda rounded-lg p-4 font-bold">Meu cadastro</Link>
        <Link to="/ConfigVoluntario" className="bg-white border border-borda rounded-lg p-4 font-bold">Acessibilidade</Link>
        <button onClick={sair} className="bg-white border border-borda rounded-lg p-4 font-bold text-left">Sair</button>
      </nav>

    </section>
  )
}

export default MenuVoluntario