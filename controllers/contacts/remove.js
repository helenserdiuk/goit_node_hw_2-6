const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const remove = async (req, res, next) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findByIdAndDelete(id, owner);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json({
    message: "Contact deleted",
  });
};

module.exports = remove;
