const mongoose = require('mongoose');
const {PublisherModel} = require('../models/publisher')
const {BookModel} = require('../models/book')



module.exports = {

    getAllBooks : (req, res) => {PublisherModel.find({}, (err, publishers) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            BookModel.find({}, (err, books) => {
                if (err) {
                    res.status(500).render('error',{
                        error: err
                    })
                } 
                else {
                    if (books == undefined || !books) {
                        res.status(404).send("There is no book")
                    }
                    console.log(books);
                    res.status(200).json({
                        books,
                        publishers
                    })
                }
            })
        }
    })},



    getBookById: (req, res) => {PublisherModel.find({}, (err, publisher) => {
        if (err) {
            res.status(500).send(err)
          } 
        else {
            BookModel.findById({_id: req.params.id}, (err, book) => {
                if (err) {
                    res.status(500).render('error',{
                        message: "This Id doen't match a book",
                        error: err.message
                    })
                }
                else {
                    res.status(200).json({
                        book,
                        publisher
                    })
                        
                }
            })
        }
    })},



    addBook: (req, res) => {
        const book = new BookModel({
            title: req.body.title,
            description: req.body.description,
            author: req.params.author,
            publisher : req.body.name
        })
        if (PublisherModel.findOne({name : req.body.name})) {

            if (AuthorModel.findOne({id : req.params.author})) {
                book.save((err, book) => {
                    if (err) {
                        res.status(500).render('error',{
                            message: "Cet article n'a pas pu être sauvegardé",
                            error: err.message
                        })
                    } else {
                        res.status(200).json({
                            book
                        })
                    }
                })
            }
        }
    },



    // updateBook: (req, res) => {
    //     BookModel.updateOne({ _id: req.body.id},{title: req.body.title, description: req.body.description, req.body.author, req.body.publisher}, (err, book) => {
    //         res.json({
    //             book
    //         })
    //     })
    // },  



    deleteBook: (req, res) => {
        BookModel.deleteOne({ id: req.body.id}, (err, book) => {
            res.status(201).send('livre supprimé')
        })
    }    
}