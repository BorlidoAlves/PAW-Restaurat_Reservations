var express = require("express");
var reservationController = require("../controllers/reservationController");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/createReservation/:userId", reservationController.createReservation, autenticacaoController.verifyToken);

router.delete("/deleteReservation/:id", reservationController.deleteReservation, autenticacaoController.verifyToken);

router.get("/listReservationUser/:userId", reservationController.getReservationUser, autenticacaoController.verifyToken);

router.get("/listReservations", reservationController.getReservations, autenticacaoController.verifyToken);

router.put("/updateReservation/:id", reservationController.updateReservation, autenticacaoController.verifyToken);

router.put("/updateStatus/:id", reservationController.updateStatus, autenticacaoController.verifyToken);

router.post("/getAverageReserv", reservationController.getAverageReserv, autenticacaoController.verifyToken);

router.post("/getAveragePessoas", reservationController.getAveragePessoas, autenticacaoController.verifyToken);

router.post("/getAverageCancel", reservationController.getAverageCancel, autenticacaoController.verifyToken);

router.param("userId", autenticacaoController.getUserId);

module.exports = router;