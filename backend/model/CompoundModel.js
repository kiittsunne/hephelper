const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
  journal: {
    type: String,
    required: [true, "Please include publication journal"],
  },
  year: {
    type: String,
    required: [true, "Please include publication year"],
  },
  volume: {
    type: String,
    required: [true, "Please include publication volume"],
  },
  pageNumber: {
    type: String,
    required: [true, "Please include publication page numbers"],
  },
});

const compoundSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Compound name missing"],
      unique: true,
    },
    abbreviation: {
      type: String,
      required: [true, "Compound abbreviation missing"],
    },
    chemicalFormula: {
      type: String,
      required: [true, "Compound chemical formula missing"],
    },
    hep: {
      type: String,
      required: [true, "Compound HEP missing"],
    },
    publication: {
      type: publicationSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Compounds", compoundSchema);
