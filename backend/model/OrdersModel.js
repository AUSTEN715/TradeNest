const mongoose = require('mongoose');
const {model} = mongoose;

const {OrdersSchema} = require('../schemas/OrdersSchema');

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};