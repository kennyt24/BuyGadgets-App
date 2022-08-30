const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    LaptopName:{
        type: 'string',
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
module.exports = mongoose.model ('admin', AdminSchema )