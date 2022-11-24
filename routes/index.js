let router = require("express").Router();
let users = require("./users");
let hotels = require("./hotels");
let shows = require("./shows");
let myHotels = require("./myhotels");
let myShows = require("./myshows");

router.use("/api/hola", users), 
router.use("/api/hotels", hotels);
router.use("/api/shows", shows);
router.use("/api/myhotels", myHotels);
router.use("/api/myshows", myShows);

module.exports = router;
