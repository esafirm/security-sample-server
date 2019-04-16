const utils = require('./utils')

exports.handler = function (event, context, callback) {
    if (!utils.checkApiKey(event, callback)) return
    if (!utils.checkToken(event, callback)) return

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Success',
        })
    });
}