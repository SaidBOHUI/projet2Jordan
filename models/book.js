const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
    title : {
        required : true,
        type : String
    },
    description : {
        required : true,
        type : String
    },
    publicationDate : {
        type : Date,
        required : true
    },
    author: {
        type:  Schema.Types.ObjectId,
        ref: 'Author'
    },
    publisher: {
        type:  Schema.Types.ObjectId,
        ref: 'Publisher'
    }
})

const BookModel = model('Book', bookSchema )

module.exports = {BookModel}