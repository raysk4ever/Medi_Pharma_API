const mongoose = require("mongoose");
const Joi = require("joi");

const reportSchema = new mongoose.Schema({
  //name address contact: email, phone
  //reaction
  // Product name, Brand, batch#, Lot#, Strength, dose, other info
  //when event occour date/time

  /*===============Contact Person===========================*/
  name: {
    type: String,
    required: true,
    min: 3
  },
  email: {
    type: String,
    required: true,
    min: 3
  },
  phone: {
    type: Number,
    required: true,
    min: 10
  },
  address: {
    type: String,
    required: true
  },

  /*============================Product Info =============================*/

  productName: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  lot: {
    type: String,
    required: true
  },
  strength: {
    type: String,
    required: true
  },
  dose: {
    type: String,
    required: true
  },
  otherInfo: {
    type: String
  },

  /*========================reaction=========================== */

  reactionType: {
    type: Array,
    required: true
  },
  reactionInfo: {
    type: String
  },

  /*=======================date/time===========================*/

  dateOccur: {
    type: String,
    required: true
  },
  timeOccur: {
    type: String,
    required: true
  }
});

const Report = mongoose.model("reports", reportSchema);

function validateReport(report) {
  const Schema = {
    /*=============PERSON====================*/

    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .email()
      .min(3)
      .required(),
    phone: Joi.number()
      .min(10)
      .required(),
    address: Joi.string().required(),

    /*=============MEDICINE====================*/

    productName: Joi.string().required(),
    brand: Joi.string().required(),
    lot: Joi.string().required(),
    strength: Joi.string().required(),
    dose: Joi.string().required(),
    batch: Joi.string().required(),
    otherInfo: Joi.string(),

    /*=============REACTION====================*/

    reactionType: Joi.array().required(),
    reactionInfo: Joi.string(),

    /*=============DATE/time====================*/

    dateOccur: Joi.string().required(),
    timeOccur: Joi.string().required()
  };

  return Joi.validate(report, Schema);
}

exports.Report = Report;
exports.validate = validateReport;
