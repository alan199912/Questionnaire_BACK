const express = require("express");
const { validateJWT } = require("../middlewares/jwt");
const {
  saveResultByUser,
  getAnswerById,
  getAnswerByIdQuestionnaire,
  deleteAnswer,
} = require("../controller/answer");

const router = express.Router();

router.post("/saveResultByUser", saveResultByUser);
router.get("/getAnswerById/:id", getAnswerById);
router.get(
  "/getAnswerByIdQuestionnaire/:id",
  [validateJWT],
  getAnswerByIdQuestionnaire
);
router.delete("/deleteAnswer/:id", [validateJWT], deleteAnswer);

module.exports = router;
