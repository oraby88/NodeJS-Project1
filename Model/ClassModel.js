const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id:Number,
    name:String,
    Supervisor:String,
    Childern:Array,

})

module.exports = mongoose.model("class",schema);
