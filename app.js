const express = require('express');
const config = require('config');
const SERVER_PORT = config.get("app.port");
const binance = require('./config/binance');
// const axios = require('axios');
// const moment = require('moment-timezone');

const dailyPricesSchema = require('./database_models/daily-prices')

// Initializing the app using the express module
const app = express() // app instance
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

// Components
// app.use('/dashboard', require('./components/dashboard/routes'))

app.get('/', (req, res) => {
    // Binance websocket stream (BTCUSDT)
    binance.onmessage = async (event) => {
        const klineParsed = JSON.parse(event.data);
        console.log(klineParsed);
        /*
        await dailyPricesSchema.create(
            {
                type: klineParsed.e,
                time: klineParsed.E,
                symbol: klineParsed.s,
                data: {
                    start_time: klineParsed.t,
                    close_time: klineParsed.T,
                    symbol: klineParsed.s,
                    interval: klineParsed.i,
                    open_price: klineParsed.o,
                    close_price: klineParsed.c,
                    high_price: klineParsed.h,
                    low_price: klineParsed.l,
                    baseAssetVolume: klineParsed.v,
                    tradeCount: klineParsed.n,
                    klineClosed: klineParsed.x,
                    quoteAssetVolume: klineParsed.q,
                    buyBaseVolume: klineParsed.V,
                    buyAssetVolume: klineParsed.Q,
                    ignored: klineParsed.B
                }
            })
            .then(() => {
                console.log("Data inserted")
            }).catch((err) => {
                console.log(err)
            });
            */
    }
});

// Using the app we are configuring the route of "GET" and path is "/"
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on: ${SERVER_PORT}`)
})
