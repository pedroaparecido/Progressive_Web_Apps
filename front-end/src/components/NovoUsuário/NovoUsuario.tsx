import React from 'react'
import Label from '../Label/Label.tsx'
import Input from '../Input/Input.tsx'
import GenderImage from '../GenderImage/GenderImage.tsx'
import GenderSelector from '../GenderSelector/GenderSelector.tsx'

class NovoUsuario extends React.Component <any, any> {
    constructor(props){
        super(props)
        this.state = {
            usuario: {
                nome: '',
                genero: ''
            },
            validacao: {
                nomeInvalido: false,
                generoInvalido: false
            }
        }
    }

    atualizarNome(e) {
        let usuario = this.state.usuario
        usuario.nome = e.target.value
        this.setState({
            usuario: usuario
        })
    }

    atualizarGenero(e, genero) {
        e.preventDefault()
        let usuario = this.state.usuario
        usuario.genero = genero
        this.setState({
            usuario: usuario
        })
    }

    render() {
        return(
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label for="nome" label="Quem é você?" valorInvalido={this.state.nomeInvalido} />
                    <Input
                        id="Nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly
                        valorInvalido={this.state.nomeInvalido}
                        defaultValue="Pedro"
                    />
                    <GenderSelector
                        valorInvalido={this.state.validacao.generoInvalido}
                        genero={this.state.usuario.genero}
                        atualizarGenero={this.atualizarGenero.bind(this)}
                    />
                </form>
            </div>
        )
    }
}

export default NovoUsuario