var express = require('express')
var router = express.Router()
var bittrex = require ('node.bittrex.api')

router.get('/', function(req, res) {
  res.send('hell')
})

module.exports = router
