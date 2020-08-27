const mongoose = require ('mongoose');


const questionsSchema = mongoose.Schema({
  headlines:  [
    {
        title: String,
        question : String
    }
                   ],
pages: [
    [
        {
            id : Number,
            name : String,
            price : Number,
            estimated : Number,
            chosen : Boolean,
            showSubmitButton : Boolean,
            radio : Boolean
        }
    ]
]
});

module.exports = mongoose.model('Questions', questionsSchema);