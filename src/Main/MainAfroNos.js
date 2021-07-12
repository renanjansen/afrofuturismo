import "../css/bootstrap.css";
import "../css/MainAfroNos.css";
import preta_lab from "../img/preta_lab.jpg";
import recode from "../img/recode.jpg";
import tecnogueto from "../img/tecnogueto.jpg";
import educafro from "../img/educafro.jpg";
import kilombo from "../img/kilombo.png";
import cdPreto from "../img/cdPreto.png";

import { Link } from "react-router-dom";

function MainAfroNos(params) {
    return (
      <div className="nos bg-image text-dark ">
        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col-4">
              <Link to="/preta_lab">
                <div className="card">
                  <img src={preta_lab} alt="Avatar" className="imgNosCard" />
                  <div className="container">
                  <p>
                    <b>Preta Lab</b>
                  </p>
                  <p>
                    A PretaLab é uma iniciativa do Olabi lançada em março de
                    2017 com foco em estimular a inclusão de meninas e mulheres
                    negras e indígenas no universo das novas tecnologias.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/recode">
              <div className="card">
                <img src={recode} alt="Avatar" className="imgNosCard" />

                <div className="container">
                  <p>
                    <b>Recode Pro</b>
                  </p>
                  <p>
                    Uma organização da sociedade civil que usa a tecnologia para
                    gerar oportunidades e estimular a transformação social e o
                    empoderamento digital de jovens.{" "}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/preta_lab">
              <div className="card">
                <img src={tecnogueto} alt="Avatar" className="imgNosCard" />

                <div className="container">
                  <p>
                    <b>Tecnogueto</b>
                  </p>
                  <p>
                    A Tecnogueto é uma empresa social de educação e tecnologia,
                    que tem como principal objetivo ajudar pessoas de guetos
                    sociais a se inserirem no mercado de tecnologia. Fazemos
                    isso oferecendo educação de qualidade e de forma gratuita.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="row p-5 m-2">
          <div className="col-4">
            <Link to="/educafro">
              <div className="card ">
                <img src={educafro} alt="Avatar" className="imgNosCard " />

                <div className="container">
                  <p>
                    <b>Educafro Tech</b>
                  </p>
                  <p>
                    É uma proposta de formação em TI voltada para a Comunidade
                    Negra. Quer priorizar jovens que tenham vocação para o TI e
                    ainda não tiveram oportunidades. Em seu primeiro fruto
                    formou um grupo de trinta e dois alun@s, composto por vinte
                    e nove pessoas negras e três pessoas brancas. A EDUCAFRO tem
                    como missão, investir na diversidade. São dezessete homens e
                    quinze mulheres, das quais, uma é transexual, três
                    homossexuais e outras três são lésbicas.
                  </p>
                </div>
              </div>
              </Link>
          </div>
          <div className="col-4">
            <Link to="/kilombo">
              <div className="card">
                <img src={kilombo} alt="Avatar" className="imgNosCard" />

                <div className="container">
                  <p>
                    <b>Kilombo Tech</b>
                  </p>
                  <p>
                    O Kilombo Tech é um hub de inovação e impacto com foco na
                    transformação social através da inserção de mulheres negras
                    no mercado tecnológico.
                  </p>
                </div>
              </div>
            </Link>
            </div>
          <div className="col-4">
            <Link to="/preta_lab">
              <div className="card">
                <img src={cdPreto} alt="Avatar" className="imgNosCard" />

                <div className="container">
                  <p>
                    <b>Código Preto</b>
                  </p>
                  <p>
                    Voltado para profissionais em início de carreira, o Código
                    Preto é exclusivo para pessoas autodeclaradas pretas ou
                    pardas, com idade mínima de 18 anos e ensino médio completo.
                    “O Código Preto é parte de um plano maior de
                    representatividade em nosso ambiente e também no universo de
                    tecnologia”, diz a diretora de Pessoas do QuintoAndar, Erica
                    Jannini. 
                  </p>
                </div>
              </div>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainAfroNos;  