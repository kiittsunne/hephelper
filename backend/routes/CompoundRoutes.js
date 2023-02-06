const express = require("express");
const router = express.Router();
const {
  getCompounds,
  putCompound,
} = require("../controllers/CompoundControllers");

router.route("/").get(getCompounds).put(putCompound);

module.exports = router;
