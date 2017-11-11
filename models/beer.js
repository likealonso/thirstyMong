const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beers = require('./../controllers/beersController')

const commentSchema = new Schema(
    {
        content: String
    },
    {  
        timestamps: true
    }
)

const beerSchema = new Schema({
    name: String,
    location: String,
    bars: [{type: Schema.Types.ObjectId, ref: 'Beer'}]
},
  {  
      timestamps: true
  }
)


module.exports = beerSchema