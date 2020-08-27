const express = require('express');

const routerU = express.Router();

/// getting the schemas
const User = require('../models/userInput');

/// post in db
routerU.post('', (req, res, next) => {
    const userAnswer = new User({
        answers: req.body.answer,
        time: req.body.estimatedTime,
        price: req.body.estimatedPrice,
        name: req.body.usersName,
        email: req.body.usersEmail
    });
    console.log(userAnswer);
    userAnswer.save();
    res.status(201).json({
        message: 'Users answers added succesfully'
    });
});

module.exports = routerU;
