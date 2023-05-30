var Planta = require("../models/planta");

// GET /Planta
module.exports.list = () => {
    return Planta
    .find() 
     .then(dados=>{
         return dados
     })
     .catch(erro =>{
         return erro
     })
 
}
// GET /Planta/:id
module.exports.getPlanta = id => {
    return Planta
    .findOne({_id: id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}
// /plantas?especie=EEEE:
module.exports.getEspecie = nepc => {
    return Planta
    .find({"Espécie": nepc})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}
// GET /plantas?implant=AAA
module.exports.getPlanta_implant = param => {
    return Planta
        .find({"Implantação": param})
        .then(dados => {
            return dados;
        })
        .catch(erro => {
            return erro;
        });
};

// /plantas/freguesias
module.exports.getFreguesias = () => {
    return Planta
        .distinct("Freguesia")
        .sort() // rever este sort
        .then(f => {
            return f;
        })
        .catch(erro => {
            return erro;
        });
};

module.exports.getEspecieLista = () => {
    return Planta
        .distinct("Espécie")
        .sort()// rever este sort
        .then(f => {
            return f;
        })
        .catch(erro => {
            return erro;
        });
};

module.exports.addPlanta = c => {
    return Planta.create(c)
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}


// DELETE /contracts/:id
module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id:id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

