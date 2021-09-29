const express = require("express");
const {
  createQuestionnaire,
  getQuestionnaireByIdUser,
  deleteQuestionnaire,
  getQuestionnaireById,
  getQuestionnaireByCode,
  getAllQuestionnaires,
} = require("../controller/questionnaire");
const { validateJWT } = require("../middlewares/jwt");

const router = express.Router();

router.post("/createQuestionnaire", [validateJWT], createQuestionnaire);
router.get(
  "/getQuestionnaireByIdUser/:id",
  [validateJWT],
  getQuestionnaireByIdUser
);
router.delete("/deleteQuestionnaire/:id", [validateJWT], deleteQuestionnaire);
router.get("/getQuestionnaireById/:id", [validateJWT], getQuestionnaireById);
router.post("/getQuestionnaireByCode", getQuestionnaireByCode);
router.get("/getAllQuestionnaires", getAllQuestionnaires);

module.exports = router;
