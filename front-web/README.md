## Ficha da CitizenTech

| | |
|---|---|
| *Nome* | Amparo |
| *Cidade e bairros* | São Paulo - Sapopemba, Jardim Pantanal e Parque Brasilândia (bairros de exemplo) |
| *Cidadão beneficiado* | Idosos e pessoas com deficiência, principalmente quem mora sozinho ou tem a família longe |
| *Problema, em uma frase* | Durante ondas de calor e chuvas fortes, idosos e pessoas com deficiência muitas vezes não recebem o alerta a tempo e, quando passam mal, nem sempre conseguem pedir ajuda. |
| *Como funciona* | Um dispositivo dentro de casa mede temperatura e umidade; o sistema combina essas leituras com a previsão de chuva, classifica o risco em NORMAL, ATENÇÃO ou PERIGO, orienta a pessoa e, se ela não responder ou pedir ajuda, avisa a família e os voluntários do bairro. |
| *O que cada parte faz* | *Python:* decisão de risco, recomendações, checagem e rede de apoio. *Edge:* dispositivo ESP32 que mede e alerta com luz e som. *Front-end / Web:* aplicação web acessível. *Cálculo:* relatório que justifica a fórmula e os limites. *Software Design:* jornada e requisitos. *Storytelling:* pitch. |
| *Repositório da solução* | https://github.com/GiovannaParejas/amparo |
| *Repositório da matéria* | https://github.com/BruceTng/gs2-amparo |
| *Indicador de impacto* | Percentual de alertas confirmados pela pessoa, número de pedidos atendidos pela rede, tempo entre o pedido de ajuda e a chegada de alguém e pessoas encaminhadas a abrigos durante eventos extremos. |
| *ODS conectados* | 3 (Saúde e bem-estar), 10 (Redução das desigualdades), 11 (Cidades e comunidades sustentáveis) e 13 (Ação contra a mudança global do clima) |



# Amparo

Aplicativo de apoio a pessoas idosas durante **ondas de calor e chuvas fortes**.
Ele avisa antes do perigo, mostra abrigos por perto e conecta a pessoa com a família e com voluntários do bairro. Projeto com foco em dispositivos mobile

Projeto da Global Solution (FIAP), feito em React a partir do protótipo no Figma.


## Integrantes

| Nome | RM |
|---|---|
| Bruce Li Yan Ting| 569168 |
| Giovanna Parejas | 569041 |
| Felipe Rorato Costa | 570419 |
| Laura Cardin Mirilli | 570841 |

## Os três perfis

| Perfil | Quem é | O que faz no app |
|---|---|---|
| **Usuário** | Marcela, que mora sozinha | Recebe alertas de clima, vê dicas e abrigos, pede ajuda segurando o botão vermelho |
| **Cuidador** | Ana, filha da Marcela | Acompanha a Marcela e é avisada quando ela não responde a um alerta |
| **Voluntário** | Seu Carlos, vizinho | Recebe pedidos de ajuda perto de casa e vai até a pessoa |

## Como rodar

```bash
npm install
npm run dev
```

Depois abra `http://localhost:5173`.

### API de contatos (MockAPI)

