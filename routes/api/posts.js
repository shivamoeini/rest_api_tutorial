const express=require("express");
const router=express.Router();
// posts Model
const Posts=require("../../models/posts");
//@routes Get api/posts
// @desc Get ALL post
router.get('/', async(req,rs)=>{
    try{
const posts=await Posts.find();
if(!posts)throw Error('No Items');
res.status(200).json(posts);
    }catch(err){
res.status(400).json({msg:err})
    }
});




router.post('/',async(req,res)=>{

    const newPost=new Posts(req.body);
    try{
  const post=await newPost.save();
        if(!post) throw Error("Something went wron while saveing the post");
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({msg:err})
    }

});
module.exports=router;