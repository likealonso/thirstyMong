const Bar = require('./../models/bar');
const Beer = require('./../models/beer')

function index(req, res) {
    Bar.find({}, (err, doc) => {
        res.render('./bars/index', { bars: doc } )
    })
    
}

function show(req, res) {
    Bar.findById(req.params.id).populate('beers').exec((err, doc) => {
        res.render('./bars/show', { bars: doc } )
    })
    
}

function newBar(req, res) {
    res.render('./bars/new')    
}

function create(req, res) {
    var newBar = new Bar(req.body)

    if (newBar.save()) {
        res.redirect('/bars')
    } else {
        res.render('./bars/new')
    }
}

function edit(req, res) {
    Bar.findById(req.params.id, (err, doc) => {
        res.render('./bars/edit', { bars: doc } )
    })
    
}

function update(req, res) {
    Bar.findById(req.params.id, function (err, bar) {
            if (err) console.log('handle err', err)
            if (req.body.name) bar.name = req.body.name
            if (req.body.location) bar.location = req.body.location

            bar.save(function (err, bar) {
                if (err) console.log('handle me ', err)
                res.redirect('/bar')
            })

        });   
}






module.exports = {
    index,
    newBar,
    create,
    show,
    edit,
    update
}