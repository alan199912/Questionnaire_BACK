const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const getUserByIdService = async (id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return { status: "error", message: "User not found" };
    }

    return {
      status: "success",
      user,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error searching the user",
    };
  }
};

const updatePasswordService = async (id, password) => {
  const salt = bcryptjs.genSaltSync(); //  Crypting password

  const passwordEncrypted = bcryptjs.hashSync(password, salt);

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { password: passwordEncrypted },
      { new: true, upsert: true, rawResult: true }
    );

    if (!user) {
      return { status: "error", message: "User not found" };
    }

    if (user.status === 0) {
      return { status: "error", message: "User not confirmed" };
    }

    return {
      status: "success",
      message: "Password changed successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "There was an error searching the user",
    };
  }
};

module.exports = { getUserByIdService, updatePasswordService };