A rede de apoio usa o [MockAPI](https://mockapi.io) para **criar, consultar, editar e excluir** contatos.
O projeto já está configurado com o endereço:

```
https://6af743fbe844c7ff741c4d7d.mockapi.io/contatos
```

O recurso `contatos` tem os campos `id`, `nome`, `celular` e `quem`. Para usar outra conta, crie um recurso igual e troque a constante `API_URL` em `src/services/contatos.js`.

## Como testar

### Login

O login é simulado: a cada "Receber código", o app gera um **código novo de 4 números** e mostra num `alert`, no lugar do SMS.

| Perfil | Celular |
|---|---|
| Usuário (Marcela) | (11) 91111-1111 |
| Cuidador (Ana) | (11) 92222-2222 |
| Voluntário (Carlos) | (11) 93333-3333 |

- Quem cria uma conta em "Criar minha conta" também consegue entrar depois com o celular que cadastrou.
- Os campos de celular só aceitam números e já formatam enquanto a pessoa digita.
- Celular não cadastrado ou código errado mostram um aviso.
- As telas de cada perfil são protegidas: sem login, o app volta para "Entrar".
- "Sair", no menu, desloga.
- Criar uma conta pelo "Criar minha conta" também entra no app no final.

### Funcionalidades

| O que testar | Onde |
|---|---|
| CRUD de contatos (criar, listar, editar, excluir) | Painel do usuário → Contatos |
| Endereço pelo CEP (ViaCEP) | Criar minha conta → "Eu" → digite um CEP |
| Clima de verdade (Nominatim + Open-Meteo): o aviso do painel e as dicas mudam conforme a previsão | Painel do usuário (aviso amarelo ou verde) e Clima |
| Mapa real dos abrigos (Leaflet) e cartões que abrem ao clicar | Painel do usuário → Abrigos |
| Ligar (abre o discador com o número) | Botões 192/193/199, contatos e "Ligar para..." |
| Disponível / Indisponível do voluntário (fica salvo) | Painel do voluntário |
| Teste de luz e som | Menu do usuário → Meu aparelho |
| Narrador (lê em voz alta) | Dicas, Como usar, Como chegar e "Ouvir o código" |
| Tamanho da letra e alto contraste | Botão "Aa" (fica salvo) |
| Ler alertas em voz alta e vibrar | Ligue no "Aa" e abra o "Demo: Alerta" |
| Pedir ajuda segurando 2 segundos | Botão vermelho do painel do usuário |
| Editar ficha e cadastro (fica salvo) | Menu → Minha ficha / Meu cadastro |
| Distância, horários e tipos de ajuda do voluntário (ficam salvos) | Painel do voluntário → Mudar |
| Convidar pessoa para acompanhar (aparece na lista) | Painel do cuidador → Menu → Pessoas que acompanho |
| Alarme, voz e vibração quando chega um alerta | "Demo" de cada painel (opções no "Aa") |

Os botões **"Demo"**, com borda tracejada, simulam situações para a apresentação (um alerta chegando, um pedido de ajuda).

## Tecnologias

- **React 19** com **Vite**
- **Tailwind CSS 4** (cores e fonte do protótipo definidas no `@theme` do `index.css`)
- **React Router** (rotas, rotas com parâmetro e rotas protegidas)
- **Leaflet / React Leaflet** (mapa dos abrigos)
- Fonte **Atkinson Hyperlegible**, feita para pessoas com baixa visão

## APIs usadas

| API | Para quê | Onde |
|---|---|---|
| **MockAPI** | CRUD dos contatos da rede de apoio | `services/contatos.js` |
| **ViaCEP** | Preencher o endereço a partir do CEP | `services/cep.js` |
| **Nominatim** | Transformar o endereço em latitude e longitude | `services/clima.js` |
| **Open-Meteo** | Previsão do tempo (temperatura, sensação, chuva) | `services/clima.js` |
| **OpenStreetMap** | Mapa real dos abrigos | `pages/compartilhado/Abrigos.jsx` |
| **Web Speech** | Narrador | `utils/narrar.js` |
| **Web Audio** | Bipe de alarme quando chega um alerta | `utils/tocarAlarme.js` |
| **Vibration** | Vibrar quando chega um alerta (celulares Android) | `hooks/useAviso.js` |

## Organização das pastas (separação de responsabilidades)

```
src/
├── pages/        → camada visual: as telas
├── components/   → camada visual: pedaços de tela reutilizáveis
├── hooks/        → lógica de negócio e estado (custom hooks)
├── services/     → acesso aos dados (APIs, JSON e localStorage)
├── data/         → dados fixos em JSON
└── utils/        → funções de apoio (narrador, alarme e máscaras de celular e CEP)
```

Nenhuma tela faz `fetch`, lê o `localStorage` ou importa um JSON: os dados sempre passam por um **service**.

- Quando há lógica ou estado (login, CRUD, cadastro, clima, CEP...), a tela chama um **hook**, e o hook chama o service.
  Exemplo: `RedeApoio.jsx` (tela) → `useContatos()` (hook) → `listarContatos()` (service) → MockAPI.
- Quando é só um texto fixo (dicas, passos, abrigos), a tela chama o service direto.
  Exemplo: `Dicas.jsx` (tela) → `buscarTextos()` (service) → `data/textos.json`.

### Componentes (16)

| Componente | O que é |
|---|---|
| `Avatar` | Bolinha com a primeira letra do nome |
| `BotaoAjuda` | Botão vermelho que só funciona segurando 2 segundos |
| `Campo` | Texto + caixa de digitar dos formulários |
| `CampoCelular` | Campo de celular que só aceita números e já formata |
| `CamposCadastro` | Nome, sexo, celular e CEP do cuidador e do voluntário |
| `CartaoContato` | Um contato com os botões de ligar, editar e excluir |
| `Config` | Conteúdo do "Do seu jeito" |
| `Interruptor` | Botão de ligar e desligar |
| `ListaNumerada` | Lista com bolinhas numeradas |
| `Mapa` | Mapa desenhado em SVG (caminhos) |
| `MarcaAbrigo` | Número do abrigo no formato da legenda (círculo, losango ou quadrado) |
| `NumerosEmergencia` | Botões 192, 193 e 199 |
| `Progresso` | Barra de passos do cadastro |
| `RotaProtegida` | Só deixa abrir as telas com login do perfil certo |
| `Topo` | Topo dos painéis (logo, Demo e "Aa"); no laptop vira a barra de site com os links |
| `Voltar` | Botão "Voltar" usado em quase todas as telas |

Além deles, várias telas são reaproveitadas por mais de um perfil, recebendo props:
`RedeApoio`, `FormContato`, `Abrigos`, `ComoChegar`, `EditarCadastro` e `TudoPronto`.

### Custom hooks (10)

| Hook | O que faz |
|---|---|
| `useLogin` | Confere o celular, "manda" o código, confere o código, entra e sai |
| `useContatos` | Busca a lista de contatos na API e exclui contatos |
| `useContato` | Formulário de contato: cria um novo ou edita um existente |
| `useCadastro` | Lê, muda e salva o cadastro de cada perfil |
| `usePessoas` | Lista as pessoas que o cuidador acompanha e convida pessoas novas |
| `useConfig` | Tamanho da letra, alto contraste e preferências de alerta |
| `useClima` | Busca o clima e entrega os números prontos para a tela |
| `useCep` | Busca o endereço de um CEP |
| `useSegurar` | Só faz a ação se o botão ficar segurado |
| `useAviso` | Toca o alarme, lê o alerta em voz alta e vibra, conforme o "Do seu jeito" |

### React Hooks usados

`useState`, `useEffect`, `useNavigate` e `useParams`.

## Responsividade

O app usa a tela inteira em qualquer aparelho, sempre com o mesmo fundo creme.

- **Celular e tablet:** uma coluna centralizada, como no protótipo; os atalhos do painel ficam 2 por linha.
- **Laptop e desktop (a partir de 1024px, `lg:` no Tailwind):** layout de site.
  - O topo dos painéis vira uma barra branca de ponta a ponta, com os links principais (Abrigos, Contatos, Clima, Dicas, Menu...).
  - O conteúdo fica num bloco no meio da tela, com os textos alinhados à esquerda.
  - Os 4 atalhos ficam numa linha só, manhã/tarde/noite do clima ficam lado a lado, o mapa dos abrigos fica maior e os menus ficam em 2 colunas.

## Observações

- Os botões de **ligar** usam `tel:`: no celular, abrem o discador com o número já digitado, e a pessoa ainda precisa confirmar a ligação. Os números dos contatos e dos perfis são fictícios.
- Os dados de cadastro e as preferências ficam salvos no navegador (`localStorage`). Para começar do zero, limpe os dados do site no navegador.
- Os formulários de cadastro já vêm preenchidos com os dados de exemplo de cada perfil.
