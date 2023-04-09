const Post=require('../Model/post.model')
// to create a new post.
const createPost=async(req,res)=>{
    try {
        const post=new Post(req.body)
        await post.save()
        res.status(200).send({message:post._id,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to retrieve a post by id.
const getPost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        if(post){
            res.status(200).send({message:post,error:false})
        }
        else{
            res.status(200).send({message:'Post not found',error:true})
        }
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to retrieve all posts.
const getAllPosts=async(req,res)=>{
    try {
        const posts=await Post.find()
        res.status(200).send({message:posts,error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to update a post's content by id.
const updatePost=async(req,res)=>{
    try {
        await Post.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        res.status(200).send({message:'Updated',error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to delete a post by id.
const deletePost=async(req,res)=>{
    try {
        await Post.findByIdAndRemove(req.params.id)
        res.status(200).send({message:'Deleted',error:false}) 
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to increment the like count of a post by id.
const likePost=async(req,res)=>{
    try {
        await Post.findByIdAndUpdate({_id:req.params.id},{$set:req.body})  
        res.status(200).send({message:'Liked',error:false})
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}
// to decrement the like count of a post by id.
const unlikePost=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id)
        if(post.likes===0){
            res.status(200).send({message:"Can't unlike",error:false})
        }
        else{
            await Post.findByIdAndUpdate({_id:req.params.id},{$set:req.body})  
            res.status(200).send({message:'unliked',error:false})
        }
    } catch (error) {
        res.status(500).send({message:error.message,error:true})
    }
}

module.exports={createPost,getPost,updatePost,deletePost,likePost,unlikePost,getAllPosts}
