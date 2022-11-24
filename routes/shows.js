let router= require("express").Router()
let {create, update, destroy, getallbyshow}= require("../controllers/show")

router.post("/",create)
router.patch("/:id",update)
router.delete("/:id", destroy)
router.get("/",getallbyshow)

module.exports= router;