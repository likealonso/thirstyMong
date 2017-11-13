const express = require('express')
const router = express.Router()
const beers = require('./../controllers/beersController')

router.get('/', beers.index);
router.get('/new', beers.new);
router.post('/', beers.create);
router.get('/:id', beers.show);
router.post('/:id/comments', beers.newComment);
// router.delete('/:id', beers.destroy)

module.exports = router