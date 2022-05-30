const {Schema, model} = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');



const authorSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        unique : true
    },
    lastName : {
        type : String,
        required : true,
        unique : true
    },
    age : {
        type : Number,
        required : true
    }
})

authorSchema.plugin(uniqueValidator);

const AuthorModel = model('Author', authorSchema)

module.exports = {AuthorModel}