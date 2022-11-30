let router = require('express').Router()
const model = require('../models/Comment')
const passport = require('../config/passport')
let { create, read } = require('../controllers/comment')

router.post('/', passport.authenticate("jwt", { session: false }), create);
router.get('/:id', read);

module.exports = router;