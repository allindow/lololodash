var _ = require("lodash");

var worker = function(towns) {
  return _.forEach(towns, function (town, key, col) {
    if (town.population >= 1) {
      town.size = "big";
    }  else if (town.population < 1 && town.population >= 0.5) {
      town.size = "med";
    }  else if (town.population < 0.5){
      town.size = "small";
    }
  });
};

module.exports = worker;
