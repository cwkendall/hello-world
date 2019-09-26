exports.handler = function(context, event, callback) {
  callback(null, process.env.GREETING + ', ' + process.env.RECIPIENT);
};
