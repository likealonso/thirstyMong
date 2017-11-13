const Beer = require('./../models/beer');

function index(req, res) {
    Beer.find({}, (err, doc) => {
        res.render('./beers/index', { beers: doc })       
    })
}

function show(req,res) {
    Beer.findById(req.params.id, (err, doc) => {
        res.render('./beers/show', { beers: doc })
    })
}

function newBeer(req, res) {
    res.render('./beers/new')
}

function create(req, res) {
    var newBeer = new Beer(req.body)

    if (newBeer.save()) {
        res.redirect('/beers')
    }   else {
        res.render('./beers/new')
    }
}

function newComment (req,res) {
    Beer.findById(req.body.id, (err,doc) => {
        doc.comments.push({
            content: req.body.content
        })
        doc.save((err,doc) => {
            if (err){
                res.render('./beers/show')
            } else {
                res.redirect('/beers/')
            }
        })
    })
}




// function destroy(req,res) {
//     console.log(req.params)
//     Bar.findById(req.params.id, (err,doc) => {
//         doc.beers.id(req.params.beer_id).remove()
//         doc.save()
//         res.redirect('/bars')
//     })
    
// }

// function create (req,res) {
//     Bar.findById(req.body.id, (err,doc) => {
//         doc.beers.push({
//             content: req.body.content,
//             category: req.body.category
//         })
//         doc.save((err,doc) => {
//             if (err){
//                 res.render('./bars/show')
//             } else {
//                 res.redirect('/bars')
//             }
//         })
//     })
// }



module.exports = {
    index,
    new: newBeer,
    create, 
    show,
    newComment
}