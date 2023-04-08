const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
name:{type:String,required:true,minlength:1,maxlength:50},    
email:{type:String,required:true},    
bio:{type:String,minlength:0,maxlength:200},    
},{timestamps:true})
const User=mongoose.model("user",userSchema)
module.exports=User