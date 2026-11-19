// Import de Route
import { Routes, Route } from 'react-router'

// Import de componentes e hooks do App
import RotaProtegida from './components/RotaProtegida.jsx'
import useConfig from './hooks/useConfig.js'

// Import de Pages ===============================
// pasta entrar
import Entrar from './pages/entrar/Entrar.jsx'
import Codigo from './pages/entrar/Codigo.jsx'

// pasta login
import CriarConta from './pages/login/CriarConta.jsx'
import TudoPronto from './pages/login/TudoPronto.jsx'

// pasta login > informacoeslogin > pessoasozinha
import SobreVoce from './pages/login/informacoeslogin/pessoasozinha/SobreVoce.jsx'
import QuemAvisar from './pages/login/informacoeslogin/pessoasozinha/QuemAvisar.jsx'

// pasta login > informacoeslogin > cuidador
import SobreCuidador from './pages/login/informacoeslogin/cuidador/SobreCuidador.jsx'
import QuemAcompanhar from './pages/login/informacoeslogin/cuidador/QuemAcompanhar.jsx'

// pasta login > informacoeslogin > voluntario
import SobreVoluntario from './pages/login/informacoeslogin/voluntario/SobreVoluntario.jsx'
import QualDistancia from './pages/login/informacoeslogin/voluntario/QualDistancia.jsx'

// pasta paineis
import PainelCuidador from './pages/paineis/cuidador/PainelCuidador.jsx'
import PainelUsuario from './pages/paineis/usuario/PainelUsuario.jsx'
import PainelVoluntario from './pages/paineis/voluntario/PainelVoluntario.jsx'

// pasta config
import ConfigCuidador from './pages/configuracao/ConfigCuidador.jsx'
import ConfigUsuario from './pages/configuracao/ConfigUsuario.jsx'
import ConfigVoluntario from './pages/configuracao/ConfigVoluntario.jsx'

// pasta compartilhado
import RedeApoio from './pages/compartilhado/RedeApoio.jsx'
import FormContato from './pages/compartilhado/FormContato.jsx'
import Abrigos from './pages/compartilhado/Abrigos.jsx'
import ComoChegar from './pages/compartilhado/ComoChegar.jsx'
import EditarCadastro from './pages/compartilhado/EditarCadastro.jsx'

// pasta paineis > usuario > informacoes
import Clima from './pages/paineis/usuario/informacoes/Clima.jsx'
import Dicas from './pages/paineis/usuario/informacoes/Dicas.jsx'

// pasta paineis > usuario > ajuda
import Alerta from './pages/paineis/usuario/ajuda/Alerta.jsx'
import AjudaSolicitada from './pages/paineis/usuario/ajuda/AjudaSolicitada.jsx'
import QuemVem from './pages/paineis/usuario/ajuda/QuemVem.jsx'

// pasta paineis > usuario > menu
import MenuUsuario from './pages/paineis/usuario/menu/MenuUsuario.jsx'
import MinhaFicha from './pages/paineis/usuario/menu/MinhaFicha.jsx'
import EditarFicha from './pages/paineis/usuario/menu/EditarFicha.jsx'
import ComoUsar from './pages/paineis/usuario/menu/ComoUsar.jsx'
import MeuAparelho from './pages/paineis/usuario/menu/MeuAparelho.jsx'
import Notificacoes from './pages/paineis/usuario/menu/Notificacoes.jsx'

// pasta paineis > cuidador > ajuda
import SemResposta from './pages/paineis/cuidador/ajuda/SemResposta.jsx'
import EstouIndo from './pages/paineis/cuidador/ajuda/EstouIndo.jsx'
import Acompanhamento from './pages/paineis/cuidador/ajuda/Acompanhamento.jsx'

// pasta paineis > cuidador > menu
import MenuCuidador from './pages/paineis/cuidador/menu/MenuCuidador.jsx'
import AparelhoMarcela from './pages/paineis/cuidador/menu/AparelhoMarcela.jsx'
import PessoasQueAcompanho from './pages/paineis/cuidador/menu/PessoasQueAcompanho.jsx'
import NovaPessoa from './pages/paineis/cuidador/menu/NovaPessoa.jsx'
import MeuCadastroCuidador from './pages/paineis/cuidador/menu/MeuCadastroCuidador.jsx'

// pasta paineis > voluntario > informacoes
import OndeQuando from './pages/paineis/voluntario/informacoes/OndeQuando.jsx'
import ComoAjudar from './pages/paineis/voluntario/informacoes/ComoAjudar.jsx'

// pasta paineis > voluntario > ajuda
import Pedido from './pages/paineis/voluntario/ajuda/Pedido.jsx'
import Caminho from './pages/paineis/voluntario/ajuda/Caminho.jsx'
import NoLocal from './pages/paineis/voluntario/ajuda/NoLocal.jsx'
import Obrigado from './pages/paineis/voluntario/ajuda/Obrigado.jsx'

