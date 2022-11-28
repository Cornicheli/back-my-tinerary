let router= require("express").Router()
let schema = require ('../schemas/shows')
const validator = require('../middlewares/validator')
let {create, update, destroy, getallbyshow}= require("../controllers/show")

router.post("/",create)
router.patch("/:id",update)
router.delete("/:id", destroy)
router.get("/",getallbyshow)
router.post('/',validator(schema), create)

module.exports= router;