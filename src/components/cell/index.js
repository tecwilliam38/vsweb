import React from 'react';
import {Link} from "react-router-dom";
import ImageStyle from "../../styles/imageStyle";

function Celular() {
  let{playStoreApp, criarEmail, criarFacebook, configurarHeader, instagramHeader, contatoHeader, whatsAppHeader} = ImageStyle;
  return (
      <>
      <div className="container-fluid my-lg-5 my-1">
      <div className="card-group">
        <div className="card shadow-lg rounded m-1">
        <Link to="/celular/app">
          <img className="card-img-top shadow" src={playStoreApp} alt="Imagem de capa do card"/>
          <div className="card-body">
            <h4 className="card-title text-dark font-weight-bold">App</h4>
            <p className="card-text text-dark">Como instalar um aplicativo no celular</p>
          </div>
        </Link>
        </div>
        <div className="card shadow-lg rounded m-1">
        <Link to="/celular/app">
          <img className="card-img-top shadow" src={whatsAppHeader} alt="Imagem de capa do card"/>
          <div className="card-body">
            <h4 className="card-title text-dark font-weight-bold">WhatsApp</h4>
            <p className="card-text text-dark">Como criar uma conta de e-mail, enviar ou receber um e-mail</p>
          </div>
          </Link>
        </div>
        <div className="card shadow-lg rounded m-1">
        <Link to="/celular/app">
          <img className="card-img-top shadow" src={criarEmail} alt="Imagem de capa do card"/>
          <div className="card-body">
            <h4 className="card-title text-dark font-weight-bold">E-Mail</h4>
            <p className="card-text text-dark">Como criar uma conta de e-mail, enviar ou receber um e-mail</p>
          </div>
          </Link>
        </div>
        <div className="card shadow-lg rounded m-1">
        <Link to="/celular/app">
          <img className="card-img-top shadow" src={criarFacebook} alt="Imagem de capa do card"/>
          <div className="card-body">
            <h4 className="card-title text-dark font-weight-bold">Facebook</h4>
            <p className="card-text text-dark">Como usar o Facebook</p>
          </div>
          </Link>
        </div>
        <div className="card shadow-lg rounded m-1">
        <Link to="/celular/app">
          <img className="shadow card-img-top" src={instagramHeader} alt="Imagem de capa do card"/>
          <div className="card-body">
            <h4 className="card-title  text-dark font-weight-bold">Instagram</h4>
            <p className="card-text text-dark">Como usar o Instagram</p>
          </div>
        </Link>
        </div>
        <div className="card shadow-lg rounded m-1">
        <Link to="/celular/contato">
          <img className="card-img-top shadow" src={contatoHeader} alt="Imagem de capa do card"/>
          <div className="card-body">
            <h4 className="card-title text-dark font-weight-bold">Contato</h4>
            <p className="card-text text-dark">Como editar, criar, apagagar ou compartilhar contatos</p>
          </div>
          </Link>
        </div>
        <div className="card shadow-lg rounded m-1">
        <Link to="/celular/app">
          <img className="card-img-top shadow" src={configurarHeader} alt="Imagem de capa do card"/>
          <div className="card-body">
            <h4 className="card-title  text-dark font-weight-bold">Instagram</h4>
            <p className="card-text text-dark">Como usar o Instagram</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
      </>
  );
}

export default Celular;