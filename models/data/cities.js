const cities1 = [
    {
  
      name: "Amsterdam",
      continent: "Europa",
      photo:
        "https://media.traveler.es/photos/61375f04ea50dbd37eade9a7/master/w_1920%2Cc_limit/213200.jpg",
      population: 1000000,
      userId: "636f1edc14f79b76f5e442bb",
    },
    {

      name: "Barcelona",
      continent: "Europa",
      photo:
        "https://media.traveler.es/photos/61375f03ba2a75fcba4bdd3b/master/w_1920%2Cc_limit/213172.jpg",
      population: 1200000,
      userId: "636f1edc14f79b76f5e442bc",
    },
    {

      name: "Beijing",
      continent: "Asia",
      photo:
        "https://media.traveler.es/photos/61375f03ea50dbd37eade9a3/master/w_1920%2Cc_limit/213176.jpg",
      population: 1300000,
      userId: "636f1edc14f79b76f5e442ba",
    },
    {

      name: "Beirut",
      continent: "Asia",
      photo:
        "https://media.traveler.es/photos/61375f0332d932c80fcb80f5/master/w_1920%2Cc_limit/111206.jpg",
      population: 1400000,
      userId: "636f1edc14f79b76f5e442b9",
    },
    {
      name: "Bergen",
      continent: "Europa",
      photo:
        "https://media.traveler.es/photos/61375f04f00fb1ba8d86679e/master/w_1920%2Cc_limit/213177.jpg",
      population: 1500000,
      userId: "636f1edc14f79b76f5e442bb",
    },
    {
      name: "Brujas",
      continent: "Europa",
      photo:
        "https://media.traveler.es/photos/61375f03d7c7024f9175dbef/master/w_1920%2Cc_limit/213211.jpg",
      population: 1600000,
      userId: "636f1edc14f79b76f5e442bc",
    },
    {
      name: "Budapest",
      continent: "Europa",
      photo:
        "https://media.traveler.es/photos/61375f04ea50dbd37eade9a6/master/w_1920%2Cc_limit/213213.jpg",
      population: 1700000,
      userId: "636f1edc14f79b76f5e442ba",
    },
    {
      name: "Buenos Aires",
      continent: "America",
      photo:
        "https://media.traveler.es/photos/61375f0472cad4b2dbd5d0d2/master/w_1920%2Cc_limit/213180.jpg",
      population: 1800000,
      userId: "636f1edc14f79b76f5e442b9",
    },
    {

      name: "Ciudad Del Cabo",
      continent: "Africa",
      photo:
        "https://media.traveler.es/photos/61375f04c4f3d957866678a5/master/w_1920%2Cc_limit/213190.jpg",
      population: 1900000,
      userId: "636f1edc14f79b76f5e442bb",
    },
    {
    
      name: "Cartagena",
      continent: "America",
      photo:
        "https://media.traveler.es/photos/61375f04c4f3d957866678a8/master/w_1920%2Cc_limit/213216.jpg",
      population: 2000000,
      userId: "636f1edc14f79b76f5e442bc",
    },
    {
      name: "Chiang Mai",
      continent: "Asia",
      photo:"https://media.traveler.es/photos/61375f0432d932c80fcb80f9/master/w_1920%2Cc_limit/213175.jpg",
      population: 2200000,
      userId: "636f1edc14f79b76f5e442b9",
    },
]
require('dotenv').config()
require('../../config/database')

const Cities2 = require('../City')

cities1.forEach(element=>{
    Cities2.create ({

        name:element.name,
        continent:element.continent,
        photo:element.photo,
        population:element.population,
        userId:element.userId,
    })
})