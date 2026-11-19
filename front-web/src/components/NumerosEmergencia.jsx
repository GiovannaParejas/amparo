// Os três números de emergência, lado a lado
// O "tel:" abre o discador do celular com o número já digitado (a pessoa ainda confirma a ligação)
const NumerosEmergencia = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <a href="tel:192" className="flex flex-col items-center bg-white border-2 border-vermelho rounded-lg py-3">
        <b className="text-2xl text-vermelho">192</b>
        <small className="font-bold">SAMU</small>
      </a>
      <a href="tel:193" className="flex flex-col items-center bg-white border-2 border-vermelho rounded-lg py-3">
        <b className="text-2xl text-vermelho">193</b>
        <small className="font-bold">Bombeiros</small>
      </a>
      <a href="tel:199" className="flex flex-col items-center bg-white border-2 border-vermelho rounded-lg py-3">
        <b className="text-2xl text-vermelho">199</b>
        <small className="font-bold">Defesa Civil</small>
      </a>
    </div>
  )
}

export default NumerosEmergencia