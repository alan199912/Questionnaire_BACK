const { Schema, model } = require("mongoose");

const AnswerSchema = new Schema({
  idQuestionnaire: [
    {
      type: Schema.Types.ObjectId,
      ref: "Questionnaire",
    },
  ],
  participantUserName: String,
  date: Date,
  corrects: Number,
  inCorrects: Number,
  totalScore: Number,
  listAnswerByUser: Array,
});

module.exports = model("Answer", AnswerSchema);
