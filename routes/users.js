let router = require("express").Router();
const { registrar } = require("../controllers/auth");
const accountExistsSignUp = require("../middlewares/accountExistsSignUp");
const schema = require("../schemas/user");
const validate = require("../middlewares/validator");

//primero valido con joi
//luego verifico si la cuenta existe
//y si todo va bien creo el usuario
router.post("/hola", validate(schema), accountExistsSignUp, registrar);
module.exports = router;
