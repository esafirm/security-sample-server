// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }

const utils = require('./utils')

exports.handler = function (event, context, callback) {
    if (utils.checkApiKey(event, callback)) {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                token: "123aisd891u2j3hkjhXXXZZ",
            })
        });
    }
}