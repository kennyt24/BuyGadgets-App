const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,

    },
    LastName:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: false,
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "admin",
    },

    
},
{
    timestamps:  true,
},
)
module.exports = mongoose.model ('User', UserSchema )