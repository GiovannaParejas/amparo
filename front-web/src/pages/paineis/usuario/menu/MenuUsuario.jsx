import { Link } from 'react-router'

// Import da lógica do login
import useLogin from '../../../../hooks/useLogin'

const MenuUsuario = () => {
  const { sair } = useLogin()

  return (
    <section className="flex flex-col gap-4">

      <Link to="/PainelUsuario" className="self-start flex items-center gap-1 bg-white border border-borda rounded-lg px-3 py-2 font-bold">
        <img src="/icones/fechar.svg" alt="" className="w-4 h-4" />
        Fechar
      </Link>

      {/* Opções */}
      <nav className="flex flex-col lg:grid lg:grid-cols-2 gap-2 mt-4">
        <Link to="/PainelUsuario/MinhaFicha" className="bg-white border border-borda rounded-lg p-4 font-bold">Minha ficha</Link>
        <Link to="/PainelUsuario/MeuAparelho" className="bg-white border border-borda rounded-lg p-4 font-bold">Meu aparelho</Link>
        <Link to="/PainelUsuario/ComoUsar" className="bg-white border border-borda rounded-lg p-4 font-bold">Como usar o Amparo</Link>
        <Link to="/PainelUsuario/Notificacoes" className="bg-white border border-borda rounded-lg p-4 font-bold">Notificações</Link>
        <Link to="/ConfigUsuario" className="bg-white border border-borda rounded-lg p-4 font-bold">Acessibilidade</Link>
        <button onClick={sair} className="bg-white border border-borda rounded-lg p-4 font-bold text-left">Sair</button>
      </nav>

    </section>
  )
}

export default MenuUsuario