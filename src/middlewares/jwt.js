const jwt = require("jsonwebtoken");
const config = require("../config/config");

const validateJWT = (req, res, next) => {
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
    req.id = id;

    next();
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      status: "error",
      message: "Token invalid",
    });
  }
};

module.exports = { validateJWT };
