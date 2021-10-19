const jwt = require("jsonwebtoken");
const User = require("../models/user");

const confirmationEmailService = async (token) => {
  const { id } = await jwt.verify(token, process.env.JWT_SECRET);
  console.log({ id });
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { status: 1 },
      { new: true, upsert: true, rawResult: true }
    );

    console.log({ user });

    if (user.status === 0) {
      return {
        status: "error",
        message: "We have problems to verify the confrimation",
      };
    }

    return {
      status: "success",
      message: "Change status",
    };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "There was an error creating the user" };
  }
};

module.exports = {
  confirmationEmailService,
};
