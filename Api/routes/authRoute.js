var express = require("express");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/login", autenticacaoController.login);

router.get("/logout", autenticacaoController.logout, autenticacaoController.verifyToken);

router.post("/register", autenticacaoController.createUser);

router.put("/updateUser/:userId", autenticacaoController.updateUser, autenticacaoController.verifyToken);

router.put("/updatePassword/:userId", autenticacaoController.updatePassword, autenticacaoController.verifyToken);

router.delete("/deleteUser/:userId", autenticacaoController.deleteUser, autenticacaoController.verifyToken);

router.get("/getUsers", autenticacaoController.getUsers, autenticacaoController.verifyToken);

router.get("/getUser/:userId", autenticacaoController.getUser, autenticacaoController.verifyToken);

router.param("userId", autenticacaoController.getUserId, autenticacaoController.verifyToken);

module.exports = router;
