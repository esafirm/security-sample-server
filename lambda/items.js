const utils = require('./utils')
const ITEMS = [
    {
        id: 1,
        name: 'HP Jadoel Sekali',
        harga: 3000,
        deskripsi: 'Ini hape jadoel sekali'
    },
    {
        id: 2,
        name: 'HP Jadoel Dua kali',
        harga: 3000,
        deskripsi: 'Ini hape jadoel sekali'
    },
    {
        id: 3,
        name: 'HP Jadoel Tiga kali',
        harga: 3000,
        deskripsi: 'Ini hape jadoel sekali'
    },
    {
        id: 4,
        name: 'HP Jadoel Empat kali',
        harga: 3000,
        deskripsi: 'Ini hape jadoel sekali'
    },
    {
        id: 5,
        name: 'HP Jadoel Lima Kali',
        harga: 3000,
        deskripsi: 'Ini hape jadoel sekali'
    }
]

exports.handler = function (event, context, callback) {
    if (!utils.checkApiKey(event, callback)) return
    if (!utils.checkToken(event, callback)) return

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Success',
            items: ITEMS
        })
    });
}