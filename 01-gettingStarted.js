var _ = require("lodash");

var worker = function(users) {
  return _.filter(users, {active: true});
};

module.exports = worker;


var _ = require("lodash");

var worker = function(towns) {
  _.forEach(
    {}
  )
};

module.exports = worker;
