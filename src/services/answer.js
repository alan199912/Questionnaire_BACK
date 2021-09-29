const Answer = require("../models/answer");

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

const getAnswerByIdQuestionnaireService = async (idQuestionnaire) => {
  try {
    const answer = await Answer.find({ idQuestionnaire });

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
    console.log(error);
    return {
      status: "error",
      message: "There was an error searching the answer",
    };
  }
};

const deleteAnswerService = async (id) => {
  try {
    const answer = await Answer.findByIdAndRemove(id);

    if (!answer) {
      return {
        status: "error",
        message: "Answer not found",
      };
    }

    return {
      status: "success",
      message: "Answer deleted successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error deleting the answer",
    };
  }
};

module.exports = {
  saveResultByUserService,
  getAnswerByIdService,
  getAnswerByIdQuestionnaireService,
  deleteAnswerService,
};
