const { registerUserService, loginUserService } = require("../services/auth");
const { renewTokenService } = require("../services/jwt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

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
    const { id } = jwt.verify(token, config.JWT_SECRET.secret);
    // req.id = id;

    return res.json({ status: "success", id });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      status: "error",
      message: "Token invalid",
    });
  }
};

module.exports = { registerUser, loginUser, renewToken, getIdByToken };
