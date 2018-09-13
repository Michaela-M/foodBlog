const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const jsonParser = require('body-parser');

const router = express();

router.get('/', jsonParser, (req, res) => {
    return Food
        .find()
        .then(food => {
            return res.status(200).json(food);
        });   
});

router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['recipeName', 'recipe'];
    for (let i=0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing ${field} in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }
    const item = Food.create(req.body.recipeName, req.body.recipe);
    res.status(201).json(item);
});

module.exports = router;