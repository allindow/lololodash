var _ = require("lodash");

var worker = function(words) {
  return _.chain(words).map(function(words) {
    return words + "chained";
  }).map(function (words) {
    return words.toUpperCase();
  }).sortBy();
};

module.exports = worker;
