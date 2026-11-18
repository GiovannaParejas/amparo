

---

## Ficha da CitizenTech

| | |
|---|---|
| **Nome** | Amparo |
| **Cidade e bairros** | São Paulo - Sapopemba, Jardim Pantanal e Parque Brasilândia (bairros de exemplo) |
| **Cidadão beneficiado** | Idosos e pessoas com deficiência, principalmente quem mora sozinho ou tem a família longe |
| **Problema, em uma frase** | Durante ondas de calor e chuvas fortes, idosos e pessoas com deficiência muitas vezes não recebem o alerta a tempo e, quando passam mal, nem sempre conseguem pedir ajuda. |
| **Como funciona** | Um dispositivo dentro de casa mede temperatura e umidade; o sistema combina essas leituras com a previsão de chuva, classifica o risco em NORMAL, ATENÇÃO ou PERIGO, orienta a pessoa e, se ela não responder ou pedir ajuda, avisa a família e os voluntários do bairro. |
| **O que cada parte faz** | **Python:** decisão de risco, recomendações, checagem e rede de apoio. **Edge:** dispositivo ESP32 que mede e alerta com luz e som. **Front-end / Web:** aplicação web acessível. **Cálculo:** relatório que justifica a fórmula e os limites. **Software Design:** jornada e requisitos. **Storytelling:** pitch. |
| **Repositório da solução** | https://github.com/GiovannaParejas/amparo |
| **Indicador de impacto** | Percentual de alertas confirmados pela pessoa, número de pedidos atendidos pela rede, tempo entre o pedido de ajuda e a chegada de alguém e pessoas encaminhadas a abrigos durante eventos extremos. |
| **ODS conectados** | 3 (Saúde e bem-estar), 10 (Redução das desigualdades), 11 (Cidades e comunidades sustentáveis) e 13 (Ação contra a mudança global do clima) |

---

 
## Estrutura do repositório
 
```
amparo/
├── README.md                        ← este arquivo
├── front-web/                       ← aplicativo em React (Front-end e Web Development)
├── python/                          ← aplicação em Python
├── calculo/                         ← relatório de cálculo e scripts
├── edge/                            ← código do ESP32 e arquivos do Wokwi
├── software-total-experience/       ← apresentação de Software & Total Experience Design
└── storytelling/                    ← roteiro, link do vídeo e e-mail do arquétipo

```
 
Cada pasta tem o seu próprio `README.md`, com os detalhes e as instruções daquela parte.
 
---

## Equipe
 
| Integrante | RM |
|---|---|
| Bruce Li Yan Ting | 569168 |
| Felipe Rorato Costa | 570419 | 
| Giovanna Andrade Parejas | 569041 | 
| Laura Cardin Mirilli | 570841 | 

