// Deixa no CEP só números (no máximo 8) e coloca no formato 00000-000
const formatarCep = (valor) => {
  const numeros = valor.replace(/\D/g, '').slice(0, 8)

  if (numeros.length > 5) {
    return `${numeros.slice(0, 5)}-${numeros.slice(5)}`
  }

  return numeros
}

export default formatarCep
