const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    _id:Number,
    fullname:String,
    username:{type:String,require:true},//unique:true,default:"value"},
    password:String,
    age:Number,
    teacher:Number,
    address:{
        city:String,
        street:String
    }
});
module.exports = mongoose.model("childern",schema);
