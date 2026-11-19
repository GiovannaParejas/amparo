import { Link } from 'react-router'

// Import de componentes
import Voltar from '../../components/Voltar'

const CriarConta = () => {
  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/" />

      <p className="text-sm text-cinza mt-4">Passo 1 de 3</p>
      <hr className="border-t-2 border-verde-claro" />

      <h2 className="text-2xl font-bold">Quem vai usar o Amparo?</h2>

      <div className="flex flex-col gap-3">
        <Link to="/CriarConta/SobreVoce" className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
          <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-verde-claro text-verde font-bold">1</span>
          <div>
            <p><b>Eu</b></p>
            <small className="text-cinza">Quero receber alertas</small>
          </div>
        </Link>

        <Link to="/CriarConta/SobreCuidador" className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
          <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-verde-claro text-verde font-bold">2</span>
          <div>
            <p><b>Cuido de alguém</b></p>
            <small className="text-cinza">Sou da família ou cuidador</small>
          </div>
        </Link>

        <Link to="/CriarConta/SobreVoluntario" className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
          <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-verde-claro text-verde font-bold">3</span>
          <div>
            <p><b>Quero ajudar</b></p>
            <small className="text-cinza">Ser voluntário do meu bairro</small>
          </div>
        </Link>
      </div>

    </section>
  )
}

export default CriarConta