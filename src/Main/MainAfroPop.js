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
    <div className="principal bg-image text-dark w-100 ">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className=" col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={SunRa}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-3">
                      <h4 class="card-title">Sun Ra</h4>
                      <p class="card-text">
                        Herman Poole Blount ou Sony'r Ra - (Birmingham,
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
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Janelle}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-3">
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
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside" id="card">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src={Badu}
                      alt="card image"
                      id="popImg"
                    />
                    <div class="card-body p-1">
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
                        width="100%"
                        height="100%"
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
        <div className="row mt-4">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                    <div class="card-body p-1">
                      <h4 class="card-title">Gilberto Gil</h4>
                      <p class="card-text">
                        Gilberto Passos Gil Moreira, conhecido como Gilberto Gil
                        GCIH (Salvador, 26 de junho de 1942), é um cantor,
                        compositor, multi-instrumentista, produtor musical e
                        político brasileiro.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/artist/7oEkUINVIj1Nr3Wnj8tzqr"
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                        2016, traz uma mistura de elementos sintéticos somados
                        ao folk e ao soul.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/artist/3Ujv6sa60JRiaxS8RVuNOj"
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                        Xênia França (Candeias, 27 de fevereiro de 1986) é uma
                        cantora e compositora brasileira.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0PujuM"
                        width="100%"
                        height="100%"
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
        <div className="row mt-4">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                        19 anos.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/artist/3sGyf3EDcvQ4PB9AGIg84M"
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                        Fela Kuti, foi um multi-instrumentista nigeriano, músico
                        e compositor, pioneiro do gênero musical Afrobeat, foi
                        saudado como um dos mais "desafiadores e carismáticos
                        artistas musicais" da África.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXajE2Hhh3n7i"
                        width="100%"
                        height="100%"
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
        <div className="row mt-4">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                        Ellen atua desde o ano 2000 no circuito cultural como
                        cantora, compositora e instrumentista autodidata. Ganhou
                        o The Voice Brasil 1.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1AJ9pm"
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                    <div class="card-body p-2">
                      <h4 class="card-title">Nação zumbi </h4>
                      <p class="card-text">
                        Nação Zumbi é uma banda brasileira de rock, nascida no
                        início da década de 19100, fundou, junto com a banda
                        Mundo Livre S/A, o movimento Manguebeat. Em seu lugar
                        nos vocais veio Jorge dü Peixe.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbhmUGQGSSHn"
                        width="100%"
                        height="100%"
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
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div
              class="image-flip2"
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
                    <div class="card-body p-2">
                      <h4 class="card-title">Jimi Hendrix </h4>
                      <p class="card-text">
                        Nascido Johnny Allen
                        Hendrix; Seattle, 27 de novembro de 1942 Londres, 18 de
                        setembro de 1970) foi um guitarrista, cantor e
                        compositor norte-americano é um dos mais
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
                        width="100%"
                        height="100%"
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
