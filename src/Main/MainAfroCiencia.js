import "../css/bootstrap.css";
import "../css/MainAfroCiencia.css";
import AfroCienciaCarrossel from "./afroCienciaCarrossel";

function MainAfroCiencia(params) {
    return(
        
                <div className="row">
                    <div  className="col-12 w-100" id="imgs"> 
                        <AfroCienciaCarrossel />
                    </div>
                </div>
                
        
        
    );
}

export default MainAfroCiencia; 