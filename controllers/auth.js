const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("./accountVerificationEmail");
const jwt = require("jsonwebtoken");
const {
  userSignedOutResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
} = require("../middlewares/responses");
const { response } = require("express");
const { message } = require("../schemas/user");

const controlador = {
  registrar: async (req, res, next) => {
    //método para que un usuario se registre
    //luego de pasar por todas las validaciones:
    //desestructura el cuerpo
    let { name, lastName, photo, age, email, password, role } = req.body;
    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10);
    //hashea la contraseña con bcryptjs (npm i bcryptsjs)
    //define las propiedades "extras" que necesite (online, codigo y verificado)
    //crea el usuario
    //envía mail de verificación (con transportador)
    //retorna la respuesta correcta
    try {
      await User.create({
        name,
        lastName,
        photo,
        age,
        role,
        email,
        password,
        verified,
        logged,
        code,
      });
      //envia mail de verificacion (con transportador)
      await accountVerificationEmail(email, code);
      return userSignedOutResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verify: async (req, res, next) => {
    //método para que un usuario verifique su cuenta
    //requiere por params el código a verificar
    const { code } = req.params;
    //busca un usuario que coincida el código
    //y cambia verificado de false a true
    //si tiene éxito debe redirigir a alguna página (home, welcome, login)
    //si no tiene éxito debe responder con el error
    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        return res.redirect("http://localhost:3001/");
      }
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  signin: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    //método para que un usuario inicie sesión
    //luego de pasar por todas las validaciones:
    //desestructura la contraseña y el objeto user que vienen en el req
    //compara las contraseñas
    //si tiene éxito debe generar y retornar un token y debe redirigir a alguna página (home, welcome)
    //además debe cambiar online de false a true
    //si no tiene éxito debe responder con el error
    try {
      const checkPassword = bcryptjs.compareSync(password, user.password);
      if (checkPassword) {
        const userDB = await User.findOneAndUpdate({ _id: user.id }, { online: true }, {new:true});
        const token = jwt.sign(
          {
            id: userDB._id,
            name: userDB.name,
            photo: userDB.photo,
            online: userDB.online,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 168 }
        );
        return res.status(200).json({
          response: { user, token },
          succes: true,
          message: "Welcome" + user.name,
        });
      }
      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  loginWithToken: async (req, res, next) => {
    //método para que un usuario que ya inicio sesión no la pierda al recargar
    //solo para usuarios registrados en nuestra app (social loguin se maneja en front)
    //luego de pasar por todas las validaciones:
    //debe responder con los datos del usuario
    let { user } = req;
    try {
      return res.json({
        response: {
          user: {
            name: user.name,
            photo: user.photo,
          },
        },
        succes: true,
        message: "Welcome !" + user.name,
      });
    } catch (error) {
      next(error);
    }
  },

  salir: async (req, res, next) => {
    //método para que un usuario cierre sesión (cambia online de true a false)
    //solo para usuarios registrados en nuestra app (social logout se maneja en front)
    //si tiene éxito debe debe cambiar online de true a false
    //si no tiene éxito debe responder con el error
    try {
    } catch (error) {
      next(error);
    }
  },
};

module.exports = controlador;
