const { RequestError } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
  });
  res.status(201).json({
    name: result.name,
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
