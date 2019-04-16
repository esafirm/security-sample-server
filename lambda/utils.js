const API_KEY = "12345"

exports.checkApiKey = (event, callback) => {
    const apiKey = event.queryStringParameters.apiKey
    if (apiKey !== API_KEY) {
        callback(null, {
            statusCode: 401,
            body: JSON.stringify({
                message: "No Access!"
            })
        })
        return false
    }
    return true
}

exports.checkToken = (event, callback) => {
    const token = event.queryStringParameters.token
    if (!token) {
        callback(null, {
            statusCode: 401,
            body: JSON.stringify({
                message: "You're not authorized to access this API"
            })
        })
        return false
    }
    return true
}