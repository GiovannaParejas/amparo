import { Link } from 'react-router'

// Import da lógica do login e da máscara do celular
import useLogin from '../../hooks/useLogin'
import formatarCelular from '../../utils/formatarCelular'

// Import de Imagens
import logo from '../../assets/logo.svg'

const Entrar = () => {
  const { celular, setCelular, enviarCodigo } = useLogin()

  return (
    <section className="flex flex-col h-full gap-6">

      {/* Logo */}
      <div className="flex flex-col items-center mt-6 mb-8">
        <img src={logo} alt="" className="w-16"/>
        <h1 className="text-2xl font-bold">Amparo</h1>
      </div>

      {/* Título */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Que bom ter você aqui!</h2>
        <p className="text-sm text-cinza">Entre com o número do seu celular. Não precisa de senha.</p>
      </div>

      {/* Número do celular */}
      <div className="flex flex-col gap-2">
        <label htmlFor="celular" className="font-bold">Número do celular</label>
        <input id="celular" type="tel" maxLength={15} placeholder="(11) 90000-0000" value={celular} onChange={(e) => setCelular(formatarCelular(e.target.value))} className="bg-white border border-borda rounded-lg p-3" />
        <button onClick={enviarCodigo} className="bg-verde text-white font-bold rounded-lg p-3">Receber código</button>
      </div>

      {/* Links */}
      <div className="flex flex-col items-center gap-4 font-bold text-verde underline">
        <Link to="/CriarConta">Criar minha conta</Link>
      </div>

      {/* Emergência */}
      <div className="mt-auto flex justify-between items-center bg-vermelho-claro rounded-lg p-4">
        <div className="font-bold">
          <p>Emergência?</p>
          <p>Ligue sem entrar</p>
        </div>
        <a href="tel:192" className="bg-vermelho text-white text-xl font-bold rounded-md px-5 py-1">192</a>
      </div>

    </section>
  )
}

export default Entrar