const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    _id:Number,
    name:String
})

//mapping
module.exports = mongoose.model("Teacher",schema);
