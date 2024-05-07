let router = require('express').Router()
let { create, update, destroy, read, readOne } = require('../controllers/hotel')
const schema = require('../schemas/hotels')
const validator = require('../middlewares/validator')



router.post('/', validator(schema), create);
router.patch('/:id', update);
router.delete('/:id', destroy);
router.get('/', read);
router.get('/:id', readOne);


module.exports = router;