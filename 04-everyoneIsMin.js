var _ = require("lodash");

var worker = function(towns) {
  var temps = {hot: [], warm: []};
  var hotTown, warmTown;
  _.forEach(towns, function (value, key) {
    hotTown = _.every(value, function (temp){
      return temp > 19;
    });
    warmTown = _.some(value, function(temp){
      return temp > 19;
    });
    if (hotTown) {
      temps.hot.push(key);
    }
    if (!hotTown && warmTown) {
      temps.warm.push(key);
    }
  });
  return temps;
};

module.exports = worker;
