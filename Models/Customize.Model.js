const mongoose = require('mongoose');



const customizesSchema = mongoose.Schema({
    option :  { type: String, required: true , unique: true},
    price :  { type: Number, required: true },
});


module.exports = mongoose.model('Customize', customizesSchema);

