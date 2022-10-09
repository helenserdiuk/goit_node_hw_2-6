const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const isValidId = require("../../middlewares/isValidId");

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
router.post("/", ctrlWrapper(ctrl.add));
router.put("/:id", isValidId, ctrlWrapper(ctrl.update));
router.delete("/:id", isValidId, ctrlWrapper(ctrl.remove));
router.patch("/:id/favorite", isValidId, ctrlWrapper(ctrl.updateStatusContact));
module.exports = router;
