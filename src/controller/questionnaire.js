const {
  createQuestionnaireService,
  getQuestionnaireByIdUserService,
  deleteQuestionnaireService,
  getQuestionnaireByIdService,
  getQuestionnaireByCodeService,
  getAllQuestionnairesService,
} = require("../services/questionnaire");

const createQuestionnaire = async (req, res) => {
  const {
    idUser,
    title,
    description,
    code,
    numberQuestions,
    questionData,
    createdAt,
  } = req.body;

  console.log({
    idUser,
    title,
    description,
    code,
    numberQuestions,
    questionData,
    createdAt,
  });

  const response = await createQuestionnaireService(
    idUser,
    title,
    description,
    code,
    numberQuestions,
    questionData,
    createdAt
  );

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const getQuestionnaireByIdUser = async (req, res) => {
  const { id } = req.params;

  console.log({ id });

  const response = await getQuestionnaireByIdUserService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const deleteQuestionnaire = async (req, res) => {
  const { id } = req.params;

  console.log({ id });

  const response = await deleteQuestionnaireService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const getQuestionnaireById = async (req, res) => {
  const { id } = req.params;

  console.log({ id });

  const response = await getQuestionnaireByIdService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const getQuestionnaireByCode = async (req, res) => {
  const { code } = req.body;

  console.log({ code });

  const response = await getQuestionnaireByCodeService(code);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const getAllQuestionnaires = async (req, res) => {
  const response = await getAllQuestionnairesService();

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

module.exports = {
  createQuestionnaire,
  getQuestionnaireByIdUser,
  deleteQuestionnaire,
  getQuestionnaireById,
  getQuestionnaireByCode,
  getAllQuestionnaires,
};
