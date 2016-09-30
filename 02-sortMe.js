var _ = require("lodash");

var worker = function(articles) {
  var sorted = _.sortBy(articles, 'quantity');
  return sorted.reverse();
};

module.exports = worker;
