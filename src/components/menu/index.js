import React from 'react';
import Login from "../user/Login";
import Cadastro from "../user/Cadastro";
import Sobre from "../sobre";

function Menu() {
  return( 
 <>
 <div className="header fluid-container">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
   <a className="navbar-brand" href="#">VS Dicas</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav">
       <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(Página atual)</span></a>
       <a className="nav-item nav-link" href="/login" data-toggle="modal" data-target="#LoginModal">Login</a>
       <a className="nav-item nav-link" href="/cadastro" data-toggle="modal" data-target="#CadastroModal">Cadastro</a>
       <a className="nav-item nav-link" href="/sobre">Sobre</a>
     </div>
   </div>
 </nav>
 <Login/>
 <Cadastro/>
 </div>
 <Sobre/>
 </>
  )  ;
}

export default Menu;