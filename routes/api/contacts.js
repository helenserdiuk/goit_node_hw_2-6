const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const { isValidId, validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));
router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getById));
router.post("/", authenticate, ctrlWrapper(ctrl.add));
router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.update)
);
router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.remove));
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);
module.exports = router;
