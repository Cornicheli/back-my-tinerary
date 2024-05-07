let router = require('express').Router();

let { read } = require('../controllers/myHotels');

router.get('/', read)

module.exports = router