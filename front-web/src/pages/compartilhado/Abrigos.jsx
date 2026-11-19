import { useState } from 'react'
import { Link } from 'react-router'

// Import do Leaflet (mapa de verdade)
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Import de componentes
import Voltar from '../../components/Voltar'
import MarcaAbrigo from '../../components/MarcaAbrigo'

// Import do acesso aos dados
import { listarAbrigos } from '../../services/abrigos'

// Abrigos perto de você
// Usada pelo usuário e pelo voluntário, o que muda vem por props
const Abrigos = ({ voltar, comoChegar }) => {
  // Onde fica cada ponto no mapa: [latitude, longitude]
  const { voce, lugares } = listarAbrigos()

  // Qual cartão está aberto (começa no 1, igual ao Figma)
  const [aberto, setAberto] = useState(1)

  return (
    <section className="flex flex-col gap-4">

      <Voltar para={voltar} />

      {/* Titulo */}
      <h2 className="text-2xl font-bold text-center lg:text-left mt-2">Abrigos perto de você</h2>

      {/* Mapa: o TileLayer desenha as ruas e cada CircleMarker é um ponto */}
      <MapContainer center={voce} zoom={16} className="h-48 lg:h-80 z-0 rounded-lg border border-borda">
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />

        <CircleMarker center={voce} radius={8} pathOptions={{ color: 'white', fillColor: '#2350D8', fillOpacity: 1 }}>
          <Popup>Você</Popup>
        </CircleMarker>

        {lugares.map((lugar) => (
          <CircleMarker key={lugar.nome} center={lugar.posicao} radius={10} pathOptions={{ color: 'white', fillColor: lugar.cor, fillOpacity: 1 }}>
            <Popup>{lugar.numero}. {lugar.nome}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Legenda */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-azul"></span>Você</p>
        <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-verde"></span>Lugar fresco</p>
        <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amarelo"></span>Ponto de água</p>
        <p className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-texto"></span>Abrigo de chuva</p>
      </div>

      {/* Lista: o cartão aberto mostra os detalhes e os botões; clicar em outro abre ele */}
      {lugares.map((lugar) => lugar.numero === aberto ? (
        <div key={lugar.numero} className="flex flex-col gap-3 bg-white rounded-lg p-4">
          <div className="flex items-center gap-3">
            <MarcaAbrigo numero={lugar.numero} />
            <div>
              <b>{lugar.nome}</b>
              <p className="text-xs text-cinza">{lugar.descricao}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {lugar.tags.map((tag) => (
              <span key={tag} className="bg-verde-claro rounded-md px-2 py-1 text-xs font-bold">{tag}</span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link to={comoChegar} className="bg-verde text-white font-bold text-center rounded-lg p-2">Como chegar</Link>
            <button onClick={() => alert('Pedido de carona enviado aos voluntários perto de você.')} className="bg-white border border-verde font-bold rounded-lg p-2">Pedir carona</button>
          </div>
        </div>
      ) : (
        <button key={lugar.numero} onClick={() => setAberto(lugar.numero)} className="flex items-center gap-3 bg-white rounded-lg p-4 text-left">
          <MarcaAbrigo numero={lugar.numero} />
          <div>
            <b>{lugar.nome}</b>
            <p className="text-xs text-cinza">{lugar.descricao}</p>
          </div>
        </button>
      ))}

    </section>
  )
}

export default Abrigos