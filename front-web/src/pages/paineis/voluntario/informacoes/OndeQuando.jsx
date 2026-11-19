import { useNavigate } from 'react-router'

// Import de componentes
import Voltar from '../../../../components/Voltar'
import Interruptor from '../../../../components/Interruptor'

// Import da lógica do cadastro
import useCadastro from '../../../../hooks/useCadastro'

const OndeQuando = () => {
  const navigate = useNavigate()
  const { dados, mudar, alternar, salvar } = useCadastro('voluntario')

  // Salva e volta para o painel
  const salvarEVoltar = () => {
    if (salvar()) {
      navigate('/PainelVoluntario')
    }
  }

  return (
    <section className="flex flex-col gap-4">

      <Voltar para="/PainelVoluntario" />

      {/* Titulo */}
      <h2 className="text-2xl font-bold mt-2">Onde e quando ajudo</h2>

      {/* Distância (escolhe só uma, e fica salva no cadastro) */}
      <h3 className="text-lg font-bold">Até onde eu vou</h3>
      <div className="grid grid-cols-3 gap-2">
        <label>
          <input type="radio" name="distancia" checked={dados.distancia === '500 m'} onChange={() => mudar('distancia', '500 m')} className="peer sr-only" />
          <span className="block text-center bg-white border border-borda rounded-lg p-3 font-bold peer-checked:bg-verde peer-checked:text-white">500 m</span>
        </label>
        <label>
          <input type="radio" name="distancia" checked={dados.distancia === '1 km'} onChange={() => mudar('distancia', '1 km')} className="peer sr-only" />
          <span className="block text-center bg-white border border-borda rounded-lg p-3 font-bold peer-checked:bg-verde peer-checked:text-white">1 km</span>
        </label>
        <label>
          <input type="radio" name="distancia" checked={dados.distancia === '2 km'} onChange={() => mudar('distancia', '2 km')} className="peer sr-only" />
          <span className="block text-center bg-white border border-borda rounded-lg p-3 font-bold peer-checked:bg-verde peer-checked:text-white">2 km</span>
        </label>
      </div>

      {/* Horários (pode escolher vários, e ficam salvos no cadastro) */}
      <h3 className="text-lg font-bold">Quando eu posso</h3>
      <div className="grid grid-cols-2 gap-2">
        <label>
          <input type="checkbox" checked={dados.horarios.includes('Manhã')} onChange={() => alternar('horarios', 'Manhã')} className="peer sr-only" />
          <span className="block text-center bg-white border border-borda rounded-lg p-3 font-bold peer-checked:bg-verde peer-checked:text-white">Manhã</span>
        </label>
        <label>
          <input type="checkbox" checked={dados.horarios.includes('Tarde')} onChange={() => alternar('horarios', 'Tarde')} className="peer sr-only" />
          <span className="block text-center bg-white border border-borda rounded-lg p-3 font-bold peer-checked:bg-verde peer-checked:text-white">Tarde</span>
        </label>
        <label>
          <input type="checkbox" checked={dados.horarios.includes('Noite')} onChange={() => alternar('horarios', 'Noite')} className="peer sr-only" />
          <span className="block text-center bg-white border border-borda rounded-lg p-3 font-bold peer-checked:bg-verde peer-checked:text-white">Noite</span>
        </label>
        <label>
          <input type="checkbox" checked={dados.horarios.includes('Fim de semana')} onChange={() => alternar('horarios', 'Fim de semana')} className="peer sr-only" />
          <span className="block text-center bg-white border border-borda rounded-lg p-3 font-bold peer-checked:bg-verde peer-checked:text-white">Fim de semana</span>
        </label>
      </div>

      {/* Tipos de ajuda */}
      <h3 className="text-lg font-bold">Como posso ajudar</h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
          <b className="flex-1">Dar carona</b>
          <Interruptor nome="Dar carona" ligado={dados.carona} aoMudar={(valor) => mudar('carona', valor)} />
        </div>
        <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
          <b className="flex-1">Levar água ou remédio</b>
          <Interruptor nome="Levar água ou remédio" ligado={dados.agua} aoMudar={(valor) => mudar('agua', valor)} />
        </div>
        <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
          <b className="flex-1">Ver como a pessoa está</b>
          <Interruptor nome="Ver como a pessoa está" ligado={dados.visita} aoMudar={(valor) => mudar('visita', valor)} />
        </div>
      </div>

      <button onClick={salvarEVoltar} className="bg-verde text-white font-bold rounded-lg p-3">Salvar</button>

    </section>
  )
}

export default OndeQuando