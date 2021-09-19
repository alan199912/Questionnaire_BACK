const mysql = require("mysql");
const config = require("../config/config");

const createQuery = (query) => {
  console.log("createQuery", { query });
  return new Promise(async (resolve, reject) => {
    const connection = mysql.createConnection({
      host: config.DATABASE.HOST,
      database: config.DATABASE.DBNAME,
      user: config.DATABASE.USER,
      password: config.DATABASE.PASSWORD,
    });

    try {
      await connection.query(query, (error, result) => {
        console.log("here", { result });
        if (error) {
          console.log(error.message);
          connection.end(() => {
            return reject(error.message);
          });
        }

        if (!result) {
          connection.end(() => {
            return reject(result);
          });
        }
        connection.end(() => {
          return resolve(result);
        });
      });
    } catch (error) {
      connection.end(() => {
        return reject(error.message);
      });
    }
  });
};

module.exports = { createQuery };
