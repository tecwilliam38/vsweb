import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from "../../components/user/Login";
import Cadastro from "../../components/user/Cadastro";
import Sobre from "../../components/sobre";
import Home from "../../components/home";
import Celular from "../../components/cell";
import Computador from "../../components/pc/index.js";
import Tv from "../../components/tv";
import App from "../../components/cell/app";
import Contato from "../../components/cell/contato";


export default function Routes() {
  return (
    <Switch>
      <Home path="/" exact component={Home}/>
      <Route path="/login" exact component={Login} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/sobre" exact component={Sobre} />
      <Route path="/celular" exact component={Celular} />
      <Route path="/computador" exact component={Computador} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/celular/app" exact component={App}/>
      <Route path="/celular/contato" exact component={Contato}/>
    </Switch>
  );
}