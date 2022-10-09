const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  // const result = await Contact.findOne({ _id: id });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = getById;
