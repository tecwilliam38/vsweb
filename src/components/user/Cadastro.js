import React from 'react';

// import { Container } from './styles';

function Cadastro() {
  return (
    <div className="modal fade" id="CadastroModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title font-weight-bold" id="exampleModalLongTitle">Cadastro</h3>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="card m-2 px-3 border-0">
              <form className="form-signin">
                  <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                  <label for="inputNome" className="sr-only">Nome usuário</label>
                  <input type="text" id="inputNome" className="form-control mb-2" placeholder="Digite seu nome completo" required autofocus />
                  <label for="inputEmail" className="sr-only">Endereço de email</label>
                  <input type="email" id="inputEmail" className="form-control mb-2" placeholder="Seu email" required autofocus />
                  <label for="inputTelefone" className="sr-only">Telefone</label>
                  <input type="tel" id="inputTelefone" className="form-control mb-2" placeholder="Digite seu telefone" required autofocus />
                  <label for="inputIdade" className="sr-only">Telefone</label>
                  <input type="date" id="inputIdade" className="form-control mb-2" placeholder="Digite seu telefone" required autofocus />
                  <label for="inputPassword" className="sr-only">Senha</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
                  <div className="checkbox mt-2">
                      <label>
                      <input type="checkbox" value="remember-me"/> Lembrar
                      </label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
              </form>
              </div>
        </div>
        <div className="modal-footer text-center">
         <p className="mt-0 mb-0 text-muted">&copy; 2017-2018</p>
        </div>
      </div>
    </div>
  </div>
  );
  
  }

export default Cadastro;