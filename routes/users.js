let router = require('express').Router()
let {create} = require('../controllers/user')

router.post('/',create)
module.exports = router; 
