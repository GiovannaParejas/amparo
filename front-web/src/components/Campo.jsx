// Campo de formulário: o texto em cima e a caixa de digitar embaixo
// O "...resto" repassa para o input tudo o que vier a mais (placeholder, type, value, onChange...)
const Campo = ({ rotulo, ...resto }) => {
  return (
    <label className="flex flex-col gap-2">
      {rotulo}
      <input {...resto} className="bg-white border border-borda rounded-lg p-3" />
    </label>
  )
}

export default Campo
