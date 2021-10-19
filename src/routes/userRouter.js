const express = require("express");
const { getUserById, updatePassword } = require("../controller/user");
const { validateJWT } = require("../middlewares/jwt");

const router = express.Router();

router.get("/getUserById/:id", [validateJWT], getUserById);
router.post("/updatePassword/:id", [validateJWT], updatePassword);

module.exports = router;
