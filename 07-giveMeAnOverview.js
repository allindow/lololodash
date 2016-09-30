var _ = require("lodash");

var worker = function(orders) {
  var grouped = _.groupBy(orders, function(order){
    return order.article;
  });
  var counts = [];
  _.forEach(grouped, function(orders, item){
    counts.push({article: parseInt(item), total_orders: _.reduce(orders, function (sum, order){
      return sum + order.quantity;
    }, 0)});
  });
  return _.sortBy(counts, 'total_orders').reverse();
};

module.exports = worker;
