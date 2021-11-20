const express = require('express');
const config = require('config');
const SERVER_PORT = config.get("app.port");
const binance = require('./config/binance');
const axios = require('axios');

// Importing the express js module into the application

// Initializing the app using the express module
const app = express() // app instance
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

// Components
// app.use('/dashboard', require('./components/dashboard/routes'))

// Using the app we are configuring the route of "GET" and path is "/"
// app.get('/', (req, res) => {
//     // HISTORICAL
//     binance.candlesticks("BTCUSDT", "1d", (error, ticks, symbol) => {
//         console.info("candlesticks()", ticks);
//         let last_tick = ticks[ticks.length - 1];
//         let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
//         console.info(symbol + " last close: " + close);
//     }, { limit: 500, endTime: 1514764800000 });
//     // res.send("")
// })

app.get('/', (req, res) => {
    // REAL-TIME
    binance.websockets.candlesticks(['BTCUSDT'], "1d", (candlesticks) => {
        let { e: eventType, E: eventTime, s: symbol, k: ticks } = candlesticks;
        let { o: open, h: high, l: low, c: close, v: volume, n: trades, i: interval, x: isFinal, q: quoteVolume, V: buyVolume, Q: quoteBuyVolume } = ticks;
        console.info(symbol + " " + interval + " candlestick update");
        console.info("open: " + open);
        console.info("high: " + high);
        console.info("low: " + low);
        console.info("close: " + close);
        console.info("volume: " + volume);
        console.info("isFinal: " + isFinal);
    });
    // res.send("")
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on: ${SERVER_PORT}`)
})
