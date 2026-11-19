// Import de componentes
import Interruptor from './Interruptor'

// Import da lógica das preferências
import useConfig from '../hooks/useConfig'

const Config = () => {
  const { config, mudar } = useConfig()

  return (
    <>
        {/* Titulo */}
        <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">Do seu jeito</h2>
            <p className="text-sm text-cinza">Ajuste como o Amparo fala com você</p>
        </div>

        {/* Tamanho do texto: muda a letra do app todo */}
        <h3 className="text-lg font-bold">Tamanho do texto</h3>
        <div className="grid grid-cols-3 gap-2">
            <button onClick={() => mudar('tamanho', 'Normal')} className={`h-24 border border-borda rounded-lg font-bold ${config.tamanho === 'Normal' ? 'bg-verde text-white' : 'bg-white'}`}>
                <span className="block text-base">Aa</span>
                <span className="block text-sm">Normal</span>
            </button>
            <button onClick={() => mudar('tamanho', 'Grande')} className={`h-24 border border-borda rounded-lg font-bold ${config.tamanho === 'Grande' ? 'bg-verde text-white' : 'bg-white'}`}>
                <span className="block text-xl">Aa</span>
                <span className="block text-sm">Grande</span>
            </button>
            <button onClick={() => mudar('tamanho', 'Muito Grande')} className={`h-24 border border-borda rounded-lg font-bold ${config.tamanho === 'Muito Grande' ? 'bg-verde text-white' : 'bg-white'}`}>
                <span className="block text-2xl">Aa</span>
                <span className="block text-sm">Muito Grande</span>
            </button>
        </div>

        {/* Como receber alertas: cada interruptor salva a escolha */}
        <h3 className="text-lg font-bold">Como receber alertas</h3>
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
                <div className="flex-1">
                    <b>Som alto</b>
                    <p className="text-xs text-cinza">Toca mesmo no silencioso</p>
                </div>
                <Interruptor nome="Som alto" ligado={config.somAlto} aoMudar={(valor) => mudar('somAlto', valor)} />
            </div>

            <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
                <div className="flex-1">
                    <b>Vibração</b>
                    <p className="text-xs text-cinza">Para quem não ouve bem</p>
                </div>
                <Interruptor nome="Vibração" ligado={config.vibracao} aoMudar={(valor) => mudar('vibracao', valor)} />
            </div>

            <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
                <div className="flex-1">
                    <b>Ler alertas em voz alta</b>
                    <p className="text-xs text-cinza">O celular fala o aviso</p>
                </div>
                <Interruptor nome="Ler alertas em voz alta" ligado={config.lerAlertas} aoMudar={(valor) => mudar('lerAlertas', valor)} />
            </div>

            <div className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
                <div className="flex-1">
                    <b>Alto Contraste</b>
                    <p className="text-xs text-cinza">Letras e bordas mais escuras</p>
                </div>
                <Interruptor nome="Alto Contraste" ligado={config.contraste} aoMudar={(valor) => mudar('contraste', valor)} />
            </div>
        </div>
    </>
  )
}

export default Config