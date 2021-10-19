const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = {
      id,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
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
