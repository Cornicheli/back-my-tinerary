let router = require('express').Router()

let { readHU } = require('../controllers/myHotels')

router.get('/', readHU)

module.exports = router