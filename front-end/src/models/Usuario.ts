class Usuario {
    nome: string
    genero: string
    constructor() {
        this.nome = ''
        this.genero = ''
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
}

export default Usuario