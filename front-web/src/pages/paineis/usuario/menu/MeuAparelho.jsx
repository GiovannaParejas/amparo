import { useState } from 'react'

// Import do narrador e do alarme
import narrar from '../../../../utils/narrar'
import tocarAlarme from '../../../../utils/tocarAlarme'

// Import de componentes
import Voltar from '../../../../components/Voltar'

const MeuAparelho = () => {
  const [testando, setTestando] = useState(false)

  // Teste de luz e som: a tela pisca em amarelo, toca o alarme e fala uma mensagem
  const testarLuzESom = () => {
    setTestando(true)
    tocarAlarme()
    narrar('Teste de som do Amparo. Se você ouviu esta mensagem, o som está funcionando.')
    setTimeout(() => setTestando(false), 2000)
  }

  return (
    <section className={`flex flex-col h-full gap-4 rounded-lg transition-colors ${testando ? 'bg-amarelo' : ''}`}>

      <Voltar para="/PainelUsuario/Menu" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Meu aparelho</h2>

      {/* Situação */}
      <div className="bg-verde-claro rounded-lg p-4">
        <small className="text-cinza">Informações</small>
        <p className="text-lg font-bold">Ligado e funcionando</p>
        <p className="text-xs text-cinza">Última conexão há 1 minuto</p>
      </div>

      {/* Medidas */}
      <div className="flex flex-col gap-2 text-sm">
        <p className="flex justify-between bg-white border border-borda rounded-lg p-3"><span>Temperatura em casa</span><b>27°C</b></p>
        <p className="flex justify-between bg-white border border-borda rounded-lg p-3"><span>Umidade do ar</span><b>46%</b></p>
        <p className="flex justify-between bg-white border border-borda rounded-lg p-3"><span>Internet</span><b>Conectado</b></p>
      </div>

      {/* Testes no fim da tela */}
      <button onClick={() => alert('Botão vermelho funcionando! Ninguém foi avisado, porque era só um teste.')} className="mt-auto bg-white border border-verde font-bold rounded-lg p-3">Testar botão vermelho</button>
      <button onClick={testarLuzESom} className="bg-verde text-white font-bold rounded-lg p-3">{testando ? 'Testando...' : 'Testar luz e som'}</button>

    </section>
  )
}

export default MeuAparelho