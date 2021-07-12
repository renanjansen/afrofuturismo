import "../css/bootstrap.css";
import "../css/MainCover.css";
import BtnCover from "../Btns";
import { Link } from "react-router-dom";

function MainCover() {
  return (
    <div
      className="conteiner-fluid bg-image text-center position-relative"
      id="capa"
    >
      <div className="text-light position-absolute mb-5 top-50 start-50">
        <h1>Afrofuturismo</h1>
        <Link to="/baoba">
          <BtnCover name="Embarque na nave" />
        </Link>
      </div>
    </div>
  );
}

export default MainCover;
