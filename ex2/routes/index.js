var express = require('express');
var router = express.Router();
var env = require('../config/env');
var Planta = require('../controllers/planta');
var axios = require('axios');

/* GET / */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.list()
    .then(plantas => {
      res.render('index', { clist: plantas, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de contratos"})
    })
});


// GET /especies/:nespc 
router.get('/especies/:nespc', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getEspecie(req.params.nespc)
    .then(dados => {
      res.render('especie', { i: dados, d: data }); 
    })
    .catch(erro => res.status(602).json(({erro: erro})))
});

/* GET /:id */
router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Planta.getPlanta(req.params.id)
    .then(dados => {
      res.render('PLANTA', { c: dados, d: data }); 
    })
    .catch(erro => res.status(602).json(({erro: erro})))
});

module.exports = router;
