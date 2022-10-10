const { RequestError } = require("../../helpers");
const { Contact, schemas } = require("../../models/contact");

const updateStatusContact = async (req, res, next) => {
  const { error } = schemas.updateFavoriteSchema.validate(req.body);
  if (error) {
    throw RequestError(400, "Missing fields favorite");
  }
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateStatusContact;
