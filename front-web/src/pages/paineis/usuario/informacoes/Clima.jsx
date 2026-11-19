// Import de componentes
import Voltar from '../../../../components/Voltar'

// Import da lógica do clima (APIs Nominatim e Open-Meteo)
import useClima from '../../../../hooks/useClima'

const Clima = () => {
  // Rua da Vila Nova Conceição, o bairro real mais parecido com a "Vila Nova" do Figma
  const { clima, erro } = useClima('Rua Afonso Braz, São Paulo')

  // Enquanto a resposta não chega, ou se a API falhar
  if (!clima) {
    return (
      <section className="flex flex-col gap-4">
        <Voltar para="/PainelUsuario" />
        <p className="text-center lg:text-left text-cinza mt-10">{erro ? 'Não foi possível buscar o clima agora. Tente mais tarde.' : 'Carregando o clima...'}</p>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelUsuario" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Clima de hoje</h2>

      {/* Manhã, tarde e noite: um embaixo do outro no celular, lado a lado no laptop */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
        <div className="flex justify-between items-center bg-verde-claro rounded-md p-3 font-bold">
          <p>Manhã</p>
          <p className="text-lg">{clima.manha}°C</p>
        </div>

        {/* A tarde fica amarela e com "Atenção" quando passa de 30°C */}
        <div className={`flex justify-between items-center rounded-md p-3 font-bold ${clima.quente ? 'bg-amarelo-claro border border-amarelo' : 'bg-verde-claro'}`}>
          <p className="flex items-center gap-2">
            Tarde
            {clima.quente && <span className="bg-amarelo rounded-md px-2 py-1 text-xs">Atenção</span>}
          </p>
          <div className="text-right">
            <p className="text-lg">{clima.tarde}°C</p>
            <small className="font-normal text-cinza">Sensação de {clima.sensacao}°C</small>
          </div>
        </div>

        <div className="flex justify-between items-center bg-verde-claro rounded-md p-3 font-bold">
          <p>Noite</p>
          <div className="text-right">
            <p className="text-lg">{clima.noite}°C</p>
            <small className="font-normal text-cinza">Chance de chuva: {clima.chuvaNoite}%</small>
          </div>
        </div>
      </div>

      {/* O que fazer hoje: as dicas mudam conforme o clima */}
      <h3 className="text-lg font-bold">O que fazer hoje</h3>
      <div className="flex flex-col gap-3 bg-white rounded-lg p-4">
        {clima.dicas.map((dica) => (
          <p key={dica.texto} className="flex items-center gap-3">
            <img src={dica.icone} alt="" className="w-5 h-5" />
            {dica.texto}
          </p>
        ))}
      </div>

      {/* Próximos dias */}
      <h3 className="text-lg font-bold">Próximos dias</h3>
      <div className="grid grid-cols-3 gap-2">
        {clima.proximosDias.map((dia) => (
          <div key={dia.dia} className="flex flex-col items-center bg-white border border-borda rounded-lg py-3">
            <b className="text-sm">{dia.dia}</b>
            <b className="text-xl">{dia.maxima}°C</b>
            <small className="text-cinza">{dia.chuva ? 'Chuva' : 'Sem chuva'}</small>
          </div>
        ))}
      </div>

      <p className="text-xs text-cinza text-center lg:text-left">Previsão: Open-Meteo | Alertas oficiais: Defesa Civil</p>

    </section>
  )
}

export default Clima