const asyncHandler = require("express-async-handler");

const CompoundsModel = require("../model/CompoundModel");

// get all compounds
const getCompounds = asyncHandler(async (req, res) => {
  const Compounds = await CompoundsModel.find({});
  res.status(200).json(Compounds);
});

// put a new compound
const putCompound = asyncHandler(async (req, res) => {
  const newCompound = await CompoundsModel.create(req.body);

  res.status(200).json(newCompound);
});

module.exports = {
  getCompounds,
  putCompound,
};
