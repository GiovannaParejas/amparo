import { Navigate, Outlet } from 'react-router'

// Import do acesso aos dados
import { lerAtorLogado } from '../services/atores'

// Protege as telas de um perfil
// Sem login, volta para "Entrar". Logado com outro perfil, vai para o painel certo.
// O <Outlet /> mostra a tela que está dentro desta rota no App.jsx
const RotaProtegida = ({ perfil }) => {
  const ator = lerAtorLogado()

  if (!ator) {
    return <Navigate to="/" />
  }

  if (ator.perfil !== perfil) {
    return <Navigate to={ator.painel} />
  }

  return <Outlet />
}

export default RotaProtegida
