const { Schema, model } = require("mongoose");

const QuestionnaireSchema = new Schema({
  idUser: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  code: String,
  createdAt: Date,
  questionData: Array,
});

module.exports = model("Questionnaire", QuestionnaireSchema);
