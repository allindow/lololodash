var _ = require("lodash");

   var worker = function(comments) {
     var commentCount = [];
     var users = _.groupBy(comments, function (comment) {
       return comment.username;
     });
     _.forEach(users, function(comments, username){
       commentCount.push({username: username, comment_count: _.size(comments)});
     });
     return _.sortBy(commentCount, function(user){
       return 0 - user.comment_count;
     });
   };

   module.exports = worker;
