import { useNavigate } from 'react-router'

// Import da lógica de segurar o botão
import useSegurar from '../hooks/useSegurar'

// Botão vermelho de pedir ajuda: só funciona segurando por 2 segundos
const BotaoAjuda = () => {
  const navigate = useNavigate()
  const { segurando, comecar, parar } = useSegurar(() => navigate('/PainelUsuario/AjudaSolicitada'))

  return (
    <button
      onPointerDown={comecar}
      onPointerUp={parar}
      onPointerLeave={parar}
      onContextMenu={(e) => e.preventDefault()}
      className={`flex items-center justify-center gap-2 bg-vermelho text-white font-bold text-xl rounded-full p-4 select-none transition ${segurando ? 'scale-95 ring-4 ring-vermelho-claro' : ''}`}
    >
      <img src="/icones/sirene-branco.svg" alt="" className="w-7 h-7" />
      {segurando ? 'Segure...' : 'Pedir ajuda'}
    </button>
  )
}

export default BotaoAjuda
