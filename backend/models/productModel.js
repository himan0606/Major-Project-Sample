const { model, Schema } = require('../connection');

const mySchema = new Schema({
    brand : String,
    model : String,
    colors : String,
    description: String,
    rating: {type : Number, default: 0},
    image: String,
    price : Number,
    createdAt: {type : Date, default: Date.now}
});

module.exports = model( 'product', mySchema );