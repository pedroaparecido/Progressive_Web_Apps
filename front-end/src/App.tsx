import React from 'react';
import './App.css';
import Header from './components/Header/Header.tsx';
import NovoUsuario from './components/NovoUsuário/NovoUsuario.tsx';
import Toast from './components/Toast/Toast.tsx'
import Usuario from './models/Usuario.ts';

class App extends React.Component <any, any> {
  constructor(props) {
    super(props)
    
    Usuario.obter(usuario => {
      this.state = {
        usuario: usuario
      }
    }, () => {
      this.state = {
        usuario: undefined
      }
    })
  }

  msgNovoUsuario(usuario) {
    const toastRef = React.createRef<any>()
    let genero = usuario.genero == 'm' ? 'o' : 'a'
    toastRef.current?.sucesso(
      `Seja bem vind${genero} ${usuario.nome}`
    )
  }

  renderizarNovoUsuario() {
    let usuario = this.state.usuario
    if (usuario) {
      return(
        <div style={{ marginTop: '140px', textAlign: 'center' }}>
          <b>Usuário obtido do <i>localStorage</i></b><br/>
          {`${usuario.nome}, ${usuario.avatar}`}
        </div>
      )
    } else {
      const toastRef = React.createRef<any>()
      return(
        <NovoUsuario
          onSubmit={usuario => {
            usuario.salvar(() => {
              this.setState({
                usuario: usuario
              }, () => {
                this.msgNovoUsuario(usuario)
              })
            })
          }}
          erro={msg => toastRef.current?.erro(msg)}
        />
      )
    }
  }

  

  render() {
    const toastRef = React.createRef<any>()
    return (
      <div>
        <Header />
        {this.renderizarNovoUsuario()}
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default App;
