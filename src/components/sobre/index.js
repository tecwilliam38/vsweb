import React from 'react';
import {Link} from "react-router-dom";

function Sobre() {
  return (
      <>      
      <div className="position-relative overflow-hidden border border-secondary rounded text-center bg-gradient-dark text-dark">
      <div className="col-md-10  mx-auto ">
        <h1 className="display-5 p-0 m-0 font-weight-bold">VS Dicas</h1>
  <p className="lead font-weight-normal text-justify" style={{textIndent:"4em"}} >VS Dicas é um aplicativo para celulares que foi criado com a intenção de
  ajudar as pessoas. Depois de tanto analisar as queixas de pessoas com dificuldade em tecnologia (e isso inclui diversas faixas etárias),
  resolvemos desenvolver uma ferramenta que proporcionasse a qualquer pessoa o minimo de capacidade para usar equipamentos como SmartPhone, Computadores
  e Notebooks, Tablets, Smart Tvs. Porém esperamos ajudar em outras tecnologias.<br/>  
  Em breve disponibizaremos outras áreas para aprendizado.Caso você tenha interesse em contribuir com nossa pesquisa e desenvolvimento de outras aplicações entre em contato
  conosco o telefone é (21) 96920-3932.
  Ou se preferir ajudar financeiramente pode realizar um depósito em conta corrente:  
  </p>
  <div className="row" style={{justifyContent:"center"}}>
  <p className="border border-secondary rounded font-weight-normal text-justify mx-1 col-md-3">
  <p className="lead font-weight-bold text-justify">
  Banco Bradesco:
  </p>
  <p className="lead" style={{textIndent:"2em"}} >
   Agência: 7044 digito 0 
  </p>
  <p className="lead" style={{textIndent:"2em"}} >
   Conta 0027154 digito 3
  </p>
  </p>
  <p className="border border-secondary rounded font-weight-normal text-justify mx-1 col-md-3">
  <p className="lead font-weight-bold text-justify">
  Banco Santander:
  </p>
  <p className="lead" style={{textIndent:"2em"}} >
   Agência: 3306
  </p>
  <p className="lead" style={{textIndent:"2em"}} >
   Conta 01009770 digito 8
  </p>
  </p>
  </div>
        <Link className="btn btn-outline-secondary" to="/">Home</Link>
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
      </>
  );
}

export default Sobre;