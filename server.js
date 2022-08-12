const express=require('express');
const mongoose =require('mongoose');
const{ MOUNGO_URI}=require('./config')

// routes
const postsRoutes=require("./routes/api/posts")
const app=express();
// connect to mongodb
mongoose.connect( MOUNGO_URI,{
    useNewUrlparser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("mongoDB connected!"))
.catch(err=>console.log(err));
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server run at port ${PORT} `))