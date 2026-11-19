// Import de Imagens
import logo from '../../assets/logo.svg'

// Import de componentes
import Voltar from '../../components/Voltar'

// Import da lógica do login
import useLogin from '../../hooks/useLogin'

// Recebe por props o que muda em cada perfil
// Os dois botões já entram no app com o perfil que acabou de se cadastrar
const TudoPronto = ({ voltar, mensagem, botao, perfil, ajustes }) => {
  const { entrarComo } = useLogin()

  return (
    <section className="flex flex-col h-full gap-4">

      <Voltar para={voltar} />

      {/* Progresso completo */}
      <div className="h-1 bg-verde rounded-full mt-10"></div>

      <img src={logo} alt="" className="w-14 mt-6" />
      <h2 className="text-2xl font-bold">Tudo pronto!</h2>
      <p className="text-cinza">{mensagem}</p>

      {/* Botões no fim da tela */}
      <button onClick={() => entrarComo(perfil, ajustes)} className="mt-auto bg-white border border-verde font-bold rounded-lg p-3">Ajustar letra e som</button>
      <button onClick={() => entrarComo(perfil)} className="bg-verde text-white font-bold rounded-lg p-3">{botao}</button>

    </section>
  )
}

export default TudoPronto