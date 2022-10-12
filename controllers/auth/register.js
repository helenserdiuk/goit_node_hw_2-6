const { RequestError, sendMail } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Confirm the registration on contacts application",
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blank">Push to confirm</a>`,
  };

  await sendMail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
    // avatarURL,
    verificationToken: result.verificationToken,
  });
};

module.exports = register;
