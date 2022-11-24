let users = [
  {
    name: "Eric",
    lastName: "Rodriguez",
    role: "admmin",
    photo:
      "https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000",
    age: 23,
    email: "feric.rodriguez@gmail.com",
    password: "Chau6789",
    code: "hola1234",
    verified: true,
    logged: true,
  },
  {
    name: "Erica",
    lastName: "Perez",
    role: "admmin",
    photo:
      "https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000",
    age: 25,
    email: "eri.perez@gmail.com",
    password: "6789999",
    code: "hola5678",
    verified: true,
    logged: true,
  },
  {
    name: "Leandro",
    lastName: "Gianelli",
    role: "admmin",
    photo:
      "https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000",
    age: 25,
    email: "GianelliLeandr0@gmail.com",
    password: "chaucha",
    code: "pepperoni",
    verified: true,
    logged: true,
  },
  {
    name: "Sebastian",
    lastName: "Fenza",
    role: "admmin",
    photo:
      "https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg?w=2000",
    age: 26,
    email: "SebaFenzaAcedemico@gmail.com",
    password: "RacingTeAmo",
    code: "academia",
    verified: true,
    logged: true,
  },
];

require("dotenv").config();
require("../../config/database");

const User = require("../User");

users.forEach((element) => {
  User.create({
    name: element.name,
    lastName: element.lastName,
    role: element.role,
    photo: element.photo,
    age: element.age,
    email: element.email,
    password: element.password,
    code: element.code,
    verified: element.verified,
    logged: element.logged,
  });
});
