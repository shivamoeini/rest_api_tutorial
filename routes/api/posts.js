const express=require("express");
const router=express.Router();
// posts Model
const Posts=require("../../models/posts");
//@routes post api/posts
// @desc create an post

router.post('/',(req,res)=>{
  console.log(req.body);

});
module.exports=router;