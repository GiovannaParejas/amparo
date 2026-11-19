import { Link } from 'react-router'

// Import de componentes
import Avatar from './Avatar'

// Um contato da rede de apoio, com os botões de ligar, editar e excluir
const CartaoContato = ({ contato, editar, remover }) => {
  return (
    <div className="flex items-center gap-2 bg-white border border-borda rounded-lg p-2">
      <Avatar nome={contato.nome} voluntario={contato.quem === 'Vizinho'} />
      <div className="flex-1">
        <b>{contato.nome}</b>
        <p className="text-xs text-cinza">{contato.quem}</p>
      </div>

      {/* O "tel:" usa só os números do celular */}
      <a href={`tel:${contato.celular.replace(/\D/g, '')}`} aria-label={`Ligar para ${contato.nome}`} className="w-10 h-10 flex items-center justify-center bg-verde rounded-md">
        <img src="/icones/telefone-branco.svg" alt="" className="w-5 h-5" />
      </a>
      <Link to={editar} aria-label={`Editar ${contato.nome}`} className="w-10 h-10 flex items-center justify-center border border-borda rounded-md">
        <img src="/icones/editar.svg" alt="" className="w-5 h-5" />
      </Link>
      <button onClick={remover} aria-label={`Excluir ${contato.nome}`} className="w-10 h-10 flex items-center justify-center border border-borda rounded-md">
        <img src="/icones/lixeira.svg" alt="" className="w-5 h-5" />
      </button>
    </div>
  )
}

export default CartaoContato
