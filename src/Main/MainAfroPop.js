import "../css/bootstrap.css";
import "../css/MainAfroPop.css";
import SunRa from "../img/sunra.jpg";
import Janelle from "../img/janelle.webp";
import Badu from "../img/ebd.jpg";
import Gil from "../img/gil.jpg";
import Xenia from "../img/xenia.webp";
import Tuyo from "../img/tuyo.webp";
import CBrown from "../img/cb.jpg";
import Oshun from "../img/oshun.webp";
import Fela from "../img/felak.jpg";
import Oleria from "../img/oleria.jpg";
import NZ from "../img/n_z.webp";
import JH from "../img/hendrix.webp";

function MainAfroPop(params) {
  return (
    <div className="principal bg-image text-dark w-100">
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img- fluid"
                      src={SunRa}
                      alt="card image"
                    />
                    <div class="card-body p-5">
                      <h4 class="card-title">Sun Ra</h4>
                      <p class="card-text">
                        Herman Poole Blount ou Le Sony'r Ra[2] - (Birmingham,
                        Alabama, 22 de Maio de 1914 - Birmingham, Alabama, 30 de
                        Maio de 1993) foi um compositor de jazz, bandleader,
                        pianista, poeta e filósofo conhecido
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0dpkcn"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img- fluid"
                      src={Janelle}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-5">
                      <h4 class="card-title">Janelle Monáe</h4>
                      <p class="card-text">
                        Janelle Monáe, é uma cantora, compositora, bailarina e
                        atriz estadunidense. Monaé tem oito indicações ao
                        Grammy.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVT93EW7kPT9"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img- fluid"
                      src={Badu}
                      alt="card image"
                    />
                    <div class="card-body p-5">
                      <h4 class="card-title">Erykah Badu</h4>
                      <p class="card-text">
                        Erica Abi Wright (Dallas, 26 de fevereiro de 1971), mais
                        conhecida pelo nome artístico de Erykah Badu, é uma
                        cantora, compositora (NeoSoul R&B e Hip Hop), produtora,
                        disc jockey, atriz e ativista estadunidense.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4zhZAI"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100"></div>
        <div className="row">
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Gil}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-3">
                      <h4 class="card-title">Gilberto Gil</h4>
                      <p class="card-text">
                        Gilberto Passos Gil Moreira, conhecido como Gilberto Gil
                        GCIH (Salvador, 26 de junho de 1942), é um cantor,
                        compositor, multi-instrumentista, produtor musical e
                        político brasileiro, conhecido por sua contribuição na
                        música brasileira e por ser vencedor de prêmios Grammy
                        Awards, Grammy Latino e galardoado pelo governo francês
                        com a Ordem Nacional do Mérito (1997). Em 1999, foi
                        nomeado "Artista pela Paz", pela UNESCO.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/artist/7oEkUINVIj1Nr3Wnj8tzqr"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Tuyo}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-3">
                      <h4 class="card-title">Tuyo</h4>
                      <p class="card-text">
                        Tuyo é uma banda brasileira formada em Curitiba, em
                        2016. Formada por Jean Machado e pelas irmãs Lilian e
                        Layane Soares, ex-integrantes da banda Simonami. O trio
                        traz uma mistura de elementos sintéticos somados ao folk
                        e ao soul. Foi eleita pelo The New York Times como
                        destaque do Festival SXSW 2021 e atualmente lança seu
                        novo álbum, "Chegamos Sozinhos em Casa", dividido em
                        dois volumes, ambos lançados no ano de 2021.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/artist/3Ujv6sa60JRiaxS8RVuNOj"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Xenia}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-3">
                      <h4 class="card-title">Xênia França</h4>
                      <p class="card-text">
                        Xênia Érica Estrela França, ou apenas Xênia França
                        (Candeias, 27 de fevereiro de 1986) é uma cantora e
                        compositora brasileira, nascida no Recôncavo Baiano,
                        passou a adolescência em Camaçari e mudou-se para São
                        Paulo em 2004. Conheceu Emicida, que a convidou para
                        participar das gravações do EP Sua Mina Ouve Meu Rep
                        Tamém e do álbum Emicídio, ambos de 2010.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0PujuM"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="row">
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={CBrown}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-3">
                      <h4 class="card-title">Carlinhos Brown</h4>
                      <p class="card-text">
                        Antônio Carlos Santos de Freitas (Salvador, 23 de
                        novembro de 1962), conhecido pelo nome artístico
                        Carlinhos Brown, é um cantor, percussionista,
                        compositor, arranjador, produtor, artista plástico,
                        agitador cultural e candomblecista brasileiro.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWV2t0uMPuqGB"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Oshun}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-3">
                      <h4 class="card-title">Oshun</h4>
                      <p class="card-text">
                        OSHUN é uma dupla Iya-sol (Neo-Soul / Hip-Hop) composta
                        pelas nativas do DMV Niambi Sala e Thandiwe, ambas com
                        19 anos. Sua irmandade foi manifestada em março de 2013,
                        quando as duas se conheceram como calouros em uma
                        orientação de bolsa de estudos na NYU. Após uma conexão
                        instantânea, OSHUN fez sua estreia na vitrine de
                        talentos da orientação em 2014.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/artist/3sGyf3EDcvQ4PB9AGIg84M"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Fela}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-2">
                      <h4 class="card-title">Fela Kuti</h4>
                      <p class="card-text">
                        Olufela Olusegun Oludotun Ransome-Kuti (Abeocutá, 15 de
                        Outubro de 1938 Lagos, 2 de Agosto de 1997), conhecido
                        profissionalmente como Fela Kuti, foi um
                        multi-instrumentista nigeriano, músico e compositor,
                        pioneiro do gênero musical Afrobeat, ativista político e
                        dos direitos humanos.Durante o auge de sua popularidade,
                        ele foi saudado como um dos mais "desafiadores e
                        carismáticos artistas musicais" da África.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXajE2Hhh3n7i"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="row">
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Oleria}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-2">
                      <h4 class="card-title">Elen Oleria</h4>
                      <p class="card-text">
                        Ellen foi criada em Taguatinga, Distrito Federal,
                        iniciou a carreira de cantora aos 16 anos cantando em
                        bares e casas de show em Taguatinga - DF. Ellen Oléria é
                        atriz formada em artes cênicas pela Universidade de
                        Brasília. Atua desde o ano 2000 no circuito cultural
                        como cantora, compositora e instrumentista autodidata.
                        Ganhou vários festivais em sua cidade natal.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1AJ9pm"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={NZ}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-4">
                      <h4 class="card-title">Nação zumbi </h4>
                      <p class="card-text">
                        Nação Zumbi é uma banda brasileira de rock, nascida no
                        início da década de 1990, originalmente chamava-se
                        "Chico Science e Nação Zumbi". Chico Science(falecido no
                        dia 02/02/1997), fundou, junto com a banda Mundo Livre
                        S/A, o movimento Manguebeat. Em seu lugar nos vocais
                        veio Jorge dü Peixe.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbhmUGQGSSHn"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={JH}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-4">
                      <h4 class="card-title">Jimi Hendrix </h4>
                      <p class="card-text">
                        James Marshall "Jimi" Hendrix (nascido Johnny Allen
                        Hendrix; Seattle, 27 de novembro de 1942– Londres, 18 de
                        setembro de 1970) foi um guitarrista, cantor e
                        compositor norte-americano. Em praticamente todas as
                        listas já publicadas de melhores guitarristas da
                        história, ocupa o primeiro lugar, e um dos mais
                        influentes músicos de sua era, em diversos gêneros
                        musicais.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTNV753no4ic"
                        width="300"
                        height="500"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAfroPop;
