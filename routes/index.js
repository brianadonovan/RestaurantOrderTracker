var express = require('express');
var router = express.Router();
var base = process.env.PWD;
var orders = require(base + '/controllers/orders/orders');


router.get('/orders', orders.getOrders);
router.get('/order/:id', orders.getOrder);
router.post('/order/create', orders.createOrder);
router.put('/order/:id', orders.updateOrder);
router.delete('/order/:id', orders.deleteOrder);


/* GET home page. */


module.exports = router;
