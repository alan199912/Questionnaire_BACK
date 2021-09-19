const express = require("express");
const { getUserById } = require("../controller/user");
const { validateJWT } = require("../middlewares/jwt");

const router = express.Router();

router.get("/getUserById/:id", [validateJWT], getUserById);

module.exports = router;
