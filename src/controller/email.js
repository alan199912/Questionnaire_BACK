const { confirmationEmailService } = require("../services/email");

const confirmationEmail = async (req, res) => {
  const { encodeToken } = req.params;

  console.log({ encodeToken });

  const response = await confirmationEmailService(encodeToken);

  if (response.status === "error") {
    console.log({ response });
    // TODO:
    // res.writeHead(302, {
    //   Location: "http://localhost:4200/auth/verify-email-error",
    // });
  }

  res.writeHead(302, {
    Location: "http://localhost:4200/auth/verify-email",
  });
  res.end();
};

module.exports = { confirmationEmail };
