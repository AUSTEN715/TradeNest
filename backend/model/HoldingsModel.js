const mongoose = require('mongoose');
const {model} = mongoose;

const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };