const mongoose = require('mongoose');


const UUID =()=>{
    return Math.floor(Math.random() * 1000000000);
}

const customizesSchema = mongoose.Schema({
    option_id : { type: Number, required: true, unique: true,default: UUID() },
    option :  { type: String, required: true },
    price :  { type: Number, required: true },
});


module.exports = mongoose.model('Customize', customizesSchema);

