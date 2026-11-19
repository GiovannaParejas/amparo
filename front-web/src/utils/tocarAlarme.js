// Toca um bipe de alarme pelo próprio navegador (Web Audio API, não precisa de arquivo de som)
const tocarAlarme = () => {
  const audio = new AudioContext()
  const som = audio.createOscillator()

  som.frequency.value = 880
  som.connect(audio.destination)
  som.start()
  som.stop(audio.currentTime + 0.6)
}

export default tocarAlarme