// pasta paineis > voluntario > menu
import MenuVoluntario from './pages/paineis/voluntario/menu/MenuVoluntario.jsx'
import MeusAtendimentos from './pages/paineis/voluntario/menu/MeusAtendimentos.jsx'
import MeuCadastroVoluntario from './pages/paineis/voluntario/menu/MeuCadastroVoluntario.jsx'



const App = () => {
  // Aplica o tamanho da letra e o contraste salvos assim que o app abre
  useConfig()

  return (
    // Responsivo: o app usa a tela inteira, com o mesmo fundo creme em qualquer tamanho
    // Celular: uma coluna. Laptop e desktop ("lg:", 1024px ou mais): layout de site, com o conteúdo no meio da tela e os textos à esquerda
    <div className="h-dvh overflow-y-auto bg-creme text-texto">

      {/* Conteúdo no meio da tela (o mx-auto centraliza o bloco) */}
      <div className="mx-auto h-full w-full max-w-md lg:max-w-4xl">

        {/* Tela */}
        <div className="h-full px-5 py-6 lg:px-12 lg:py-8">
          <Routes>

            {/* Entrar */}
            <Route path="/" element={<Entrar />} />
            <Route path="/codigo" element={<Codigo />} />

            {/* Login */}
            <Route path="/CriarConta" element={<CriarConta />} />

            {/* Login > InformacoesLogin */}
            <Route path="/CriarConta/SobreVoce" element={<SobreVoce />} />
            <Route path="/CriarConta/SobreVoluntario" element={<SobreVoluntario />} />
            <Route path="/CriarConta/SobreCuidador" element={<SobreCuidador />}/>
            
            {/* Login > InformacoesLogin > pessoasozinha */}
            <Route path="/CriarConta/SobreVoce/QuemAvisar" element={<QuemAvisar />} />

            {/* Login > InformacoesLogin > cuidador */}
            <Route path="/CriarConta/SobreCuidador/QuemAcompanhar" element={<QuemAcompanhar />}/>

            {/* Login > InformacoesLogin > voluntario */}
            <Route path="/CriarConta/SobreVoluntario/QualDistancia" element={<QualDistancia />} />


            {/* Login > InformacoesLogin > * > Tudo Pronto ======================================================================*/}
            <Route path="/CriarConta/SobreVoce/QuemAvisar/TudoPronto" element={
              <TudoPronto
                voltar="/CriarConta/SobreVoce/QuemAvisar"
                mensagem="O Amparo vai avisar você antes do calor e da chuva forte. Se precisar, é só segurar o botão vermelho."
                botao="Começar"
                perfil="usuario"
                ajustes="/ConfigUsuario"
              />
            }/>
            <Route path="/CriarConta/SobreCuidador/QuemAcompanhar/TudoPronto" element={
              <TudoPronto
                voltar="/CriarConta/SobreCuidador/QuemAcompanhar"
                mensagem="Pedimos para a Marcela aceitar seu acompanhamento. Depois, você será avisado quando ela precisar de ajuda ou não responder a um alerta."
                botao="Ir para o painel"
                perfil="cuidador"
                ajustes="/ConfigCuidador"
              />
            }/>
            <Route path="/CriarConta/SobreVoluntario/QualDistancia/TudoPronto" element={
              <TudoPronto
                voltar="/CriarConta/SobreVoluntario/QualDistancia"
                mensagem="Obrigado por ajudar. Vamos avisar quando alguém perto de você precisar."
                botao="Começar a ajudar"
                perfil="voluntario"
                ajustes="/ConfigVoluntario"
              />
            }/>
            {/* ACABA TUDOPRONTO =============================================================================================== */}
            
            {/* Telas do usuário: só abrem com login ============================================ */}
            <Route element={<RotaProtegida perfil="usuario" />}>
              <Route path="/PainelUsuario" element={<PainelUsuario />}/>

              {/* Painel Usuario */}
              <Route path="/PainelUsuario/Clima" element={<Clima />}/>
              <Route path="/PainelUsuario/Dicas" element={<Dicas />}/>
              <Route path="/PainelUsuario/Contatos" element={
                <RedeApoio
                  voltar="/PainelUsuario"
                  titulo="Sua rede de apoio"
                  descricao="Quando você pede ajuda, avisamos nesta ordem"
                  caminho="/PainelUsuario/Contatos"
                />
              }/>
              <Route path="/PainelUsuario/Contatos/Novo" element={<FormContato voltar="/PainelUsuario/Contatos" />}/>
              <Route path="/PainelUsuario/Contatos/:id" element={<FormContato voltar="/PainelUsuario/Contatos" />}/>
              <Route path="/PainelUsuario/Abrigos" element={<Abrigos voltar="/PainelUsuario" comoChegar="/PainelUsuario/Abrigos/ComoChegar" />}/>
              <Route path="/PainelUsuario/Abrigos/ComoChegar" element={<ComoChegar voltar="/PainelUsuario/Abrigos" />}/>

              {/* Painel Usuario > Alerta e pedido de ajuda */}
              <Route path="/PainelUsuario/Alerta" element={<Alerta />}/>
              <Route path="/PainelUsuario/AjudaSolicitada" element={<AjudaSolicitada />}/>
              <Route path="/PainelUsuario/QuemVem" element={<QuemVem />}/>

              {/* Painel Usuario > Menu */}
              <Route path="/PainelUsuario/Menu" element={<MenuUsuario />}/>
              <Route path="/PainelUsuario/MinhaFicha" element={<MinhaFicha />}/>
              <Route path="/PainelUsuario/MinhaFicha/Editar" element={<EditarFicha />}/>
              <Route path="/PainelUsuario/ComoUsar" element={<ComoUsar />}/>
              <Route path="/PainelUsuario/MeuAparelho" element={<MeuAparelho />}/>
              <Route path="/PainelUsuario/Notificacoes" element={<Notificacoes />}/>
            </Route>

            {/* Telas do cuidador: só abrem com login ============================================ */}
            <Route element={<RotaProtegida perfil="cuidador" />}>
              <Route path="/PainelCuidador" element={<PainelCuidador />}/>

              {/* Painel Cuidador */}
              <Route path="/PainelCuidador/Contatos" element={
                <RedeApoio
                  voltar="/PainelCuidador"
                  titulo="Rede de contatos"
                  descricao="Quando Marcela pede ajuda, avisamos nesta ordem"
                  caminho="/PainelCuidador/Contatos"
                />
              }/>
              <Route path="/PainelCuidador/Contatos/Novo" element={<FormContato voltar="/PainelCuidador/Contatos" />}/>
              <Route path="/PainelCuidador/Contatos/:id" element={<FormContato voltar="/PainelCuidador/Contatos" />}/>

              {/* Painel Cuidador > Alerta sem resposta */}
              <Route path="/PainelCuidador/SemResposta" element={<SemResposta />}/>
              <Route path="/PainelCuidador/EstouIndo" element={<EstouIndo />}/>
              <Route path="/PainelCuidador/Acompanhamento" element={<Acompanhamento />}/>

              {/* Painel Cuidador > Menu */}
              <Route path="/PainelCuidador/Menu" element={<MenuCuidador />}/>
              <Route path="/PainelCuidador/Aparelho" element={<AparelhoMarcela />}/>
              <Route path="/PainelCuidador/Pessoas" element={<PessoasQueAcompanho />}/>
              <Route path="/PainelCuidador/Pessoas/Nova" element={<NovaPessoa />}/>
              <Route path="/PainelCuidador/MeuCadastro" element={<MeuCadastroCuidador />}/>
              <Route path="/PainelCuidador/MeuCadastro/Editar" element={<EditarCadastro perfil="cuidador" voltar="/PainelCuidador/MeuCadastro" />}/>
            </Route>

            {/* Telas do voluntário: só abrem com login ============================================ */}
            <Route element={<RotaProtegida perfil="voluntario" />}>
              <Route path="/PainelVoluntario" element={<PainelVoluntario />}/>

              {/* Painel Voluntario */}
              <Route path="/PainelVoluntario/OndeQuando" element={<OndeQuando />}/>
              <Route path="/PainelVoluntario/ComoAjudar" element={<ComoAjudar />}/>
              <Route path="/PainelVoluntario/Abrigos" element={<Abrigos voltar="/PainelVoluntario/Menu" comoChegar="/PainelVoluntario/Abrigos/ComoChegar" />}/>
              <Route path="/PainelVoluntario/Abrigos/ComoChegar" element={<ComoChegar voltar="/PainelVoluntario/Abrigos" />}/>

              {/* Painel Voluntario > Atendimento */}
              <Route path="/PainelVoluntario/Pedido" element={<Pedido />}/>
              <Route path="/PainelVoluntario/Caminho" element={<Caminho />}/>
              <Route path="/PainelVoluntario/NoLocal" element={<NoLocal />}/>
              <Route path="/PainelVoluntario/Obrigado" element={<Obrigado />}/>

              {/* Painel Voluntario > Menu */}
              <Route path="/PainelVoluntario/Menu" element={<MenuVoluntario />}/>
              <Route path="/PainelVoluntario/Atendimentos" element={<MeusAtendimentos />}/>
              <Route path="/PainelVoluntario/MeuCadastro" element={<MeuCadastroVoluntario />}/>
              <Route path="/PainelVoluntario/MeuCadastro/Editar" element={<EditarCadastro perfil="voluntario" voltar="/PainelVoluntario/MeuCadastro" />}/>
            </Route>

            {/* Config */}
            <Route path="/ConfigCuidador" element={<ConfigCuidador />}/>
            <Route path="/ConfigUsuario" element={<ConfigUsuario />}/>
            <Route path="/ConfigVoluntario" element={<ConfigVoluntario />}/>

          </Routes>
        </div>

      </div>

    </div>
  )
}

export default App