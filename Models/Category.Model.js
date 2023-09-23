
const mongoose = require('mongoose');

const CategoryName ={
    Lunch : "LUNCH",
    Dinner : "DINNER",
    Breakfast : "BREAKFAST",
    Dessert : "DESSERT",
    Drinks : "DRINKS",
    Appetizer : "APPETIZER",
    Main : "MAIN",
    Side : "SIDE",
    Salad : "SALAD",
    Soup : "SOUP",
    Bread : "BREAD",
    Sauce : "SAUCE",
}

const CategorySchema = mongoose.Schema({
    name :  { type: String, required: true, enum: Object.values(CategoryName) },
    description :  { type: String, required: false },
    imageURL :  { type: String, required: true },
}, {timestamps: true});


module.exports = mongoose.model('Category', CategorySchema);