// Lista com bolinhas numeradas (dicas, passos, caminhos...)
const ListaNumerada = ({ itens }) => {
  return (
    <div className="flex flex-col gap-2">
      {itens.map((item, i) => (
        <div key={item} className="flex items-center gap-3 bg-white border border-borda rounded-lg p-3">
          <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-verde-claro text-verde font-bold">{i + 1}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default ListaNumerada
