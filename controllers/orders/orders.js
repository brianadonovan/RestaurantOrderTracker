var base = process.env.PWD;
var OrdersTable = require(base + '/models/orders');

var createOrder = function (req, res) {
    var order = new OrdersTable (req.body);

    order.save(function (err, order) {
        if(err) {res.send(500, err);}
        res.json(200, order);
    });
};


var getOrders = function (req, res) {
    OrdersTable.find(function (err, orders){
        if (err) {res.send(500, err);}
        res.json(200, orders);
    });

};

var getOrder = function (req, res) {
    OrdersTable.findById(req.params.id, function (err, order) {
        if(err) {res.send(500, err);}
        res.json(200, order);
    });
};


var updateOrder = function (req, res) {
  OrdersTable.findById(req.params.id, function (err, order){
      if(err) {res.send(500, err);}

      if(req.body.orderCompleted) {order.orderCompleted = req.body.orderCompleted;}

      order.save(function (err, order){
          if(err) {res.send(500, err);}
          res.json(200, order);

      });

  });

};


var deleteOrder = function(req, res) {
    OrdersTable.findByIdAndRemove(req.params.id, function (err, order){
        if(err) {res.send(500, err);}
        res.json(200, {'deleted': true});
    });

};

module.exports = {
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
};