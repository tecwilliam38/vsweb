import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import './App.css';
import Menu from './components/menu';
import Banner from "./components/banner";
import Routes from "./pages/routes";
import Login from "./components/user/Login";
import Cadastro from "./components/user/Cadastro";

function App() {
  return (
   <BrowserRouter>
      <Banner/>
      <Menu /> 
      <Routes/>
      <Login/>
      <Cadastro/>
   </BrowserRouter>
  );
}

export default App;
