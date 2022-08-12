const { default: mongoose } = require("mongoose");
const mongooe=require("mongoose");
const Schema=mongoose.Schema;

const PostSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});
module.exports=mongoose.module("Posts",PostSchema)

