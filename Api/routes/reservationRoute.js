var express = require("express");
var reservationController = require("../controllers/reservationController");
var autenticacaoController = require("../controllers/authController");
const { updateStatus } = require("../controllers/reservationController");

var router = express.Router();

router.post("/createReservation/:userId", reservationController.createReservation, autenticacaoController.verifyToken);

router.post("/deleteReservation/:id", reservationController.deleteReservation, autenticacaoController.verifyToken);

router.get("/listReservationUser/:userId", reservationController.getReservationUser, autenticacaoController.verifyToken);

router.put("/updateReservation/:id", reservationController.updateReservation, autenticacaoController.verifyToken);

router.put("/updateStatus/:id", reservationController.updateStatus);

router.get("/getAverageReserv", reservationController.getAverageReserv);

router.get("/getAveragePessoas", reservationController.getAveragePessoas);

router.get("/getAverageCancel", reservationController.getAverageCancel);

router.param("userId", autenticacaoController.getUserId);

module.exports = router;