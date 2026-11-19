// Acesso às preferências do "Do seu jeito", salvas no navegador
const padrao = {
  tamanho: 'Grande',
  somAlto: true,
  vibracao: true,
  lerAlertas: false,
  contraste: false,
}

export const lerConfig = () => {
  const salvo = localStorage.getItem('config')

  // Junta o padrão com o que foi salvo: se faltar alguma opção, ela vem do padrão
  return { ...padrao, ...JSON.parse(salvo) }
}

export const salvarConfig = (config) => {
  localStorage.setItem('config', JSON.stringify(config))
}
