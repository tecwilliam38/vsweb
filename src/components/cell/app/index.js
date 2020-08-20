import React from 'react';
import {Link} from "react-router-dom";
export default function App() {
  return (
    <>
    <div className="h1 text-center mt-4">
        Página de App
    </div>
    <div className="btn btn-secondary text-light">
        <Link to="/celular" className="nav-link nav-item text-center">Voltar</Link>
    </div>
    </>
  );
}
