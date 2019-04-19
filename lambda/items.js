const utils = require('./utils')
const ITEMS = [
    {
        id: 1,
        name: 'Sprint Samsung Galaxy S II, Epic 4G Touch',
        harga: 3000,
        deskripsi: "Mohon Wajib Di BACA and Sebelum Order di Fionflanshop -Tolong Bertanya Dulu Sebelum Transaksi Barang yang dipajang belum tentu ada Stock Jam online kami jam 09.00 - 00.00 (Bisa Juga Berubah) Karena kami juga manusia dan punya kesibukan lain, jika kami tidak mambalas diskusi/ pesan Anda,"
    },
    {
        id: 2,
        name: 'Acer Liquid Zest Plus 4s Super',
        harga: 3000,
        deskripsi: 'Mohon Wajib Di BACA and Sebelum Order di Fionflanshop -Tolong Bertanya Dulu Sebelum Transaksi Barang yang dipajang belum tentu ada Stock Jam online kami jam 09.00 - 00.00 (Bisa Juga Berubah) Karena kami juga manusia dan punya kesibukan lain, jika kami tidak mambalas diskusi/ pesan Anda,'
    },
    {
        id: 3,
        name: 'LG G7 ThinQ 256 Beast Mode',
        harga: 3000,
        deskripsi: 'Mohon Wajib Di BACA and Sebelum Order di Fionflanshop -Tolong Bertanya Dulu Sebelum Transaksi Barang yang dipajang belum tentu ada Stock Jam online kami jam 09.00 - 00.00 (Bisa Juga Berubah) Karena kami juga manusia dan punya kesibukan lain, jika kami tidak mambalas diskusi/ pesan Anda,'
    },
    {
        id: 4,
        name: 'HTC ChaCha Evo 11XV',
        harga: 3000,
        deskripsi: 'Mohon Wajib Di BACA and Sebelum Order di Fionflanshop -Tolong Bertanya Dulu Sebelum Transaksi Barang yang dipajang belum tentu ada Stock Jam online kami jam 09.00 - 00.00 (Bisa Juga Berubah) Karena kami juga manusia dan punya kesibukan lain, jika kami tidak mambalas diskusi/ pesan Anda,'
    },
    {
        id: 5,
        name: "Casio G'zOne Commando 10 Evo X",
        harga: 3000,
        deskripsi: 'Mohon Wajib Di BACA and Sebelum Order di Fionflanshop -Tolong Bertanya Dulu Sebelum Transaksi Barang yang dipajang belum tentu ada Stock Jam online kami jam 09.00 - 00.00 (Bisa Juga Berubah) Karena kami juga manusia dan punya kesibukan lain, jika kami tidak mambalas diskusi/ pesan Anda,'
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