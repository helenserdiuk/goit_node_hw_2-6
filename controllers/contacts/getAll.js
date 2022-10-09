const { Contact } = require("../../models/contact");

const getAll = async (_, res, next) => {
  const result = await Contact.find({}, "name phone");
  res.status(200).json(result);
};

module.exports = getAll;
