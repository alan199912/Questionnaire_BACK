const Questionnaire = require("../models/questionnaire");
const { DEPORTE } = require("./const/DEPORTES");
const { TV } = require("./const/TV");
const { ARTE } = require("./const/ARTE");
const { GEOGRAFIA } = require("./const/GEOGRAFIA");

const initialQuestionnaire = async () => {
  try {
    const arrayQuestionnaires = [DEPORTE, TV, ARTE, GEOGRAFIA];

    arrayQuestionnaires.forEach(async (questionnaire) => {
      const [questionnairesExist] = await Questionnaire.find({
        code: questionnaire.code,
      });

      if (questionnairesExist.code === questionnaire.code) {
        return;
      }

      const quest = new Questionnaire(questionnaire);
      await quest.save();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initialQuestionnaire };
