exports.handler = function(context, event, callback) {
  callback(null, context.GREETING + ', ' + context.RECIPIENT);
};
