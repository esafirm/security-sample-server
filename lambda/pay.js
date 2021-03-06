const utils = require('./utils')

exports.handler = function (event, context, callback) {
    if (!utils.checkApiKey(event, callback)) return
    if (!utils.checkToken(event, callback)) return

    const itemId = event.queryStringParameters.itemId
    if (!itemId) {
        callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: 'wrong parameter'
            })
        })
        return
    }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'success',
        })
    });
}