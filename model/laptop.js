const mongoose = require('mongoose');
const laptopSchema = new mongoose.Schema({
  
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    LaptopName:{
        type: String,
    },
    model:{
        type:String,
    },
    amount:{
        type:String,
    },
    picture:{
        type:String,
    },     
    
} ,
{
    timestamps: true,
},
)
module.exports = mongoose.model ('Laptop', laptopSchema )