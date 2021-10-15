// const { createQuery } = require("./createQuery");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("./jwt");
const User = require("../models/user");
const config = require("../config/config");

const registerUserService = async (email, username, password) => {
  const salt = bcryptjs.genSaltSync(); //  Crypting password

  const passwordEncrypted = bcryptjs.hashSync(password, salt);

  console.log("SERVICIO", { email, username, passwordEncrypted });

  try {
    const user = new User({
      email,
      username,
      password: passwordEncrypted,
    });

    const userCreated = await user.save();

    return {
      status: "success",
      message: "User created successfully",
    };
  } catch (error) {
    return { status: "error", message: "There was an error creating the user" };
  }
};

const loginUserService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });

    console.log(user);

    if (!user) {
      return {
        status: "error",
        message: "Unregistered user",
      };
    }

    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      console.log({ error: "INVALID PASSWORD" });
      return {
        status: "error",
        message: "Password is incorrect",
      };
    }

    const token = await generateJWT(user._id);

    return {
      status: "success",
      user,
      token,
    };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "There was an error loading the user" };
  }
};

module.exports = { registerUserService, loginUserService };
