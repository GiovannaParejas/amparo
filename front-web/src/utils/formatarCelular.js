// Deixa no celular só números (no máximo 11) e coloca no formato (11) 91111-1111
const formatarCelular = (valor) => {
  const numeros = valor.replace(/\D/g, '').slice(0, 11)

  if (numeros.length > 7) {
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`
  }

  if (numeros.length > 2) {
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
  }

  return numeros
}

export default formatarCelular
