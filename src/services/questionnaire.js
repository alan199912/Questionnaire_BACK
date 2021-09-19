const Questionnaire = require("../models/questionnaire");
const Answer = require("../models/answer");

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

const saveResultByUserService = async (
  idQuestionnaire,
  participantUserName,
  date,
  corrects,
  inCorrects,
  totalScore,
  listAnswerByUser
) => {
  try {
    const answier = new Answer({
      idQuestionnaire,
      participantUserName,
      date,
      corrects,
      inCorrects,
      totalScore,
      listAnswerByUser,
    });

    console.log({ answier });

    const answierCreated = await answier.save();

    return {
      status: "success",
      answer: answierCreated,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error creating the answer",
    };
  }
};

const getAnswerByIdService = async (_id) => {
  try {
    console.log({ _id });

    const answer = await Answer.findById(_id);

    console.log({ answer });

    if (!answer) {
      return {
        status: "error",
        message: "Answer not found",
      };
    }

    return {
      status: "success",
      answer,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      message: "There was an error searching the answer",
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
        message: "Answer not found",
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
  saveResultByUserService,
  getAnswerByIdService,
  getAllQuestionnairesService,
};
