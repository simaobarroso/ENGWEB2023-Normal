var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta');


/* GET GET /plantas?especie=EEEE | GET /plantas?implant=AAA */
router.get('/plantas', function(req, res) {
  if (req.query.especie || req.query.implant) {
    if (req.query.especie) {
      Planta.getEspecie(req.query.especie)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de animais da especie pedida"})
      })
    } else if (req.query.implant) {
      Planta.getPlanta_implant(req.query.implant)
        .then(dados => {
          res.status(200).json(dados)
        })
        .catch(erro => {
          res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de implantes daquele ano "})
      })
    } else {
      res.status(520).json({mensagem: "Query inválida."})
    }
  } else {
    
    Planta.list()
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de contratos."})
      })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  Planta.getFreguesias()
    .then(planta => {
      res.jsonp(planta);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na lista de freguesias"})
    })
});

router.get('/plantas/especies', function(req, res, next) {
  Planta.getEspecieLista()
    .then(planta => {
      res.jsonp(planta);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na lista de plantas"})
    })
});


router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
    .then(planta => {
      res.jsonp(planta);
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do planta pretendido"})
    })
});

// POST /plantas
router.post('/plantas',(req,res) => {
  Planta.addPlanta(req.body)
    .then(dados => {
      res.status(201).json(dados)
    })
    .catch(erro => {
      res.status(603).json({erro:erro,message: "Erro a adicionar uma planta."})
    })

})

// DELETE /plantas/:id
router.delete('/plantas/:id',(req,res) => {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.json(dados)
    })
    .catch(erro => {
      res.status(605).json({erro:erro,message: "Erro a apagar o planta."})
    })

})


module.exports = router;
