import React from 'react'
import Label from '../Label/Label.tsx'
import Input from '../Input/Input.tsx'
import GenderSelector from '../GenderSelector/GenderSelector.tsx'
import Usuario from '../../models/Usuario.ts'
import Button from '../Button/Button.tsx'
import Toast from '../Toast/Toast.tsx'
import ImageScroller from '../ImageScroller/ImageScroller.tsx'
import Avatar from '../../models/Avatar.ts'
import image from '../Image/img/avatars.png'

class NovoUsuario extends React.Component <any, any> {
    constructor(props){
        super(props)
        
        this.state = {
            usuario: new Usuario(),
            validacao: {
                nomeInvalido: false,
                generoInvalido: false
            },
            primeiraVisaoCompleta: false
        }
    }

    validar(e) {
        e.preventDefault()
        let usuario = this.state.usuario
        let validacao = this.state.validacao
        validacao.nomeInvalido = ! usuario.validarNome()
        validacao.generoInvalido = ! usuario.validarGenero()
        
        let mensagem = ''
        let primeiraVisaoCompleta = false
        if(validacao.nomeInvalido && validacao.generoInvalido) {
            mensagem = 'Os campos nome e gênero estão inválidos!'
        } else if (validacao.nomeInvalido) {
            mensagem = 'Seu nome está inválido!'
        } else if (validacao.generoInvalido) {
            mensagem = 'Selecione seu gênero!'
        } else {
            primeiraVisaoCompleta = true
        }
        if (!primeiraVisaoCompleta) {
            this.props.erro(mensagem)
        }

        this.setState({
            validacao: validacao,
            primeiraVisaoCompleta: primeiraVisaoCompleta
        })
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
        usuario.avatar = Avatar.obterTodos()[0]
        this.setState({
            usuario: usuario
        })
    }

    renderizarNome() {
        return(
            <section>
                <Label
                    for="nome"
                    texto="Quem é você?"
                    valorInvalido={this.state.validacao.nomeInvalido}
                />
                <Input
                    id="nome"
                    placeholder="Digite seu nome"
                    maxLength="40"
                    readOnly={this.state.primeiraVisaoCompleta}
                    valorInvalido={this.state.validacao.nomeInvalido}
                    defaultValue={this.state.usuario.nome}
                    onChange={this.atualizarNome.bind(this)}
                />
            </section>
        )
    }

    renderizarGenero() {
        if (this.state.primeiraVisaoCompleta) {
            return null
        } else {
            return(
                <section>
                    <Label
                        texto="Seu gênero."
                        valorInvalido={this.state.validacao.generoInvalido}
                    />
                    <GenderSelector
                        valorInvalido={this.state.validacao.generoInvalido}
                        genero={this.state.usuario.genero}
                        atualizarGenero={this.atualizarGenero.bind(this)}
                    />
                </section>
            )
        }
    }

    renderizarBotoes() {
        if (this.state.primeiraVisaoCompleta) {
            return(
                <section>
                    <Button
                        texto="Voltar"
                        onClick={e => {
                            e.preventDefault()
                            this.props.onSubmit(this.state.usuario)
                            let usuario = this.state.usuario
                            usuario.avatar = Avatar.obterTodos()[0]
                            this.setState({
                                usuario: usuario,
                                primeiraVisaoCompleta: false
                            })
                        }}
                    />
                    <Button
                        principal
                        texto="Salvar"
                        onClick={e => {
                            e.preventDefault()
                            this.props.onSubmit(this.state.usuario)
                        }}
                    />
                </section>
            )
        } else {
            return(
                <section>
                    <Button
                        principal
                        texto="Próximo"
                        onClick={this.validar.bind(this)}
                    />
                </section>
            )
        }
    }

    renderizarAvatar() {
        if (this.state.primeiraVisaoCompleta) {
            return(
                <section>
                    <Label
                        texto="Escolha seu avatar"
                    />
                    <ImageScroller
                        arquivo={image}
                        eixoY={(this.state.usuario.genero == 'm' ? 0 : 1)}
                        elementos={Avatar.obterTodos()}
                        selecionado={this.state.usuario.avatar}
                        onChange={avatar => {
                            let usuario = this.state.usuario
                            usuario.avatar = avatar
                            this.setState({
                                usuario: usuario
                            })
                        }}
                    />
                </section>
            )
        } else  {
            return null
        }
    }

    render() {
        return(
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    {this.renderizarNome()}
                    {this.renderizarGenero()}
                    {this.renderizarAvatar()}
                    {this.renderizarBotoes()}
                </form>
            </div>
        )
    }
}

export default NovoUsuario