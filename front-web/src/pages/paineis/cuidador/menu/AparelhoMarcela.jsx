// Import de componentes
import Voltar from '../../../../components/Voltar'

const AparelhoMarcela = () => {
  return (
    <section className="flex flex-col h-full gap-4">

      <Voltar para="/PainelCuidador/Menu" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Aparelho de Marcela</h2>

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

      <p className="text-xs text-cinza">Teste o aparelho de vez em quando para garantir que os alertas chegam.</p>

      {/* Botões no fim da tela */}
      <button onClick={() => alert('Alerta de teste enviado para o aparelho da Marcela.')} className="mt-auto bg-white border border-verde font-bold rounded-lg p-3">Mandar alerta de teste</button>
      <a href="tel:11911111111" className="bg-verde text-white font-bold rounded-lg p-3 text-center">Ligar para ela</a>

    </section>
  )
}

export default AparelhoMarcela