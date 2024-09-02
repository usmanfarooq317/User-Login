const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },

}, {Timestamp: true});

module.exports = mongoose.model("User", UserSchema);