const jwt = require("jsonwebtoken");
const config = require("../config/config");
// const { createQuery } = require("./createQuery");
const User = require("../models/user");

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = {
      id,
    };

    jwt.sign(
      payload,
      config.JWT_SECRET.secret,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error in the token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

const renewTokenService = async (uid) => {
  try {
    // const user = await createQuery(`SELECT * FROM users WHERE id = ${uid};`);
    const user = await User.findById(uid);

    if (!user) {
      return {
        status: "error",
        message: "Unregistered user",
      };
    }

    const token = await generateJWT(uid);

    return {
      status: "success",
      user,
      token,
    };
  } catch (error) {
    console.log({ error });
    return { status: "error", message: "Token no found" };
  }
};

module.exports = {
  generateJWT,
  renewTokenService,
};
