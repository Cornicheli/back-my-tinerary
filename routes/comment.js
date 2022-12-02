let  router = require('express').Router()
let { create , read, update, destroy} = require('../controllers/comment')
const schema = require('../schemas/comments');
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const verify = require('../middlewares/verifyComment')
const model = require('../models/Comment')

router.post('/',passport.authenticate("jwt", { session: false }), validator(schema),create)
router.put('/:id',passport.authenticate("jwt", { session: false }),verify(model), validator(schema),update);
router.delete('/:id',passport.authenticate("jwt", { session: false }),verify(model), destroy);
router.get('/',read)

module.exports = router