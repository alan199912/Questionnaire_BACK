const express = require("express");
const { confirmationEmail } = require("../controller/email");

const router = express.Router();

router.get("/confirmationEmail/:encodeToken", confirmationEmail);

module.exports = router;
