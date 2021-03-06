const Questionnaire = require("../models/questionnaire");

const createQuestionnaireService = async (
  idUser,
  title,
  description,
  code,
  numberQuestions,
  questionData,
  createdAt
) => {
  try {
    const questionnaire = new Questionnaire({
      idUser,
      title,
      description,
      code,
      numberQuestions,
      questionData,
      createdAt,
    });

    console.log({ questionnaire });

    const questionnaireCreated = await questionnaire.save();

    return {
      status: "success",
      questionnaire: questionnaireCreated,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error creating the questionnaire",
    };
  }
};

const getQuestionnaireByIdUserService = async (idUser) => {
  try {
    const questionnaire = await Questionnaire.find({ idUser });

    console.log({ questionnaire });

    if (!questionnaire) {
      return {
        status: "error",
        message: "Questionnaire not found",
      };
    }

    return {
      status: "success",
      questionnaire,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error searching the questionnaire",
    };
  }
};

const deleteQuestionnaireService = async (id) => {
  try {
    const questionnaire = await Questionnaire.findByIdAndRemove(id);

    if (!questionnaire) {
      return {
        status: "error",
        message: "Questionnaire not found",
      };
    }

    console.log({ questionnaire });

    if (!questionnaire) {
      return {
        status: "error",
        message: "Questionnaire not found",
      };
    }

    return {
      status: "success",
      message: "Questionnaire deleted successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error deleting the questionnaire",
    };
  }
};

const getQuestionnaireByIdService = async (_id) => {
  try {
    const questionnaire = await Questionnaire.findById(_id);

    console.log({ questionnaire });

    if (!questionnaire) {
      return {
        status: "error",
        message: "Questionnaire not found",
      };
    }

    return {
      status: "success",
      questionnaire,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error searching the questionnaire",
    };
  }
};

const getQuestionnaireByCodeService = async (code) => {
  try {
    const [questionnaire] = await Questionnaire.find({ code });

    console.log({ questionnaire });

    if (!questionnaire) {
      return {
        status: "error",
        message: "Questionnaire not found",
      };
    }

    return {
      status: "success",
      questionnaire,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error searching the questionnaire",
    };
  }
};

const getAllQuestionnairesService = async () => {
  try {
    const questionnaire = await Questionnaire.find();

    console.log({ questionnaire });

    if (!questionnaire) {
      return {
        status: "error",
        message: "Questionnaire not found",
      };
    }

    return {
      status: "success",
      questionnaire,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: "There was an error creating the questionnaire",
    };
  }
};

module.exports = {
  createQuestionnaireService,
  getQuestionnaireByIdUserService,
  deleteQuestionnaireService,
  getQuestionnaireByIdService,
  getQuestionnaireByCodeService,
  getAllQuestionnairesService,
};
