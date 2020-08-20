import React from 'react';
import ImageStyle from "../../styles/imageStyle";
//import "../home/home.css";
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
  let {card_01, card_02, card_03, cardcell, cardpc, cardtv} = ImageStyle;
  return (
      <>
      <div className="container mt-2">
      <div className="row">
        <div className="card-deck">
          <div className="col">
            <div className="card shadow-lg rounded">
            <Link className="nav-link nav-item paddingSize hoverzoom" to="/celular">
              <img className="shadow card-img-top" src={cardcell} alt="Imagem de capa do card" title="Clique aqui para acesar a área de Celular" />
              <div className="card-body zoom">
                <h2 className="card-title text-dark font-weight-bold text-center" title="Celular">Celular</h2>
                <p className="lead text-dark text-justify">Como instalar aplicativos, criar uma conta de e-mail, usar o WhatsApp.</p>
              </div>
            </Link>
        </div>
        </div>
        <div className="col">
            <div className="card shadow-lg rounded">
              <Link className="nav-link nav-item paddingSize" to="/computador">
              <img className="shadow card-img-top" src={cardpc} alt="Imagem de capa do card" title="Clique aqui para acesar a área de Computador" />
              <div className="card-body">
                <h2 className="card-title text-dark font-weight-bold text-center" title="Computador">Computador</h2>
                <p className="lead text-dark text-justify">Como instalar e desinstalar programas, assistir filmes, navegar na internet, usar redes
                sociais.</p>
              </div>
              </Link>
            </div>
        </div>
        <div className="col">
            <div className="card shadow-lg rounded">
              <Link className="nav-link nav-item paddingSize" to="/tv">
              <img className="shadow card-img-top" src={cardtv} alt="Imagem de capa do card" title="Clique aqui para acesar a área de SmartTV" />
              <div className="card-body">
                <h2 className="card-title text-dark font-weight-bold text-center">Smat Tv</h2>
                <p className="lead text-dark text-justify">Como configurar uma Smart Tv, sintonizar canais, usar a Tv a cabo, conectar um dispositivo.</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
        </div>
      </>
  );
}

export default Home;
  