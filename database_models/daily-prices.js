const { Schema, model } = require('mongoose');

const schema = new Schema({
    type: { type: Schema.Types.String },
    time: { type: Schema.Types.String },
    symbol: { type: Schema.Types.String },
    data: [{
        start_time: { type: Schema.Types.Number },
        close_time: { type: Schema.Types.Number },
        symbol: { type: Schema.Types.String },
        interval: { type: Schema.Types.String },
        open_price: { type: Schema.Types.String },
        close_price: { type: Schema.Types.String },
        high_price: { type: Schema.Types.String },
        low_price: { type: Schema.Types.String },
        baseAssetVolume: { type: Schema.Types.String },
        tradeCount: { type: Schema.Types.Number },
        klineClosed: { type: Schema.Types.Boolean },
        quoteAssetVolume: { type: Schema.Types.String },
        buyBaseVolume: { type: Schema.Types.String },
        buyAssetVolume: { type: Schema.Types.String },
        ignored: { type: Schema.Types.String }
    }],
});

const Model = model('daily_prices', schema, "binance");
module.exports = Model;
