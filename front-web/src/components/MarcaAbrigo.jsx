// Número do abrigo no formato da legenda do Figma
// 1 = círculo verde (lugar fresco), 2 = losango amarelo (ponto de água), 3 = quadrado escuro (abrigo de chuva)
const MarcaAbrigo = ({ numero }) => {
  if (numero === 2) {
    return (
      <span className="w-7 h-7 shrink-0 flex items-center justify-center rotate-45 bg-amarelo font-bold">
        <span className="-rotate-45">2</span>
      </span>
    )
  }

  if (numero === 3) {
    return <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded bg-texto text-white font-bold">3</span>
  }

  return <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-verde text-white font-bold">{numero}</span>
}

export default MarcaAbrigo
