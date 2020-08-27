const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    answers : [],
    time :  Number,
    price : Number,
    name :  String,
    email : String
});

module.exports = mongoose.model('User', userSchema);