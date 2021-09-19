const Questionnaire = require("../models/questionnaire");
const { DEPORTE } = require("./const/DEPORTES");
const { TV } = require("./const/TV");
const { ARTE } = require("./const/ARTE");
const { GEOGRAFIA } = require("./const/GEOGRAFIA");

const initialQuestionnaire = async () => {
  try {
    const arrayQuestionnaires = [DEPORTE, TV, ARTE, GEOGRAFIA];

    arrayQuestionnaires.forEach(async (questionnaire) => {
      const quest = new Questionnaire(questionnaire);
      await quest.save();
    });

    // const questionnaire1 = new Questionnaire(DEPORTE);
    // await questionnaire1.save();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initialQuestionnaire };
