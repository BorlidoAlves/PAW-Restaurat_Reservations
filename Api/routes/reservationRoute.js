var express = require("express");
var reservationController = require("../controllers/reservationController");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/createReservation/:userId", reservationController.createReservation, autenticacaoController.verifyToken);

router.post("/deleteReservation/:id", reservationController.deleteReservation, autenticacaoController.verifyToken);

router.get("/listReservationUser/:userId", reservationController.getReservationUser, autenticacaoController.verifyToken);

router.put("/updateReservation/:id", reservationController.updateReservation, autenticacaoController.verifyToken);

router.param("userId", autenticacaoController.getUserId);

module.exports = router;