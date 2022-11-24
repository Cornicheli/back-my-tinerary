let router = require('express').Router()

let { readSU } = require('../controllers/myShows')

router.get('/', readSU )

module.exports = router