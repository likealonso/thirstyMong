const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beers = require('./../controllers/beersController')


const beerSchema = new Schema({
    name: String,
    location: String,
    bars: [{type: Schema.Types.ObjectId, ref: 'Bar'}]
},
  {  
      timestamps: true
  }
)


module.exports = router