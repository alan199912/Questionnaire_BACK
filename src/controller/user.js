const {
  getUserByIdService,
  updatePasswordService,
} = require("../services/user");

const getUserById = async (req, res) => {
  const { id } = req.params;

  const response = await getUserByIdService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const response = await updatePasswordService(id, password);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

module.exports = { getUserById, updatePassword };
