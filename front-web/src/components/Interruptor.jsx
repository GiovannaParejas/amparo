import { useState } from 'react'

// Botão de ligar/desligar
// "aoMudar" é opcional: se a tela passar uma função, ela fica sabendo quando muda (para salvar)
const Interruptor = ({ nome, ligado = false, aoMudar }) => {
  const [ativo, setAtivo] = useState(ligado)

  const trocar = () => {
    setAtivo(!ativo)

    if (aoMudar) {
      aoMudar(!ativo)
    }
  }

  return (
    <div className="flex items-center gap-2">
        <button
            type="button"
            role="switch"
            aria-checked={ativo}
            aria-label={nome}
            onClick={trocar}
            className={`relative w-12 h-7 rounded-full transition ${ativo ? 'bg-verde' : 'bg-gray-300'}`}
        >
            <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition ${ativo ? 'translate-x-5' : ''}`}></span>
        </button>
        <p className="w-7 text-sm font-bold">{ativo ? 'Sim' : 'Não'}</p>
    </div>
  )
}

export default Interruptor