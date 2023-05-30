var axios = require('axios')

// Pedido da lista de processos
module.exports.list = () => {
    return axios.get('http://localhost:15030/plantas')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
module.exports.getPlanta = id => {
    return axios.get('http://localhost:15030/plantas/' + id)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
/*
module.exports.getInstituicao = idI => {
    return axios.get('http://localhost:15030/inst/' + idI)
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}
*/