const express = require('express');

const routerQ = express.Router();


/// getting the schemas
const Questions = require('../models/questions');

routerQ.get("", (req, res, next) => {
    Questions.find().then(questions => {
        console.log(questions.toString());
        res.status(200).json({
            message: "Questions fetched succesfully",
            json: questions,
        });
    });
});


module.exports = routerQ;
