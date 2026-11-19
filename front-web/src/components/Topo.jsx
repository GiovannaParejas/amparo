import { Link } from 'react-router'

// Import de Imagens
import logo from '../assets/logo.svg'

// Topo dos painéis: logo abre o menu, Demo simula uma situação, Aa abre a config
// No laptop vira uma barra de site, de ponta a ponta, com os links principais ("links" é opcional)
const Topo = ({ menu, demo, textoDemo, config, links = [] }) => {
  return (
    <>
      {/* No laptop: a barra branca vai de ponta a ponta, e os itens ficam um pouco mais largos que o conteúdo */}
      <div className="pb-3 border-b border-borda lg:fixed lg:inset-x-0 lg:top-0 lg:z-10 lg:bg-white lg:py-3">
        <div className="flex items-center gap-2 lg:gap-6 lg:max-w-[76rem] lg:mx-auto lg:px-12">
          <Link to={menu} aria-label="Abrir menu" className="flex items-center gap-2 flex-1 lg:flex-none font-bold">
            <img src={logo} alt="" className="w-8" />
            Amparo
          </Link>

          {/* Links do site: só aparecem no laptop */}
          <nav className="hidden lg:flex flex-1 gap-6 font-bold">
            {links.map((link) => (
              <Link key={link.para} to={link.para} className="hover:text-verde">{link.texto}</Link>
            ))}
          </nav>

          <Link to={demo} className="border border-dashed border-cinza rounded-md px-2 py-2 text-xs text-cinza">{textoDemo}</Link>
          <Link to={config} aria-label="Ajustar letra e som" className="w-10 h-10 flex items-center justify-center bg-white border border-borda rounded-md font-bold text-lg">Aa</Link>
        </div>
      </div>

      {/* Espaço da barra fixa no laptop, para ela não cobrir o conteúdo */}
      <div className="hidden lg:block h-10"></div>
    </>
  )
}

export default Topo
