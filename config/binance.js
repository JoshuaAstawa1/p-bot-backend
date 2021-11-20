const config = require('config')
const Binance = require('node-binance-api')
const binance = new Binance().options({
    APIKEY: config.get("binance_api.api_key"),
    APISECRET: config.get("binance_api.api_secret")
})

module.exports = binance