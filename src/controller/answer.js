const {
  getAnswerByIdQuestionnaireService,
  getAnswerByIdService,
  saveResultByUserService,
  deleteAnswerService,
} = require("../services/answer");

const saveResultByUser = async (req, res) => {
  const {
    idQuestionnaire,
    participantUserName,
    date,
    corrects,
    inCorrects,
    totalScore,
    listAnswerByUser,
  } = req.body;

  console.log({
    idQuestionnaire,
    participantUserName,
    date,
    corrects,
    inCorrects,
    totalScore,
    listAnswerByUser,
  });

  const response = await saveResultByUserService(
    idQuestionnaire,
    participantUserName,
    date,
    corrects,
    inCorrects,
    totalScore,
    listAnswerByUser
  );

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const getAnswerById = async (req, res) => {
  const { id } = req.params;

  const response = await getAnswerByIdService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const getAnswerByIdQuestionnaire = async (req, res) => {
  const { id } = req.params;
  const response = await getAnswerByIdQuestionnaireService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const deleteAnswer = async (req, res) => {
  const { id } = req.params;
  const response = await deleteAnswerService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

module.exports = {
  saveResultByUser,
  getAnswerById,
  getAnswerByIdQuestionnaire,
  deleteAnswer,
};
