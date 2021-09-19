// const mysql = require("mysql");
// const config = require("../config/config");

// const connection = mysql.createConnection({
//   host: config.DATABASE.HOST,
//   database: config.DATABASE.DBNAME,
//   user: config.DATABASE.USER,
//   password: config.DATABASE.PASSWORD,
// });

// connection.connect((error) => {
//   if (error) {
//     console.log(`Connection error: ${error}`);
//     return;
//   }

//   console.log("Database connection successfully");
// });

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
