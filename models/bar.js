const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Bar = require('./beer')

const barSchema = new Schema({
    name: String,
    location: String,
    beers: [{type: Schema.Types.ObjectId, ref: 'Beer'}]
},
  {  
      timestamps: true
  }
)


module.exports = mongoose.model('Bar', barSchema)