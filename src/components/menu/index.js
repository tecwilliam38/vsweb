import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";

function Menu() {
  return( 
 <>
 <div className="header fluid-container">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark text-light">
        <Link to="/sobre" className="navbar-brand font-weight-bold">VS Dicas</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/login"  data-toggle="modal" data-target="#LoginModal" >Login</Link>
            <Link className="nav-item nav-link" to="/cadastro"  data-toggle="modal" data-target="#CadastroModal" >Cadastro</Link>
            <Link className="nav-item nav-link" to="/sobre" >Sobre</Link>
          </div>
        </div>
    </nav>
 </div>
 </>
 
  )  ;
}

export default Menu;