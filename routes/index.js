var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')
const authorController = require('../controllers/authorController')
const publisherController = require('../controllers/publisherController')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// Routes Author
router.route('/author').get(authorController.getAllAuthors)
router.route('/author/:id').get(authorController.getAuthorById)
router.route('/author').post(authorController.addAuthor)
router.route('/author/:id').put(authorController.updateAuthor)
router.route('/author/:id').delete(authorController.deleteAuthor)

// router.route('/test').get(authorController.test)


// Routes Publisher
router.route('/publisher').get(publisherController.getAllPublishers)
router.route('/publisher/:id').get(publisherController.getPublisherById)
router.route('/publisher').post(publisherController.addPublisher)
router.route('/publisher/:id').put(publisherController.updatePublisher)
router.route('/publisher/:id').delete(publisherController.deletePublisher)


// Routes Book
router.route('/book').get(bookController.getAllBooks)
router.route('/book/:id').get(bookController.getBookById)
router.route('/book').post(bookController.addBook)
// router.route('/book').put(bookController.updateBook)
router.route('/book/:id').delete(bookController.deleteBook)

module.exports = router;
