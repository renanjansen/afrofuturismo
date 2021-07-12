import "../css/bootstrap.css";
import "../css/afroCienciaCarrossel.css";
import Alfred_Oscar_Coffin from "../img/Alfred_Oscar_Coffin.jpg";
import alice_ball from "../img/alice_ball.jpg";
import katherine_johnson from "../img/katherine_johnson_galileu.jpg";
import leopold from "../img/leopold-senghor.jpg";
import maejemison from "../img/maejemison.jpg";
import neil from "../img/neildegrasse.png";
import milton from "../img/milton_santos.jpg";
import luize from "../img/luize_bairros.jpg";
import simone from "../img/simone_evaristo.jpeg";

function AfroCienciaCarrossel(params) {
  return (
    <main id="corpo">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 imgs"
              src={alice_ball}
              alt="First slide"
               
            />
            <div className="carousel-caption">
              <h5>Alice Ball (1892 - 1916)</h5>
              <p>
                Além de ser a primeira mulher a se formar na Universidade do
                Havaí, Alice criou, aos 23 anos, o método Ball, um tratamento
                químico que ajudou a curar a lepra e aliviou a vida de centenas
                de pessoas, que não foram mais obrigadas a se exilar de suas
                famílias.
              </p>

              <p>
                Ball morreu aos 24 anos, provavelmente por ter inalado gás
                clorídrico no laboratório. Em todo ano bissexto, no dia 29 de
                fevereiro, comemora-se o Alice Ball Day no Havaí.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={leopold}
              alt="Second slide"
             />
            <div className="carousel-caption">
              <h5>Léopold Sédar Senghor (1906 - 2001)</h5>
              <p>
                O pensador senegalês foi o primeiro africano formado pela
                Universidade de Sorbonne, em Paris. Desenvolveu o conceito de
                negritude e um movimento literário que exaltava a identidade
                negra, lamentando o impacto que a cultura europeia teve nas
                tradições do continente. Em 1960, logo após a independência do
                Senegal, foi eleito presidente, cargo que ocupou até 1980.
                Conheça mais sobre o trabalho de Senghor e de outros pensadores
                africanos contemporâneos.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={katherine_johnson}
              alt="Third slide"
              />
            <div className="carousel-caption">
              <h5>Katherine Johnson (1918 - )</h5>
              <p>
                Nascida em 26 de agosto de 1918 em West Virginia, Johnson sempre
                foi uma criança prodígio. Concluiu o ensino médio aos 14 anos e,
                aos 18, recebeu um diploma universitário.
              </p>
              <p>
                “Eu contava tudo, os passos até a estrada, os passos até a
                igreja, o número de pratos e talheres que eu lavava… Tudo o que
                podia ser contado, eu contava”, disse Johnson à Nasa, agência
                americana responsável por programas de exploração espacial na
                qual começou a trabalhar aos 35 anos.
              </p>
              <p>
                Por seus mais de 30 anos de trabalho na agência, Johnson recebeu
                a Medalha Presidencial da Liberdade em 2015, a maior
                condecoração civil dos Estados Unidos. A história de Johnson e
                de outras mulheres negras que trabalharam como “calculadoras
                humanas” para a Nasa virou livro e filme: Estrelas Além do
                Tempo. Conheça 5 lições inspiradoras que aprendemos com a
                matemática centenária.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={milton}
              alt="Quarto slide"
             />
            <div className="carousel-caption">
              <h5>Milton Santos (1926 - 2001)</h5>
              <p>
                Nascido em 3 de maio de 1926, em Brocas de Macaíba (BA), Santos
                formou-se em Direito pela Universidade Federal da Bahia (UFBA) e
                fez doutorado em Geografia pela Universidade de Estrasburgo. Ele
                trabalhou como jornalista, redator e professor.
              </p>

              <p>
                Por causa do golpe militar em 1964, ele passou a ser professor
                itirenante em diversos países e faculdades, como a
                Paris-Sorbonne, na França e o MIT (Massachusetts Institute of
                Technology). O geógrafo retornou ao Brasil em 1977 e publicou o
                livro "Por uma Geografia Nova" em 1978. Recebeu 20 títulos de
                Doutor Honoris Causa e fundou laboratórios de geografia em
                países da Europa, África e América. Santos foi o primeiro
                brasileiro a ganhar o Prêmio Vautrin Lud (considerado o Nobel da
                geografia)
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={luize}
              alt="Third slide"
              />
            <div className="carousel-caption">
              <h5>Luiza Bairros (1953 - 2016)</h5>
              <p>
                Mestre em ciências sociais pela Universidade Federal da Bahia e
                doutora em sociologia pela Universidade Estadual de Michigan,
                Bairros foi ministra-chefe da Secretaria de Políticas de
                Promoção da Igualdade Racial do governo Dilma. Vítima de um
                câncer de pulmão, a socióloga gaúcha morreu no dia 12 de julho
                de 2016.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={maejemison}
              alt="Third slide"
              />
            <div className="carousel-caption">
              <h5>Mae Jemison (1956 - )</h5>
              <p>
                Quando Mae Carol Jemison nasceu, em 17 de outubro de 1956, em
                Decatur, no Alabama, a Nasa não permitia que mulheres fossem
                astronautas. Mulheres negras, como era o caso de Jemison, então,
                nem se fala. Mas isso não impediu que ela, crescendo em Chicago,
                sonhasse com ir para o espaço: determinada, ela se formou em
                Engenharia Química na Universidade Stanford e, depois, em
                Medicina na Universidade Cornell.
              </p>
              <p>
                Em 1987, ela conseguiu entrar para a Nasa e, cinco anos depois,
                realizou o sonho de fazer parte da tripulação de um ônibus
                espacial — o Endeavour, na missão STS-47, que orbitou a Terra do
                dia 12 ao dia 20 de setembro de 1992.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs"
              src={neil}
              alt="Third slide"
              />
            <div className="carousel-caption">
              <h5>Neil deGrasse Tyson (1958 - )</h5>
              <p>
                O astrofísico mais pop da galáxia nasceu no Bronx, em Nova York,
                nos Estados Unidos, e começou a se apaixonar por astronomia aos
                9 anos, numa visita ao Planetário de Hayden, do qual se tornou
                diretor em 1996.
              </p>
              <p>
                Formado em astrofísica pela Universidade Columbia, sua vida
                midiática decolaria após assinar sob o pseudônimo Merlin, entre
                1995 e 2005, uma coluna mensal na revista Star Date em que
                tirava dúvidas dos leitores sobre o universo. Desde então ele
                foi parte de todas as comissões governamentais imagináveis,
                colecionou prêmios de divulgação científica e apresentou a
                indispensável série Cosmos: Uma Odisséia do Espaço-tempo.
                Fizemos uma seleção de 9 reflexões que vão te introduzir ao
                pensamento de deGrasse Tyson.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs1"
              src={simone}
              alt="Third slide"
              
            />
            <div className="carousel-caption">
              <h5>Simone Maia Evaristo</h5>
              <p>
                O Especialista em biologia e citotecnologia pela Universidade
                Federal do Rio de Janeiro (UFRJ), Maia é presidente da
                Associação Nacional de Citotecnologia (Anacito). Também atua na
                área de ensino técnico do Instituto Nacional do Câncer (INCA)..
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 imgs1"
              src={Alfred_Oscar_Coffin}
              alt="Third slide"
              />
            <div className="carousel-caption">
              <h5>Alfred Oscar Coffin (1861 - 1933)</h5>
              <p>
                Coffinffin foi professor de matemática e língua românica da
                Universidade Wiley, no estado norte-americano do Texas.
                Formou-se e concluiu o mestrado na Universidade Fisk, uma
                instituição de ensino historicamente negra do Tennessee, e, em
                1889, tornou-se o primeiro afro-americano a obter um doutorado
                em biologia — pela Illinois Wesleyan University.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </main>
  );
}

export default AfroCienciaCarrossel;
