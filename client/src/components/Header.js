import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center d-block">
      <a className="navbar-brand ml-sm-auto" href="#">Oney Paulino</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link className="nav-item nav-link" to="/"> Inicio <span className="sr-only">(current)</span></Link>   
        <Link className="nav-item nav-link" to="/images"> Imagenes <span className="sr-only">(current)</span></Link>  
        <Link className="nav-item nav-link" to="/playlist"> Playlist <span className="sr-only">(current)</span></Link>   
        <Link className="nav-item nav-link" to="/integrantes"> Integrantes <span className="sr-only">(current)</span></Link>            
      </div>
  </div>
</nav>   
  );
}

//

export default Header;
