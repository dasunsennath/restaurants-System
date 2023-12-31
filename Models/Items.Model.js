const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    title :  { type: String, required: true },
    description :  { type: String, required: true },
    price :  { type: Number, required: true },
    imageURL :  { type: String, required: true },
    category :  {type: String, required: true},
    qty :  { type: Number, required: true },
    customize : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customize',
        required : false      
}],
}, {timestamps: true});






module.exports = mongoose.model('Item', ItemSchema);