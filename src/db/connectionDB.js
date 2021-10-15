const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/questionnaire_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB create successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConnect,
};
// module.exports = connection;
