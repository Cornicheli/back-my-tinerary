const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("./accountVerificationEmail");
const { userSignedOutResponse } = require("../middlewares/responses");

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

  verificar: async (req, res, next) => {
    //método para que un usuario verifique su cuenta
    //requiere por params el código a verificar
    //busca un usuario que coincida el código
    //y cambia verificado de false a true
    //si tiene éxito debe redirigir a alguna página (home, welcome, login)
    //si no tiene éxito debe responder con el error
    try {
    } catch (error) {
      next(error);
    }
  },

  ingresar: async (req, res, next) => {
    //método para que un usuario inicie sesión
    //luego de pasar por todas las validaciones:
    //desestructura la contraseña y el objeto user que vienen en el req
    //compara las contraseñas
    //si tiene éxito debe generar y retornar un token y debe redirigir a alguna página (home, welcome)
    //además debe cambiar online de false a true
    //si no tiene éxito debe responder con el error
    try {
    } catch (error) {
      next(error);
    }
  },

  ingresarConToken: async (req, res, next) => {
    //método para que un usuario que ya inicio sesión no la pierda al recargar
    //solo para usuarios registrados en nuestra app (social loguin se maneja en front)
    //luego de pasar por todas las validaciones:
    //debe responder con los datos del usuario
    try {
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
