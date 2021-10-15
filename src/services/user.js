const User = require("../models/user");

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

module.exports = { getUserByIdService };
