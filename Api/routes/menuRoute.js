var express = require("express");
var menuController = require("../controllers/menuController");

var router = express.Router();

router.post("/createMenu", menuController.createMenu);

router.post("/deleteMenu/:id", menuController.deleteMenu);

router.get("/listMenu", menuController.listMenu);

router.put("/updateMenu/:id", menuController.updateMenu);

module.exports = router;