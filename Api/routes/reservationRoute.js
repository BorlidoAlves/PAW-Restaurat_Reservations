var express = require("express");
var reservationController = require("../controllers/reservationController");

var router = express.Router();

router.post("/createReservation", reservationController.createReservation);

router.post("/deleteReservation/:id", reservationController.deleteReservation);

router.get("/listReservation");

router.put("/updateReservation/:id", reservationController.updateReservation);

module.exports = router;