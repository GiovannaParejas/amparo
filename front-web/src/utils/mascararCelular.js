// Esconde o meio do celular para proteger o número: (11) 91111-1111 vira (11) 9****-1111
const mascararCelular = (celular) => {
  return `${celular.slice(0, 6)}****${celular.slice(-5)}`
}

export default mascararCelular
