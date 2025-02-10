class Repository {
    key: string
    constructor() {
        this.key = "behappy-user"
    }

    salvar(json, callback) {
        let data = JSON.stringify(json)
        localStorage.setItem(this.key, JSON.stringify(data))
        callback()
    }

    obter(sucesso, falha) {
        let data = window.localStorage.getItem(this.key)
        let json = JSON.parse(data!)
        if (json) {
            sucesso(json)
        } else {
            falha()
        }
    }
}

export default Repository