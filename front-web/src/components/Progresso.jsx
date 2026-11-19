// Barra de progresso do cadastro
// "largura" é a classe do Tailwind que diz quanto da barra está cheio (ex.: "w-1/3")
const Progresso = ({ passo, largura }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm text-cinza">{passo}</p>
      <div className="h-1 bg-verde-claro rounded-full">
        <div className={`h-1 ${largura} bg-verde rounded-full`}></div>
      </div>
    </div>
  )
}

export default Progresso
