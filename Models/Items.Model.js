const mongoose = require('mongoose');
const customizesSchema = require('./Customize.Model').schema;

const ItemSchema = mongoose.Schema({
    title :  { type: String, required: true },
    description :  { type: String, required: true },
    price :  { type: Number, required: true },
    imageURL :  { type: String, required: true },
    category :  {type: String, required: true},
    qty :  { type: Number, required: true },
    customize : [customizesSchema],
}, {timestamps: true});






module.exports = mongoose.model('Item', ItemSchema);