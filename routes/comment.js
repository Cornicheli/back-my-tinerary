let  router = require('express').Router()
let { create , read} = require('../controllers/comment')
const schema = require('../schemas/comments');
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')

router.post('/',passport.authenticate("jwt", { session: false }), validator(schema),create)
router.get('/',read)

module.exports = router