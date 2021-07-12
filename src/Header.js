import "./css/bootstrap.css";
import "./css/Header.css";
import { Link } from "react-router-dom";




function Header() {
  return (

    
    <header className="bg-image" >
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="cabecalho">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              
              <Link to="baoba">
              <li class="nav-item">
                
                 <h3 className="text-light">Retornar para a Baobá</h3>
                
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav> 
      </header> 
          );
}

export default Header;
