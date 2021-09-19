const express = require("express");
const {
  registerUser,
  loginUser,
  renewToken,
  getIdByToken,
} = require("../controller/auth");
const { validateJWT } = require("../middlewares/jwt");

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.get("/renewToken", [validateJWT], renewToken);
router.get("/getIdByToken", getIdByToken);

module.exports = router;
