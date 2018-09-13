const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    recipeName: {type: string, required: true},
    recipe: {type: string, required: true}
});

const food = mongoose.model('Food', foodSchema);

module.exports = Food;