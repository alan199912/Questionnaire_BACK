const {
  registerUserService,
  loginUserService,
  recoveryPasswordService,
} = require("../services/auth");
const { renewTokenService } = require("../services/jwt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  console.log("CONTROLADOR", { email, username, password });

  const response = await registerUserService(email, username, password);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("CONTROLADOR", { email, password });

  const response = await loginUserService(email, password);

  if (response.status === "error") {
    console.log({ response });
    return res.status(500).send(response);
  }

  return res.json(response);
};

const renewToken = async (req, res) => {
  const uid = req.id;

  const response = await renewTokenService(uid);

  console.log({ response });

  if (response.status === "error") {
    console.log({ response });
    return res.status(500).send(response);
  }

  return res.json(response);
};

const getIdByToken = (req, res, next) => {
  const { token } = req.headers;
  console.log({ token });
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Token not found",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    return res.json({ status: "success", id });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      status: "error",
      message: "Token invalid",
    });
  }
};

const recoveryPassword = async (req, res) => {
  const { email } = req.body;

  const response = await recoveryPasswordService(email);

  if (response.status === "error") {
    console.log({ response });
    // TODO:
    return res.status(500).send(response);
  }

  return res.send(response);
  // res.writeHead(302, {
  //   Location: `http://localhost:4200/auth/recovery-password/${Buffer.from(
  //     email
  //   ).toString("base64")}`,
  // });
  // res.end();
};

module.exports = {
  registerUser,
  loginUser,
  renewToken,
  getIdByToken,
  recoveryPassword,
};
