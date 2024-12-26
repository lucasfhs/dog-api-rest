// routes/usuarioRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const controller = new UserController();
router.post("/user", controller.register);
router.get("/user/:id", controller.get);
module.exports = router;
