// Narrador: lê um texto em voz alta
// Usa a Web Speech API, que já vem no navegador (não precisa instalar nada)
const narrar = (texto) => {
  // Para a fala anterior, se tiver uma tocando
  speechSynthesis.cancel()

  const fala = new SpeechSynthesisUtterance(texto)
  fala.lang = 'pt-BR'

  // Espera um pouco antes de falar: no Chrome, falar logo depois do cancel às vezes não sai som
  setTimeout(() => speechSynthesis.speak(fala), 100)
}

export default narrar