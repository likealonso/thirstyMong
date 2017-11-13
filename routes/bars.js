var express = require('express');
var router = express.Router();
var bars = require('./../controllers/barsController');

/* GET home page. */
router.get('/', bars.index);
router.get('/new', bars.newBar);
router.post('/', bars.create)
router.get('/:id', bars.show)
router.get('/:id/edit', bars.edit)
router.put('/:id', bars.update);



module.exports = router;
