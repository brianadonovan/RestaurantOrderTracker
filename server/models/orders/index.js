var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    orderId: Number,
    orderTime: {type: Date, default: Date.now},
    orderCompleted: {type: Boolean, default: false},
    items: [{
        foodItem: String,
        spiceLevel: Number,
        quantity: Number,
        price: Number,
    }]

});

module.exports = mongoose.model('Order', OrderSchema );