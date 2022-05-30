const { json } = require('express/lib/response')
const mongoose = require('mongoose')
const {PublisherModel} = require('../models/publisher')
// let date = new Date();
moment = require('moment')

module.exports = {

    getAllPublishers: (req, res) => {
        PublisherModel.find({}, (err, publishers) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            } else {
                console.log(publishers);
                res.status(200).json({
                    publishers
                })
            }
        })
    },


    getPublisherById: (req, res) => {
        PublisherModel.findById({_id: req.params.id}, (err, publisher) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            }
            else {
                console.log(publisher);
                res.status(200).json({
                    publisher
                })
            }
        })
    },


    addPublisher: (req, res) => {
        
        const publisher = new PublisherModel({
            name: req.body.name,
            creationDate: moment().format('Do MMMM YYYY, h:mm:ss a')
        })
        publisher.save((err, publisher) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            } else {
                res.status(201).json({
                    publisher
                })
            }
        })
    },
    // Fonctionne en raw sur postman



    updatePublisher: (req, res) => {
        PublisherModel.updateOne({ _id: req.body.id},{ $set:{name: req.body.firstname}}, (err, publisher) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            }
            else{
                res.json({
                    publisher
                })
            }
        })
    },  

    
    deletePublisher: (req, res) => {
        PublisherModel.findOneAndDelete({ _id: req.params.id}, (err) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Oops une erreur s'est produite",
                    error: err.message
                })
            }
            else {
                res.send(
                    "publisher deleted"
                )
            }
        })
    }
}