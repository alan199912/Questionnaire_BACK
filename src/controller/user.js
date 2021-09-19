const { getUserByIdService } = require("../services/user");

const getUserById = async (req, res) => {
  const { id } = req.params;

  const response = await getUserByIdService(id);

  if (response.status === "error") {
    return res.status(500).send(response);
  }

  return res.json(response);
};

module.exports = { getUserById };
