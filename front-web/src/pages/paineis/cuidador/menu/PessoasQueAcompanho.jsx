import { Link } from 'react-router'

// Import de componentes
import Avatar from '../../../../components/Avatar'
import Voltar from '../../../../components/Voltar'

// Import da lógica das pessoas acompanhadas
import usePessoas from '../../../../hooks/usePessoas'

const PessoasQueAcompanho = () => {
  const { pessoas } = usePessoas()

  return (
    <section className="flex flex-col h-full gap-4">

      <Voltar para="/PainelCuidador/Menu" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Pessoas que acompanho</h2>

      {/* Lista: a primeira é a selecionada (borda verde) */}
      {pessoas.map((pessoa, i) => (
        <div key={pessoa.nome} className={`flex items-center gap-3 bg-white rounded-lg p-3 ${i === 0 ? 'border-2 border-verde' : 'border border-borda'}`}>
          <Avatar nome={pessoa.nome} />
          <div className="flex-1">
            <b>{pessoa.nome}</b>
            <p className="text-xs text-cinza">{pessoa.relacao}</p>
          </div>
          <span className={`rounded-md px-2 py-1 text-xs font-bold ${pessoa.situacao === 'Está bem' ? 'bg-verde-claro' : 'bg-amarelo-claro'}`}>{pessoa.situacao}</span>
        </div>
      ))}

      {/* Botão no fim da tela */}
      <Link to="/PainelCuidador/Pessoas/Nova" className="mt-auto bg-white border border-verde font-bold text-center rounded-lg p-3">+ Acompanhar outra pessoa</Link>

    </section>
  )
}

export default PessoasQueAcompanho