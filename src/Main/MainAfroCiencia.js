import "../css/bootstrap.css";
import "../css/MainAfroCiencia.css";
import AfroCienciaCarrossel from "./afroCienciaCarrossel";

function MainAfroCiencia(params) {
  return (
    <main className="bg-image text-dark">
      <div className="conteiner pt-5">
        <div className="row">
          <div className="col-12">
            <AfroCienciaCarrossel />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainAfroCiencia;
