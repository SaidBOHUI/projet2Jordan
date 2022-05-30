const mongoose = require('mongoose')
const {AuthorModel} = require('../models/author')

module.exports = {

    getAllAuthors: (req, res) => {
        AuthorModel.find({}, (err, authors) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            } else {
                console.log(authors);
                res.status(200).json({
                    authors
                })
            }
        })
    },


    getAuthorById: (req, res) => {
        AuthorModel.findById({_id: req.params.id}, (err, author) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            }
            else {
                console.log(author);
                res.status(200).json({
                    author
                })
            }
        })
    },


    addAuthor: (req, res) => {
        
        const author = new AuthorModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        })
        console.log(req);
        author.save((err, author) => {
            if (err) {
                console.log('error');
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            } else {
                res.status(201).json({
                    author
                })
            }
        })
    },


    updateAuthor: (req, res) => {
        AuthorModel.updateOne({ _id: req.params.id},{ $set: { "firstName": req.body.firstname, "lastName": req.body.lastname, "age": req.body.age }}, (err, author) => {
            if (err) {
                console.log('error');
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            } else {
                console.log(author);
                res.status(201).send(
                    'author updated'
                )
            }
        })
    },  

    
    deleteAuthor: (req, res) => {
        AuthorModel.findOneAndDelete({_id: req.params.id}, (err, author) => {
            if (err) {
                res.status(500).render('error',{
                    error: err
                })
            }
            else {
                res.status(201).send('Auteur supprimé')
            }
        })
    },

    // test : (req, res) => {
    //     res.send('test')
    // },
}

