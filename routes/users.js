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
const schemasignin = require("../schemas/signin");

router.post("/", validate(schema), accountExistsSignUp, registrar);
router.get("/verify/:code", verify);
router.post(
  "/signin",
  validate(schemasignin),
  accountExistsSignIn,
  accountHasBeenVerified,
  signin
);
router.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  mustSignin,
  loginWithToken
);
router.put(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  unlogin
);

module.exports = router;
