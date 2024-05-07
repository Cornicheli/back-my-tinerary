let router = require("express").Router()
let schema = require('../schemas/shows')
const validator = require('../middlewares/validator')
const passport = require("../config/passport");
let { create, update, destroy, getallbyshow, readComments } = require("../controllers/show");
const { session } = require("../config/passport");

router.post("/", create);
router.patch("/:id", update)
router.delete("/:id", destroy);
router.get("/", getallbyshow);
router.post('/', validator(schema), create);

module.exports = router;