import Avatar from "./Avatar.ts"
import Repository from "../infrastructure/Repository.ts"

const repository = new Repository()

class Usuario {
    nome: string
    genero: string
    avatar: Avatar
    constructor() {
        this.nome = ''
        this.genero = ''
        this.avatar = Avatar.obterTodos()[0]
    }

    validarNome() {
        if (
            this.nome.length !== 0 &&
            this.nome.length <= 40) {
                return true
            } else {
                return false
            }
    }

    validarGenero() {
        return ['m', 'f'].some(param => {
            return this.genero === param
        })
    }

    salvar(callback) {
        repository.salvar(this, callback)
    }

    static obter(sucesso, falha) {
        repository.obter(json => {
            let usuario = new Usuario()
            usuario.nome = json.nome
            usuario.genero = json.genero
            usuario.avatar = new Avatar(
                json.avatar.index,
                json.avatar.descricao
            )
            sucesso(usuario)
        }, falha)
    }
}

export default Usuario