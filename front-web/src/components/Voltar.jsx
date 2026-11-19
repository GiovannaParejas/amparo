import { Link } from 'react-router'

// Botão "Voltar" usado no topo de quase todas as telas
const Voltar = ({ para }) => {
  return (
    <Link to={para} className="self-start bg-white border border-borda rounded-lg px-3 py-2 font-bold">Voltar</Link>
  )
}

export default Voltar
