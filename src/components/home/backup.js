import React from 'react';
import ImageStyle from "../../styles/imageStyle";
//import "../home/home.css";
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
  let {card_01, card_02, card_03} = ImageStyle;
  return (
      <>
        <div data-interval="4000" id="carouselExampleIndicators" className="carousel slide carousel-fade position-relative mt-5" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block h-100 w-100" src={card_01} alt="Primeiro Slide" />
              <Link className="nav-item nav-link" to="/celular">
                  <div class="carousel-caption d-md-block">
                    <h1>Celular</h1>
                    <p className="lead">Como instalar aplicativos, criar uma conta de e-mail, usar o WhatsApp</p>
                  </div>
              </Link>
            </div>
            <div className="carousel-item">
              <img className="d-block h-100 w-100" src={card_02} alt="Segundo Slide"/>
              <Link className="nav-item nav-link" to="/computador">
              <div class="carousel-caption d-md-block">
                <h1>Computador</h1>
                <p className="lead">Como instalar aplicativos, criar uma conta de e-mail, usar o WhatsApp</p>
              </div>
              </Link>
            </div>
            <div className="carousel-item">
              <img className="d-block h-100 w-100" src={card_03} alt="Terceiro Slide"/>
              <Link className="nav-item nav-link" to="/tv">
              <div class="carousel-caption d-md-block">
                <h1>Smart Tv</h1>
                <p className="lead">Como instalar aplicativos, criar uma conta de e-mail, usar o WhatsApp</p>
              </div>
              </Link>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Próximo</span>
          </a>
        </div>
      </>
  );
}

export default Home;