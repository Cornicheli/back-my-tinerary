let router = require("express").Router();
const {
  registrar,
  signin,
  verify,
  loginWithToken,
  unlogin,
} = require("../controllers/auth");
const accountExistsSignUp = require("../middlewares/accountExistsSignUp");
const accountExistsSignIn = require("../middlewares/accountExistsSignIn");
const accountHasBeenVerified = require("../middlewares/accountHasBeenVerified");
const schema = require("../schemas/user");
const validate = require("../middlewares/validator");
const passport = require("../config/passport");
const mustSignin = require("../middlewares/mustSignin");

//primero valido con joi
//luego verifico si la cuenta existe
//y si todo va bien creo el usuario
router.post("/sing-up", validate(schema), accountExistsSignUp, registrar);
//envio el codigo de verificacion por params
//metodo verificar, cambiar la propiedad verificado de false a true
router.get("/verify/:code", verify);
router.post("/sign-in", accountExistsSignIn, accountHasBeenVerified, signin);
router.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  mustSignin,
  loginWithToken
);
router.put(
  "/sign-out",
  passport.authenticate("jwt", { session: false }),
  unlogin
);

module.exports = router;
