import { useState } from 'react'

// Import de componentes
import Voltar from '../../components/Voltar'

// Import da lógica do login
import useLogin from '../../hooks/useLogin'

const Codigo = () => {
  const [codigo, setCodigo] = useState('')
  const { celular, enviarCodigo, confirmarCodigo, ouvirCodigo } = useLogin()

  return (
    <section className="flex flex-col h-full gap-4">

      <Voltar para="/" />

      {/* Titulo */}
      <div className="mt-28">
        <h2 className="text-2xl font-bold">Digite o Código</h2>
        <p className="text-sm text-cinza mt-1">Mandamos 4 números por mensagem para o celular terminado em {celular.slice(-4)}</p>
      </div>

      {/* Código */}
      <input
        inputMode="numeric"
        maxLength={4}
        placeholder="0000"
        aria-label="Código de 4 números"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value.replace(/\D/g, ''))}
        className="bg-white border border-borda rounded-lg p-4 text-center text-2xl tracking-[0.5em]"
      />

      <button onClick={() => confirmarCodigo(codigo)} className="bg-verde text-white font-bold rounded-lg p-3">Entrar</button>

      {/* Mandar novamente / Ouvir */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={enviarCodigo} className="bg-white border border-cinza rounded-lg p-3 text-sm font-bold">Mandar novamente</button>
        <button onClick={ouvirCodigo} className="bg-white border border-cinza rounded-lg p-3 text-sm font-bold">Ouvir o código</button>
      </div>

      {/* Emergência */}
      <div className="mt-auto flex justify-between items-center bg-vermelho-claro rounded-lg p-4">
        <div className="font-bold">
          <p>Emergência?</p>
          <p>Ligue sem entrar</p>
        </div>
        <a href="tel:192" className="bg-vermelho text-white text-xl font-bold rounded-md px-5 py-1 text-center">192</a>
      </div>

    </section>
  )
}

export default Codigo