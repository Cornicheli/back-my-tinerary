const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("./accountVerificationEmail");
const jwt = require("jsonwebtoken");
const {
  userSignedUpResponse,
  userSignedOutResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
} = require("../config/responses");
const { response } = require("express");
const { message } = require("../schemas/user");

const controlador = {
  registrar: async (req, res, next) => {
    let { name, lastName, photo, age, email, user, password } = req.body;
    let role = "user";
    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10);

    try {
      await User.create({
        name,
        lastName,
        photo,
        age,
        user,
        email,
        password,
        role,
        verified,
        logged,
        code,
      });
      await accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verify: async (req, res, next) => {
    const { code } = req.params;
    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        return res.redirect("http://localhost:3000/");
      }
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  signin: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    try {
      const checkPassword = bcryptjs.compareSync(password, user.password);
      if (checkPassword) {
        const userDB = await User.findOneAndUpdate(
          { _id: user.id },
          { logged: true },
          { new: true }
        );
        const token = jwt.sign(
          {
            id: userDB._id,
            name: userDB.name,
            photo: userDB.photo,
            logged: userDB.logged,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 168 }
        );
        return res.status(200).json({
          response: { user, token },
          success: true,
          message: "Welcome" + user.name,
        });
      }
      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  loginWithToken: async (req, res, next) => {
    let { user } = req;
    try {
      return res.json({
        response: {
          user: {
            name: user.name,
            photo: user.photo,
            role: user.role,
            logged: user.logged,
          },
        },
        success: true,
        message: "Welcome !" + user.name,
      });
    } catch (error) {
      next(error);
    }
  },

  unlogin: async (req, res, next) => {
    try {
      const { id } = req.user;
      await User.findOneAndUpdate({ _id: id }, { logged: false });
      return userSignedOutResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  readUserData: async (req, res, next) => {
    let { id } = req.params
    try {
      let userid = await User.findById(id)
      if(userid){
      res.status(200).json({
        response: userid,
        success: true,
        message: 'user data founded'
      })}
      else{
        res.status(404).json({
        success: false,
        message: 'user not found'
      })}
    } catch (err) {
      next(err)
    }
  },
  updateUserData: async (req, res, next) => {
    let { id } = req.params
    try {
      let user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
      user ?
        res.status(200).json({
          response: user,
          success: true,
          message: 'Your profile was update succesfully.'
        }) :
        res.status(404).json({
          success: false,
          message: 'Profile not found.'
        })
    } catch (err) {
      next(err)
    }
  },

};

module.exports = controlador;