const User=require('../Model/user.model')
// to create a new user.
const createUser=async(req,res)=>{
    try {
        const user=new User(req.body)
        await user.save()
        res.status(200).send({message:user._id,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to retrieve a user by id.
const getUser=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        if(user){
            res.status(200).send({message:user,error:false})
        }
        else{
            res.status(401).send({message:'User not found',error:true})
        }
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to retrieve all users.
const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send({message:users,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to update a user's name or bio by id.
const updateUser=async(req,res)=>{
    try {
        await User.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        res.status(200).send({message:'Updated',error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to delete a user by id.
const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndRemove(req.params.id)
        res.status(200).send({message:'Deleted',error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}

module.exports={createUser,getUser,updateUser,deleteUser,getAllUsers}
