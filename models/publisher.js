const {Schema, model} = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

const publisherSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    creationDate : {
        type : String,
    }
})

publisherSchema.plugin(uniqueValidator);

const PublisherModel = model('Publisher', publisherSchema)

module.exports = {PublisherModel};
