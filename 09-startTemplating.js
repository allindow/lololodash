var _ = require("lodash");

var worker = function(user) {
  var set = _.template("Hello ${user.name} (logins: ${user.login.length})");
  return set({user: user});
};

module.exports = worker;
