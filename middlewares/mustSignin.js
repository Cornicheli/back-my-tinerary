const mustSignInResponse = require("../config/responses");

function mustSignin(req, res, next) {
  if (req.user) {
    return next();
  }
  return mustSignInResponse();
}
module.exports = mustSignin;
