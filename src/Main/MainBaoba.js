import "../css/bootstrap.css";
import "../css/MainBaoba.css";
import yaba from "../img/yaba.jpg";
import afroEstetica from "../img/afro_estetica.jpg";
import afroCiencia from "../img/afro_ciencia.jpg";
import afroArte from "../img/afroarte.jpg";
import afroPop from "../img/afropop.jpg";
import afroLit from "../img/afrolit.jpg";
import { Link } from "react-router-dom";

function MainBaoba(params) {
  return (
    <div className="baoba bg-image text-dark w-100 ">
      <div className="container  mt-5 text-dark">
        <div className="row mt-5 mb-4">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <Link to="/conto_yaba">
              <div className="card">
                <img src={yaba} alt="Avatar" className="imgBaobaCard2" />

                <div className="container">
                  <p>
                    <b>Conto de Yabá</b>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-xl-4 col-md-4 col-sm-12">
            <Link to="/afro_estetica">
              <div className="card">
                <img src={afroEstetica} alt="Avatar" className="imgBaobaCard2" />

                <div className="container">
                  <p>
                    <b>Afrofuturo & Estética</b>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-xl-4 col-md-4 col-sm-12">
            <Link to="/afro_ciencia">
              <div className="card">
                <img src={afroCiencia} alt="Avatar" className="imgBaobaCard2" />

                <div className="container text-center">
                  <p>
                    <b> Afrofuturo & Ciência </b>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-100"></div>
        <div className="row mt-4">
          <div className="col-xl-4 col-md-4 col-sm-12 mt-2">
            <Link to="/soriee">
              <div className="card">
                <img src={afroArte} alt="Avatar" className="imgBaobaCard2" />
                <div className="container">
                  <p>
                    <b>Soriee (um sarau pras Estrelas)</b>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12 mt-2">
            <Link to="/afro_pop">
              <div className="card">
                <img src={afroPop} alt="Avatar" className="imgBaobaCard2" />
                <div className="container">
                  <p>
                    <b>Afrofuturo & cultura pop</b>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12 mt-2">
            <Link to="/nos_nos">
              <div className="card">
                <img src={afroLit} alt="Avatar" className="imgBaobaCard2" />
                <div className="container">
                  <p>
                    <b>Tudo que noiz tem e noiz</b>
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
export default MainBaoba;
